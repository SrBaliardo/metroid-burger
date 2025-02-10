import React, { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const updateLocalStorage = (products) => {
    localStorage.setItem('metroidburger:cartInfo', JSON.stringify(products));
  };

  const [cartProducts, setCartProducts] = useState([]);

  const addProductsToCart = (product) => {
    const cartIndex = cartProducts.findIndex((prod) => prod.id === product.id);

    let newCart = [];
    if (cartIndex >= 0) {
      newCart = cartProducts;
      newCart[cartIndex].quantity += 1;

      setCartProducts(newCart);
    } else {
      product.quantity = 1;
      newCart = [...cartProducts, product];
      setCartProducts(newCart);
    }
    updateLocalStorage(newCart);
  };

  const increaseQuantity = (productId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    });
    setCartProducts(newCart);

    updateLocalStorage(newCart);
  };

  const decreaseQuantity = (productId) => {
    const cartProductIndex = cartProducts.findIndex(
      (prod) => prod.id === productId,
    );
    if (cartProducts[cartProductIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product;
      });
      setCartProducts(newCart);

      updateLocalStorage(newCart);
    } else {
      deleteProduct(productId);
    }
  };

  const clearCart = () => {
    setCartProducts([]);
    updateLocalStorage([]);
  };

  const deleteProduct = (productId) => {
    const confirmPopup = confirm('Tem certeza que deseja excluir o item?');
    if (confirmPopup === true) {
      const newCart = cartProducts.filter(
        (product) => product.id !== productId,
      );
      setCartProducts(newCart);

      updateLocalStorage(newCart);
    }
  };

  useEffect(() => {
    const loadUserData = () => {
      const clientCartData = localStorage.getItem('metroidburger:cartInfo');
      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData));
      }
    };
    loadUserData();
  }, []);

  const clearCartData = () => {
    localStorage.removeItem('metroidburger:cartInfo');
  };

  return (
    <CartContext.Provider
      value={{
        addProductsToCart,
        cartProducts,
        increaseQuantity,
        decreaseQuantity,
        deleteProduct,
        clearCartData,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
