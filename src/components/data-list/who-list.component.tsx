import * as React from 'react';
import ReactTable from 'react-table'
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
        players: [
        {
          id: 1,
          name: 'malleus',
          level: 1,
          class: 'mage',
          race: 'Human',
          location: "Market Square",
          idle: "5 minutes",
          playingTime: "3 hours",
        },
        {
          id: 2,
          name: 'Gandalf',
          level: 25,
          class: 'mage',
          race: 'Human',
          location: "Market Square",
          idle: "15 minutes",
          playingTime: "2 hours"
        },
        {
          id: 3,
          name: 'Vorn',
          level: 51,
          class: 'cleric',
          race: 'Human',
          location: "A house",
          idle: "false",
          playingTime: "10 minutes"
        },
        {
          id: 4,
          name: 'Graxx',
          level: 51,
          race: 'Human',
          class: 'Warrior',
          location: "Anker Manor",
          idle: "false",
          playingTime: "2.5 hours"
        },
        {
          id: 5,
          name: 'Laiton',
          level: 51,
          class: 'Mage',
          race: 'Elf',
          location: "Hedge Maze",
          idle: "false",
          playingTime: "32 minutes"
        },
        {
          id: 6,
          name: 'Lunez',
          level: 51,
          class: 'Mage',
          race: 'Human',
          location: "Path through Anker",
          idle: "12 minutes",
          playingTime: "1 hour"
    
        },
    
        {
          id: 7,
          name: 'Shawn',
          level: 51,
          class: 'Skald',
          race: 'Human',
          location: "Lost in the woods",
          idle: "2 minutes",
          playingTime: "1 minute"
    
        },
    
        {
          id: 8,
          name: 'Waaagh',
          level: 51,
          class: 'Dragonslayer',
          race: 'Bugbear',
          location: "Lost in the woods",
          idle: "false",
          playingTime: "4 hours"
    
        },
    
        {
          id: 9,
          name: 'Alleluia',
          level: 51,
          class: 'Druid',
          race: 'Areial',
          location: "Mage Guild Entrance",
          idle: "false",
          playingTime: "6 hours"
    
        },
    
        {
          id: 10,
          name: 'Treluver',
          level: 51,
          class: 'Ninja',
          race: 'Elf',
          location: "Bar",
          idle: "false",
          playingTime: "28 minutes"
    
        },
      ]
    };
  }

 
  render() {
    return (
      <ReactTable
      data={this.state.players}
      columns={[
        {
          Header: "Who's Playing",
          columns: [
            {
              Header: "Name",
              accessor: "name"
            },
            {
              Header: "Race",
              accessor: "race"
            },
            {
              Header: "Class",
              accessor: "class"
            },
            {
              Header: "Level",
              accessor: "level"
            },
            {
              Header: "Location",
              accessor: "location"
            },
            {
              Header: "Idle",
              accessor: "idle"
            },
            {
              Header: "Playing Time",
              accessor: "playingTime"
            },
          ]
        },
        
        
      ]}
      style={{
            height: "400px" 
          }}
      defaultPageSize={10}
      className="-striped -highlight"
    /> 
    )
  }
}

export default WhoList;
