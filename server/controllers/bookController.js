const uuid = require('uuid');
const path = require('path');
const { Book, BookInfo } = require('../models/models');
const ApiError = require('../error/ApiError');

class BookController {
  async create(req, res, next) {
    try {
      const { name, price, genreId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const book = await Book.create({
        name,
        price,
        genreId,
        typeId,
        img: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          BookInfo.create({
            title: i.title,
            description: i.description,
            bookId: book.id,
          });
        });
      }

      return res.json(book);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { genreId, typeId, limit, page } = req.query;
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit;
    let books;
    if (!genreId && !typeId) {
      books = await Book.findAndCountAll({ limit, offset });
    }
    if (genreId && !typeId) {
      books = await Book.findAndCountAll({ where: { genreId, limit, offset } });
    }
    if (!genreId && typeId) {
      books = await Book.findAndCountAll({ where: { typeId, limit, offset } });
    }
    if (genreId && typeId) {
      books = await Book.findAndCountAll({
        where: { genreId, typeId, limit, offset },
      });
    }
    return res.json(books);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const book = await Book.findOne({
      where: { id },
      include: [{ model: BookInfo, as: 'info' }],
    });
    return res.json(book);
  }
}

module.exports = new BookController();
