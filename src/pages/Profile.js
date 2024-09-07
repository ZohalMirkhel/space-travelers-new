import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileList from '../components/ProfileList';
import { loadJoinedMissions } from '../redux/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const joinedMissions = useSelector((state) => state.missions.joinedMissions);

  useEffect(() => {
    dispatch(loadJoinedMissions());
  }, [dispatch]);

  return (
    <div className="profile-page">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      {joinedMissions.length > 0 ? (
        <ProfileList missions={joinedMissions} />
      ) : (
        <p>No missions joined yet.</p>
      )}
    </div>
  );
};

export default Profile;
