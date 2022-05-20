import React from 'react';
// @ts-ignore
import coins from './coins.png';
// @ts-ignore
import star from './star.png';
import './EventsCrad.scss';

export function EventsCard() {
  const txt = 'Веселые старты';
  const time = '15:00';
  const content = 'Вам предстоит пройти квест заданий....';
  const coinsAmount = 10;
  const expAmount = 25;

  return (
    <div className="eventsCard">
      <div className="eventsCard__title">
        <div className="eventsCard__title-txt">
          {txt}
        </div>
        <div className="eventsCard__title_time">
          {time}
        </div>
      </div>

      <div className="eventsCard__content">
        <p className="eventsCard__content-txt">
          {content}
        </p>
      </div>

      <div className="eventsCard__prize">
        <div className="eventsCard__prize-coins">
          <img width="13px" height="13px" src={coins} alt=""/>
          {coinsAmount} монет
        </div>
        <div className="eventsCard__prize-exp">
          <img width="13px" height="13px" src={star} alt=""/>
          {expAmount} опыта
        </div>
      </div>
    </div>
  )
}
