const express = require('express');
const app = express();
const unusedVar = 'This var is unused'

app.get('/', function (req, res) {
  if (potato=true){ console.log('true'  ) }
  res.send('Hello World');
})
//testcomment
app.listen(process.env?.PORT || 3000);
