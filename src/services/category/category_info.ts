import { Category } from './category.abstract';

/**
 * get details about category entity
 */
export class CategoryInfo extends Category {
	/**
	 * return all categories
	 */
	async get_all(): Promise<RestApi.ObjectResInterface> {
		try {
			const categories = await this.prisma.category.findMany();
			return {
				is_success: true,
				data: categories
			};
		} catch (e) {
			console.log(e);
			return {
				is_success: false
			};
		}
	}

	/**
	 * get category by id
	 * @param id
	 * @return one category detail based on unique id
	 */
	async get_by_id(id: number): Promise<RestApi.ObjectResInterface> {
		try {
			const category = await this.prisma.category.findUnique({ where: { id: id } });
			return {
				is_success: !!category,
				data: category
			};
		} catch (e) {
			console.log(e);
			return {
				is_success: false
			};
		}
	}
}
