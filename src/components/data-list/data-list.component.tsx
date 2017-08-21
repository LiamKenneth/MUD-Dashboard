import * as React from 'react';
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

class DataList extends React.Component<IPlayerListProps, any> {
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
      ]
    };
  }

  returnTableRow(player: IPlayer, index: number): JSX.Element {
    return (
      <tr>
        <td>{player.name}</td>
        <td>{player.race}</td>
        <td>{player.class}</td>
        <td>{player.level}</td>
        <td>{player.lastplayed}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h3>Payers</h3>
      <Table className="table table-striped">
      <thead>

        <tr>
          <td>Name</td>
          <td>Race</td>
          <td>Class</td>
          <td>Level</td>
          <td>Last Played</td>
        </tr>
        </thead>
        <tbody>
        {this.state.players.map((player: IPlayer, i: number) => { return this.returnTableRow(player, i); })}
        </tbody>
      </Table>
      </div>
    );
  }
}

export default DataList;
