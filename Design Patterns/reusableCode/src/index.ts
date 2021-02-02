import { WinsAnalysis } from './interface/Analyzer';
import { MatchReader } from './interface/MatchReader';
import { ConsoleReport } from './interface/Reporter';
import { Summary } from './interface/Summary';

const sum = Summary.winAnalysisAndConsole('Chelsea');
const mr = MatchReader.fromCSV('football.csv');
mr.load();

const summary = new Summary(
	new WinsAnalysis('Man United'),
	new ConsoleReport(),
);

summary.buildAndReport(mr.matches);
sum.buildAndReport(mr.matches);
