import { useRef } from "react";
import { Camera } from "expo-camera";
import { StyleSheet } from "react-native";
import useCameraTypeStore from "../../stateManagement/useCameraTypeStore";

interface CameraViewProps {
  children: React.ReactNode;
}

export let camRef: React.RefObject<Camera>;

const CameraView: React.FC<CameraViewProps> = ({ children }) => {
  camRef = useRef<Camera>(null);

  const { cameraType } = useCameraTypeStore((state) => state);

  return (
    <Camera
      ref={camRef}
      style={styles.camera}
      type={cameraType}
      testID="CameraView"
    >
      {children}
    </Camera>
  );
};

const styles = StyleSheet.create({
  camera: { flex: 1 },
});

export default CameraView;
