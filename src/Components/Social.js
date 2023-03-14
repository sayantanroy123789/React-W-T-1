import { BsFillTaxiFrontFill} from 'react-icons/bs';
import {AiFillTrophy} from 'react-icons/ai';
import { BsFillBagCheckFill} from 'react-icons/bs';
import { AiOutlineTwitter} from 'react-icons/ai';




function Social(){
    return <div>
        <div style={{width:"100%",height:"250px", backgroundImage:"url(https://png.pngtree.com/thumb_back/fh260/back_pic/04/24/66/495836a65fcb8f9.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
            <div style={{fontSize:"60px",display:"flex",justifyContent:"space-evenly",padding:"50px",color:"white"}}>
            <AiFillTrophy/>
                <BsFillBagCheckFill/>
                <BsFillTaxiFrontFill/>
                <AiOutlineTwitter/>
                </div>
                <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"-28px",marginLeft:"30px",color:"white"}}>
                    <h1>22</h1>
                    <h1>145</h1>
                    <h1>49</h1>
                    <h1>2456</h1>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-evenly",margin:"0 16px",color:"white"}}>
                        <h4 >Award winning</h4>
                        <h4 >Finished project</h4>
                        <h4 style={{marginLeft:"12px"}}>Product sold</h4>
                        <h4 style={{marginLeft:"12px"}}>Twitter fans</h4>
                        </div>
            
            </div>
     
        
         
        </div>
}
export default Social