import { useEffect, useState } from 'react'
import style from './Slider.module.scss'
import slides from 'utils/slides'

function Slider() {
  const [current, setCurrent] = useState(0)
  const [pause, setPause] = useState(false)

  const clickHandler = (r) => {
    // r === 'next' ? setCurrent(current === slides.length - 1 ? 0 : current + 1) : setCurrent(current === 0 ? slides.length - 1 : current - 1)
    if (r === 'next') {
      setCurrent(current === slides.length - 1 ? 0 : current + 1)
    } else {
      setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }

    if (r === 'pause') {
      setPause(!pause)
    }
  }

  useEffect(() => {

    const interval = setInterval(() => {
      !pause && setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [current, pause])

  return (
    <div className='Slider'>
      <div className="view">
        {slides.map((slide, index) => (
          <div className={current === index ? style.slide + 'active' : style.slide} key={index}>
            <h1>{slide.title}</h1>
            <img src={slide.img} alt={slide.title} />
            <p>{slide.text}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={() => clickHandler('prev')} className={`${style.btn} btn-prev`}>Назад</button>
        <button onClick={() => clickHandler('pause')} className={`${style.btn} btn-pause`}>{pause ? 'Воспроизвести' : 'Пауза'}</button>
        <button onClick={() => clickHandler('next')} className={`${style.btn} btn-next`}>Вперёд</button>
      </div>
    </div>
  )
}

export default Slider