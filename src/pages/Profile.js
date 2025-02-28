import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProfileList from '../components/ProfileList';
import { loadJoinedMissions } from '../redux/actions';

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJoinedMissions());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <ProfileList />
    </div>
  );
};

export default Profile;
