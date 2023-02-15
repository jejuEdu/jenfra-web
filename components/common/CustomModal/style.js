import styled, { keyframes } from 'styled-components';
import { COLORS } from '../../../constant/colors';

const fadeIn = keyframes`
    0% {
        opacity: 0,
    }100% {
        opacity: 1,
    }
`;
const fadeOut = keyframes`
    0% {
        opacity: 1,
    }100% {
        opacity: 0,
    }
`;
export const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  z-index: 100;
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.6s ease-out;
`;

export const Dimmed = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  background: rgba(0, 0, 0, 0.15);
`;

export const Panel = styled.div`
  width: 100%;
  max-width: 34.2rem;
  min-height: 10rem;
  background: #fff;
  border-radius: 0.4rem;
  padding: 3.5rem 2rem 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const ImgIcon = styled.img`
  width: 5rem;
  height: 5rem;
  display: inline-block;
  margin-bottom: 2rem;
`;
export const CloseIcon = styled.img`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;
export const Title = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.4rem;
  word-break: keep-all;
`;
export const Desc = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  margin-top: 1rem;
  word-break: keep-all;
`;
export const ButtonWrap = styled.div`
  margin-top: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CancelBtn = styled.div`
  width: 100%;
  height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${COLORS.gray_c};
  font-size: 2rem;
  border-radius: 0.4rem;
  margin-right: 1rem;
`;
export const OkBtn = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  font-size: 2rem;
  border-radius: 0.4rem;
`;
