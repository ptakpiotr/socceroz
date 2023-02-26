import { View, Text } from "react-native";
import React from "react";
import { styles } from "../styles/ScoreItemStyles";
interface IProps {
  res: number;
  borderColor: string;
}

function ScoreResult({ res, borderColor }: IProps) {
  return (
    <View
      style={[
        styles.scoreResult,
        {
          borderColor,
        },
      ]}
    >
      <Text style={styles.scoreResultText}>{res}</Text>
    </View>
  );
}

export default ScoreResult;
