// Display a list of popular travel destinations with images and brief descriptions.
import React from 'react';

const Destination = () => {
  const destinations = [
    {
      name: 'Paris, France',
      image: 'https://example.com/paris.jpg',
      description: 'The city of love and lights, known for its iconic Eiffel Tower and rich culture.'
    },
    {
      name: 'Tokyo, Japan',
      image: 'https://example.com/tokyo.jpg',
      description: 'A bustling metropolis that blends traditional culture with modern technology.'
    },
    {
      name: 'Sydney, Australia',
      image: 'https://example.com/sydney.jpg',
      description: 'Famous for its stunning harbor, Opera House, and vibrant arts scene.'
    }
  ];

  return (
    <div>
      <h2>Popular Travel Destinations</h2>
      <ul>
        {destinations.map((destination, index) => (
          <li key={index}>
            <h3>{destination.name}</h3>
            <img src={destination.image} alt={destination.name} style={{ width: '200px' }} />
            <p>{destination.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Destination;