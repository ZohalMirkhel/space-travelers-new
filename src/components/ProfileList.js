import React from 'react';
import PropTypes from 'prop-types';

const ProfileList = ({ missions }) => {
  const missionList = Array.isArray(missions) ? missions : [];

  return (
    <div className="container mx-auto p-4 flex justify-center md:justify-start space-x-4">
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <table className="min-w-full table-auto border-separate border-spacing-0 border-2 border-black rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-2 text-base text-left" colSpan="1">
                Profile
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-2 text-base text-left">Mission</th>
              <th className="border border-gray-300 px-6 py-2 text-base text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {missionList.length > 0 ? (
              missionList.map((mission) => (
                <tr key={mission.mission_id} className="bg-white">
                  <td className="border border-gray-300 px-6 py-2 text-base text-left">
                    {mission.mission_name}
                  </td>
                  <td className="border border-gray-300 px-6 py-2 text-sm text-left">
                  <span className="bg-[#5F9EA0] text-white px-3 py-1 rounded text-xs md:text-sm block max-w-full text-center">
                    Active Member
                  </span>
                </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="border border-gray-300 px-6 py-2 text-base text-left">
                  No missions joined yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};  

ProfileList.propTypes = {
  missions: PropTypes.array,
};

ProfileList.defaultProps = {
  missions: [],
};

export default ProfileList;
