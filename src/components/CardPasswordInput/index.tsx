import { ChangeEvent } from 'react';

import {
  CARD_PASSWORD,
  CARD_PASSWORD_MESSAGE,
  CARD_PASSWORD_REGEXP,
  ERROR_MESSAGE,
  FIRST_INPUT_INDEX,
} from '../../constants';
import useFocusRef from '../../hooks/useFocusRef';
import useInput from '../../hooks/useInput';
import { sliceText } from '../../utils/textChangerUtils';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

export interface CardPasswordInputProps {
  editCardPassword: (password: string) => void;
}

function CardPasswordInput(props: CardPasswordInputProps) {
  const { editCardPassword } = props;

  const { focusTargetRef } = useFocusRef<HTMLDivElement>(FIRST_INPUT_INDEX);

  const validateValue = (value: string) => {
    const newError = !CARD_PASSWORD_REGEXP.test(value);
    return { newError };
  };

  const updateCardPassword = (value: string, error: boolean) => {
    if (!error) return;
    editCardPassword(value);
  };

  const { value, setValue, error } = useInput<string, boolean>({
    initialValue: '',
    initialError: false,
    validateValue,
    updatedInfo: updateCardPassword,
  });

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    // password 업데이트
    const newPassword = sliceText(event.target.value, CARD_PASSWORD.length);
    setValue(newPassword);
  };

  return (
    <CardInputSection
      title={CARD_PASSWORD_MESSAGE.title}
      subTitle={CARD_PASSWORD_MESSAGE.subTitle}
      childrenLabel={CARD_PASSWORD_MESSAGE.label}
    >
      <div ref={focusTargetRef} className={styles.inputWrap}>
        <Input
          name="password"
          type="password"
          error={error}
          label={CARD_PASSWORD_MESSAGE.label}
          placeholder={CARD_PASSWORD_MESSAGE.placeholder}
          value={value}
          onChange={handlePasswordChange}
        />
      </div>
      <ErrorMessage>
        <p>{error ? ERROR_MESSAGE.password : ''}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}

export default CardPasswordInput;