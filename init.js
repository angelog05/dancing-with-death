const database = require('./lib/connection-database');

const startConfiguration = async () => {
  return {
    onconfig: async (config, next) => {
      // TODO: Configure services here
      const databaseConfig = config.get('databaseConfig');
      
      database.config(databaseConfig);

      next(null, config);
    }
  };
};

module.exports = startConfiguration;
