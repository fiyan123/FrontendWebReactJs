import Carousel from 'react-bootstrap/Carousel';

function Intro() {
  return (
    <Carousel fade>
    	<Carousel.Item>
			<img
				className="intro"
				src="https://img.freepik.com/premium-vector/movie-cinema-premiere-background_41737-251.jpg?w=2000"
				alt="First slide"
			/>
			<Carousel.Caption>
				<h2>"For me, the cinema is not a slice of life, but a piece of cake."</h2>
				<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			</Carousel.Caption>
    	</Carousel.Item>

		<Carousel.Item>
				<img
					className="intro"
					src="https://irclaims.com.au/wp-content/uploads/sites/15/2020/03/iStock-915697084.jpg"
					alt="Third slide"
				/>
			<Carousel.Caption>
				<h2>"The greatest thing you will ever learn is to love and be loved in return." - Moulin Rogue</h2>
				<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
			</Carousel.Caption>
		</Carousel.Item>
    </Carousel>
  );
}

export default Intro;