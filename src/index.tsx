import React, { useMemo } from 'react'
import { addressHashedEmoji, addressHashedColorIndex, colors } from './utils'
import * as styles from './index.css'

export type ENSAvatarProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  avatar?: string
  address: string
  domain?: string
  emojiIconProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
}

const EmojiIcon = ({
  address,
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & { address: string }) => {
  const { color, emoji } = useMemo(() => {
    return {
      color: colors[addressHashedColorIndex(address) ?? 0],
      emoji: addressHashedEmoji(address)
    }
  }, [address])

  return (
    <span className={`${styles.emojiIcon} ${className || ''}`} style={{ backgroundColor: color }} {...props}>
      {emoji}
    </span>
  )
}

export const ENSAvatar = ({
  avatar,
  address,
  domain,
  alt,
  height = 42,
  width = 42,
  emojiIconProps,
  ...props
}: ENSAvatarProps) => {
  return (
    <>
      {avatar ? (
        <img
          src={`https://metadata.ens.domains/mainnet/avatar/${domain}`}
          alt={alt || domain}
          {...{ height, width }}
          {...props}
        />
      ) : (
        <EmojiIcon {...{ address }} {...emojiIconProps} />
      )}
    </>
  )
}
