import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/actions';

const MissionItem = ({ mission }) => {
  const dispatch = useDispatch();
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);
  const isJoined = joinedMissions.includes(mission.mission_id);

  const handleJoinLeave = () => {
    if (isJoined) {
      dispatch(leaveMission(mission.mission_id));
    } else {
      dispatch(joinMission(mission.mission_id));
    }
  };

  return (
    <div className="mission-item">
      <h3>{mission.mission_name}</h3>
      <p>{mission.description}</p>
      <button onClick={handleJoinLeave}>
        {isJoined ? 'Leave Mission' : 'Join Mission'}
      </button>
      {isJoined && <span className="badge">Reserved</span>}
    </div>
  );
};

export default MissionItem;
