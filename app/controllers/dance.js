const httpStatus = require('../lib/http-status');
const service = require('../services/dance');

module.exports = router => {
  router.get('/availability', async (req, res) => {
    try {

      const result = await service.getAvailability(req.query);

      res.status(httpStatus.OK).json(result);
    } catch (error) {
      console.error(error);
      res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  });

  router.post('/', async (req, res) => {
    try {

      const result = await service.createAppointment(req.body);

      res.status(httpStatus.OK).json(result);
    } catch (error) {
      
      res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  });
};