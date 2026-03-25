import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../data/posts.json';
import Quiz from '../components/Quiz';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const sampleQuizData = [
    {
      questionText: "What is the most important factor for long-term success in online earning?",
      answerOptions: [
        "Finding a 'get rich quick' scheme",
        "Consistency and continuous skill development",
        "Investing all your savings immediately",
        "Sharing your OTP with experts"
      ],
      correctAnswer: 1,
      explanation: "Consistency and building real skills are the only sustainable ways to earn online. Shortcuts often lead to scams."
    },
    {
      questionText: "Why is a disclaimer important in financial education?",
      answerOptions: [
        "To confuse the readers",
        "To hide the author's identity",
        "To clarify that content is for education and not financial advice",
        "To guarantee profits for everyone"
      ],
      correctAnswer: 2,
      explanation: "Disclaimers ensure that learners understand they are responsible for their own financial decisions and that the content is purely educational."
    }
  ];

  useEffect(() => {
    const currentPost = postsData.find(p => p.id === parseInt(id));
    setPost(currentPost);

    if (currentPost) {
      const related = postsData
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
    
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="container py-5 text-center" style={{paddingTop: '8rem'}}>
        <h2>Post not found</h2>
        <Link to="/blog" className="btn btn-primary mt-3">Back to Blog</Link>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <div className="container">
        <header className="post-header">
          <div className="post-meta">
            <span className="post-category">{post.category.replace('-', ' ')}</span>
            <span className="post-date">{post.date}</span>
            <span className="post-read-time">{post.readTime}</span>
          </div>
          <h1 className="post-title">{post.title}</h1>
          <div className="post-author">
            <div className="author-avatar">
              <i className="fas fa-user"></i>
            </div>
            <div className="author-info">
              <div className="author-name">{post.author}</div>
              <div className="author-title">Educational Content Specialist</div>
            </div>
          </div>
        </header>

        <div className="post-featured-image">
          <div className="image-placeholder-large">
            <i className={post.icon}></i>
            <p>Educational Guide Illustration</p>
          </div>
        </div>

        <div className="post-content">
          <div className="disclaimer-box">
            <h4><i className="fas fa-info-circle"></i> Educational Disclaimer</h4>
            <p>This article is for educational purposes only. We do not provide financial advice, trading tips, or guaranteed income claims. Always consult with a professional and do your own research before making any decisions.</p>
          </div>

          <p>{post.excerpt}</p>
          
          <h2>Introduction</h2>
          <p>In today's digital age, learning how to {post.title.toLowerCase()} is more important than ever. This guide will walk you through the essential concepts and steps you need to know as a beginner in India.</p>
          
          <div className="info-box tip">
            <div className="info-box-icon"><i className="fas fa-lightbulb"></i></div>
            <div className="info-box-content">
              <h4>Pro Tip for Beginners</h4>
              <p>Consistency is key. Whether you're learning a new skill or understanding market basics, dedicate at least 30 minutes every day to your education.</p>
            </div>
          </div>

          <h2>Key Concepts</h2>
          <p>Before diving deep, let's understand the core pillars of {post.category.replace('-', ' ')}:</p>
          <ul>
            <li><strong>Foundational Knowledge:</strong> Understanding the "why" before the "how".</li>
            <li><strong>Risk Assessment:</strong> Every opportunity comes with risks that must be managed.</li>
            <li><strong>Practical Application:</strong> Learning by doing is the fastest way to grow.</li>
            <li><strong>Continuous Learning:</strong> The digital landscape changes rapidly in India.</li>
          </ul>

          <div className="skills-grid">
            <div className="skill-item">
              <i className="fas fa-brain"></i>
              <span>Critical Thinking</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-mouse-pointer"></i>
              <span>Digital Literacy</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-search-dollar"></i>
              <span>Market Research</span>
            </div>
            <div className="skill-item">
              <i className="fas fa-shield-alt"></i>
              <span>Safety First</span>
            </div>
          </div>

          <h2>Step-by-Step Implementation</h2>
          <p>Follow these steps to build a solid foundation in this area:</p>
          <ol>
            <li>Research reputable sources and avoid "get rich quick" schemes.</li>
            <li>Define your goals and what you hope to achieve through this learning.</li>
            <li>Start with free resources before investing in paid courses or tools.</li>
            <li>Join educational communities to discuss and clarify your doubts.</li>
          </ol>

          <div className="info-box warning">
            <div className="info-box-icon"><i className="fas fa-exclamation-triangle"></i></div>
            <div className="info-box-content">
              <h4>Safety Warning</h4>
              <p>Never share your financial details, OTPs, or passwords with anyone claiming to help you earn online. Stay vigilant against scams.</p>
            </div>
          </div>

          <h2>Conclusion</h2>
          <p>Mastering {post.title.toLowerCase()} takes time and patience. We hope this educational guide has given you a clear starting point for your journey.</p>

          <h2>Test Your Knowledge</h2>
          <p>Take this quick quiz to see how well you've understood the concepts in this guide.</p>
          <Quiz quizData={sampleQuizData} />

          <div className="share-section">
            <p>Help others learn by sharing this guide!</p>
            <div className="share-buttons">
              <button className="share-btn facebook"><i className="fab fa-facebook-f"></i></button>
              <button className="share-btn twitter"><i className="fab fa-twitter"></i></button>
              <button className="share-btn linkedin"><i className="fab fa-linkedin-in"></i></button>
              <button className="share-btn whatsapp"><i className="fab fa-whatsapp"></i></button>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="related-articles">
              <h3>Related Educational Guides</h3>
              <div className="related-grid">
                {relatedPosts.map(related => (
                  <Link key={related.id} to={`/post/${related.id}`} className="related-card">
                    <h4>{related.title}</h4>
                    <p>{related.date}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default PostDetail;
