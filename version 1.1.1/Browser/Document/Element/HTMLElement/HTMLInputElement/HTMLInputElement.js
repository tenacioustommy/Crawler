Object.defineProperty(this, "HTMLInputElement", {
    value: function HTMLInputElement() {
        rsvm.throwErrorNew("HTMLInputElement");
    }
}); rsvm.safefunction(HTMLInputElement);

Object.defineProperties(HTMLInputElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLInputElement", configurable: true
    }
});

HTMLInputElement.prototype.ELEMENT_NODE = HTMLInputElement.ELEMENT_NODE = 1;
HTMLInputElement.prototype.ATTRIBUTE_NODE = HTMLInputElement.ATTRIBUTE_NODE = 2;
HTMLInputElement.prototype.TEXT_NODE = HTMLInputElement.TEXT_NODE = 3;
HTMLInputElement.prototype.CDATA_SECTION_NODE = HTMLInputElement.CDATA_SECTION_NODE = 4;
HTMLInputElement.prototype.ENTITY_REFERENCE_NODE = HTMLInputElement.ENTITY_REFERENCE_NODE = 5;
HTMLInputElement.prototype.ENTITY_NODE = HTMLInputElement.ENTITY_NODE = 6;
HTMLInputElement.prototype.PROCESSING_INSTRUCTION_NODE = HTMLInputElement.PROCESSING_INSTRUCTION_NODE = 7;
HTMLInputElement.prototype.COMMENT_NODE = HTMLInputElement.COMMENT_NODE = 8;
HTMLInputElement.prototype.DOCUMENT_NODE = HTMLInputElement.DOCUMENT_NODE = 9;
HTMLInputElement.prototype.DOCUMENT_TYPE_NODE = HTMLInputElement.DOCUMENT_TYPE_NODE = 10;
HTMLInputElement.prototype.DOCUMENT_FRAGMENT_NODE = HTMLInputElement.DOCUMENT_FRAGMENT_NODE = 11;
HTMLInputElement.prototype.NOTATION_NODE = HTMLInputElement.NOTATION_NODE = 12;
HTMLInputElement.prototype.DOCUMENT_POSITION_DISCONNECTED = HTMLInputElement.DOCUMENT_POSITION_DISCONNECTED = 1;
HTMLInputElement.prototype.DOCUMENT_POSITION_PRECEDING = HTMLInputElement.DOCUMENT_POSITION_PRECEDING = 2;
HTMLInputElement.prototype.DOCUMENT_POSITION_FOLLOWING = HTMLInputElement.DOCUMENT_POSITION_FOLLOWING = 4;
HTMLInputElement.prototype.DOCUMENT_POSITION_CONTAINS = HTMLInputElement.DOCUMENT_POSITION_CONTAINS = 8;
HTMLInputElement.prototype.DOCUMENT_POSITION_CONTAINED_BY = HTMLInputElement.DOCUMENT_POSITION_CONTAINED_BY = 16;
HTMLInputElement.prototype.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = HTMLInputElement.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32;
HTMLInputElement.prototype["checkValidity"] = rsvm.browser.HTMLInputElement.actor.checkValidity;
Object.defineProperty(rsvm.browser.HTMLInputElement.actor.checkValidity, "length", { value: 0 });
HTMLInputElement.prototype["reportValidity"] = rsvm.browser.HTMLInputElement.actor.reportValidity;
Object.defineProperty(rsvm.browser.HTMLInputElement.actor.reportValidity, "length", { value: 0 });
HTMLInputElement.prototype["select"] = rsvm.browser.HTMLInputElement.actor.select;
Object.defineProperty(rsvm.browser.HTMLInputElement.actor.select, "length", { value: 0 });
HTMLInputElement.prototype["setCustomValidity"] = rsvm.browser.HTMLInputElement.actor.setCustomValidity;
Object.defineProperty(rsvm.browser.HTMLInputElement.actor.setCustomValidity, "length", { value: 1 });
HTMLInputElement.prototype["setRangeText"] = rsvm.browser.HTMLInputElement.actor.setRangeText;
Object.defineProperty(rsvm.browser.HTMLInputElement.actor.setRangeText, "length", { value: 1 });
HTMLInputElement.prototype["setSelectionRange"] = rsvm.browser.HTMLInputElement.actor.setSelectionRange;
Object.defineProperty(rsvm.browser.HTMLInputElement.actor.setSelectionRange, "length", { value: 2 });
HTMLInputElement.prototype["showPicker"] = rsvm.browser.HTMLInputElement.actor.showPicker;
Object.defineProperty(rsvm.browser.HTMLInputElement.actor.showPicker, "length", { value: 0 });
HTMLInputElement.prototype["stepDown"] = rsvm.browser.HTMLInputElement.actor.stepDown;
Object.defineProperty(rsvm.browser.HTMLInputElement.actor.stepDown, "length", { value: 0 });
HTMLInputElement.prototype["stepUp"] = rsvm.browser.HTMLInputElement.actor.stepUp;
Object.defineProperty(rsvm.browser.HTMLInputElement.actor.stepUp, "length", { value: 0 });

