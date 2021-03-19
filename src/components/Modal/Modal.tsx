import React from 'react';
import { observer } from 'mobx-react-lite';

import { modalStore, ModalStore, cardStore, CardStore, ColorLabels } from '@/stores';
import { Card } from '@/components';

import s from './Modal.scss';


export const Modal: React.FC = observer(() => {
  const { show, showModal }: ModalStore = modalStore;
  const { colors, color, setActiveColor, submitCard }: CardStore = cardStore;

  const [ seen, setSeen ] = React.useState(show);

  React.useEffect(() => {
    setSeen(show);
  }, [show]);

  const colorStyles = [s.color];

  const [titleTask, setTitleTask] = React.useState('');
  const [descTask, setDescTask] = React.useState('');
  const [deadline, setDeadline] = React.useState('');

  const changeHandler = (event) => {
    switch (event.target.id) {
      case('Title'): setTitleTask(event.target.value);
      break;

      case('Desc'): setDescTask(event.target.value);
      break;

      case('Deadline'): setDeadline(event.target.value);
      break;
    }
  };

  const submitNewTask = (titleTask, descTask, deadline) => {
    submitCard(titleTask, descTask, deadline);
    showModal(false);
  }

  return (
    <>
      {seen &&
        <div className={s.wrapper}>
          <div className={s.container}>

            <div className={s.title}>New Task</div>
            <input className={s.label} id='Title' value={titleTask} onChange={changeHandler} placeholder="Title"/>
            <textarea className={s.textarea} id='Desc' value={descTask} onChange={changeHandler} placeholder="Description"></textarea>
            <input className={s.label} id='Deadline' value={deadline} onChange={changeHandler} placeholder="Deadline"/>
            <div className={s.colorPicker}>
              <p className={s.label}>Color</p>
              <div>
                {colors && colors.map(item => {

                  switch(item.color) {
                    case(ColorLabels.Yellow): colorStyles.push(s.colorYellow);
                    break;

                    case(ColorLabels.Blue): colorStyles.push(s.colorBlue);
                    break;

                    case(ColorLabels.Pink): colorStyles.push(s.colorPink);
                    break;

                    case(ColorLabels.Green): colorStyles.push(s.colorGreen);
                    break;

                    case(ColorLabels.Gray): colorStyles.push(s.colorGray);
                    break;

                    case(ColorLabels.Red): colorStyles.push(s.colorRed);
                    break;
                  }

                  return <div key={item.id} className={colorStyles.join(' ')} onClick={() => setActiveColor(item.color)}/>
                })}
              </div>
            </div>

            <div className={s.controls}>
              <button className={s.btn} onClick={() => submitNewTask(titleTask, descTask, deadline)}>Save</button>
              <button className={s.btn} onClick={() => showModal(false)}>Cancel</button>
            </div>

            <div className={s.preview}>
                <Card color={color} title={titleTask}/>
            </div>

          </div>
        </div>
      }
    </>
  );
});
