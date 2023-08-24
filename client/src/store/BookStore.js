import { makeAutoObservable } from 'mobx';

export default class BookStore {
  constructor() {
    this._types = [];

    this._genres = [];

    this._books = [];

    this._selectedType = {};
    this._selectedGenre = {};

    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setGenres(genres) {
    this._genres = genres;
  }

  setBooks(books) {
    this._books = books;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedGenre(type) {
    this._selectedGenre = type;
  }

  get types() {
    return this._types;
  }
  get genres() {
    return this._genres;
  }
  get books() {
    return this._books;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedGenre() {
    return this._selectedGenre;
  }
}
