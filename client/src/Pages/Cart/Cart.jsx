import './style.scss';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import CartFooter from './CartFooter';
import CartHeader from './CartHeader';
import Product from './Product';
import CartData from '../../store/CartData';
import { Context } from '../..';

const Cart = observer(() => {
  const { book } = useContext(Context);

  const [cart, setCart] = useState(CartData);
  const [total, setTotal] = useState({
    price: 0,
    count: 0,
  });

  useEffect(() => {
    const totalPrice = cart.reduce((prev, curr) => prev + curr.priceTotal, 0);
    const totalCount = cart.reduce((prev, curr) => prev + curr.count, 0);

    setTotal({
      price: totalPrice,
      count: totalCount,
    });
  }, [cart]);

  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((product) => id !== product.id));
  };

  const increase = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: product.count + 1,
            priceTotal: (product.count + 1) * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  const products = cart.map((product) => {
    return (
      <Product
        book={book}
        product={product}
        key={product.id}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });

  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter total={total} />
    </section>
  );
});

export default Cart;
