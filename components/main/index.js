import { createContext, useState } from 'react';
import * as S from './style';
import Image from 'next/image';
import MainImg from '../../assets/main.png';

const MainContext = createContext();

const Main = (props) => {
  const [state, setState] = useState({});

  const update = () => {
    setTimeout(() => {
      setState({});
    }, 1000);
  };

  return <MainContext.Provider value={{ state, update }}>{props.children}</MainContext.Provider>;
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

// build error 발생: Error: Component definition is missing display name  react/display-name (eslint)
//set display name: React devtools 확장의 구성요소에 설명적인 이름 지정하는데 사용
Main.Title.displayName = 'MainTitle';
Main.Image.displayName = 'MainImage';
Main.Logo.displayName = 'MainLogo';
Main.Button.displayName = 'MainButton';

export default Main;
