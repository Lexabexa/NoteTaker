# NoteTaker
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
# Table Of Contents
* [Title](#Title)
* [Table of Contents](#TableofContents)
* [Description](#Description)
* [Screenshot](#Screenshot)
* [Link](#Link)
* [Video](#Video)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Contributing](#Contributing)
* [Questions](#Questions)
* [License](#License)

# Description
M.11
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
# Screenshot
Getting Started
The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

The following HTML routes should be created:

GET /notes should return the notes.html file.

GET * should return the index.html file.

The following API routes should be created:

GET /api/notes should read the db.json file and return all saved notes as JSON.

POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

Bonus
You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
# Link
# Video
# Installation
# Usage
The first thing to do is to clone the Starter Code Repository.

Type 'npm init' in the terminal to get package.json.

Type 'npm install express' in the terminal to install dependencies for the project.

Type 'node server.js' to initiate the server.

your choice to use [nodemon](https://www.npmjs.com/package/nodemon)

# Tests
# Contributing
[Starter Code](git@github.com:coding-boot-camp/miniature-eureka.git)


[Jest](https://www.npmjs.com/package/jest)

[YouTube](https://www.youtube.com/@code)

[Playground](https://developer.mozilla.org/en-US/play)

[W3Schools](https://www.w3schools.com/)

[UC Berkeley](https://bootcampspot.instructure.com/calendar#view_name=month&view_start=2023-07-01)

# Questions

Email: <lexabexa3@gmail.com>

[Github](https://github.com/Lexabexa)

# License
MIT License

Copyright (c) 2023 Alexa Webb

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
