var Page;
(function (Page) {
    var Demopage;
    (function (Demopage) {
        var errorsBlockId = "error-messages";
        var errorsBlock = document.getElementById(errorsBlockId);
        if (!errorsBlock) {
            throw new Error("Cannot find element '" + errorsBlockId + "'.");
        }
        function getErrorById(id) {
            if (errorsBlock) {
                return errorsBlock.querySelector("span[id=error-message-" + id + "]");
            }
            return null;
        }
        function setErrorMessage(id, message) {
            if (errorsBlock) {
                var existingSpan = getErrorById(id);
                if (existingSpan) {
                    existingSpan.innerHTML = message;
                    return;
                }
                else {
                    var newSpan = document.createElement("span");
                    newSpan.id = "error-message-" + id;
                    newSpan.innerText = message;
                    errorsBlock.appendChild(newSpan);
                    errorsBlock.appendChild(document.createElement("br"));
                }
            }
        }
        Demopage.setErrorMessage = setErrorMessage;
        function removeErrorMessage(id) {
            if (errorsBlock) {
                var span = getErrorById(id);
                if (span) {
                    var br = span.nextElementSibling;
                    if (br) {
                        errorsBlock.removeChild(br);
                    }
                    errorsBlock.removeChild(span);
                }
            }
        }
        Demopage.removeErrorMessage = removeErrorMessage;
    })(Demopage = Page.Demopage || (Page.Demopage = {}));
})(Page || (Page = {}));

var Page;
(function (Page) {
    var Helpers;
    (function (Helpers) {
        var Utils;
        (function (Utils) {
            function selectorAll(base, selector) {
                var elements = base.querySelectorAll(selector);
                var result = [];
                for (var i = 0; i < elements.length; i++) {
                    result.push(elements[i]);
                }
                return result;
            }
            Utils.selectorAll = selectorAll;
            /** @throws if no element was found */
            function selector(base, selector) {
                var element = base.querySelector(selector);
                if (!element) {
                    throw new Error("No element matching '".concat(selector, "'."));
                }
                return element;
            }
            Utils.selector = selector;
            function touchArray(touchList) {
                var result = [];
                for (var i = 0; i < touchList.length; i++) {
                    result.push(touchList[i]);
                }
                return result;
            }
            Utils.touchArray = touchArray;
            function findFirst(array, predicate) {
                if (typeof Array.prototype.findIndex === "function") {
                    return array.findIndex(predicate);
                }
                else {
                    for (var i = 0; i < array.length; i++) {
                        if (predicate(array[i])) {
                            return i;
                        }
                    }
                    return -1;
                }
            }
            Utils.findFirst = findFirst;
        })(Utils = Helpers.Utils || (Helpers.Utils = {}));
        var URL;
        (function (URL) {
            var PARAMETERS_PREFIX = "page";
            var URLBuilder = /** @class */ (function () {
                function URLBuilder(url) {
                    this.queryParameters = {};
                    var queryStringDelimiterIndex = url.indexOf(URLBuilder.queryDelimiter);
                    if (queryStringDelimiterIndex < 0) {
                        this.baseUrl = url;
                    }
                    else {
                        this.baseUrl = url.substring(0, queryStringDelimiterIndex);
                        var queryString = url.substring(queryStringDelimiterIndex + URLBuilder.queryDelimiter.length);
                        var splitParameters = queryString.split(URLBuilder.parameterDelimiter);
                        for (var _i = 0, splitParameters_1 = splitParameters; _i < splitParameters_1.length; _i++) {
                            var parameter = splitParameters_1[_i];
                            var keyValue = parameter.split(URLBuilder.keyValueDelimiter);
                            if (keyValue.length === 2) {
                                var key = decodeURIComponent(keyValue[0]);
                                var value = decodeURIComponent(keyValue[1]);
                                this.queryParameters[key] = value;
                            }
                            else {
                                console.log("Unable to parse query string parameter '" + parameter + "'.");
                            }
                        }
                    }
                }
                URLBuilder.prototype.setQueryParameter = function (name, value) {
                    if (value === null) {
                        delete this.queryParameters[name];
                    }
                    else {
                        this.queryParameters[name] = value;
                    }
                };
                URLBuilder.prototype.loopOnParameters = function (prefix, callback) {
                    for (var _i = 0, _a = Object.keys(this.queryParameters); _i < _a.length; _i++) {
                        var parameterName = _a[_i];
                        if (parameterName.indexOf(prefix) === 0 && parameterName.length > prefix.length) {
                            var parameterValue = this.queryParameters[parameterName];
                            var shortParameterName = parameterName.substring(prefix.length);
                            callback(shortParameterName, parameterValue);
                        }
                    }
                };
                URLBuilder.prototype.buildUrl = function () {
                    var parameters = [];
                    for (var _i = 0, _a = Object.keys(this.queryParameters); _i < _a.length; _i++) {
                        var parameterName = _a[_i];
                        var parameterValue = this.queryParameters[parameterName];
                        var encodedName = encodeURIComponent(parameterName);
                        var encodedValue = encodeURIComponent(parameterValue);
                        parameters.push(encodedName + URLBuilder.keyValueDelimiter + encodedValue);
                    }
                    var queryString = parameters.join(URLBuilder.parameterDelimiter);
                    if (queryString) {
                        return this.baseUrl + URLBuilder.queryDelimiter + queryString;
                    }
                    else {
                        return this.baseUrl;
                    }
                };
                URLBuilder.queryDelimiter = "?";
                URLBuilder.parameterDelimiter = "&";
                URLBuilder.keyValueDelimiter = "=";
                return URLBuilder;
            }());
            function buildPrefix() {
                var prefixes = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    prefixes[_i] = arguments[_i];
                }
                return prefixes.join(":") + ":";
            }
            function updateUrl(newUrl) {
                window.history.replaceState("", "", newUrl);
            }
            function loopOnParameters(prefix, callback) {
                var urlBuilder = new URLBuilder(window.location.href);
                var fullPrefix = buildPrefix(PARAMETERS_PREFIX, prefix);
                urlBuilder.loopOnParameters(fullPrefix, callback);
            }
            URL.loopOnParameters = loopOnParameters;
            function setQueryParameter(prefix, name, value) {
                var urlBuilder = new URLBuilder(window.location.href);
                var fullPrefix = buildPrefix(PARAMETERS_PREFIX, prefix);
                urlBuilder.setQueryParameter(fullPrefix + name, value);
                updateUrl(urlBuilder.buildUrl());
            }
            URL.setQueryParameter = setQueryParameter;
            function removeQueryParameter(prefix, name) {
                var urlBuilder = new URLBuilder(window.location.href);
                var fullPrefix = buildPrefix(PARAMETERS_PREFIX, prefix);
                urlBuilder.setQueryParameter(fullPrefix + name, null);
                updateUrl(urlBuilder.buildUrl());
            }
            URL.removeQueryParameter = removeQueryParameter;
        })(URL = Helpers.URL || (Helpers.URL = {}));
        var Events;
        (function (Events) {
            function callAfterDOMLoaded(callback) {
                if (document.readyState === "loading") { // Loading hasn't finished yet
                    document.addEventListener("DOMContentLoaded", callback);
                }
                else { // `DOMContentLoaded` has already fired
                    callback();
                }
            }
            Events.callAfterDOMLoaded = callAfterDOMLoaded;
        })(Events = Helpers.Events || (Helpers.Events = {}));
        var Cache = /** @class */ (function () {
            function Cache(objectsName, loadObjectsFunction) {
                this.objectsName = objectsName;
                this.loadObjectsFunction = loadObjectsFunction;
                this.cacheObject = null;
            }
            /** @throws An Error if the ID is unknown */
            Cache.prototype.getById = function (id) {
                var object = this.safeCacheObject[id];
                if (!object) {
                    throw new Error("Invalid '".concat(this.objectsName, "' cache object id '").concat(id, "'."));
                }
                return object;
            };
            /** @returns null if the ID is unknown */
            Cache.prototype.getByIdSafe = function (id) {
                return this.safeCacheObject[id] || null;
            };
            Cache.prototype.load = function () {
                if (!this.cacheObject) {
                    this.cacheObject = this.loadCacheObject();
                }
            };
            Object.defineProperty(Cache.prototype, "safeCacheObject", {
                get: function () {
                    if (!this.cacheObject) {
                        this.load();
                    }
                    return this.cacheObject;
                },
                enumerable: false,
                configurable: true
            });
            Cache.prototype.loadCacheObject = function () {
                var index = {};
                var objects = this.loadObjectsFunction();
                for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
                    var object = objects_1[_i];
                    if (typeof index[object.id] !== "undefined") {
                        throw new Error("Object '".concat(object.id, "' is already in cache."));
                    }
                    index[object.id] = object;
                }
                return index;
            };
            return Cache;
        }());
        Helpers.Cache = Cache;
        var Storage = /** @class */ (function () {
            function Storage(prefix, serialize, tryDeserialize) {
                this.prefix = prefix;
                this.serialize = serialize;
                this.tryDeserialize = tryDeserialize;
            }
            Storage.prototype.storeState = function (control) {
                var valueAsString = this.serialize(control);
                Page.Helpers.URL.setQueryParameter(this.prefix, control.id, valueAsString);
            };
            Storage.prototype.clearStoredState = function (control) {
                Page.Helpers.URL.removeQueryParameter(this.prefix, control.id);
            };
            Storage.prototype.applyStoredState = function () {
                var _this = this;
                Page.Helpers.URL.loopOnParameters(this.prefix, function (controlId, value) {
                    if (!_this.tryDeserialize(controlId, value)) {
                        console.log("Removing invalid query parameter '" + controlId + "=" + value + "'.");
                        Page.Helpers.URL.removeQueryParameter(_this.prefix, controlId);
                    }
                });
            };
            return Storage;
        }());
        Helpers.Storage = Storage;
    })(Helpers = Page.Helpers || (Page.Helpers = {}));
})(Page || (Page = {}));


