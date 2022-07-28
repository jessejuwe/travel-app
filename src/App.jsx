import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './layouts/Navbar';
import Footer from './containers/Footer/Footer';
import LoadingSpinner from './components/UI/LoadingSpinner';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import WatchTrailer from './pages/WatchTrailer';

const App = () => {
  // prettier-ignore
  const fallbackUI = (<div className='centered'><LoadingSpinner /></div>);

  return (
    <div className="App">
      <Suspense fallback={fallbackUI} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/trailers" element={<WatchTrailer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
