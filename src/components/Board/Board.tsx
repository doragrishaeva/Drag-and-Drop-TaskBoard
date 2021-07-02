import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { cardStore, CardStore, columnStore, ColumnStore } from '@/stores';
import { Column } from '@/components';

import s from './Board.scss';



export const Board: React.FC = () => {
  const { columns }: ColumnStore = columnStore;
  const { updateCardState }: CardStore = cardStore;

  const onDragEnd = (result) => {
    if (!result.destination) return;

    updateCardState(result.draggableId, result.destination.droppableId);
  };

  return (
    <div className={s.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map(column => {
          return (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
            />
          )
        })}
      </DragDropContext>
    </div>
  );
};
