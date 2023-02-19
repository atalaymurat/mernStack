const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companies')


router
  .get('/', companyController.index)
  .post('/', companyController.create)
  .get('/:id', companyController.show)

module.exports = router