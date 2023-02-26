import * as express from 'express';
import * as CategoryController from '../../controllers/category.controller';

const router = express.Router();

const routes = '/category';

router.get(`${routes}/all`, CategoryController.get_all);
router.get(`${routes}/:id/info`, CategoryController.get_by_id);
router.put(`${routes}/:id`, CategoryController.update_counter);

module.exports = router;
