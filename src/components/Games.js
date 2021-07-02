import React, { Component } from "react";

export class Games extends Component {
  render() {
    return <div style={styles.container}></div>;
  }
}

export default Games;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    background:
      'url("https://lh3.ggpht.com/cUY-PQPTHOs1FQri_DsCFduSLTUmPtB3eFtrkR6_vsbOzpXpWANd_RN_KtdPVNFzPw=w720-h310")',
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
};