HTMLInputElement.prototype.__proto__ = HTMLElement.prototype;

Object.defineProperty(HTMLInputElement.prototype, "accept", {
    get: rsvm.browser.HTMLInputElement.getter.accept,
    set: rsvm.browser.HTMLInputElement.setter.accept,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.accept, "name", {
    value: "get accept"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.accept, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.accept, "name", {
    value: "set accept"
});
Object.defineProperty(HTMLInputElement.prototype, "alt", {
    get: rsvm.browser.HTMLInputElement.getter.alt,
    set: rsvm.browser.HTMLInputElement.setter.alt,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.alt, "name", {
    value: "get alt"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.alt, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.alt, "name", {
    value: "set alt"
});
Object.defineProperty(HTMLInputElement.prototype, "autocomplete", {
    get: rsvm.browser.HTMLInputElement.getter.autocomplete,
    set: rsvm.browser.HTMLInputElement.setter.autocomplete,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.autocomplete, "name", {
    value: "get autocomplete"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.autocomplete, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.autocomplete, "name", {
    value: "set autocomplete"
});
Object.defineProperty(HTMLInputElement.prototype, "defaultChecked", {
    get: rsvm.browser.HTMLInputElement.getter.defaultChecked,
    set: rsvm.browser.HTMLInputElement.setter.defaultChecked,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.defaultChecked, "name", {
    value: "get defaultChecked"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.defaultChecked, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.defaultChecked, "name", {
    value: "set defaultChecked"
});
Object.defineProperty(HTMLInputElement.prototype, "checked", {
    get: rsvm.browser.HTMLInputElement.getter.checked,
    set: rsvm.browser.HTMLInputElement.setter.checked,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.checked, "name", {
    value: "get checked"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.checked, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.checked, "name", {
    value: "set checked"
});
Object.defineProperty(HTMLInputElement.prototype, "dirName", {
    get: rsvm.browser.HTMLInputElement.getter.dirName,
    set: rsvm.browser.HTMLInputElement.setter.dirName,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.dirName, "name", {
    value: "get dirName"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.dirName, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.dirName, "name", {
    value: "set dirName"
});
Object.defineProperty(HTMLInputElement.prototype, "disabled", {
    get: rsvm.browser.HTMLInputElement.getter.disabled,
    set: rsvm.browser.HTMLInputElement.setter.disabled,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.disabled, "name", {
    value: "get disabled"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.disabled, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.disabled, "name", {
    value: "set disabled"
});
Object.defineProperty(HTMLInputElement.prototype, "form", {
    get: rsvm.browser.HTMLInputElement.getter.form,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.form, "name", {
    value: "get form"
});
Object.defineProperty(HTMLInputElement.prototype, "files", {
    get: rsvm.browser.HTMLInputElement.getter.files,
    set: rsvm.browser.HTMLInputElement.setter.files,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.files, "name", {
    value: "get files"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.files, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.files, "name", {
    value: "set files"
});
Object.defineProperty(HTMLInputElement.prototype, "formAction", {
    get: rsvm.browser.HTMLInputElement.getter.formAction,
    set: rsvm.browser.HTMLInputElement.setter.formAction,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.formAction, "name", {
    value: "get formAction"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formAction, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formAction, "name", {
    value: "set formAction"
});
Object.defineProperty(HTMLInputElement.prototype, "formEnctype", {
    get: rsvm.browser.HTMLInputElement.getter.formEnctype,
    set: rsvm.browser.HTMLInputElement.setter.formEnctype,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.formEnctype, "name", {
    value: "get formEnctype"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formEnctype, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formEnctype, "name", {
    value: "set formEnctype"
});
Object.defineProperty(HTMLInputElement.prototype, "formMethod", {
    get: rsvm.browser.HTMLInputElement.getter.formMethod,
    set: rsvm.browser.HTMLInputElement.setter.formMethod,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.formMethod, "name", {
    value: "get formMethod"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formMethod, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formMethod, "name", {
    value: "set formMethod"
});
Object.defineProperty(HTMLInputElement.prototype, "formNoValidate", {
    get: rsvm.browser.HTMLInputElement.getter.formNoValidate,
    set: rsvm.browser.HTMLInputElement.setter.formNoValidate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.formNoValidate, "name", {
    value: "get formNoValidate"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formNoValidate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formNoValidate, "name", {
    value: "set formNoValidate"
});
Object.defineProperty(HTMLInputElement.prototype, "formTarget", {
    get: rsvm.browser.HTMLInputElement.getter.formTarget,
    set: rsvm.browser.HTMLInputElement.setter.formTarget,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.formTarget, "name", {
    value: "get formTarget"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formTarget, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.formTarget, "name", {
    value: "set formTarget"
});
Object.defineProperty(HTMLInputElement.prototype, "height", {
    get: rsvm.browser.HTMLInputElement.getter.height,
    set: rsvm.browser.HTMLInputElement.setter.height,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.height, "name", {
    value: "get height"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.height, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.height, "name", {
    value: "set height"
});
Object.defineProperty(HTMLInputElement.prototype, "indeterminate", {
    get: rsvm.browser.HTMLInputElement.getter.indeterminate,
    set: rsvm.browser.HTMLInputElement.setter.indeterminate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.indeterminate, "name", {
    value: "get indeterminate"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.indeterminate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.indeterminate, "name", {
    value: "set indeterminate"
});
Object.defineProperty(HTMLInputElement.prototype, "list", {
    get: rsvm.browser.HTMLInputElement.getter.list,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.list, "name", {
    value: "get list"
});
Object.defineProperty(HTMLInputElement.prototype, "max", {
    get: rsvm.browser.HTMLInputElement.getter.max,
    set: rsvm.browser.HTMLInputElement.setter.max,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.max, "name", {
    value: "get max"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.max, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.max, "name", {
    value: "set max"
});
Object.defineProperty(HTMLInputElement.prototype, "maxLength", {
    get: rsvm.browser.HTMLInputElement.getter.maxLength,
    set: rsvm.browser.HTMLInputElement.setter.maxLength,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.maxLength, "name", {
    value: "get maxLength"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.maxLength, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.maxLength, "name", {
    value: "set maxLength"
});
Object.defineProperty(HTMLInputElement.prototype, "min", {
    get: rsvm.browser.HTMLInputElement.getter.min,
    set: rsvm.browser.HTMLInputElement.setter.min,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.min, "name", {
    value: "get min"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.min, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.min, "name", {
    value: "set min"
});
Object.defineProperty(HTMLInputElement.prototype, "minLength", {
    get: rsvm.browser.HTMLInputElement.getter.minLength,
    set: rsvm.browser.HTMLInputElement.setter.minLength,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.minLength, "name", {
    value: "get minLength"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.minLength, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.minLength, "name", {
    value: "set minLength"
});
Object.defineProperty(HTMLInputElement.prototype, "multiple", {
    get: rsvm.browser.HTMLInputElement.getter.multiple,
    set: rsvm.browser.HTMLInputElement.setter.multiple,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.multiple, "name", {
    value: "get multiple"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.multiple, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.multiple, "name", {
    value: "set multiple"
});
Object.defineProperty(HTMLInputElement.prototype, "name", {
    get: rsvm.browser.HTMLInputElement.getter.name,
    set: rsvm.browser.HTMLInputElement.setter.name,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.name, "name", {
    value: "get name"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.name, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.name, "name", {
    value: "set name"
});
Object.defineProperty(HTMLInputElement.prototype, "pattern", {
    get: rsvm.browser.HTMLInputElement.getter.pattern,
    set: rsvm.browser.HTMLInputElement.setter.pattern,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.pattern, "name", {
    value: "get pattern"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.pattern, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.pattern, "name", {
    value: "set pattern"
});
Object.defineProperty(HTMLInputElement.prototype, "placeholder", {
    get: rsvm.browser.HTMLInputElement.getter.placeholder,
    set: rsvm.browser.HTMLInputElement.setter.placeholder,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.placeholder, "name", {
    value: "get placeholder"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.placeholder, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.placeholder, "name", {
    value: "set placeholder"
});
Object.defineProperty(HTMLInputElement.prototype, "readOnly", {
    get: rsvm.browser.HTMLInputElement.getter.readOnly,
    set: rsvm.browser.HTMLInputElement.setter.readOnly,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.readOnly, "name", {
    value: "get readOnly"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.readOnly, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.readOnly, "name", {
    value: "set readOnly"
});
Object.defineProperty(HTMLInputElement.prototype, "required", {
    get: rsvm.browser.HTMLInputElement.getter.required,
    set: rsvm.browser.HTMLInputElement.setter.required,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.required, "name", {
    value: "get required"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.required, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.required, "name", {
    value: "set required"
});
Object.defineProperty(HTMLInputElement.prototype, "size", {
    get: rsvm.browser.HTMLInputElement.getter.size,
    set: rsvm.browser.HTMLInputElement.setter.size,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.size, "name", {
    value: "get size"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.size, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.size, "name", {
    value: "set size"
});
Object.defineProperty(HTMLInputElement.prototype, "src", {
    get: rsvm.browser.HTMLInputElement.getter.src,
    set: rsvm.browser.HTMLInputElement.setter.src,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.src, "name", {
    value: "get src"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.src, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.src, "name", {
    value: "set src"
});
Object.defineProperty(HTMLInputElement.prototype, "step", {
    get: rsvm.browser.HTMLInputElement.getter.step,
    set: rsvm.browser.HTMLInputElement.setter.step,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.step, "name", {
    value: "get step"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.step, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.step, "name", {
    value: "set step"
});
Object.defineProperty(HTMLInputElement.prototype, "type", {
    get: rsvm.browser.HTMLInputElement.getter.type,
    set: rsvm.browser.HTMLInputElement.setter.type,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.type, "name", {
    value: "get type"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.type, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.type, "name", {
    value: "set type"
});
Object.defineProperty(HTMLInputElement.prototype, "defaultValue", {
    get: rsvm.browser.HTMLInputElement.getter.defaultValue,
    set: rsvm.browser.HTMLInputElement.setter.defaultValue,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.defaultValue, "name", {
    value: "get defaultValue"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.defaultValue, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.defaultValue, "name", {
    value: "set defaultValue"
});
Object.defineProperty(HTMLInputElement.prototype, "value", {
    get: rsvm.browser.HTMLInputElement.getter.value,
    set: rsvm.browser.HTMLInputElement.setter.value,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.value, "name", {
    value: "get value"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.value, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.value, "name", {
    value: "set value"
});
Object.defineProperty(HTMLInputElement.prototype, "valueAsDate", {
    get: rsvm.browser.HTMLInputElement.getter.valueAsDate,
    set: rsvm.browser.HTMLInputElement.setter.valueAsDate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.valueAsDate, "name", {
    value: "get valueAsDate"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.valueAsDate, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.valueAsDate, "name", {
    value: "set valueAsDate"
});
Object.defineProperty(HTMLInputElement.prototype, "valueAsNumber", {
    get: rsvm.browser.HTMLInputElement.getter.valueAsNumber,
    set: rsvm.browser.HTMLInputElement.setter.valueAsNumber,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.valueAsNumber, "name", {
    value: "get valueAsNumber"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.valueAsNumber, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.valueAsNumber, "name", {
    value: "set valueAsNumber"
});
Object.defineProperty(HTMLInputElement.prototype, "width", {
    get: rsvm.browser.HTMLInputElement.getter.width,
    set: rsvm.browser.HTMLInputElement.setter.width,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.width, "name", {
    value: "get width"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.width, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.width, "name", {
    value: "set width"
});
Object.defineProperty(HTMLInputElement.prototype, "willValidate", {
    get: rsvm.browser.HTMLInputElement.getter.willValidate,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.willValidate, "name", {
    value: "get willValidate"
});
Object.defineProperty(HTMLInputElement.prototype, "validity", {
    get: rsvm.browser.HTMLInputElement.getter.validity,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.validity, "name", {
    value: "get validity"
});
Object.defineProperty(HTMLInputElement.prototype, "validationMessage", {
    get: rsvm.browser.HTMLInputElement.getter.validationMessage,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.validationMessage, "name", {
    value: "get validationMessage"
});
Object.defineProperty(HTMLInputElement.prototype, "labels", {
    get: rsvm.browser.HTMLInputElement.getter.labels,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.labels, "name", {
    value: "get labels"
});
Object.defineProperty(HTMLInputElement.prototype, "selectionStart", {
    get: rsvm.browser.HTMLInputElement.getter.selectionStart,
    set: rsvm.browser.HTMLInputElement.setter.selectionStart,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.selectionStart, "name", {
    value: "get selectionStart"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.selectionStart, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.selectionStart, "name", {
    value: "set selectionStart"
});
Object.defineProperty(HTMLInputElement.prototype, "selectionEnd", {
    get: rsvm.browser.HTMLInputElement.getter.selectionEnd,
    set: rsvm.browser.HTMLInputElement.setter.selectionEnd,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.selectionEnd, "name", {
    value: "get selectionEnd"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.selectionEnd, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.selectionEnd, "name", {
    value: "set selectionEnd"
});
Object.defineProperty(HTMLInputElement.prototype, "selectionDirection", {
    get: rsvm.browser.HTMLInputElement.getter.selectionDirection,
    set: rsvm.browser.HTMLInputElement.setter.selectionDirection,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.selectionDirection, "name", {
    value: "get selectionDirection"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.selectionDirection, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.selectionDirection, "name", {
    value: "set selectionDirection"
});
Object.defineProperty(HTMLInputElement.prototype, "align", {
    get: rsvm.browser.HTMLInputElement.getter.align,
    set: rsvm.browser.HTMLInputElement.setter.align,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.align, "name", {
    value: "get align"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.align, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.align, "name", {
    value: "set align"
});
Object.defineProperty(HTMLInputElement.prototype, "useMap", {
    get: rsvm.browser.HTMLInputElement.getter.useMap,
    set: rsvm.browser.HTMLInputElement.setter.useMap,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.useMap, "name", {
    value: "get useMap"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.useMap, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.useMap, "name", {
    value: "set useMap"
});
Object.defineProperty(HTMLInputElement.prototype, "webkitdirectory", {
    get: rsvm.browser.HTMLInputElement.getter.webkitdirectory,
    set: rsvm.browser.HTMLInputElement.setter.webkitdirectory,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.webkitdirectory, "name", {
    value: "get webkitdirectory"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.webkitdirectory, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.webkitdirectory, "name", {
    value: "set webkitdirectory"
});
Object.defineProperty(HTMLInputElement.prototype, "incremental", {
    get: rsvm.browser.HTMLInputElement.getter.incremental,
    set: rsvm.browser.HTMLInputElement.setter.incremental,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.incremental, "name", {
    value: "get incremental"
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.incremental, "length", {
    value: 1
});
Object.defineProperty(rsvm.browser.HTMLInputElement.setter.incremental, "name", {
    value: "set incremental"
});
Object.defineProperty(HTMLInputElement.prototype, "webkitEntries", {
    get: rsvm.browser.HTMLInputElement.getter.webkitEntries,
    configurable: true, enumerable: true,
});
Object.defineProperty(rsvm.browser.HTMLInputElement.getter.webkitEntries, "name", {
    value: "get webkitEntries"
});


for (const key in rsvm.browser.HTMLInputElement.getter) {
    rsvm.safefunction(rsvm.browser.HTMLInputElement.getter[key]);
}
for (const key in rsvm.browser.HTMLInputElement.setter) {
    rsvm.safefunction(rsvm.browser.HTMLInputElement.setter[key]);
}
for (const key in rsvm.browser.HTMLInputElement.actor) {
    rsvm.safefunction(rsvm.browser.HTMLInputElement.actor[key]);
};


HTMLInputElement = rsvm.proxy(HTMLInputElement);