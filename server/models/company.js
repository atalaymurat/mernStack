const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = new Schema({
  name: String,
})

const Company = mongoose.model('company', companySchema)

module.exports = Company