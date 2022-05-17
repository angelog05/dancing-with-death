const status = require('../lib/http-status');

module.exports = function hc() {
  return function healthCheck(req, res) {
    res.clearCookie('connect.sid');
    res.status(status.OK).end();
  };
};