import { MatchData, Analyzer, OutputTarget } from './types'

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches)
    this.outputTarget.print(report)
  }
}
