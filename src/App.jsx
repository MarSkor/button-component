import React from 'react'
import Navbar from './components/Navbar';
import Button from './components/Button';
import './styles/main.scss'
import Footer from './components/Footer';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <main className='container'>

        <section className="section-one wrap">

          <div className="btn-wrap">
            <h3>&lt;Button /&gt;</h3>
            <Button type="button" variant="default" shadow="md">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&:hover, &:focus</h3>
            <Button type="button" variant="default active" shadow="md">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button variant="outline"/&gt;</h3>
            <Button type="button" variant="outline" shadow="none">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&:hover, &:focus</h3>
            <Button type="button" variant="outline active" shadow="none">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button variant="text"/&gt;</h3>
            <Button type="button" variant="text" shadow="none">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&:hover, &:focus</h3>
            <Button type="button" variant="text active" shadow="none">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button disableShadow/&gt;</h3>
            <Button type="button" variant="primary" shadow="none">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button disabled/&gt;</h3>
            <Button isDisabled={true} type="button" variant="default active" shadow="none">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button variant="text" disabled/&gt;</h3>
            <Button isDisabled={true}type="button" variant="text" shadow="none">
              Default
            </Button>
          </div>
        </section>

        <section className="section-two wrap">
          <div className="btn-wrap">
            <h3>&lt;Button startIcon="local_grocery_store"/&gt;</h3>
            <Button type="button" variant="primary" shadow="md"
            icon={"add_shopping_cart"} iconPosition="start"
            >
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button endIcon="local_grocery_store"/&gt;</h3>
            <Button type="button" variant="primary" shadow="md" 
            icon={"add_shopping_cart"} iconPosition="end"
            >
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button endIcon="favorite"/&gt;</h3>
            <Button type="button" variant="primary" shadow="md" 
            icon={"favorite"} iconPosition="start"
            >
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button endIcon="delete"/&gt;</h3>
            <Button type="button" variant="primary" shadow="md" 
            icon={"delete"} iconPosition="end"
            >
              Default
            </Button>
          </div>
        </section>

        <section className='section-tree wrap'>
          <div className="btn-wrap">
            <h3>&lt;Button size="sm"/&gt;</h3>
            <Button type="button" variant="primary" shadow="md" size="sm">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button size="md"/&gt;</h3>
            <Button type="button" variant="primary" shadow="md" size="md">
              Default
            </Button>
          </div>

          <div className="btn-wrap">
            <h3>&lt;Button size="lg"/&gt;</h3>
            <Button type="button" variant="primary" shadow="md" size="lg">
              Default
            </Button>
          </div>
        </section>

        <section className='section-four wrap'>

          <div className="btn-default-wrap btn-group">
            <div className="btn-wrap">
              <h3>&lt;Button color="default"/&gt;</h3>
              <Button type="button" variant="default" shadow="md" >
                Default
              </Button>
            </div>

            <div className="btn-wrap">
              <h3>&:hover, &:focus</h3>
              <Button type="button" variant="default active" shadow="md" >
                Default
              </Button>
            </div>  
          </div>

          <div className="btn-primary-wrap btn-group">
            <div className="btn-wrap">
              <h3>&lt;Button color="primary"/&gt;</h3>
              <Button type="button" variant="primary" shadow="md" >
                Primary
              </Button>
            </div>

            <div className="btn-wrap">
            <h3>&:hover, &:focus</h3>
              <Button type="button" variant="primary active" shadow="md" >
                Primary
              </Button>
            </div>
          </div>

          <div className="btn-primary-wrap btn-group">
            <div className="btn-wrap">
              <h3>&lt;Button color="secondary"/&gt;</h3>
              <Button type="button" variant="secondary" shadow="md" >
                Secondary
              </Button>
            </div>

            <div className="btn-wrap">
              <h3>&:hover, &:focus</h3>
              <Button type="button" variant="secondary active" shadow="md" >
                Secondary
              </Button>
            </div>
          </div>

          <div className="btn-primary-wrap btn-group">
            <div className="btn-wrap">
              <h3>&lt;Button color="danger"/&gt;</h3>
              <Button type="button" variant="danger" shadow="md" >
                Default
              </Button>
            </div>
            
            <div className="btn-wrap">
              <h3>&:hover, &:focus</h3>
              <Button type="button" variant="danger active" shadow="md">
                Default
              </Button>
            </div>
          </div>

          

  

        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App
