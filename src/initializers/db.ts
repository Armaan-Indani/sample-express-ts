import mongoose from 'mongoose';
import envGet from '../helpers/envHandler.js';

const URL: string = envGet.DB_URL;

async function connectToDB(): Promise<void> {
    try {
        await mongoose.connect(URL);
        console.log('Connected to Database!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

export default connectToDB;