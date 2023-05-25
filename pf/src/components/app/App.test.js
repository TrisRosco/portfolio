import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders My name is Tristan", () => {
  render(<App />);
  const linkElement = screen.getByText(/My name is Tristan/i);
  expect(linkElement).toBeInTheDocument();
});

// test("renders jeff", () => {
//   render(<App />);
//   const linkElement = screen.getByAltText(/jeff/i);
//   expect(linkElement).toBeInTheDocument();
// });
