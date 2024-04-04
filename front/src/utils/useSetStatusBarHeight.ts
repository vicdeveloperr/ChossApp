import { getStatusBarHeight } from "react-native-status-bar-height";
import { useEffect, useState } from "react";
import { useStatusBarHeightStore } from "../stateManagement";

export const useSetStatusBarHeight = () => {
  const [isDefined, setIsDefined] = useState(false);
  const { setHeight } = useStatusBarHeightStore((state) => state);

  useEffect(() => {
    if (!isDefined) {
      const height = getStatusBarHeight();
      setHeight(height);
      setIsDefined(true);
    }
  });
};
