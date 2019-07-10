import React from 'react';
import './Cartouche.css';

interface CartoucheI {
  content: string;
}

export const Cartouche: React.FC<CartoucheI> = ({ content }) => {
  return <p>{content}</p>;
};
