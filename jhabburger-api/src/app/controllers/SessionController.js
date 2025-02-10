import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(request, response) {
    const schema = Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
    });

    const isValid = await schema.isValid(request.body);

    const incorrectEmailPassword = () => {
      response
        .status(401)
        .json({ error: 'Make sure your email or password are correct' });
    };

    if (!isValid) {
      return incorrectEmailPassword();
    }

    const { email, password } = request.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return incorrectEmailPassword();
    }

    const isSamePassword = await user.checkPassword(password);

    if (!isSamePassword) {
      return incorrectEmailPassword();
    }

    return response.status(200).json({
      id: user.id,
      name: user.name,
      email,
      admin: user.admin,
      token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, {
        expiresIn: authConfig.expiredIn,
      }),
      street: user.street,
      number: user.number,
      complement: user.complement,
      neighborhood: user.neighborhood,
      city: user.city,
      state: user.state,
      path: user.path,
      url: user.url,
    });
  }
}

export default new SessionController();
