import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

export const Scroll = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 10.6rem);
  position: absolute;
  top: 0;
  left: 700%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Wrapper = styled.div`
  margin-right: 15rem;
  margin-top: 5rem;
  width: 100%;
  height: max-content;
  box-sizing: border-box;
`;

export const NoticeWrap = styled.div`
  width: 100%;
  text-align: center;
`;
export const NoticeTitle = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 141%;
  color: #000;
`;
export const NoticeDesc = styled.div`
  font-size: 2rem;
  font-weight: 400;
  line-height: 141%;
  color: #000;
  margin-top: 1.7rem;
`;
export const ReleaseDate = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 141%;
  color: #000;
  margin-top: 2.1rem;
`;
export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.1rem;
`;

export const SelectWrap = styled.div`
  cursor: pointer;
`;
export const BtnArrow = styled.span`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translate(0, -50%);
  transform: rotate(90deg);
`;
export const AgreeWrap = styled.div`
  width: 100%;
  max-width: 34.2rem;
  margin-top: 4.3rem;
`;
export const AgreeLabel = styled.div`
  font-size: 1.6rem;
  line-height: 141%;
  font-weight: 700;
  color: #000;
  margin-bottom: 0.8rem;
  margin-left: 1.2rem;
`;
export const AgreeDesc = styled.ul`
  font-size: 1.5rem;
  line-height: 206%;
  font-weight: 400;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  color: #000000;

  li {
    position: relative;
    margin-bottom: 0.6rem;

    &:before {
      display: block;
      content: '-';
      position: absolute;
      top: 0;
      left: -1.5rem;
    }
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  max-width: 34.2rem;
  height: 5.2rem;
  margin-top: 3.3rem;
  background: ${COLORS.point};
  border-radius: 3rem;
  border: none;
  color: #fff;
  font-size: 2rem;
  line-height: 141%;
  position: relative;
  cursor: pointer;
  margin-bottom: 3.2rem;

  /* img {
    width: 1rem;
    display: block;
    position: absolute;
    top: 50%;
    right: 3rem;
    transform: rotate(180deg) translate(0, 50%);
  } */
`;
