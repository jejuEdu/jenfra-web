import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

export const NoticeWrap = styled.div`
  width: 100%;
  text-align: center;
`;
export const NoticeTitle = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${COLORS.point};
`;
export const NoticeDesc = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 4rem;
  color: ${COLORS.gray_3};
  margin-top: 5rem;
`;
export const ReleaseDate = styled.div`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
  color: ${COLORS.point};
  margin-top: 2rem;
`;
export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;
export const CustomLabel = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.gray_3};
  margin-bottom: 1rem;
`;

export const AddressInput = styled.div`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 0.6rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
  padding: 1.5rem 3rem;
  font-size: 2.4rem;
  border-radius: 6rem;
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
  max-width: 30rem;
`;
export const AgreeLabel = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;
export const AgreeDesc = styled.ul`
  font-size: 1.6rem;
  font-weight: 400;
  color: #666;
  margin-bottom: 1rem;
  padding-left: 1.5rem;

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
  max-width: 30rem;
  height: 6rem;
  margin-top: 5rem;
  background: ${COLORS.point};
  border-radius: 0.8rem;
  border: 1px solid ${COLORS.bg};
  color: #fff;
  font-size: 2rem;
  position: relative;
  cursor: pointer;

  img {
    width: 1rem;
    display: block;
    position: absolute;
    top: 50%;
    right: 3rem;
    transform: rotate(180deg) translate(0, 50%);
  }
`;
