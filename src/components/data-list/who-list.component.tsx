import * as React from 'react';
import ReactTable from 'react-table';
import { Col, Row, Table } from 'reactstrap';

interface IPlayerWho {
  name: string,
  level: number,
  race: string,
  class: string,
  lastplayed: string,
  location: string,
  idle: string,
  playingTime: string,
}

interface IPlayerWhoistProps {
  players: IPlayerWho[]
}

class WhoList extends React.Component<IPlayerWhoistProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      players: [],
    };
  }

  componentDidMount() {
    fetch(`http://www.archaicquest.com/dev/api/GameStats/GetWhoList`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
 
        var data = JSON.parse(json);

        this.setState({ players: data });
 
      })
      .catch((exception) => {
        console.log('Error fetching  data: ' + exception.message);
      });
  }

  render() {
    return (
      <ReactTable
        data={this.state.players}
        columns={[
          {
            Header: 'Who\'s Playing',
            columns: [
              {
                Header: 'Name',
                accessor: 'name',
              },
              {
                Header: 'Race',
                accessor: 'race',
              },
              {
                Header: 'Class',
                accessor: 'class',
              },
              {
                Header: 'Level',
                accessor: 'level',
              },
              {
                Header: 'Location',
                accessor: 'location',
              },
              {
                Header: 'Idle',
                accessor: 'idle',
              },
              {
                Header: 'Playing Time',
                accessor: 'playingTime',
              },
            ],
          },
        ]}
        style={{ height: '400px'}}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

export default WhoList;
