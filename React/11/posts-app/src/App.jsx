import { useState } from 'react';
import './App.css';
import Posts from './components/Posts';

function App() {
  const [selectedPost, setSelectedPost] = useState([]);

  function selectPost(post) {
    setSelectedPost((selectPost) => [...selectPost, post]);
  }

  function removePost(indexRemove) {
    setSelectedPost((post) => post.filter((value, index) => index !== indexRemove));
  }

  return (
    <div className='container py-3'>
      <Posts
        title='Posts from https://jsonplaceholder.typicode.com/posts'
        onSelectPost={selectPost}
      ></Posts>

      <h1 className='text-center'>Added to list posts:</h1>
      {selectedPost.length > 0 ? (
        <ul className='list-group'>
          {selectedPost.map((post, index) => {
            return (
              <li key={index} className='list-group-item d-flex justify-content-between'>
                {post.title}{' '}
                <button className='btn btn-danger' onClick={() => removePost(index)}>
                  Remove Post
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
