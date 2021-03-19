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

  @action
  submitModal = () => {

  };
};

export const modalStore = new ModalStore();
