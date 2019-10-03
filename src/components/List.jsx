import React from 'react';
import EmptyState from './EmptyState';
import "../scss/list.scss";
import CircularProgress from '@material-ui/core/CircularProgress';

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            toDos: null,
        };
      }

    getItems = () => {
        this.setState({loader: true})
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => this.setState({
                loader: false,
                toDos: json
            }));
        this.props.update(true)
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.deleteItems || nextProps.error || nextProps.itemsNotExist){
            this.setState({toDos: null})
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.toDos && !this.state.toDos){
            this.props.update(false);
        }
    }

    render(){
        let {loader, toDos} = this.state

        if(loader){
           return <CircularProgress size={60} style={{marginTop: "25%"}}/>
        }
        
        return(
            <section id="list">
               <h1>List</h1>
                {toDos === null && <EmptyState add={this.getItems} type={this.props}/>}
                {toDos && 
                <ul className="list">
                    {toDos.map((item, index) => {
                        return <li className={item.completed ? "list-item completed" : "list-item"} key={index}>{item.title}</li>
                    })}
                </ul>
                }
            </section>
        )
    }
}
export default List;