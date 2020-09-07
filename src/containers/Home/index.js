import React, { Component } from 'react';
import { Container, Body, Header, Content } from 'native-base';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import HeaderBase from '../../components/HeaderBase';
import Config from '../../config';

class index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Header style={[Config.Styles.headerGray]}>
          <HeaderBase title={'Home Screen'} menu />
        </Header>
        <Body>
          <Content>
            <View>
              <Text>Home Screen</Text>
            </View>
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
