import '../Styles/Pagina.css'
import Meninas from '../imagens/meninas.png'
import Logo from '../imagens/logo.jpeg'
import Contagem from '../Componentes/Contagem'
import Contagem2 from '../Componentes/Contagem'
import Roda from './footer'


function Pagina(){
    return(
        <>
        <div className='contem-tudo'>
            <div className='contem_meninas'>
                <img src={Meninas} alt='meninas' className='img_meninas'/>
            </div>
            <div className='contem-logo'>
                 <img src={Logo} alt='Logo'className='img_logo'/>
            </div>
            <div className='contem-txt'>

                <div className='sem-nome'>

                <div className='contagem'>
                <span className='contem-palavra'><b>Faltam:</b></span>
                <Contagem/>
                </div>


                  <div className='easy'>
                    Para sua vida ser mais <b>Easy</b>
                 </div>  

                </div>                
            </div>
        </div>
              
              
                <div className='contagem2'>
                <span className='contem-palavra'><b>Faltam: <Contagem2/></b></span>
                </div>
        
               
                <div className='easy2'>
                    Para sua vida ser mais <b>Easy</b>
                </div>  

                <Roda/>
    </>
        
        
    )
}
export default Pagina;