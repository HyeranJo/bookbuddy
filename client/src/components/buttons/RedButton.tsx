import React from 'react';
import { Styled_RedButton } from './RedButton.style';

interface RedButtonProps {
  name: string;
  height?: number;
  width?: number;
  onClick?: () => void;
}

const RedButton = ({ name, height, width, onClick }: RedButtonProps) => {
  return (
    <div>
      <Styled_RedButton.Button height={height} width={width} onClick={onClick}>
        {name}
      </Styled_RedButton.Button>
    </div>
  );
};

export default RedButton;
