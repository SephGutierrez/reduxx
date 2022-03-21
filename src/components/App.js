import logo from '../logo.svg';
import '../App.css';
// import { connect } from 'react-redux';
import {startAction} from '../actions/startAction';
import {stopAction} from '../actions/stopAction';
import {Search, ApiList} from './ApiSearchList';
import { useDispatch, useSelector } from 'react-redux';



// const mapStateToProps =  state => ({
//   rotating: state.rotateReducer.rotating,
//   api: state.apiListReducer.api,
//   searchTerm: state.searchReducer.searchTerm
// });

// const mapDispatchToProps = dispatch => ({
//   startAction: () => dispatch(startAction),
//   stopAction: () => dispatch(stopAction),
//   onSearch: searchTerm => dispatch({type: 'SEARCH', searchTerm})
// });

const applyFilter = searchTerm => api => api.title.toLowerCase().includes(searchTerm.toLowerCase());


function App( props) {
  const rotating = useSelector(state => state.rotateReducer.rotating);
  const api = useSelector(state => state.apiListReducer.api);
  const searchTerm = useSelector(state => state.searchReducer.searchTerm);
  const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Welcome Redux Sample</h2>

//         <img src={logo} className={"App-logo" + (rotating ? '' : 'App-logo-paused')} alt="logo"
//         onClick={ () => dispatch(rotating ? dispatch(stopAction): dispatch(startAction))
//   }
//   />

//         <p>Prop state {rotating ? "rotating" : "paused"}</p>

//        <Search value={searchTerm} onSearch={onSearch => searchTerm => dispatch({type: 'SEARCH', searchTerm})}>
//         <p>SEARCH</p>
//         </Search>

//         <ApiList list = {api.filter(applyFilter(props.searchTerm))}></ApiList>
//       </header>
//     </div>
//   );
// }


// // export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

return (
  <div className="App">
    <header className="App-header">

      <h1>React Redux Sample</h1>
      <img 
        src={logo} 
        className={"App-logo" + (rotating ? "" : "App-logo-paused")} 
        alt="logo" 
        onClick={
          () => dispatch(rotating ? dispatch(stopAction) : dispatch(startAction))
        }
      />
      <p>Prop state {rotating ? "rotating" : "paused"}</p>
      
      <Search value={searchTerm} onSearch={searchTerm => dispatch({type: 'SEARCH_SET', searchTerm})}>
        <p>Search</p>
      </Search>

      <ApiList list={api.filter(applyFilter(searchTerm))}></ApiList>
    </header>
  </div>
);
}

export default App;