import { Router } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../../models';
import { authMiddleware } from '../../middlewares/auth';

const router = Router();

// Get all users
router.get('/', authMiddleware, async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete users. Only for Admins
router.delete('/:userId', authMiddleware, async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete({ _id: userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Create a new User. Only for Admins
router.post('/signup', authMiddleware, async (req, res) => {
  try {
    const userData = await User.create({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(200).json({ userData, message: 'New user created!' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Log in
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ email: req.body.email });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect credentials' });
      return;
    }

    const validPassword = await userData.isCorrectPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect credentials' });
      return;
    }

    const payload = {
      _id: userData._id,
      first: userData.first,
      last: userData.last,
      email: userData.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: '24h',
    });

    res
      .status(200)
      .header('Authorization', `Bearer ${token}`)
      .cookie('jwt', token)
      .json({
        payload,
        message: 'You are now logged in!',
      });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
