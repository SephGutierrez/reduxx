import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {startAction} from './actions/startAction';
import {stopAction} from './actions/stopAction';



const mapStateToProps =  state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction)

});


function App(props) {
      
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className={"App-logo" + (props.rotating ? '' : 'logo-paused')} alt="logo"
        onClick={props.rotating ? props.stopAction: props.startAction} />

        <p>Prop state {props.rotating ? "rotating" : "paused"}</p>

      </header>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
