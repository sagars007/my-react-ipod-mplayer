import React from "react";
import styles from "../styles/ListStyles.module.scss";

class Music extends React.Component {
  render() {
    const { currentItem } = this.props;
    return (
      /* prettier-ignore */
      <div>
         <div className={styles.menuContainer} id='menuContainer'>
            <h3 id="title" className={styles.title}>{this.props.title}</h3>
            <ul className={styles.menuItemContainer}>
              <li className={ currentItem === "NowPlaying" ? styles.menuItemSelected: styles.menuItem }>   
                  <span>Now Playing</span>        
                  <i className="fas fa-chevron-right"></i>
              </li>
              <li className={ currentItem === "AudioBook" ? styles.menuItemSelected: styles.menuItem }>
                <span>Audio Books </span>       
                <i className="fas fa-chevron-right"></i>  
              </li>
            </ul>
        </div>
      </div>
    );
  }
}
export default Music;
