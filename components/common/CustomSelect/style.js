import styled from 'styled-components';
import { COLORS } from '../../../constant/colors';

export const CustomSelectWrap = styled.div`
  position: relative;
`;

export const CustomLabel = styled.div`
  font-size: 1.5rem;
  line-height: 141%;
  font-weight: 400;
  color: #000;
  margin-bottom: 0.8rem;
  margin-left: 1.2rem;
`;

export const CustomSelectStyle = styled.div`
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 1.5rem;
  font-weight: 400;
  background: #ffffff;
  box-shadow: 0px 0px 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  border: none;

  padding: ${(props) =>
    props.size === 'small'
      ? '1rem 1.3rem'
      : props.size === 'medium'
      ? '1.2rem 1.5rem'
      : '1.4rem 1.8rem'};
  font-size: ${(props) =>
    props.size === 'small' ? '1.3rem' : props.size === 'medium' ? '1.5rem' : '1.8rem'};
  line-height: ${(props) =>
    props.size === 'small' ? '1.5rem' : props.size === 'medium' ? '1.7rem' : '2rem'};
  border-radius: 10rem;
`;

export const SelectWrap = styled.div`
  cursor: pointer;
`;
export const BtnArrow = styled.span`
  width: 0.8rem;
  position: absolute;
  top: 50%;
  right: 2rem;
`;
export const ArrowImage = styled.img`
  width: 100%;
  vertical-align: bottom;
  transform: ${(props) => (props.openOptions ? 'rotate(-270deg)' : 'rotate(-90deg)')};
  transition: 0.3s;
`;
export const OptionPanel = styled.div`
  position: absolute;
  bottom: -15rem;
  left: 0;
  width: 100%;
  height: 16rem;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #ffffff;
  box-shadow: 0px 0px 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  border: none;
  z-index: 1;
`;
export const OptionItem = styled.div`
  padding: ${(props) =>
    props.size === 'small'
      ? '1rem 1.3rem'
      : props.size === 'medium'
      ? '1.5rem 1.5rem'
      : '2rem 1.8rem'};
  font-size: 1.5rem;
  border-bottom: 1px solid ${COLORS.gray_c};

  &:hover {
    background: ${COLORS.point};
    color: #fff;
  }

  &:last-child {
    border-bottom: 0;
  }
`;
