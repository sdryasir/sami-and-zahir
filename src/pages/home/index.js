import Card from '../../components/card'
import { products } from '../../db/data'
function Home() {

    return (
        <div className="container">
            <div className="row">
                <Card data={products} />
            </div>
        </div>
    )
}

export default Home;