module.exports = {
  defaultModelOptions: {
    // add the timestamp attributes (updatedAt, createdAt)
    timestamps: true,
    // don't delete database entries but set the newly added attribute deletedAt
    // to the current date (when deletion was done). paranoid will only work if
    // timestamps are enabled
    paranoid: true,
  },
};