var Page;
(function (Page) {
    var Controls;
    (function (Controls) {
        function getElementBySelector(selector) {
            var elt = document.querySelector(selector);
            if (!elt) {
                console.error("Cannot find control '" + selector + "'.");
            }
            return elt;
        }
        function setVisibility(id, visible) {
            var control = getElementBySelector("div#control-" + id);
            if (control) {
                control.style.display = visible ? "" : "none";
            }
        }
        Controls.setVisibility = setVisibility;
    })(Controls = Page.Controls || (Page.Controls = {}));
})(Page || (Page = {}));
(function (Page) {
    var Sections;
    (function (Sections) {
        function getElementBySelector(selector) {
            var elt = document.querySelector(selector);
            if (!elt) {
                console.error("Cannot find section '" + selector + "'.");
            }
            return elt;
        }
        function reevaluateSeparatorsVisibility(controlsBlockElement) {
            function isHr(element) {
                return element.tagName.toLowerCase() === "hr";
            }
            function isVisible(element) {
                return element.style.display !== "none";
            }
            var sectionsOrHr = Page.Helpers.Utils.selectorAll(controlsBlockElement, "section, hr");
            //remove duplicate HRs
            var lastWasHr = false;
            for (var _i = 0, sectionsOrHr_1 = sectionsOrHr; _i < sectionsOrHr_1.length; _i++) {
                var sectionOrHr = sectionsOrHr_1[_i];
                if (isHr(sectionOrHr)) {
                    sectionOrHr.style.display = lastWasHr ? "none" : "";
                    lastWasHr = true;
                }
                else if (isVisible(sectionOrHr)) {
                    lastWasHr = false;
                }
            }
            // remove leading HRs
            for (var _a = 0, sectionsOrHr_2 = sectionsOrHr; _a < sectionsOrHr_2.length; _a++) {
                var sectionOrHr = sectionsOrHr_2[_a];
                if (isHr(sectionOrHr)) {
                    sectionOrHr.style.display = "none";
                }
                else if (isVisible(sectionOrHr)) {
                    break;
                }
            }
            // remove trailing HRs
            for (var i = sectionsOrHr.length - 1; i >= 0; i--) {
                var sectionOrHr = sectionsOrHr[i];
                if (isHr(sectionOrHr)) {
                    sectionOrHr.style.display = "none";
                }
                else if (isVisible(sectionOrHr)) {
                    break;
                }
            }
        }
        function setVisibility(id, visible) {
            var section = getElementBySelector("section#section-" + id);
            if (section && section.parentElement) {
                section.style.display = visible ? "" : "none";
                reevaluateSeparatorsVisibility(section.parentElement);
            }
        }
        Sections.setVisibility = setVisibility;
    })(Sections = Page.Sections || (Page.Sections = {}));
})(Page || (Page = {}));


var Page;
(function (Page) {
    var Checkbox;
    (function (Checkbox_1) {
        var Checkbox = /** @class */ (function () {
            function Checkbox(element) {
                var _this = this;
                this.observers = [];
                this.id = element.id;
                this.element = element;
                this.reloadValue();
                this.element.addEventListener("change", function () {
                    _this.reloadValue();
                    checkboxesStorage.storeState(_this);
                    _this.callObservers();
                });
            }
            Object.defineProperty(Checkbox.prototype, "checked", {
                get: function () {
                    return this._checked;
                },
                set: function (newChecked) {
                    this.element.checked = newChecked;
                    this.reloadValue();
                },
                enumerable: false,
                configurable: true
            });
            Checkbox.prototype.callObservers = function () {
                for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                    var observer = _a[_i];
                    observer(this.checked);
                }
            };
            Checkbox.prototype.reloadValue = function () {
                this._checked = this.element.checked;
            };
            return Checkbox;
        }());
        var checkboxesCache = new Page.Helpers.Cache("Checkbox", function () {
            var selector = "div.checkbox > input[type=checkbox][id]";
            var elements = Page.Helpers.Utils.selectorAll(document, selector);
            return elements.map(function (element) {
                return new Checkbox(element);
            });
        });
        var checkboxesStorage = new Page.Helpers.Storage("checkbox", function (checkbox) {
            return checkbox.checked ? "true" : "false";
        }, function (id, serializedValue) {
            var checkbox = checkboxesCache.getByIdSafe(id);
            if (checkbox && (serializedValue === "true" || serializedValue === "false")) {
                checkbox.checked = (serializedValue === "true");
                checkbox.callObservers();
                return true;
            }
            return false;
        });
        Page.Helpers.Events.callAfterDOMLoaded(function () {
            checkboxesCache.load();
            checkboxesStorage.applyStoredState();
        });
        function addObserver(checkboxId, observer) {
            var checkbox = checkboxesCache.getById(checkboxId);
            checkbox.observers.push(observer);
        }
        Checkbox_1.addObserver = addObserver;
        function setChecked(checkboxId, value) {
            var checkbox = checkboxesCache.getById(checkboxId);
            checkbox.checked = value;
        }
        Checkbox_1.setChecked = setChecked;
        function isChecked(checkboxId) {
            var checkbox = checkboxesCache.getById(checkboxId);
            return checkbox.checked;
        }
        Checkbox_1.isChecked = isChecked;
        function storeState(checkboxId) {
            var checkbox = checkboxesCache.getById(checkboxId);
            checkboxesStorage.storeState(checkbox);
        }
        Checkbox_1.storeState = storeState;
        function clearStoredState(checkboxId) {
            var checkbox = checkboxesCache.getById(checkboxId);
            checkboxesStorage.clearStoredState(checkbox);
        }
        Checkbox_1.clearStoredState = clearStoredState;
    })(Checkbox = Page.Checkbox || (Page.Checkbox = {}));
})(Page || (Page = {}));


