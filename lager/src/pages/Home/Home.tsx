import React from 'react';

import { Events } from '../../components/Events';
import { EventsCard } from '../../components/EventsCard';

export function Home() {
  return (
    <div>
      <Events />
      <EventsCard />
    </div>
  );
}

