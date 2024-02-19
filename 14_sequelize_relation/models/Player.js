const PlayerModel = function (sequelize, DataTypes) {
  const Player = sequelize.define(
    "Player",
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // tableName: "Player", // 위에 "Player" 있기 때문에 tableName 안 써도 된다
      freezeTableName: true,
    }
  );
  return Player;
};

module.exports = PlayerModel;
