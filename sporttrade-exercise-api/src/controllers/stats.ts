import { Context } from 'koa'
import StatsModel from '../models/stats'

export async function list(ctx: Context) {
  const { ...filters } = ctx.request.query

  try {
    const statsData = StatsModel.query()
      .where({ ...filters })
      .select('*')
      .limit(1000)

    const stats = await statsData

    ctx.body = stats
    ctx.status = 200
  } catch (err) {
    ctx.body = err
    ctx.status = 400
  }
}
