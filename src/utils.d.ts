/**
 * Code is borrowed from https://github.com/rainbow-me/rainbow/blob/develop/src/utils/profileUtils.ts
 */
export declare const colors: string[];
export declare const avatars: {
    colorIndex: number;
    emoji: string;
}[];
export declare const popularEmojis: string[];
export declare const emojiColorIndexes: number[];
export declare function hashCode(text: string): number;
export declare function addressHashedColorIndex(address: string | null): number;
export declare function addressHashedEmoji(address: string | null): string;
