import * as React from 'react';

type statProps = {
    message: string,
    stat: number | string,
    prevStat: number
}

class Stats extends React.Component<any, any> {

    showStatDifference(stat: number, prevStat: number) {

        const diff = stat - prevStat;

        if (diff > 0) {
            return "(+" + diff + ")";
        }
        else if (diff < 0) {
             return "(" + diff + ")";
        }

        return "(" + diff + ")";
    }

    statHtml(stat: number | string, prevStat: number) {
        
         if (prevStat) {
            return <span>{stat} {this.showStatDifference(stat as number, prevStat)} {prevStat}</span>;
         }  
         
         return <span>{stat}</span>;
    }

    formatStat(stat: number | string, prevStat: number) {

        if (prevStat === undefined) {
           return this.statHtml(stat, prevStat);
        }

        if (stat > prevStat) {
            return this.statHtml(stat, prevStat);
        }

        if (stat === prevStat) {
            return this.statHtml(stat, prevStat);
        }

        if (stat < prevStat) {
            return this.statHtml(stat, prevStat);
        }

    }

    render() {
        return (
         <div>{this.props.message}  {this.formatStat(this.props.stat, this.props.prevStat)}</div>
        )
    }
}
export default Stats;
