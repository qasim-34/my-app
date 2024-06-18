// Item3Screen.js

import React from 'react';
import { View, Text, Image } from 'react-native';

const Item3Screen = () => {
  return (
    <View>
      <Text>Item 3 Screen</Text>
      <Image
        source={require('../assets/item3.jpg')}
        style={{ width: 200, height: 200 }}
      />
      {/* Additional content for Item 3 */}
    </View>
  );
};

export default Item3Screen;
