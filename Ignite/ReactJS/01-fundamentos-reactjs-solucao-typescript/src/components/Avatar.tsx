import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';

type TAvatarProps = ImgHTMLAttributes<HTMLImageElement> & {
  hasBorder?: boolean,
};

export function Avatar({ hasBorder = true, ...rest }: TAvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  );
}
