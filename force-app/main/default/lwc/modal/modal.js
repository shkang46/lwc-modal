import { LightningElement, api } from "lwc";

/**
 * @alias 		Modal
 * @extends 	LightningElement
 * @classdesc 	Custom modal component
 * @author 		shkang <shkang@i2max.co.kr>
 * @hideconstructor
 * @example
 * <c-modal width="50%">
 *     <span slot="header"></span>
 *     <span slot="body"></span>
 *     <span slot="footer"></span>
 * <c-modal>
 */
export default class Modal extends LightningElement {
    /**************************************************
     * Public
     **************************************************/

    /**
     * @private
     * @type {string | undefined}
     */
    _width;

    /**
     * Modal width
     * @memberof Modal
     * @public
     * @type {string}
     */
    @api
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = typeof value === "number" ? value + "px" : value;
    }

    /**
     * @private
     * @type {boolean}
     */
    _hideClose = false;

    /**
     * @memberof Modal
     * @type {boolean}
     */
    @api
    get hideClose() {
        return this._hideClose;
    }
    set hideClose(value) {
        this._hideClose = this.toBoolean(value);
    }

    /**
     * @private
     * @type {boolean}
     */
    _hideHeader = false;

    /**
     * @memberof Modal
     * @public
     * @type {boolean}
     */
    @api
    get hideHeader() {
        return this._hideHeader;
    }
    set hideHeader(value) {
        this._hideHeader = this.toBoolean(value);
    }

    /**
     * @private
     * @type {boolean}
     */
    _hideFooter = false;

    /**
     * @memberof Modal
     * @public
     * @type {boolean}
     */
    @api
    get hideFooter() {
        return this._hideFooter;
    }
    set hideFooter(value) {
        this._hideFooter = this.toBoolean(value);
    }

    /**
     * Open the modal
     * @memberof Modal
     * @public
     * @example
     * this.template.querySelector("c-modal").open();
     */
    @api open() {
        this._isModalOpen = true;
    }

    /**
     * Close the modal
     * @memberof Modal
     * @public
     * @author shkang <shkang@i2max.co.kr>
     * @example
     * this.template.querySelector("c-modal").close();
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
     * Convert boolean like string to actual boolean
     * @memberof Modal
     * @private
     * @param {string | boolean} value boolean like string
     * @returns {boolean}
     */
    toBoolean(value) {
        return JSON.parse(typeof value === "string" ? value.toLowerCase() : value);
    }
}
