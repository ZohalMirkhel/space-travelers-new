import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Mission from '../components/Mission';
import { fetchMissions, loadJoinedMissions } from '../redux/actions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(loadJoinedMissions());
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div className="missions-page">
      <h2 className="text-2xl font-bold mb-4">SpaceX Missions</h2>
      <div className="missions-list">
        {missions.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))}
      </div>
    </div>
  );
};

export default Missions;
