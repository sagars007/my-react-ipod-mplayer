import React, { Component } from "react";
import styles from "../styles/NowPlaying.module.scss";

export class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: true,
    };
  }
  componentDidMount = () => {
    const { audio } = this.props;
    this.props.audio.play();
    this.setState({
      audio: this.props.audio,
    });

    if (this.state.isMounted === true) {
      audio.addEventListener("timeupdate", (e) => {
        let duration = audio.duration;
        let currentPos = audio.currentTime;

        const progress = document.querySelector("#progress");
        if (progress != null) {
          progress.style.width = (currentPos / duration) * 200 + "px";
        }
      });
    }
  };

  componentWillUnmount = () => {
    this.setState({
      isMounted: false,
    });
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.songInfo}>
            <div className={styles.albumThumbnail}></div>
            <div className={styles.description}>
              <h3>Gettin Money GTA:Online</h3>
              <p>Burna Boy</p>
            </div>
          </div>
          <div className={styles.controls}>
            <div
              id="progress"
              style={{ borderTop: "cyan 5px solid" }}
            ></div>
            <div className={styles.buttons}>
              <i className="fas fa-pause"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NowPlaying;
