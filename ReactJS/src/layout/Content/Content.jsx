import Counter from '../../components/Counter'
import styles from './Content.module.scss'

function Content() {
  return (
    <div className={styles.Content}>
      <Counter />
    </div>
  )
}

export default Content