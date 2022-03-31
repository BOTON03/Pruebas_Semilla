const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')

const getItems = async (req, res) => {
    try {
        const listAll = await userModel.find({})
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { password, email } = req.body
        const resDetail = await userModel.create({
             email,password
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }
