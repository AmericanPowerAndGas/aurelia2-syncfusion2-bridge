define(["exports", "../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "@syncfusion/ej2-navigations"], function (exports, _ej2WidgetBase, _constants, _decorators, _common, _ej2Navigations) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ej2Toolbar = undefined;

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

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var Ej2Toolbar = function (_Ej2WidgetBase) {
        _inherits(Ej2Toolbar, _Ej2WidgetBase);

        function Ej2Toolbar(element) {
            _classCallCheck(this, Ej2Toolbar);

            var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, _ej2Navigations.Toolbar));

            _this.items = [];
            _this.element = element;
            _this.hasChildProperty = true;
            _this.childPropertyName = 'items';
            return _this;
        }

        return Ej2Toolbar;
    }(_ej2WidgetBase.Ej2WidgetBase);
    __decorate([(0, _common.children)("e-items")], Ej2Toolbar.prototype, "items", void 0);
    exports.Ej2Toolbar = Ej2Toolbar = __decorate([(0, _common.customElement)(_constants.constants.ej2ElementPrefix + "toolbar"), (0, _common.inlineView)("" + _constants.constants.aureliaTemplateString), (0, _decorators.generateBindables)(_constants.constants.ej2ElementPrefix + 'Toolbar', ['cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width'], [], null, null), (0, _common.inject)(Element)], Ej2Toolbar);
    exports.Ej2Toolbar = Ej2Toolbar;
});