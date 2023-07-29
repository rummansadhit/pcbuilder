import React, { useState } from 'react';

interface PCBuilderCardProps {
  component: any; // Replace 'any' with the actual type of your component data
}

const PCBuilderCard: React.FC<PCBuilderCardProps> = ({ component }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddToBuilder = async () => {
    setLoading(true);
    // Make a POST request to add the component to the user's PC Builder state
    try {
      const response = await fetch('/api/builder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ component }),
      });

      if (response.ok) {
        // Handle success (optional, based on your requirement)
      } else {
        // Handle error (optional, based on your requirement)
        console.error('Error adding component to PC Builder');
      }
    } catch (error) {
      // Handle error (optional, based on your requirement)
      console.error('Error adding component to PC Builder', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Display PC Builder component details here */}
      <button onClick={handleAddToBuilder} disabled={loading}>
        {loading ? 'Adding...' : 'Add to Builder'}
      </button>
    </div>
  );
};

export default PCBuilderCard;

