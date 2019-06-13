import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import BackgroundImage from '../assets/hero.jpg';

const StyledImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 50px;
  color: white;
  font-weight: bold;
`;

const SubTitle = styled.Text`
  font-size: 20px;
  color: white;
  text-align: center;
`;

const SearchInput = styled.TextInput`
  width: 80%;
  border-bottom-color: white;
  border-bottom-width: 2px;
  height: 50px;
  font-size: 30px;
  padding: 5px;
  text-align: center;
  color: white;
  margin-top: 20px;
`;

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(value) {
    this.setState({ inputValue: value });
  }

  handleSubmit() {
    this.props.onSubmit(this.state.inputValue);
  }

  render() {
    return (
      <StyledImageBackground source={BackgroundImage}>
        <StyledView>
          <Title>PhotoSpace</Title>
          <SubTitle>
            Type any space-related phrase and explore the universe of photos
          </SubTitle>
          <SearchInput
            value={this.state.inputValue}
            onChangeText={this.handleInput}
            onEndEditing={this.handleSubmit}
            keyboardAppearance="dark"
            autoCorrect={false}
          />
        </StyledView>
      </StyledImageBackground>
    );
  }
}

Hero.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Hero;
