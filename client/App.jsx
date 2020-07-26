import Coordinates from './Coordinates.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coords: []
        }
    }

    start() {
        navigator.geolocation.watchPosition(data => {
            // console.log(data.coords)
            // console.log(data.coords.latitude)
            var newCoords = [...this.state.coords];
            newCoords.push({
                latitude: data.coords.latitude,
                longitude: data.coords.longitude
            });
            console.log(newCoords);
            this.setState({coords: newCoords});
        }, (error) => console.log(error), 
        {
            enableHighAccuracy: true
        })
    }

    render() {
        return(
            <div>
                <button id="start" onClick={this.start.bind(this)}>Start Tracking</button>
                <button id="end">End Tracking</button>
                <Coordinates coords={this.state.coords}/>
            </div>
        )
    }
}

export default App;