var Page;
(function (Page) {
    var Range;
    (function (Range_1) {
        var Range = /** @class */ (function () {
            function Range(container) {
                var _this = this;
                this.onInputObservers = [];
                this.onChangeObservers = [];
                this.inputElement = Page.Helpers.Utils.selector(container, "input[type='range']");
                this.progressLeftElement = Page.Helpers.Utils.selector(container, ".range-progress-left");
                this.tooltipElement = Page.Helpers.Utils.selector(container, "output.range-tooltip");
                this.id = this.inputElement.id;
                var inputMin = +this.inputElement.min;
                var inputMax = +this.inputElement.max;
                var inputStep = +this.inputElement.step;
                this.nbDecimalsToDisplay = Range.getMaxNbDecimals(inputMin, inputMax, inputStep);
                this.inputElement.addEventListener("input", function (event) {
                    event.stopPropagation();
                    _this.reloadValue();
                    _this.callSpecificObservers(_this.onInputObservers);
                });
                this.inputElement.addEventListener("change", function (event) {
                    event.stopPropagation();
                    _this.reloadValue();
                    rangesStorage.storeState(_this);
                    _this.callSpecificObservers(_this.onChangeObservers);
                });
                this.reloadValue();
            }
            Object.defineProperty(Range.prototype, "value", {
                get: function () {
                    return this._value;
                },
                set: function (newValue) {
                    this.inputElement.value = "" + newValue;
                    this.reloadValue();
                },
                enumerable: false,
                configurable: true
            });
            Range.prototype.callObservers = function () {
                this.callSpecificObservers(this.onInputObservers);
                this.callSpecificObservers(this.onChangeObservers);
            };
            Range.prototype.callSpecificObservers = function (observers) {
                for (var _i = 0, observers_1 = observers; _i < observers_1.length; _i++) {
                    var observer = observers_1[_i];
                    observer(this.value);
                }
            };
            Range.prototype.updateAppearance = function () {
                var currentLength = +this.inputElement.value - +this.inputElement.min;
                var totalLength = +this.inputElement.max - +this.inputElement.min;
                var progression = currentLength / totalLength;
                progression = Math.max(0, Math.min(1, progression));
                this.progressLeftElement.style.width = (100 * progression) + "%";
                var text;
                if (this.nbDecimalsToDisplay < 0) {
                    text = this.inputElement.value;
                }
                else {
                    text = (+this.inputElement.value).toFixed(this.nbDecimalsToDisplay);
                }
                this.tooltipElement.textContent = text;
            };
            Range.prototype.reloadValue = function () {
                this._value = +this.inputElement.value;
                this.updateAppearance();
            };
            Range.getMaxNbDecimals = function () {
                var numbers = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    numbers[_i] = arguments[_i];
                }
                var nbDecimals = -1;
                for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
                    var n = numbers_1[_a];
                    var local = Range.nbDecimals(n);
                    if (n < 0) {
                        return -1;
                    }
                    else if (nbDecimals < local) {
                        nbDecimals = local;
                    }
                }
                return nbDecimals;
            };
            Range.nbDecimals = function (x) {
                var xAsString = x.toString();
                if (/^[0-9]+$/.test(xAsString)) {
                    return 0;
                }
                else if (/^[0-9]+\.[0-9]+$/.test(xAsString)) {
                    return xAsString.length - (xAsString.indexOf(".") + 1);
                }
                return -1; // failed to parse
            };
            return Range;
        }());
        var rangesCache = new Page.Helpers.Cache("Range", function () {
            var selector = ".range-container > input[type='range']";
            var rangeElements = Page.Helpers.Utils.selectorAll(document, selector);
            return rangeElements.map(function (rangeElement) {
                var container = rangeElement.parentElement;
                return new Range(container);
            });
        });
        var rangesStorage = new Page.Helpers.Storage("range", function (range) {
            return "" + range.value;
        }, function (id, serializedValue) {
            var range = rangesCache.getByIdSafe(id);
            if (range) {
                range.value = +serializedValue;
                range.callObservers();
                return true;
            }
            return false;
        });
        Page.Helpers.Events.callAfterDOMLoaded(function () {
            rangesCache.load();
            rangesStorage.applyStoredState();
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
        function addObserver(rangeId, observer) {
            var range = rangesCache.getById(rangeId);
            if (isIE11) { // bug in IE 11, input event is never fired
                range.onChangeObservers.push(observer);
            }
            else {
                range.onInputObservers.push(observer);
            }
        }
        Range_1.addObserver = addObserver;
        /**
         * Callback will be called only when the value stops changing.
         */
        function addLazyObserver(rangeId, observer) {
            var range = rangesCache.getById(rangeId);
            range.onChangeObservers.push(observer);
        }
        Range_1.addLazyObserver = addLazyObserver;
        function getValue(rangeId) {
            var range = rangesCache.getById(rangeId);
            return range.value;
        }
        Range_1.getValue = getValue;
        function setValue(rangeId, value) {
            var range = rangesCache.getById(rangeId);
            range.value = value;
        }
        Range_1.setValue = setValue;
        function storeState(rangeId) {
            var range = rangesCache.getById(rangeId);
            rangesStorage.storeState(range);
        }
        Range_1.storeState = storeState;
        function clearStoredState(rangeId) {
            var range = rangesCache.getById(rangeId);
            rangesStorage.clearStoredState(range);
        }
        Range_1.clearStoredState = clearStoredState;
    })(Range = Page.Range || (Page.Range = {}));
})(Page || (Page = {}));


