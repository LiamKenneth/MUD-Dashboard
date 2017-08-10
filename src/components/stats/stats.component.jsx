import React from 'react';

class Stats extends React.Component {


    showStatDifference(stat, prevStat) {

        const diff = stat - prevStat;

        if (diff > 0) {
            return "(+" + diff + ")";
        }
        else {
             return "(" + diff + ")";
        }

        return "(-" + diff + ")";
    }

    formatStat(stat, prevStat = false) {

        if (prevStat === false) {
            return <span>{stat}</span>
        }

        if (stat > prevStat) {
            return <span>{stat} {this.showStatDifference(stat, prevStat)} {prevStat}</span>
        }

        if (stat === prevStat) {
            return <span>{stat} {this.showStatDifference(stat, prevStat)}  {prevStat}</span>
        }

        if (stat < prevStat) {
            return <span>{stat} {this.showStatDifference(stat, prevStat)} {prevStat}</span>
        }

    }

    render() {
        return (
         <div>{this.props.message}  {this.formatStat(this.props.stat, this.props.prevStat)}</div>
        )
    }
}
export default Stats;
