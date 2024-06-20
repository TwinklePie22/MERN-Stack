const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample data
const services = [
  { id: 1, name: 'Acne Treatment', description: 'Advanced acne treatment for all skin types.' },
  { id: 2, name: 'Skin Cancer Screening', description: 'Thorough skin cancer screenings by expert dermatologists.' },
  { id: 3, name: 'Anti-aging Procedures', description: 'Cutting-edge anti-aging treatments to rejuvenate your skin.' },
  { id: 4, name: 'Laser Therapy', description: 'State-of-the-art laser treatments for various skin conditions.' },
  { id: 5, name: 'Dermal Fillers', description: 'Non-surgical facial rejuvenation using premium dermal fillers.' },
  { id: 6, name: 'Eczema and Psoriasis Management', description: 'Comprehensive care for chronic skin conditions.' },
];

// API endpoint to get all services
app.get('/api/services', (req, res) => {
  res.json(services);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});