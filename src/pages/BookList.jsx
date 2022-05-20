import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Card from '../component/Card';

function BookList () {
    return (
        <div className='text-center'>
            <Navbar />
            <div className="my-4">
                <h3 className="text-center">Book List</h3>
                <div className="d-flex flex-row mt-3">
                    <Card
                        imgSrc="https://images.tokopedia.net/img/cache/200-square/product-1/2019/7/15/3409756/3409756_2cf6a2ea-3d6f-440b-b46f-d2bc91ae727c_1500_1500.jpg"
                        imgAlt="Buku 1"
                        title="Pemrograman Web"
                        price="50.000"
                    />
                    <Card
                        imgSrc="https://images.tokopedia.net/img/cache/200-square/product-1/2019/7/4/27078387/27078387_f25c5b94-e70c-40c0-8489-e2fc3b84bab0_450_450"
                        imgAlt="Buku 2"
                        title="Pemrograman Java NetBeans"
                        price="64.000"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BookList;
