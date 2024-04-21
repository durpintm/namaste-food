import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenu";
import MOCK_DATA_RESTRO from "../mocks/mockRestroMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA_RESTRO);
    },
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("New Thin n Crispy Pizzas (6)");
  console.log(accordianHeader);
  fireEvent.click(accordianHeader);
  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(6);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(6);

  expect(
    screen.getByText("Cart is empty. Add items to the cart!")
  ).toBeInTheDocument();
});
