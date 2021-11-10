const resolvers = {
  Query: {
    people: async (_, __, { dataSources }) => {
      return dataSources.PeopleAPI.people();
    },
    getPerson: async (_, { name }, { dataSources }) => {
      return dataSources.PeopleAPI.getPerson({ name: name });
    },
    peoplePage: async (_, { page }, { dataSources }) => {
      return dataSources.PeopleAPI.peoplePage({ page: page });
    },
  },

};

module.exports = resolvers;