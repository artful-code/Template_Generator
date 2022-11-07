import styles from '../styles/legalnotice.module.css'
import { Col,Row,Form,Button, Container } from 'react-bootstrap'

const LegalNoticeHtml=({date,lawyer,client,recipient,rupees,product})=>{
 
    return(
        <div className={styles.formouter}>
            <div id='legalnoticeform' className={styles.form}>
                <Container>
                    <Row>
                        <center className='lnformrows' id='lnlawyer2'><strong>{lawyer['name']==''? '______________' : lawyer['name'].toUpperCase()}</strong></center>
                        <center><strong>ADVOCATE</strong></center>
                        <center id='lnlawyer3' className='lnformrows'><strong>{lawyer['address']==''? '______________' : lawyer['address']}</strong></center>  
                    </Row><hr/> 
                    <Row className='lnformrows' id='lndate'>
                        <Col style={{'textAlign':'right'}}>
                            <span >Date : </span>
                            <em>
                                <span >{date==''? '______________' : date}</span>
                            </em>
                        </Col>
                    </Row>
                    <Row className='lnformrows' style={{'width':'50%'}}>
                        <span >To,</span><br/>
                        <strong>Grievance Officer</strong><br/>
                        <em id='lnrecipient1' className='lnformrows' >
                            {recipient['name']==''? '______________' : recipient['name']}
                        </em><br/>
                        <em id='lnrecipient2' className='lnformrows' >
                            {recipient['address']==''? '______________' : recipient['address']}
                        </em>
                    </Row>
                    <Row className={`lnformrows ${styles.alignright}`}>
                            <strong>My Client:</strong><br/>
                            <strong id='lnclient1' className='lnformrows'>
                                <em>Mr.{client['name']==''? '______________' : client['name']} ,</em>
                            </strong><br/>
                            <em id='lnclient2' className='lnformrows'>
                                R/o – {client['address']==''? '______________' : client['name']}
                            </em>
                    </Row>
                    <br/>
                    <Row style={{'textAlign':'left'}}>
                        <p>
                            <strong>SUB : </strong>
                            <em>
                                <span >Legal Notice for deficiency in services, defects and mental harassment.</span>
                            </em>
                        </p>
                    </Row>
                    <Row className='lnformrows' id='lnreferences'>
                        <strong>
                            <em>Reference : </em><br/>
                        </strong>
                        <em style={{'paddingLeft':'3%'}}>
                               &emsp; 1. Refer to order no : <span id='lnproduct1' className='lnformrows'>{product['id']==''? '______________' : product['id']}</span>   
                        </em>           
                    </Row><br/>
                    <Row>
                        <p>
                        <span >Dear Sir/ Ma’am,</span>
                        </p> 
                    </Row>
                    <Row>
                        <p>
                            It is hereby stated that You have provided deficient services and breached the agreed terms and conditions as mentioned in your Terms of Service and User Agreement as furnished on your official website. Denied the due refund to my Client accruing from the deficiency of services to my Client which is a criminal breach of trust and conspiracy with the aim to cheat and defraud my Client and harass him mentally. Under the instructions from and on behalf of my Client, and after crucial analysis of all the sequential events of the repeated conversations between You and my Client which were handed to me by my client, we would like to state as follows:
                        </p>
                    </Row>
                    <Row className='lnformrows' id='lnstatements'>
                        <span style={{'paddingLeft':'3%'}}>
                            <ol>
                                <li>That my Client, {client['name']==''? '______________' : client['name']}, residing {client['address']==''? '______________' : client['address']}, had to bear damages due to lack of fulfillment of contract at your end.</li>
                                <li>The present Legal Notice is in relation to various injuries committed by You, with the intention to deceive and cheat my Client along with other violations of the Consumer Protection Act, 2019 as elaborated in detail hereinafter. You have acted maliciously with knowledge of the wrongful loss to my Client by dishonestly holding back INR <span id='lnrupees1' className='lnformrows'>{rupees['rs']==''? '______________' : rupees['rs']}</span> (<span id='lnrupees2' className='lnformrows'>{rupees['words']==''? '______________' : rupees['words']}</span>).</li>  
                                <li>That after carefully reading and understanding the commitments, terms, and conditions, advertised and listed by you on your website and mobile application, my Client had ordered a product order ID - {product['id']==''? '______________' : product['id']} from your website but the delivery of the product was <span id='lnproduct2' className='lnformrows'>{product['reason']==''? '______________' : product['reason']}</span>. <br/>Find the specific details of the product attached below.  </li>
                                <li>That after numerous attempts to resolve the issue, there was no proper communication provided by you. </li>
                                <li>That after examining the above situation and the perilous service provided by You, my Client had to face inconvenience and the product was therefore no more useful at the time due to the delay. That your engaged employees, associates, and representatives were ill-mannered and unresponsive and did not help in resolving the issues raised. </li>
                                <li>Accordingly, upon instructions of and on behalf of my Client, we hereby demand You to compensate by <span id='lnproduct3' className='lnformrows'>{product['action']==''? '______________' : product['action']}</span> the above-said amount and respond to the present Notice, within 20 days of the first receipt of this legal notice thereof (by e-mail or other modes) furnishing reasons as to why consumer proceedings for the above-mentioned offenses, should not be initiated against You. </li>
                                <li>Kindly be informed that in case of failure to respond on your part within the said time period, my Client shall be constrained to initiate legal action in accordance with the law, and in such an event You alone shall be liable for all our costs and expenses in contesting litigation against You and the consequences of such litigation.</li>
                                <li>This is without prejudice to all other rights and entitlements that we may have against You, the notice(s) issued under law and equity.</li>
                            </ol>    
                        </span> 
                    </Row>
                    <Row>
                        <p>
                            Take further notice that in case of failure to discharge your obligations and commitments within the time specified, my Client shall be further constrained to lodge a consumer complaint against You for deficiency of services, wrongful loss, and mental harassment caused to my Client by You and your representatives and also institute such other proceedings and actions in law as advised.                         
                        </p>
                        <center><strong>A copy of the Legal Notice has been retained in my office for future reference.</strong></center>
                    </Row><br/>
                    <Row style={{'textAlign':'left'}}>
                    <span>&emsp;{lawyer['name']==''? '______________' : lawyer['name']}<br/></span>
                    <span>&emsp;(Advocate)<br/></span>
                    <span className='lnformrows' id='lnlawyer1'>&emsp;{lawyer['id']==''? '______________' : lawyer['id']}</span>
                    </Row>
                </Container>
            </div> 
        </div>
    );
}

export default LegalNoticeHtml;