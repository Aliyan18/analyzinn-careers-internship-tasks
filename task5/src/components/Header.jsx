import storeIcon from '../images/storeIcon.png'
import { CartContext } from '../Pages/CartContext'
import { useContext } from 'react'
import cartIcon from '../images/cartIcon.png'
export default function Header(){
const {setHidden}=useContext(CartContext)
return(
<nav className="navbar navbar-dark" 
style={{ 
  position: 'absolute', 
  top: '1px',
   width: '100vw', 
   left: '0',
   justifyContent:'center',
   marginBottom:10,
  backgroundColor:'teal',
borderBottom:'1px solid black'
,padding:'10px' }
   }>
<img src={storeIcon}
style={{
  position:'absolute',
  width:'15%',
  height:'170%'
}}
></img>
  <span style=
  {{fontWeight:'3200',
  fontFamily:'cursive',
   whiteSpace:'pre',
  color:'teal'}}
   >P E T    S T O R E</span>
  <button onClick={()=>setHidden(()=>false)} style={{backgroundColor:'white', padding:0,width:'4%',height:'90%',position:'absolute', right:'20px'}}>
     <img src={cartIcon} style={{width:'80%',height:"80%"}}></img>
  </button>
</nav>
)
}