import { Schema, model } from "mongoose";

interface ILecturer {
  fullname: String;
  email: String;
  faculty_no: String;
  designation: String;
  mobile: String;
}

const lecturerSchema = new Schema<ILecturer>(
  {
    faculty_no: {
      type: String,
      required: true,
      unique: true,
    },
    designation: {
      type: String,
      required: true,
    },
    fullname: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Lecturer = model<ILecturer>("Lecturer", lecturerSchema);

export default Lecturer;
