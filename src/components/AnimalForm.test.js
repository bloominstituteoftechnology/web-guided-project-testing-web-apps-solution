import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AnimalForm from './AnimalForm';

test("renders AnimalForm without errors", () => {
    render(<AnimalForm />);
});

test("when user fills all fields and submits, species appears in list", async () => {
    //Arrange: Get Component Renders
    const user = userEvent.setup()
    render(<AnimalForm />);
    const species = "feline";

    //Act: Fill out and submit form
    // - Focus on the species input
    const specieInput = screen.getByLabelText(/species:/i);
    // - Types species into the input
    await user.type(specieInput, species);

    // - Focus on the age input
    const ageInput = screen.getByLabelText(/age:/i);
    // - Types into the age input
    await user.type(ageInput, "9");

    // - Focus on the notes input
    const notesInput = screen.getByLabelText(/notes:/i);
    // - Types into the notes input
    await user.type(notesInput, "this cutest ever!!!");

    // - Click the submit button
    const submitButton = screen.getByRole("button");
    await user.click(submitButton);

    //Assert:

    // PROMISE WAY
    // const speciesFeedbackPromise = screen.findByText(species);
    // speciesFeedbackPromise
    //     .then(speciesFeedback=> {
    //         expect(speciesFeedback).toBeInTheDocument();
    //     });

    // ASYNC / AWAIT WAY
    // const speciesFeedback = await screen.findByText(species);
    // expect(speciesFeedback).toBeInTheDocument();

    // WAITFOR WAY
    await waitFor(() => {
        const speciesFeedback = screen.queryByText(species);
        expect(speciesFeedback).toBeInTheDocument();
    });

    //SYNC WAY
    // // - find the species inputed
    // const speciesFeedback = screen.queryByText(species);
    // // - verify that it is in the list
    // expect(speciesFeedback).toBeInTheDocument();
});
