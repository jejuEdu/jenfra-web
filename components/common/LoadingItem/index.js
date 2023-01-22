import * as S from './style';
import Character from '../Character';

const LoadingItem = () => {
  return (
    <S.LoadingWrap>
      <Character />
      <S.LoadingBar />
      <S.LoadingText>결과 수집 중...!</S.LoadingText>
    </S.LoadingWrap>
  );
};

export default LoadingItem;
