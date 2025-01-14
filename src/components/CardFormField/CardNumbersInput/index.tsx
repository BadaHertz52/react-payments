import { ChangeEvent, useCallback, useContext, useMemo, useState } from 'react';

import {
  CARD_MARK_REGEXP,
  CARD_NUMBER_REGEXP,
  CARD_NUMBERS,
  CARD_NUMBERS_FORM_MESSAGE,
  CardStep,
  ERROR_MESSAGE,
} from '../../../constants';
import CardFormContext from '../../../contexts/CardFormContext';
import { useCardInput, useNextFormStep } from '../../../hooks';
import { CardNumbers } from '../../../modules/useCardInfoReducer';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../../ErrorMessage';
import Input from '../../Input';

import styles from './style.module.css';

const NUMBERS_NAME_PREFIX = 'numbers_';

type CardNumbersError = boolean[];
export interface CardNumbersInputProps {
  goNextFormStep: (currentStep: CardStep) => void;
}

export default function CardNumbersInput(props: CardNumbersInputProps) {
  const { goNextFormStep } = props;

  const { length } = CARD_NUMBERS;
  const { title, subTitle, label, placeholder } = CARD_NUMBERS_FORM_MESSAGE;

  const cardFormContext = useContext(CardFormContext);
  const [focusIndex, setFocusIndex] = useState(0);
  const { nextFormStep } = useNextFormStep({ currentCardStep: 'numbers' });
  /**
   * 카드 번호에 따라 카드 마크(visa,master,etc)를 반환하는 함수
   * @param numbers 카드 번호
   * @returns
   */
  const getCardMark = (numbers: CardNumbers) => {
    const numberText = numbers.join('');

    if (CARD_MARK_REGEXP.visa.test(numberText)) {
      return 'visa';
    }
    if (CARD_MARK_REGEXP.master.test(numberText)) {
      return 'master';
    }

    return 'etc';
  };

  /**
   * 카드번호 입력값에 대한 유효성 검사를 진행하고, 검사 결과에 따라 numbersError 상태를 업데이트함
   * @param newNumbers 유효성 검사를 진행할 대상
   */
  const checkNumbersError = (
    newNumbers: CardNumbers,
  ): { isError: boolean; newError: CardNumbersError } => {
    const newNumbersError = newNumbers.map((item) =>
      !item ? true : !CARD_NUMBER_REGEXP.test(item.toString()),
    );
    const isError = newNumbersError.some((i) => !i);

    return { isError, newError: newNumbersError };
  };

  const updateCardNumbers = (numbers: CardNumbers, error: CardNumbersError) => {
    if (!cardFormContext) return;
    const { editCardMark, editCardNumbers } = cardFormContext;

    const cardMark = getCardMark(numbers);
    const cardNumbers = error.map((e, i) => (e ? undefined : numbers[i]));

    editCardMark(cardMark);
    editCardNumbers(cardNumbers);
  };
  /**
   * 오류가 없을 경우, 다음 입력 필드 단계로 이동
   * @param error
   */
  const handleGoNextFormStep = (error: CardNumbersError) => {
    if (error.some((i) => i)) return;
    if (!nextFormStep) return;
    goNextFormStep(nextFormStep);
  };

  const { value, setValue, error } = useCardInput<
    CardNumbers,
    CardNumbersError
  >({
    initialValue: Array.from({ length }, () => undefined),
    initialError: Array.from({ length }, () => false),
    validateValue: checkNumbersError,
    updatedInfo: updateCardNumbers,
    handleGoNextFormStep,
  });

  const errorMessage = useMemo(() => {
    const isError = error.some((i) => i);
    return isError ? ERROR_MESSAGE.cardNumber : undefined;
  }, [error]);

  /**
   * change 이벤트가 일어난 input의 입력값, index에 따라 변경될 numbers를 계산하고 반환하는 함수
   *  입력값이 있을 경우 이를 설정한 length에서 자르고 반영함
   */
  const getNewNumbers = useCallback(
    (index: number, text: string) => {
      const newNumbers = [...value];
      newNumbers[index] = text || undefined;

      return newNumbers;
    },
    [value, length],
  );

  const handleNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;

    const { name } = event.target;
    const index = Number(name.replace(NUMBERS_NAME_PREFIX, ''));

    // numbers 업데이트
    const newNumbers = getNewNumbers(index, event.target.value);
    setValue(newNumbers);

    if (event.target.value.length === CARD_NUMBERS.length) {
      setFocusIndex(index >= length - 1 ? index : index + 1);
    }
  };

  return (
    <CardInputSection title={title} subTitle={subTitle} childrenLabel={label}>
      <div className={styles.inputWrap} onChange={handleNumberChange}>
        {Array.from({ length }).map((_, index) => (
          <Input
            key={`number_${index}`}
            name={`${NUMBERS_NAME_PREFIX}${index}`}
            type="text"
            maxLength={CARD_NUMBERS.length}
            label={`카드 ${index + 1}째 네자리 번호`}
            value={value[index]?.toString()}
            error={error[index]}
            placeholder={placeholder}
            isFocus={focusIndex === index}
          />
        ))}
      </div>
      <ErrorMessage>
        <p> {errorMessage}</p>
      </ErrorMessage>
    </CardInputSection>
  );
}
