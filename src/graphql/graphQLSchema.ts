import { buildSchema } from 'graphql';

const graphQLSchema = buildSchema(`
       type Category {
            id: Int!
            category: String!
            counter: Int!
            latitude: Int
            longitude: Int
        }

        type RootQuery {
            hello: String
        }
        
        input CategoryUpdateInputData {
        id:Int!
        counter: Int!
        }

        type RootCategory {
            getAll: [Category]
            getById(id:Int):Category!
            updateCounter(categoryInput:CategoryUpdateInputData):Category!
        }

        schema {
             query: RootQuery
             mutation: RootCategory
            }
`);

export default graphQLSchema;
