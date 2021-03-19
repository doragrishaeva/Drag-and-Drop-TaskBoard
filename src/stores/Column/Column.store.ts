import { action, observable, makeObservable } from 'mobx';

export class ColumnStore {

  @observable
  columns: any[] = [
    {id: 1, title: 'Backlog'},
    {id: 2, title: 'To do'},
    {id: 3, title: 'Doing'},
    {id: 4, title: 'Done'}
  ];

  constructor() {
    makeObservable(this);
  }
};

export const columnStore = new ColumnStore();
