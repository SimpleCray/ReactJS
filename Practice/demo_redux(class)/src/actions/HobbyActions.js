// addNewHobby is action creator - it receive input and return action, if you dont create this, each time you dispatch action you must
//input full prop of action again
export const addNewHobby = (hobby) => {
  return {
    type: "ADD_HOBBY", //type of action, will map with specific case in HoobbyReducer later
    payload: hobby, //payload declares value of param
  };
};

export const setActiveHobby = (hobby) => {
  return {
    type: "SET_ACTIVE_HOBBY",
    payload: hobby,
  };
};
