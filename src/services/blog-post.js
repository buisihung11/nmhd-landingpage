import request from './axios';

export const getBlogPost = type =>
  request.get('/blogposts', {
    params: {
      blogPostType: type ?? -1,
    },
  });
