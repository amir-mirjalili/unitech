import request from 'supertest';
import app from '../../../src/provider/app';
import { config } from 'dotenv';
import { expect } from 'chai';

config();
describe('category controller tests', () => {
	it('should get_all successfully', () => {
		return request(app)
			.get('/category/all')
			.then((response: any) => {
				expect(response.body.status).to.equal(200);
			});
	});

	it('should get category_by_id successfully', () => {
		return request(app)
			.get('/category/1/info')
			.then((response: any) => {
				expect(response.body.status).to.equal(200);
			});
	});

	it('should get category_by_id unsuccessfully', () => {
		//wrong id
		return request(app)
			.get('/category/0/info')
			.then((response: any) => {
				expect(response.body.status).to.equal(404);
			});
	});

	it('should update category successfully', () => {
		return request(app)
			.put('/category/1')
			.send({ counter: 6 })
			.then((response: any) => {
				expect(response.body.status).to.equal(200);
			});
	});

	it('should update category unsuccessfully', () => {
		//wrong id
		return request(app)
			.put('/category/0')
			.send({ counter: 4 })
			.then((response: any) => {
				expect(response.body.status).to.equal(404);
			});
	});

	it('should update category unsuccessfully', () => {
		//dont set counter
		return request(app)
			.put('/category/1')
			.then((response: any) => {
				expect(response.body.status).to.equal(412);
			});
	});
});
