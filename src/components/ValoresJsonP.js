import React, { Component } from 'react'

class ValoresJsonP extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          data : []
        };
    }

    componentDidMount() {
        this.getValores();
    }

    getValores(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(x => {
                     this.setState({data: x})
        })
    }
    
    render() {
        
        //this.getValores();
        console.log(this.state.data);
        const datas = this.state.data.map((data, i) => {
            return (
                    <div>
                    User ID: {data.userId} 
  
                    ID: {data.id}
                    <p>Titulo: {data.title}<br/>
                    {data.body}</p>
                    </div>

            )
        });
        
        return (
                <div>
                {datas}
                </div>
        );
    }
}

export default ValoresJsonP;