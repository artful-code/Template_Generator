import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {rstotext} from './utils/rstotext'
import styles from '../styles/Home.module.css'
import axios from 'axios';

function ColorSchemesExample(props) {
  const handleClick=()=>{

    const btn=document.querySelector('#prefillnext')
    btn.textContent="Pls Wait....."
    btn.disabled=true
    
    var data;
    if(props.sheetdata.length==0){
      alert('No more data in sheet')
    }else{
      data=props.sheetdata.shift()
      props.setClient(prevState=>({
        ...prevState,
        'name':data['client_name'],
        'address':data['client_address'],
        'email':data['client_email']
      }))
      props.setRecipient(prevState=>({
        ...prevState,
          'name':data['recipient_name'],
          'address':data['recipient_address'],
          'email':data['recipient_email']
      }))
      props.setRupees(prevState=>({
        ...prevState,
          'words':rstotext(data['amount']),
          'rs':data['amount']
      }))
      props.setProduct(prevState=>({
        ...prevState,
        'id':data['order_id'],
        'reason':data['reason'],
        'action':data['action']
      }))
    }

    
    axios
      .get("/api/updateconsumer")
      .then((res) => {
        console.log("Done")
      })
      .catch((err)=>{
        alert("error")
        console.log("error in updateconsumer")
        console.log(err)
        
      })
      .finally((e)=>{
        btn.textContent="Prefill Next"
        btn.disabled=false
      });
    

  }
  return (
    <>
      <Navbar expand="lg" className={styles.navbar}>
        <Container>
          <Navbar.Brand className={styles.navbarbrand}  href="/"><strong>Consumer Legal Notice</strong></Navbar.Brand>
          <Navbar.Text>
            <Button variant='success' id='prefillnext' onClick={handleClick}>Prefill Next</Button>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;