import React, {Component} from 'react';

export class CommentAudioPlayer extends Component{

    constructor(props){
        super(props);


    }




    render(){

        return(

            <div>
                <video controls name="media">
                    <source src= {this.props.AudioURL} type = "audio/webm" />
                    {console.log(this.props.AudioURL)}

                </video>
            </div>

        );


    }

}



export default CommentAudioPlayer;