import { useState, useEffect } from 'react';
 
function HomePage({ onComplete }) {
  const [counter, setCounter] = useState(5);
 
  useEffect(() => {
    if (counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [counter, onComplete]);
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-8">
          Welcome!
        </h1>
        <div className="bg-white rounded-full w-48 h-48 flex items-center justify-center mx-auto shadow-2xl">
          <span className="text-8xl font-bold text-purple-600">
            {counter}
          </span>
        </div>
        <p className="text-white text-xl mt-8 opacity-90">
          Redirecting in {counter} second{counter !== 1 ? 's' : ''}...
        </p>
      </div>
    </div>
  );
}
 
function WelcomePage({ onReset }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center">
      <div className="text-center px-8">
        <h1 className="text-6xl font-bold text-white mb-6">
          🎉 Welcome! 🎉
        </h1>
        <p className="text-white text-2xl mb-8">
          You've successfully arrived at your destination!
        </p>
        <button
          onClick={onReset}
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
        >
          Go Back to Countdown
        </button>
      </div>
    </div>
  );
}
 
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
 
  const handleComplete = () => {
    setCurrentPage('welcome');
  };
 
  const handleReset = () => {
    setCurrentPage('home');
  };
 
  return (
    <>
      {currentPage === 'home' && <HomePage onComplete={handleComplete} />}
      {currentPage === 'welcome' && <WelcomePage onReset={handleReset} />}
    </>
  );
}
 