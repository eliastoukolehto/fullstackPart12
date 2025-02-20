const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET redis statistics */
router.get('/statistics', async (_, res) => {
  const statistics = await redis.getAsync('added_todos')
  if (!statistics ) {
    res.send({"added_todos": "0"})
  } else {
    res.send({"added_todos": statistics})
  }
})

module.exports = router;