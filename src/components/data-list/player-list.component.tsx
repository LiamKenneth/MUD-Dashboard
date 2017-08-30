import * as React from 'react';
import ReactTable from 'react-table';
import { Col, Row, Table } from 'reactstrap';

interface IPlayer {
  name: string,
  level: number,
  race: string,
  class: string,
  lastplayed: string,
}

interface IPlayerListProps {
  players: IPlayer[]
}

class PlayerList extends React.Component<IPlayerListProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      players: [
        {
          id: 1,
          name: 'malleus',
          level: 1,
          class: 'mage',
          race: 'Human',
          lastplayed: '2 hours ago',
        },
        {
          id: 2,
          name: 'Gandalf',
          level: 25,
          class: 'mage',
          race: 'Human',
          lastplayed: '1 week ago',
        },
        {
          id: 3,
          name: 'Vorn',
          level: 51,
          class: 'cleric',
          race: 'Human',
          lastplayed: '4 weeks ago',
        },
        {
          id: 4,
          name: 'Graxx',
          level: 51,
          race: 'Human',
          class: 'Warrior',
          lastplayed: '1 day ago',
        },
        {
          id: 5,
          name: 'Laiton',
          level: 51,
          class: 'Mage',
          race: 'Elf',
          lastplayed: '2 days ago',
        },
        {
          id: 6,
          name: 'Lunez',
          level: 51,
          class: 'Mage',
          race: 'Human',
          lastplayed: '5 hours ago',

        },

        {
          id: 7,
          name: 'Shawn',
          level: 51,
          class: 'Skald',
          race: 'Human',
          lastplayed: '3 hours ago',

        },

        {
          id: 8,
          name: 'Waaagh',
          level: 51,
          class: 'Dragonslayer',
          race: 'Bugbear',
          lastplayed: '3 hours ago',

        },

        {
          id: 9,
          name: 'Alleluia',
          level: 51,
          class: 'Druid',
          race: 'Areial',
          lastplayed: '3 hours ago',

        },

        {
          id: 10,
          name: 'Treluver',
          level: 51,
          class: 'Ninja',
          race: 'Elf',
          lastplayed: '3 hours ago',

        },
      ],
    };
  }

  render() {
    return (
      <ReactTable
        data={this.state.players}
        columns={[
          {
            Header: 'Players',
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
                Header: 'Last Played',
                accessor: 'lastplayed',
              },
            ],
          },

        ]}
        style={{
          height: '400px',
        }}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

export default PlayerList;
