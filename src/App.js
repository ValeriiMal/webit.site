import React, { Component } from 'react';
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

    <p>
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
    </p>

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

        <section className="App-body">
          <section className="App-title-container">
            <h1 className="App-title text">
              webit <sub className="sub">site</sub>
            </h1> 
          </section>

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
            <a href="/portfolio" style={{
              display: 'flex',
              alignItems: 'center',
            }}>
              <span>
                Who we are?
              </span>
              <img src={catImg} alt="cat" width="120" height="120" />
            </a>
          </section>
        </section>
      </div>
    );
  }
}

export default App;
