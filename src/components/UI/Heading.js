import styles from './Heading.module.css'

function Heading (props) {
   return (<div className={styles.wrapper}>
      <h2 className={styles.heading}>{props.heading}</h2>
   </div>)
}

export default Heading