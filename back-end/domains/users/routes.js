import {Router} from "express";
import conectDB from "../../config/db.js"
import User from "./Model.js";
import bcrypt from "bcryptjs"

const router = Router();
const bcryptSalt = bcrypt.genSaltSync();

router.get('/',async (req,res)=>{
    conectDB()
    try {
        
        const userDoc = await User.find();
        res.json(userDoc)
    }
     catch (error) {
         res.status(404).json(error)
    }});


router.post('/', async (req,res) => {
    conectDB();
const {name,email,passoword} = req.body;
const ecryptedPassowrd = bcrypt.hashSync(passoword, bcryptSalt);
     try {
        const newUserDoc = await User.create(
            {
                name,
                email,
                passoword: ecryptedPassowrd
            }
        )
        res.json(newUserDoc)
    }
     catch (error) {
         res.status(404).json(error)
    }
});

export default router;