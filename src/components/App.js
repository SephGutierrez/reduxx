import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import {startAction} from '../actions/startAction';
import {stopAction} from '../actions/stopAction';
import {Search, ApiList} from './ApiSearchList';



const mapStateToProps =  state => ({
  rotating: state.rotateReducer.rotating,
  api: state.apiListReducer.api,
  searchTerm: state.searchReducer.searchTerm
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
  onSearch: searchTerm => dispatch({type: 'SEARCH', searchTerm})
});

const applyFilter = searchTerm => api => api.title.toLowerCase().includes(searchTerm.toLowerCase());


function App( props) {
      
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome Redux Sample</h2>

        <img src={logo} className={"App-logo" + (props.rotating ? '' : 'App-logo-paused')} alt="logo"
        onClick={props.rotating ? props.stopAction: props.startAction} />

        <p>Prop state {props.rotating ? "rotating" : "paused"}</p>

       <Search value={props.searchTerm} onSearch={props.onSearch}>
        <p>SEARCH</p>
        </Search>

        <ApiList list = {props.api.filter(applyFilter(props.searchTerm))}></ApiList>
      </header>
    </div>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
