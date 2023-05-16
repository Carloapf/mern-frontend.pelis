import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigation } from './components/Navigation';
import MoviesList from './components/MoviesList';
import CreateUser from './components/CreateUser';
import AddReview from './components/AddReview';

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <div className="container p-4">
        <Routes>
          <Route exact path="/" element={<MoviesList />} />
          <Route path='/user' element={<CreateUser />} />
          <Route path='/create' element={<AddReview />}/>
          Hello Wolrd
        </Routes>
      </div>



    </BrowserRouter>
  );
}

export default App;