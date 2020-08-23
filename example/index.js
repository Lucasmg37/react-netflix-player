import React from 'react';
import ReactDOM from 'react-dom';
import ReactNetflixPlayer from '../src/ReactNetflixPlayer';

ReactDOM.render(
  <div>
    <ReactNetflixPlayer
      // Vídeo Link - Just data is required
      // src="http://lucasjunior.com.br/teste.mp4"
      src="http://rokusan.papepi.club/launch_hd/189007.mp4"
      // src={"http://videoinvalid"}
      title="Dragon Ball Z"
      subTitle="Opening"
      titleMedia="Dragon Ball Z"
      extraInfoMedia="Opening"
      // Action when the button X (close) is clicked
      backButton={() => {}}
      // The player use the all viewport
      fullPlayer
      // The video starts when the component is render
      autoPlay
      // The start position video
      startPosition={0}
      // The info of the next video action
      dataNext={{ title: 'Não existe um próximo vídeo.' }}
      // The action call when the next video is clicked
      onNextClick={() => {}}
      // The list reproduction data, will be render in this order
      reprodutionList={[
        {
          nome: 'Opening',
          id: 1,
          playing: true,
        },
        {
          nome: 'Teste',
          id: 2,
          playing: false,
        },
      ]}
      // The function call when a item in reproductionList is clicked
      onClickItemListReproduction={(id, playing) => {
        return {
          id,
          playing,
        };
      }}
      // The function is call when the video finish
      onEnded={() => {}}
      // The function is call when the video is playing (One time for frame)
      onTimeUpdate={() => {}}
      // Enable the orverlay when player is paused
      overlayEnabled
      // Enabled the auto clode controlls of player
      autoControllCloseEnabled
    />
  </div>,
  document.getElementById('root'),
);
