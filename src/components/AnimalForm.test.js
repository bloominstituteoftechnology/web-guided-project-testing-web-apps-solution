import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import AnimalForm from "./AnimalForm";

test("renders App without errors", () => {
  render(<AnimalForm />);
});

test("user can fill out and submit form", async () => {
  // render component
  render(<AnimalForm />);

  // query for each input
  const speciesInput = screen.getByLabelText(/species/i);
  const ageInput = screen.getByLabelText(/age/i);
  const notesInput = screen.getByLabelText(/notes/i);

  // fill out the form
  userEvent.type(speciesInput, "Grizzly Bear");
  userEvent.type(ageInput, "3");
  userEvent.type(ageInput, "just a giant teddy bear");
  
  // assert that the form inputs have values (if you want)
  expect(speciesInput).toHaveValue("Grizzly Bear");
  // ... etc

  // Submit the form (Careful here... state changes can happen asynchronously)
  const button = screen.getByRole("button", { name: /submit!/i });
  userEvent.click(button);

  // assert that the animal has been added to the list
  const newAnimal = screen.queryByText(/grizzly bear/i);
  expect(newAnimal).toBeTruthy();
  expect(newAnimal).toBeInTheDocument();
});
