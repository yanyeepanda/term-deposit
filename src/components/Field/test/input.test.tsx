import React from "react";
import { render, screen } from "@testing-library/react";
import Field from "..";

const mockSetValue = jest.fn();

test("renders learn input field with label and value", () => {

  render(<Field label="Label" value={999} setValue={mockSetValue} />);
  const textElement = screen.getByText("Label");
  expect(textElement).toBeInTheDocument();
  const inputElement = screen.getByDisplayValue("999");
  expect(inputElement).toBeInTheDocument();
});
