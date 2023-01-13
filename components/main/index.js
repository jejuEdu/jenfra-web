import { createContext } from 'react';
import * as S from './style';
import Image from 'next/image';
import MainImg from '../../assets/main.png';

const MainContext = createContext();

const Main = (props) => {
  return <MainContext.Provider>{props.children}</MainContext.Provider>;
};

Main.Title = (props) => {
  return (
    <S.Title>
      <h1>
        제주에서 잘 맞는
        <br />
        나의 스터디 타입은?
      </h1>
    </S.Title>
  );
};

Main.Image = (props) => {
  return <Image src={MainImg} alt="메인이미지" />;
};

Main.Logo = (props) => {
  return <></>;
};

Main.Button = (props) => {
  return <S.Button>제출</S.Button>;
};

export default Main;
