import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: lightsalmon;
`;

const Title = styled.Text`
  font-size: 50px;
  color: white;
  font-weight: bold;
`;

const Hero = () => (
  <StyledView>
    <Title>hi people</Title>
  </StyledView>
);

export default Hero;
