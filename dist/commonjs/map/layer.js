"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Layer = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _constants = require("../common/constants");

var _decorators = require("../common/decorators");

var _common = require("../common/common");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Layer = function Layer() {
    _classCallCheck(this, Layer);
};
exports.Layer = Layer = __decorate([(0, _common.inlineView)("" + _constants.constants.aureliaTemplateString), (0, _common.customElement)(_constants.constants.elementPrefix + "layer"), (0, _decorators.generateBindables)('layers', ['bingMapType', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'labelSettings', 'geometryType', 'layerType', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers', 'subLayers'])], Layer);
exports.Layer = Layer;