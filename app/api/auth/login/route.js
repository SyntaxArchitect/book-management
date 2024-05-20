const { NextResponse } = require('next/server');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const connectDB = require('../../../../utils/connectDB');
const User = require('../../../../models/User');

require('dotenv').config({ path: '.env.local' });

export async function POST(request) {
    await connectDB();
    const { username, password } = await request.json();

    const user = await User.findOne({ username });
    if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ token });
}
