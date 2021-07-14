import * as dotenv from 'dotenv-safe'
dotenv.config({ allowEmptyValues: true })

import Koa from 'koa'
import routers from './routes'
import knexConfig from './knexfile'
import Knex from 'knex'
import { Model } from 'objection'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

// Initialize knex.
const knex = Knex({
  ...knexConfig,
})

// Bind all Models to a knex instance.
Model.knex(knex)

const app = new Koa()

const { PORT = 3001 } = process.env

app.use(cors())
app.use(bodyParser())
app.use(routers)
app.listen(PORT, () => {
  console.log('sporttrade-exercise-api listening at port %s', PORT)
})
