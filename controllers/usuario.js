

// const jwt = require('jsonwebtoken');

// constraseña
// const bcrypt = require('bcrypt');

// validation
// const Joi = require('@hapi/joi');

// const schemaRegister = Joi.object({   
//     email: Joi.string().min(6).max(255).required().email(),
//     password: Joi.string().min(6).max(1024).required()
// })

// const schemaLogin = Joi.object({
//     email: Joi.string().min(6).max(255).required().email(),
//     password: Joi.string().min(6).max(1024).required()
// })

const usuarioPost = async (req, res) => {

    // validate user
    const { error } = schemaRegister.validate(req.body)
    
    if (error) {
        return res.status(400).json({error: error.details[0].message})
    }

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(400).json({error: 'Email ya registrado'})
    }

    // hash contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password
    });
    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            data: savedUser
        })
    } catch (error) {
        res.status(400).json({error})
    }
}

export {usuarioPost}