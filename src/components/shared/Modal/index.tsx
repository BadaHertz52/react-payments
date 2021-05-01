import { FC, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const bottomType = css`
  margin-top: auto;
  height: 16rem;
  border-radius: 1rem 1rem 0 0;
`;

const fullType = css`
  height: 100vh;
`;

const ModalInner = styled.div<Pick<Props, 'type'>>`
  position: relative;
  width: 100%;
  background: #fff;
  ${({ type }) => (type === 'full' ? fullType : bottomType)}
`;

interface Props {
  children: React.ReactNode;
  modalClose?: () => void;
  type?: 'bottom' | 'full';
}

const Modal: FC<Props> = ({ children, modalClose, type }) => {
  const onClickDimmed = ({ target, currentTarget }: MouseEvent<HTMLDivElement>) => {
    if (!modalClose || target !== currentTarget) return;

    modalClose();
  };

  return (
    <ModalContainer onClick={onClickDimmed}>
      <ModalInner type={type}>{children}</ModalInner>
    </ModalContainer>
  );
};

export default Modal;