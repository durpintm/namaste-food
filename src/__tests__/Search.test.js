import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/restroListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search restaurant list for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSerch = screen.getAllByTestId("restroCard");

  expect(cardsBeforeSerch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);

  // Screen should load 1 card
  const cardsAfterSearch = screen.getAllByTestId("restroCard");

  expect(cardsAfterSearch.length).toBe(1);

  // expect(searchBtn).toBeInTheDocument();
});

it("Should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // const cardsBeforeFilter = screen.getAllByTestId("restroCard");
  // expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("restroCard");
  // console.log(cardsAfterFilter);
  expect(cardsAfterFilter.length).toBe(6);
});
