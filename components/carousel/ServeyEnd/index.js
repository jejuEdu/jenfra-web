import React, { useEffect, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import * as S from './style';
import {
  loadingSpinnerState,
  modalOpenState,
  modalTitleState,
  surveyValueState,
} from '../../../recoil/atom';
import { submitSurveyResultApi } from '../../../apis';

import CustomSelect from '../../common/CustomSelect';
import CustomInput from '../../common/CustomInput';
import { ADDRESS_LIST } from '../../../constant/address';
import CustomCheckBox from '../../common/CustomCheckBox';
import Character from '../../common/Character';

const SurveyEnd = () => {
  const router = useRouter();
  const [phoneNumber, setphoneNumber] = useState('');
  const [openOptions, setOpenOptions] = useState(false);
  const [address, setAddress] = useState({ id: null, value: '선택' });
  const [check, setCheck] = useState(false);
  const setOpenModal = useSetRecoilState(modalOpenState);
  const setModalTitle = useSetRecoilState(modalTitleState);
  const setLoadingSpinner = useSetRecoilState(loadingSpinnerState);
  const surveyValue = useRecoilValue(surveyValueState);
  const submitSurveyResult = useMutation(submitSurveyResultApi, {
    onSuccess: (res) => {
      if (res.code === 200 && res.cryptoPhone) {
        router.push(`/result/${res.cryptoPhone}`);
      }
      if (res.response.data.code === 400) {
        setModalTitle(res.response.data.message);
        setOpenModal(true);
        return;
      }
    },
  });

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  const handleSubmit = () => {
    if (!phoneNumber) {
      setModalTitle('핸드폰 번호를 입력해주세요!');
      setOpenModal(true);
      return;
    }
    if (phoneNumber.length !== 11) {
      setModalTitle('올바른 핸드폰 번호를 입력해주세요!');
      setOpenModal(true);
      return;
    }
    if (address.id === null) {
      setModalTitle('거주지역 입력해주세요!');
      setOpenModal(true);
      return;
    }
    if (!check) {
      setModalTitle('개인정보 수집동의에 체크해주세요!');
      setOpenModal(true);
      return;
    }
    if (surveyValue.length < 7) {
      setModalTitle('모든 설문 항목을 선택해주세요.');
      setOpenModal(true);
      return;
    }
    let params = {
      surveyInfo: {
        surveyResList: surveyValue,
        address: address.value,
        phone: phoneNumber,
      },
    };
    // console.log(params);
    submitSurveyResult.mutate(params);
  };

  useEffect(() => {
    if (submitSurveyResult.isLoading) {
      setLoadingSpinner(true);
    } else {
      setLoadingSpinner(false);
    }
  }, [submitSurveyResult.isLoading]);

  return (
    <S.Scroll>
      <S.Wrapper>
        <S.NoticeWrap>
          <S.NoticeTitle>모두 완료했어요!</S.NoticeTitle>
          <Character />
          <S.NoticeDesc>
            추첨을 통해
            <br />
            스타벅스 커피 쿠폰을 보내드립니다.
          </S.NoticeDesc>
          <S.ReleaseDate>당첨자 발표일: 2023.04.10</S.ReleaseDate>
        </S.NoticeWrap>
        <S.FormWrap>
          <CustomInput
            size="medium"
            label="핸드폰 번호"
            type="tel"
            placeholder="01012345678"
            maxLength={11}
            value={phoneNumber}
            onChange={setphoneNumber}
            style={{ minWidth: '34.2rem' }}
          />

          <CustomSelect
            size="medium"
            label="거주지역"
            selected={address}
            setSelected={setAddress}
            dataList={ADDRESS_LIST}
            openOptions={openOptions}
            onClick={() => setOpenOptions(!openOptions)}
            style={{ minWidth: '34.2rem' }}
          />

          <S.AgreeWrap>
            <S.AgreeLabel>개인정보 수집동의</S.AgreeLabel>
            <S.AgreeDesc>
              <li>개인정보를 제 3자에게 제공하는 것을 동의합니다.</li>
              <li>수집/보관 기간 : 2023.02.24 ~ 2023.03.31</li>
            </S.AgreeDesc>
          </S.AgreeWrap>

          <CustomCheckBox
            text="동의함"
            onChange={(e) => handleCheck(e)}
            style={{
              maxWidth: '32.2rem',
              marginTop: '2.4rem',
            }}
          />

          <S.SubmitBtn onClick={handleSubmit}>결과 보러가기</S.SubmitBtn>
        </S.FormWrap>
      </S.Wrapper>
    </S.Scroll>
  );
};

export default SurveyEnd;
