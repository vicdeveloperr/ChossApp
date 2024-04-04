import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import VideoTutorialScreen from "../screens/VideoTutorialScreen";
import LoadVideoScreen from "../screens/LoadVideoScreen";
import { CameraScreenWithTimerAndAlert } from "../components/camerascreen/CameraScreenWithTimerAndAlert";
import { AnalysisScreen } from "../screens/AnalysisScreen";

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type RootStackParamList = {
  camera: undefined;
  videoTutorial: undefined;
  loadVideo: undefined;
  analysis: undefined;
}; // El tipo del RootStackParamList debe ser un type para que el navegador funcione correctamente.

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ header: () => <></> }}
        initialRouteName="videoTutorial"
      >
        <Stack.Screen
          name="camera"
          component={CameraScreenWithTimerAndAlert}
        />
        <Stack.Screen
          name="videoTutorial"
          component={VideoTutorialScreen}
        />
        <Stack.Screen
          name="loadVideo"
          component={LoadVideoScreen}
        />
        <Stack.Screen
          name="analysis"
          component={AnalysisScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
