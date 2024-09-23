import Note from '../models/Note.js';

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes' });
  }
};

export const createNote = async (req, res) => {
  const { note, date, time } = req.body;
  const newNote = new Note({ note, date, time });

  try {
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error saving note' });
  }
};
