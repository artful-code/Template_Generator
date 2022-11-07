
import styles from '../styles/legalnotice.module.css'
import jsPDF from 'jspdf'
import { useEffect, useState } from 'react'
import { Col,Row,Spinner } from 'react-bootstrap'
import LegalNoticeForm from '../components/legalNoticeForm'
import LegalNoticeHtml from '../components/legalNoticeHtml'
import Lnformhtmlmobile from '../components/lnformhtmlmobile'
import axios from 'axios'
import Nav from '../components/navbar'

const SpinnerComp=()=>{
    return(
        <span style={{height:'100vh',marginTop:'45vh'}}>
            <center style={{paddingTop:'45vh'}}>
                <Spinner animation="grow" style={{color:'#00FA9A',height:'5vh',width:'5vh'}}/>
            </center>
        </span>
    );
}

const LegalNoticeTemplate = () => {

    Date.prototype.toDateInputValue = (function() {
        var local = new Date(this);
        local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
        return local.toJSON().slice(0,10);
    });

    const[sheetdata,setSheetdata]=useState('')
    const [date,setDate]=useState(new Date().toDateInputValue())
    const [lawyer,setLawyer]=useState({
        'id':'D/145/2032',
        'name':'VISHAL KHANDELVAL',
        'address':'IIT MADRAS'
    })
    const [client,setClient]=useState({
        'name':'',
        'address':'',
        'email':''
    })
    const [recipient,setRecipient]=useState({
        'name':'',
        'address':'',
        'email':''
    })
    const [rupees,setRupees]=useState({
        'rs':'',
        'words':''
    })
    const [product,setProduct]=useState({
        'id':'',
        'reason':'',
        'action':''
    })
    

    useEffect(()=>{
        axios
          .get("/api/consumer")
          .then((res) => {
            setSheetdata(res.data)
          })
          .catch((err)=>{
            alert("error in getting data from google sheet")
            console.log("error in consumernewsheet")
            console.log(err)
          });
    },[])


return(
    <>
    {!sheetdata? <SpinnerComp/>:
    <>
    <Nav setSheetdata={setSheetdata} sheetdata={sheetdata}
    setLawyer={setLawyer} setDate={setDate} setRecipient={setRecipient} setClient={setClient} 
    setRupees={setRupees} setProduct={setProduct}/>
    <Row className={styles.legalnoticerow}>
        <Col xs={12} md={7} className={styles.formcol}>
            <LegalNoticeForm 
            lawyer={lawyer} date={date} client={client} 
            recipient={recipient} rupees={rupees} product={product}
            setLawyer={setLawyer} setDate={setDate} setRecipient={setRecipient} setClient={setClient} 
            setRupees={setRupees} setProduct={setProduct}/>
        </Col>
        <Col md={5} className={`${styles.htmlcol} d-none d-sm-block`}>
            <LegalNoticeHtml lawyer={lawyer} date={date} client={client} 
            recipient={recipient} rupees={rupees} product={product}/>
        </Col>
        <div className={`d-block d-sm-none ${styles.htmlcolmobile}`}>
            <Lnformhtmlmobile
            lawyer={lawyer} date={date} client={client} product={product}
            recipient={recipient} rupees={rupees}/>
        </div>  
    </Row>
    </>
}
    </>
);
    
 }

export default LegalNoticeTemplate;