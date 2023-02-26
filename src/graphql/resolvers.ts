import { CategoryInfo } from '../services/category/category_info';
import { CategoryUpdate } from '../services/category/category_update';

export const getAll = async () => {
	const categories = await new CategoryInfo().get_all();
	return categories.data;
};

export const getById = async (args: any) => {
	const category = await new CategoryInfo().get_by_id(args.id);
	return category.data;
};

export const updateCounter = async ({ categoryInput }: any) => {
	const category = new CategoryUpdate();
	category.counter = categoryInput.counter;
	const result = await category.counter_by_id(categoryInput.id);
	return result.data;
};
