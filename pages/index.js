import React, { Component } from 'react'
import { action, computed, extendObservable } from 'mobx'
import { observer } from 'mobx-react'

import Header from './head'

class Colors {
  constructor(){
    extendObservable(this, {
      n: 0,
      variance: 0,
      container: computed(c=> {
          return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#2ad2c9',
            height: '90vh',
            fontSize: this.variance
          }
        }
      ),
      inc: action(a=> {
        this.n = this.n + 1
      }),
      zoom: action(z=> {
        this.variance = this.variance + .0254 * this.n / 1000
      }) 
    })
  }
}

const store = new Colors()

let interval

const Index = observer ( class App extends Component {
  componentDidMount(){
    interval = setInterval(i=> {
      this.execute()
    },1)
  }
  execute(){
    store.inc()
    store.zoom()
  }
  stop(){
    clearInterval(interval)
  }
  render(){
    return(
        
        <div
          onClick={stop=> this.stop()}
          style={store.container}
        >
        <Header />
                    
          {store.n}
          
        </div>

    )
  }
} ) 
export default Index