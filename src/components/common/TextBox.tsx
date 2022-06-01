import React from 'react';
import styled from 'styled-components';

interface TextBoxProps {
  children: React.ReactNode;
  fontSize: string;
  color: string;
}

const StyledTextBox = styled.p<TextBoxProps>`
  font-size: ${(props) => props.fontSize || '24px'};
  color: ${(props) => props.color || props.theme.BLACK};
  margin: 0px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
`;

const TextBox = ({ children, fontSize, color, ...rest }: TextBoxProps) => {
  return (
    <StyledTextBox
      fontSize={fontSize}
      color={color}
      className="text-box"
      {...rest}
    >
      {children}
    </StyledTextBox>
  );
};

export default TextBox;