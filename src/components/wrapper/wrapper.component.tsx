import * as React from 'react';
import { Container, Row, Col, Card, CardBlock, CardHeader } from 'reactstrap';
import Signups from './../Charts/signups-component';
import MobKills from './../Charts/mobkills-component';
import Classes from './../Charts/classes-component';
import Gender from './../Charts/gender-component';
import Race from './../Charts/race-component';
import Stats from './../stats/stats.component';
import Header from './../header/header.component';
import Sidebar from './../sidebar/sidebar.component';
import PlayerList from './../data-list/player-list.component';
import WhoList from './../data-list/who-list.component';
import ErrorList from './../data-list/error-list.component';
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
          
                <div className="main">
                <Header handleClick={this.handleClick} />
                <Row>

                    <Stats
                        message="Logins today:"
                        stat={this.state.newPlayers.week.now}
                        prevStat={this.state.newPlayers.week.before}
                        statClass="newWeek"
                    />

                    <Stats
                        message="new players today:"
                        stat={this.state.newPlayers.day.now}
                        prevStat={this.state.newPlayers.day.before}
                        statClass="newToday"
                    />

                    <Stats
                        message="average playTime:"
                        stat={this.state.averagePlayTime}
                        statClass="averagePlayTime"
                    />

                    <Stats
                        message="longest PlayTime:"
                        stat={this.state.longestPlayTime}
                        statClass="longestPlayTime"
                    />

                    <Stats
                        message="Player Deaths:"
                        stat={33}
                        statClass="shortestPlayTime"
                    />
                </Row>
                <Row className="top-buffer">
              
                    <Col sm="6">
                         
                       <Signups />
               
                    </Col>
                    <Col sm="3">
              
                         <Classes />
                       
                    </Col>
                    <Col sm="3">
              
                         <Gender />
                       
                    </Col>
                </Row>
                <Row className="top-buffer">
                    <Col sm="6">
                        <MobKills />
                    </Col>
                    <Col sm="6" >
                        <Race />
                    </Col>
                </Row>
                <Row className="top-buffer">
                    <Col sm="6">
                    <WhoList players={[]} />
                    </Col>
                    <Col sm="6">
                        <ErrorList errors={[]} />
                    </Col>
                </Row>
                <Row className="top-buffer">
                    <Col sm="12">
                    <PlayerList players={[]} />
                    </Col>
                </Row>
            </div>
            </div>
        );
    }
}
export default Wrapper;
