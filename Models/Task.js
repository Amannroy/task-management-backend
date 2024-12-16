import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
    },
    dueDate: {
        type: Date,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }
});

const TaskModel = mongoose.model('tasks', TaskSchema);
export default TaskModel;
