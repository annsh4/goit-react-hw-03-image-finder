import React from 'react';
import curiousKitty from 'assets/hmm.jpg';
import PropTypes from 'prop-types';
import { Hero, Text, Wrapper } from './InitialStateGallery.styled';

export const InitialStateGallery = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Hero src={curiousKitty} alt="Curious Kitty" />
    </Wrapper>
  );
};

InitialStateGallery.propTypes = {
  text: PropTypes.string.isRequired,
};
