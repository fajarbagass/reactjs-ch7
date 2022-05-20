import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Carousel } from 'react-bootstrap'; 
import "../App.css";

function Home () {
    return (
        <div className='bg-light'>
            <Navbar />
            <Carousel>
                <Carousel.Item className="text-center" interval={1500}>
                    <img className="Carousel" src="https://s3.envato.com/files/230574712/571A7596.jpg" alt="img_carousel_1" />
                    <Carousel.Caption>
                        <h2>BookStore</h2>
                        <p>Books, Dictionaries, Novels, and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-center" interval={1500}>
                    <img className="Carousel" src="https://humanities.princeton.edu/wp-content/uploads/2021/12/book-stack.jpg" alt="img_carousel_2" />
                    <Carousel.Caption className="text-black">
                        <h2>BookStore</h2>
                        <p>Books, Dictionaries, Novels, and more</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="main text-center py-5">
                <h1>Welcome to BookStore</h1>
                <a href="/books">
                    <button type='button'>View Book List</button>
                </a>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;
