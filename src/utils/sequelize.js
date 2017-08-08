const SequelizeLib = require('sequelize');

export default class sequelize {
	static init() {
		return new SequelizeLib('fleet', 'root', 'root', {
			host: 'localhost',
			dialect: 'mysql',

			pool: {
				max: 5,
				min: 0,
				idle: 10000
			},
		});
	}

	static test() {
		const sql = sequelize.init();
        sql.authenticate()
            .then(() => {
	console.log('Connection has been established successfully.');
})
            .catch(err => {
	console.error('Unable to connect to the database:', err);
});
	}
}
