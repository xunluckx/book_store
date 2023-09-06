const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
});

const Cart = sequelize.define('cart', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const CartBook = sequelize.define('cart_book', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Book = sequelize.define('book', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  avaible: { type: DataTypes.INTEGER, defaultValue: 1 },
  img: { type: DataTypes.STRING, allowNull: false },
});

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Genre = sequelize.define('genre', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define('Rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

const BookInfo = sequelize.define('book_info', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const TypeGenre = sequelize.define('type_genre', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(Cart);
Cart.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Cart.hasMany(CartBook);
CartBook.belongsTo(Cart);

Type.hasMany(Book);
Book.belongsTo(Type);

Genre.hasMany(Book);
Book.belongsTo(Genre);

Book.hasMany(Rating);
Rating.belongsTo(Book);

Book.hasMany(CartBook);
CartBook.belongsTo(Book);

Book.hasMany(BookInfo, { as: 'info' });
BookInfo.belongsTo(Book);

Type.belongsToMany(Genre, { through: TypeGenre });
Genre.belongsToMany(Type, { through: TypeGenre });

module.exports = {
  User,
  Cart,
  CartBook,
  Book,
  BookInfo,
  Type,
  Genre,
  Rating,
  TypeGenre,
};
