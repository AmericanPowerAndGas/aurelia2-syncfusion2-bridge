define(["exports", "../../common/ej2-widget-base", "../../common/constants", "../../common/decorators", "../../common/common", "@syncfusion/ej2-diagrams"], function (exports, _ej2WidgetBase, _constants, _decorators, _common, _ej2Diagrams) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ej2Diagram = undefined;

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

    _ej2Diagrams.Diagram.Inject(_ej2Diagrams.DataBinding, _ej2Diagrams.HierarchicalTree);
    var ej2Diagram = function (_Ej2WidgetBase) {
        _inherits(ej2Diagram, _Ej2WidgetBase);

        function ej2Diagram(element) {
            _classCallCheck(this, ej2Diagram);

            var _this = _possibleConstructorReturn(this, _Ej2WidgetBase.call(this, _ej2Diagrams.Diagram));

            _this.element = element;
            if (_this.element && !_this.element.id) _this.element.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            return _this;
        }

        return ej2Diagram;
    }(_ej2WidgetBase.Ej2WidgetBase);
    exports.ej2Diagram = ej2Diagram = __decorate([(0, _common.customElement)(_constants.constants.ej2ElementPrefix + "diagram"), (0, _common.inlineView)("" + _constants.constants.aureliaTemplateString), (0, _decorators.generateBindables)('ej2Diagram', ['addInfo', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'width'], null, null, null), (0, _common.inject)(Element)], ej2Diagram);
    exports.ej2Diagram = ej2Diagram;
});