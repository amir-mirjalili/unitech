/**
 * update category
 */
import { Category } from './category.abstract';

export class CategoryUpdate extends Category {
	/**
	 * @param id
	 * increase counter
	 * decrease counter
	 * @return result
	 */
	async counter_by_id(id: number): Promise<RestApi.ObjectResInterface> {
		try {
			if (!this._counter) return { is_success: false, msg: 'counter is required' };
			const result = await this.prisma.category.update({ where: { id: id }, data: { counter: this._counter } });
			if (result.counter !== this._counter || result.id !== id)
				return {
					is_success: false,
					msg: 'operation was failed'
				};
			return {
				is_success: true,
				msg: 'operation was successfully',
				data: result
			};
		} catch (e) {
			console.log(e);
			return {
				is_success: false
			};
		}
	}
}
