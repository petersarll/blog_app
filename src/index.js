const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    description: String
  }
`

const resolvers = {
  Query: {
      description: () => 'This is the API for the blog app'
  }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => console.log('Server is running on https://localhost:4000'))
