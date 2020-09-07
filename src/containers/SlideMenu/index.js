import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Container, Body, Content } from 'native-base';
import { connect } from 'react-redux';
import { EventRegister } from 'react-native-event-listeners';

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
      <Container>
        <Body>
          <Content>
            <Text>Slide Menu</Text>
          </Content>
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(index);
