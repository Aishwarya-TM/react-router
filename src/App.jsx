import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import Post from './components/Post';
import Missing from './components/Missing';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/newpost">New Post</Link></li>
          <li><Link to="/postpage">Post Page</Link></li>

        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="/postpage" element={<PostPage/>} />
        <Route path="/postpage/:id" element={<Post/>} /> {/* sing params for many routes */}
        <Route path='*' element={<Missing/>}/> {/* catch all undefined route */}

      
      </Routes>
    </Router>
  );
};

export default App;
