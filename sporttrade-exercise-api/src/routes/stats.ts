import Router from '@koa/router'
import { Context } from 'koa'
import * as statsController from '../controllers/stats'

const router = new Router()

router.get('/', statsController.list)

export default router.routes()
