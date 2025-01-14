import { ChangeEvent, useContext } from 'react';

import {
  CARD_PASSWORD,
  CARD_PASSWORD_MESSAGE,
  CARD_PASSWORD_REGEXP,
  ERROR_MESSAGE,
} from '../../../constants';
import CardFormContext from '../../../contexts/CardFormContext';
import { useCardInput } from '../../../hooks';
import { sliceText } from '../../../utils/textChangerUtils';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../../ErrorMessage';
import Input from '../../Input';

import styles from './style.module.css';

function CardPasswordInput() {
  const cardFormContext = useContext(CardFormContext);

  const validateValue = (value: string) => {
    const newError = !CARD_PASSWORD_REGEXP.test(value);
    return { newError };
  };

  const updateCardPassword = (value: string, error: boolean) => {
    if (!cardFormContext) return;
    cardFormContext.editCardPassword(error ? null : value);
  };

  const { value, setValue, error } = useCardInput<string, boolean>({
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
      <div className={styles.inputWrap}>
        <Input
          name="password"
          type="password"
          error={error}
          label={CARD_PASSWORD_MESSAGE.label}
          placeholder={CARD_PASSWORD_MESSAGE.placeholder}
          value={value}
          onChange={handlePasswordChange}
          isFocus
        />
      </div>
      <ErrorMessage>
        <p>{error ? ERROR_MESSAGE.password : ''}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}

export default CardPasswordInput;
