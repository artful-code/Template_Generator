import styles from '../styles/legalnotice.module.css'
import { Col,Row,Form,Button,Accordion, AccordionContext ,useAccordionButton} from 'react-bootstrap'
import { useContext, useRef, useState } from 'react'
import {htmltopdf,htmltodocx,htmltomail} from './utils/htmltopdf'
import emailjs from 'emailjs-com'
import { rstotext } from './utils/rstotext'


const LegalNoticeForm=(props)=>{

    const onclickAccordion=(id)=>{

        document.querySelectorAll('.lnformrows').forEach((row)=>{
            if(`#${row.id}`!=id){row.style=null}
        }) 
        const element=document.querySelector(id)

        element.scrollIntoView({ 
            behavior: 'smooth' 
          });

        
        if(!element.style.backgroundColor){
            element.style.backgroundColor='lightgrey'
            element.style.borderRadius='10px'
            element.style.padding='0.5vh'
            element.style.scale='1.1'
            element.style.opacity = 2;
        }else{
            element.style=null
        }

    }

    return(
        <Form className={styles.lnform}>

            <Form.Group className={styles.accordion}>
                <Row>
                    <Col xs={{span:8,offset:4}} md={{span:3,offset:9}}>
                        <Form.Control onClick={()=>onclickAccordion('#lndate')} type="date" value={props.date}  style={{'textAlign':'center'}} onChange={(e)=>props.setDate(e.target.value)}/>
                    </Col>
                </Row>
            </Form.Group><hr/>


            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter ID of Lawyer</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnlawyer1')} required type="text" value={props.lawyer['id']} onChange={(e)=>props.setLawyer(prevState=>({
                        ...prevState,
                        'id':e.target.value
                    }))}/>
                </Col>    
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Name of Lawyer</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnlawyer2')} required type="text" value={props.lawyer['name']} onChange={(e)=>props.setLawyer(prevState=>({
                        ...prevState,
                        'name':e.target.value
                    }))}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Address of Lawyer</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnlawyer3')} required as="textarea" value={props.lawyer['address']} onChange={(e)=>props.setLawyer(prevState=>({
                        ...prevState,
                        'address':e.target.value
                    }))}/>
                </Col>
            </Form.Group><hr/>

            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Name of Client</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnclient1')} required type="text" value={props.client['name']} onChange={(e)=>props.setClient(prevState=>({
                        ...prevState,
                        'name':e.target.value
                    }))}/>    
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Email of Client</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control required type="text" value={props.client['email']} onChange={(e)=>props.setClient(prevState=>({
                        ...prevState,
                        'email':e.target.value
                    }))}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Address of Client</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnclient2')} required as="textarea" value={props.client['address']} onChange={(e)=>props.setClient(prevState=>({
                        ...prevState,
                        'address':e.target.value
                    }))}/>
                </Col>
            </Form.Group><hr/>

            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Name of Recipient</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnrecipient1')} required type="text" value={props.recipient['name']} onChange={(e)=>props.setRecipient(prevState=>({
                        ...prevState,
                        'name':e.target.value
                    }))}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Email of Recipient</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control required type="text" value={props.recipient['email']} onChange={(e)=>props.setRecipient(prevState=>({
                        ...prevState,
                        'email':e.target.value
                    }))}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Address of Recipient</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnrecipient2')} required as="textarea" value={props.recipient['address']} onChange={(e)=>props.setRecipient(prevState=>({
                        ...prevState,
                        'address':e.target.value
                    }))}/>
                </Col>
            </Form.Group><hr/>

            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Enter Amount to be refunded</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnrupees1')} required type="number" value={props.rupees['rs']} onChange={(e)=>
                    {
                        props.setRupees(prevState=>({
                        ...prevState,
                        'rs':e.target.value,
                        'words':rstotext(e.target.value)
                        }))
                    }
                    }/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Amount in words</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnrupees2')} required type="text" value={props.rupees['words']} onChange={(e)=>props.setRupees(prevState=>({
                        ...prevState,
                        'words':e.target.value
                    }))}/>
                </Col>
                <Col xs={12}><Form.Text className='text-muted'>&emsp;Amount in words will get automatically updated if amount is less than 10,00,00,00,000</Form.Text></Col>
            </Form.Group><hr/>

            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Order ID of product</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnproduct1')} required type="text" value={props.product['id']} onChange={(e)=>props.setProduct(prevState=>({
                        ...prevState,
                        'id':e.target.value
                    }))}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Reason for the notice</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnproduct2')} required type="text" value={props.product['reason']} onChange={(e)=>props.setProduct(prevState=>({
                        ...prevState,
                        'reason':e.target.value
                    }))}/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3 row">
                <Col xs={12} md={2}><Form.Label>Action to be taken</Form.Label></Col>
                <Col xs={12} md={10}>
                    <Form.Control onClick={()=>onclickAccordion('#lnproduct3')} required type="text" value={props.product['action']} onChange={(e)=>props.setProduct(prevState=>({
                        ...prevState,
                        'action':e.target.value
                    }))}/>
                </Col>
            </Form.Group>


            <center>
               <Button variant="success" size='lg' style={{'margin':'1vh'}} onClick={()=>{
                    const proparray=[props.rupees['rs'],props.rupees['words'],props.date,...Object.values(props.client),...Object.values(props.recipient),...Object.values(props.lawyer),...Object.values(props.product)]
                    console.log(proparray.every(val=>val!=''))
                    if(proparray.every(val=>val!='')){
                        htmltopdf(document.querySelector('#legalnoticeform'),'Legal_Notice')
                    }else{
                        alert('Please fill all the entries')
                    }
                }}>
                    Generate PDF
                </Button>&emsp;
                <Button variant="success" size='lg' style={{'margin':'1vh'}} onClick={()=>{
                    const proparray=[props.rupees['rs'],props.rupees['words'],props.date,...Object.values(props.client),...Object.values(props.recipient),...Object.values(props.lawyer),...Object.values(props.product)]
                    console.log(proparray.every(val=>val!=''))
                    if(proparray.every(val=>val!='')){
                        htmltodocx(document.querySelector('#legalnoticeform'),'Legal_Notice')
                    }else{
                        alert('Please fill all the entries')
                    }
                }}>
                    Generate DOCX
                </Button> &emsp;
                <Button id='htmltoemailbtn' variant="success" size='lg' style={{'margin':'1vh'}} onClick={()=>{
                    const proparray=[props.rupees['rs'],props.rupees['words'],props.date,...Object.values(props.client),...Object.values(props.recipient),...Object.values(props.lawyer),...Object.values(props.product)]
                    console.log(proparray.every(val=>val!=''))
                    if(proparray.every(val=>val!='')){
                        htmltomail(props.lawyer,props.client,props.date,props.recipient,props.rupees,props.product)
                    }else{
                        alert('Please fill all the entries')
                    }
                }}>
                    Send mail
                </Button> 
            </center>

            <br/>

        </Form>
    );
}

export default LegalNoticeForm;




