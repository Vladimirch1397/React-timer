import React from "react";
import Numbers from "./Numbers";
import "./css/style.css";

export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hours: props.hours,
            minutes: props.minutes,
            seconds: props.seconds,
        };

        this.interval = 1000;

        let timestamp = this.timeToSeconds();

        this.startTimer(timestamp);
    }

    startTimer(timestamp) {
        let counter = timestamp;

        const timerId = setInterval(() => {
            counter--;

            let hours = this.converToStr(counter, (time) =>
                Math.floor(time / 60 / 60)
            );

            let minutes = this.converToStr(
                counter,
                (time) => Math.floor(time / 60) - hours * 60
            );

            let seconds = this.converToStr(counter, (time) => time % 60);

            this.setState({
                hours: hours,
                minutes: minutes,
                seconds: seconds,
            });

            if (counter === 0) {
                clearInterval(timerId);
            }
        }, this.interval);
    }

    converToStr(time, func) {
        let result = func(time);

        let isUnits = Math.floor(result / 10) === 0;

        if (isUnits) {
            result = "0" + result;
        }

        return String(result);
    }

    timeToSeconds() {
        let seconds = 0;
        seconds += +this.props.hours * 60 * 60;
        seconds += +this.props.minutes * 60;
        seconds += +this.props.seconds;

        return seconds;
    }

    render() {
        return (
            <div className="container">
                <Numbers time={this.state.hours} subtitle="Часы" />
                <Numbers time={this.state.minutes} subtitle="Минуты" />
                <Numbers time={this.state.seconds} subtitle="Секунды" />
            </div>
        );
    }
}
