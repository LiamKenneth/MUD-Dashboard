import * as React from 'react';

interface IstatProps {
    message: string;
    stat: number | string;
    prevStat: number;
}

class Stats extends React.Component<any, any> {

    public showStatDifference(stat: number, prevStat: number): string {

        const diff = stat - prevStat;

        if (diff > 0) {
            return `(+${diff})`;
        }

        return `(${diff})`;
    }

    public statHtml(stat: number | string, prevStat: number): any {
         if (prevStat) {
            return <span>{stat} {this.showStatDifference(stat as number, prevStat)} {prevStat}</span>;
         }

         return <span>{stat}</span>;
    }

    public formatStat(stat: number | string, prevStat: number): string {
        return this.statHtml(stat, prevStat);
    }

    public render(): any {
        return (
         <div className="col">{this.props.message}{this.formatStat(this.props.stat, this.props.prevStat)}</div>
        );
    }
}
export default Stats;
