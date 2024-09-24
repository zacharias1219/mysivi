import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection{
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

const cached: MongooseConnection = { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URL) throw new Error('Missing MONGODB_URL');

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URL, {
            dbName: "mysivi",
            bufferCommands: false,
        });
    }

    if (!cached.conn) {
        cached.conn = await cached.promise;
    }

    return cached.conn;
}