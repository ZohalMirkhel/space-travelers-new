import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, setReservedRockets } from '../redux/actions';

const ProfileList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector(state => state.rockets);
  const reservedRockets = useSelector(state => state.reservedRockets);

  useEffect(() => {
    dispatch(fetchRockets());
    const reservedFromLocalStorage = JSON.parse(localStorage.getItem('reservedRockets')) || [];
    if (Array.isArray(reservedFromLocalStorage)) {
      dispatch(setReservedRockets(reservedFromLocalStorage));
    }
  }, [dispatch]);

  const reservedRocketDetails = reservedRockets.map(reserved => {
    const rocket = rockets.find(rocket => rocket.id === reserved.id);
    return rocket ? rocket.name : null;
  }).filter(name => name);

  return (
    <div class="rockets" className="container mx-auto p-4 flex justify-end space-y-4">
      <div className="w-full mt-4 max-w-lg ml-auto">
        <table className="min-w-full table-auto border-separate border-spacing-0 border-2 border-black rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-2 text-base text-left" colSpan="2">
                Reserved Rockets
              </th>
            </tr>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-2 text-base text-left">Rocket Name</th>
              <th className="border border-gray-300 px-6 py-2 text-base text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {reservedRocketDetails.length > 0 ? (
              reservedRocketDetails.map((name, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 px-6 py-2 text-base text-left">
                    {name}
                  </td>
                  <td className="border border-gray-300 px-6 py-2 text-sm text-left">
                    <span className="bg-[#5F9EA0] text-white px-3 py-1 rounded text-xs md:text-sm block max-w-full text-center">
                      Reserved
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="border border-gray-300 px-6 py-2 text-base text-left">
                  No rockets reserved.
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
