import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

function authMiddleware(request, response, next) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const token = authToken.split(' ').at(1);

  try {
    jwt.verify(token, authConfig.secret, (error, decoded) => {
      if (error) {
        throw new Error();
      }

      request.userId = decoded.id;
      request.userName = decoded.name;
    });
  } catch (error) {
    return response.status(401).json({ error: error.message('Invalid token') });
  }

  return next();
}

export default authMiddleware;
