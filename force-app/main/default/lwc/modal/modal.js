import { LightningElement, api } from "lwc";

export default class Modal extends LightningElement {
    /**************************************************
     * Public
     **************************************************/

    /**
     * @type {number | string | undefined}
     */
    _width;
    @api
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = typeof value === "number" ? value + "px" : value;
    }

    /**
     * @type {boolean}
     */
    _hideClose = false;
    @api
    get hideClose() {
        return this._hideClose;
    }
    set hideClose(value) {
        this._hideClose = this.toBoolean(value);
    }

    /**
     * @type {boolean}
     */
    _hideHeader = false;
    @api
    get hideHeader() {
        return this._hideHeader;
    }
    set hideHeader(value) {
        this._hideClose = this.toBoolean(value);
    }

    /**
     * @type {boolean}
     */
    _hideFooter = false;
    @api
    get hideFooter() {
        return this._hideFooter;
    }
    set hideFooter(value) {
        this._hideFooter = this.toBoolean(value);
    }

    /**
     * Open the modal
     */
    @api open() {
        this._isModalOpen = true;
    }

    /**
     * Close the modal
     */
    @api close() {
        this._isModalOpen = false;
    }

    /**************************************************
     * Private
     **************************************************/

    _isModalOpen = false;

    get modalClass() {
        return `slds-modal ${this._isModalOpen ? "slds-fade-in-open" : ""}`;
    }

    get modalBackdropClass() {
        return `slds-backdrop ${this._isModalOpen ? "slds-backdrop_open" : ""}`;
    }

    get modalWidth() {
        return `width:${this._width ? this._width : "50%"} !important;`;
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
