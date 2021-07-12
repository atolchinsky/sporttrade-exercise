import Router from '@koa/router'
import { Context } from 'koa'
import stats from './stats'

const router = new Router()

router.use('/stats', stats)

router.get('/', (ctx: Context) => {
  ctx.body = 'Server works!'
})

export default router.routes()
