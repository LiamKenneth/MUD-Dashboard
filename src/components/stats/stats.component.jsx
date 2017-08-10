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

    statHtml(stat, prevStat) {
        
         if (prevStat) {
            return <span>{stat} {this.showStatDifference(stat, prevStat)} {prevStat}</span>;
         }  
         
         return <span>{stat}</span>;
    }

    formatStat(stat, prevStat = false) {

        if (prevStat === false) {
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
