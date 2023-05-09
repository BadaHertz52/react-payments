import React from 'react';
import { useContext, useCallback } from 'react';
import { CardInfoContext } from '../../../contexts/CardInfoProvider';
import styles from './CardSelectButton.module.css';
import { CardIssuerType } from '../../../types';
import { BaeksulgiContext } from 'baeksulgi';

type CardSelectButtonProps = {
  title: CardIssuerType;
  src: string;
};

const CardSelectButton = ({ title, src }: CardSelectButtonProps) => {
  const { closeModal } = useContext(BaeksulgiContext);
  const { setCardIssuer } = useContext(CardInfoContext);

  const selectCardIssuer = useCallback(() => {
    setCardIssuer(title);
    closeModal();
  }, [title, closeModal, setCardIssuer]);

  return (
    <button className={styles.button} onClick={selectCardIssuer}>
      <img className={styles.logo} src={src} alt={title} />
      <span className={styles.title}>{title}</span>
    </button>
  );
};

export default React.memo(CardSelectButton);
