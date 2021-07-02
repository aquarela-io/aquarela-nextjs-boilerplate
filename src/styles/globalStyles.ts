import { createGlobalStyle } from 'styled-components'

import resetercss from '../../node_modules/reseter.css/src/styled-components/ts/reseter'

export const GlobalStyle = createGlobalStyle`
${resetercss}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth; 
}

:root {
    --test-variable: 'test'
}



@media (min-width: 1080px) {
  html {
    font-size: 87%;
    height: 100%;
    width: 100%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 85%;
    height: 100%;
    width: 100%;
  }
}

body {
  background: rgba(255, 255, 255, 0.911);
  flex-shrink: 0;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
}

#__next {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 0;
    height: 100%;
    width: 100%;
}


@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}

`
