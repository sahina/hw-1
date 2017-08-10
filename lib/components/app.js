import React from 'react';


class App extends React.Component {
  state = {
    name: 'chuck'
  }

  asynFunc = () => {
    return Promise.resolve('Chuck Norris');
  }

  async componentDidMount() {
    this.setState({
      name: await this.asynFunc()
    });
  }

  render() {
    return (
      <h1>Hello {this.state.name}</h1>
    );
  }
}

export default App;
