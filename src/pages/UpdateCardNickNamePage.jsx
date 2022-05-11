/* eslint-disable no-restricted-globals */
import { useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { CardListContext } from '../context';
import { Header, Title, GuideMessage } from '../components/common/styled';
import GoBackButton from '../components/GoBackButton';
import CardItem from '../components/CardItem';
import Button from '../components/common/Button';
import Form from '../components/common/Form';

import { CONFIRM_MESSAGE } from '../constants';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GuideMessageWrapper = styled.div`
  margin: 80px auto;
`;

const CardNickNameInput = styled.input`
  width: 240px;
  height: 30px;
  margin: 30px 0;
  border: none;
  border-bottom: 1.5px solid #737373;

  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: #383838;

  &:focus {
    outline: none;
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 25px;
`;

export default function UpdateCardNickNamePage() {
  const { id: cardIndex } = useParams();
  const { cardList, updateNickNameByIndex } = useContext(CardListContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cardList[cardIndex]) {
      navigate('/error', {
        replace: true,
      });
      return;
    }
  }, [cardList, cardIndex, navigate]);

  const handleCardNickNameSubmit = e => {
    e.preventDefault();
    const nickNameInputValue = e.target.elements['nickname-input'].value;

    if (nickNameInputValue === '') {
      const confirmMessage = cardList[cardIndex].nickName
        ? CONFIRM_MESSAGE.KEEP_REGISTERED_NICKNAME(cardList[cardIndex].nickName)
        : CONFIRM_MESSAGE.KEEP_NO_NICKNAME;

      if (confirm(confirmMessage)) {
        navigate('/', { replace: true });
      }
      return;
    }

    if (confirm(CONFIRM_MESSAGE.UPDATE_NICKNAME(nickNameInputValue))) {
      updateNickNameByIndex(cardIndex, nickNameInputValue);
      navigate('/', { replace: true });
    }
  };

  return (
    <>
      <Header>
        <GoBackButton />
        <Title>카드 닉네임 설정</Title>
      </Header>
      <Main>
        <GuideMessageWrapper>
          <GuideMessage>{'카드 닉네임을 수정하세요.'}</GuideMessage>
        </GuideMessageWrapper>
        {cardList[cardIndex] && (
          <>
            <CardItem size={'large'} isComplete={true} {...cardList[cardIndex]} />
            <Form onSubmit={handleCardNickNameSubmit}>
              <CardNickNameInput
                name="nickname-input"
                placeholder={cardList[cardIndex].nickName || '카드 닉네임'}
                data-testid={'card-nickname-input'}
              />
              <ButtonWrapper>
                <Button type="submit">확인</Button>
              </ButtonWrapper>
            </Form>
          </>
        )}
      </Main>
    </>
  );
}