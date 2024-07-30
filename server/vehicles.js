const vehicles = [
  { id: 1, name: 'EV-1', status: 'available' },
  { id: 2, name: 'EV-2', status: 'available' },
];

function getAvailableVehicles() {
  return vehicles.filter((vehicle) => vehicle.status === 'available');
}

function assignVehicle(vehicleId) {
  const vehicle = vehicles.find((v) => v.id === vehicleId);
  if (vehicle) {
    vehicle.status = 'assigned';
  }
  return vehicle;
}

module.exports = { getAvailableVehicles, assignVehicle };