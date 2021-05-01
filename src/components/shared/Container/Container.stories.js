import React from 'react';
import Container from '.';
import { MINT } from '../../../constants/palette';

export default {
  component: Container,
  title: 'Common/Container',
};

const Template = args => (
  <Container {...args}>
    <div style={{ height: '100px' }} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  backgroundColor: MINT[500],
};