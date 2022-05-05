import React from 'react';
import { InputContainer, InputWrapper, Label } from './common/styled';
import ErrorMessage from './common/ErrorMessage';
import LetterCounter from './common/LetterCounter';
import Input from './common/Input';

const convertToUpperCase = word => word.toUpperCase();

function CardOwner({ errorMessage, owner, updateOwner }) {
  const handleInputChange = ({ target: { name, value } }) => {
    updateOwner({ name, value: convertToUpperCase(value) });
  };

  return (
    <InputContainer position="relative">
      <div>
        <LetterCounter maxLength={30} currentLength={owner.name.length} />
        <Label>카드 소유자 이름(선택)</Label>
        <InputWrapper>
          <Input
            type="text"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength="30"
            onChange={handleInputChange}
            value={owner.name}
            name="name"
          />
        </InputWrapper>
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardOwner;