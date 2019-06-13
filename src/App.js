import React from 'react';
import { StatusBar, TouchableOpacity, BackHandler, Platform } from 'react-native';

import styled from 'styled-components/native';
import axios from 'axios';

import Hero from './templates/hero';
import BackImage from './assets/chevron-left.png';

const StyledImage = styled.Image`
  width: 100%;
  height: 150px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const ImagesWrapper = styled.ScrollView`
  background-color: black;
`;

const BackButtonWrapper = styled.View`
  background-color: black;
  height: ${Platform.OS === 'ios' ? '100px' : '70px'};
  width: 100%;
  padding-top: ${Platform.OS === 'ios' ? '50px' : '10px'};
  padding-left: 10px;
`;

const BackButton = styled.Image`
  height: 50px;
  width: 50px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
      isLoaded: false,
    };

    this.search = this.search.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  search(phrase) {
    axios.get(`https://images-api.nasa.gov/search?media_type=image&q=${phrase}`).then((response) => {
      this.setState({
        photos: response.data.collection.items,
        isLoaded: true,
      });
    });
  }

  goBack() {
    this.setState({
      photos: [],
      isLoaded: false,
    });
    return true;
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.goBack);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    StatusBar.setBarStyle('light-content');
    return (
      <React.Fragment>
        {
          !this.state.isLoaded ? (
            <Hero onSubmit={this.search} />
          ) : (
            <React.Fragment>
              <BackButtonWrapper>
                <TouchableOpacity onPress={this.goBack}>
                  <BackButton source={BackImage} />
                </TouchableOpacity>
              </BackButtonWrapper>
              <ImagesWrapper>
                {
                  this.state.photos.map(item => (
                    <StyledImage
                      key={item.data[0].nasa_id}
                      source={{ uri: item.links[0].href }}
                      resizeMode="center"
                    />
                  ))
                }
              </ImagesWrapper>
            </React.Fragment>
          )
        }
      </React.Fragment>
    );
  }
}

export default App;
