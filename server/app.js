const EXPRESS = require('express');
const PATH = require('path');
const BODY_PARSER = require('body-parser');
const APP = EXPRESS();

APP.use(BODY_PARSER.json());
APP.use(BODY_PARSER.urlencoded({ extended: true }));

APP.get('/*', function (req, res) {
  let file = req.params[0] || '/index.html';
  res.sendFile(PATH.join(__dirname, './public', file));
});

APP.set('port', process.env.PORT || 3000);
APP.listen(APP.get('port'), function () {
  console.log('Listening on port ', APP.get('port'));
});