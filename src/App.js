import React, { Component, Fragment } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';

import reactImg from './react.svg';
import angularImg from './angular.svg';
import javascriptImg from './javascript.svg';
import catImg from './cat.svg';
import skypeImg from './skype.png';
import mailImg from './mail.svg';
import './App.css';

const Header = () => (
  <header className="App-header">
    <p style={{
      display: 'flex',
      alignItems: 'center',
    }}>
      <img src={skypeImg} alt="skype" width="25" />
      &nbsp;webit.site
    </p>

    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <img src={mailImg} alt="mail" width="25" />
        &nbsp;<a href="mailto:am@webit.site">am@webit.site</a>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <img src={mailImg} alt="mail" width="25" />
        &nbsp;<a href="mailto:vm@webit.site">vm@webit.site</a>
      </div>
    </div>

    <p>
      + (380) 93 851 - 03 - 69
      <br />
      + (380) 93 654 - 39 - 67
    </p>
  </header>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <BrowserRouter>
          <section className="App-body">
            <section className="App-title-container">
              <Link to="/">
                <h1 className="App-title text">
                  webit <sub className="sub">site</sub>
                </h1> 
              </Link>
            </section>

            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
          </section>
        </BrowserRouter>
      </div>
    );
  }
}

function Home() {
  return (
    <Fragment>
      <section>
        <ul className="weare-list">
          <li>
            developing client side applications
          </li>

          <li>
            making user interfaces
          </li>
        </ul>
      </section>

      <section className="frameworks-container">
        <img src={javascriptImg} alt="js" />
        <img src={angularImg} alt="ang" />
        <img src={reactImg} alt="react" />
        <p style={{
          fontSize: '1rem',
        }}>
        </p>
      </section>

      <section style={{ fontSize: '1.5rem' }}>
        <Link to="/portfolio" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span>
            Who we are?
          </span>
          <img src={catImg} alt="cat" width="120" height="120" />
        </Link>
      </section>
    </Fragment>
  );
}

function Portfolio() {
  return (
    <section style={{
      display: 'flex',
      flexDirectin: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      fontSize: '.7em',
    }}>
      <div>
        <p>
          We are building a team of professionals, experienced in specific software technologies. Senior and junior specialists are working together to achive better productivity and results. Our team involve scientific stuff to provide lectures of specific theme we are interesting in.
        </p>
      </div>

      <div>
        <h4 style={{ marginBottom: 10 }}>
          Antonina, CEO
        </h4>

        <p style={{ marginBottom: 10, marginTop: 10 }}>
          Business manager.
        </p>

        <div>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
            <img src={skypeImg} alt="skype" width="25" />
            &nbsp;webit.site
          </p>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={mailImg} alt="mail" width="25" />
              &nbsp;<a href="mailto:am@webit.site">am@webit.site</a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: 10 }}>
          Valerii, CTO
        </h4>
        <p style={{ marginBottom: 10, marginTop: 10 }}>
          Software engineer. Experienced in client side application development
        </p>

        <div>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0 }}>
            <img src={skypeImg} alt="skype" width="25" />
            &nbsp;webit.site
          </p>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={mailImg} alt="mail" width="25" />
              &nbsp;<a href="mailto:vm@webit.site">vm@webit.site</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
