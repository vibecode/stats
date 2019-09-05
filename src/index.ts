import { CsvFilereader } from './CsvFileReader'
import { MatchResult } from './types'
import { MatchReader } from './MatchReader'

const reader = new CsvFilereader('football.csv')
const matchReader = new MatchReader(reader)

matchReader.load()

let manUnitedWins = 0

for (let match of matchReader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++
  }
}

console.log(`Man United won ${manUnitedWins} games`)
