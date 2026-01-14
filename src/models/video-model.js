import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchma = new Schema(
    {
        videoFile: {
            type: String, //cloudnary url
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        thumbnail: {
            type: String, //cloudnary url
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        desciption: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            default: 0,
        },
        isPublished: {
            type: Boolean,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
    },
);

// install dependency mongoose-aggregate.paginate-v2 : need for aggregation fremework of mongo

videoSchma.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchma);
