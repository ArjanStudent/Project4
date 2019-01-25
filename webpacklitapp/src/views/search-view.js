import {
    LitElement,
    html
} from '@polymer/lit-element';



class SearchView extends LitElement {



    render() {
        return html `
        <style>
        .o-home{
            width:80%;
            margin:0 auto;
        }
        <search-bar></search-bar>
        `;
    }
}

customElements.define('search-view', SearchView);