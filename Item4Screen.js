// Item4Screen.js

import React from 'react';
import { View, Text, Image } from 'react-native';

const Item4Screen = () => {
  return (
    <View>
      <Text>Item 4 Screen</Text>
      <Image
        source={require('../assets/item4.jpg')}
        style={{ width: 200, height: 200 }}
      />
      {/* Additional content for Item 4 */}
    </View>
  );
};

export default Item4Screen;
