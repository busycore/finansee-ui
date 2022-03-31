import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
      --background:#EBEBEB;
      --red:#EE2E31;
      --blue:#004E98;
      --green:#56876D;
      --attention:#FF6700;

      --blue-light:#3A6EA5;

      --text-title:#3D3D3D;
      --text-light:#F5F5F5;

      --text-body: #292929;


      --shape:#fff;
    }
* {
      margin:0 ;
      padding:0 ;
      box-sizing: border-box ;
    }

/* These are for better accessibility with different screens
*/
html{
      @media(max-width:1080px){
        font-size: 93.75%;
      }
      @media(max-width:720px){
        font-size: 87.5%;
      }
    }

    
    body , input , textarea , button{
      background: var(--background);
      font-family: 'Red Hat Mono', monospace;
      font-weight:400 ;
    }

    h1 ,h2, h3, h4, h5, h6, strong{
      font-weight: 600;
    }

    button{
      cursor: pointer;
    }

    [disabled]{
      opacity:0.6 ;
      cursor: not-allowed;
    }

`;
