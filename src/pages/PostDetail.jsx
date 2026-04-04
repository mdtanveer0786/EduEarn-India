import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ArrowLeft, 
  Info, 
  Lightbulb, 
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  ChevronRight,
  List
} from 'lucide-react';
import postsData from '../data/posts.json';
import Quiz from '../components/Quiz';
import SEO from '../components/SEO';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);

  // Reading progress bar
  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    setReadingProgress(Math.min(progress, 100));
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const currentPost = postsData.find(p => p.id === parseInt(id));
    setPost(currentPost);

    if (currentPost) {
      const related = postsData
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
    
    window.scrollTo(0, 0);
  }, [id]);

  // Share URL helpers
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post ? post.title : '';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`,
  };

  // Render content blocks
  const renderContent = (contentBlocks) => {
    if (!contentBlocks || contentBlocks.length === 0) return null;
    
    return contentBlocks.map((block, index) => {
      switch (block.type) {
        case 'paragraph':
          return <p key={index} className="leading-relaxed mb-6 text-lg">{block.text}</p>;
        case 'heading':
          const HeadingTag = `h${block.level || 2}`;
          return <HeadingTag key={index} className="text-2xl font-bold mb-4 mt-10">{block.text}</HeadingTag>;
        case 'list':
          return (
            <ul key={index} className="mb-8 space-y-3">
              {block.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 p-3 bg-surface-alt rounded-xl border-main">
                  <CheckCircle2 size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  if (!post) {
    return (
      <div className="container py-20 text-center" style={{paddingTop: '10rem'}}>
        <h2 className="text-3xl font-bold mb-6">Post not found</h2>
        <Link to="/blog" className="btn btn-primary">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="post-detail-page pb-20">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        ogType="article"
      />

      {/* Reading Progress Bar */}
      <div 
        className="reading-progress-bar" 
        style={{ width: `${readingProgress}%` }} 
      />

      {/* Header Section */}
      <header className="pt-32 pb-16 bg-surface-alt border-t" style={{borderTop: 'none'}}>
        <div className="container max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-blue font-bold mb-8 hover:translate-x-1 transition-transform no-underline">
            <ArrowLeft size={18} /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-4 items-center mb-6">
              <span className="bg-primary-blue text-white text-xs font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                {post.category.replace('-', ' ')}
              </span>
              <div className="flex items-center gap-2 text-muted text-xs font-bold uppercase tracking-wider">
                <Calendar size={14} className="text-primary-blue" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-muted text-xs font-bold uppercase tracking-wider">
                <Clock size={14} className="text-primary-blue" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-blue text-white rounded-full flex items-center justify-center shadow-lg">
                <User size={24} />
              </div>
              <div>
                <p className="font-bold text-lg mb-0">{post.author}</p>
                <p className="text-xs text-muted font-bold uppercase tracking-widest mb-0">Educational Content Specialist</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content Section */}
      <div className="container max-w-4xl py-16">
        {/* Hero Image Placeholder */}
        <div className="relative rounded-3xl overflow-hidden aspect-video mb-16 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-900/20 dark:to-green-900/20 flex items-center justify-center border-main shadow-xl">
           <BookOpen size={120} className="text-primary-blue opacity-20" />
           <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border-main shadow-lg">
             <p className="text-center text-xs font-bold uppercase tracking-widest text-primary-blue mb-0">Educational Resource Illustration</p>
           </div>
        </div>

        <div className="post-body">
          {/* Disclaimer Box */}
          <div className="bg-blue-50 dark:bg-blue-900/10 border-l-4 border-primary-blue p-8 rounded-r-2xl mb-12 flex gap-6 items-start">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-primary-blue flex-shrink-0 shadow-sm border-main">
              <Info size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Educational Disclaimer</h4>
              <p className="text-muted text-sm leading-relaxed mb-0">
                This article is for educational purposes only. We do not provide financial advice, trading signals, or guaranteed income claims. Your success depends on your effort and market conditions. Always perform due diligence.
              </p>
            </div>
          </div>

          {/* Excerpt / Intro Quote */}
          <p className="text-xl text-muted leading-relaxed italic mb-12 border-l-4 pl-8" style={{borderColor: 'var(--border-color)'}}>
            {post.excerpt}
          </p>

          {/* Dynamic Content Rendering */}
          {post.content && post.content.length > 0 ? (
            <div className="mb-12">
              {renderContent(post.content)}
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6 mt-16">Introduction</h2>
              <p className="leading-relaxed mb-8">
                In today's rapidly evolving digital economy, mastering <span className="text-primary-blue font-bold">{post.title.toLowerCase()}</span> has become more critical than ever. Whether you're a student, a professional looking for a side hustle, or an aspiring entrepreneur in India, understanding the fundamentals is your first step toward success.
              </p>
            </>
          )}

          {/* Pro Tip */}
          <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-8 rounded-r-2xl mb-12 flex gap-6 items-start">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-green-500 flex-shrink-0 shadow-sm border-main">
              <Lightbulb size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Pro Tip for Beginners</h4>
              <p className="text-muted text-sm leading-relaxed mb-0">
                Quality over quantity is the secret to digital growth. Dedicate at least 30 minutes daily to deep learning rather than skimming multiple topics. Consistency compounds over time.
              </p>
            </div>
          </div>

          {/* Safety Warning */}
          <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-8 rounded-r-2xl mb-12 flex gap-6 items-start">
            <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-red-500 flex-shrink-0 shadow-sm border-main">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2">Crucial Safety Warning</h4>
              <p className="text-muted text-sm leading-relaxed mb-0">
                Never share your OTPs, passwords, or personal banking details with anyone claiming to offer online earning opportunities. Legitimate platforms will never ask for such sensitive information.
              </p>
            </div>
          </div>

          {/* Quiz Section */}
          {post.quiz && post.quiz.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mb-8 mt-16 flex items-center gap-3">
                <List size={28} className="text-primary-blue" />
                Test Your Knowledge
              </h2>
              <div className="mb-16">
                <Quiz quizData={post.quiz} />
              </div>
            </>
          )}

          {/* Share Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-12 border-t gap-8">
             <div className="flex items-center gap-3">
               <Share2 className="text-primary-blue" size={24} />
               <span className="font-bold">Share this educational guide</span>
             </div>
             <div className="flex gap-4">
               {[
                 { icon: <Facebook size={20} />, color: 'hover:bg-blue-600', label: 'Facebook', url: shareLinks.facebook },
                 { icon: <Twitter size={20} />, color: 'hover:bg-sky-500', label: 'Twitter', url: shareLinks.twitter },
                 { icon: <Linkedin size={20} />, color: 'hover:bg-blue-700', label: 'LinkedIn', url: shareLinks.linkedin },
                 { icon: <MessageCircle size={20} />, color: 'hover:bg-green-500', label: 'WhatsApp', url: shareLinks.whatsapp }
               ].map((social, i) => (
                 <a 
                  key={i} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-surface-alt border-main flex items-center justify-center text-muted hover:text-white transition-all shadow-sm ${social.color}`}
                  aria-label={`Share on ${social.label}`}
                 >
                   {social.icon}
                 </a>
               ))}
             </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-8">Continue Your Journey</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(related => (
                  <Link 
                    key={related.id} 
                    to={`/post/${related.id}`} 
                    className="card p-6 bg-surface-alt border-main hover:border-primary-blue transition-all group no-underline"
                  >
                    <h4 className="font-bold mb-3 group-hover:text-primary-blue transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-muted text-sm mb-4 line-clamp-2">{related.excerpt}</p>
                    <div className="flex items-center gap-1 text-xs font-bold text-primary-blue uppercase tracking-widest mt-auto">
                      Read More <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
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
