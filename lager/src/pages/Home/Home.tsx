import React from 'react';
import Header from '../../Header';
import { Events } from '../../components/Events';
import { EventsCard } from '../../components/EventsCard';

export function Home() {
  return (
    <div>    
      <Header/>
      <Events />
      <EventsCard />
    </div>
  );
}

