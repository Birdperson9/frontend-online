import React, { useRef } from 'react';
import { useState } from 'react';
import Card from './Card';

const ProductList = (props) => {
  const [productsList, setProductsList] = useState(props.initialProductList);
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

  const [changeLog, setChangeLog] = useState(null);
  const prevTitle = useRef(productTitle);

  function setTitleFromCard(newTitle) {
    if (prevTitle.current !== newTitle) {
      setChangeLog(`You've changed from "${prevTitle.current}" plan to "${newTitle}"`);
      prevTitle.current = newTitle;
    }
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
            <Card
              key={index}
              index={index}
              productTitle={item.productTitle}
              productPrice={item.productPrice}
              productUsers={item.productUsers}
              storageValue={item.storageValue}
              helpCenter={item.helpCenter}
              removeItem={removeItem}
              setTitleFromCard={setTitleFromCard}
            ></Card>
          ))}

          <h3 className='text-center'>{changeLog}</h3>
        </div>
      </div>
    </>
  );
};

export default ProductList;
