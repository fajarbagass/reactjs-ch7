import { 
    Carousel,
    Container,
    Button,
    Navbar
} from 'react-bootstrap'; 
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <NavBar />
            <Carousel>
                <Carousel.Item className="text-center" interval={1500}>
                    <img 
                        className="Carousel w-100 h-25"
                        src="https://s26162.pcdn.co/wp-content/uploads/2022/01/self-help-books.jpg"
                        alt="img_carousel_1" 
                    />
                    <Carousel.Caption>
                        <h1>BookStore</h1>
                        <p>Books, Dictionaries, Novels, and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1500}>
                    <img 
                        className="Carousel w-100 h-25" 
                        src="https://10xceo.com/wp-content/uploads/15-esesential-800x400.jpg"
                        alt="img_carousel_2" 
                    />
                    <Carousel.Caption>
                        <h1>BookStore</h1>
                        <p>Books, Dictionaries, Novels, and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container className="text-center py-5">
                <h1>Welcome to BookStore</h1>
                <Button href="/books" variant="primary">View Book List</Button>
            </Container>
            <Footer />
        </div>
    )
}

export default Home;