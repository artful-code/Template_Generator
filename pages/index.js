import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Chooser from '../components/chooser';
import { Col,Row,Form,Button, Container } from 'react-bootstrap'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Legal Paper Generator</title>
        <meta name="description" content="Used to generate legal papers automatically" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container style={{'height':'100vh','textAlign':'center','paddingTop':'30vh'}}>
        <Row>
          <Col style={{'marginBottom':'5vh'}}>
            <Link href='/legalNoticeTemplate'>
              <Button variant="success" style={{'fontWeight':'bolder','fontSize':'24px','padding':'6vh'}}>
                  Consumer Legal<br/>Notice Template
              </Button>
            </Link>
          </Col>
          <Col>
            <Link href='/legalNoticeTemplate'>
              <Button variant="success" style={{'fontWeight':'bolder','fontSize':'24px','padding':'6vh'}}>
                  Insurance Legal<br/>Notice Template
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>

    </div>
  )
}
