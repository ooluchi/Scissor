
import React from 'react';
import Header from './components/Header';
import UrlShortener from './components/UrlShortner';
import UrlList from './components/UrlList';




const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-4xl font-bold mb-8">
          Shorten Your Looong Links 
        </h1>
        <UrlShortener />
        <UrlList />
      </div>
      
    </div>
  );
};

export default App;
