import React from 'react';
import './App.css';
import PageFilter from './component/pages/filter/index.jsx';
import filterConfig from './filterConfig'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() { }

  // 调用筛选子组件
  onChildRef = (self, type) => {
    this[type] = self;
  }


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
      </div>
    );
  }

}

export default App;
