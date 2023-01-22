import React, { useState } from 'react';
import * as S from './style';

import CustomSelect from '../../common/CustomSelect';
import CustomInput from '../../common/CustomInput';
import { ADDRESS_LIST } from '../../../constant/address';
import CustomCheckBox from '../../common/CustomCheckBox';
import CustomModal from '../../common/CustomModal';
import Character from '../../common/Character';
import { useRouter } from 'next/router';

const SurveyEnd = () => {
  const router = useRouter();
  const [phoneNumber, setphoneNumber] = useState();
  const [openOptions, setOpenOptions] = useState(false);
  const [address, setAddress] = useState({ id: null, value: '선택' });
  const [check, setCheck] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  const handleSubmit = () => {
    if (!phoneNumber) {
      setModalTitle('핸드폰 번호를 입력해주세요!');
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
    }
    console.log(phoneNumber, address);
    // store에 저장된 값과 phoneNumber, address 값을 post합시다!!
    // post 후에 loading page로 보내주면 됩니다.
    // router.push("/loading")
  };

  const handleOkClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <S.NoticeWrap>
        <S.NoticeTitle>모두 완료했어요!</S.NoticeTitle>
        <Character />
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
            <li>수집/보관 기간 : 2023.01.08 ~ 2023.02.28</li>
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

        <S.SubmitBtn onClick={handleSubmit}>
          결과 보러가기
          {/* <img src="/images/arrow.png" alt="" /> */}
        </S.SubmitBtn>
      </S.FormWrap>

      <CustomModal
        isOpen={openModal}
        setIsOpen={() => setOpenModal(!openModal)}
        subject={modalTitle}
        okName="확인"
        okClick={handleOkClick}
      />
    </>
  );
};

export default SurveyEnd;
