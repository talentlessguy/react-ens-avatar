/**
 * Code is borrowed from https://github.com/rainbow-me/rainbow/blob/develop/src/utils/profileUtils.ts
 */

export const colors = [
  '#FC5C54',
  '#FFD95A',
  '#E95D72',
  '#6A87C8',
  '#5FD0F3',
  '#75C06B',
  '#FFDD86',
  '#5FC6D4',
  '#FF949A',
  '#FF8024',
  '#9BA1A4',
  '#EC66FF',
  '#FF8CBC',
  '#FF9A23',
  '#C5DADB',
  '#A8CE63',
  '#71ABFF',
  '#FFE279',
  '#B6B1B6',
  '#FF6780',
  '#A575FF',
  '#4D82FF',
  '#FFB35A'
]

// avatars groups emojis with their respective color backgrounds in the `avatarBackgrounds` object in colors.js
export const avatars = [
  { colorIndex: 0, emoji: '🌶' },
  { colorIndex: 1, emoji: '🤑' },
  { colorIndex: 2, emoji: '🐙' },
  { colorIndex: 3, emoji: '🫐' },
  { colorIndex: 4, emoji: '🐳' },
  { colorIndex: 0, emoji: '🤶' },
  { colorIndex: 5, emoji: '🌲' },
  { colorIndex: 6, emoji: '🌞' },
  { colorIndex: 7, emoji: '🐒' },
  { colorIndex: 8, emoji: '🐵' },
  { colorIndex: 9, emoji: '🦊' },
  { colorIndex: 10, emoji: '🐼' },
  { colorIndex: 11, emoji: '🦄' },
  { colorIndex: 12, emoji: '🐷' },
  { colorIndex: 13, emoji: '🐧' },
  { colorIndex: 8, emoji: '🦩' },
  { colorIndex: 14, emoji: '👽' },
  { colorIndex: 0, emoji: '🎈' },
  { colorIndex: 8, emoji: '🍉' },
  { colorIndex: 1, emoji: '🎉' },
  { colorIndex: 15, emoji: '🐲' },
  { colorIndex: 16, emoji: '🌎' },
  { colorIndex: 17, emoji: '🍊' },
  { colorIndex: 18, emoji: '🐭' },
  { colorIndex: 19, emoji: '🍣' },
  { colorIndex: 1, emoji: '🐥' },
  { colorIndex: 20, emoji: '👾' },
  { colorIndex: 15, emoji: '🥦' },
  { colorIndex: 0, emoji: '👹' },
  { colorIndex: 17, emoji: '🙀' },
  { colorIndex: 4, emoji: '⛱' },
  { colorIndex: 21, emoji: '⛵️' },
  { colorIndex: 17, emoji: '🥳' },
  { colorIndex: 8, emoji: '🤯' },
  { colorIndex: 22, emoji: '🤠' }
]

export const popularEmojis = avatars.map((avatar) => avatar.emoji)
export const emojiColorIndexes = avatars.map((avatar) => avatar.colorIndex)

const emojiCount = avatars.length

export function hashCode(text: string) {
  let hash = 0
  if (text.length === 0) return hash
  for (let i = 0; i < text.length; i++) {
    const chr = text.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0
  }
  return hash
}

function addressHashedIndex(address: string | null) {
  if (address == null) return null
  return Math.abs(hashCode(address.toLowerCase()) % emojiCount)
}

export function addressHashedColorIndex(address: string | null) {
  if (address == null) return null
  return emojiColorIndexes[Math.abs(hashCode(address.toLowerCase()) % emojiCount)]
}

export function addressHashedEmoji(address: string | null) {
  const index = addressHashedIndex(address)
  if (index == null) return null
  return popularEmojis[index]
}
