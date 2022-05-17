const httpStatus = require('../lib/http-status');
const service = require('../services/test');

module.exports = router => {
  router.get('/', async (req, res) => {
    try {
      const result = await service.get();

      res.status(httpStatus.OK).json(result);
    } catch (error) {
      console.error(error);
      res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  });
};
