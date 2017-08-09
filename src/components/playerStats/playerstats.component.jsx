import React from 'react';

class Playerstats extends React.Component {

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
                <p>new players this month: {this.state.newPlayers.month.thisMonth}</p>
                <p>new players this week: {this.state.newPlayers.week.thisWeek}</p>
                <p>new players this today: {this.state.newPlayers.day.thisday}</p>
                <p>average playTime: {this.state.averagePlayTime}</p>
                <p>longest PlayTime: {this.state.longestPlayTime}</p>
                <p>shortest PlayTime: {this.state.shortestPlayTime}</p>
        </div> 
        );
    }
}
 export default Playerstats;