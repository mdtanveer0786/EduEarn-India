import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <Link to={`/post/${post.id || ''}`} className="card post-card group h-full flex flex-col">
      <div className="post-image relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/10 dark:to-blue-900/20">
        <div className="text-primary-blue transform group-hover:scale-110 transition-transform duration-500">
          <BookOpen size={48} strokeWidth={1.5} />
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-primary-blue text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm uppercase tracking-wider">
            {post.category?.replace('-', ' ')}
          </span>
        </div>
      </div>
      
      <div className="flex-grow flex flex-col p-2">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-blue transition-colors line-clamp-2 leading-snug">
          {post.title}
        </h3>
        
        <p className="text-muted text-sm mb-6 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="pt-4 mt-auto border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-medium text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary-blue/70" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-primary-blue/70" />
              {post.readTime}
            </span>
          </div>
          
          <div className="text-primary-blue flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
            Read <ChevronRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
