import { model, Schema } from "mongoose";
import { excludeDeletedAggregation, excludeDeletedQuery } from "../../../utils/queryFilter";
import { TSkill } from "./skill.interface";

const skillSchema = new Schema<TSkill>(
  {
    icon: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

// query middleware for soft delete by utils
skillSchema.pre("find", excludeDeletedQuery);
skillSchema.pre("findOne", excludeDeletedQuery);

// aggregate middleware for soft delete by utils
skillSchema.pre("aggregate", excludeDeletedAggregation);

export const Skill = model<TSkill>("Skill", skillSchema);
