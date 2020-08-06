import React, {Component} from 'react';

class Accordion extends Component{
    constructor(props){
        super(props);
        this.state ={
            isCollapsed: true
        }
        this.collapse = this.collapse.bind(this);
    }
    collapse(){
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
    }

    render(){
        const {heading, children} = this.props;
        const {isCollapsed} = this.state;

        return <div className="Accordion">
            <div className="Heading" onClick={this.collapse}>
                <h2>{heading}</h2>
            </div>
            {!isCollapsed && <div>{children}</div>/*Content only show if isCollapsed = false*/
            } 
        </div>
    }
}
export default Accordion;