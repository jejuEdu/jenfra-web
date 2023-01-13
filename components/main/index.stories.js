import React from 'react';

import Main from './index';

export default {
  title: 'COMPONENTS/Main',
  component: Main,
};

const Template = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Main.Title />
      {/*<Main.Image />*/}
      <Main.Button />
    </>
  ),
};

export const Template2 = Template.bind({});
Template2.args = {};
