'use strict';
const {
  Model
} = require('sequelize');

const {hash} = require('./../helpers/hash')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Photo)
      this.hasMany(models.SocialMedia)
      this.hasMany(models.Comment)
    }
  }
  User.init({
    full_name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "full_name cannot be null/ omitted"
        },
        notEmpty: {
          msg: "full_name cannot be an emty string"
        }
    },
  },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "email cannot be null/ omitted"
        },
        notEmpty: {
          msg: "email cannot be an emty string"
        },
        isEmail: {
          msg: "email must be an acurate email format"
        }
    },
  },
    username: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "username cannot be null/ omitted"
        },
        notEmpty: {
          msg: "username cannot be an emty string"
        }
    },
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "passwrod cannot be null/ omitted"
        },
        notEmpty: {
          msg: "password cannot be an emty string"
        }
    },
    },
    profile_image_url: {
      type:DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "profile_img_url cannot be null/ omitted"
        },
        notEmpty: {
          msg: "profile_img_url cannot be an emty string"
        },
        isUrl:{
          msg: "profile_img_url must be an acurate url format"
        }
    },
    },
    age: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "age cannot be null/ omitted"
        },
        notEmpty: {
          msg: "age cannot be an emty integer"
        },
        isInt: {
          msg: "age must be an integer"
        }
    },
    },
    phone_number: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "phone_number cannot be null/ omitted"
        },
        notEmpty: {
          msg: "phone_number cannot be an emty string"
        },
        isInt: {
          msg: "phone_number must be an integer"
        }
    },
    }
  }, {
    hooks:{
      beforeCreate(instance){
        instance.password = hash(instance.password)
      }
    },

    sequelize,
    modelName: 'User',
  });
  return User;
};