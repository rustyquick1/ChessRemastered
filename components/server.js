'use strict';

import app from './app.js';
import http from 'http';

const port = process.env.PORT || 2222;

let server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is listening on port ${ port }`);
});