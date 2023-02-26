import { CategoryInfo } from '../../../src/services/category/category_info';
import { expect } from 'chai';
const categoryInfo = new CategoryInfo();

describe('category_info tests', () => {
	it('should get all categories successFully', async () => {
		const categories = await categoryInfo.get_all();
		expect(categories.is_success).to.eq(true);
		expect(categories.data).to.an('array');
	});

	it('should get category by id successfully', async () => {
		const category = await categoryInfo.get_by_id(1);
		expect(category.is_success).to.eq(true);
		expect(category.data).to.a('object');
	});

	it('should get category by id unsuccessfully', async () => {
		//id 0 does not exist
		const category = await categoryInfo.get_by_id(0);
		expect(category.is_success).to.eq(false);
		expect(category.data).to.a('null');
	});
});
