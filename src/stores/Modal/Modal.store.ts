import { action, makeObservable, observable } from 'mobx';

export class ModalStore {

  @observable
  show: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @action
  showModal = (value: boolean) => {
    this.show = value;
  };
};

export const modalStore = new ModalStore();
