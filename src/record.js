import React, {Component} from 'react';

import { ReactMic } from 'react-mic';

export class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            AudioURL: 'https://files.freemusicarchive.org/music%2Fno_curator%2FThe_Womb%2FBang_-_An_Introduction_to_The_Womb%2FThe_Womb_-_02_-_Sex_Club.mp3'
        }

        this.onStop = this.onStop.bind(this);

    }

    startRecording = () => {
        this.setState({
            record: true
        });
    }

    stopRecording = () => {
        this.setState({
            record: false
        });
    }

    onStop(recordedBlob) {

        console.log('recordedBlob is: ', recordedBlob);

        this.setState({AudioURL: recordedBlob.blobURL });

        console.log('The audioURL is:', this.state.AudioURL);


    }

    render() {
        return (
            <div>
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    strokeColor="#42adf4"
                    backgroundColor="#000000" />
                <div>
                    <button onClick={this.startRecording} type="button">Start</button>
                    <button onClick={this.stopRecording} type="button">Stop</button>

                </div>

            </div>
        );
    }
}


export default Record;