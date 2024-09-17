import express from 'express';
import { addCustomer, getCustomers, getCustomerById } from '../controllers/customerController.js';
import multer from 'multer';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Routes
router.post('/', upload.single('pdfFile'), addCustomer);
router.get('/', getCustomers);
router.get('/:id', getCustomerById);

export default router;
