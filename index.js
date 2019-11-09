const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const gql = require('graphql-tag')
// const { buildASTSchema } = require('graphql')
const uuid = require('uuid/v4')
const {schema} = require('./schema')

const app = express()
app.use(cors())

app.use('/graphql', graphqlHTTP({ schema, rootValue }))

const port = process.env.PORT || 4000
app.listen(port)
console.log(`Running a GraphQL API server at localhost:${port}/graphql`)