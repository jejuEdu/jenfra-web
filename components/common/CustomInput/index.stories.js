import React from 'react';
import CustomInput from '.';

// controls 설정
export default {
  title: 'components/common/CustomInput',
  label: '',
  placeholder: '',
  style: {},
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
    type: {
      options: ['text', 'password', 'number', 'tel', 'hidden'],
      control: { type: 'radio' },
    },
    onChange: () => {
      setState();
    },
  },
  value: '',
};

// default props 설정
const Template = (args) => <CustomInput {...args} />;
export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  label: 'label 명',
  type: 'text',
  placeholder: '입력해주세요.',
  style: { width: '30rem' },
  value: 'state 값',
};
