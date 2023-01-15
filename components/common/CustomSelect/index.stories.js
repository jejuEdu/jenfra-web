import React from 'react';
import { ADDRESS_LIST } from '../../../constant/address';
import CustomSelect from '.';

// controls 설정
export default {
  title: 'components/common/CustomSelect',
  label: '',
  placeholder: '',
  style: {},
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
    openOptions: {
      options: [false, true],
      control: { type: 'radio' },
    },
  },
  selected: '',
  dataList: [],
};

// default props 설정
const Template = (args) => <CustomSelect {...args} />;
export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  label: 'label 명',
  openOptions: false,
  selected: 'selected 값',
  dataList: ADDRESS_LIST,
  style: { width: '30rem' },
};
