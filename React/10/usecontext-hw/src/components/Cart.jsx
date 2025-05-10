import React, { useContext } from 'react';
import ProductContext from '../context/ProductContext';

function Cart() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductContext);

  function upValue(index) {
    setSelectedProducts((prev) =>
      prev.map((product, i) =>
        i === index ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  }

  function downValue(index) {
    setSelectedProducts((prev) =>
      prev
        .map((product, i) =>
          i === index ? { ...product, quantity: product.quantity - 1 } : product
        )
        .filter((product) => product.quantity > 0)
    );
  }

  function removeProduct(indexToRemove) {
    setSelectedProducts((prev) => prev.filter((_, index) => index !== indexToRemove));
  }

  const totalPrice = selectedProducts.reduce(
    (acc, product) => acc + product.productPrice * product.quantity,
    0
  );

  return (
    <div className='mb-4'>
      <h3 className='text-center'>Your Cart</h3>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col' style={{ width: '40%' }}>
              Name
            </th>
            <th scope='col' style={{ width: '20%' }}>
              Price
            </th>
            <th scope='col' style={{ width: '20%' }}>
              Quantity
            </th>
            <th scope='col' style={{ width: '20%' }} className='text-end'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.productTitle}</td>
                <td>$ {product.productPrice}</td>
                <td>
                  {' '}
                  <div className='d-flex align-items-center gap-2'>
                    <button
                      className='btn btn-primary btn-sm'
                      onClick={() => downValue(index)}
                    >
                      −
                    </button>
                    <span>{product.quantity > 0 ? product.quantity : 'error'}</span>
                    <button
                      className='btn btn-primary btn-sm'
                      onClick={() => upValue(index)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className='text-end'>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => removeProduct(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='text-end fw-bold me-2'>Total: $ {totalPrice}</div>
    </div>
  );
}

export default Cart;
