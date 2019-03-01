const express = require('express');
const app = express();
 
app.all('/json/*', (req,res) => {
  res.json({url: req.url, ok: true});
});
 
app.listen(3001);