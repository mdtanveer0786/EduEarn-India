import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Target, CheckCircle2, Award, List } from 'lucide-react';
import postsData from '../data/posts.json';
import Quiz from '../components/Quiz';
import SEO from '../components/SEO';

const QuizPage = () => {
  const [availableQuizzes, setAvailableQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    // Extract all posts that have quizzes
    const quizzes = postsData
      .filter(post => post.quiz && post.quiz.length > 0)
      .map(post => ({
        id: post.id,
        title: post.title,
        category: post.category,
        questionsCount: post.quiz.length,
        quizData: post.quiz
      }));
    setAvailableQuizzes(quizzes);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="quiz-hub-page pb-20">
      <SEO 
        title="Knowledge Testing Hub" 
        description="Test your knowledge on online earning, trading fundamentals, and digital skills with our interactive quizzes."
      />

      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold mb-6">
              <Award size={16} />
              <span>Interactive Knowledge Testing</span>
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Test Your <span className="text-primary-blue">Skills</span>
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Select a topic below to challenge yourself with quizzes derived directly from our educational articles.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 min-h-[500px]">
        <div className="container max-w-5xl">
          <AnimatePresence mode="wait">
            {!selectedQuiz ? (
              <motion.div 
                key="quiz-menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {availableQuizzes.map(quizObj => (
                  <div key={quizObj.id} className="card p-8 border-main hover:border-primary-blue transition-all flex flex-col h-full group">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-surface-alt rounded-2xl flex items-center justify-center text-primary-blue border-main shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                        <BookOpen size={20} />
                      </div>
                      <span className="text-xs font-extrabold uppercase tracking-widest px-2.5 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-muted border-main">
                        {quizObj.category.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 flex-grow group-hover:text-primary-blue transition-colors">
                      {quizObj.title}
                    </h3>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex items-center gap-2 text-muted font-bold text-sm">
                        <List size={16} />
                        {quizObj.questionsCount} Questions
                      </div>
                      <button 
                        className="btn btn-primary py-2 px-4 text-sm"
                        onClick={() => setSelectedQuiz(quizObj)}
                      >
                        Start Quiz
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="active-quiz"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-3xl mx-auto"
              >
                <button 
                  onClick={() => setSelectedQuiz(null)}
                  className="mb-8 font-bold text-muted hover:text-primary-blue transition-colors flex items-center gap-2"
                >
                  ← Back to Quiz Menu
                </button>
                <div className="bg-surface border-main rounded-3xl p-8 mb-8 shadow-sm">
                  <h2 className="text-2xl font-bold mb-2">Quiz: {selectedQuiz.title}</h2>
                  <p className="text-muted"><Target size={16} className="inline mr-1" /> Answer {selectedQuiz.questionsCount} questions to test your knowledge.</p>
                </div>
                <Quiz quizData={selectedQuiz.quizData} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default QuizPage;
