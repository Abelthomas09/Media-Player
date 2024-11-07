import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/img1.png'
import feature1 from '../assets/m1.webp'
import feature2 from '../assets/m2.webp'
import feature3 from '../assets/m3.webp'
import { Card } from 'react-bootstrap'

const Landing = () => {
  return (
    <div style={{ padding: '100px' }} className='container'>
      {/* landig part */}
      <div style={{marginTop:'100px',marginBottom:'120px'}} className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className="text-warning">Media Player</span></h3>
          <p style={{ textAlign: 'justify' }}>A video player typically includes features like play, pause, fast-forward, rewind, volume control, and full-screen mode. Advanced players may also support features like subtitles, multiple playback speeds, video quality adjustment, and picture-in-picture mode.</p>
          <Link to={'/home'} className="btn btn-info">Get Started</Link>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
          <img className='img-fluid ms-5' src={landingImg} alt="Landing Img" />
        </div>
      </div>
      {/* Features part */}
      <div className="my-5">
        <h3 className="text-center">Features</h3>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '22rem' }}>
              <Card.Img height={'300px'} variant="top" src={feature1} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can upload, view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '22rem' }}>
              <Card.Img height={'300px'} variant="top" src={feature2} />
              <Card.Body>
                <Card.Title>Categorise Videos</Card.Title>
                <Card.Text>
                  Users can categorise the videos by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div className="col-lg-4">
            <Card className='p-2' style={{ width: '22rem' }}>
              <Card.Img height={'300px'} variant="top" src={feature3} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                  Users can manage the watch history of all videos.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

        </div>
      </div>
      {/* last */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-4">
          <h3 className="text-warning">Simple, Fast and Powerful</h3>
          <p style={{ textAlign: 'justify' }}> <span className="fs-5 fw-bolder">Play Everything</span> :Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iusto magnam beatae numquam accusantium dolores alias, quas harum fuga.</p>
          <p style={{ textAlign: 'justify' }}> <span className="fs-5 fw-bolder">Play Everything</span> :Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iusto magnam beatae numquam accusantium dolores alias, quas harum fuga.</p>
          <p style={{ textAlign: 'justify' }}> <span className="fs-5 fw-bolder">Play Everything</span> :Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit iusto magnam beatae numquam accusantium dolores alias, quas harum fuga.</p>
        </div>
        <div className="col"></div>
        <div className="col-lg-6">
        <iframe width="100%" height="340" src="https://www.youtube.com/embed/ulyrbF6T9yY?si=qMbIshDWMZgo_-3S" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>        </div>
      </div>
    </div>

  )
}

export default Landing