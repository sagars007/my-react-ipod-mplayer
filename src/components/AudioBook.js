import React, { Component } from "react";
import styles from "../styles/AudioBook.module.scss";

export class AudioBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMounted: true,
    };
  }
  componentDidMount = () => {
    const { audiobook } = this.props;
    this.props.audiobook.play();
    this.setState({
      audio: this.props.audiobook,
    });

    if (this.state.isMounted === true) {
      audiobook.addEventListener("timeupdate", (e) => {
        let duration = audiobook.duration;
        let currentPos = audiobook.currentTime;

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
          <div className={styles.description}>
            <h3>Love and Friendship</h3>
            <p>
              <i>Written by: Jane Austen</i>
            </p>
            <div className={styles.thumbnailImage}></div>
          </div>

          <div className={styles.progress}></div>
        </div>
      </div>
    );
  }
}

export default AudioBook;
