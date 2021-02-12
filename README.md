# ☢️🪥 Radioactive Toothbrushes ☢️🪥
---
#### Table of Contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Technologies](#Techologies)
- [Contributions](#Contributions)
- [Authors](#Authors)
---
## Introduction

Designed with multi-screen viewing in mind, this is a variation of the project set forth by Turing School of Software and Design. [See rubric here](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html).

Users can interact with a selection movies uploaded from a RESTful API by scrolling through images and titles of said movies. They then can click a movie to view further details and either use the back button or the provided home button to navigate to the landing page.

As a team, we decided to polish off our work to create an MVP that meets [Iteration 4](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html) requirements. We decided to deploy this site to gh pages as our stretch and reaffirm our knowledge in React, Router, & Cypress-- the three new technologies we learned and utilized in this project.

## Features

To view please:
- please visit [here](https://github.com/gaj23/rancid/ to interact and view
- has desktop & mobile features

### Categories:
- [Home Page](#Home-Page)

- [Selecting a Movie](#Selecting-a-movie)

- [Going Back to the Home Page](#Going-back-to-the-Home-Page)

- [Error Message](#Error-Message)

- [Cypress User Flow Testing](#Cypress-User-Flow-Testing)

#### Home Page
Upon navigating to our landing page, users see the available movies.

<details>
<summary>Example of Mobile Experience</summary>
<br>
 <img width="283" alt="all movies" src="https://user-images.githubusercontent.com/70095063/107731695-d6958100-6cb3-11eb-9580-cbf191a082d5.png">
</details>

#### Selecting a Movie
A user can scroll through our movies and select a movie to gain further details on that film.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="selecting Onward" src="https://media.giphy.com/media/zIcgOXSX5cnDSOqdOu/giphy.gif">
</details>

<details>
<summary>Example of Desktop Experience</summary>
Note: hovering abilities exist on desktop & not on mobile.
<br>
<img width="600" alt="scrolling through desktop view" src="https://media.giphy.com/media/qjKbpHqCYsTCrKJYZN/giphy.gif">
</details>

#### Going Back to the Home Page
Once a user is done reading the film's details, they then can click the home icon to return the the landing page.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="navigating to home"src="https://media.giphy.com/media/mYgdbke1WUK4esKJWv/giphy.gif">
</details>

<details>
<summary>Example of Desktop Experience</summary>
Note: hovering abilities exist on desktop & not on mobile.
<br>
<img width="600" alt="navigating to home on the desktop"src="https://media.giphy.com/media/3TjIb4h6bDEx1T1oXD/giphy.gif">
</details>

#### Error Message
If a problem with the API or perhaps the user wishes to navigate to a movie by using the url and makes a mistake, an error message will load so the user can become aware that there is a problem.

<details>
<summary>Example of Mobile Experience</summary>
<br>
<img width="283" alt="navigating to home"src="https://media.giphy.com/media/z8GC8cC5V8zGV7ZYe7/giphy.gif">
</details>

#### Cypress User Flow Testing

<details>
<summary>Example of Cypress Experience</summary>
<br>
<img width="600" alt="testing user flow in cypress" src="https://media.giphy.com/media/P4NhDLMlkXlcwAKIcE/giphy.gif">
</details>

## Technologies
- React
- Router
- Cypress for Testing
- CSS
- HTML
- [Flat Icon](https://www.flaticon.com/) for home icon
- WAVE for accessibility auditing
- Lighthouse for accessibility auditing
- Webpack

## Future Iterations

More specifics about future work or refactoring can be found in this projects [GH issues](https://github.com/gaj23/rancid/issues).

Discussion about applying SCSS principals occurred at the beginning of our project. However, rather than get ahead of ourselves, we reoriented ourselves to keep the MVP in mind. A future iteration could include SCSS refactoring.

## Contributions

Thank you <a href="https://github.com/cbdallavalle">Casey Dallavalle</a>, <a href="https://github.com/Corbinj22">Justin Corbin</a>, and <a href="https://github.com/letakeane"> Leta Keane</a> for your guidance and advice.

#### To Contribute
If you'd like to contribute to the code, please complete the following steps:
- clone this repo locally: `git clone git@github.com:gaj23/rancid.git <renameHere>`
- API documentation & endpoints are [here](https://frontend.turing.io/projects/module-3/rancid-tomatillos-v3.html)
- from there please create a new branch following this pattern: `git checkout -b initials/feature-fix/focus-of-branch`
- cd into your local copy and run `npm install`
- Have Cypress for testing
 - check that the following key-value pair in `scripts` is in your `package.json`
 - `"cypress": "cypress open"`
 - if not please download Cypress with `npm i -D cypress` and add the above to `scripts`.
- contribute as you'd like and push up your work for review
Thank you.

## Author
<table>
    <tr>
        <td> Gabrielle Joyce <a href="https://github.com/gaj23">GH</td>
        <td> Richard Tyler <a href="https://github.com/richardltyler">GH</td>
    </tr>
 <td><img src="https://avatars1.githubusercontent.com/u/68332132?s=460&u=a54dd9d3eede7c5ae0704846c510001c89dc88f7&v=4" alt="Ms. Joyce"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/70095063?s=400&u=39c274f1a2fbb88cc013de61aa8307596a988255&v=4" alt="Mr. Tyler"
 width="150" height="auto" /></td>
</table>
