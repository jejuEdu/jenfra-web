import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

export const CustomSelectWrap = styled.div`
  position: relative;
`;

export const CustomLabel = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${COLORS.gray_3};
  margin-bottom: 1rem;
`;

export const CustomSelectStyle = styled.div`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 1.5rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-weight: 500;
  background: #fff;

  padding: ${(props) =>
    props.size === 'small' ? '1rem 2rem' : props.size === 'medium' ? '1.5rem 3rem' : '2rem 4rem'};
  font-size: ${(props) =>
    props.size === 'small' ? '1.2rem' : props.size === 'medium' ? '1.6rem' : '2.4rem'};
  line-height: ${(props) =>
    props.size === 'small' ? '1.8rem' : props.size === 'medium' ? '2.4rem' : '3rem'};
  border-radius: 1rem;
`;

export const SelectWrap = styled.div`
  cursor: pointer;
`;
export const BtnArrow = styled.span`
  width: 0.8rem;
  position: absolute;
  top: 50%;
  right: 3rem;
`;
export const ArrowImage = styled.img`
  width: 100%;
  vertical-align: bottom;
  transform: ${(props) => (props.openOptions ? 'rotate(-270deg)' : 'rotate(-90deg)')};
  transition: 0.3s;
`;
export const OptionPanel = styled.div`
  position: absolute;
  bottom: -16rem;
  left: 0;
  width: 100%;
  height: 16rem;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 1rem;
  border: 1px solid ${COLORS.gray_c};
  background: #fff;
`;
export const OptionItem = styled.div`
  padding: ${(props) =>
    props.size === 'small' ? '1rem 2rem' : props.size === 'medium' ? '1.5rem 3rem' : '2rem 4rem'};
  font-size: 1.6rem;
  border-bottom: 1px solid ${COLORS.gray_c};

  &:hover {
    background: ${COLORS.point};
    color: #fff;
  }

  &:last-child {
    border-bottom: 0;
  }
`;
