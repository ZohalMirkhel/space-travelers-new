import React from 'react';

const ProfileList = ({ missions }) => {
  return (
    <div className="profile-list">
      {missions.length > 0 ? (
        missions.map((missionId) => (
          <div key={missionId} className="mission-item">
            <h3>{missionId}</h3>
          </div>
        ))
      ) : (
        <p>No missions joined yet.</p>
      )}
    </div>
  );
};

export default ProfileList;
