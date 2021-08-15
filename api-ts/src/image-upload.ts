import multer from "multer";

export const upload = multer({
  dest: "uploads/",
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      return cb(null, true);
    }
    cb(null, false);
    return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  },
});