var Page;
(function (Page) {
    var ColorPicker;
    (function (ColorPicker_1) {
        function clamp(value, min, max) {
            return Math.max(min, Math.min(max, value));
        }
        function roundAndClamp(value, min, max) {
            var rounded = Math.round(value);
            return clamp(rounded, min, max);
        }
        function positiveModulus(a, b) {
            return ((a % b) + b) % b;
        }
        var ColorSpace;
        (function (ColorSpace) {
            function parseHexa(value) {
                if (/^#[0-9a-fA-F]{6}$/.test(value)) {
                    return value.toUpperCase();
                }
                return null;
            }
            ColorSpace.parseHexa = parseHexa;
            function hsvToRgb(hsv) {
                var h2 = hsv.h / 60;
                var c = hsv.s * hsv.v;
                var x = c * (1 - Math.abs(positiveModulus(h2, 2) - 1));
                var rgb;
                if (h2 <= 1) {
                    rgb = { r: c, g: x, b: 0 };
                }
                else if (h2 <= 2) {
                    rgb = { r: x, g: c, b: 0 };
                }
                else if (h2 <= 3) {
                    rgb = { r: 0, g: c, b: x };
                }
                else if (h2 <= 4) {
                    rgb = { r: 0, g: x, b: c };
                }
                else if (h2 <= 5) {
                    rgb = { r: x, g: 0, b: c };
                }
                else {
                    rgb = { r: c, g: 0, b: x };
                }
                var m = hsv.v - c;
                rgb.r = roundAndClamp((rgb.r + m) * 255, 0, 255);
                rgb.g = roundAndClamp((rgb.g + m) * 255, 0, 255);
                rgb.b = roundAndClamp((rgb.b + m) * 255, 0, 255);
                return rgb;
            }
            ColorSpace.hsvToRgb = hsvToRgb;
            function rgbToHsv(rgb) {
                var nr = rgb.r / 255;
                var ng = rgb.g / 255;
                var nb = rgb.b / 255;
                var cmax = Math.max(nr, ng, nb);
                var cmin = Math.min(nr, ng, nb);
                var delta = cmax - cmin;
                var result = { h: 0, s: 0, v: cmax };
                if (delta !== 0) {
                    if (cmax === nr) {
                        result.h = 60 * (((ng - nb) / delta) % 6);
                    }
                    else if (cmax === ng) {
                        result.h = 60 * (((nb - nr) / delta) + 2);
                    }
                    else if (cmax === nb) {
                        result.h = 60 * (((nr - ng) / delta) + 4);
                    }
                }
                if (cmax !== 0) {
                    result.s = delta / cmax;
                }
                result.h = positiveModulus(result.h, 360);
                return result;
            }
            ColorSpace.rgbToHsv = rgbToHsv;
            function rgbToHex(rgb) {
                return "#" + charToHex(rgb.r) + charToHex(rgb.g) + charToHex(rgb.b);
            }
            ColorSpace.rgbToHex = rgbToHex;
            function hexToRgb(hex) {
                return {
                    r: parseInt(hex.substring(1, 3), 16),
                    g: parseInt(hex.substring(3, 5), 16),
                    b: parseInt(hex.substring(5, 7), 16),
                };
            }
            ColorSpace.hexToRgb = hexToRgb;
            function charToHex(value) {
                var hex = value.toString(16).toUpperCase();
                return hex.length === 2 ? hex : "0" + hex;
            }
        })(ColorSpace || (ColorSpace = {}));
        var ColorPicker = /** @class */ (function () {
            function ColorPicker(element) {
                var _this = this;
                this.observers = [];
                this.element = element;
                this.id = element.id;
                this.colorPreview = element.querySelector(".color-preview");
                this.colorPreviewText = element.querySelector(".color-value");
                this.updateVisiblePart();
                this.element.addEventListener("click", function () {
                    Popup.assignPopup(_this);
                });
            }
            Object.defineProperty(ColorPicker.prototype, "value", {
                get: function () {
                    var fromDataset = this.element.dataset["currentColor"];
                    if (!fromDataset) {
                        throw new Error("No current color on ColorPicker '".concat(this.id, "'."));
                    }
                    return fromDataset;
                },
                set: function (newValue) {
                    var previousValue = this.value;
                    if (previousValue !== newValue) {
                        this.element.dataset["currentColor"] = newValue;
                        this.updateVisiblePart();
                        var rgb = ColorSpace.hexToRgb(newValue);
                        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                            var observer = _a[_i];
                            observer(rgb);
                        }
                    }
                },
                enumerable: false,
                configurable: true
            });
            ColorPicker.prototype.attachPopup = function (popup) {
                var parentElement = this.element.parentElement;
                if (!parentElement) {
                    throw new Error("ColorPicker '".concat(this.id, "' is not attached."));
                }
                parentElement.appendChild(popup);
            };
            ColorPicker.prototype.updateVisiblePart = function () {
                var hexValue = this.value;
                this.colorPreview.style.background = hexValue;
                this.colorPreviewText.textContent = hexValue;
            };
            return ColorPicker;
        }());
        var colorPickersCache = new Page.Helpers.Cache("ColorPicker", function () {
            var containers = Page.Helpers.Utils.selectorAll(document, ".color-picker[id]");
            return containers.map(function (container) {
                return new ColorPicker(container);
            });
        });
        var colorPickersStorage = new Page.Helpers.Storage("color-picker", function (colorPicker) {
            return colorPicker.value;
        }, function (id, serializedValue) {
            var colorPicker = colorPickersCache.getByIdSafe(id);
            var hexValue = ColorSpace.parseHexa(serializedValue);
            if (colorPicker && hexValue) {
                colorPicker.value = hexValue;
                return true;
            }
            return false;
        });
        var Popup = /** @class */ (function () {
            function Popup() {
                var _this = this;
                this.hsv = { h: 200, s: 0.75, v: 0.5 };
                this.popupElement = Popup.buildElement("div", ["popup", "color-picker-popup"]);
                {
                    this.valueSaturationPicker = Popup.buildElement("div", ["block", "picker", "value-saturation-picker"]);
                    this.hueColorFilter = Popup.buildElement("span", ["color-filter", "outlined"]);
                    this.valueSaturationPicker.appendChild(this.hueColorFilter);
                    var valueColorFilter = Popup.buildElement("span", ["color-filter", "outlined"]);
                    valueColorFilter.style.background = "linear-gradient(to top, black, rgba(0,0,0,0))";
                    this.valueSaturationPicker.appendChild(valueColorFilter);
                    this.valueSaturationCursor = Popup.buildElement("span", ["cursor"]);
                    this.valueSaturationPicker.appendChild(this.valueSaturationCursor);
                    this.popupElement.appendChild(this.valueSaturationPicker);
                }
                {
                    this.huePicker = Popup.buildElement("div", ["block", "picker", "hue-picker"]);
                    var hueBar = Popup.buildElement("span", ["hue-bar"]);
                    this.huePicker.appendChild(hueBar);
                    this.hueCursor = Popup.buildElement("span", ["cursor"]);
                    this.huePicker.appendChild(this.hueCursor);
                    this.popupElement.appendChild(this.huePicker);
                }
                {
                    var previewBlock = Popup.buildElement("div", ["preview-block"]);
                    this.previewColor = Popup.buildElement("div", ["preview-color", "outlined"]);
                    this.previewColor.classList.add("block");
                    previewBlock.appendChild(this.previewColor);
                    {
                        var previewText = Popup.buildElement("table", ["block"]);
                        var hexaContainer = Popup.buildPreviewText(previewText, "hexa");
                        var hash = Popup.buildElement("span");
                        hash.textContent = "#";
                        hexaContainer.appendChild(hash);
                        this.previewHexaValue = document.createElement("input");
                        this.previewHexaValue.type = "text";
                        this.previewHexaValue.minLength = 6;
                        this.previewHexaValue.maxLength = 6;
                        this.previewHexaValue.size = 6;
                        this.previewHexaValue.pattern = "[0-9a-fA-F]{6}";
                        this.previewHexaValue.addEventListener("input", function () {
                            var newValue = "#" + _this.previewHexaValue.value;
                            var newHexa = ColorSpace.parseHexa(newValue);
                            if (newHexa) { // valid input
                                var newRgb = ColorSpace.hexToRgb(newValue);
                                var newHsl = ColorSpace.rgbToHsv(newRgb);
                                _this.hsv.h = newHsl.h;
                                _this.hsv.s = newHsl.s;
                                _this.hsv.v = newHsl.v;
                                _this.onInput();
                            }
                        });
                        hexaContainer.appendChild(this.previewHexaValue);
                        this.previewRgbValue = Popup.buildPreviewText(previewText, "rgb");
                        this.previewHslValue = Popup.buildPreviewText(previewText, "hsv");
                        previewBlock.appendChild(previewText);
                    }
                    this.popupElement.appendChild(previewBlock);
                }
                this.registerCursorEvent(this.huePicker, function (coords) {
                    _this.hsv.h = roundAndClamp(360 * coords.x, 0, 360);
                    _this.onInput();
                });
                this.registerCursorEvent(this.valueSaturationPicker, function (coords) {
                    _this.hsv.s = clamp(coords.x, 0, 1);
                    _this.hsv.v = clamp(1 - coords.y, 0, 1);
                    _this.onInput();
                    // retain exact position because rebuilding it from color is not exact
                    _this.valueSaturationCursor.style.left = Popup.percentageString(coords.x);
                    _this.valueSaturationCursor.style.top = Popup.percentageString(coords.y);
                });
                var isActive = false;
                this.popupElement.addEventListener("mousedown", function setActive() {
                    isActive = true;
                });
                window.addEventListener("mouseup", function (event) {
                    var clickedOutOfPopup = !_this.popupElement.contains(event.target);
                    if (clickedOutOfPopup && _this.popupElement.parentElement && !isActive) {
                        _this.popupElement.parentElement.removeChild(_this.popupElement);
                    }
                    isActive = false;
                });
            }
            Popup.assignPopup = function (colorPicker) {
                if (!Popup.popup) {
                    Popup.popup = new Popup();
                }
                Popup.popup.attach(colorPicker);
            };
            Popup.prototype.updateAppearance = function () {
                var rgb = ColorSpace.hsvToRgb(this.hsv);
                var hexString = ColorSpace.rgbToHex(rgb);
                var rgbString = "rgb(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ")"); // real coor
                var hslString = "hsl(".concat(Math.round(this.hsv.h), ", 100%, 50%)"); // pure color
                // colors
                this.hueColorFilter.style.background = "linear-gradient(to right, white, ".concat(hslString, ")");
                this.hueCursor.style.background = hslString;
                this.valueSaturationCursor.style.background = rgbString;
                this.previewColor.style.background = rgbString;
                // text
                this.previewHexaValue.value = hexString.substring(1);
                this.previewRgbValue.textContent = "".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b);
                var percentSaturation = Popup.percentageString(this.hsv.s);
                var percentValue = Popup.percentageString(this.hsv.v);
                this.previewHslValue.textContent = "".concat(Math.round(this.hsv.h), "\u00B0, ").concat(percentSaturation, ", ").concat(percentValue);
                // cursors positions
                this.hueCursor.style.left = Popup.percentageString(this.hsv.h / 360);
                this.valueSaturationCursor.style.left = percentSaturation;
                this.valueSaturationCursor.style.top = Popup.percentageString(1 - this.hsv.v);
            };
            Popup.prototype.onInput = function () {
                var rgb = ColorSpace.hsvToRgb(this.hsv);
                var hexString = ColorSpace.rgbToHex(rgb);
                this.updateAppearance();
                if (this.currentControl) {
                    this.currentControl.value = hexString;
                }
                colorPickersStorage.storeState(this.currentControl);
            };
            Popup.prototype.attach = function (colorPicker) {
                this.currentControl = colorPicker;
                var currentHex = colorPicker.value;
                var currentRgb = ColorSpace.hexToRgb(currentHex);
                var currentHsv = ColorSpace.rgbToHsv(currentRgb);
                Popup.popup.hsv.h = currentHsv.h;
                Popup.popup.hsv.v = currentHsv.v;
                Popup.popup.hsv.s = currentHsv.s;
                Popup.popup.updateAppearance();
                // reset placement to avoid flickering due to the popup being temporarily out of screen
                this.popupElement.style.top = "";
                this.popupElement.style.left = "";
                this.currentControl.attachPopup(this.popupElement);
                this.fitPopupToContainer();
            };
            Popup.prototype.fitPopupToContainer = function () {
                if (this.popupElement.parentElement) {
                    var container = document.querySelector(".controls-block") || document.body;
                    var containerBox = container.getBoundingClientRect();
                    var margin = 16;
                    var containerRight = containerBox.left + containerBox.width - margin;
                    var containerBottom = containerBox.top + containerBox.height - margin;
                    this.popupElement.style.maxWidth = (containerBox.width - 2 * margin) + "px";
                    this.popupElement.style.maxHeight = (containerBox.height - 2 * margin) + "px";
                    var parentBox = this.popupElement.parentElement.getBoundingClientRect();
                    var popupBox = this.popupElement.getBoundingClientRect();
                    var leftOffset = Math.max(0, (containerBox.left + margin) - parentBox.left);
                    var rightOffset = Math.min(0, containerRight - (parentBox.left + popupBox.width));
                    var topOffset = Math.max(0, (containerBox.top + margin) - parentBox.top);
                    var bottomOffset = Math.min(0, containerBottom - (parentBox.top + popupBox.height));
                    this.popupElement.style.left = (leftOffset + rightOffset) + "px";
                    this.popupElement.style.top = (topOffset + bottomOffset) + "px";
                }
            };
            Popup.prototype.registerCursorEvent = function (container, callback) {
                function absoluteToRelative(clientX, clientY) {
                    var containerBox = container.getBoundingClientRect();
                    var relativeX = (clientX - containerBox.left) / containerBox.width;
                    var relativeY = (clientY - containerBox.top) / containerBox.height;
                    return {
                        x: Math.max(0, Math.min(1, relativeX)),
                        y: Math.max(0, Math.min(1, relativeY)),
                    };
                }
                var cursor = container.querySelector(".cursor");
                var handleOffset = { x: 0, y: 0 };
                var isBeingDragged = false;
                container.addEventListener("mousedown", function onMouseDown(event) {
                    isBeingDragged = true;
                    handleOffset.x = 0;
                    handleOffset.y = 0;
                    if (cursor && event.target === cursor) {
                        var cursorBox = cursor.getBoundingClientRect();
                        handleOffset.x = 0.5 * cursorBox.width - (event.clientX - cursorBox.left);
                        handleOffset.y = 0.5 * cursorBox.height - (event.clientY - cursorBox.top);
                    }
                    else {
                        var coords = absoluteToRelative(event.clientX, event.clientY);
                        callback(coords);
                    }
                });
                window.addEventListener("mouseup", function onMouseUp() {
                    isBeingDragged = false;
                });
                window.addEventListener("mousemove", function onMouseMove(event) {
                    if (isBeingDragged) {
                        var coords = absoluteToRelative(event.clientX + handleOffset.x, event.clientY + handleOffset.y);
                        callback(coords);
                    }
                });
                var currentTouchIds = [];
                container.addEventListener("touchstart", function onTouchStart(event) {
                    isBeingDragged = true;
                    var isFirstTouch = (currentTouchIds.length === 0);
                    var changedTouches = Page.Helpers.Utils.touchArray(event.changedTouches);
                    for (var _i = 0, changedTouches_1 = changedTouches; _i < changedTouches_1.length; _i++) {
                        var touch = changedTouches_1[_i];
                        var alreadyRegistered = false;
                        for (var _a = 0, currentTouchIds_1 = currentTouchIds; _a < currentTouchIds_1.length; _a++) {
                            var knownTouchId = currentTouchIds_1[_a];
                            if (touch.identifier === knownTouchId) {
                                alreadyRegistered = true;
                                break;
                            }
                        }
                        if (!alreadyRegistered) {
                            currentTouchIds.push(touch.identifier);
                        }
                    }
                    if (isFirstTouch && currentTouchIds.length > 0) {
                        var changedTouch = changedTouches[0];
                        if (!changedTouch) {
                            console.error("Should not happen: ColorPicker missed first touch.");
                        }
                        else {
                            var coords = absoluteToRelative(changedTouch.clientX, changedTouch.clientY);
                            callback(coords);
                        }
                    }
                }, false);
                window.addEventListener("touchend", function onTouchEnd(event) {
                    var knewAtLeastOneTouch = (currentTouchIds.length > 0);
                    var changedTouches = Page.Helpers.Utils.touchArray(event.changedTouches);
                    for (var _i = 0, changedTouches_2 = changedTouches; _i < changedTouches_2.length; _i++) {
                        var touch = changedTouches_2[_i];
                        for (var iC = 0; iC < currentTouchIds.length; ++iC) {
                            if (touch.identifier === currentTouchIds[iC]) {
                                currentTouchIds.splice(iC, 1);
                                iC--;
                            }
                        }
                    }
                    if (knewAtLeastOneTouch && currentTouchIds.length === 0) {
                        isBeingDragged = false;
                    }
                });
                window.addEventListener("touchmove", function onTouchMove(event) {
                    if (currentTouchIds.length > 0 && isBeingDragged) {
                        var touches = Page.Helpers.Utils.touchArray(event.changedTouches);
                        for (var _i = 0, touches_1 = touches; _i < touches_1.length; _i++) {
                            var touch = touches_1[_i];
                            for (var _a = 0, currentTouchIds_2 = currentTouchIds; _a < currentTouchIds_2.length; _a++) {
                                var knownTouch = currentTouchIds_2[_a];
                                if (touch.identifier === knownTouch) {
                                    var coords = absoluteToRelative(touch.clientX, touch.clientY);
                                    callback(coords);
                                    event.preventDefault();
                                    return;
                                }
                            }
                        }
                    }
                }, { passive: false });
            };
            Popup.buildElement = function (tagname, classList) {
                var element = document.createElement(tagname);
                if (classList) {
                    element.className = classList.join(" ");
                }
                return element;
            };
            Popup.buildPreviewText = function (container, name) {
                var row = document.createElement("tr");
                var nameSpan = document.createElement("td");
                nameSpan.textContent = name + ":";
                var valueSpan = document.createElement("td");
                row.appendChild(nameSpan);
                row.appendChild(valueSpan);
                container.appendChild(row);
                return valueSpan;
            };
            Popup.percentageString = function (value) {
                return Math.round(100 * value) + "%";
            };
            return Popup;
        }());
        Page.Helpers.Events.callAfterDOMLoaded(function () {
            colorPickersCache.load();
            colorPickersStorage.applyStoredState();
        });
        function addObserver(id, observer) {
            var colorPicker = colorPickersCache.getById(id);
            colorPicker.observers.push(observer);
        }
        ColorPicker_1.addObserver = addObserver;
        function getValue(id) {
            var colorPicker = colorPickersCache.getById(id);
            var hexValue = colorPicker.value;
            return ColorSpace.hexToRgb(hexValue);
        }
        ColorPicker_1.getValue = getValue;
        function getValueHex(id) {
            var colorPicker = colorPickersCache.getById(id);
            return colorPicker.value;
        }
        ColorPicker_1.getValueHex = getValueHex;
        /**
         * @param id control id
         * @param r integer in [0, 255]
         * @param g integer in [0, 255]
         * @param b integer in [0, 255]
         */
        function setValue(id, r, g, b) {
            var rgb = {
                r: roundAndClamp(r, 0, 255),
                g: roundAndClamp(g, 0, 255),
                b: roundAndClamp(b, 0, 255),
            };
            var hexValue = ColorSpace.rgbToHex(rgb);
            var colorPicker = colorPickersCache.getById(id);
            colorPicker.value = hexValue;
        }
        ColorPicker_1.setValue = setValue;
        function storeState(id) {
            var colorPicker = colorPickersCache.getById(id);
            colorPickersStorage.storeState(colorPicker);
        }
        ColorPicker_1.storeState = storeState;
        function clearStoredState(id) {
            var colorPicker = colorPickersCache.getById(id);
            colorPickersStorage.clearStoredState(colorPicker);
        }
        ColorPicker_1.clearStoredState = clearStoredState;
    })(ColorPicker = Page.ColorPicker || (Page.ColorPicker = {}));
})(Page || (Page = {}));


