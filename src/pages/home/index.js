import Card from '../../components/card'
import { products } from '../../db/data'
function Home() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card data={products} />
                </div>
            </div>
        </div>
    )
}

export default Home;