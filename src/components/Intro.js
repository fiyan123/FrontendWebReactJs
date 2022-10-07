import { Button, Col, Container, Row} from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
			<Container className='text-white text-center d-flex justify-content-center align-items-center'>
				<Row>
					<Col>
						<div className='title'>" Saya Merhargai Kenyataan Bahwa Orang <br/>Telah Bekerja Keras Sepanjang Minggu Dan <br/>
												Ingin Pergi Ke Bioskop Pada Akhir Pekan<br/>Dan Dihibur." <br/>- Michael Moore
						</div>
					</Col>
				</Row>
			</Container>
		</div>
    )
}

export default Intro