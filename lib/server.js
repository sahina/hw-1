import express from 'express';
import config from './config';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    name: 'chuck'
  });
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});


app.listen(config.port, function listenHandler() {
  console.info(`Up at ${config.port}...`);
});
