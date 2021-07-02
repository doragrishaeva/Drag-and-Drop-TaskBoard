import React from 'react';
import { observer } from 'mobx-react-lite';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { Card } from '@/components';
import { cardStore, CardStore } from '@/stores';

import s from './Column.scss';

export interface IColumn {
  id: number
  title: string;
}

export const columns: { id: number, title: string } [] = [
  { id: 1, title: 'Backlog' },
  { id: 2, title: 'To do' },
  { id: 3, title: 'Doing' },
  { id: 4, title: 'Done' }
];

export const Column: React.FC<IColumn> = observer(({ id, title }) => {
  const { cards }: CardStore = cardStore;

  console.log('render')

  return (
    <div className={s.container}>

      <div className={s.header}>
        <div className={s.title}>{title}</div>
      </div>

      <Droppable droppableId={String(id)} key={id}>
        {(provided, snapshot) => (
          <div
            className={s.body}
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              borderLeft: snapshot.isDraggingOver ? '2.5px dashed rgba(66, 118, 125, 0.8)' : '',
              borderRight: snapshot.isDraggingOver ? '2.5px dashed rgba(66, 118, 125, 0.8)' : '',
            }}
          >
            {cards.map((card, index) => {
              return id === card.state &&
                <Draggable key={card.id} draggableId={String(card.id)} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        ...provided.draggableProps.style,
                        border: snapshot.isDragging ? '2.5px dashed rgba(66, 118, 125, 0.8)' : '',
                        height: '114px',
                        width: '115px'

                      }}
                    >
                      <Card
                        id={card.id}
                        title={card.title}
                        desc={card.desc}
                        deadline={card.deadline}
                        color={card.color}
                        state={card.state}
                      />
                    </div>
                  )}
                </Draggable>
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
});
