// src/services/api.js
export const fetchMemberList = async () => {
  try {
    const response = await fetch('https://web3.ncaa.org/directory/memberList?type=12&division=III');
    
    // Check if the response is valid
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json(); // Expecting JSON response
    return data;  // Return the data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  // Propagate error to be handled by the component
  }
};
