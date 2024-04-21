import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  // beforeAll(() => {
  //   console.log("Before all");
  // });

  // afterAll(() => {
  //   console.log("After all");
  // });

  // beforeEach(() => {
  //   console.log("Before each");
  // });

  // afterEach(() => {
  //   console.log("After each");
  // });

  it("Should load headings contact us component", () => {
    render(<Contact />);

    // const heading = screen.getByRole("heading");
    const headings = screen.getAllByRole("heading");

    expect(headings.length).toBe(2);
  });

  test("Should load button inside contact us component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact us component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load two input boxes in the contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(4);
  });
});
