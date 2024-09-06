import React from 'react';
import MissionItem from './MissionItem';

const Mission = ({ mission }) => {
  return (
    <div className="mission">
      <MissionItem mission={mission} />
    </div>
  );
};

export default Mission;
