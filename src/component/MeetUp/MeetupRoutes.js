import React from 'react';
import { Route } from 'react-router-dom';
import MeetUp from './MeetUp';

const MeetupRoutes = () => {
   return (
      <Route path="/meetUp" component={MeetUp} />
   )
}

export default MeetupRoutes;