import { Ej2WidgetBase } from '../../common/ej2-widget-base';
import { constants } from '../../common/constants';
import { generateBindables } from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { Uploader } from '@syncfusion/ej2-inputs';

@customAttribute(`${constants.ej2AttributePrefix}uploader`)
@generateBindables(constants.ej2ElementPrefix + 'Uploader', ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template'], [], null, null)
@inject(Element)
export class Ej2Uploader extends Ej2WidgetBase {
    constructor(element) {
        super(Uploader);
        this.isEditor = true;
        this.element = element;
    }
}

