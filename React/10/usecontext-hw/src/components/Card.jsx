import React from 'react';

function Card(props) {
  return (
    <div className='col-md-4 mb-4 d-flex' key={props.index}>
      <div className='card w-100 h-100 d-flex flex-column'>
        <div className='card-header'>
          <h4 className='my-0 font-weight-normal'>{props.productTitle}</h4>
        </div>
        <div className='card-body d-flex flex-column'>
          <div>
            <h1 className='card-title pricing-card-title'>
              ${props.productPrice} <small className='text-muted'>/ mo</small>
            </h1>
            <ul className='list-unstyled mt-3 mb-4'>
              <li>{props.productUsers} users included</li>
              <li>{props.storageValue} GB of storage</li>
              <li>Email support</li>
              {props.helpCenter && <li>Help center access</li>}
            </ul>
          </div>
          <button
            type='button'
            className='btn btn-primary mt-auto mb-3'
            onClick={() =>
              props.selectProduct({
                productTitle: props.productTitle,
                productPrice: props.productPrice,
                productUsers: props.productUsers,
                storageValue: props.storageValue,
                helpCenter: props.helpCenter,
              })
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
