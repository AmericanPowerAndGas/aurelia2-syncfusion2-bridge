"use strict";

System.register(["../common/constants", "../common/decorators", "../common/common", "../common/util"], function (_export, _context) {
    "use strict";

    var constants, generateBindables, inlineView, customElement, children, Util, _typeof, __decorate, Column;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_commonConstants) {
            constants = _commonConstants.constants;
        }, function (_commonDecorators) {
            generateBindables = _commonDecorators.generateBindables;
        }, function (_commonCommon) {
            inlineView = _commonCommon.inlineView;
            customElement = _commonCommon.customElement;
            children = _commonCommon.children;
        }, function (_commonUtil) {
            Util = _commonUtil.Util;
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

            _export("Column", Column = function () {
                function Column() {
                    _classCallCheck(this, Column);

                    this.template = [];
                }

                Column.prototype.setTemplates = function setTemplates() {
                    if (this.template[0]) {
                        var util = new Util();
                        this[util.getBindablePropertyName('template')] = this.template[0].template;
                    }
                };

                return Column;
            }());

            __decorate([children(constants.elementPrefix + "template")], Column.prototype, "template", void 0);
            _export("Column", Column = __decorate([inlineView("" + constants.aureliaTemplateString), customElement(constants.elementPrefix + "column"), generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'commands', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckbox', 'editParams', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filterBarTemplate', 'filterType', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'priority', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'] })], Column));

            _export("Column", Column);
        }
    };
});