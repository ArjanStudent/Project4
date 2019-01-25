import {LitElement,html} from '@polymer/lit-element';

import '@polymer/iron-ajax/iron-ajax.js';
import { SharedStyles } from './shared-styles.js';

class HeadlineContainer extends LitElement {

    static get styles() {
    return [
      SharedStyles
        ];
    }

    render(){
        return html`
            <div>
                <headline-article></headline-article>
            </div>
        `
    }

}


customElements.define('headline-container', HeadlineContainer);