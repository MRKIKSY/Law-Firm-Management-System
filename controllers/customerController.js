import Customer from '../models/customerModel.js';
import path from 'path';
import fs from 'fs';

// Add new customer
export const addCustomer = async (req, res) => {
  const { name, dateOfBirth, phone, email, address, caseDetails } = req.body;
  const pdfFile = req.file ? req.file.filename : null;

  console.log("Customer Data: ", { name, dateOfBirth, phone, email, address, caseDetails });
  console.log("Uploaded PDF: ", pdfFile);

  try {
    const newCustomer = new Customer({
      name,
      dateOfBirth,
      phone,
      email,
      address,
      caseDetails,
      pdfFile,
    });
    const savedCustomer = await newCustomer.save();
    console.log("Saved Customer: ", savedCustomer);
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error("Error Saving Customer: ", error);
    res.status(500).json({ error: 'Error adding customer' });
  }
};

  // Get all customers
  export const getCustomers = async (req, res) => {
    try {
      const customers = await Customer.find();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching customers' });
    }
  };
  
  // Get individual customer by ID
  export const getCustomerById = async (req, res) => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) return res.status(404).json({ error: 'Customer not found' });
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching customer details' });
    }
  };
    