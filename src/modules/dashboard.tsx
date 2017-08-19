import * as React from 'react';
import '../ui/styles.scss';
import { Container, Row, Col } from 'reactstrap';
import Wrapper from './../components/wrapper/wrapper.component';

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

class Dashboard extends React.Component<any, any> {
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
        };
    }

    public render() {
        return (
            <div>
                  <Wrapper />
            </div>
        );

    }

}

export default Dashboard;
