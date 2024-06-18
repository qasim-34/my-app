// Item2Screen.js

import React from 'react';
import { View, Text, Image } from 'react-native';

const Item2Screen = () => {
  return (
    <View>
      <Text>Item 2 Screen</Text>
      <Image
        source={require('../assets/item2.jpg')}
        style={{ width: 200, height: 200 }}
      />
      {/* Additional content for Item 2 */}
    </View>
  );
};

export default Item2Screen;
