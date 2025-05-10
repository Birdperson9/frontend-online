import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import { useState } from 'react';
import ProductList from './components/ProductList';
import ProductContext from './context/ProductContext';
import Cart from './components/Cart';

function App() {
  const [productsList, setProductsList] = useState([
    {
      productTitle: 'Free',
      productPrice: 0,
      productUsers: 10,
      storageValue: 2,
      helpCenter: true,
    },
    {
      productTitle: 'Pro',
      productPrice: 15,
      productUsers: 20,
      storageValue: 10,
      helpCenter: true,
    },
    {
      productTitle: 'Enterprise',
      productPrice: 29,
      productUsers: 30,
      storageValue: 15,
      helpCenter: true,
    },
  ]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        productsList,
        setProductsList,
        selectedProducts,
        setSelectedProducts,
      }}
    >
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between p-3 px-md-4 mb-3 bg-white border-bottom box-shadow'>
        <h2>Header</h2>
      </div>

      <div className='pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center'>
        <h1 className='display-4'>Pricing</h1>
        <p className='lead'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. In praesentium et unde
          laborum dicta repellat accusamus tenetur corrupti dignissimos fugit a
          doloremque, voluptatem soluta veritatis.
        </p>
      </div>

      <div className='container'>
        <ProductList />
        <Cart />
        <footer className='pt-4 my-md-5 pt-md-5 border-top text-center'>Footer</footer>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
