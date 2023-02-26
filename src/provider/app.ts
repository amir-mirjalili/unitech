import express, { Response, Request } from 'express';
import { Cors } from './restapi/cors';
import { ApiRes } from './restapi/status';
import { graphqlHTTP } from 'express-graphql';
import graphQLSchema from '../graphql/graphQLSchema';
import * as graphQlResolver from '../graphql/resolvers';

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema: graphQLSchema,
		rootValue: graphQlResolver,
		graphiql: true,
		customFormatErrorFn(err: any) {
			if (!err.originalError) {
				return err;
			}
			const data = err.originalError.data;
			const message = err.message || 'An error occurred.';
			const code = err.originalError.code || 500;
			return { message: message, status: code, data: data };
		}
	})
);

// res api routes
const categoryRouter = require('../routers/category/category.router');
//App usages
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Cors
app.use(Cors);

// rest api routes usages
app.use(categoryRouter);

app.get('/', (req, res) => {
	ApiRes(res, <RestApi.ResInterface>{
		status: 200,
		msg: 'unitech service',
		data: undefined
	});
});
// Error Pages
app.use((req: Request, res: Response) => {
	ApiRes(res, <RestApi.ResInterface>{
		status: 404,
		msg: undefined,
		data: undefined
	});
});

export default app;
