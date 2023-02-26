import { Response, Request } from 'express';
import { CategoryInfo } from '../services/category/category_info';
import { ApiRes } from '../provider/restapi/status';
import Validator from 'validatorjs';
import { CategoryUpdate } from '../services/category/category_update';

/**
 *get all categories
 * @param req
 * @param res
 */
export const get_all = async (req: Request, res: Response) => {
	//get all categories
	const categories = await new CategoryInfo().get_all();
	return ApiRes(res, { status: categories.is_success ? 200 : 500, data: categories.data });
};

/**
 * get category by id
 * @param req
 * @param res
 */
export const get_by_id = async (req: Request, res: Response) => {
	//get category by id
	const category = await new CategoryInfo().get_by_id(+req.params['id']);
	return ApiRes(res, { status: category.is_success ? 200 : 404, data: category.data });
};

/**
 * increase or decrease counter of category
 * @param req
 * @param res
 */
export const update_counter = async (req: Request, res: Response) => {
	const validate = new Validator(
		{
			counter: req.body.counter
		},
		{
			counter: ['required', 'numeric']
		}
	);

	if (validate.fails()) {
		return ApiRes(res, {
			status: 412,
			msg: 'validation error',
			data: validate.errors.all()
		});
	}
	//create new instance of class
	const category = new CategoryUpdate();
	//set value for counter from body
	category.counter = req.body.counter;
	//update counter based on request
	const result = await category.counter_by_id(+req.params['id']);
	return ApiRes(res, {
		status: result.is_success ? 200 : 404,
		data: result.data,
		msg: result.msg
	});
};
