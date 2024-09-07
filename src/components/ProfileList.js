import React from 'react';
import { useSelector } from 'react-redux';

const ProfileList = () => {
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  return (
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    <div className="container mx-auto p-4 flex justify-center md:justify-start space-x-4">
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <table className="w-full table-auto border-separate border-spacing-0 border-2 border-black rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-sm md:text-base text-left" colSpan="2">
                Joined Missions
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-sm md:text-base text-left">Mission</th>
              <th className="border border-gray-300 px-4 py-2 text-sm md:text-base text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {joinedMissions && joinedMissions.length > 0 ? (
              joinedMissions.map((mission, index) => (
                <tr key={mission.mission_id || index} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2 text-sm md:text-base text-left">
                    {mission.mission_name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm md:text-base text-left">
                    <span className="bg-[#5F9EA0] text-white px-3 py-1 rounded text-xs md:text-sm block max-w-full text-center">
                      Active Member
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr key="no-missions">
                <td colSpan="2" className="border border-gray-300 px-4 py-2 text-sm md:text-base text-left text-center">
                  No missions joined yet!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};



export default ProfileList;
