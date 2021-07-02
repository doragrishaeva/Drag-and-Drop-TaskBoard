import { action, observable, makeObservable } from 'mobx';

export class ColumnStore {

  columns: { id: number, title: string }[] = [
    { id: 1, title: 'Backlog' },
    { id: 2, title: 'To do' },
    { id: 3, title: 'Doing' },
    { id: 4, title: 'Done' }
  ];

  @observable
  column: { id: number, title: string } = null;

  constructor() {
    makeObservable(this);
  }
};

export const columnStore = new ColumnStore();
