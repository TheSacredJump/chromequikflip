const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/link-wallet', (req, res) => {
  console.log('Received request to link wallet');
  try {
    // Assuming the linking process involves some logic here
    console.log('Initiating wallet linking process');
    // Include the external website URL in the response
    res.json({
      message: 'Wallet linking initiated',
      externalUrl: 'https://example.com/link-wallet' // Replace with your actual external URL
    });
  } catch (error) {
    console.error('Error linking wallet:', error.message, error.stack);
    res.status(500).json({ message: 'Error linking wallet', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});