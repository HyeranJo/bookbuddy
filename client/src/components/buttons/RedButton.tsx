import React from 'react';
import { Styled_RedButton } from './RedButton.style';

interface RedButtonProps {
  name: string;
  height?: number;
  width?: number;
}

const RedButton = ({ name, height, width }: RedButtonProps) => {
  return (
    <div>
      <Styled_RedButton.Button height={height} width={width}>
        {name}
      </Styled_RedButton.Button>
    </div>
  );
};

export default RedButton;
