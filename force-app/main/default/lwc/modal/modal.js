import { LightningElement, api } from "lwc";

export default class Modal extends LightningElement {
    isModalOpen = false;

    /**
     * @type {number | undefined} px
     */
    @api width;

    /**
     * @type {boolean}
     */
    @api hideClose = false;
    get _hideClose() {
        return this.toBoolean(this.hideClose);
    }

    /**
     * @type {boolean}
     */
    @api hideHeader = false;
    get _hideHeader() {
        return this.toBoolean(this.hideHeader);
    }

    /**
     * @type {boolean}
     */
    @api hideFooter = false;
    get _hideFooter() {
        return this.toBoolean(this.hideFooter);
    }

    @api
    open() {
        this.isModalOpen = true;
    }

    @api
    close() {
        this.isModalOpen = false;
    }

    get modalClass() {
        return `slds-modal ${this.isModalOpen ? "slds-fade-in-open" : ""}`;
    }

    get modalBackdropClass() {
        return `slds-backdrop ${this.isModalOpen ? "slds-backdrop_open" : ""}`;
    }

    get modalWidth() {
        return `width:${this.width ? this.width + "px" : "50%"} !important;`;
    }

    /**
     * Convert string boolean to boolean
     * @param {string | boolean} value
     * @returns
     */
    toBoolean(value) {
        return JSON.parse(typeof value === "string" ? value.toLowerCase() : value);
    }
}
