/**
 * @module 		Modal
 * @extends 	LightningElement
 * @description	Custom modal component
 * @author 		shkang <shkang@i2max.co.kr>
 * @example
 *
 * <c-modal width="50%">
 *     <span slot="header"></span>
 *     <span slot="body"></span>
 *     <span slot="footer"></span>
 * <c-modal>
 */

/* --------------------------------------------------------------------------------------------------------
* Import
-------------------------------------------------------------------------------------------------------- */
import { LightningElement, api } from "lwc";

export default class Modal extends LightningElement {
    /* --------------------------------------------------------------------------------------------------------
	* Public Property
	-------------------------------------------------------------------------------------------------------- */
    /**
     * Modal width
     *
     * @public
     * @type {string}
     * @param {number|string} value
     */
    @api
    set width(value) {
        this._width = typeof value === "number" ? value + "px" : value;
    }
    get width() {
        return this._width;
    }
    _width;

    /**
     * Hide close button
     *
     * @public
     * @type {boolean}
     * @param {boolean|string} value
     */
    @api
    set hideClose(value) {
        this._hideClose = this.toBoolean(value);
    }
    get hideClose() {
        return this._hideClose;
    }
    _hideClose = false;

    /**
     * Hide modal header
     *
     * @public
     * @type {boolean}
     * @param {boolean|string} value
     */
    @api
    set hideHeader(value) {
        this._hideHeader = this.toBoolean(value);
    }
    get hideHeader() {
        return this._hideHeader;
    }
    _hideHeader = false;

    /**
     * Hide modal footer
     *
     * @public
     * @type {boolean}
     * @param {boolean|string} value
     */
    @api
    set hideFooter(value) {
        this._hideFooter = this.toBoolean(value);
    }
    get hideFooter() {
        return this._hideFooter;
    }
    _hideFooter = false;

    /**
     * Open modal
     *
     * @public
     * @method
     */
    @api open() {
        this._isModalOpen = true;

        window.addEventListener("keydown", this._keyDownHandler);
    }

    /**
     * Fire close event then close modal
     *
     * @public
     * @method
     * @fires module:Modal~close
     */
    @api close() {
        /**
         * @event module:Modal~close
         */
        this.dispatchEvent(new CustomEvent("close"));

        window.removeEventListener("keydown", this._keyDownHandler);

        this._isModalOpen = false;
    }

    /* --------------------------------------------------------------------------------------------------------
	* Private Property
	-------------------------------------------------------------------------------------------------------- */
    _isModalOpen = false;
    _isRendered = false;
    _keyDownHandler = this.handleKeyDown.bind(this);

    /* --------------------------------------------------------------------------------------------------------
	* Getter / Setter
	-------------------------------------------------------------------------------------------------------- */
    get modalClass() {
        return `slds-modal ${this._isModalOpen ? "slds-fade-in-open" : ""}`;
    }

    get modalBackdropClass() {
        return `slds-backdrop ${this._isModalOpen ? "slds-backdrop_open" : ""}`;
    }

    get modalWidth() {
        return `width:${this._width ? this._width : "50%"} !important;`;
    }

    /* --------------------------------------------------------------------------------------------------------
	* Event Handler
	-------------------------------------------------------------------------------------------------------- */
    handleCloseClick() {
        this.close();
    }

    handleKeyDown(event) {
        if (event.keyCode === 27) {
            // ESC to close
            this.close();
        }
    }

    handleBodyKeyDown(event) {
        // prevent ESC to close while focusing the body elements
        event.stopPropagation();
    }

    /* --------------------------------------------------------------------------------------------------------
	* Utility
	-------------------------------------------------------------------------------------------------------- */
    /**
     * Convert boolean like string to actual boolean
     *
     * @private
     * @method
     * @param {boolean|string} value `boolean` or boolean like `string`
     * @returns {boolean}
     */
    toBoolean(value) {
        return JSON.parse(typeof value === "string" ? value.toLowerCase() : value);
    }
}
