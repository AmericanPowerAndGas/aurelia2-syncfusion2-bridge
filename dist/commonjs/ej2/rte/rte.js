"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ej2Rte = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _ej2WidgetBase = require("../../common/ej2-widget-base");

var _constants = require("../../common/constants");

var _decorators = require("../../common/decorators");

var _common = require("../../common/common");

var _ej2Richtexteditor = require("@syncfusion/ej2-richtexteditor");

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

_ej2Richtexteditor.RichTextEditor.Inject(_ej2Richtexteditor.Toolbar, _ej2Richtexteditor.Link, _ej2Richtexteditor.Image, _ej2Richtexteditor.Count, _ej2Richtexteditor.HtmlEditor, _ej2Richtexteditor.QuickToolbar, _ej2Richtexteditor.Table);
var ej2Rte = function (_Ej2WidgetBase) {
    _inherits(ej2Rte, _Ej2WidgetBase);

    function ej2Rte(element) {
        _classCallCheck(this, ej2Rte);

        var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, _ej2Richtexteditor.RichTextEditor));

        _this.element = element;
        return _this;
    }

    return ej2Rte;
}(_ej2WidgetBase.Ej2WidgetBase);
exports.ej2Rte = ej2Rte = __decorate([(0, _common.customAttribute)(_constants.constants.ej2AttributePrefix + "rte"), (0, _decorators.generateBindables)('ej2RTE', ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'], [], null, null), (0, _common.inject)(Element)], ej2Rte);
exports.ej2Rte = ej2Rte;