import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
        },
        userEmail: {
            type: String,
        },
        hotelName: {
            type: String,
        },
        fullName: {
            type: String,
            required: true,
        },
        Days: {
            type: Number,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        bookAt: {
            type: Date,
        },
    },
    { timestamps: true },
);

export default mongoose.model('Booking', bookingSchema);
