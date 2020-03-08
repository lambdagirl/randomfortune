import React from "react";
import axios from 'axios'
const lucky = require('./images/Qian/txt/lucky.json'); 
// const lucky=[
//     {title: "No.1 BEST FORTUNE",
//     content: "The tower of cloisonné with seven treasures is standing in a stately manner upon the high summit. People look at it and praise it, Your fortune is jus like this tower. When you look at it more carefully, your fortune. will be more excellent. *Your wishes will be realized.*A sick person will recover.*The person you are waiting for will come soon.*The lost article will be found but it will take a little while.*Building a new house, moving marriage, taking a trip, employment are all good *Be careful for everything that you want to do. If you are careless, you will get hurt injured.",
//     image:"./images/Qian/1大吉1.jpg"
// },
//     {title: "Lucky",
//     content: "Talent is a pursued interest. Anything that you're willing to practice, you can do.",
//     image:"http://www.yuenei.com/d/file/p/92954d8d15784a8d70cf98362506128b.jpg"}

// ]
class Lucky extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            title:"",
            content: "",
            image:"",
            count:0
        }
        this.handleClick = this.handleClick.bind(this)

    }
    

     handleClick() {
        const number = Math.floor(Math.random()*lucky.length);
        const { count } = this.state;
        if(count<3){
            this.setState({
                count: count+1,
                title: `${count+1} time`,
                content: "Please close your eyes, and think of the things you want to play, thow 3 times you will see the result",
                image:"./images/omikuji-box.jpg"
                  })
            }
        else{
        this.setState({
            count:0,
            title: lucky[number].title,
            content: lucky[number].content,
            image:lucky[number].image
              })
           }
        }
    
    
    componentDidMount(){
        this.setState({
            title: "Omikuji Paper Fortune",
            content: "Omikuji is the fortune-telling in Japan. Try your luck once a day!! It is very simple how to tell fortunes Shake and direct the display of your cell phone downward How about your today's fortune ?",
            image:"./images/omikuji-box.jpg"
            })

    }
    render (){
        return (
            <div id='wrapper'>
            <h1 className='title'>Random Fortunes</h1>
                <div id="fortune-box" className="fortune-box">
                    <div className="fortune-author">
                        <span id="author">{this.state.title}</span>
                    </div>
                    <div className="fortune-text">
                        <span id="text">{this.state.content}</span>
                    </div>
                    <div className="image">
                        <img src={this.state.image} />
                    </div>
                    <div className="buttons">
                        <button className="button tweet-quoate" id="tweet-fortune">
                        
                        <a href={`https://twitter.com/intent/tweet?text= ${this.state.title} ${this.state.content}`} target="_blank" title="Post this fortune on twitter!" id='tweet-fortune'>
                        tweet fortune</a></button>
                        <button className="button new-quoate" id="new-fortune" onClick={this.handleClick}>Play</button>
                    </div>
                </div>
                <footer>by <a href="https://github.com/paigel">Zheng</a></footer>
            </div>
            )
    }
}
export default Lucky;