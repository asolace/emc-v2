import React from 'react';
import { Row, Col } from 'reactstrap';
import ScrollToTop from 'react-scroll-up';
import { Background, Parallax } from 'react-parallax';

import uparrow from '../photos/uparrow.png';
import image1 from '../photos/biblecandleedited.JPG';
import image2 from '../photos/diversebiblestudy.jpg';
import image3 from '../photos/prayergroup.jpg';
import image4 from '../photos/seminarybook.jpg';
import image5 from '../photos/saturdaygroup.jpg';
import image6 from '../photos/family.jpeg';

const Fellowship = () => {
  return (
    <div className="f-page-background">

      <Parallax bgWidth={'100vw'} bgHeight={'850px'} bgImage={image1} strength={500}>
        <div className="f-intro-text">
          "They devoted themselves to the apostles' teaching and to
          fellowship, to the breaking of bread and to prayer" Acts 2:42 NIV
        </div>
      </Parallax>

      <Parallax strength={500}>
        <Background>
          <img className="f-bgimage" src={image2} alt="bgimg"/>
        </Background>
        <div className="f-container fg">
          <h1 className="f-header">Friends Gathering</h1>
          <Row className="f-row">
            <div className="f-colA">
              <Col>
                <div className="f-description">
                  <p>Friends gathering is a place where we welcome both Christians and non-Christians to share and learn about Jesus and the Bible.
                    We typically meet at either a member's home or at EMC and spend the time eating together, singing praise, reading the Word,
                    sharing what we learned, and praying together. Once in awhile we have an activity night which includes but is not limited to
                    movies, game night or bowling. It's also a chance for us to get to know each other more and build meaningful relationships so
                    come join us!
                  </p>
                </div>
              </Col>
            </div>
            <div className="f-colB">
              <Col>
                  <div className="f-info fg">
                    <table>
                      <tbody>
                        <tr>
                          <td><b>Time: </b></td>
                          <td>Thurs. & Fri. 7pm</td>
                        </tr>
                        <tr>
                          <td><b>Location: </b></td>
                          <td>Pastor Jaes Humble Abode & Church</td>
                        </tr>
                        <tr>
                          <td><b>Contact: </b></td>
                          <td>Pastor Pio</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
              </Col>
            </div>
          </Row>
        </div>
      </Parallax>

      <Parallax strength={500}>
        <Background>
          <img className="f-bgimage" src={image3} alt="bgimg"/>
        </Background>
        <div className="f-container pm">
          <h1 className="f-header">Prayer Meeting</h1>
          <Row className="f-row">
            <div className="f-colA">
              <Col>
                <div className="f-description">
                  <p>Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you
                    (1 Thessalonians 5:16-18). Prayer is essential in a Christians life in keeping our relationship with God alive and thriving.
                    Prayer meeting is an opportunity for us to pray for each other, have others pray for us, and even pray for our world. We need
                    God to work in our families, our friends, our homes, and our workplaces and together through prayer God does amazing things.
                  </p>
                </div>
              </Col>
            </div>
            <div className="f-colB">
              <Col>
                <div className="f-info pm">
                  <table>
                    <tbody>
                      <tr>
                        <td><b>Time: </b></td>
                        <td>Saturday 7pm</td>
                      </tr>
                      <tr>
                        <td><b>Location: </b></td>
                        <td>Church</td>
                      </tr>
                      <tr>
                        <td><b>Contact: </b></td>
                        <td>Lulu Lim</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Parallax>

      <Parallax strength={500}>
        <Background>
          <img className="f-bgimage" src={image4} alt="bgimg" />
        </Background>
        <div className="f-container tc">
          <h1 className="f-header">TEE Class</h1>
          <Row className="f-row">
            <div className="f-colA">
              <Col>
                <div className="f-description">
                  <p>TEE (Theological Education by Extension) is easy to learn and effective training for Christians of all levels to acquire systematic understanding of the Bible and to live out the life of Christ's disciples. The Word makes our daily lives more meaningful.
                  Strongly recommended for everyone who is interested in learning more about the bible!
                  </p>
                </div>
              </Col>
            </div>
            <div className="f-colB">
              <Col>
                <div className="f-info tc">
                  <table>
                    <tbody>
                      <tr>
                        <td><b>Time: </b></td>
                        <td>Sunday 11am</td>
                      </tr>
                      <tr>
                        <td><b>Location: </b></td>
                        <td>Church</td>
                      </tr>
                      <tr>
                        <td><b>Contact: </b></td>
                        <td>Jason Park</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Parallax>

      <Parallax strength={500}>
        <Background>
          <img className="f-bgimage" src={image5} alt="bgimg" />
        </Background>
        <div className="f-container sg">
          <h1 className="f-header">Saturday Group</h1>
          <Row className="f-row">
            <div className="f-colA">
              <Col>
                <div className="f-description">
                  <p>Saturday group is a safe and confidential place where both non-Christians and Christians come together to share about each others lives.
                    Life can bring many hardships and struggles and group is where one can find ears willing to listen and hearts that welcome. We are joyful
                    to say that through group many people have found healing and growth. Some of us have even taken it a step further and participated
                    in Healing Camps where troubled teens found guidance and support. Anyone is welcome to join!
                  </p>
                </div>
              </Col>
            </div>
            <div className="f-colB">
              <Col>
                <div className="f-info sg">
                  <table>
                    <tbody>
                      <tr>
                        <td><b>Time: </b></td>
                        <td>Saturday 5:30pm</td>
                      </tr>
                      <tr>
                        <td><b>Location: </b></td>
                        <td>Church</td>
                      </tr>
                      <tr>
                        <td><b>Contact: </b></td>
                        <td>Dr. Soo-Il Lee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Parallax>

      <Parallax strength={500}>
        <Background>
          <img className="f-bgimage" src={image6} alt="bgimg" />
        </Background>
        <div className="f-container pg">
          <h1 className="f-header">Parent Group</h1>
          <Row className="f-row">
            <div className="f-colA">
              <Col>
                <div className="f-description">
                  <p>EMC cooperates with Esther Ha foundation and offers its place for the weekly Parents class. As people learn about empathy, communication, and empowering, they also practice them through sharing and role play. They observe themselves how their characters are transformed, bearing more fruits of Holy Spirit.
                  Please keep in mind that the classes run in Korean.
                  </p>
                </div>
              </Col>
            </div>
            <div className="f-colB">
              <Col>
                <div className="f-info pg">
                  <table>
                    <tbody>
                      <tr>
                        <td><b>Time: </b></td>
                        <td>Monday</td>
                      </tr>
                      <tr>
                        <td><b>Location: </b></td>
                        <td>Church</td>
                      </tr>
                      <tr>
                        <td><b>Contact: </b></td>
                        <td>Dr. Soo-Il Lee</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Parallax>

      <ScrollToTop showUnder={500}>
        <img className="f-button" alt="up arrow" src={ uparrow }></img>
      </ScrollToTop>
    </div>
  )
}

export default Fellowship
