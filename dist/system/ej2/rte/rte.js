"use strict";

System.register(["../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "@syncfusion/ej2-richtexteditor"], function (_export, _context) {
    "use strict";

    var Ej2WidgetBase, constants, generateBindables, customAttribute, inject, RichTextEditor, rteToolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table, _typeof, __decorate, ej2Rte;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_commonEj2WidgetBase) {
            Ej2WidgetBase = _commonEj2WidgetBase.Ej2WidgetBase;
        }, function (_commonConstants) {
            constants = _commonConstants.constants;
        }, function (_commonDecorators) {
            generateBindables = _commonDecorators.generateBindables;
        }, function (_commonCommon) {
            customAttribute = _commonCommon.customAttribute;
            inject = _commonCommon.inject;
        }, function (_syncfusionEj2Richtexteditor) {
            RichTextEditor = _syncfusionEj2Richtexteditor.RichTextEditor;
            rteToolbar = _syncfusionEj2Richtexteditor.Toolbar;
            Link = _syncfusionEj2Richtexteditor.Link;
            Image = _syncfusionEj2Richtexteditor.Image;
            Count = _syncfusionEj2Richtexteditor.Count;
            HtmlEditor = _syncfusionEj2Richtexteditor.HtmlEditor;
            QuickToolbar = _syncfusionEj2Richtexteditor.QuickToolbar;
            Table = _syncfusionEj2Richtexteditor.Table;
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
                var c = arguments.length,
                    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
                    d;
                if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
                    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                }return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            RichTextEditor.Inject(rteToolbar, Link, Image, Count, HtmlEditor, QuickToolbar, Table);

            _export("ej2Rte", ej2Rte = function (_Ej2WidgetBase) {
                _inherits(ej2Rte, _Ej2WidgetBase);

                function ej2Rte(element) {
                    _classCallCheck(this, ej2Rte);

                    var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, RichTextEditor));

                    _this.element = element;
                    return _this;
                }

                return ej2Rte;
            }(Ej2WidgetBase));

            _export("ej2Rte", ej2Rte = __decorate([customAttribute(constants.ej2AttributePrefix + "rte"), generateBindables(constants.ej2ElementPrefix + 'RTE', ['backgroundColor', 'cssClass', 'editorMode', 'enableAutoUrl', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'inlineMode', 'insertImageSettings', 'keyConfig', 'locale', 'maxLength', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'showCharCount', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width'], [], null, null), inject(Element)], ej2Rte));

            _export("ej2Rte", ej2Rte);
        }
    };
});