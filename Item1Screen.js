// Item1Screen.js

import React from 'react';
import { View, Text, Image } from 'react-native';

const Item1Screen = () => {
  return (
    <View>
      <Text>Item 1 Screen</Text>
      <Image
        source={require('assets/item1.jpg')}

        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

export default Item1Screen;
