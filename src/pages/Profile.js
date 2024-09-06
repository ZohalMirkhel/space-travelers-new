import React from 'react';
import ProfileList from '../components/ProfileList';

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <ProfileList />
    </div>
  );
};

export default Profile;
