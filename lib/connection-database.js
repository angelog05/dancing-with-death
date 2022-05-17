const mongoose = require('mongoose');

const dbInstance = {
  config: async ({ connectionUrl, mongooseConfiguration = {
    useNewUrlParser: true
  } }) => {
    
    await mongoose.connect(connectionUrl, mongooseConfiguration);

    const db = mongoose.connection;
    db.on('error', err => {
      console.error(`connection error: ${err}`);
    });
    db.once('open', () => {
      console.info('MongoDb connected');
    });
  }
};

module.exports = dbInstance;