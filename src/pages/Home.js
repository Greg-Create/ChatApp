import "../App.css"
import Header from "../components/header/Header"
import Front from "../components/front/Front"
import Categories from '../components/categories/Categories';
import Carouselle from '../components/carouselle/Carouselle';



function Home() {
    return(
        <div className="App">
        <Header />
        <Front />
        <Categories />
        <Carouselle title={"Popular"} />
        <Carouselle title={"Recent"} />
        <Carouselle title={"Movies"} />
        <Carouselle title={"Bipasses"} />
        </div>

    )
}

export default Home