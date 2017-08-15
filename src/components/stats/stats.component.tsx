import * as React from 'react';

type statProps = {
    message: string,
    stat: number | string,
    prevStat: number
}

class Stats extends React.Component<any, any> {

    showStatDifference(stat: number, prevStat: number): string {

        const diff = stat - prevStat;

        if (diff > 0) {
            return "(+" + diff + ")";
        } else if (diff < 0) {
             return "(" + diff + ")";
        }

        return "(" + diff + ")";
    }

    statHtml(stat: number | string, prevStat: number): any {
         if (prevStat) {
            return <span>{stat} {this.showStatDifference(stat as number, prevStat)} {prevStat}</span>;
         }

         return <span>{stat}</span>;
    }

    formatStat(stat: number | string, prevStat: number): string {
        return this.statHtml(stat, prevStat);
    }

    render(): any {
        return (
         <div>{this.props.message}{this.formatStat(this.props.stat, this.props.prevStat)}</div>
        );
    }
}
export default Stats;
