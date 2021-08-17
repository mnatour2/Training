import multer from "multer";
import { RequestHandler } from "express";

const upload = multer({
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

const injectFileToRequestBody: RequestHandler = (req, res, next) => {
  if (req.file) {
    req.body[req.file.fieldname] = req.file?.path;
  }
  next();
};

export const uploadSingleImage = (field: string) => [
  upload.single(field),
  injectFileToRequestBody,
];
