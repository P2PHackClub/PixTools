module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		minecraft_username: {
			type: DataTypes.TEXT,
			defaultValue: "",
			allowNull: true,
		},
	}, {
		timestamps: new Date(),
	});
};