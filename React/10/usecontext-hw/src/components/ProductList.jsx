import React, { useContext } from 'react';
import Card from './Card';
import ProductContext from '../context/ProductContext';

const ProductList = () => {
  const { productsList } = useContext(ProductContext);
  const { setSelectedProducts } = useContext(ProductContext);

  function selectProduct(product) {
    setSelectedProducts((prevSelected) => {
      const existing = prevSelected.find((p) => p.productTitle === product.productTitle);

      if (existing) {
        return prevSelected.map((p) =>
          p.productTitle === product.productTitle ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevSelected, { ...product, quantity: 1 }];
      }
    });
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          {productsList.map((item, index) => (
            <Card
              key={index}
              index={index}
              productTitle={item.productTitle}
              productPrice={item.productPrice}
              productUsers={item.productUsers}
              storageValue={item.storageValue}
              helpCenter={item.helpCenter}
              selectProduct={selectProduct}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