var Page;
(function (Page) {
    var Tabs;
    (function (Tabs_1) {
        var Tabs = /** @class */ (function () {
            function Tabs(container) {
                var _this = this;
                this.observers = [];
                this.id = Tabs.computeShortId(container.id);
                this.inputElements = [];
                var inputElements = Page.Helpers.Utils.selectorAll(container, "input");
                for (var _i = 0, inputElements_1 = inputElements; _i < inputElements_1.length; _i++) {
                    var inputElement = inputElements_1[_i];
                    this.inputElements.push(inputElement);
                    inputElement.addEventListener("change", function (event) {
                        event.stopPropagation();
                        _this.reloadValues();
                        tabsStorage.storeState(_this);
                        _this.callObservers();
                    }, false);
                }
                this.reloadValues();
            }
            Tabs.computeShortId = function (fullId) {
                if (fullId.lastIndexOf(Tabs.ID_SUFFIX) != fullId.length - Tabs.ID_SUFFIX.length) {
                    throw new Error("Invalid tabs container id: '" + fullId + "'.");
                }
                return fullId.substring(0, fullId.length - Tabs.ID_SUFFIX.length);
            };
            Object.defineProperty(Tabs.prototype, "values", {
                get: function () {
                    return this._values;
                },
                set: function (newValues) {
                    for (var _i = 0, _a = this.inputElements; _i < _a.length; _i++) {
                        var inputElement = _a[_i];
                        var isWanted = false;
                        for (var _b = 0, newValues_1 = newValues; _b < newValues_1.length; _b++) {
                            var newValue = newValues_1[_b];
                            if (inputElement.value === newValue) {
                                isWanted = true;
                                break;
                            }
                        }
                        inputElement.checked = isWanted;
                    }
                    this.reloadValues();
                },
                enumerable: false,
                configurable: true
            });
            Tabs.prototype.callObservers = function () {
                for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                    var observer = _a[_i];
                    observer(this._values);
                }
            };
            Tabs.prototype.reloadValues = function () {
                var values = [];
                for (var _i = 0, _a = this.inputElements; _i < _a.length; _i++) {
                    var inputElement = _a[_i];
                    if (inputElement.checked) {
                        values.push(inputElement.value);
                    }
                }
                this._values = values;
            };
            Tabs.ID_SUFFIX = "-id";
            return Tabs;
        }());
        var tabsCache = new Page.Helpers.Cache("Tabs", function () {
            var containerElements = Page.Helpers.Utils.selectorAll(document, "div.tabs[id]");
            return containerElements.map(function (containerElement) {
                return new Tabs(containerElement);
            });
        });
        var tabsStorage = new Page.Helpers.Storage("tabs", function (tabs) {
            var valuesList = tabs.values;
            return valuesList.join(";");
        }, function (id, serializedValue) {
            var values = serializedValue.split(";");
            var tabs = tabsCache.getByIdSafe(id);
            if (tabs) {
                tabs.values = values;
                tabs.callObservers();
                return true;
            }
            return false;
        });
        Page.Helpers.Events.callAfterDOMLoaded(function () {
            tabsCache.load();
            tabsStorage.applyStoredState();
        });
        function addObserver(tabsId, observer) {
            var tabs = tabsCache.getById(tabsId);
            tabs.observers.push(observer);
        }
        Tabs_1.addObserver = addObserver;
        function getValues(tabsId) {
            var tabs = tabsCache.getById(tabsId);
            return tabs.values;
        }
        Tabs_1.getValues = getValues;
        function setValues(tabsId, values, updateURLStorage) {
            if (updateURLStorage === void 0) { updateURLStorage = false; }
            var tabs = tabsCache.getById(tabsId);
            tabs.values = values;
            if (updateURLStorage) {
                tabsStorage.storeState(tabs);
            }
        }
        Tabs_1.setValues = setValues;
        function storeState(tabsId) {
            var tabs = tabsCache.getById(tabsId);
            tabsStorage.storeState(tabs);
        }
        Tabs_1.storeState = storeState;
        function clearStoredState(tabsIdd) {
            var tabs = tabsCache.getById(tabsIdd);
            tabsStorage.clearStoredState(tabs);
        }
        Tabs_1.clearStoredState = clearStoredState;
    })(Tabs = Page.Tabs || (Page.Tabs = {}));
})(Page || (Page = {}));


