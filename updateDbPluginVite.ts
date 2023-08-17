import { updateDB, updateDBInterval } from './updateDb';

export const dbUpdater = {
	name: 'dbUpdater',
	configureServer() {
		updateDB();
		updateDBInterval();
	}
};
