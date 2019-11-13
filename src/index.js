"use strict";
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean
} = require("graphql");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { getVideoById } = require("./data");

const PORT = process.env.PORT || 3000;
const server = express();

const videoType = new GraphQLObjectType({
  name: "Video",
  description: "A video",
  fields: {
    id: {
      type: GraphQLID,
      description: "The id of the video"
    },
    title: {
      type: GraphQLString,
      description: "The title of the video"
    },
    duration: {
      type: GraphQLInt,
      description: "The duration of the video (in seconds)."
    },
    watched: {
      type: GraphQLBoolean,
      description: "A boolean about whether the video has been watched"
    }
  }
});

const queryType = new GraphQLObjectType({
  name: "QueryType",
  description: "The root query type.",
  fields: {
    video: {
      type: videoType,
      args: {
        id: {
          type: GraphQLID,
          description: "The id of the video"
        }
      },
      resolve: (_, args) => {
        return getVideoById(args.id);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: queryType
});

server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
