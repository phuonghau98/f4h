import React from 'react'
import { Carousel, Row, Col } from 'antd'
import './style.css'

class F4HCarousel extends React.Component {
  render () {
    const main = []
    const sub1 = []
    const sub2 = []
    const itmStyle={ backgroundSize: 'cover', backgroundPosition: 'center center' }
    for (let i = 1; i < 6; i++) {
      main.push(<div key={i}><div style={{ height: 500, background: `url('/images/${i}.jpg')`, ...itmStyle }} key={`/images/${i}.jpg`} >Hinh 1</div></div>)
      sub1.push(<div key={5+i}><div style={{ height: 250, background: `url('/images/${5 +i}.jpg')`, ...itmStyle }} key={`/images/${i}.jpg`} >Hinh 1</div></div>)
      sub2.push(<div key={10+i}><div style={{ height:250, background: `url('/images/${10 + i}.jpg')`, ...itmStyle }} key={`/images/${i}.jpg`} >Hinh 1</div></div>)
      // sub2.push(<img src={`/images/${10 + i}.jpg`} key={`/images/${10 + i}.jpg`} alt='' />)
    }
    return (
      <Row style={{ marginTop: 80 }}>
        <Col span={16}>
          <Carousel speed={1000} autoplay className='f4hcarousel'>
            {main}
          </Carousel>
        </Col>
        <Col span={8}>
          <Carousel speed={600} autoplay className='f4hcarousel'>
            {sub1}
          </Carousel>
          <Carousel speed={550} autoplay className='f4hcarousel'>
            {sub2}
          </Carousel>
        </Col>
      </Row>
    )
  }
}

export default F4HCarousel
