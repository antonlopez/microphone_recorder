import React, {Component} from 'react';
import { ReactMic } from 'react-mic';
import './recordComment.css';
import mic from './Group.png';
import stop from './stopButton.png';





export class RecordComment extends Component {
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
        const displayButton = this.state.record;

        const AudioURL = this.state.AudioURL;

        console.log('AudioURL from render', AudioURL);

        let button = <StopButton  onClick={this.stopRecording} />;

        let startButton=  <button className="start" onClick={this.startRecording} type="button"> <img className="mic" src={mic}/> </button>;

        let AudioPlayer = null;

        let testButton = null;



        if (displayPlayer) {
            AudioPlayer =  <DisplayAudioPlayer displayPlayer={displayPlayer} AudioURL = {AudioURL} />;
        }

        if(displayButton){
            testButton = <StopButton  onClick={this.stopRecording} />;
        }else{

            testButton= <button className="start" onClick={this.startRecording} type="button"> <img className="mic" src={mic}/> </button>;
        }



        return (




            <div className="audio">
                <ReactMic
                    record={this.state.record}
                    className="sound-wave"
                    onStop={this.onStop}
                    strokeColor="#42adf4"
                    backgroundColor="#000000"


                />
                <div className="buttons-container">
                    {testButton}


                </div>

                <div>
                    {AudioPlayer}
                </div>




            </div>
        );
    }
}



function StopButton(props) {
    return (
        <button className="stop" onClick={props.onClick}>
            <img className="mic" src={stop}/>
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

               <video className="audioPlayer" controls name="media">
                  <source src= {AudioURL} type = "audio/webm" />
               </video>
        );
    }
    return null;
}


export default RecordComment;