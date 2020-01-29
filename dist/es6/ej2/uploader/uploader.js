var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { Uploader } from '@syncfusion/ej2-inputs';
let Ej2Uploader = class Ej2Uploader extends Ej2WidgetBase {
    constructor(element) {
        super(Uploader);
        this.isEditor = true;
        this.element = element;
    }
};
Ej2Uploader = __decorate([
    customAttribute(`${constants.ej2AttributePrefix}uploader`),
    generateBindables(constants.ej2ElementPrefix + 'Uploader', ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template'], [], null, null),
    inject(Element)
], Ej2Uploader);
export { Ej2Uploader };
