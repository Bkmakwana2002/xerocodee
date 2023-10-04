const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const redis_client = require('../redis_connect');

async function Register(req, res){
 
    // const { firstName,lastName,email,password } = req.body
    // // encrypt password
    // const user = new User({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password
    // });

    // try {
    //     const saved_user = await user.save();
    //     res.json({status: true, message: "Registered successfully.", data: saved_user});
    // } catch (error) {
    //     res.status(400).json({status: false, message: "Something went wrong.", data: error});
    // }
    try {

        const { firstName,lastName ,email, password } = req.body

        let user = await User.findOne({ email })
        if (user) {
            return res.status(404).send({ success: false, message: 'User already exists' })
        }

        user = await User.create({
            firstName,lastName,
            email,
            password
        })

        if(res.status(201)){
            res.json({
                success:true,
                user
            })
        }

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

async function Login (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({email: email}).select('+password');
        
        //if(user === null) res.status(401).json({status: false, message: "NO email found"});
   
        if (user && ((await user.matchPassword(password)))) {
            const access_token = jwt.sign({sub: user._id}, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_TIME});

            const refresh_token = await GenerateRefreshToken(user._id);
            if(access_token == refresh_token){
                console.log(true)
            }
            else{
                console.log(false)
            }
            res.status(201).send({
                success: true,
                name: user.name,
                email: user.email,
                access_token,
                refresh_token
            })
        }
        else {
            res.status(401);
            throw new Error("Wrong Email or Password");
        }

        // const access_token = jwt.sign({sub: user._id}, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_TIME});
        // console.log('access_token', access_token);
        // const refresh_token = GenerateRefreshToken(user._id);
        // return res.json({status: true, message: "login success", data: {access_token, refresh_token}});
    } catch (error) {
        return res.status(401).json({status: true, message: "login fail", data: error});
    }

    
}

// async function Logout (req, res) {
//     const user_id = req.userData.sub;
//     const token = req.token;

//     // remove the refresh token
//     await redis_client.del(user_id.toString());

//     // blacklist current access token
//     await redis_client.set('BL_' + user_id.toString(), token);
    
//     return res.json({status: true, message: "success."});
// }

async function GetAccessToken (req, res) {
    const user_id = req.userData.sub;
    const access_token = jwt.sign({sub: user_id}, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_TIME});
    const refresh_token = await GenerateRefreshToken(user_id);
    return res.json({status: true, message: "success", data: {access_token, refresh_token}});
}

async function GenerateRefreshToken(user_id) {
    const refresh_token = jwt.sign({ sub: user_id }, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_TIME });


    await redis_client.get(user_id.toString(), (err, data) => {
        if(err) throw err;

        redis_client.set(user_id.toString(), JSON.stringify({token: refresh_token}));
    })
    return refresh_token;
}
module.exports = {
    Register,
    Login,
    GetAccessToken
}