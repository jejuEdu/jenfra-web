import { createContext, useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import MainImg from '../../assets/main.png';
import StarImg from '../../assets/star.png';
import Logo from '../../assets/logo.png';

const MainContext = createContext();

const Main = (props) => {
  return (
    <S.Main>
      <MainContext.Provider>{props.children}</MainContext.Provider>
    </S.Main>
  );
};

Main.Title = (props) => {
  return (
    <S.Title>
      <h1>
        제주도민<font color="white">만 아는</font>
        <br />
        <font color="white">진짜</font> 제주 이야기
      </h1>
    </S.Title>
  );
};

Main.SubTitle = (props) => {
  return (
    <S.SubTitle>
      나만의 <b>성장 라이프</b>를 공유해주세요!
    </S.SubTitle>
  );
};

Main.Image = (props) => {
  return (
    <S.MainImage>
      <div className="main-img">
        <Image src={MainImg} alt="메인이미지" />
      </div>
      <div className="animation-img">
        <Image src={StarImg} alt="움직이는 별" />
      </div>
    </S.MainImage>
  );
};

Main.Logo = (props) => {
  return <Image src={Logo} alt="로고이미지" />;
};

Main.Button = (props) => {
  return <S.Button>설문에 참여하기</S.Button>;
};

Main.Count = (props) => {
  const [count, setCount] = useState(0);
  return (
    <S.Count>
      지금까지 <b>{count}</b> 명이 참여했어요!
    </S.Count>
  );
};

Main.Title.displayName = 'MainTitle';
Main.SubTitle.displayName = 'SubTitle';
Main.Image.displayName = 'MainImage';
Main.Logo.displayName = 'MainLogo';
Main.Button.displayName = 'MainButton';
Main.Count.displayName = 'MainCount';

export default Main;
