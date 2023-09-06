import { makeAutoObservable } from 'mobx';

export default class CartStore {
  constructor() {
    this._cart = [
      {
        id: 1,
        img: 'macbook.jpg',
        title: 'Apple MacBook Air 13',
        count: 2,
        price: 100000,
        priceTotal: 200000,
      },
      {
        id: 2,
        img: 'apple-watch.jpg',
        title: 'Apple watch',
        count: 1,
        price: 29000,
        priceTotal: 29000,
      },
      {
        id: 3,
        img: 'mac-pro.jpg',
        title: 'Mac Pro',
        count: 1,
        price: 190000,
        priceTotal: 190000,
      },
    ];

    this._total = {
      price: 0,
      count: 0,
    };

    makeAutoObservable(this);
  }

  setCart(cart) {
    this._cart = cart;
  }

  get cart() {
    return this._cart;
  }

  setTotal(total) {
    this._total = total;
  }

  get total() {
    return this._total;
  }
}
