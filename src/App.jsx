import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/products/Products';
import CategoryProductsPage from './pages/products/Category';
import ProductDetailsPage from './pages/products/ProductDetailsPage';

function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:category' element={<CategoryProductsPage />} />
        <Route path='/products/:category/:name' element={<ProductDetailsPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App
