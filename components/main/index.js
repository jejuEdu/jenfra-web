import { createContext, useState } from 'react';
import * as S from './style';
import { useRouter } from 'next/router';
import { getCount } from '../../apis';
import { useQuery } from 'react-query';

const MainContext = createContext();

const Main = (props) => {
  return (
    <S.Main>
      <MainContext.Provider value={null}>{props.children}</MainContext.Provider>
    </S.Main>
  );
};

const Title = (props) => {
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

const SubTitle = (props) => {
  return (
    <S.SubTitle>
      나만의 <b>성장 라이프</b>를 공유해주세요!
    </S.SubTitle>
  );
};

const Image = (props) => {
  return (
    <S.MainImage>
      <div className="main-img">
        <img src="/images/main.png" alt="메인이미지" />
      </div>
      <div className="animation-img">
        <img src="/images/star.png" alt="움직이는 별" />
      </div>
    </S.MainImage>
  );
};

const Logo = (props) => {
  return <img src="/images/logo.png" alt="로고이미지" />;
};

/* eslint-disable-line */
const Button = (props) => {
  const router = useRouter();
  return (
    <S.Button
      onClick={() =>
        router.push({
          pathname: '/survey',
        })
      }
    >
      설문에 참여하기
    </S.Button>
  );
};

/* eslint-disable-line */
const Count = (props) => {
  const { data } = useQuery('', () => getCount(), { refetchInterval: 2000 });
  return (
    <S.Count>
      지금까지 <b>{data?.countParticipants || 0}</b> 명이 참여했어요!
    </S.Count>
  );
};

Main.Title = Title;
Main.SubTitle = SubTitle;
Main.Image = Image;
Main.Logo = Logo;
Main.Button = Button;
Main.Count = Count;

Main.Title.displayName = 'MainTitle';
Main.SubTitle.displayName = 'SubTitle';
Main.Image.displayName = 'MainImage';
Main.Logo.displayName = 'MainLogo';
Main.Button.displayName = 'MainButton';
Main.Count.displayName = 'MainCount';

export default Main;
