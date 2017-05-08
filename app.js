const express = require('express');
const controllers = require('./controllers');
const projects = require('./controllers/projects/controller');

const app = express();
const port = 3000;

app.use(controllers);

app.get('/', (req, res) => {
  res.send(`Transactional api listening on port: ${port}
  <br><br>
  <a href="http://localhost:${port}/risk">Projetos em risco!</a>`);
});

app.get('/risk', (req, res) => {
  const risk = projects.getRisk();
  res.send(`Projetos em risco! <br> ${risk}`);
});

app.listen(port, () => {
  console.log('Transactional api listening on port', port);
});


