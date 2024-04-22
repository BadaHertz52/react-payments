import { useMemo } from 'react';

import CardChip from '../../assets/images/cardChip.png';
import {
  CARD_COLOR_ETC,
  CARD_COMPANY,
  CARD_MARK,
  CARD_NUMBERS,
} from '../../constants';
import { CardInfo } from '../../modules/useCardInfoReducer';

import styles from './style.module.css';

interface CardPreviewProps {
  cardInfo: CardInfo;
}

const SLASH = '/';
const DOT = '·';

function CardPreview(props: CardPreviewProps) {
  const { cardInfo } = props;
  const { mark, numbers, period, userName, company } = cardInfo;
  const cardCompany = useMemo(
    () =>
      company?.name === CARD_COMPANY.get('etc')?.name ? '' : company?.name,
    [company],
  );
  const markInfo = useMemo(() => CARD_MARK[mark || 'etc'], [mark]);

  const numberList = useMemo(
    () =>
      numbers?.map((item, index) => {
        if (item && index > 1) {
          return DOT.repeat(CARD_NUMBERS.length);
        }
        return item?.toString();
      }),
    [numbers],
  );

  return (
    <div className={styles.cardPreview}>
      <div
        className={styles.cardImg}
        style={{ backgroundColor: company?.color || CARD_COLOR_ETC }}
      >
        <div className={styles.cardImgInner}>
          <section className={styles.top}>
            <img src={CardChip} alt="card chip" />
            <img src={markInfo?.src} alt={markInfo?.alt} />
          </section>
          <section className={styles.info}>
            <p className={styles.cardCompany}>{cardCompany}</p>
            <div className={styles.cardNumber}>
              {numberList?.map((item, index) => (
                <span key={`number-${index + 1}`}>{item}</span>
              ))}
            </div>
            <div className={styles.periodAndName}>
              <div className={styles.period}>
                <span>{period?.month}</span>
                <span>{period?.month && period?.year ? SLASH : ''}</span>
                <span>{period?.year}</span>
              </div>
              <div className={styles.user}>{userName}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
