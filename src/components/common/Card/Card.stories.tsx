import { Meta, StoryObj } from '@storybook/react';
import { CARD_COMPANY } from '@constants/cardCompany';
import Card from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};

export default meta;
type Story = StoryObj<typeof Card>;

export const EmptyCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: 'NAME',
    month: 'MM',
    year: 'YY',
    companyKind: CARD_COMPANY.DEFAULT,
  },
};

export const OnlyEightCard: Story = {
  args: {
    cardNumberSet: ['1234', '1234', '', ''],
    owner: 'NAME',
    month: 'MM',
    year: 'YY',
    companyKind: CARD_COMPANY.DEFAULT,
  },
};

export const OnlyOwnerCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: '김아무개씨 Victory',
    month: 'MM',
    year: 'YY',
    companyKind: CARD_COMPANY.DEFAULT,
  },
};

export const OnlyMonthCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: 'NAME',
    month: '12',
    year: 'YY',
    companyKind: CARD_COMPANY.DEFAULT,
  },
};

export const nameLengthThirtyCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: '가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차',
    month: '12',
    year: 'YY',
    companyKind: CARD_COMPANY.DEFAULT,
  },
};

export const FilledCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '12',
    year: '28',
    companyKind: CARD_COMPANY.DEFAULT,
  },
};

export const PrevCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '03',
    year: '24',
    companyKind: CARD_COMPANY.DEFAULT,
  },
};

export const TitleCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '24',
    companyKind: CARD_COMPANY.KAKAO,
    title: '카카오뱅크 내 카드',
  },
};

export const KakaoCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '24',
    companyKind: CARD_COMPANY.KAKAO,
  },
};

export const HyundaiCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '24',
    companyKind: CARD_COMPANY.HYUNDAI,
  },
};

export const HanaCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '24',
    companyKind: CARD_COMPANY.HANA,
  },
};

export const BcCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '24',
    companyKind: CARD_COMPANY.BC,
  },
};

export const KbCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '24',
    companyKind: CARD_COMPANY.KB,
  },
};

export const ShinhanCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '24',
    companyKind: CARD_COMPANY.SHINHAN,
  },
};

export const WooriCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '24',
    companyKind: CARD_COMPANY.WOORI,
  },
};

export const LotteCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '24',
    companyKind: CARD_COMPANY.LOTTE,
  },
};
