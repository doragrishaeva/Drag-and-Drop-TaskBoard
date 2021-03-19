import { action, observable, makeObservable } from 'mobx';

import { ICard } from '@/components';

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
  cards: ICard[];

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
  submitCard = (title: string, desc: string, deadline: string) => {
    console.log('Title:', title);
    console.log('Description:', desc);
    console.log('Deadline:', deadline);
  }

  makeNewCard = () => {
    // здесь создаем объект с новой таской по типу ICard и добавляем в массив с имеющимися тасками уже
  }
};

export const cardStore = new CardStore();
