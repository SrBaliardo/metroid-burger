import { v4 } from 'uuid';
import User from '../models/User';
import * as Yup from 'yup';
import fs from 'fs';
import path from 'path';

class UserController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().min(6).required(),
      admin: Yup.boolean(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (error) {
      return response.status(400).json({ error: error.errors });
    }

    const { name, email, password, admin } = request.body;

    const userExist = await User.findOne({ where: { email } });

    if (userExist) {
      return response.status(409).json({ error: 'User already exists' });
    }

    const user = await User.create({ id: v4(), name, email, password, admin });

    return response.status(201).json({
      id: user.id,
      name,
      email,
      admin,
    });
  }

  async index(request, response) {
    const users = await User.findAll();
    return response.json(users);
  }

  async show(request, response) {
    const { userId } = request.params;
    const user = await User.findByPk(userId, {
      attributes: [
        'id',
        'name',
        'email',
        'admin',
        'street',
        'number',
        'complement',
        'neighborhood',
        'city',
        'state',
        'path',
        'url',
      ],
    });

    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }

    return response.status(200).json(user);
  }

  async delete(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);
    if (!user) {
      return response.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    return response.status(200).json({ message: 'User deleted successfully' });
  }

  async update(request, response) {
    const schema = Yup.object({
      name: Yup.string(),
      email: Yup.string().email(),
      password: Yup.string().min(6),
      admin: Yup.boolean(),
      street: Yup.string(),
      number: Yup.string(),
      complement: Yup.string(),
      neighborhood: Yup.string(),
      city: Yup.string(),
      state: Yup.string(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (error) {
      return response.status(400).json({ error: error.errors });
    }

    const { id } = request.params;
    const user = await User.findByPk(id);

    if (!user) {
      return response.status(400).json({ error: 'User not found' });
    }

    let pathImage = user.path;

    if (request.file) {
      if (user.path) {
        const oldImagePath = path.resolve(
          __dirname,
          '..',
          '..',
          '../uploads',
          user.path,
        );
        console.log(`Tentando excluir: ${oldImagePath}`);

        try {
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
            console.log(`Imagem removida com sucesso: ${oldImagePath}`);
          } else {
            console.log(
              'Imagem antiga não encontrada, pode já ter sido removida.',
            );
          }
        } catch (err) {
          console.error('Erro ao excluir a imagem antiga:', err);
        }
      }

      pathImage = request.file.filename;
    }

    await user.update({ ...request.body, path: pathImage });

    return response.status(200).json(user);
  }
}

export default new UserController();
