import { useNavigate } from 'react-router';
import { useForm } from '../../../hooks/useForm';
import { Card } from 'types/Card';
import { areValidCardInfo, validator } from 'validator';

export const useCardFormHandler = (cardInfo: Card, handleModal: () => void) => {
  const bank = cardInfo.cardCompany.company;

  const navigate = useNavigate();

  const onSubmit = (formData: FormData) => {
    const formDataObject = Object.fromEntries(formData.entries());

    if (!bank) {
      alert('카드사를 선택해주세요.');
      handleModal();
      return;
    }

    if (!validator.isValidDate([cardInfo.date.month, cardInfo.date.year])) {
      alert('유효한 카드 날짜를 입력해주세요.');
      return;
    }

    if (areValidCardInfo(formDataObject)) {
      navigate('/card-name');
    } else {
      alert('값을 모두 입력해 주세요.');
    }
  };

  const { handleForm } = useForm(onSubmit);

  return { handleForm };
};
