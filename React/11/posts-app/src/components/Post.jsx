import React from 'react';

const Post = ({ index, userId, id, title, body, onSelectPost }) => {
  return (
    <div>
      <tr key={index}>
        <td>{userId}</td>
        <td>{id}</td>
        <td>{title}</td>
        <td>{body}</td>
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
    </div>
  );
};

export default Post;
