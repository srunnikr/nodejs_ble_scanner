/*---------------------------------------
 * Imports
 *--------------------------------------*/
var express = require('express');
var router = express.Router();
var bleAdapter = require('../src/ble');

/*---------------------------------------
 * App states
 *--------------------------------------*/
let ble = new bleAdapter();
let serviceUUIDFilter = []
let deviceFound = []

/*---------------------------------------
 * BLE
 *--------------------------------------*/

// Request to add a new scan filter

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
