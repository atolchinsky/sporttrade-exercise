import Knex, { DbRecord } from 'knex'
import StatsModel from '../../models/stats'

// TODO: Convert CSV to JSON programatically
import statsData from './data/BattingStats.json'

const statsTableName = 'stats'

export async function seed(knex: Knex) {
  await deleteSeeds(knex)
  await insertSeeds(knex)
}

const insertSeeds = async (knex: Knex) => {
  const statsSeeds: StatsModel[] = statsData as any[]

  await knex.batchInsert(statsTableName, statsSeeds, 100)
}

const deleteSeeds = async (knex: Knex) => {
  await knex(statsTableName).del()
}
