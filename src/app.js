// 'use strict';

// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import router from './routes/api.js';
// import errorHandler from './middleware/error.js';
// import notFound from './middleware/404.js';

// let app = express();

// app.use(cors());
// app.use(morgan('dev'));

// app.use(express.json());
// app.use(router);

// app.use(notFound);
// app.use(errorHandler);

// let server = false;

// module.exports = {
//   start: (port) => {
//     if(! server) {
//       server = app.listen(port, (err) => {
//         if(err) { throw err; }
//         console.log(`Server up on ${port}`);
//       });
//     }
//     else {
//       console.log('Server is already running');
//     }
//   },
//   stop: () => {
//     server.close( () => {
//       console.log('Server has been stopped');
//     });
//   },
//   server: app,
// };





// FROM LAB 18::::

'use strict';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import authRouter from './auth/router.js';
import publicRoute from './routes/publicApi.js';

import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());  // => req.body
app.use(express.urlencoded({extended:true})); // req.body => from a form's key value pairs

app.use(authRouter);
app.use(publicRoute);

app.use(notFound);
app.use(errorHandler);

let server = false;

module.exports = {
  start: (port) => {
    if(!server) {
      server = app.listen(port, (err) => {
        if(err) { throw err; }
        console.log('Server running on', port);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    server.close( () => {
      console.log('Server is now off');
    });
  },
};
