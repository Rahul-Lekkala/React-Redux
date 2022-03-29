/*
  - Create a components folder & add required components
  - Create a redux folder
  - Create actions where actionCreators are created & exported
  - Create reducer where dispatched actions are used to manage store
  - Create a store and use created reducer
  - In the component, create 2 functions mapStateToProps & mapDispatchToProps
    which maps redux store's state to props & use required actions to be dispatched
  - Connect state & dispatch to the component
  - In the top level, add Provider from react-redux to connect store to the components
*/


import './App.css';
import { Provider } from 'react-redux';
import store from "./redux/store"
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
      <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
