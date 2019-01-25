

import {LitElement,html} from '@polymer/lit-element';

import '@polymer/iron-ajax/iron-ajax.js';
import { SharedStyles } from './shared-styles.js';

class HeadlineArticle extends LitElement {

    static get styles() {
    return [
      SharedStyles
        ];
    }

    render(){
        return html`
        <style>
        .c-headline{
            display:flex;
            width:100%;
            height:400px;
            margin:3em 0;
        }

        .c-headline__title{
            font-size:1.3em;
            bottom:0;
            font-weight:bold;
            margin:2em 1em 2em 1em;
        }
        .c-headline__description{
            margin:1.5em 1em 1.5em 2em;
        }
        .c-headline__banner{
            max-width:100%;
            max-height:400px;
            object-fit: cover;
        }
        .c-headline__text{
            display:flex;
            flex-direction: column;
            height:400px;
            background-color:#ffffff;
        }
        .c-article__link{
            text-decoration: none;
            font-weight: 500;
            font-size:.9em;
            color:#5092dc;
            cursor: pointer;    

        }
        .c-article-link__text{
            margin:3em 0 1.5em 2em;
            width:30%;
            padding:.8em 1em;
            border: 1px solid #5092dc;
            border-radius: 5px; 
            background-color: transparent;
            text-align: center;
            position: relative;
            bottom:0;
        }
        .c-article-link__text:hover{
            color:#ffffff;
            background-color: #5092dc;    
        }

        @media only screen and (max-width: 1400px ) {

            .c-headline__banner{
                max-width:40%;

            }
            .c-article-link__text{
                margin:1em 0 1em 2em;
            }

        }

        @media only screen and (max-width: 1200px ) {

            .c-headline__banner{
                max-width:35%;
            }

        }

        @media only screen and (max-width: 1140px ) {
            .c-headline__banner{
                max-width:30%;
            }

        }
        @media only screen and (max-width: 760px ) {
            .c-headline{
                height:300px;
            }
            .c-headline__banner{
                max-height:300px;

            }
            .c-headline__text{
                height:300px;

            }
            .c-headline__title{
                margin:1em;
            }
            .c-headline__description{
                margin:1em 1em 1em 1.5em;
            }


        }
        @media only screen and (max-width: 600px ) {
            .c-headline{
                flex-direction: column;
                height:auto;
            }
            .c-headline__banner{
                max-width:100%;
                height:200px;
            }

        }
        </style>

        <div class="c-headline">
        <img src="https://images.indianexpress.com/2019/01/ernst-759.jpg?w=759" class="c-headline__banner">
        <div class="c-headline__text">
            <h2 class="c-headline__title">Joni Ernst reveals sexual assault after divorce filings go public</h2>
            <p class="c-headline__description">This week Ernst, R-Iowa, said there was another element to her identity, one that came to light only after highly personal details related to her divorce inadvertently became public: She is a survivor of sexual assault.</p>
            <a to="/detail" class="c-article__link" @click.native="AddDetailPage(article)">
                <p class="c-article-link__text">Read more</p>
            </a>
        </div>
    </div>`
    }

}


customElements.define('headline-article', HeadlineArticle);