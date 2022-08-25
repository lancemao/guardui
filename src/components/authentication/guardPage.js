import HLayoutElement from "../hlayout.js";

export default class GuardPage extends HLayoutElement {

    constructor() {
        super();

        this.container.style.width = this.getAttribute('width') || '100%';
        this.container.style.height = this.getAttribute('height') || '100%';
        this.container.style.backgroundColor = this.getAttribute('backgroundColor') || '#F8F9FF';
        this.container.style.justifyContent = this.getAttribute('justifyContent') || 'center';
        this.container.style.alignItems = this.getAttribute('alignItems') || 'center';
    }
}

window.customElements.define('g-guard', GuardPage);