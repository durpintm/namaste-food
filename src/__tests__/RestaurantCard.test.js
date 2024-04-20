import { render, screen } from "@testing-library/react";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import MOCK_DATA from "../mocks/restroCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restaurant Card component with props data", () => {
  render(<RestaurantCard restroData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

it("Should render Restaurant Card component with Promoted Label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  render(<RestaurantCardPromoted restroData={MOCK_DATA} />);

  const promoted = screen.getByText("Promoted");
  expect(promoted).toBeInTheDocument();
});
