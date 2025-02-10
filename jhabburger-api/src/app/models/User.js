import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcrypt';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        admin: Sequelize.BOOLEAN,
        street: Sequelize.STRING,
        number: Sequelize.STRING,
        complement: Sequelize.STRING,
        neighborhood: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `http://localhost:3001/user-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
      },
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 16);
      }
    });
    return this;
  }

  async checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
