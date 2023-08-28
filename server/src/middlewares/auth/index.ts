import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;
  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  if (!token) {
    return res.status(400).json({ message: 'Cannot Validate Token' });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string);

    if (payload) {
      next();
    } else {
      return res.status(403).json({ message: 'No authorized' });
    }
  } catch {
    return res.status(401).json({ message: 'Invalid Token' });
  }
};
