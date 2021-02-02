import { MatchData } from '../MatchData';
import { Reporter, ConsoleReport } from './Reporter';
import { Analyzer, WinsAnalysis } from './Analyzer';

export class Summary {
	static winAnalysisAndConsole(team: string): Summary {
		return new Summary(new WinsAnalysis(team), new ConsoleReport());
	}
	constructor(public analyzer: Analyzer, public reporter: Reporter) {}

	buildAndReport = (matches: MatchData[]): void => {
		const report = this.analyzer.run(matches);
		this.reporter.print(report);
	};
}
