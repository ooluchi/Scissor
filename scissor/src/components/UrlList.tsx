const UrlList: React.FC = () => {
    // Sample data
    const urls = [
      { shortUrl: 'https://linkly.com/Bn41aC0lnxj', originalUrl: 'https://twitter.com/tweets/8reICoiuH', clicks: 1313, status: 'Active', date: 'Oct 10, 2023' },
      // More URLs here...
    ];
  
    return (
      <table className="table-auto w-full mt-8">
        <thead>
          <tr>
            <th>Short Link</th>
            <th>Original Link</th>
            <th>QR Code</th>
            <th>Clicks</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, index) => (
            <tr key={index}>
              <td>{url.shortUrl}</td>
              <td>{url.originalUrl}</td>
              <td><img src={`https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=${url.shortUrl}`} alt="QR Code" /></td>
              <td>{url.clicks}</td>
              <td className={url.status === 'Active' ? 'text-green-500' : 'text-red-500'}>{url.status}</td>
              <td>{url.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  
  export default UrlList;
  