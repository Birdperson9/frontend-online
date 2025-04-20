import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <>
      <div className='d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow'>
        Header
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
        <ProductList></ProductList>
        <footer className='pt-4 my-md-5 pt-md-5 border-top text-center'>Footer</footer>
      </div>
    </>
  );
}

export default App;
