import {LitElement,html} from '@polymer/lit-element';

import '@polymer/iron-ajax/iron-ajax.js';
import { SharedStyles } from './shared-styles.js';

class NewsArticle extends LitElement {


    constructor(){
        super();
    }
    
    static get styles() {
    return [
      SharedStyles
        ];
    }

    render(){
        return html`
        <style>
        .c-article{
            width:90%;
            padding:0;
            margin: 1em 0 4em 0;
            background:#ffffff;

        }
        .c-article__headline{
            font-size:1.2em;
            font-weight:500;
            margin:1em;
        }
        .c-article__summary{
            font-size:.9em;
            margin:2em;
        }
        .c-article__banner{
            object-fit: cover;
            max-width: 100%;
            display:flex;
            justify-content: center;
        }
        .c-article__author{
            text-transform: capitalize;
            margin:1em 0 0 2em;
            color:$primary-color;
        }
        .c-article__time{
            margin:0 0 0 2em;
            color:#5092dc;
        }
        .c-article__link{
            text-decoration: none;
            font-weight: 500;
            font-size:.9em;
            color:#5092dc;
            cursor: pointer;
            display:flex;
            justify-content: center;
            align-content: flex-end;

        }
        .c-article-link__text{
            margin:1em 0 1.5em 0;
            width:65%;
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

        @media only screen and (max-width: 480px ) {
            .c-article{
                width:100%;
            }

        }
        </style>
        <div class="c-article">
        <div class="c-article-img__container">
            <img src="https://static01.nyt.com/images/2019/01/25/briefing/01252019ambriefing-euro-promo/01252019ambriefing-euro-slide-MJG9-facebookJumbo.jpg"
             class="c-article__banner">
        </div>
        <div class="c-article__text">
            <h2 class="c-article__headline">Venezuela, U.S. Shutdown, Alex Salmond: Your Friday Briefing</h2>
            <p class="c-article__summary">A defaced mural of President Nicolás Maduro of Venezuela in Caracas on Thursday.</p>
            <div class ="c-article__published">
                <p class="c-article__author">Penn Bullock</p>
                <p class="c-article__time">13u14</p>
            </div>
        </div>
        <a to="/detail" class="c-article__link" @click.native="AddDetailPage(article)">
            <p class="c-article-link__text">Read more</p>
        </a>


    </div>
        `;
    }

}
    

customElements.define('news-article', NewsArticle);


        // <iron-ajax
        //     url="https://newsapi.org/v2/everything?domains=wsj.com,nytimes.com&pageSize=12&apiKey=b0145070169a472ab77e58a9693b196f"
        //     handle-as="json"
        //     lastresponse="{{articles}}"
        // </iron-ajax>
        // <iron-list items="[[articles.results]]" as="item" id="itemlist">
        //     <template>
        //         <div class="article">
        //             <p>[[item.title]]</p>
        //             <p>rdg</p>
        //     </template>
        // </iron-list>