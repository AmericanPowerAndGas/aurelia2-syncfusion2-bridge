"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RichTextEditorComponent = exports.twoWays = exports.inputs = void 0;
const constants_1 = require("../common/constants");
const decorators_1 = require("../common/decorators");
const common_1 = require("../common/common");
const component_base_1 = require("../common/component-base");
const ej2_richtexteditor_1 = require("@syncfusion/ej2-richtexteditor");
ej2_richtexteditor_1.RichTextEditor.Inject(ej2_richtexteditor_1.Toolbar, ej2_richtexteditor_1.Link, ej2_richtexteditor_1.Image, ej2_richtexteditor_1.Count, ej2_richtexteditor_1.HtmlEditor, ej2_richtexteditor_1.QuickToolbar, ej2_richtexteditor_1.Table);
exports.inputs = ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'];
exports.twoWays = ['value'];
let RichTextEditorComponent = class RichTextEditorComponent extends ej2_richtexteditor_1.RichTextEditor {
    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, exports.twoWays);
    }
};
RichTextEditorComponent = __decorate([
    common_1.customElement(`${constants_1.constants.ej2AttributePrefix}rich-text-editor`),
    decorators_1.generateBindables(constants_1.constants.ej2ElementPrefix + 'RichTextEditor', exports.inputs, exports.twoWays, null, null),
    common_1.inject(Element),
    decorators_1.componentMixins([component_base_1.ComponentBase]),
    __metadata("design:paramtypes", [Object])
], RichTextEditorComponent);
exports.RichTextEditorComponent = RichTextEditorComponent;

//# sourceMappingURL=richtexteditor.js.map
