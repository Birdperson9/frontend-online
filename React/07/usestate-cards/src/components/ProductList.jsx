import React from 'react';
import { useState } from 'react';

const ProductList = () => {
  const [productsList, setProductsList] = useState([]);
  const [productTitle, setProductTitle] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productUsers, setProductUsers] = useState('');
  const [storageValue, setStorageValue] = useState('');
  const [helpCenter, setHelpCenter] = useState(false);

  function addProduct() {
    const newProduct = {
      productTitle: productTitle,
      productPrice: productPrice,
      productUsers: productUsers,
      storageValue: storageValue,
      helpCenter: helpCenter,
    };

    setProductsList((productsList) => [...productsList, newProduct]);
    setProductTitle('');
    setProductPrice('');
    setProductUsers('');
    setStorageValue('');
    setHelpCenter(false);
  }

  function changeTitle(e) {
    setProductTitle(e.target.value);
  }

  function changePrice(e) {
    setProductPrice(e.target.value);
  }

  function changeUsers(e) {
    setProductUsers(e.target.value);
  }

  function changeStorage(e) {
    setStorageValue(e.target.value);
  }

  function removeItem(indexEl) {
    setProductsList((productsList) =>
      productsList.filter((_, index) => index != indexEl)
    );
  }

  return (
    <>
      <div className='container'>
        <h2 className='display-4 my-4 text-center'>Create new card</h2>
        <div className='mb-4'>
          <input
            type='text'
            className='form-control mb-2'
            placeholder='Product title'
            value={productTitle}
            onChange={changeTitle}
          />
          <input
            type='number'
            className='form-control mb-2'
            placeholder='Price $/mo'
            value={productPrice}
            onChange={changePrice}
          />
          <input
            type='number'
            className='form-control mb-2'
            placeholder='Users value'
            value={productUsers}
            onChange={changeUsers}
          />
          <input
            type='number'
            className='form-control mb-2'
            placeholder='Storage (GB)'
            value={storageValue}
            onChange={changeStorage}
          />
          <div className='form-check mb-2'>
            <input
              type='checkbox'
              className='form-check-input'
              checked={helpCenter}
              onChange={() => setHelpCenter(!helpCenter)}
              id='helpCenterCheck'
            />
            <label className='form-check-label' htmlFor='helpCenterCheck'>
              Help center availability
            </label>
          </div>
          <button
            className='btn btn-primary d-grid gap-2 col-2 mx-auto'
            onClick={addProduct}
          >
            Add card
          </button>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          {productsList.map((item, index) => (
            <div className='col-md-4 mb-4 d-flex' key={index}>
              <div className='card w-100 h-100 d-flex flex-column'>
                <div className='card-header'>
                  <h4 className='my-0 font-weight-normal'>{item.productTitle}</h4>
                </div>
                <div className='card-body d-flex flex-column'>
                  <div>
                    <h1 className='card-title pricing-card-title'>
                      ${item.productPrice} <small className='text-muted'>/ mo</small>
                    </h1>
                    <ul className='list-unstyled mt-3 mb-4'>
                      <li>{item.productUsers} users included</li>
                      <li>{item.storageValue} GB of storage</li>
                      <li>Email support</li>
                      {item.helpCenter && <li>Help center access</li>}
                    </ul>
                  </div>
                  <button
                    type='button'
                    className='btn btn-danger mt-auto'
                    onClick={() => removeItem(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
