import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql")); //api 디렉토리 하위에 있는 모든 qraphql 파일을 받아 모든 type을 정의해줄 변수
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js")); //api 디렉토리 하위에 있는 모든 resolver 파일을 받은 변수

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
}); //위의 allTypes와 allResolvers를 담은 schema 변수

export default schema; //위 schema 변수를 export
