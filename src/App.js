import React from 'react';
import PageFilter from './component/pages/filter/index.jsx';
import PageTable from './component/pages/table/index.jsx';
import filterConfig from './filterConfig'
import tableConfig from './tableConfig'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { }

  refresh = (data = {}) => {
    console.log('data>>>>>', data)
  }

  render() {
    return (
      <div className="App">
        <PageFilter
          onRefresh={this.refresh.bind(this)}
          filterConfig={filterConfig}
        />
        <PageTable
          onRefresh={this.refresh.bind(this)}
          tableConfig={tableConfig}
        />
      </div>
    );
  }

}

export default App;
