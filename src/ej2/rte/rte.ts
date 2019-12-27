import {Ej2WidgetBase} from '../../common/ej2-widget-base';
import {constants} from '../../common/constants';
import {generateBindables} from '../../common/decorators';
import { customAttribute, inject } from '../../common/common';
import { RichTextEditor, Toolbar as rteToolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(rteToolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table);

@customAttribute(`${constants.ej2AttributePrefix}rte`)
@generateBindables(constants.ej2ElementPrefix + 'RTE', ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'], [], null,null)
@inject(Element)
export class ej2Rte extends Ej2WidgetBase {    
  constructor(element) {
      super(RichTextEditor);
      this.element = element;      
    }    
}

