"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ej2ProgressButton = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ej2WidgetBase = require("../../common/ej2-widget-base");

var _constants = require("../../common/constants");

var _decorators = require("../../common/decorators");

var _common = require("../../common/common");

var _ej2Splitbuttons = require("@syncfusion/ej2-splitbuttons");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ej2ProgressButton = function (_Ej2WidgetBase) {
    _inherits(ej2ProgressButton, _Ej2WidgetBase);

    function ej2ProgressButton(element) {
        _classCallCheck(this, ej2ProgressButton);

        var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, _ej2Splitbuttons.ProgressButton));

        _this.element = element;
        return _this;
    }

    return ej2ProgressButton;
}(_ej2WidgetBase.Ej2WidgetBase);
exports.ej2ProgressButton = ej2ProgressButton = __decorate([(0, _common.customAttribute)(_constants.constants.ej2AttributePrefix + "progress-button"), (0, _decorators.generateBindables)(_constants.constants.ej2ElementPrefix + 'ProgressButton', ['animationSettings', 'content', 'cssClass', 'disabled', 'duration', 'enableHtmlSanitizer', 'enableProgress', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'spinSettings'], [], null, null), (0, _common.inject)(Element)], ej2ProgressButton);
exports.ej2ProgressButton = ej2ProgressButton;