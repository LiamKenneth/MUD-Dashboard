import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Stats from './../stats/stats.component';
import Header from './../header/header.component';
import Sidebar from './../sidebar/sidebar.component';

interface Icount {
    now: number,
    before: number
}

interface IstatProps {
    newPlayers: {
        month: Icount,
        week: Icount,
        day: Icount,
        averagePlayTime: string,
        longestPlayTime: string,
        shortestPlayTime: string,
    };
}

class Wrapper extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            newPlayers: {
                month: {
                    now: 45,
                    before: 30,
                },
                week: {
                    now: 22,
                    before: 15,
                },
                day: {
                    now: 5,
                    before: 12,
                },
            },
            averagePlayTime: '45 minutes',
            longestPlayTime: '2 hours',
            shortestPlayTime: '1 minute',
            sidebarOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen,

        });
    }

    public render(): any {
        return (
            <div className="wrapper">
                <Sidebar sidebarOpen={this.state.sidebarOpen} />
                <Header  handleClick={this.handleClick}  />
                <Row>
                    <Stats
                        message="new players this month:"
                        stat={this.state.newPlayers.month.now}
                        prevStat={this.state.newPlayers.month.before}
                    />

                    <Stats
                        message="new players this week:"
                        stat={this.state.newPlayers.week.now}
                        prevStat={this.state.newPlayers.week.before}
                    />

                    <Stats
                        message="new players today:"
                        stat={this.state.newPlayers.day.now}
                        prevStat={this.state.newPlayers.day.before}
                    />

                    <Stats
                        message="average playTime:"
                        stat={this.state.averagePlayTime}
                    />

                    <Stats
                        message="longest PlayTime:"
                        stat={this.state.longestPlayTime}
                    />

                    <Stats
                        message="shortest PlayTime:"
                        stat={this.state.shortestPlayTime}
                    />
                </Row>
            </div>
        );
    }
}
export default Wrapper;
