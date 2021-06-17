import "./bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

import RegistrationForm from "./components/Login";
import Register from "./components/register";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Product from "./components/Product";

const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <h1>Welcome to eShop</h1>
                    {/* <HomeScreen /> */}
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/product/:id' component={ProductScreen} />
                    <Route path='/cart/:id?' component={CartScreen} />
                    <Route path='/login' component={RegistrationForm} />
                    <Route path='/register' component={Register} />
                </Container>
            </main>
            <Footer />
        </Router>
        
    );
};

export default App;
