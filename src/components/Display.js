import React, { Component } from "react";
import Menu from "./Menu";
import Music from "./Music";
import Games from "./Games";
import Settings from "./Settings";
import AudioBook from "./AudioBook";
import Clock from "./Clock";
import NowPlaying from "./NowPlaying";
import styles from "../styles/Display.module.scss";

export class Display extends Component {
  render() {
    const { currentItem, currentDisplay } = this.props;
    return (
      /* prettier-ignore */
      <div className={styles.display}>
        {currentDisplay === "Clock" ? <Clock /> : null}
        {currentDisplay === "Menu" ? <Menu currentItem={currentItem} title={"Welcome User!"} /> : null}
        {currentDisplay === "Music" ? <Music currentItem={currentItem} title= {"Music"} /> : null}
        {currentDisplay === "Games" ? <Games title={"Games"} /> : null}
        {currentDisplay === "Settings" ? <Settings  title={"Settings"}/> : null}
        {currentDisplay === "NowPlaying" ? <NowPlaying  title={"MySongs"} audio={this.props.audio}/> : null}
        {currentDisplay === "AudioBook" ? <AudioBook  title={"MyAudioBooks"} audiobook={this.props.audiobook} /> : null}
      </div>
    );
  }
}

export default Display;
