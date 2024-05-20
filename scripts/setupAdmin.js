const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const connectDB = require('../utils/connectDB');

dotenv.config({ path: '.env.local' });

const setupAdmin = async () => {
    await connectDB();

    const adminExists = await User.findOne({ username: 'admin' });
    if (adminExists) {
        console.log('Admin user already exists');
        return;
    }

    const admin = new User({
        username: 'admin',
        password: 'admin',
    });

    await admin.save();
    console.log('Admin user created with username: admin and password: admin');
    mongoose.connection.close();
};

setupAdmin().catch(err => console.error(err));
