import "react-native-gesture-handler";
import StackNavigator from "./src/navigation/StackNavigator";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import { useSetStatusBarHeight } from "./src/utils/useSetStatusBarHeight";
import { useRequestPermissions } from "./src/utils/useRequestPermissions";

const App: React.FC = () => {
  useSetStatusBarHeight(); // Almacenamos valor de la altura de la barra de estado
  useRequestPermissions();

  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <StackNavigator />
    </PaperProvider>
  );
};

export default App;
