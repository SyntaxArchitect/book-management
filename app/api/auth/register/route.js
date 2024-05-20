import { NextResponse } from 'next/server';
import connectDB from '../../../utils/connectDB';
import User from '../../../models/User';

export async function POST(request) {
    await connectDB();
    const { username, password } = await request.json();

    const userExists = await User.findOne({ username });
    if (userExists) {
        return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    const user = new User({ username, password });
    await user.save();

    return NextResponse.json({ message: 'User registered successfully' });
}
