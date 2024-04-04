import { useEffect, useState } from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

interface ScreenContainerProps {
  children: React.ReactNode;
  styles?: StyleProp<ViewStyle>;
}
const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  styles,
}) => {
  const [statusBarHeight, setStatusBarHeight] = useState<number>(0);

  useEffect(() => {
    const height = getStatusBarHeight();
    setStatusBarHeight(height);
  }, []);

  return (
    <View
      style={[
        stylesScreenContainer.container,
        { paddingVertical: statusBarHeight, paddingHorizontal: 10 },
        styles,
      ]}
    >
      {children}
    </View>
  );
};

const stylesScreenContainer = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ScreenContainer;
