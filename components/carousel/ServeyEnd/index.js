import React, { useState } from 'react';
import * as S from './style';

import CustomSelect from '../../common/CustomSelect';
import CustomInput from '../../common/CustomInput';
import { ADDRESS_LIST } from '../../../constant/address';

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
      </S.FormWrap>
    </>
  );
};

export default SurveyEnd;
