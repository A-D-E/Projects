import Counter from 'components/Counter'
import styles from './Content.module.scss'
import Slider from 'components/Slider'

function Content() {
  return (
    <div className={styles.Content}>
      {/* <Counter /> */}
      <Slider />
    </div>
  )
}

export default Content