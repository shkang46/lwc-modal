import { LightningElement } from "lwc";

export default class Example extends LightningElement {
    initialized = false;
    modal;

    renderedCallback() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;

        this.modal = this.template.querySelector("c-modal");
    }

    openModal() {
        this.modal.open();
    }

    closeModal() {
        this.modal.close();
    }

    handleSave() {
        console.log("foo");
    }
}
