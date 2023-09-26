const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require("path");


router.get("/", (req, res) => {
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

module.exports = router