import { CsvFilereader } from './CsvFileReader'
import { MatchResult } from './types'
import { MatchReader } from './MatchReader'
import { ConsoleReport } from './reportTargets/consoleReport'
import { WinsAnalysis } from './WinsAnalayzer'
import { Summary } from './Summary'

const reader = new CsvFilereader('football.csv')
const matchReader = new MatchReader(reader)

matchReader.load()

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())

summary.buildAndPrintReport(matchReader.data)
