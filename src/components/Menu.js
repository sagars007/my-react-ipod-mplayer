import React from "react";
import styles from "../styles/ListStyles.module.scss";

class Menu extends React.Component {
  render() {
    const { currentItem } = this.props;
    return (
      
      <div>
        <div className={styles.menuContainer} id='menuContainer'>
            <h3 id="title" className={styles.title}>{this.props.title}</h3>
            <ul className={styles.menuItemContainer}>
              <li className={ currentItem === "Clock" ? styles.menuItemSelected: styles.menuItem }>   
                  <span>Clock </span>        
                  <i className="fas fa-chevron-right"></i>
              </li>
              <li className={ currentItem === "Music" ? styles.menuItemSelected: styles.menuItem }>
                <span>Music </span>       
                <i className="fas fa-chevron-right"></i>  
              </li>
              <li className={ currentItem === "Games" ? styles.menuItemSelected: styles.menuItem }>
                  <span>Games </span>    
                  <i className="fas fa-chevron-right"></i> 
              </li>
              <li className= {currentItem === "Settings" ? styles.menuItemSelected: styles.menuItem} >
                <span>Settings </span>    
                <i className="fas fa-chevron-right"></i>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
