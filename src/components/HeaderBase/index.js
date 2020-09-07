import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import Images from '../../assets/images';

class index extends Component {
  render() {
    return (
      <View style={styles.parrentView}>
        <View style={styles.viewLeft}>
          {this.props.navigation && (
            <TouchableOpacity
              style={styles.buttonLeft}
              onPress={() => this.props.navigation.goBack()}>
              {this.props.smallBack && <Text>Back</Text>}
            </TouchableOpacity>
          )}
          {this.props.menu && (
            <Image style={{ width: 40, height: 40 }} source={Images.imgIcMenu} />
          )}
        </View>
        <View style={styles.viewCenter}>
          <Text style={styles.textCenter}>{this.props.title}</Text>
        </View>
        <View style={styles.viewRight} />
      </View>
    );
  }
}

export default index;
