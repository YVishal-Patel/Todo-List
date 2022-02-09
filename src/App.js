import React, { Component } from 'react'
import './App.css'
import Plans from './Component/Plans'

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            items:[],
            text:''
        }
    }
    handleClick = (e)=>{
        this.setState({text:e.target.value})
    }

    handleAdd = ()=>{
        if(this.state.items !== ''){
            const Items = [...this.state.items, this.state.text]
            this.setState({items:Items, text:""})
        }
    }

    handleDelete = (id)=>{
        console.log("Deleted", id);
        const OldItems = [...this.state.items]
        console.log("Old Items", OldItems);
        const items = OldItems.filter((elements,i)=>{
            return i!== id 
        })
        console.log("New Items", items);
        this.setState({items:items})
        }
        
    
  render() {
    return (
      <div className='container-fluid my-5'>
      <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg">
              <h2 className="text-center p-2">Todo List</h2>
              <div className="row">
                  <div className="col-9">
                      <input type="text" className='form-control' placeholder='Tell Me Your Plan' value={this.state.text} onChange={this.handleClick} />
                  </div>
                  <div className='col-2'>
                  <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd}> Submit</button>
                  </div>
                  <div className="container-fluid">
                      <ul className="list-unstyled row m-5" >
                      <h3>Today's Plan</h3>
                          {this.state.items.map((value,i) =>{
                              return <Plans key={i} id={i} value = {value} hndleDel ={this.handleDelete} />
                          })}
                      </ul>
                  </div>
              </div>
          </div>
      </div>

      </div>
    )
  } 
}
