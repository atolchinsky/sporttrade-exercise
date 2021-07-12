import { Model } from 'objection'

export default class StatsModel extends Model {
  playerID: string
  yearID: number
  stint: number
  teamID: string
  lgID: string
  G: number
  AB: number
  R: number
  Hits: number
  Doubles: number
  Triples: number
  Homeruns: number
  RBI: number
  SB: number
  CS: number
  BB: number
  SO: number
  IBB: number
  HBP: number
  SH: number
  SF: number
  GIDP: number

  static tableName = 'stats'
}
