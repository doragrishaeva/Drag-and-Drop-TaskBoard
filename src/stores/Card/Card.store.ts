import { action, observable, makeObservable } from 'mobx';

import { columns, ICard, IColumn } from '@/components';

export enum ColorLabels {
  Yellow = 'Yellow',
  Blue = 'Blue',
  Pink = 'Pink',
  Green = 'Green',
  Gray = 'Gray',
  Red = 'Red',
}

export class CardStore {

  @observable
  color: ColorLabels = ColorLabels.Yellow;

  @observable
  title: string = null;

  @observable
  cards: ICard[] = JSON.parse(sessionStorage.getItem('cards')) || [];

  colors = [
    {id: 1, color: ColorLabels.Yellow},
    {id: 2, color: ColorLabels.Blue},
    {id: 3, color: ColorLabels.Pink},
    {id: 4, color: ColorLabels.Green},
    {id: 5, color: ColorLabels.Gray},
    {id: 6, color: ColorLabels.Red}
  ];

  constructor() {
    makeObservable(this);
  }

  @action
  setActiveColor = (color: ColorLabels) => {
    this.color = color;
  }

  @action
  submitCard = (title: string, desc: string, deadline: string ) => {
    const card = {
      id: this.cards.length + 1,
      title: title,
      desc: desc,
      deadline: deadline,
      color: this.color,
      state: columns[0].id
    } as ICard;

    this.cards.push(card);
    sessionStorage.setItem('cards', JSON.stringify(this.cards));
    console.log(JSON.parse(sessionStorage.getItem('cards')));
  }

  @action
  updateCardState = (draggableId: number, droppableId: number) => {
    let card = this.cards.find(item => item.id === Number(draggableId));
    card.state = Number(droppableId);

    sessionStorage.setItem('cards', JSON.stringify(this.cards));
  }

};

export const cardStore = new CardStore();
