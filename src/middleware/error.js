'use strict';

// Custom Error Handler because we always want to return a JSON response
export default  (err,req,res,next) => {
  let error = {error:err};
  res.statusCode = 503;
  res.statusMessage = 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  console.log('insdie');
  res.write( JSON.stringify(error) );
  res.end();
};