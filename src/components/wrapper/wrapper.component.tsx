import { forEachComment } from 'tslint/lib';
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
            stats : [],
            sidebarOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen,

        });
    }
    componentDidMount() {

        fetch(`http://localhost:53729/api/GameStats/NewPlayers`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                console.log(json);
                this.setState({stats: [...json]});

            })
            .catch((exception) => {
                console.log('Error fetching  data: ' + exception.message);
            });
    }
    public render(): any {

        return (
            <div className="wrapper">

                <Sidebar sidebarOpen={this.state.sidebarOpen} />

                <div className="main">
                    <Header handleClick={this.handleClick} />
                    <Row>

{ this.state.stats.length > 1 ? (
                          <Stats
                            message="Logins today:"
                            stat={this.state.stats[2].Now}
                            prevStat={this.state.stats[2].Before}
                            statClass="newWeek"
                          />
                        ) : 'Loading!'}

                        { this.state.stats.length > 1 ? (
                          <Stats
                            message="new players today:"
                            stat={this.state.stats[1].Now}
                            prevStat={this.state.stats[1].Before}
                            statClass="newToday"
                          /> ) : 'Loading!'}

                          { this.state.stats.length > 1 ? (
                          <Stats
                            message="average playTime:"
                            stat={this.state.stats[3].Now}
                            statClass="averagePlayTime"
                          /> ) : 'Loading!'}

                          { this.state.stats.length > 1 ? (
                        <Stats
                            message="longest PlayTime:"
                            stat={this.state.stats[4].Now}
                            statClass="longestPlayTime"
                        /> ) : 'Loading!'}

                        { this.state.stats.length > 1 ? (
                        <Stats
                            message="Player Deaths:"
                            stat={33}
                            statClass="shortestPlayTime"
                        />
                  ) : 'Loading!'}

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
