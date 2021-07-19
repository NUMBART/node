const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);
  if (duplicateNote) {
    console.log(chalk.red.inverse('Note title taken!'));
  } else {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const updatedNotes = notes.filter((note) => note.title !== title);
  if (notes.length > updatedNotes.length)
    console.log(chalk.green.inverse('Note removed!'));
  else console.log(chalk.red.inverse('No note found!'));
  saveNotes(updatedNotes);
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.underline('Your Notes\n'));
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);

  if (!note) {
    console.log(chalk.red.inverse('No note found'));
  } else {
    console.log(`\n${chalk.underline(note.title)}\n`);
    console.log(note.body);
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
