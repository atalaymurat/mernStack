const Company = require("../models/company")


module.exports = {
    index: async (req, res, next) =>  {
        const companies = await Company.find()
        res.status(200).json(companies)
    },
    show: async (req, res, next) => {
        console.log("Controller Show req.body", req.params)
        const company = await Company.findById(req.params.id)
        res.status(200).json(company)
    },
    create: async (req, res, next) => {
        let data = req.body
        console.log("New Company Data Posted :::::", data)
        let cmp = new Company(data)
        await cmp.save()
        res.status(200).json({success: true, cmp})
    },
}