import React from 'react';
import styled from 'styled-components/native';
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
  render() {
    return (
      <StyledImageBackground source={BackgroundImage}>
        <StyledView>
          <Title>PhotoSpace</Title>
          <SubTitle>
            Type any space-related phrase and explore the universe of photos
          </SubTitle>
          <SearchInput />
        </StyledView>
      </StyledImageBackground>
    );
  }
}

export default Hero;
