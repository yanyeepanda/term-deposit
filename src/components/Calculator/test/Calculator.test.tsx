import React from "react";
import { render, screen } from "@testing-library/react";
import Calculator from "..";

test("renders Calcuator", () => {
  render(<Calculator />);
  expect(screen.getByTestId("test-calculator")).toBeInTheDocument();
});


