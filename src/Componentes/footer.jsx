import '../Styles/footer.css'
import './Termo'
import { Link } from 'react-router-dom';

function footer() {
  return (
   <>
      <div className="contem-footer">
        <a className='link-email' href="mailto:seja@easychange.com.br?subject=subject text">seja@easychange.com.br</a><br></br>
        <Link to='/Termos' className='termoss'>Termos de Uso</Link>
        <p>
        EASYCHANGE IP
        CNPJ: 48.767.409/0001-64
        RUA JOSEPH ZARZOUR, 93. VILA MOREIRA - GUARULHOS - SP
        CEP: 07020-081
      </p>
      </div>
    
     </> 

  )
}
export default footer;