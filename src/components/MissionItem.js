import React from 'react';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/actions';
import PropTypes from 'prop-types';

const MissionItem = ({ mission, isEven }) => {
  const dispatch = useDispatch();

  const rowClass = isEven ? 'bg-gray-100' : 'bg-white';
  
  const buttonClass = mission.reserved
    ? 'bg-white text-red-500 border border-red-500 px-3 py-1 rounded text-sm'
    : 'bg-gray-200 text-black px-3 py-1 rounded text-sm';
  
  const spanClass = 'px-3 py-1 rounded text-sm text-center';

  return (
    <>
      <tr className={`${rowClass} sm:table-row hidden sm:flex`}>
        <td className="border border-gray-300 px-6 py-2 font-bold text-base sm:w-1/5 w-full">
          {mission.mission_name}
        </td>
        <td className="border border-gray-300 px-4 py-2 text-sm sm:w-2/5 w-full">
          {mission.description}
        </td>
        <td className="px-6 py-2 border sm:w-1/6 w-full">
          <div className="flex justify-start">
            <span className={`${spanClass} ${mission.reserved ? 'bg-[#5F9EA0] text-white' : 'bg-gray-500 text-white'}`}>
              {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
            </span>
          </div>
        </td>
        <td className="px-6 py-2 border sm:w-1/6 w-full">
          <div className="flex justify-start">
            <button
              className={buttonClass}
              onClick={() => dispatch(mission.reserved ? leaveMission(mission.mission_id) : joinMission(mission.mission_id))}
            >
              {mission.reserved ? 'Leave Mission' : 'Join Mission'}
            </button>
          </div>
        </td>
      </tr>

      <div className="sm:hidden">
        <div className={`border border-gray-300 mb-4 p-4 ${rowClass}`}>
          <p className="font-bold text-lg mb-2">{mission.mission_name}</p>
          <p className="text-sm mb-4">{mission.description}</p>
          <div className="flex justify-between items-center">
            <span className={`${spanClass} ${mission.reserved ? 'bg-[#5F9EA0] text-white' : 'bg-gray-500 text-white'}`}>
              {mission.reserved ? 'Active Member' : 'NOT A MEMBER'}
            </span>
            <button
              className={buttonClass}
              onClick={() => dispatch(mission.reserved ? leaveMission(mission.mission_id) : joinMission(mission.mission_id))}
            >
              {mission.reserved ? 'Leave Mission' : 'Join Mission'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

MissionItem.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.number.isRequired,
    mission_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
  isEven: PropTypes.bool.isRequired,
};

export default MissionItem;
