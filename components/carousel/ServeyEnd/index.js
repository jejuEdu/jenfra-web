import React, { useState } from 'react';
import * as S from './style';

import CustomSelect from '../../common/CustomSelect';
import CustomInput from '../../common/CustomInput';
import { ADDRESS_LIST } from '../../../constant/address';
import CustomCheckBox from '../../common/CustomCheckBox';

const SurveyEnd = () => {
  const [phoneNumber, setphoneNumber] = useState();
  const [openOptions, setOpenOptions] = useState(false);
  const [address, setAddress] = useState({ id: 0, value: '0' });

  return (
    <>
      <S.NoticeWrap>
        <S.NoticeTitle>모두 완료했어요!</S.NoticeTitle>
        <S.NoticeDesc>
          추첨을 통해
          <br />
          스타벅스 커피 쿠폰을 보내드립니다.
        </S.NoticeDesc>
        <S.ReleaseDate>당첨자 발표일: 2023.02.15</S.ReleaseDate>
      </S.NoticeWrap>
      <S.FormWrap>
        <CustomInput
          size="medium"
          label="핸드폰 번호"
          type="text"
          placeholder="01012345678"
          value={phoneNumber}
          onChange={setphoneNumber}
          style={{ minWidth: '30rem', marginBottom: '2rem' }}
        />

        <CustomSelect
          size="medium"
          label="거주지역"
          selected={address}
          setSelected={setAddress}
          dataList={ADDRESS_LIST}
          openOptions={openOptions}
          onClick={() => setOpenOptions(!openOptions)}
          style={{ minWidth: '30rem', marginBottom: '2rem' }}
        />

        <S.AgreeWrap>
          <S.AgreeLabel>개인정보수집동의</S.AgreeLabel>
          <S.AgreeDesc>
            <li>개인정보를 제 3자에게 제공하는 것을 동의합니다.</li>
            <li>수집/보관 기간 : 2023.01.08 ~ 2023.02.28</li>
          </S.AgreeDesc>
        </S.AgreeWrap>

        <CustomCheckBox text="동의함" />

        <S.SubmitBtn>
          결과 보러가기
          <img src="/images/arrow.png" alt="" />
        </S.SubmitBtn>
      </S.FormWrap>
    </>
  );
};

export default SurveyEnd;
