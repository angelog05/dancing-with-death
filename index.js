const http = require('http');
const express = require('express');
const kraken = require('kraken-js');

const init = require('./init');

const defaultPort = 8001;

const initialize = async () => {
  const app = express();
  const options = await init(app);

  app.use(kraken(options));

  app.on('start', () => {
    console.info('Application ready to serve requests.');
    console.info(`Environment: ${app.kraken.get('env:env')}`);
  });

  const server = http.createServer(app);

  server.listen(process.env.PORT || defaultPort);
  server.on('listening', function serve() {
    console.info(JSON.stringify(this.address()));
    console.info(`Server listening on ${this.address().address}:${this.address().port}`);
  });
};

initialize();
