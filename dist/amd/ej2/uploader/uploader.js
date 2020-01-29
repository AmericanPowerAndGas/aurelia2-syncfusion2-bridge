define(["exports", "../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "@syncfusion/ej2-inputs"], function (exports, _ej2WidgetBase, _constants, _decorators, _common, _ej2Inputs) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ej2Uploader = undefined;

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

    var Ej2Uploader = function (_Ej2WidgetBase) {
        _inherits(Ej2Uploader, _Ej2WidgetBase);

        function Ej2Uploader(element) {
            _classCallCheck(this, Ej2Uploader);

            var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, _ej2Inputs.Uploader));

            _this.isEditor = true;
            _this.element = element;
            return _this;
        }

        return Ej2Uploader;
    }(_ej2WidgetBase.Ej2WidgetBase);
    exports.Ej2Uploader = Ej2Uploader = __decorate([(0, _common.customAttribute)(_constants.constants.ej2AttributePrefix + "uploader"), (0, _decorators.generateBindables)(_constants.constants.ej2ElementPrefix + 'Uploader', ['allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template'], [], null, null), (0, _common.inject)(Element)], Ej2Uploader);
    exports.Ej2Uploader = Ej2Uploader;
});