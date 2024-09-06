import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/actions';
import RocketItem from './RocketItem';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector(state => state.rockets);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (loading) return <p>Loading rockets...</p>;
  if (error) return <p>Error fetching rockets: {error}</p>;

  return (
    <div className="rockets-container p-4 md:px-24 md:py-12">
      <div className="rocket-item-container">
        {rockets && rockets.length > 0 ? (
          rockets.map(rocket => (
            <RocketItem key={rocket.id} rocket={rocket} />
          ))
        ) : (
          <p>No rockets available.</p>
        )}
      </div>
    </div>
  );
};

export default Rockets;