var Page;
(function (Page) {
    var Select;
    (function (Select_1) {
        var Select = /** @class */ (function () {
            function Select(container) {
                var _this = this;
                this.observers = [];
                this.id = container.id;
                this.containerElement = container;
                this.currentValueElement = Page.Helpers.Utils.selector(container, ".select-current-value");
                this.valuesListElement = Page.Helpers.Utils.selector(container, ".select-values-list");
                this.placeholder = this.valuesListElement.dataset["placeholder"] || "";
                this.currentValue = this.currentValueElement.dataset["value"] || null;
                this.valueElements = [];
                var elements = this.valuesListElement.querySelectorAll(".select-value[data-value]");
                for (var i = 0; i < elements.length; i++) {
                    this.valueElements.push(elements[i]);
                }
                this.containerElement.style.width = "".concat(this.computeMinimumWidth(), "px");
                document.addEventListener("click", function (event) {
                    var clickedElement = event.target;
                    var isExpanded = _this.containerElement.classList.contains(Select.EXPANDED_CLASS);
                    if (isExpanded) {
                        var clickedOnValuesList = _this.valuesListElement.contains(clickedElement);
                        if (clickedOnValuesList) {
                            for (var _i = 0, _a = _this.valueElements; _i < _a.length; _i++) {
                                var valueElement = _a[_i];
                                if (valueElement.contains(clickedElement)) {
                                    _this.currentValue = valueElement.dataset["value"] || null;
                                    _this.currentValueElement.dataset["value"] = _this.currentValue || undefined;
                                    _this.currentValueElement.textContent = valueElement.textContent;
                                    selectStorage.storeState(_this);
                                    _this.callObservers();
                                }
                            }
                        }
                        _this.containerElement.classList.remove(Select.EXPANDED_CLASS);
                    }
                    else {
                        var clickedOnCurrentValue = _this.currentValueElement.contains(clickedElement);
                        if (clickedOnCurrentValue) {
                            _this.containerElement.classList.add(Select.EXPANDED_CLASS);
                        }
                    }
                });
            }
            Object.defineProperty(Select.prototype, "value", {
                get: function () {
                    return this.currentValue || null;
                },
                set: function (v) {
                    if (v === null) {
                        this.currentValueElement.removeAttribute("data-value");
                        this.currentValueElement.textContent = this.placeholder;
                        this.currentValue = null;
                    }
                    else {
                        for (var _i = 0, _a = this.valueElements; _i < _a.length; _i++) {
                            var valueElement = _a[_i];
                            var valueFromHtml = valueElement.dataset["value"];
                            if (valueFromHtml === v) {
                                this.currentValue = valueFromHtml;
                                this.currentValueElement.dataset["value"] = valueFromHtml;
                                this.currentValueElement.textContent = valueElement.textContent;
                                return;
                            }
                        }
                        console.log("No \"".concat(v, "\" value for \"").concat(this.id, "\" select."));
                    }
                },
                enumerable: false,
                configurable: true
            });
            Select.prototype.callObservers = function () {
                for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
                    var observer = _a[_i];
                    observer(this.value);
                }
            };
            Select.prototype.computeMinimumWidth = function () {
                var result = 0;
                this.valuesListElement.style.opacity = "0";
                this.valuesListElement.style.width = "auto";
                this.valuesListElement.style.fontWeight = "bold";
                this.valuesListElement.style.display = "block";
                var placeholderValue = document.createElement("div");
                placeholderValue.classList.add("select-value");
                placeholderValue.textContent = this.placeholder;
                this.valuesListElement.appendChild(placeholderValue);
                var parentNode = this.containerElement.parentNode;
                if (!parentNode) {
                    throw new Error("Select in not attached");
                }
                var nextSiblingNode = this.containerElement.nextSibling;
                parentNode.removeChild(this.containerElement);
                document.body.appendChild(this.containerElement);
                result = this.valuesListElement.getBoundingClientRect().width;
                document.body.removeChild(this.containerElement);
                parentNode.insertBefore(this.containerElement, nextSiblingNode);
                this.valuesListElement.removeChild(placeholderValue);
                this.valuesListElement.style.display = "";
                this.valuesListElement.style.fontWeight = "";
                this.valuesListElement.style.width = "";
                this.valuesListElement.style.opacity = "";
                var MARGIN = 30;
                return result + MARGIN;
            };
            Select.EXPANDED_CLASS = "expanded";
            return Select;
        }());
        var selectsCache = new Page.Helpers.Cache("Select", function () {
            var containerElements = Page.Helpers.Utils.selectorAll(document, ".select-container[id]");
            return containerElements.map(function (containerElement) {
                return new Select(containerElement);
            });
        });
        var selectStorage = new Page.Helpers.Storage("select", function (select) {
            return select.value;
        }, function (id, serializedValue) {
            var select = selectsCache.getByIdSafe(id);
            if (select) {
                select.value = serializedValue;
                select.callObservers();
                return true;
            }
            return false;
        });
        Page.Helpers.Events.callAfterDOMLoaded(function () {
            selectsCache.load();
            selectStorage.applyStoredState();
        });
        function addObserver(id, observer) {
            var select = selectsCache.getById(id);
            select.observers.push(observer);
        }
        Select_1.addObserver = addObserver;
        function getValue(id) {
            var select = selectsCache.getById(id);
            return select.value;
        }
        Select_1.getValue = getValue;
        function setValue(id, value) {
            var select = selectsCache.getById(id);
            select.value = value;
        }
        Select_1.setValue = setValue;
        function storeState(id) {
            var select = selectsCache.getById(id);
            selectStorage.storeState(select);
        }
        Select_1.storeState = storeState;
        function clearStoredState(id) {
            var select = selectsCache.getById(id);
            selectStorage.clearStoredState(select);
        }
        Select_1.clearStoredState = clearStoredState;
    })(Select = Page.Select || (Page.Select = {}));
})(Page || (Page = {}));

var Page;
(function (Page) {
    var Button;
    (function (Button_1) {
        var Button = /** @class */ (function () {
            function Button(element) {
                var _this = this;
                this.observers = [];
                this.id = element.id;
                this.element = element;
                this.element.addEventListener("click", function (event) {
                    event.stopPropagation();
                    for (var _i = 0, _a = _this.observers; _i < _a.length; _i++) {
                        var observer = _a[_i];
                        observer();
                    }
                }, false);
            }
            Object.defineProperty(Button.prototype, "label", {
                set: function (newLabel) {
                    this.element.innerText = newLabel;
                },
                enumerable: false,
                configurable: true
            });
            return Button;
        }());
        var buttonsCache = new Page.Helpers.Cache("Button", function () {
            var elements = Page.Helpers.Utils.selectorAll(document, "button[id]");
            return elements.map(function (element) {
                return new Button(element);
            });
        });
        function addObserver(buttonId, observer) {
            var button = buttonsCache.getById(buttonId);
            button.observers.push(observer);
        }
        Button_1.addObserver = addObserver;
        function setLabel(buttonId, label) {
            var button = buttonsCache.getById(buttonId);
            button.label = label;
        }
        Button_1.setLabel = setLabel;
    })(Button = Page.Button || (Page.Button = {}));
})(Page || (Page = {}));



