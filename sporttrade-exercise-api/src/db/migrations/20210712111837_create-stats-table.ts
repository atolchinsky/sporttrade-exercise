import * as Knex from 'knex'

const statsTableName = 'stats'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(statsTableName, (table) => {
    table.increments('id')
    table.string('playerID').notNullable()
    table.integer('yearID').notNullable()
    table.integer('stint').notNullable()
    table.string('teamID').notNullable()
    table.string('lgID').notNullable()
    table.integer('G').nullable()
    table.integer('AB').nullable()
    table.integer('R').nullable()
    table.integer('Hits').nullable()
    table.integer('Double').nullable()
    table.integer('Triple').nullable()
    table.integer('HR').nullable()
    table.integer('RBI').nullable()
    table.integer('SB').nullable()
    table.integer('CS').nullable()
    table.integer('BB').nullable()
    table.integer('SO').nullable()
    table.integer('IBB').nullable()
    table.integer('HBP').nullable()
    table.integer('SH').nullable()
    table.integer('SF').nullable()
    table.integer('GIDP').nullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(statsTableName)
}
