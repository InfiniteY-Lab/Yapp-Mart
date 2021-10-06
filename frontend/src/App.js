import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import TeamScreen from './screens/TeamScreen';
import ContactScreen from './screens/ContactScreen';
import CartScreen from './screens/CartScreen';
import ShippingScreen from './screens/ShippingScreen';
import NotFoundScreen from './screens/NotFoundScreen';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <Route path='/aboutus' component={AboutUsScreen} exact />
          <Route path='/team' component={TeamScreen} exact />
          <Route path='/contact' component={ContactScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/product/:id' component={ProductScreen} exact />
          <Route path='/cart/:id?' component={CartScreen} exact />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/shipping' component={ShippingScreen} exact />
          <Route path='/*' component={NotFoundScreen} />

        </Container>
      </main>
      <Footer />
    </Router>

  );
}

export default App;
