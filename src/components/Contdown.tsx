import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';


export function Countdown() {
  const { 
     minutes,
     seconds, 
     hasFineshed,
     isActive, 
     startCountdown, 
     resetCountdown 
    } = useContext(CountdownContext)


  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdownContainer}>
          <div>
            <span>{minuteLeft}</span>
            <span>{minuteRight}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondLeft}</span>
            <span>{secondRight}</span>
          </div>   
      </div>

      {hasFineshed ? (
       <button 
        disabled={true}
        className={`${styles.countdownButton} ${styles.countdownButtonFineshed}`}
     >
         Ciclo encerrado <img src="/icons/check_circle.svg" alt="check_circle"/>
     </button>
      ): (
        <> 
          {isActive 
            ? (<button 
              type="button" 
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
                Abandonar Ciclo <span>X</span>
            </button>) 
            : (<button 
              type="button" 
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar Ciclo 
            </button>)
          }
        </>
      )}


     
    </div>

  )
}