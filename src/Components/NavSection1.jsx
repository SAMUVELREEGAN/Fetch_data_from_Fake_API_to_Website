import {Container} from 'react-bootstrap'
import { SlHandbag } from "react-icons/sl";
import { SlUser } from "react-icons/sl";
import { GoSearch } from "react-icons/go";

const NavSection1 = () => {
  return (
    <div>
        <Container style={{display:"flex",justifyContent:"space-between" , marginTop:"10px"}}>
                <h2>shopy</h2>
                <div style={{fontSize:"27px"}}>
                   <GoSearch /> | <SlUser /> | <SlHandbag />
                </div>
        </Container>
    </div>
  )
}

export default NavSection1