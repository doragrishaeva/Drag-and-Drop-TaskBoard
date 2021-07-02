import React from 'react';

import { IColumn } from '@/components';

import s from './Card.scss';

export interface ICard {
  id?: number;
  title?: string;
  desc?: string;
  deadline?: string;
  color?: string;
  state?: number;
}

export const Card: React.FC<ICard> = ({ color, title }) => {

  const styles = [s.card, s[`card${color}`]];


  return (
    <div className={styles.join(' ')}>
      <div className={s.title}>{title}</div>
    </div>
  );
};
