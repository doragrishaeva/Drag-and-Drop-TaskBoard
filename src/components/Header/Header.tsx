import React from 'react';

import { modalStore, ModalStore } from '@/stores/Modal/Modal.store';

import s from './Header.scss';


export const Header: React.FC = () => {
  const { showModal }: ModalStore = modalStore;

  const [titleBoard, setTitleBoard] = React.useState(sessionStorage.getItem('title') || 'Task Board');

  const changeHandler = (event) => {
    setTitleBoard(event.target.value);
    sessionStorage.setItem('title', event.target.value);
  };

  return (
    <div className={s.container}>
      <div className={s.title}>
        <input type="text" value={titleBoard} onChange={changeHandler}/>
      </div>
      <button className={s.btn} onClick={() => showModal(true)}>+ add task</button>
      <div className={s.deleteIcon} />
    </div>
  );
};
