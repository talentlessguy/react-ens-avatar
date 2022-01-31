import esbuild from 'esbuild'
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin'
import autoprefixer from 'autoprefixer'
import postcss from 'postcss'

const externals = {
  name: 'make-all-packages-external',
  setup(build) {
    let filter = /^[^./]|^\.[^./]|^\.\.[^/]/ // Must not start with "/" or "./" or "../"
    build.onResolve({ filter }, (args) => ({ external: true, path: args.path }))
  }
}

async function processCss(css) {
  const result = await postcss([autoprefixer]).process(css, {
    from: undefined // suppress source map warning
  })

  return result.css
}

const vanillaExtract = ({ identifiers = 'debug' } = {}) =>
  vanillaExtractPlugin({
    identifiers,
    processCss
  })

esbuild
  .build({
    bundle: true,
    entryPoints: ['./src/index.tsx'],
    format: 'esm',
    outdir: 'dist',
    platform: 'browser',
    target: 'es2021',
    plugins: [
      vanillaExtract({
        identifiers: 'short'
      }),
      externals
    ]
  })
  .catch(() => process.exit(1))
