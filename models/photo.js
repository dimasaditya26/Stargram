'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User)
      this.hasMany(models.Comment)
    }
  }
  Photo.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "title cannot be null/ omitted"
        },
        notEmpty: {
          msg: "title cannot be an emty string"
        }
    },
    },
    caption: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "caption cannot be null/ omitted"
        },
        notEmpty: {
          msg: "caption cannot be an emty string"
        }
    },
    },
    poster_image_url: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "poster_image_url cannot be null/ omitted"
        },
        notEmpty: {
          msg: "poster_image_url cannot be an emty string"
        },
        isUrl:{
          msg: "poster_img_url must be an acurate url format"
        }
    },
    },
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
    }
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};