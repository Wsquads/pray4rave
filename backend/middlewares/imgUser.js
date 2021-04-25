const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const conf = require('../config.json');

var storage = new GridFsStorage({
  url: conf.bbdd,
  file: (req, file) => {
    const match = ["image/png", "image/jpeg", "image/jpg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-bezkoder-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-bezkoder-${file.originalname}`
    };
  }
});

var uploadFile = multer({ storage: storage }).single("image");
var uploadFilesMiddleware = util.promisify(uploadFile);
module.exports = uploadFilesMiddleware;