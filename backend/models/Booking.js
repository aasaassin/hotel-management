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
            required: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        guestSize: {
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
