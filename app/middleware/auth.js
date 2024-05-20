const { NextResponse } = require('next/server');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env.local' });

const authMiddleware = (request) => {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = decoded;
        return { status: 200, user: decoded };
    } catch (error) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
};

module.exports = authMiddleware;
