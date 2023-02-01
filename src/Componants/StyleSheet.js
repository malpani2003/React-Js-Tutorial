import React from 'react'
import styles from './Mystyle.module.css'
function StyleSheet(props) {
    let classname = props.primary?"orange":"blue";
    let style={
        "color":"brown",
        "backgroundColor":"white",
        "padding":"10px"
    }
  return (
    <div>
        <h4 className={styles.orange}>StyleSheet</h4>
        <p style={style}>Paragraph</p>
        </div>
  )
}

export default StyleSheet