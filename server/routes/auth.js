const express = require("express");
const User = require("../models/user");
const authRouter = express.Router();
const bcryptjs = require("bcryptjs");


authRouter.post("/api/signup", async (req, res) => {
    //get the data from client 
    // post that data in database 
    // return that data to the user 
    try {
        const { name, email, password } = req.body;  //got the data from client
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res
                .status(400)
                .json({ msg: "User with same email already exists!" });
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        let user = new User({
            email,
            password: hashedPassword,
            name,
        });
        user = await user.save();
        res.json(user);

    } catch (e) {
        res.status(500).json({ error: e.messsage });
    }
});


module.exports = authRouter;