import React, {Component} from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import check from '../image/check.svg';
import uncheck from '../image/uncheck.svg'
class TodoItem extends Component{
    render(){
		const {item, onClick} = this.props;
		let url = uncheck;
		if(item.isComplete){
			url = check;
		}
        return(
            <div onClick={onClick} className={classNames('TodoItem',{
                'TodoItem-complete': item.isComplete
            })}>
				<img className='check' src={url}/>
                <p>{this.props.item.title}</p>
            </div>
        );
    }
}	
export default TodoItem;