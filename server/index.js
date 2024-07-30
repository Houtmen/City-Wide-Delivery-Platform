const express = require('express');
const bodyParser = require('body-parser');
const { addDelivery, dispatchDeliveries } = require('./dispatcher');
const { getAvailableVehicles, assignVehicle } = require('./vehicles');

const app = express();
app.use(bodyParser.json());

app.post('/api/schedule', (req, res) => {
  const { merchant, product, timeSlot } = req.body;
  addDelivery({ merchant, product, timeSlot });
  res.json({ message: 'Delivery scheduled', merchant, product, timeSlot });
});

app.get('/api/vehicles', (req, res) => {
  res.json(getAvailableVehicles());
});

app.post('/api/dispatch', (req, res) => {
  const { vehicleId, deliveries } = req.body;
  const vehicle = assignVehicle(vehicleId);
  if (vehicle) {
    dispatchDeliveries(deliveries);
    res.json({ message: 'Vehicle dispatched', vehicleId, deliveries });
  } else {
    res.status(400).json({ message: 'Vehicle not available' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});