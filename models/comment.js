'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User)
      this.belongsTo(models.Photo)
    }
  }
  Comment.init({
    UserId:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull:{
          msg: "UserId cannot be null/ omitted"
        },
        notEmpty: {
          msg: "UserId cannot be an emty string"
        },
        isInt:{
          msg: "UserId must be integer"
        }
      }
    },
    PhotoId:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull:{
          msg: "PhotoId cannot be null/ omitted"
        },
        notEmpty: {
          msg: "PhotoId cannot be an emty string"
        },
        isInt:{
          msg: "PhotoId must be integer"
        }
      }
    },
    comment: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "comment cannot be null/ omitted"
        },
        notEmpty: {
          msg: "comment cannot be an emty string"
        }
    },
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};