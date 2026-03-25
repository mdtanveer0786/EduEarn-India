import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id || ''}`} className="post-card fade-in">
      <div className="post-image">
        <i className={post.icon}></i>
      </div>
      <div className="post-content">
        <span className="post-category">{post.category}</span>
        <h3>{post.title}</h3>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-meta">
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
