import React, { useState } from 'react';

const UrlShortener: React.FC = () => {
  const [url, setUrl] = useState('');

  const handleShorten = () => {
    // Handle URL shortening logic here
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter the link here"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input"
      />
      <button onClick={handleShorten} className="btn mt-4">
        Shorten Now!
      </button>
    </div>
  );
};

export default UrlShortener;
