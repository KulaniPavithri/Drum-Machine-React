import ReactDOM from 'react-dom';
import DrumMachine from './DrumMachine';
const App = () =>{
    return(
        <div>
            <DrumMachine />
        </div>
    );
}

ReactDOM.render(
    <App />, document.getElementById('root')
);