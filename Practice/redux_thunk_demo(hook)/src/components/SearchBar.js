import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../style/SearchBar.css'
import { fetchUserAction } from '../action/fetchUser';

function SearchBar (props) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.fetchUser.loading)
  const [username, setUsername] = useState('')

  const _onChange = (event) => {
    const value = event.target.value;
    setUsername(value)
  }

  const _onSubmit = (event) => {
    event.preventDefault();
    const action = fetchUserAction(username)
    dispatch(action)
  }

    return (
      <div className="form-wrapper">
        <h1>Enter github username</h1>
        <form onSubmit={_onSubmit}>
          <input className="input" type="text" placeholder="User name" onChange={_onChange} disabled={loading} required />
          <input className="button" type="submit" value={loading ? "Searching..." : "Search"} disabled={loading} />
        </form>
      </div>
    )
}

export default SearchBar;