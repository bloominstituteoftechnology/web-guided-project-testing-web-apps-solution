import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
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
  fireEvent.change(speciesInput, { target: { value: "Grizzly Bear" } });
  fireEvent.change(ageInput, { target: { value: 3 } });
  fireEvent.change(notesInput, {
    target: { value: "just a giant teddy bear" },
  });

  // assert that the form inputs have values (if you want)
  expect(speciesInput).toHaveValue("Grizzly Bear");
  // ... etc

  // Submit the form (Careful here... state changes can happen asynchronously)
  const button = screen.getByRole("button", { name: /submit!/i });
  fireEvent.click(button);

  // assert that the animal has been added to the list
  const newAnimal = await screen.findByText(/grizzly bear/i);
});
