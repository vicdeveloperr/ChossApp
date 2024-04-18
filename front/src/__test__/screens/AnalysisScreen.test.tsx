import { render, waitFor } from "@testing-library/react-native";
import { AnalysisScreen } from "../../screens/AnalysisScreen";
import type { ReactTestInstance } from "react-test-renderer";
import { playSound } from "../../utils/playSound";

jest.mock("uuid", () => ({ v4: () => Math.random() }));
jest.mock("../../utils/playSound", () => ({ playSound: jest.fn() }));

type renderComponentType = () => {
  getByTestId: (id: string) => ReactTestInstance;
  getByText: (text: string) => ReactTestInstance;
};

const renderComponent: renderComponentType = () => {
  const selectors = render(<AnalysisScreen />);

  return selectors;
};

describe("<AnalysisScreen />", () => {
  it("Muestra mensaje de 'Análisis generado...'", () => {
    const { getByText } = renderComponent();

    expect(getByText("Análisis generado...")).toBeTruthy();
  });

  it("Muestra preguntas recomendadas", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("RecomendedQuestions")).toBeTruthy();
  });

  it("Muestra barra de navegación", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("nav")).toBeTruthy();
  });

  it("Muestra vídeo del movimiento realizado por el usuario", () => {
    const { getByTestId } = renderComponent();

    expect(getByTestId("UserMovementVideo")).toBeTruthy();
  });

  it("Reproduce audio del análisis generado por el modelo", async () => {
    await waitFor(() => {
      expect(playSound).toHaveBeenCalled();
    });
  });
});
