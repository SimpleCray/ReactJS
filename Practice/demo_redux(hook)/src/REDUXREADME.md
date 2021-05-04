# Work with Redux through hooks

- useSelector()
- userDispatch()

1. Setup redux store
- Reducers & Root reducer
- Action creators
- Store

2. Setup redux provider
- Allow redux store to be accessible from anywhere of the app.

3. Connect to redux store from component
- Using two hooks

4. Folder structure
++actions
----HobbyActions.js //Declare action (receive input and return specific action)
++components
++++Home
------HobbyList.js //
------HobbyStyle.css //Style for HobbyList
++pages
----HomePage.js
++reducers
----hobbyReducer.js
----index.js
----user.js
index.js //Provider must be imported at top level to use redux on all page
store.js //Create store for reducer