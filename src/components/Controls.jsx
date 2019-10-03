import React from 'react';
import "../scss/controls.scss";

class Controls extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }

    render(){
        let {deleteItems, error, notExist, disabledButtons} = this.props;
        return(
            <section id="controls">
                <p>Click buttons to imitate actions:</p>
                <div className="btn-block">
                    <button onClick={() => deleteItems()} 
                        disabled={disabledButtons}
                        className={disabledButtons && "disabled-btn"}
                    >Delete Items
                    </button>

                    <button onClick={() => notExist()} 
                        disabled={disabledButtons}
                        className={disabledButtons && "disabled-btn"}
                    >Search by unexisting category
                    </button>

                    <button onClick={() => error()} 
                        disabled={disabledButtons}
                        className={disabledButtons && "disabled-btn"}
                    >Connection error
                    </button>
                </div>
            </section>
        )
    }
}
export default Controls;