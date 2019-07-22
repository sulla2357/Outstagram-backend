require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000; //graphql서버에 사용할 port 번호.

const server = new GraphQLServer({ schema }); //schema.js에서 전해진 schema변수로 서버 변수 생성.

server.start({ port: PORT }, () =>
  console.log(`Server running on port ${PORT}`)
); //위에서 생성한 서버 변수에 포트 4000을 할당해서 시작.
