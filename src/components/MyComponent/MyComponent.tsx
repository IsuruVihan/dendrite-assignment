import React from 'react';
import { Button } from 'react-bootstrap';
import './MyComponent.scss';

interface MyComponentProps {
  onClick: () => void;
}

const MyComponent:React.FC<MyComponentProps> = ({ onClick }) => {
  return (
    <div className="my-component">
      <Button className="my-button" onClick={onClick}>Click me!</Button>
    </div>
  );
};

export default MyComponent;