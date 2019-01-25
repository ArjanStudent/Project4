import {LitElement,html} from '@polymer/lit-element';

import '@polymer/iron-ajax/iron-ajax.js';
import { SharedStyles } from './shared-styles.js';

class SportContainer extends LitElement {





    render(){
        
    return html`
    <style>
            .o-article__container{
            display:grid;
            grid-template-columns: 25% 25% 25% 25%;
        }
        @media only screen and (max-width: 1140px ) {
            
            .o-article__container{
                grid-template-columns: auto auto auto;
            }

        }
        @media only screen and (max-width: 760px ) {
            .o-article__container{
                grid-template-columns: auto auto;
            }
        }
        @media only screen and (max-width: 480px ) {
            .o-article__container{
                grid-template-columns: 100%;
                
            }
        }
        </style>
        <div class="o-article__container">
            <sport-article></sport-article>
            <sport-article></sport-article>
            <sport-article></sport-article>
            <sport-article></sport-article>
            <sport-article></sport-article>
            <sport-article></sport-article>
            <sport-article></sport-article>
            <sport-article></sport-article>
        </div>
    `
    }
}




customElements.define('sport-container', SportContainer);