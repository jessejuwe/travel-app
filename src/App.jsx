import { Suspense, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './layouts/Navbar';
import LoadingSpinner from './components/UI/LoadingSpinner';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import WatchTrailer from './pages/WatchTrailer';

const App = () => {
  // prettier-ignore
  const fallbackUI = (<div className='centered'><LoadingSpinner /></div>);

  return (
    <Fragment>
      <Suspense fallback={fallbackUI} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/trailers" element={<WatchTrailer />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  );
};

export default App;
