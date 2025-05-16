import mongoose from "mongoose";

interface ITopic extends Document{
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

const topicSchema = new mongoose.Schema<ITopic>(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model<ITopic>("Topic", topicSchema);
export default Topic;
