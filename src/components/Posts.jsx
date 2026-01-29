import { useState, useEffect } from 'react';
import './Posts.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // WordPress REST API endpoint
  const API_URL = 'http://localhost/headless1/wp-json/wp/v2/posts';

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error loading posts</h2>
        <p>{error}</p>
        <p className="error-hint">
          Make sure your WordPress site is running and the REST API is accessible at:
          <br />
          <code>{API_URL}</code>
        </p>
        <button onClick={fetchPosts} className="retry-button">
          Retry
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="no-posts">
        <h2>No posts found</h2>
        <p>There are no posts available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="posts-container">
      <h1 className="posts-title">WordPress Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <div className="post-header">
              <h2 className="post-title">
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </h2>
              <div className="post-meta">
                <span className="post-date">
                  {formatDate(post.date)}
                </span>
              </div>
            </div>
            <div 
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
            <a 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="read-more"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Posts;
