import {LitElement,html} from '@polymer/lit-element';

import { SharedStyles } from './shared-styles.js';
class NewsHeader extends LitElement {
    
    static get styles() {
    return [
      SharedStyles
        ];
    }

    render() {
        return html`
        <style>
        .c-header{
            background-color:#ffffff;
            width:100%;
            display:flex;
            align-items:center;
            height:3em;
        }
        .c-header-logo__text{
            text-transform: uppercase;
            font-weight:700;
            width:30%;
        }
        .c-header__row{
            background-color:#ffffff;
            width:100%;
            display:flex;
            align-items:center;
            margin:0 5em;
            height:3em;
        }
        .c-header-row__text:hover{
            color:#5092dc;
        }
        .c-header-row__c{
            color:#5092dc;
        }
        .c-header-row__object{
            width:10%;
            text-transform: uppercase;
            font-weight: 700;
            height:100%;
            display:flex;
            align-items:center;
            justify-content: center;
        }
        .c-header-row__icon{
            width:30%;
            justify-content: flex-end;
        }
        .c-header a{
            text-decoration: none;
            color: #18191e;
        }
        .c-header-row__svg:hover{
            fill: #5092dc;
        }   
        .c-header .router-link-exact-active {
            border-bottom:2px solid #5092dc;
            color: #5092dc;
            fill: #5092dc;
        }
        .c-header .c-header-row__icon{
            border:none;
        }
        .c-header-row__search{
            display:none;
        }
        .c-header__wrapper{
            display:none;
            flex-direction: column;
            position: absolute;
            background-color: #5092dc;
            width: 100%;
            height: 100%;
            top: 0;
            right:0;
            z-index: 99;
        }
        .c-header-wrapper__link{
            padding:1em 0;
            align-self:flex-end;
            margin-right:2em;

            fill:#FFFFFF;
        }
        .c-header__wrapper a{
            color:#FFFFFF;
        }
        .c-header__wrapper .router-link-exact-active{
            color:#FFFFFF;
        }

        .c-header__mobilemenu{
            display:none;
        }
        @media only screen and (max-width: 1300px ) {
            .c-header-row__object{
                width:12%;
            }
            .c-header-logo__text{
                width:25%;
            }
            .c-header-row__icon{
                width:20%;
            }

        }
        @media only screen and (max-width: 1200px ) {
            .c-header-row__object{
                width:13%;
            }
            .c-header-logo__text{
                width:25%;
            }
            .c-header-row__icon{
                width:18%;
            }

        }

        @media only screen and (max-width: 1140px ) {
            .c-header-row__object{
                width:15%;
            }
            .c-header-logo__text{
                width:20%;
            }

        }

        @media only screen and (max-width: 1140px ) {
            .c-header-row__object{
                width:15%;
            }
            .c-header-logo__text{
                width:20%;
            }
            .c-header__row{
                margin:0 4em;

            }

        }
        @media only screen and (max-width: 860px ) {
            .c-header-row__object{
                width:20%;
            }
            .c-header-logo__text{
                width:20%;
            }
            .c-header-row__icon{
                width:15%;
            }
            .c-header__row{
                margin:0 3em;

            }

        }
        @media only screen and (max-width: 760px ) {
            .c-header{
                height:4em;
            }

            .c-header-logo__text{
                width:100%;
                padding:.5em 0;
                font-size:1.2em;
            }
            .c-header-row__link{
                display:none;
            }
            .c-header__mobilemenu{
                display:block;
            }
            .c-header__row{
                display:flex;
                justify-content: space-between;
            }
            .c-header__wrapper{
                width:20%;
            }
            .c-header .router-link-exact-active {
                border-bottom:none;
            }


        }
        @media only screen and (max-width: 600px ) {
            .c-header{
                height:5em;
            }
            .c-header-row__object{
                font-size:1em;
            }
            .c-header__wrapper{
                width:40%;
                top:0;
                right:0;

            }

        }
        @media only screen and (max-width: 480px ) {
            .c-header{
                height:4em;
            }

            .c-header__wrapper{
                width:45%;
                top:0;
                right:0;

            }
            .c-header-wrapper__link{
                margin-right:2em;
                font-size:1.1em;
            }

        }
        </style>
        <nav class="c-header">
            <div class="c-header__row">
                <div class="c-header-logo__text">               
                    <h2 class="c-header-logo-text__element"><span class="c-header-row__c">Compo</span>news</h2>
                </div>

                <a href="/" class="c-header-row__object c-header-row__link c-header-row__text">Home</a>
                <a href="/Category/Health" class="c-header-row__object c-header-row__link c-header-row__text">Health</a>
                <a href="/Category/Sports" class="c-header-row__object c-header-row__link c-header-row__text">Sports</a>
                <a href="/Category/Technology" class="c-header-row__object c-header-row__link c-header-row__text">Technology</a>
                <a href="/Search" class="c-header-row__object c-header-row__link c-header-row__icon">
                <svg  class="c-header-row__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="30px" height="30px">
                    <g id="surface1">
                    <path style=" " d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z "/>
                    </g>
                </svg>
                </a>
                <a to="/Search" class="c-header-row__object c-header-row__link c-header-row__search">Search</a>
                <div class="c-header__mobilemenu" id="mobilemenu" on-click="ShowMobileMenu">
                    <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" 
                    xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2
                    s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2
                        S29.104,22,28,22z"/>
                    </svg>
                </div>
                <div class="c-header__wrapper" id="mobilewrapper">
                    <div class="c-header__mobilemenu c-header-wrapper__link" id="mobilemenu" v-on:click="ShowMobileMenu">
                        <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" 
                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2
                        s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2
                            S29.104,22,28,22z"/>
                        </svg>
                    </div>
                    <a to="/" class="c-header-wrapper__link">Home</a>
                    <a to="/Category/Health" class="c-header-wrapper__link">Health</a>
                    <a to="/Category/Sports" class="c-header-wrapper__link">Sports</a>
                    <a to="/Category/Technology" class="c-header-wrapper__link">Technology</a>
                    <a to="/Search" class="c-header-wrapper__link">
                    <svg  class="c-header-row__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="30px" height="30px">
                        <g id="surface1">
                        <path style=" " d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z "/>
                        </g>
                    </svg>
                    </a>
                </div>
            </div>
        </nav>
        `;
    }
    ShowMobileMenu(){
            console.log("test");
            let mobilemenu = document.getElementById('mobilewrapper');
            if (mobilemenu.style.display === "none") {
                mobilemenu.style.display = "flex";
            } else {
                mobilemenu.style.display = "none";
            }
    }
}

customElements.define('news-header', NewsHeader);