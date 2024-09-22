import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://krishnap:krishnap@cluster0.i1kgv.mongodb.net/food-del').then(() => console.log("DB Connected"))
}