var Page;
(function (Page) {
    var Canvas;
    (function (Canvas) {
        function getElementBySelector(selector) {
            var elt = document.querySelector(selector);
            if (!elt) {
                console.error("Cannot find element '" + selector + "'.");
            }
            return elt;
        }
        function getCanvasById(id) {
            return Page.Helpers.Utils.selector(document, "canvas[id=" + id + "]");
        }
        function getCheckboxFromId(id) {
            return Page.Helpers.Utils.selector(document, "input[type=checkbox][id=" + id + "]");
        }
        var canvasContainer = Page.Helpers.Utils.selector(document, "#canvas-container");
        var canvas = getCanvasById("canvas");
        var buttonsColumn = Page.Helpers.Utils.selector(document, "#canvas-buttons-column");
        var fullscreenCheckbox = getCheckboxFromId("fullscreen-checkbox-id");
        var sidePaneCheckbox = getCheckboxFromId("side-pane-checkbox-id");
        var loader = Page.Helpers.Utils.selector(canvasContainer, ".loader");
        var maxWidth = 512;
        var maxHeight = 512;
        function bindCanvasButtons() {
            function hideOverflow(value) {
                document.body.style.overflow = value ? "hidden" : "auto";
            }
            if (fullscreenCheckbox) {
                Page.Helpers.Events.callAfterDOMLoaded(function () {
                    hideOverflow(fullscreenCheckbox.checked);
                    fullscreenCheckbox.addEventListener("change", function () {
                        hideOverflow(fullscreenCheckbox.checked);
                    });
                });
                if (sidePaneCheckbox) {
                    fullscreenCheckbox.addEventListener("change", function () {
                        if (fullscreenCheckbox.checked) {
                            sidePaneCheckbox.checked = false;
                        }
                    }, false);
                }
            }
        }
        bindCanvasButtons();
        function getCanvasSize() {
            var rect = canvas.getBoundingClientRect();
            return [Math.floor(rect.width), Math.floor(rect.height)];
        }
        var lastCanvasSize = [0, 0];
        var canvasResizeObservers = [];
        function inPx(size) {
            return size + "px";
        }
        /**
         * Calls callbacks if needed.
         */
        function updateCanvasSize() {
            canvasContainer.style.width = "100vw";
            var size = getCanvasSize();
            if (fullscreenCheckbox.checked) {
                canvasContainer.style.height = "100%";
                canvasContainer.style.maxWidth = "";
                canvasContainer.style.maxHeight = "";
            }
            else {
                size[1] = size[0] * maxHeight / maxWidth;
                canvasContainer.style.height = inPx(size[1]);
                canvasContainer.style.maxWidth = inPx(maxWidth);
                canvasContainer.style.maxHeight = inPx(maxHeight);
            }
            if (size[0] !== lastCanvasSize[0] || size[1] !== lastCanvasSize[1]) {
                lastCanvasSize = getCanvasSize();
                for (var _i = 0, canvasResizeObservers_1 = canvasResizeObservers; _i < canvasResizeObservers_1.length; _i++) {
                    var observer = canvasResizeObservers_1[_i];
                    observer(lastCanvasSize[0], lastCanvasSize[1]);
                }
            }
        }
        Page.Helpers.Events.callAfterDOMLoaded(updateCanvasSize);
        fullscreenCheckbox.addEventListener("change", updateCanvasSize, false);
        window.addEventListener("resize", updateCanvasSize, false);
        var fullscreenToggleObservers = [updateCanvasSize];
        var mouseDownObservers = [];
        var mouseUpObservers = [];
        var mouseDragObservers = [];
        var mouseMoveObservers = [];
        var mouseEnterObservers = [];
        var mouseLeaveObservers = [];
        var mouseWheelObservers = [];
        /* Bind fullscreen events */
        if (fullscreenCheckbox) {
            fullscreenCheckbox.addEventListener("change", function () {
                var isFullscreen = fullscreenCheckbox.checked;
                for (var _i = 0, fullscreenToggleObservers_1 = fullscreenToggleObservers; _i < fullscreenToggleObservers_1.length; _i++) {
                    var observer = fullscreenToggleObservers_1[_i];
                    observer(isFullscreen);
                }
            }, false);
        }
        document.addEventListener("keydown", function (event) {
            if (event.keyCode === 27) {
                Canvas.toggleFullscreen(false);
            }
        });
        function clientToRelative(clientX, clientY) {
            var rect = canvas.getBoundingClientRect();
            return [
                (clientX - rect.left) / rect.width,
                (clientY - rect.top) / rect.height,
            ];
        }
        var Mouse;
        (function (Mouse) {
            var mousePosition = [0, 0];
            var clientMousePosition = [0, 0];
            var isMouseDownInternal = false;
            function getMousePosition() {
                return [mousePosition[0], mousePosition[1]];
            }
            Mouse.getMousePosition = getMousePosition;
            function setMousePosition(x, y) {
                mousePosition[0] = x;
                mousePosition[1] = y;
            }
            Mouse.setMousePosition = setMousePosition;
            function isMouseDown() {
                return isMouseDownInternal;
            }
            Mouse.isMouseDown = isMouseDown;
            function mouseDown(clientX, clientY) {
                var pos = clientToRelative(clientX, clientY);
                setMousePosition(pos[0], pos[1]);
                isMouseDownInternal = true;
                for (var _i = 0, mouseDownObservers_1 = mouseDownObservers; _i < mouseDownObservers_1.length; _i++) {
                    var observer = mouseDownObservers_1[_i];
                    observer();
                }
            }
            Mouse.mouseDown = mouseDown;
            function mouseUp() {
                if (isMouseDownInternal) {
                    isMouseDownInternal = false;
                    for (var _i = 0, mouseUpObservers_1 = mouseUpObservers; _i < mouseUpObservers_1.length; _i++) {
                        var observer = mouseUpObservers_1[_i];
                        observer();
                    }
                }
            }
            Mouse.mouseUp = mouseUp;
            function mouseMove(clientX, clientY) {
                clientMousePosition[0] = clientX;
                clientMousePosition[1] = clientY;
                var newPos = clientToRelative(clientX, clientY);
                var dX = newPos[0] - mousePosition[0];
                var dY = newPos[1] - mousePosition[1];
                // Update the mousePosition before calling the observers,
                // because they might call getMousePosition() and it needs to be up to date.
                mousePosition[0] = newPos[0];
                mousePosition[1] = newPos[1];
                if (isMouseDownInternal) {
                    for (var _i = 0, mouseDragObservers_1 = mouseDragObservers; _i < mouseDragObservers_1.length; _i++) {
                        var observer = mouseDragObservers_1[_i];
                        observer(dX, dY);
                    }
                }
                for (var _a = 0, mouseMoveObservers_1 = mouseMoveObservers; _a < mouseMoveObservers_1.length; _a++) {
                    var observer = mouseMoveObservers_1[_a];
                    observer(newPos[0], newPos[1]);
                }
            }
            Mouse.mouseMove = mouseMove;
            if (canvas) {
                canvas.addEventListener("mousedown", function (event) {
                    if (event.button === 0) {
                        mouseDown(event.clientX, event.clientY);
                    }
                }, false);
                canvas.addEventListener("mouseenter", function () {
                    for (var _i = 0, mouseEnterObservers_1 = mouseEnterObservers; _i < mouseEnterObservers_1.length; _i++) {
                        var observer = mouseEnterObservers_1[_i];
                        observer();
                    }
                }, false);
                canvas.addEventListener("mouseleave", function () {
                    for (var _i = 0, mouseLeaveObservers_1 = mouseLeaveObservers; _i < mouseLeaveObservers_1.length; _i++) {
                        var observer = mouseLeaveObservers_1[_i];
                        observer();
                    }
                }, false);
                canvas.addEventListener("wheel", function (event) {
                    if (mouseWheelObservers.length > 0) {
                        var delta = (event.deltaY > 0) ? 1 : -1;
                        for (var _i = 0, mouseWheelObservers_1 = mouseWheelObservers; _i < mouseWheelObservers_1.length; _i++) {
                            var observer = mouseWheelObservers_1[_i];
                            observer(delta, mousePosition);
                        }
                        event.preventDefault();
                        return false;
                    }
                    return true;
                }, false);
                window.addEventListener("mousemove", function (event) {
                    mouseMove(event.clientX, event.clientY);
                });
                window.addEventListener("mouseup", function (event) {
                    if (event.button === 0) {
                        mouseUp();
                    }
                });
                canvasResizeObservers.push(function () {
                    mouseMove(clientMousePosition[0], clientMousePosition[1]);
                });
            }
        })(Mouse || (Mouse = {}));
        (function Touch() {
            var currentTouches = [];
            var currentDistance = 0; // for pinching management
            function computeDistance(firstTouch, secondTouch) {
                var dX = firstTouch.clientX - secondTouch.clientX;
                var dY = firstTouch.clientY - secondTouch.clientY;
                return Math.sqrt(dX * dX + dY * dY);
            }
            function handleTouchStart(event) {
                var isFirstTouch = (currentTouches.length === 0);
                var changedTouches = Page.Helpers.Utils.touchArray(event.changedTouches);
                for (var _i = 0, changedTouches_1 = changedTouches; _i < changedTouches_1.length; _i++) {
                    var touch = changedTouches_1[_i];
                    var alreadyRegistered = false;
                    for (var _a = 0, currentTouches_1 = currentTouches; _a < currentTouches_1.length; _a++) {
                        var knownTouch = currentTouches_1[_a];
                        if (touch.identifier === knownTouch.id) {
                            alreadyRegistered = true;
                            break;
                        }
                    }
                    if (!alreadyRegistered) {
                        currentTouches.push({
                            id: touch.identifier,
                            clientX: touch.clientX,
                            clientY: touch.clientY,
                        });
                    }
                }
                if (isFirstTouch && currentTouches.length > 0) {
                    var currentTouch = currentTouches[0];
                    Mouse.mouseDown(currentTouch.clientX, currentTouch.clientY);
                }
                else if (currentTouches.length === 2) {
                    currentDistance = computeDistance(currentTouches[0], currentTouches[1]);
                }
            }
            function handleTouchEnd(event) {
                var knewAtLeastOneTouch = (currentTouches.length > 0);
                var changedTouches = Page.Helpers.Utils.touchArray(event.changedTouches);
                for (var _i = 0, changedTouches_2 = changedTouches; _i < changedTouches_2.length; _i++) {
                    var touch = changedTouches_2[_i];
                    for (var iC = 0; iC < currentTouches.length; ++iC) {
                        if (touch.identifier === currentTouches[iC].id) {
                            currentTouches.splice(iC, 1);
                            iC--;
                        }
                    }
                }
                if (currentTouches.length === 1) {
                    var firstTouch = currentTouches[0];
                    var newPos = clientToRelative(firstTouch.clientX, firstTouch.clientY);
                    Mouse.setMousePosition(newPos[0], newPos[1]);
                }
                else if (knewAtLeastOneTouch && currentTouches.length === 0) {
                    Mouse.mouseUp();
                }
            }
            function handleTouchMove(event) {
                var touches = Page.Helpers.Utils.touchArray(event.changedTouches);
                for (var _i = 0, touches_1 = touches; _i < touches_1.length; _i++) {
                    var touch = touches_1[_i];
                    for (var _a = 0, currentTouches_2 = currentTouches; _a < currentTouches_2.length; _a++) {
                        var knownTouch = currentTouches_2[_a];
                        if (touch.identifier === knownTouch.id) {
                            knownTouch.clientX = touch.clientX;
                            knownTouch.clientY = touch.clientY;
                        }
                    }
                }
                var nbObservers = mouseMoveObservers.length + mouseDragObservers.length;
                if (Mouse.isMouseDown() && nbObservers > 0) {
                    event.preventDefault();
                }
                if (currentTouches.length === 1) {
                    var firstTouch = currentTouches[0];
                    Mouse.mouseMove(firstTouch.clientX, firstTouch.clientY);
                }
                else if (currentTouches.length === 2) {
                    var firstTouch = currentTouches[0];
                    var secondTouch = currentTouches[1];
                    var newDistance = computeDistance(firstTouch, secondTouch);
                    var deltaDistance = (currentDistance - newDistance);
                    var zoomFactor = deltaDistance / currentDistance;
                    currentDistance = newDistance;
                    var zoomCenterXClient = 0.5 * (firstTouch.clientX + secondTouch.clientX);
                    var zoomCenterYClient = 0.5 * (firstTouch.clientY + secondTouch.clientY);
                    var zoomCenter = clientToRelative(zoomCenterXClient, zoomCenterYClient);
                    for (var _b = 0, mouseWheelObservers_2 = mouseWheelObservers; _b < mouseWheelObservers_2.length; _b++) {
                        var observer = mouseWheelObservers_2[_b];
                        observer(5 * zoomFactor, zoomCenter);
                    }
                }
            }
            if (canvas) {
                canvas.addEventListener("touchstart", handleTouchStart, false);
                window.addEventListener("touchend", handleTouchEnd);
                window.addEventListener("touchmove", handleTouchMove, { passive: false });
            }
        })();
        var Indicators;
        (function (Indicators) {
            var indicatorSpansCache = {};
            var suffix = "-indicator-id";
            function getIndicator(id) {
                var element = getElementBySelector("#" + id + suffix);
                if (!element) {
                    throw new Error("Could not find indicator '".concat(id, "'."));
                }
                return element;
            }
            Indicators.getIndicator = getIndicator;
            function getIndicatorSpan(id) {
                if (!indicatorSpansCache[id]) { // not yet in cache
                    var fullId = id + suffix;
                    var element = getElementBySelector("#" + fullId + " span");
                    if (!element) {
                        throw new Error("Could not find indicator span '".concat(id, "'."));
                    }
                    indicatorSpansCache[id] = element;
                }
                return indicatorSpansCache[id];
            }
            Indicators.getIndicatorSpan = getIndicatorSpan;
        })(Indicators || (Indicators = {}));
        var Storage;
        (function (Storage) {
            var PREFIX = "canvas";
            var FULLSCREEN_PARAMETER = "fullscreen";
            var SIDE_PANE_PARAMETER = "sidepane";
            var TRUE = "true";
            var FALSE = "false";
            function updateBooleanParameter(name, checked) {
                var value = checked ? TRUE : FALSE;
                Page.Helpers.URL.setQueryParameter(PREFIX, name, value);
            }
            function attachStorageEvents() {
                if (fullscreenCheckbox) {
                    fullscreenCheckbox.addEventListener("change", function () {
                        updateBooleanParameter(FULLSCREEN_PARAMETER, fullscreenCheckbox.checked);
                        Page.Helpers.URL.removeQueryParameter(PREFIX, SIDE_PANE_PARAMETER);
                    });
                }
                if (sidePaneCheckbox) {
                    sidePaneCheckbox.addEventListener("change", function () {
                        updateBooleanParameter(SIDE_PANE_PARAMETER, sidePaneCheckbox.checked);
                    });
                }
            }
            Storage.attachStorageEvents = attachStorageEvents;
            function applyStoredState() {
                Page.Helpers.URL.loopOnParameters(PREFIX, function (name, value) {
                    if (name === FULLSCREEN_PARAMETER && (value === TRUE || value === FALSE)) {
                        if (fullscreenCheckbox) {
                            fullscreenCheckbox.checked = (value === TRUE);
                        }
                    }
                    else if (name === SIDE_PANE_PARAMETER && (value === TRUE || value === FALSE)) {
                        if (sidePaneCheckbox) {
                            sidePaneCheckbox.checked = (value === TRUE);
                        }
                    }
                    else {
                        console.log("Removing invalid query parameter '" + name + "=" + value + "'.");
                        Page.Helpers.URL.removeQueryParameter(PREFIX, name);
                    }
                });
            }
            Storage.applyStoredState = applyStoredState;
        })(Storage || (Storage = {}));
        Storage.applyStoredState();
        Storage.attachStorageEvents();
        Canvas.Observers = Object.freeze({
            canvasResize: canvasResizeObservers,
            fullscreenToggle: fullscreenToggleObservers,
            mouseDown: mouseDownObservers,
            mouseDrag: mouseDragObservers,
            mouseEnter: mouseEnterObservers,
            mouseLeave: mouseLeaveObservers,
            mouseMove: mouseMoveObservers,
            mouseWheel: mouseWheelObservers,
            mouseUp: mouseUpObservers,
        });
        function getAspectRatio() {
            var size = getCanvasSize();
            return size[0] / size[1];
        }
        Canvas.getAspectRatio = getAspectRatio;
        function getCanvas() {
            return canvas;
        }
        Canvas.getCanvas = getCanvas;
        function getCanvasContainer() {
            return canvasContainer;
        }
        Canvas.getCanvasContainer = getCanvasContainer;
        function getSize() {
            return getCanvasSize();
        }
        Canvas.getSize = getSize;
        function getMousePosition() {
            return Mouse.getMousePosition();
        }
        Canvas.getMousePosition = getMousePosition;
        function isFullScreen() {
            return fullscreenCheckbox && fullscreenCheckbox.checked;
        }
        Canvas.isFullScreen = isFullScreen;
        function isMouseDown() {
            return Mouse.isMouseDown();
        }
        Canvas.isMouseDown = isMouseDown;
        function setIndicatorText(id, text) {
            var indicator = Indicators.getIndicatorSpan(id);
            if (indicator) {
                indicator.innerText = text;
            }
        }
        Canvas.setIndicatorText = setIndicatorText;
        function setIndicatorVisibility(id, visible) {
            var indicator = Indicators.getIndicator(id);
            if (indicator) {
                indicator.style.display = visible ? "" : "none";
            }
        }
        Canvas.setIndicatorVisibility = setIndicatorVisibility;
        function setIndicatorsVisibility(visible) {
            var indicators = document.getElementById("indicators");
            indicators.style.display = visible ? "" : "none";
        }
        Canvas.setIndicatorsVisibility = setIndicatorsVisibility;
        function setMaxSize(newMaxWidth, newMaxHeight) {
            maxWidth = newMaxWidth;
            maxHeight = newMaxHeight;
            updateCanvasSize();
        }
        Canvas.setMaxSize = setMaxSize;
        function setResizable(resizable) {
            buttonsColumn.style.display = resizable ? "" : "none";
        }
        Canvas.setResizable = setResizable;
        function setLoaderText(text) {
            if (loader) {
                loader.querySelector("span").innerText = text;
            }
        }
        Canvas.setLoaderText = setLoaderText;
        function showLoader(show) {
            if (loader) {
                loader.style.display = (show) ? "block" : "";
            }
        }
        Canvas.showLoader = showLoader;
        function toggleFullscreen(fullscreen) {
            if (fullscreenCheckbox) {
                var needToUpdate = fullscreen !== fullscreenCheckbox.checked;
                if (needToUpdate) {
                    fullscreenCheckbox.checked = fullscreen;
                    if (typeof window.CustomEvent === "function") {
                        fullscreenCheckbox.dispatchEvent(new CustomEvent("change"));
                    }
                    else if (typeof CustomEvent.prototype.initCustomEvent === "function") {
                        var changeEvent = document.createEvent("CustomEvent");
                        changeEvent.initCustomEvent("change", false, false, undefined);
                        fullscreenCheckbox.dispatchEvent(changeEvent);
                    }
                }
            }
        }
        Canvas.toggleFullscreen = toggleFullscreen;
    })(Canvas = Page.Canvas || (Page.Canvas = {}));
})(Page || (Page = {}));

Page.Canvas.setMaxSize(512,512);