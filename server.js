const express = require('express');
const app = express();

const PORT = 5000;

app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

const listener = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
