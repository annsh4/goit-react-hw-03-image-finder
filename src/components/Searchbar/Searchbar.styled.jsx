import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 64px;

  padding-right: ${props => props.theme.space[4]}px;
  padding-left: ${props => props.theme.space[4]}px;
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.secondary};
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;

  box-shadow: inset 1px 1px 3px #356859, inset -1px -1px 5px #fff;

  border-radius: 3px;
  overflow: hidden;
`;

export const SearchFormBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }

  svg {
    fill: ${props => props.theme.colors.accent};
    stroke: ${props => props.theme.colors.white};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      transform: scale(1.2);
    }
  }
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;

  background-color: transparent;
  color: ${props => props.theme.colors.white};

  ::placeholder {
    color: ${props => props.theme.colors.white};
    text-shadow: ${props => props.theme.colors.accent};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: 18px;
  }
`;
