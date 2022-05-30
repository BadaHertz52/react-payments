import React from "react";
import styled from "styled-components";

import { INPUT_PRIMARY_BG_COLOR, PLACEHOLDER_PRIMARY_COLOR } from "style";

interface InputProps {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: "text" | "number" | "password";
  name?: string;
  placeholder?: string;
  readOnly?: boolean;
  value?: string;
  maxLength?: number;
  required?: boolean;
  width?: string;
}

const InputBox = styled.input`
  background-color: ${INPUT_PRIMARY_BG_COLOR};
  height: 45px;
  width: ${(props) => props.width || "50px"};
  text-align: center;
  outline-offset: 2px;
  border-radius: 0.25rem;
  border: none;

  &::placeholder {
    color: ${PLACEHOLDER_PRIMARY_COLOR};
  }
  &:focus {
    outline: 1px solid ${PLACEHOLDER_PRIMARY_COLOR};
  }
`;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, type, name, ...rest }, ref) => (
    <InputBox ref={ref} onChange={onChange} type={type} name={name} {...rest} />
  )
);

export default Input;
