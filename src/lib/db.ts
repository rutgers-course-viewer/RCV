import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { logger } from './logger';

dotenv.config();

const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_NAME;

logger.info('Attempting to connect to database');

mongoose
	.connect(dbUrl || '', {
		dbName: dbName || ''
	})
	.then(() => logger.info('Connected to database'))
	.catch((err) => logger.error(err));

mongoose.connection.on('error', (err) => {
	logger.error(err);
});

process.on('exit', function () {
	mongoose.disconnect();
});

export default mongoose;
