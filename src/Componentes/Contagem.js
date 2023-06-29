import { useState, useEffect } from 'react';
import '../Styles/Contagem.css';
import moment from 'moment';


const Countdown = () => {
  const [countdown, setCountdown] = useState(''); // criando os valores de contagem regressiva

  useEffect(() => {
    const destinationDate = moment('08/15/2023', 'MM/DD/YYYY'); // criando a data desejada

    const timer = setInterval(() => {
      const currentDate = moment(); // pegando a data atual
      const remainingTime = moment.duration(destinationDate.diff(currentDate)); // criando a contagem regressiva do tempo desejado
      const diff = destinationDate.diff(currentDate); // pega a data final e separa em cada camada para fazer a divisão de meses 

      if (remainingTime.asMilliseconds() <= 0) {
        clearInterval(timer);
        setCountdown('Tempo encerrado!'); // quando o contador chegar em 0, faça algo
      } else {
        const duration = moment.duration(diff);
        const months = duration.months();
        const days = duration.days();
        const hours = remainingTime.hours();
        const minutes = remainingTime.minutes();
        const seconds = remainingTime.seconds(); // pegando cada varíavel de tempo
        const formattedCountdown = `${months} mes, ${days} dias, ${hours} horas: ${minutes} minutos: ${seconds} segundos`; // formatando do jeito desejado
        setCountdown(formattedCountdown);
      }
    }, 1000); // tempo em que o contador vai atualizar (milisegundos)

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div className='result'>{countdown}</div>;
};

export default Countdown;