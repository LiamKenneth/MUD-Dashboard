import * as React from 'react';
import ReactTable from 'react-table'
import { Col, Row, Table } from 'reactstrap';

interface IError {
  name: string,
  level: number,
  race: string,
  class: string,
  lastplayed: string,
  location: string,
  idle: string,
  playingTime: string,
}

interface IErrorListProps {
  errors: IError[]
}

class ErrorList extends React.Component<IErrorListProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      errors: [
        {
          name: 'loot',
          type: 'wrong command',
          count: 20,
        },
        {
          name: 'map',
          type: 'wrong command',
          count: 17,
        },
        {
          name: 'yes',
          type: 'wrong command',
          count: 12,
        },
        {
          name: 'go away village idiot',
          type: 'wrong command',
          count: 5,
        },
        {
          name: 'grab',
          type: 'wrong command',
          count: 2,
        },
      ],
    };
  }

  render() {
    return (
      <ReactTable
        data={this.state.errors}
        columns={[{
                  Header: "Errors",
                  columns: [
                    {
                      Header: "Name",
                      accessor: "name"
                    },
                    {
                      Header: "Type",
                      accessor: "type"
                    },
                    {
                      Header: "Count",
                      accessor: "count"
                    },
                  ]
                },
              ]}

        style={{  height: '400px' }}
        defaultPageSize={10}
        className="-striped -highlight"
      />
    );
  }
}

export default ErrorList;
