import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import EventCategoriesPage from './Pages/EventCategoriesPage';
import HomePage from './Pages/HomePage';
import EventDetailPage from './Pages/EventDetailPage';
import SiteHeader from './Components/SiteHeader';

function App() {
  return<>
  <SiteHeader/>

  <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/category/:categoryId" element={<EventCategoriesPage/>} />
      <Route path="/event/:eventId" element={<EventDetailPage/>} />



  </Routes>
  
  
  
  </>
}

export default App;
