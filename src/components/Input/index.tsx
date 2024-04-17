import React from 'react';

import useInput, { UseInputProps } from './useInput';

interface InputProps
  extends React.HTMLProps<HTMLInputElement>,
    Omit<UseInputProps, 'initialValue'> {}

function Input(props: InputProps) {
  const { maxLength } = props;

  const { value, handleChange } = useInput({
    initialValue: undefined,
    maxLength,
  });

  return <input {...props} value={value} onChange={handleChange} />;
}

export default Input;