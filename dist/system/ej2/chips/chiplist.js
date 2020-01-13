"use strict";

System.register(["../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "@syncfusion/ej2-buttons"], function (_export, _context) {
    "use strict";

    var Ej2WidgetBase, constants, generateBindables, inject, inlineView, customElement, children, ChipList, _typeof, __decorate, ej2ChipList;

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
            inject = _commonCommon.inject;
            inlineView = _commonCommon.inlineView;
            customElement = _commonCommon.customElement;
            children = _commonCommon.children;
        }, function (_syncfusionEj2Buttons) {
            ChipList = _syncfusionEj2Buttons.ChipList;
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

            _export("ej2ChipList", ej2ChipList = function (_Ej2WidgetBase) {
                _inherits(ej2ChipList, _Ej2WidgetBase);

                function ej2ChipList(element) {
                    _classCallCheck(this, ej2ChipList);

                    var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, ChipList));

                    _this.chips = [];
                    _this.element = element;
                    _this.hasChildProperty = true;
                    _this.childPropertyName = 'chips';
                    return _this;
                }

                return ej2ChipList;
            }(Ej2WidgetBase));

            __decorate([children("e-chips")], ej2ChipList.prototype, "chips", void 0);
            _export("ej2ChipList", ej2ChipList = __decorate([customElement(constants.ej2ElementPrefix + "chip-list"), inlineView("" + constants.aureliaTemplateString), generateBindables(constants.ej2ElementPrefix + 'ChipList', ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss'], [], [], null), inject(Element)], ej2ChipList));

            _export("ej2ChipList", ej2ChipList);
        }
    };
});