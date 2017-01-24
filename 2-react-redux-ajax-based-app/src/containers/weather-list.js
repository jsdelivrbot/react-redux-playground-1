import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends Component {

    renderCity(cityData) {
        const name = cityData.city.name;

        const temperatures = cityData.list.map(weather => weather.main.temp - 273);
        const pressures = cityData.list.map(weather => weather.main.pressure * 0.75006375541921);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td><Chart data={temperatures} color="orange" units="°C" /></td>
                <td><Chart data={pressures} color="green" units="mmHg" /></td>
                <td><Chart data={humidities} color="black" units="%" /></td>
            </tr>
        );
    }

    render() {
        if (!this.props.weather) {
            return <div>No data, please add city!</div>;
        }

        return (
            <table className="table table-hower">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderCity)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);
