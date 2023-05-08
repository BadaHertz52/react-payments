import styled from 'styled-components';
import { type UseInputProps } from '@hooks/useInput';
import { Error } from '@components/common/Error';
import { Input } from '@components/common/Input';
import { TAB_INDEX_INFO } from '@constants/constant';
import { ADD_CARD_TEST_ID } from '@constants/storybookTest';

interface CardNumberInputProps {
  id: string;
  firstNumberInformation: UseInputProps;
  secondNumberInformation: UseInputProps;
  thirdNumberInformation: UseInputProps;
  fourthNumberInformation: UseInputProps;
}

const { ADD_CARD_PAGE_TAB_INDEX } = TAB_INDEX_INFO;

export default function CardNumberInput({
  id,
  firstNumberInformation,
  secondNumberInformation,
  thirdNumberInformation,
  fourthNumberInformation,
}: CardNumberInputProps) {
  return (
    <Container>
      <Wrapper>
        <Input
          isNumber={true}
          id={id}
          type="text"
          textAlign="center"
          placeholder="0000"
          autoComplete="off"
          data-testid={ADD_CARD_TEST_ID.FIRST_CARD_NUMBER}
          tabIndex={ADD_CARD_PAGE_TAB_INDEX.FIRST_CARD_NUMBER}
          {...firstNumberInformation}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          type="text"
          placeholder="0000"
          tabIndex={ADD_CARD_PAGE_TAB_INDEX.SECOND_CARD_NUMBER}
          autoComplete="off"
          textAlign="center"
          data-testid={ADD_CARD_TEST_ID.SECOND_CARD_NUMBER}
          {...secondNumberInformation}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          type="text"
          placeholder="0000"
          isPassword={true}
          textAlign="center"
          autoComplete="off"
          data-testid={ADD_CARD_TEST_ID.THIRD_CARD_NUMBER}
          tabIndex={ADD_CARD_PAGE_TAB_INDEX.THIRD_CARD_NUMBER}
          {...thirdNumberInformation}
        />
        <Dash>-</Dash>
        <Input
          isNumber={true}
          type="text"
          placeholder="0000"
          autoComplete="off"
          isPassword={true}
          textAlign="center"
          tabIndex={ADD_CARD_PAGE_TAB_INDEX.FOURTH_CARD_NUMBER}
          data-testid={ADD_CARD_TEST_ID.FOURTH_CARD_NUMBER}
          {...fourthNumberInformation}
        />
      </Wrapper>
      {firstNumberInformation.error && (
        <Error text={firstNumberInformation.error} />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.inputGray};
  justify-content: space-between;
  height: 45px;
  border-radius: 7px;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
`;

const Dash = styled.span`
  margin: 0 7px;
`;
