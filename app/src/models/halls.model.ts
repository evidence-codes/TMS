import { Schema, model } from "mongoose";

interface IHall {
  name: String;
  type: String;
}

const hallSchema = new Schema<IHall>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Hall = model<IHall>("Hall", hallSchema);

export default Hall;
