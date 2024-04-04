import { render, screen } from "@testing-library/react-native";
import Loader from "../../components/Loader";

function renderLoaderWithIsLoadingIn(isLoading = false): void {
  render(<Loader isLoading={isLoading} />);
}

describe("<Loader />", () => {
  it("Se renderiza, cuando se le asigna un valor verdadero a su prop isLoading", () => {
    renderLoaderWithIsLoadingIn(true);

    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByTestId("progressBar")).toBeTruthy();
  });

  it("No se renderiza, cuando la prop isLoading es false", () => {
    renderLoaderWithIsLoadingIn(false);

    expect(screen.queryByText("Cargando...")).toBeFalsy();
    expect(screen.queryByTestId("progressBar")).toBeFalsy();
  });
});
