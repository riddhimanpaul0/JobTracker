import { UnAuthenticatedError } from '../errors/index.js';
import jwt from 'jsonwebtoken';


const auth = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new UnAuthenticatedError('Authentication invalid');
    }
    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);

        const testUser = payload.userId === '64617252299d437b6c17fad6';
        req.user = { userId: payload.userId, testUser };
        next();
    } catch (error) {
        throw new UnAuthenticatedError('Authentication invalid');
    }
}

export default auth