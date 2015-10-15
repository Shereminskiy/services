var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    //uuid: {
    //  type: 'integer',
    //  primaryKey: true,
    //  autoIncrement: true
    //},
    username  : { type: 'string', unique: true },
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    role: {
      type: 'string',
      enum: ['admin', 'user'],
      defaultsTo: 'user'
    }
  }
};

module.exports = User;
