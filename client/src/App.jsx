// App.jsx

import React, { useEffect, useState } from 'react';

const App = () => {
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchMemberList = async () => {
      try {
        const response = await fetch('/api/directory/memberList?type=12&division=III');

        // Check if response is OK and content type is JSON
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Check if the response content type is JSON
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Expected JSON response, but got something else');
        }

        // Parse the JSON data
        const data = await response.json();
        setMembers(data);  // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data.');
      }
    };

    fetchMemberList();
  }, []);

  return (
    <div>
      <h1>Member List</h1>
      {error && <p>{error}</p>}  {/* Show error if there's an issue */}
      {members.length > 0 ? (
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member.name}</li> 
          ))}
        </ul>
      ) : (
        <p>Loading...</p>  
      )}
    </div>
  );
};

export default App;
