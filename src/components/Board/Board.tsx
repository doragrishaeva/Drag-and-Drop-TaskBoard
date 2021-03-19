import React from 'react';

import { columnStore, ColumnStore } from '@/stores/Column/Column.store';
import { Column } from '@/components';

import s from './Board.scss';


export const Board: React.FC = () => {
  const { columns }: ColumnStore = columnStore;

  return (
    <div className={s.container}>
      {columns.map(column => {
        return <Column key={column.id} title={column.title} />
      })}
    </div>
  );
};
