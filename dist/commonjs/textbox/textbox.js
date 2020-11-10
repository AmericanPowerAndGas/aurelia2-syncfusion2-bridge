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
exports.TextBoxComponent = exports.twoWays = exports.inputs = void 0;
const constants_1 = require("../common/constants");
const decorators_1 = require("../common/decorators");
const common_1 = require("../common/common");
const ej2_inputs_1 = require("@syncfusion/ej2-inputs");
const component_base_1 = require("../common/component-base");
exports.inputs = ['autocomplete', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'multiline', 'placeholder', 'readonly', 'showClearButton', 'type', 'value', 'width'];
exports.twoWays = ['value'];
let TextBoxComponent = class TextBoxComponent extends ej2_inputs_1.TextBox {
    constructor(element) {
        super();
        this.element = element;
        this.addTwoWay.call(this, exports.twoWays);
    }
};
TextBoxComponent = __decorate([
    common_1.customAttribute(`${constants_1.constants.ej2AttributePrefix}text-box`),
    decorators_1.generateBindables(constants_1.constants.ej2ElementPrefix + 'TextBox', exports.inputs, exports.twoWays, null, null),
    common_1.inject(Element),
    decorators_1.componentMixins([component_base_1.ComponentBase]),
    __metadata("design:paramtypes", [Object])
], TextBoxComponent);
exports.TextBoxComponent = TextBoxComponent;

//# sourceMappingURL=textbox.js.map
