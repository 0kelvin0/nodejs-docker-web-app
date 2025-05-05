import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";
import { constants } from "../constants.js";

// @desc Get all contacts
// @route Get /api/contacts
// @access public
export const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// @desc Create all contacts
// @route POST /api/contacts
// @access public
export const createContact = asyncHandler(async (req,res) => {
    console.log("req.body is", req.body);
    const {name, email, phone} = req.body;
    if (!name || !email) {
        res.status(400);
        throw new Error("All field mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    })
    res.status(201).json(contact);
});

// @desc Get contact with id
// @route Get /api/contacts/:id
// @access public
export const getContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(constants.NOT_FOUND);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

// @desc Update all contacts
// @route PUT /api/contacts/:id
// @access public
export const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(constants.NOT_FOUND);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );
    res.status(200).json(updatedContact);
});

// @desc Delete all contacts
// @route Delete /api/contacts/:id
// @access public
export const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(constants.NOT_FOUND);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
});
