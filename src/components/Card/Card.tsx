import React from 'react';

import s from './Card.scss';

export interface ICard {
  color?: string;
  title?: string;
  id?: number;
  column?: number;
  description?: string;
  deadline?: string;
}

export const Card: React.FC<ICard> = ({ color, title }) => {

  const styles = [s.card, s[`card${color}`]];
  console.log(color)

  return (
    <div className={styles.join(' ')}>
      <div className={s.title}>{title}</div>
    </div>
  );
};
