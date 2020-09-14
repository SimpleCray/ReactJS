import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/HobbyActions';
import HobbyList from '../components/Home/HobbyList';

HomePage.propTypes = {

};

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random()*9000);
}

function HomePage(props){
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);

    const dispatch = useDispatch();

    console.log(hobbyList)
    console.log(activeId)
    const handleAddHobbyClick = ()=>{
        const newId = randomNumber()
        //Random a hobby object: id + title
        const newHobby ={
            id: newId,
            title: `Hobby ${newId}`,
        }


        //Dispatch action to add a new state to redux store
        const action = addNewHobby(newHobby);
        dispatch(action);
    }

    const handleHobbyClick=(hobby)=>{
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return(
        <div className="home-page">
            <h1>Redux Hook</h1>
            <button onClick={handleAddHobbyClick}>Random hobby</button>
            <HobbyList 
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    )
}
export default HomePage;