import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, loadJoinedMissions } from '../redux/actions';
import MissionItem from './MissionItem';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);

  useEffect(() => {
    dispatch(fetchMissions());
    dispatch(loadJoinedMissions());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <table className="min-w-full border-separate border-spacing-0 border-2 border-black rounded-lg overflow-hidden hidden sm:table">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-6 py-2 text-base w-1/5 text-left">Mission</th>
            <th className="border border-gray-300 px-6 py-2 text-base w-2/5 text-left">Description</th>
            <th className="border border-gray-300 px-6 py-2 text-base w-1/6 text-left">Status</th>
            <th className="border border-gray-300 px-6 py-2 text-base w-1/6 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <MissionItem key={mission.mission_id} mission={mission} isEven={index % 2 === 0} />
          ))}
        </tbody>
      </table>

      <div className="sm:hidden">
        {missions.map((mission, index) => (
          <MissionItem key={mission.mission_id} mission={mission} isEven={index % 2 === 0} />
        ))}
      </div>
    </div>
  );
};

export default Mission;
