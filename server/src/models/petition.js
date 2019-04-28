const petition = (sequelize, DataTypes) => {
  const Petition = sequelize.define('petition', {
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please add a title to your petition'
        }
      }

    },
    text: {
      type: DataTypes.STRING,
      validate: { 
        notEmpty: {
          args: true,
          msg: 'Please add content to your petition'
        } 
      },
    },
    
  });

  Petition.associate = models => {
    Petition.belongsTo(models.User);
  };

  return Petition;
};

export default petition;