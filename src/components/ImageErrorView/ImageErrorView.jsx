import errorImage from 'assets/error.jpg';
import { ErrorImg, Text, Wrapper } from './ImageErrorView.styled';
import PropTypes from 'prop-types';

export default function ImageErrorView({ message }) {
  return (
    <Wrapper role="alert">
      <ErrorImg src={errorImage} width="240" alt="Very very sad kitty" />
      <Text>{message}</Text>
    </Wrapper>
  );
}

ImageErrorView.propTypes = {
  message: PropTypes.string,
};
