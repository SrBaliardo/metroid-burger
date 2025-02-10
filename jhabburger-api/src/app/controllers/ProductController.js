import * as Yup from 'yup';
import Product from '../models/Product';
import Category from '../models/Category';
import User from '../models/User';
import fs from 'fs';
import path from 'path';

class ProductController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      category_id: Yup.number().required(),
      offer: Yup.boolean(),
    });

    try {
      schema.validateSync(request.body, { abortEarly: false });
    } catch (error) {
      console.error('Validation error:', error.errors);
      return response.status(400).json({ error: error.errors });
    }

    const { admin: isAdmin } = await User.findByPk(request.userId);

    if (!isAdmin) {
      return response.status(401).json();
    }

    const { name, price, category_id, offer } = request.body;

    if (!request.file) {
      console.error('File not provided');
      return response.status(400).json({ error: 'File not provided' });
    }

    const { filename: path } = request.file;

    try {
      const product = await Product.create({
        name,
        price,
        category_id,
        path,
        offer,
      });
      return response.status(201).json(product);
    } catch (error) {
      console.error('Database error:', error);
      return response.status(500).json({ error: 'Database error' });
    }
  }

  async update(request, response) {
    const schema = Yup.object({
      name: Yup.string(),
      price: Yup.number().positive(),
      category_id: Yup.number(),
      offer: Yup.boolean(),
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

    const findProduct = await Product.findByPk(id);

    if (!findProduct) {
      return response
        .status(400)
        .json({ error: 'Make sure your product ID is correct' });
    }

    let pathImage = findProduct.path;

    if (request.file) {
      const oldImagePath = path.resolve(
        __dirname,
        '..',
        '..',
        '../uploads',
        findProduct.path,
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

    const { name, price, category_id, offer } = request.body;

    try {
      await Product.update(
        {
          name,
          price,
          category_id,
          path: pathImage,
          offer,
        },
        {
          where: {
            id,
          },
        },
      );

      return response.status(200).json();
    } catch (error) {
      return response
        .status(500)
        .json({ error: error.errors, message: 'Internal Server Error' });
    }
  }

  async index(request, response) {
    const products = await Product.findAll({
      include: [
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });
    return response.status(200).json(products);
  }
}

export default new ProductController();
