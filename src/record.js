import React, {Component} from 'react';
import { ReactMic } from 'react-mic';




export class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            record: false,
            displayPlayer: false,
            AudioURL: ""
        }



        this.onStop = this.onStop.bind(this);



    }

    startRecording = () => {
        this.setState({
            record: true
        });

        this.setState({displayPlayer: false})




    }

    stopRecording = () => {
        this.setState({
            record: false
        });


    }

    onStop(recordedBlob) {

        this.setState({displayPlayer: true})

        this.setState({AudioURL: recordedBlob.blobURL });


    }





    render() {


        const displayPlayer = this.state.displayPlayer;

        const AudioURL = this.state.AudioURL;

        console.log('AudioURL from render', AudioURL);

        let button = <StopButton onClick={this.stopRecording} />;

        let AudioPlayer = null;

        if (displayPlayer) {
            AudioPlayer =  <DisplayAudioPlayer displayPlayer={displayPlayer} AudioURL = {AudioURL} />;
        }




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

                    {button}

                 <div>
                     {AudioPlayer}
                 </div>
                </div>



            </div>
        );
    }
}



function StopButton(props) {
    return (
        <button onClick={props.onClick}>
            Stop
        </button>
    );
}





function AudioPlayerComment(props) {


    return (

        <video controls name="media">
            <source src= '' type = "audio/webm" />

        </video>



    );



}

function DisplayAudioPlayer(props) {
    const displayPlayer = props.displayPlayer;

    const AudioURL = props.AudioURL;


    if (displayPlayer) {

        return (

               <video controls name="media">
                  <source src= {AudioURL} type = "audio/webm" />
               </video>
        );
    }
    return null;
}


export default Record;