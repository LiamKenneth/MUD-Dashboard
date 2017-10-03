import * as React from 'react';
import ReactTable from 'react-table';
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
        
      ],
    };
  }

  

    componentDidMount() {
    fetch(`http://localhost:53729/api/GameStats/GetErrors`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
 
        var data = JSON.parse(json);
     
        const self = this

 
          self.setState({ errors: data });
      
 
      })
      .catch((exception) => {
        console.log('Error fetching  data: ' + exception.message);
      });
  }

  render() {
    return (
      <ReactTable
        data={this.state.errors}
        columns={[{
                  Header: 'Errors',
                  columns: [
                    {
                      Header: 'Name',
                      accessor: 'name',
                    },
                    {
                      Header: 'Type',
                      accessor: 'type',
                    },
                    {
                      Header: 'Count',
                      accessor: 'count',
                    },
                  ],
                },
              ]}

        style={{  height: '400px' }}
        defaultPageSize={10}
        className="-striped -highlight"
        getTrProps={(state: any, rowInfo: any, column: any, instance: any) => ({
                  onClick: (e: any) => console.log(rowInfo.original.name),
                })}
      />
    );
  }
}

export default ErrorList;
