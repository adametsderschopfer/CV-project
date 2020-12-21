const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

export default fileFilter;
