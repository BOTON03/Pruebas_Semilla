const { check } = require('express-validator') //TODO <---
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [ //TODO:password, email
    check('email')
            .exists()
            .isEmail(),
        (req, res, next) => {
            validateResult(req, res, next)
    }, 
    check('password')
            .exists()
            .isNumeric()
            .custom((value, { req }) => {
                //TODO: 10
                if (value < 10 || value > 40) {
                    throw new Error('Rango de password debe ser entre 10 y 40')
                }
                return true
    })
   
    
]

module.exports = { validateCreate }