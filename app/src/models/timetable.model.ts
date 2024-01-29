import { Schema, model } from "mongoose";

interface ITimetable {
  course: String;
  period: String;
  lecture_hall: String;
}

const timetableSchema = new Schema<ITimetable>(
  {
    course: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
    },
    lecture_hall: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Timetable = model<ITimetable>("Timetable", timetableSchema);

export default Timetable;
