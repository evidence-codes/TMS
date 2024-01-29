import { Schema, model } from "mongoose";

interface ICourse {
  name: String;
  code: String;
  type: String;
  semester: String;
  lecturer: String;
  lecturerID: String;
  period: String;
}

const courseSchema = new Schema<ICourse>(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      required: true,
    },
    lecturer: {
      type: String,
      required: true,
    },
    lecturerID: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Course = model<ICourse>("Course", courseSchema);

export default Course;
