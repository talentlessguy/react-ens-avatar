import React from 'react';
export declare type ENSAvatarProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
    avatar?: string;
    address: string;
    domain?: string;
    emojiIconProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
};
export declare const ENSAvatar: ({ avatar, address, domain, alt, height, width, emojiIconProps, ...props }: ENSAvatarProps) => JSX.Element;
