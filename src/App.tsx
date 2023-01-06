import React from 'react';
import './App.css';




function App()  {
  return (
      <div className='app-wrapper'>
          <header className='header'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'/>
          </header>
          <nav className='nav'>
              <div><a>Profile</a></div>
              <div><a>Messages</a></div>
              <div><a>News</a></div>
              <div><a>Music</a></div>
              <div><a>Settings</a></div>
          </nav>
          <div className='content'>
              <div>
                  <img src="https://img.freepik.com/premium-vector/background-in-a-matrix-style-falling-random-numbers-green-is-dominant-color_257312-85.jpg?w=2000"/>
              </div>
              <div>
                  ava + decription
              </div>
              <div>
                  My posts
                  <div>
                      New post
                  </div>
                  <div>
                      <div>
                          Post 1
                      </div>
                      <div>
                          Post 2
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}




export default App;
