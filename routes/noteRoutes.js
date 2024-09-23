import express from 'express';
import { getNotes, createNote } from '../controllers/noteController.js';

const router = express.Router();

router.get('/', getNotes);  // Handle GET requests to /api/notes
router.post('/', createNote); // Handle POST requests to /api/notes

export default router;
