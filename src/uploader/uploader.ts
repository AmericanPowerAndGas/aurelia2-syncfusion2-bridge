import { constants } from '../common/constants';
import { generateBindables, componentMixins } from '../common/decorators';
import { customAttribute, inject } from '../common/common';
import { IComponentBase, ComponentBase } from '../common/component-base';
import { Uploader } from '@syncfusion/ej2-inputs';

export const inputs: string[] = ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template'];
export const twoWays: string[] = [];

@customAttribute(`${constants.ej2AttributePrefix}uploader`)
@generateBindables(constants.ej2ElementPrefix + 'Uploader', inputs, twoWays, null, null)
@inject(Element)
@componentMixins([ComponentBase])
export class UploaderComponent extends Uploader implements IComponentBase {

    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, twoWays);
    }
    public addTwoWay: (propList: string[]) => void;
}
