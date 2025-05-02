import React, { useEffect, useState } from 'react';

const Posts = ({ title, onSelectPost }) => {
  const [posts, setPosts] = useState([]);
  const [visibility, setVisibility] = useState(5);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((resp) => resp.json())
      .then((data) => setPosts(data.slice(0, visibility)));
  }, [visibility]);

  function loadMore() {
    setVisibility((visibility) => visibility + 5);
  }

  return (
    <div>
      <h3 className='text-center'>{title}</h3>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope='col'>User ID</th>
            <th scope='col'>Post ID</th>
            <th scope='col'>Title</th>
            <th scope='col'>Post</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <tr key={index}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <td>
                  <button
                    className='btn btn-primary'
                    onClick={() => {
                      onSelectPost(post);
                    }}
                  >
                    Add to list
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='p-5 text-center' onClick={loadMore}>
        <button className='btn btn-success'>Load 5 more posts</button>
      </div>
    </div>
  );
};

export default Posts;
