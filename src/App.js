import React, { Component} from 'react';
import { Cardlist } from './components/card-list/card-list'
import './App.css'
import {SearchBar} from './components/search-box/search'
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField:""
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(response =>this.setState({monsters:response}))
  }
  changeHandler=(e)=> {this.setState({searchField:e.target.value},()=>console.log(this.state))}
  render()
  {
    const {monsters,searchField}=this.state;
    const filtered=monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className="App">
        <h1>Robo Finder</h1>
        <SearchBar
        changeHandler={this.changeHandler}
        placeholder="Search...."
        />
        <Cardlist monster={filtered}/>
      </div>
    )
  }
}

export default App;
