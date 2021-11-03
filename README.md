# WEALTH HEALTH PROJECT

## General information

This project is the new version of Wealth Health Website.\
This version has been developed in React.js by **Fabien HUPEL** for **OpenClassrooms FrontEnd Degree.**\
The [previous website version used jQuery ](https://github.com/OpenClassrooms-Student-Center/P12_Front-end).\
In this project a jquery library for datatables is replaced by a component "Datatable" imported from another library (fhp-component-library) [developed and published in another project](https://github.com/fabhup/Fabienhupel_14_08102021_Component) to store Wealth Health React components.\
Redux is used in this project for state management.

## Prerequisites

-   [NodeJS (**version 12.18 or greater**)](https://nodejs.org/en/)

## Dependecies

    Use of create-react-app
    - "@reduxjs/toolkit": "^1.6.2",
    - "@testing-library/jest-dom": "^5.11.4",
    - "@testing-library/react": "^11.1.0",
    - "@testing-library/user-event": "^12.1.10",
    - "core-js": "^3.19.1",
    - "fhp-component-library": "^0.2.0",
    - "moment": "^2.29.1",
    - "react": "^17.0.2",
    - "react-datepicker": "^4.3.0",
    - "react-dom": "^17.0.2",
    - "react-redux": "^7.2.6",
    - "react-router": "^5.2.1",
    - "react-router-dom": "^5.3.0",
    - "react-scripts": "4.0.3",
    - "styled-components": "^5.3.3",
    - "web-vitals": "^1.0.1"

## Install

-   Fork this repository and clone it on your computer (in a new repository).
-   Open the front end project and run the command `npm install` in a new terminal to install all the dependencies.
-   Run the frontend with `npm start` (or `yarn dev`)

-   If you have this message in your terminal :

    > -   `Something is already running on port 3000.`\
    >     `Would you like to run the app on another port instead? › (Y/n)`

    Press `Y` to run the frontEnd on another port than the backend (it will be probably launched on port 3001)

-   Open [http://localhost:3000](http://localhost:3000) to view the frontend in the browser.

-   The page will reload if you make edits.

## Build the project

-   Before deploy the project, you have to run build command with `npm run build` or `yarn build`
-   Then run the command `serve -s build ` to see the build version of project
