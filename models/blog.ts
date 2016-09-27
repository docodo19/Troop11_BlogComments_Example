import * as mongoose from 'mongoose';
import * as Comment from './comment';

export interface IBlog extends mongoose.Document {
    title: string;
    message: string;
    timeCreate: Date;
    isActive: boolean;
    comments: Comment.IComment[];
}

let blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: false,
    },
    timeCreate: {
        type: Date,
        required: true
    },
    isActive:{
        type: Boolean,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

export default mongoose.model<IBlog>('Blog', blogSchema);
