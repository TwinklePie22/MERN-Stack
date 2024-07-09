const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/download", (req, res) => {
  const file = path.join(__dirname, "files", "hello.docx"); // Adjust the path to your file

  res.download(file, (err) => {
    if (err) {
      console.error("File download failed:", err);
      res.status(500).send("Error occurred while downloading the file.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
