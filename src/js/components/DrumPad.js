import React from 'react';
import '../style/DrumMachine.scss';
const DrumPad = (props) =>{
    
    const activeStyle = {
        backgroundColor: 'orange',
        boxShadow: '0 3px orange',
        height: 77,
        marginTop: 13
      };
      
    const inactiveStyle = {
        backgroundColor: 'grey',
        marginTop: 10,
        boxShadow: '3px 3px 5px black'
    };
      
    const [backGroundStyle, setBackGroundStyle] = React.useState(inactiveStyle);
    const [active, setActive] = React.useState(false);
    
    React.useEffect(()=>{
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    React.useEffect(()=>{
        if(active){
            setBackGroundStyle(activeStyle);
            setTimeout(() => {setBackGroundStyle(inactiveStyle); setActive(false);}, 100);
            
        }else {
            setBackGroundStyle(inactiveStyle);
        }
        
    }, [active]);
  
    const handleKeyDown = (e) =>{
        if(e.keyCode === props.keyCode){
            playSound();
        }
    }

    const playSound = () =>{
        const audioClip = document.getElementById(props.keyTrigger);
        setActive(true);
        audioClip.play();
        //toggleBackGroundStyle();
        console.log(backGroundStyle);
        //setTimeout(() => {toggleBackGroundStyle(); console.log("klklll")}, 100);
        props.updateClipName(props.clipId);
    }
    
    return(
        <div 
        className="drum-pad" 
        id={props.clipId} 
        onClick={playSound}
        style={backGroundStyle}>
            
            <audio 
            className="clip"
            id={props.keyTrigger} 
            src={props.clipURL} />
            
            {props.keyTrigger}

        </div>
    );
}

export default DrumPad;