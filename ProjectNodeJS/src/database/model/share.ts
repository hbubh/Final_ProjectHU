import mongoose from "mongoose";
import { shareSchema } from "../schema/share_schema";
const Share = mongoose.model("shares", shareSchema);
export { Share };
