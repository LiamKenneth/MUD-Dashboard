import React from 'react';
import Stats from './../components/stats/stats.component';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newPlayers: {
                month: {
                    thisMonth: 45,
                    lastMonth: 30
                },
                week: {
                    thisWeek: 22,
                    lastWeek: 15
                },
                day: {
                    thisday: 5,
                    yesterday: 12
                }
            },
            averagePlayTime: "45 minutes",
            longestPlayTime: "2 hours",
            shortestPlayTime: "1 minute",
        }
    }


    render() {
        return (
            <div>
                <Stats 
                message="new players this month:"
                stat={this.state.newPlayers.month.thisMonth} 
                prevStat={this.state.newPlayers.month.lastMonth} />

                <Stats 
                message="new players this week:"
                stat={this.state.newPlayers.week.thisWeek} 
                prevStat={this.state.newPlayers.week.lastWeek} />

                <Stats 
                message="new players this today:"
                stat={this.state.newPlayers.day.thisday} 
                prevStat={this.state.newPlayers.day.thisday}  />

                <Stats 
                message="average playTime:"
                stat={this.state.averagePlayTime}  />

                <Stats 
                message="longest PlayTime:"
                stat={this.state.longestPlayTime} />

                <Stats 
                message="shortest PlayTime:"
                stat={this.state.shortestPlayTime} />
                
            </div>
        )

    }



}

export default Dashboard;
