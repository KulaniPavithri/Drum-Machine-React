import React from 'react';
import DrumPad from "./DrumPad";
import '../style/DrumMachine.scss';
const DrumMachine = () =>{
  const [display, setDisplay] = React.useState();
  
  const displayClipName = (displayText) =>{
    setDisplay(displayText);
  }
  const clips =[
    {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat",
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  ];
  const drumPads = clips.map((clip, i, clips)=>{
    return(
      <div>
        <DrumPad 
        clipId={clips[i].id}
        keyCode={clips[i].keyCode}
        keyTrigger={clips[i].keyTrigger}
        clipURL={clips[i].url}
        updateClipName={displayClipName}
        />
        
      </div>
    );
  });
  return(
    <div id="drum-machine">
      <div className="pad-bank">
        {drumPads}
      </div>
      <div className="controls-container">
        <p id="display">
          {display}
        </p>
      </div>
    </div>
    
  );
}

export default DrumMachine;