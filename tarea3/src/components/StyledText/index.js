import { Text } from "react-native";

export const StyledText = ({
  text,
  fontSize,
  fontWeight,
  color,
  textDecorationLine,
  textTransform,
  marginBottom,
}) => {
  return (
    <Text
      style={{
        fontSize,
        fontWeight,
        color,
        textDecorationLine,
        textTransform,
        marginBottom,
      }}
    >
      {text}
    </Text>
  );
};
