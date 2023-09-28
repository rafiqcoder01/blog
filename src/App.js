import { Route,Routes } from 'react-router-dom';
import './App.css';
import { Home, Blog, BlogDetails, Category, Companies, Events, About, SearchResult, EventDetail,TermsPage } from './pages';
import PrivacyPage from './pages/PrivacyPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Blog />} path='/blog' />
        <Route element={<BlogDetails />} path='/blog/:id' />
        <Route element={<Category />} path='/blog/category' />
        <Route element={<Companies />} path='/companies' />
        <Route element={<Events />} path='/events' />
        <Route element={<About />} path='/about' />
        <Route element={<SearchResult />} path='/search' />
        <Route element={<EventDetail />} path='/events/:id' />
        <Route element={<TermsPage />} path='/terms' />
        <Route element={<PrivacyPage />} path='/privacy-policy' />
      </Routes>
    </>
  );
}

export default App;
