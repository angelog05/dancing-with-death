const { getEnv } = require('../utils/env');

const service = {
  async get() {
    return { message: 'Working!', environment: getEnv() };
  }
};

module.exports = service;
