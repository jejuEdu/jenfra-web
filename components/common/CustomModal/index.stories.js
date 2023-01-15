import React from 'react';
import CustomModal from '.';

// controls 설정
export default {
  title: 'components/common/CustomModal',
  img: '',
  subject: '',
  argTypes: {
    isOpen: {
      options: [true, false],
      control: { type: 'radio' },
    },
    closeBtn: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
  setIsOpen: () => {},
  cancelName: '',
  okName: '',
  cancelClick: () => {},
  okClick: () => {},
};

// default props 설정
const Template = (args) => <CustomModal {...args} />;
export const Default = Template.bind({});
Default.args = {
  img: '',
  subject: '타이틀 영역',
  desc: '설명영역',
  isOpen: true,
  closeBtn: false,
  setIsOpen: () => {},
  cancelName: '취소',
  okName: '확인',
};
