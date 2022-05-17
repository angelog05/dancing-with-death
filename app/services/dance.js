const httpStatus = require('../lib/http-status');
const Model = require('../models/dance');

const parseDate = (date) => new Date(date).toISOString().slice(0, 10);

const processError = (name, e) => {
  const error = new Error();

  if (name.toLowerCase() === "bad request" || 
    name.toLowerCase() === "duplicate key") {
    error.message = e.message;
    error.name = e.name;
    error.status = httpStatus.BAD_REQUEST;
  }

  throw(error);
}

const service = {
  async getAvailability(date) {
    const parseDate = new Date(date.date).toISOString();

    //TODO: if date is valid (Monday to Friday);

  
    return { message: 'Working!', service: "Dance" };
  },
  async createAppointment(reservation) {
    const { date, hour } = reservation;
    const newDate = parseDate(date);
    const newHour = parseInt(hour);
    
    
    if (hour < 9 || hour > 18 || isNaN(newHour)) {
      return processError('Bad Request', { message: 'Error processing the time, verify that the time is within the established schedule (9hrs to 18hrs in Chile)', name: 'Hour error' });
    }
    
    try {
      return await Model.create({...reservation, date: newDate, hour: newHour});
    } catch (e) {
      if (e.message.search('duplicate')) {
        return processError("Duplicate key", e);
      }
    }

  }

};

module.exports = service;
