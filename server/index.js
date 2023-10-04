require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();
const connectDB = require('./db');
app.use(cors())

connectDB()
app.use(express.json())
// middileware
// app.use(express.json());
// app.use('/api/auth',userRoutes)

// routes
const auth_routes = require('./routes/auth.route');
// const user_routes = require('./routes/user.route');

app.use('/api/auth', auth_routes);
// app.use('/v1/user', user_routes);



app.listen(process.env.PORT, () => console.log(`server is running ${process.env.PORT}`));