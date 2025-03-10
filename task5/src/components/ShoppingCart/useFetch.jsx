import { useState, useEffect } from 'react';

export default function useFetch({ url}) {
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track error

  // Async function to fetch cart data
  const getCartInfo = async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        credentials: 'include', // Include cookies for session handling
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(), // Sending item if available
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const cartData = await response.json(); // Assuming the response is JSON
      setData(cartData); // Update state with fetched data
    } catch (error) {
      setError(error.message); // Update state with error message
    } finally {
      setLoading(false); // Set loading to false once fetch is complete
    }
  };

  // Use effect to call the fetch function when the component mounts
  useEffect(() => {
    getCartInfo();
  }, [url]); // Re-run if URL or item changes

  return { data, loading, error }; // Return the states so they can be used in the component
}
