import React, { Component } from "react";
import Display from "./Display";
import ZingTouch from "zingtouch";
import song from "../audio/Burna Boy - Gettin' Money (Original Version).flac";
import audiobookFile from "../audio/audiobook.mp3";

export class IpodBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: "Clock",
      currentDisplay: "Menu",
      audio: {},
      isSongPlaying: true,
      isBookPlaying: false,
    };
  }

  // function to control wheel rotation movement
  rotateEventHandler = () => {
    let controller = document.getElementById("controller");
    let region = new ZingTouch.Region(controller);
    region.bind(controller, "rotate", (e) => {
      let currentAngle = Math.floor(e.detail.angle + 90) % 60;

      console.log("CurrentAngle: ", currentAngle);
      const menuItems = ["Settings", "Games", "Music", "Clock"];
      const musicItems = ["NowPlaying", "AudioBook"];

      if (this.state.currentDisplay === "Menu") {
        this.setState({
          currentItem: menuItems[Math.floor(currentAngle / 15)],
        });
      } else if (this.state.currentDisplay === "Music") {
        this.setState({
          currentItem: musicItems[Math.floor(currentAngle / 30)],
        });
      }
    });
  };

  // function to change display on selection of new item
  changeDisplayHandler = () => {
    const { currentItem } = this.state;
    if (currentItem === "Music") {
      this.setState({
        currentItem: "NowPlaying",
        currentDisplay: currentItem,
      });
    } else if (currentItem === "NowPlaying") {
      this.setState({
        currentItem: "NowPlaying",
        currentDisplay: "NowPlaying",
      });
    } else {
      this.setState({
        currentItem: currentItem,
        currentDisplay: currentItem,
      });
    }
  };

  // function to go back 
  backToMenu = () => {
    const { currentItem } = this.state;
    if (currentItem === "NowPlaying" || currentItem === "AudioBook") {
      this.setState({
        currentItem: { currentItem },
        currentDisplay: "Music",
      });
    } else {
      this.setState({
        currentItem: { currentItem },
        currentDisplay: "Menu",
      });
    }
  };

  //  function to handle song play or pause state
  onPlayPauseHandler = () => {
    if (this.state.currentDisplay === "NowPlaying") {
      if (this.state.isSongPlaying === true) {
        console.log("Audio paused");
        this.state.audio.pause();
        this.setState({
          isSongPlaying: false,
        });
      } else {
        console.log("Audio played");
        this.state.audio.play();
        this.setState({
          isSongPlaying: true,
        });
      }
    } else if (this.state.currentDisplay === "AudioBook") {
      if (this.state.isBookPlaying === true) {
        console.log("Audio paused");
        this.state.audiobook.pause();
        this.setState({
          isBookPlaying: false,
        });
      } else {
        console.log("Audio played");
        this.state.audiobook.play();
        this.setState({
          isBookPlaying: true,
        });
      }
    }
  };

  componentDidMount = () => {
    let audioFile = document.querySelector("#audioFile");
    let audiobook = document.querySelector("#audiobookFile");
    this.setState({
      audio: audioFile,
      audiobook: audiobook,
    });
  };

  render() {
    const { currentItem, currentDisplay, audio, audiobook } = this.state;
    return (
      // prettier-ignore
      <div className="ipodBody" style={styles.ipodBody}>
        <audio src={song} type="audio/mp3" loop id="audioFile" />
        <audio src={audiobookFile} type="audio/mp3" loop id="audiobookFile" />
        {/* display component */}
        <Display currentItem={currentItem} currentDisplay={currentDisplay} audio={audio} audiobook= {audiobook}/>

        {/* iPod Contoller Wheel Container */}
        <div id="controller" style={styles.wheel} onMouseOver={this.rotateEventHandler}>
          {/* menu button container */}
          <div style={styles.buttonContainer}>
            <div style={styles.menuButton}>
              <p onClick={this.backToMenu} style={styles.iconStyle}>MENU</p>
            </div>
          </div>

          {/* forward/backward/control button container */}
          <div style={styles.buttonContainer}>
            <div style={styles.middleButtons}>
              <i style={styles.iconStyle} className="fas fa-fast-backward"></i>
              <div onClick={this.changeDisplayHandler} style={styles.controlButton}></div>
              <i style={styles.iconStyle} className="fas fa-fast-forward"></i>
            </div>
          </div>

          {/* play/pause button container */}
          <div style={styles.buttonContainer}>
            <div onClick={this.onPlayPauseHandler} style={styles.playButton}>
              <i onClick={this.onPlayPauseHandler} style={styles.iconStyle} className="fas fa-pause"></i> &nbsp;
              <i onClick={this.onPlayPauseHandler} style={styles.iconStyle} className="fas fa-play"></i>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default IpodBody;

const styles = {
  ipodBody: {
    width: "250px",
    height: "450px",
    backgroundColor: "#003366",
    borderRadius: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingBottom: "10px",
    boxShadow: "9px 9px 16px 0 #42BBDF inset, -9px -9px 16px 0 #774CC1 inset",
  },
  wheel: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "#E0E5EC",
    boxShadow: "9px 9px 16px 0 #FFFFFF inset, -9px -9px 16px 0 #A3B1C6 inset",
    cursor: "pointer",
    zIndex: 1,
  },
  buttonContainer: {
    width: "100%",
    height: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  menuButton: {
    alignSelf: "center",
  },
  playButton: {
    alignSelf: "center",
  },
  middleButtons: {
    alignSelf: "center",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  controlButton: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#E0E5EC",
    boxShadow:
      "9px 9px 16px 0 rgb(163,177,198, 0.8) inset, -9px -9px 16px 0 rgba(255,255,255) inset",
    zIndex: "10",
    overflow: "hidden",
    color: "#fff",
    fontSize: "24px",
  },
  iconStyle: {
    alignSelf: "center",
    fontSize: "16px",
    color: "#001a4d",
  },
};
