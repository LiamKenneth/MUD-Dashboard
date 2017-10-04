import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

interface IstatProps {
    message: string;
    stat: number | string;
    prevStat: number;
    statClass: string,
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
            return (
                <span className="stats-data">{stat}
                    <sup>{this.showStatDifference(stat as number, prevStat)}</sup>
                </span>);
        }

        return <span className="stats-data">{stat}</span>;
    }

    public formatStat(stat: number | string, prevStat: number): string {
        return this.statHtml(stat, prevStat);
    }

    public render(): any {

        const classes = `stats ${this.props.statClass}`;
        return (
            <Col className={classes}>
                {this.formatStat(this.props.stat, this.props.prevStat)}
                <div>{this.props.message} </div>
            </Col>
        );
    }
}
export default Stats;
