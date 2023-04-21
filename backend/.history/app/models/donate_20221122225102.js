module.exports = (sequelize, DataTypes) => {

    const Account = sequelize.define("donates", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        money: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },

    }, {
        timestamps: false //ko render createdAt and updatedAt
    }
    )

    return Account

}