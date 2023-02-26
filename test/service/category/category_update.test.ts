import { CategoryUpdate } from '../../../src/services/category/category_update';
import { expect } from 'chai';

const category_update = new CategoryUpdate();

describe('category_update tests', () => {
	it('should update counter successfully', async () => {
		category_update.counter = 500;
		const result = await category_update.counter_by_id(1);
		expect(result.is_success).to.eq(true);
		expect(result.data.counter).to.eq(500);
	});

	it('should update counter unsuccessfully', async () => {
		category_update.counter = 0;
		// this id does not exist
		const result = await category_update.counter_by_id(0);
		expect(result.is_success).to.eq(false);
		expect(result.data).to.a('undefined');
	});

	it('should update counter unsuccessfully', async () => {
		//will not set counter
		const result = await category_update.counter_by_id(1);
		expect(result.is_success).to.eq(false);
		expect(result.data).to.a('undefined');
	});
});
