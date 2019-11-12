const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = graphql

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      msg: {
        type: GraphQLString,
        resolve() {
          return 'Greetings, from API'
        }
      }
    }
  })
})

module.exports = schema