import {
    LitElement,
    html
} from '@polymer/lit-element';


class SportView extends LitElement {

    render(){
        return html`
        <style>
        .o-home{
            width:80%;
            margin:0 auto;
        }

        @media only screen and (max-width: 1140px ) {
            
            .o-home{
                width:90%;
            }

        }
        </style>
        <div class="o-home">
            <sport-container></sport-container>
        </div>
        `
    }


}

customElements.define('sport-view', SportView);