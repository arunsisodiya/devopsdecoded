import { kebabCase } from 'lodash';

import type { TwemojiProps } from '@/types/index';

export function Twemoji({ emoji, size = 'twa-sg', className }: TwemojiProps) {
  const cls = `inline-block twa ${size} twa-${kebabCase(emoji)} ${className || ''}`;

  return <i className={cls.trim()} />;
}

export default Twemoji;
