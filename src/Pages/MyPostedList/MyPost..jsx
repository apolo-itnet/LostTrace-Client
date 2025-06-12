import React, { Suspense } from 'react';
import PostList from './PostList';

const MyPost = () => {
  return (
    <div>
      <h1>My post list</h1>
      <Suspense>
        <PostList></PostList>
      </Suspense>
    </div>
  );
};

export default MyPost;