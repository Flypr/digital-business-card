import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import twitterSvg from './assets/twitter.svg';
import facebookSvg from './assets/facebook.svg';
import instagramSvg from './assets/instagram.svg';
import githubSvg from './assets/github.svg';

export { twitterSvg, facebookSvg, instagramSvg, githubSvg }

ReactDOM.createRoot(document.getElementById('root')).render(<App />)