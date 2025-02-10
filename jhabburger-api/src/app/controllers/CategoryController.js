import * as Yup from 'yup';
import Category from '../models/Category';
import User from '../models/User';
import fs from 'fs';
import path from 'path';

class CategoryController {
  async store(request, response) {
    const schema = Yup.object({
      name: Yup.string().required(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (error) {
      return response.status(400).json({ error: error.errors });
    }

    const { admin: isAdmin } = await User.findByPk(request.userId);

    if (!isAdmin) {
      return response.status(401).json();
    }

    const { filename: path } = request.file;
    const { name } = request.body;

    const categoryExist = await Category.findOne({
      where: {
        name,
        path,
      },
    });

    if (categoryExist) {
      return response.status(400).json({ error: 'Category already exists' });
    }

    const category = await Category.create({
      name,
      path,
    });

    return response.status(201).json(category);
  }

  async update(request, response) {
    const schema = Yup.object({
      name: Yup.string(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (error) {
      return response.status(400).json({ error: error.errors });
    }

    const { admin: isAdmin } = await User.findByPk(request.userId);

    if (!isAdmin) {
      return response.status(401).json();
    }

    const { id } = request.params;

    const categoryExists = await Category.findByPk(id);

    if (!categoryExists) {
      return response
        .status(400)
        .json({ error: 'Make sure your category ID is correct' });
    }

    let pathImage = categoryExists.path;

    if (request.file) {
      const oldImagePath = path.resolve(
        __dirname,
        '..',
        '..',
        '../uploads',
        categoryExists.path,
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

      pathImage = request.file.filename;
    }

    const { name } = request.body;

    if (name) {
      const categoryNameExists = await Category.findOne({
        where: {
          name,
        },
      });

      if (categoryNameExists && categoryNameExists.id !== +id) {
        return response.status(409).json({ error: 'Category already exists' });
      }
    }

    await Category.update(
      {
        name,
        path: pathImage,
      },
      {
        where: {
          id,
        },
      },
    );

    return response.status(200).json();
  }

  async index(request, response) {
    const categories = await Category.findAll();
    return response.json(categories);
  }
}

export default new CategoryController();
