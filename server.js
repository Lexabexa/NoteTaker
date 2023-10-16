//server and dependencies
const express = require('express');
const app = express(); //express server
const fs = require('fs');//node
const path = require('path');
const notes = require('./db/db.json');
const { get } = require('http');

//PORT heroku or local
const PORT = process.env.PORT || 3001;

//middleware json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//route index.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('/assets/js/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/js/index.js'));
});
app.get('/assets/css/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, './public/assets/css/styles.css'));
});

//route notes.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

//route api/notes
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});



//post
app.post('/api/notes', (req, res) => {
    let newNote = req.body;
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let noteId = generateUniqueId(noteList);
    newNote.id = noteId;
    noteList.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(noteList), (err) => {
      if (err) throw err;
      res.json(noteList);
    });
  });

//delete
app.delete('/api/notes/:id', (req, res) => {
    let noteList = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    let noteId = req.params.id;
    noteList = noteList.filter((note) => note.id !== noteId);
    fs.writeFile('./db/db.json', JSON.stringify(noteList), (err) => {
      if (err) throw err;
      res.json(noteList);
    });
  });


//listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});

//unique id
function generateUniqueId(noteList) {
    let noteId = Math.floor(Math.random() * 100000000);
    for (let i = 0; i < noteList.length; i++) {
      if (noteId === noteList[i].id) {
        noteId = generateUniqueId(noteList);
      }
    }
    return noteId;
  }

