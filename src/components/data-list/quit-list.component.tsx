import * as React from 'react';
import ReactTable from 'react-table';
import { Col, Row, Table } from 'reactstrap';

interface IQuit{
  name: string,
  roomName: string,
  roomId: number,
}

interface IQuitListProps {
  quit: IQuit[]
}

class QuitList extends React.Component<IQuitListProps, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      quit: [
        
      ],
    };
  }

  

    componentDidMount() {
    fetch(`http://www.archaicquest.com/dev/api/GameStats/ReturnQuitLocation`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
 
        var data = JSON.parse(json);
     
        const self = this

 
          self.setState({ quit: data });
      
 
      })
      .catch((exception) => {
        console.log('Error fetching  data: ' + exception.message);
      });
  }

  render() {
    return (
      <ReactTable
        data={this.state.quit}
        columns={[{
                  Header: 'Quit Location',
                  columns: [
                    {
                      Header: 'Name',
                      accessor: 'name',
                    },
                    {
                      Header: 'Location',
                      accessor: 'roomName',
                    },
                    {
                      Header: 'Location Id',
                      accessor: 'roomId',
                    }
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

export default QuitList;
