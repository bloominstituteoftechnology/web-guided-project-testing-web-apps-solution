import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("Renders without errors", ()=> {
    render(<App/>);
});

test("When App mounts, Add New Animal header exists on screen", ()=>{
    //Arrange: render our component
    render(<App/>);

    //Act: Find our header
    
    //get - finds a single element and if not found, fails test 
    // const header = screen.getByText("Add Old Animal");
    // console.log(header);
    
    //find - finds a single element and if not found, returns null
    // const header = screen.findByText("Add Old Animal");
    // console.log(header);

    //query - finds a single element and if not found, returns null
    const header = screen.queryByText(/add new animal/i);

    //Assert: Verify that header is on the screen
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
    expect(header).toHaveTextContent(/add new animal/i);
});