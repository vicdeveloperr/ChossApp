import { LinearGradient } from "expo-linear-gradient";
import type { LinearGradientProps } from "expo-linear-gradient";
import { StyleSheet, type StyleProp, type ViewStyle } from "react-native";

interface GradientProps extends LinearGradientProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  type?: "littleBlack";
}

export const Gradient: React.FC<GradientProps> = ({
  style,
  colors,
  type,
  start,
  end,
  children,
  locations,
}) => {
  if (type === "littleBlack") {
    return (
      <LinearGradient
        colors={["#000", "transparent"]}
        style={styles.littleBlack}
        start={[0, 1]}
        end={[0, 0.7]}
      >
        {children}
      </LinearGradient>
    );
  } else {
    return (
      <LinearGradient
        colors={colors}
        style={style}
        end={end}
        start={start}
        locations={locations}
      >
        {children}
      </LinearGradient>
    );
  }
};

const styles = StyleSheet.create({
  littleBlack: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
});
