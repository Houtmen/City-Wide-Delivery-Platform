const deliveries = []; // This would normally be a database

function addDelivery(delivery) {
  deliveries.push(delivery);
}

function dispatchDeliveries() {
  const waves = chunkArray(deliveries, 5); // Assume 5 deliveries per wave
  waves.forEach((wave, index) => {
    setTimeout(() => {
      console.log(`Dispatching wave ${index + 1}`, wave);
      // Logic to dispatch wave
    }, index * 300000); // Dispatch every 5 minutes
  });
}

function chunkArray(array, chunkSize) {
  const results = [];
  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }
  return results;
}

module.exports = { addDelivery, dispatchDeliveries };