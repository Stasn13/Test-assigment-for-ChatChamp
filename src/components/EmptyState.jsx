import React from 'react';
import "../scss/emptystate.scss";
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import CloudOffTwoToneIcon from '@material-ui/icons/CloudOffTwoTone';
import NoteAddTwoToneIcon from '@material-ui/icons/NoteAddTwoTone';
import FindInPageTwoToneIcon from '@material-ui/icons/FindInPageTwoTone';

class EmptyState extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }

    render(){
        let {add, type} = this.props;
        const isNoItems = !type.deleteItems && !type.error && !type.itemsNotExist;

        return(
            <div className="empty-state">
                {isNoItems &&
                <div>
                    <NoteAddTwoToneIcon />
                    <p>You have no items, let's add some new toDos:</p>
                    <button onClick={add}>Add Items</button>
                </div>
                }
                {type.deleteItems &&
                <div>
                    <CancelTwoToneIcon/>
                    <p>You have deleted items, let's create some new toDos:</p>
                    <button onClick={add}>Add toDos</button>
                </div>
                }
                {type.error && 
                <div>
                    <CloudOffTwoToneIcon/>
                    <p>Looks like you have connection problems</p>
                    <button onClick={add}>Try again</button>
                </div>
                } 
                {type.itemsNotExist &&
                <div>
                    <FindInPageTwoToneIcon/>
                    <p>Nothing found</p>
                    <button onClick={add}>Search by existing category</button>
                </div>
                }
            </div>
        )
    }
}
export default EmptyState;