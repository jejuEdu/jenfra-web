import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import styled from 'styled-components';

import { COLORS } from '../../constant/colors';
import LayoutResult from '../../layouts/LayoutResult';
import ResultQuestionCard from '../../components/result/ResultQuestionCard';
import { getResultApi } from '../../apis';
import { useEffect, useState } from 'react';
import LoadingItem from '../../components/common/LoadingItem';

const TitleWrap = styled.div`
  padding: 4.2rem 0;
`;
const Logo = styled.div`
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 155%;
  text-align: center;
  color: #ffffff;
`;
const Slogun = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 155%;
  text-align: center;
  color: #ffffff;
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 141%;
  text-align: center;
  color: #ffffff;
  margin-top: 1.6rem;
`;
const ContentWrap = styled.div`
  height: calc(100vh - 17.4rem);
  margin: 0 1.2rem;
  padding: 3.2rem 1.2rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(0.2rem);
  border-radius: 2rem 2rem 0px 0px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const Result = () => {
  const router = useRouter();
  const [resultData, setResultData] = useState([]);

  useEffect(() => {
    if (router.query.id) {
      getResult.mutate({
        phone: router.query.id,
      });
    }
  }, [router.query.id]);

  const getResult = useMutation(getResultApi, {
    onSuccess: (res) => {
      console.log(res);
      setResultData(res.surVeyAr);
    },
  });

  if (resultData.length === 0) return <LoadingItem />;

  return (
    <LayoutResult bgColor={COLORS.point}>
      <TitleWrap>
        <Logo>JEJU x INFRA</Logo>
        <Slogun>제주도민 성장을 위한 첫 걸음</Slogun>
        <Title>제주도민 성장 라이프 둘러보기</Title>
      </TitleWrap>
      <ContentWrap>
        <ResultQuestionCard index="1" />
        <ResultQuestionCard index="2" />
      </ContentWrap>
    </LayoutResult>
  );
};
export default Result;
