import React from 'react';

import s from './Column.scss';

export interface IColumn {
  title: string;
}

export const Column: React.FC<IColumn> = ({title}) => {

  return (
    <div className={s.container}>

      <div className={s.header}>
        <div className={s.title}>{title}</div>
      </div>

      <div className={s.body}>

      </div>

    </div>
  );
};
