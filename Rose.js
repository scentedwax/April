import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

export default function Rose() {
  return (
    <View>
      <Svg height="250" width="250">
        <Path
          d="M 65 96 Q 50 110, 56 130 Q 69 147, 75 170 Q 65 167, 58 180 Q 80 187, 105 170 Q 124 157, 105 130 Q 105 105, 90 96"
          fill="#E84C3D"
        />
        <Path
          d="M 75 170 Q 70 200, 98 228 Q 120 220, 125 195 Q 140 120, 105 90 Q 80 95, 75 170"
          fill="#6F9932"
        />
        <Path
          d="M 82 120 Q 62 105, 75 85 Q 115 80, 130 130 Q 140 145, 130 165 Q 98 146, 82 120"
          fill="#6F9932"
        />
        <Circle cx="105" cy="105" r="16" fill="#FEE12B" />
      </Svg>
    </View>
  );
}