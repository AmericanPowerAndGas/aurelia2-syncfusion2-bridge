"use strict";

System.register(["../common/constants", "../common/decorators", "../common/common", "../common/util"], function (_export, _context) {
    "use strict";

    var constants, generateBindables, inlineView, customElement, children, Util, _typeof, __decorate, TreeGridColumn;

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

            _export("TreeGridColumn", TreeGridColumn = function () {
                function TreeGridColumn() {
                    _classCallCheck(this, TreeGridColumn);

                    this.angularTemplate = [];
                }

                TreeGridColumn.prototype.setTemplates = function setTemplates() {
                    if (this.angularTemplate[0]) {
                        var util = new Util();
                        this[util.getBindablePropertyName('angularTemplate')] = this.angularTemplate[0].template;
                    }
                };

                return TreeGridColumn;
            }());

            __decorate([children(constants.elementPrefix + "template")], TreeGridColumn.prototype, "angularTemplate", void 0);
            _export("TreeGridColumn", TreeGridColumn = __decorate([inlineView("" + constants.aureliaTemplateString), customElement(constants.elementPrefix + "tree-grid-column"), generateBindables('columns', ['allowCellSelection', 'allowEditing', 'allowFiltering', 'allowFilteringBlankContent', 'allowFreezing', 'allowSorting', 'angularTemplate', 'clipMode', 'commands', 'commands', 'commands', 'displayAsCheckbox', 'dropdownData', 'editParams', 'editTemplate', 'editType', 'field', 'filterEditType', 'filterType', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'headerTooltip', 'isFrozen', 'isTemplateColumn', 'priority', 'showCheckbox', 'showInColumnChooser', 'template', 'templateID', 'textAlign', 'tooltip', 'validationRules', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'], 'templateID': ['templateId', 'templateID'] })], TreeGridColumn));

            _export("TreeGridColumn", TreeGridColumn);
        }
    };
});
//# sourceMappingURL=../devbuild/dev/treegrid/treegridcolumn.js.map
