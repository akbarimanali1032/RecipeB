const express = require('express');
const app = express();
const router = express.Router();

const Users = require('../model/useschema');


router.post('/login', async (req, res) => {
    try {
        const all = await Users.findOne({ email: req.body.email })
        console.log('all::: ', all);
        if (all != null) {
            if (all.email === req.body.email && all.password === req.body.password) {
                return res.send({ Respons: "login Success" });
            } else {
                return res.send({ Respons: "login Failed" });
            }
        } else {
            return res.send({ Respons: "invalid Email" });
        }
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})

router.post('/singup', async (req, res) => {
    try {
        const todoAdd = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        return res.send({ Respons: "sing up Success" });
    } catch (error) {
        console.log('error::: ', error);
        res.send({ err: error });
    }
})

module.exports = router;