
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Search , ListStars} from "react-bootstrap-icons";
import {Card} from "./components/card";
import {NavBar} from "./components/NavBar";
import data from "./Data/data";


function App() {
  return <>




      <header className={"d-flex bg-dark  justify-content-between align-items-center "}>
          <NavBar/>
      </header>

      <main>

          <div className={"d-flex  flex-wrap "}>
              {
                  data.products.map((items)=>{
                     return (
                         <Card name={items.name}  image={items.image} price={items.price} reviews={items.numReviews} category={items.category} />
                     )
                  })
              }
          </div>

      </main>

      <footer  >

      </footer>


  </>
}

export default App;
