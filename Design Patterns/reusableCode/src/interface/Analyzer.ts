import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export class AverageGoalsAnalysis implements Analyzer {
	constructor(public teamName: string) {}
	run(matches: MatchData[]): string {
		const goals = matches.reduce((match) => {
			return match;
		}, 0);

		return `${this.teamName} has scored ${goals} goals.`;
	}
}

export class WinsAnalysis implements Analyzer {
	constructor(public teamName: string) {}

	run(matches: MatchData[]): string {
		const wins = matches.filter(
			(game) =>
				(game[1] === this.teamName && game[5] === MatchResult.HomeWin) ||
				(game[2] === this.teamName && game[5] === MatchResult.AwayWin),
		);
		return `${this.teamName} has won ${wins.length} games.`;
	}
}
