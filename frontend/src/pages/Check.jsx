import React, { useState, useEffect } from 'react';

const ApiDataComponent = () => {
  const [data, setData] = useState(null); // State to store the API response
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data); // Store the response data in state
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        setError(error.message); // Set error message in case of failure
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Display loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if any
  }

  return (
    <div>
      <h1>API Data</h1>
      <p>{data?.message}</p> {/* Display the message from the API */}
    </div>
  );
};

export default ApiDataComponent;
