import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Record from './record';
import Audio from 'translation-audio-player';



var file = [];

class App extends Component {




    render() {

        file[0] = {
            "name": this.props.name,
            "src": "https://files.freemusicarchive.org/music%2Fno_curator%2FThe_Womb%2FBang_-_An_Introduction_to_The_Womb%2FThe_Womb_-_02_-_Sex_Club.mp3",
            //"src": this.props.AudioURL,

            "img": "http://oss.tan8.com/yuepuku/100/50357/50357_prev.jpg?v=1487820191"
        }




        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {console.log("result:", this.props.AudioURL)}
                <Audio
                    width={800}
                    height={100}
                    fullPlayer={false}
                    comment={false}
                    recordButton={() => {
                        alert('Hello Juan');
                    }}
                    color="#212121"
                    playlist={file}
                    style={{
                        boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.2)',
                        width: '800px',
                        height: '50px'
                    }}

                    // store a reference of the audio component
                    ref={(App) => { this.App = App; }}
                />


                <div><Record/></div>




            </div>



        );
    }
}

export default App;
