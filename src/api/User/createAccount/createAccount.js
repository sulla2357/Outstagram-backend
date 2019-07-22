export default {
  Mutation: {
    createAccount: async (_, args) => {
      const { name, email } = args;
      const user = await prisma.createUser({ name, email });
      return user;
    }
  }
};
