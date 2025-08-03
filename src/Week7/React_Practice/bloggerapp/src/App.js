import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlog, setShowBlog] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const bookList = ['React Basics', 'Advanced JavaScript', 'Node.js Guide'];

  return (
    <div className="App">
      <h1>📖 Blogger App</h1>

      {/* Toggle buttons */}
      <button onClick={() => setShowBooks(!showBooks)}>
        {showBooks ? 'Hide Books' : 'Show Books'}
      </button>

      <button onClick={() => setShowBlog(!showBlog)}>
        {showBlog ? 'Hide Blog' : 'Show Blog'}
      </button>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <hr />

      {/* Conditional Rendering - Using && */}
      {showBooks && <BookDetails books={bookList} />}

      {/* Conditional Rendering - Using ternary */}
      {showBlog ? <BlogDetails /> : <p>📄 Blog section is hidden.</p>}

      {/* Conditional Rendering - if/else in component */}
      <CourseDetails isEnrolled={isLoggedIn} />
    </div>
  );
}

export default App;
