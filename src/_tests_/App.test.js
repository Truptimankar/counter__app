import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("initial counter display is 0", () => {
  const { getByText } = render(<App />);
  const counterDisplay = getByText("You clicked 0 times");
  expect(counterDisplay).toBeDefined();
  expect(counterDisplay).toBeInTheDocument();
});

test("clicking + button increments counter", () => {
  const { getByText } = render(<App />);
  const addButton = getByText("+");
  fireEvent.click(addButton);
  const counterDisplay = getByText("You clicked 1 times");
  expect(counterDisplay).toBeInTheDocument();
});

test("clicking - button decrements counter", () => {
  const { getByText } = render(<App />);
  const addButton = getByText("+");
  const subtractButton = getByText("-");
  fireEvent.click(addButton);
  fireEvent.click(subtractButton);
  const counterDisplay = getByText("You clicked 0 times");
  expect(counterDisplay).toBeInTheDocument();
});

test("counter does not go below 0", () => {
  const { getByText } = render(<App />);
  const subtractButton = getByText("-");
  fireEvent.click(subtractButton);
  const counterDisplay = getByText("You clicked 0 times");
  expect(counterDisplay).toBeInTheDocument();
});

