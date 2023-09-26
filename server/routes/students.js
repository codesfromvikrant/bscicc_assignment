const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require('fs');
const path = require("path");
const Student = require("../models/students");

// get all students
router.get("/", async (req, res) => {
  try {
    const allstudents = await Student.find();
    res.status(200).json(allstudents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get one student
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/profileImages", (req, res) => {
  console.log('GET /profileImages');
  const imageFolderPath = 'uploads/profileImages';

  fs.readdir(imageFolderPath, (err, files) => {
    if (err) {
      console.error('Error reading image folder:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const imageFiles = files.filter((file) =>
      ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())
    );

    // Construct an array of image URLs based on your server's URL
    const imageUrls = imageFiles.map((file) => `/uploads/profileImages/${file}`);
    console.log('imageUrls:', imageUrls);
    // Send the image URLs in JSON format
    res.json({ images: imageUrls });
  });
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/profileImages/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, `profile-${uniqueSuffix}${fileExtension}`);
  },
});

const upload = multer({ storage });
// router.use('/uploads/profileImages', express.static('uploads/profileImages'));



// Endpoint to fetch all image file names in 'uploads/profileImages' folder


router.post("/", upload.single('profileImage'), async (req, res) => {
  const uploadedProfileImage = req.file;
  const formdata = JSON.parse(req.body.formData);

  const newStudent = new Student({
    profileImage: uploadedProfileImage ? uploadedProfileImage.filename : null,
    personalData: formdata.personalData,
    education: formdata.educationalData,
    certification: formdata.certificationData,
  });
  try {
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    console.error('Error saving student:', err);
    res.status(400).json({ message: err.message });
  }
});

// update one student
router.patch("/:id", async (req, res) => {
  const formdata = req.body;
  console.log('formdata:', formdata);
  try {

    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {
      personalData: formdata.personalData,
      education: formdata.educationalData,
      certification: formdata.certificationData,
    }, { new: true });
    res.status(200).json(updatedStudent);
  } catch (err) {
    console.error('Error updating student:', err);
    res.status(400).json({ message: err.message });
  }
});

// delete one student
router.delete("/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

});


module.exports = router;




















