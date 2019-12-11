"use strict";

System.register(["../../common/constants", "../../common/decorators", "../../common/common", "../../common/util"], function (_export, _context) {
    "use strict";

    var constants, generateBindables, inlineView, customElement, children, Util, _typeof, __decorate, Ej2Column;

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

            _export("Ej2Column", Ej2Column = function () {
                function Ej2Column() {
                    _classCallCheck(this, Ej2Column);

                    this.template = [];
                }

                Ej2Column.prototype.setTemplates = function setTemplates() {
                    if (this.template[0]) {
                        var util = new Util();
                        this[util.getBindablePropertyName('template')] = this.template[0].template;
                    }
                };

                return Ej2Column;
            }());

            __decorate([children(constants.ej2ElementPrefix + "template")], Ej2Column.prototype, "template", void 0);
            _export("Ej2Column", Ej2Column = __decorate([inlineView("" + constants.aureliaTemplateString), customElement(constants.ej2ElementPrefix + "column"), generateBindables('columns', ['allowEditing', 'allowFiltering', 'allowGrouping', 'allowReordering', 'allowResizing', 'allowSearching', 'allowSorting', 'autoFit', 'clipMode', 'columns', 'commands', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'edit', 'editTemplate', 'editType', 'enableGroupByFormat', 'field', 'filter', 'filterBarTemplate', 'filterTemplate', 'foreignKeyField', 'foreignKeyValue', 'format', 'formatter', 'headerTemplate', 'headerText', 'headerTextAlign', 'hideAtMedia', 'index', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'lockColumn', 'maxWidth', 'minWidth', 'showColumnMenu', 'showInColumnChooser', 'sortComparer', 'template', 'textAlign', 'type', 'uid', 'validationRules', 'valueAccessor', 'visible', 'width'], [], { 'headerTemplateID': ['headerTemplateId', 'headerTemplateID'] }, null)], Ej2Column));

            _export("Ej2Column", Ej2Column);
        }
    };
});
//# sourceMappingURL=../../devbuild/dev/ej2/grid/column.js.map
