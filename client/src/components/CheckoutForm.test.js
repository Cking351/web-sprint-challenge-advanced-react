import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.getByText(/checkout form/i);
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    // events
    fireEvent.change(firstNameInput, { target: { value: "John" } })
    fireEvent.change(lastNameInput, { target: { value: "Henry" } })
    fireEvent.change(addressInput, { target: { value: "123 Fake St" } })
    fireEvent.change(cityInput, { target: { value: "Greenville" } })
    fireEvent.change(stateInput, { target: { value: "SC" } })
    fireEvent.change(zipInput, { target: { value: "29680" } })

    // submit
    const submitButton = screen.getByRole('button');
    fireEvent.click(submitButton);

    const successMessage = screen.getAllByTestId('successMessage')
});
