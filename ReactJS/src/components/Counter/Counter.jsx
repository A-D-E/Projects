import { useState } from 'react'
import styles from './Counter.module.scss'

function Counter() {

  const [count, setCount] = useState(0)

  return (
    <button className={styles.button} onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  )
}

export default Counter