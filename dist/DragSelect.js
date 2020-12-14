/***

 ~~~ Version 2.0.0 ~~~

 ******************************************

    ____                   _____      __          __ 
   / __ \_________ _____ _/ ___/___  / /__  _____/ /_
  / / / / ___/ __ `/ __ `/\__ \/ _ \/ / _ \/ ___/ __/
 / /_/ / /  / /_/ / /_/ /___/ /  __/ /  __/ /__/ /_  
/_____/_/   \__,_/\__, //____/\___/_/\___/\___/\__/  
               /____/                              

 ******************************************
 
 {*} {*} STAR THIS PLUGIN ON GITHUB {*} {*}

 https://github.com/ThibaultJanBeyer/DragSelect
 Please give it a like, this is what makes me happy :-)
 Thank You

 {*} {*} STAR THIS PLUGIN ON GITHUB {*} {*}

 ******************************************
 ********* The MIT License (MIT) **********
 ******************************************
 Created 2017 by ThibaultJanBeyer
 web: http://www.thibaultjanbeyer.com/
 github: https://github.com/ThibaultJanBeyer/DragSelect

*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.DragSelect = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * The Settings to be passed to the Class
   * @typedef {Object} Settings
   * @property {HTMLElement|SVGElement|HTMLDocument} [area=document] area in which you can drag. If not provided it will be the whole document
   * @property {DSInputElements} [selectables=[]] the elements that can be selected
   * @property {number} [autoScrollSpeed=5] Speed in which the area scrolls while selecting (if available). Unit is pixel per movement.
   * @property {number} [zoom=1] Zoom scale factor (in case of using CSS style transform: scale() which messes with real positions). Unit scale zoom.
   * @property {boolean} [customStyles=false] if set to true, no styles (except for position absolute) will be applied by default
   * @property {boolean} [multiSelectMode=false] Add newly selected elements to the selection instead of replacing them
   * @property {boolean} [multiSelectToggling=true] Whether or not to toggle already active elements while multi-selecting
   * @property {DSMultiSelectKeys} [multiSelectKeys=['Control', 'Shift', 'Meta']] Keys that allows switching to the multi-select mode (see the multiSelectMode option). Any key value is possible ([see MDN docs](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)). Note that the best support is given for <kbd>Control</kbd>, <kbd>Shift</kbd> and <kbd>Meta</kbd>. Provide an empty array `[]` if you want to turn off the functionality.
   * @property {HTMLElement} [selector=HTMLElement] the square that will draw the selection
   * @property {boolean} [draggability=true] When a user is dragging on an already selected element, the selection is dragged.
   * @property {boolean} [immediateDrag=true] Whether an element is draggable from the start or needs to be selected first
   * @property {boolean} [useTransform=true] Whether to use hardware accelerated css transforms when dragging or top/left instead
   * @property {string} [hoverClass=ds-hover] the class assigned to the mouse hovered items
   * @property {string} [selectableClass=ds-selectable] the class assigned to the elements that can be selected
   * @property {string} [selectedClass=ds-selected] the class assigned to the selected items
   * @property {string} [selectorClass=ds-selector] the class assigned to the square selector helper
   * @property {string} [selectorAreaClass=ds-selector-area] the class assigned to the square in which the selector resides. By default it's invisible
   * @property {DSCallbackEvent} [callback] Deprecated: please use DragSelect.subscribe('callback', callback) instead
   * @property {DSDragMoveEvent} [onDragMove] Deprecated: please use DragSelect.subscribe('onDragMove', onDragMove) instead
   * @property {DSDragMoveBeginEvent} [onDragStartBegin]  Deprecated: please use DragSelect.subscribe('onDragStartBegin', onDragStartBegin) instead
   * @property {DSDragStartEvent} [onDragStart]  Deprecated: please use DragSelect.subscribe('onDragStart', onDragStart) instead
   * @property {DSElementSelectEvent} [onElementSelect]  Deprecated: please use DragSelect.subscribe('onElementSelect', onElementSelect) instead
   * @property {DSElementUnSelectEvent} [onElementUnselect]  Deprecated: please use DragSelect.subscribe('onElementUnselect', onElementUnselect) instead
   */

  /**
   * The Object that is passed back to any callback method
   * @typedef {Object} CallbackObject
   * @property {Array<HTMLElement|SVGElement|any>} items The items currently selected
   * @property {MouseEvent|TouchEvent|Event} [event] The respective event object
   * @property {HTMLElement|SVGElement|any} [item] The single item currently interacted with
   */

  /**
   * @typedef {function} DSCallback
   * @param {CallbackObject} selected
   */

  /**
   * Callback function that gets fired when the element is selected.
   * @typedef {DSCallback} DSCallbackEvent
   */

  /**
   * Fired while the user drags.
   * @typedef {DSCallback} DSDragMoveEvent
   */

  /**
   * Fired while the user drags.
   * @typedef {DSCallback} DSDragMoveBeginEvent
   */

  /**
   * When the user clicks in the area.
   * @typedef {DSCallback} DSDragStartEvent
   */

  /**
   * Fired every time an element is selected.
   * @typedef {DSCallback} DSElementSelectEvent
   */

  /**
   * Fired every time an element is un-selected.
   * @typedef {DSCallback} DSElementUnSelectEvent
   */

  /** @typedef {{x: number, y: number}} Vect2 */

  /** @typedef {{x:number,y:number,w:number,h:number}} DSElementPos */

  /** @typedef {Array.<'top'|'bottom'|'left'|'right'|undefined>} DSEdges */

  /** @typedef {HTMLElement|SVGElement|HTMLDocument} DSArea area within which you can drag */

  /** @typedef {HTMLElement} DSSelectorArea area in which you can drag */

  /** @typedef {Array.<HTMLElement|SVGElement> | HTMLElement | SVGElement} DSInputElements the elements that can be selected */

  /** @typedef {Array.<HTMLElement|SVGElement>} DSElements the elements that can be selected */

  /** @typedef {HTMLElement|SVGElement} DSElement a single element that can be selected */

  /** @typedef {MouseEvent|TouchEvent} DSEvent en event from a touch or mouse interaction */

  /** @typedef {Array.<'Shift'|'Control'|'Meta'|string>} DSMultiSelectKeys An array of keys that allows switching to the multi-select mode */

  /** @typedef {'dragmove'|'autoscroll'|'dragstart'|'elementselect'|'elementunselect'|'callback'} DSEventNames */

  /** @typedef {'Interaction:init'|'Interaction:start'|'Interaction:dragstart'|'Interaction:end'|'Interaction:update'|'Area:modified'|'Area:scroll'|'PointerStore:updated'|'Selected:added'|'Selected:removed'|'Selectable:click'|'Selectable:pointer'} DSInternalEventNames */

  /** @typedef {DSEventNames|DSInternalEventNames} DSCallbackNames the name of the callback */

  /** @typedef {{top:number,left:number,bottom:number,right:number,width:number,height:number}} DSBoundingRect */

  /**
   * @callback DSModificationCallback
   * @param {*} event
   */

  // @ts-check
  /**
   * @param {Vect2} v1
   * @param {'+'|'-'|'*'} operator
   * @param {Vect2} v2
   * @return {Vect2}
   */

  var calc = function calc(_ref, operator, _ref2) {
    var x1 = _ref.x,
        y1 = _ref.y;
    var x2 = _ref2.x,
        y2 = _ref2.y;
    var calculations = {
      '+': {
        x: x1 + x2,
        y: y1 + y2
      },
      '-': {
        x: x1 - x2,
        y: y1 - y2
      },
      '*': {
        x: x1 * x2,
        y: y1 * y2
      }
    };
    return calculations[operator];
  };
  /**
   * @param {{left:number,top:number}} rect
   * @returns {Vect2}
   */

  var rect2vect = function rect2vect(rect) {
    return {
      x: rect.left,
      y: rect.top
    };
  };
  /**
   * @param {number} n
   * @returns {Vect2}
   */

  var num2vect = function num2vect(n) {
    return {
      x: n,
      y: n
    };
  };

  // @ts-check
  /**
   * Adds event-listeners to the selectorArea
   * @param {DSArea[]} nodes
   * @param {DSModificationCallback} callback
   * @param {MutationObserver} modificationObserver
   */

  var addModificationObservers = (function (nodes, callback, modificationObserver) {
    window.addEventListener('resize', callback);
    window.addEventListener('scroll', callback);
    nodes.forEach(function (el, i) {
      modificationObserver.observe(el, {
        childList: i !== 0,
        attributes: true
      });
    });
  });

  // @ts-check
  /**
   * Checks whether the area can scroll or not
   * @param {DSArea} area
   * @return {boolean} scroll X/Y
   */

  var canScroll = (function (area) {
    var scroll = getCurrentScroll(area);
    if (scroll.x || scroll.y) return true;

    if (area instanceof HTMLDocument) {
      if (area.body) return !!(area.body.scrollTop = 1);else return !!(area.documentElement.scrollTop = 1);
    }

    return !!(area.scrollTop = 1);
  });

  // @ts-check
  /**
   * Creates the SelectorArea
   * @param {string} selectorAreaClass
   * @return {HTMLDivElement}
   */

  var createSelectorAreaElement = (function (selectorAreaClass) {
    var node = document.createElement('div');
    node.style.position = 'fixed';
    node.style.overflow = 'hidden';
    node.style.pointerEvents = 'none';
    node.style.zIndex = '999999999999999999';
    node.classList.add(selectorAreaClass);
    return node;
  });

  // @ts-check
  /**
   * Create the selector node
   * @param {boolean} customStyles
   * @return {HTMLElement}
   */

  var createSelectorElement = (function (customStyles) {
    var selector = document.createElement('div');
    selector.style.position = 'absolute';

    if (!customStyles) {
      selector.style.background = 'rgba(0, 0, 255, 0.1)';
      selector.style.border = '1px solid rgba(0, 0, 255, 0.45)';
      selector.style.display = 'none';
      selector.style.pointerEvents = 'none'; // fix for issue #8 (ie11+)
    }

    return selector;
  });

  // @ts-check
  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * `wait` milliseconds. All credits to [Trey Huffine]{@link https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086}
   * @param {*} func
   * @param {number} wait
   * @returns {DSModificationCallback}
   */

  var debounce = (function (func, wait) {
    var timeout; // This is the function that is returned and will be executed many times
    // We spread (...args) to capture any number of parameters we want to pass

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // The callback function to be executed after
      // the debounce time has elapsed
      var later = function later() {
        // null timeout to indicate the debounce ended
        timeout = null; // Execute the callback

        func.apply(void 0, args);
      }; // This will reset the waiting every function execution.
      // This is the step that prevents the function from
      // being executed because it will never reach the
      // inside of the previous setTimeout


      clearTimeout(timeout); // Restart the debounce waiting period.
      // setTimeout returns a truthy value (it differs in web vs Node)

      timeout = setTimeout(later, wait);
    };
  });

  // @ts-check
  var documentScroll = (function () {
    var _document$body, _document$documentEle, _document$body2, _document$documentEle2;

    return {
      y: ((_document$body = document.body) === null || _document$body === void 0 ? void 0 : _document$body.scrollTop) || ((_document$documentEle = document.documentElement) === null || _document$documentEle === void 0 ? void 0 : _document$documentEle.scrollTop) || 0,
      x: ((_document$body2 = document.body) === null || _document$body2 === void 0 ? void 0 : _document$body2.scrollLeft) || ((_document$documentEle2 = document.documentElement) === null || _document$documentEle2 === void 0 ? void 0 : _document$documentEle2.scrollLeft) || 0
    };
  });

  // @ts-check
  /**
   * Returns the top/left/bottom/right/width/height
   * values of an area. If area is document then everything
   * except the sizes will be nulled.
   * @param {DSArea} area
   * @param {number} zoom
   * @returns {DSBoundingRect}
   */

  var getAreaRect = (function (area, zoom) {
    if (area instanceof Document) return {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
    var rect = area.getBoundingClientRect();
    return {
      top: rect.top,
      left: rect.left,
      bottom: rect.bottom,
      right: rect.right,
      width: area.clientWidth * zoom,
      height: area.clientHeight * zoom
    };
  });

  // @ts-check
  /**
   * @param {DSArea} [area]
   * @return {Vect2} scroll X/Y
   */

  var getCurrentScroll = (function (area) {
    if (!area || area instanceof Document) return documentScroll();
    return {
      x: area.scrollLeft >= 0 ? area.scrollLeft : documentScroll().x,
      y: area.scrollTop >= 0 ? area.scrollTop : documentScroll().y
    };
  });

  // @ts-check
  /**
   * Returns cursor x, y position based on event object
   * @param {Object} p
   * @param {MouseEvent|Touch} p.event
   * @return {Vect2} cursor X/Y position
   */

  var getPointerPos = (function (_ref) {
    var event = _ref.event;
    return {
      x: event.clientX,
      y: event.clientY
    };
  });

  // @ts-check
  /**
   * Returns cursor x, y position based on event object
   * @param {DSElement} element
   * @return {DSElementPos}
   */

  var getPosition = (function (element) {
    var boundingClientRect = element.getBoundingClientRect();
    return {
      x: boundingClientRect.left,
      y: boundingClientRect.top,
      w: boundingClientRect.width,
      h: boundingClientRect.height
    };
  });

  // @ts-check
  /**
   * Reliably returns the exact x,y,w,h positions of the selector element
   * @param {{ scrollAmount:Vect2, initialPointerPos:Vect2, pointerPos:Vect2 }} p
   * @returns {DSElementPos}
   */

  var getSelectorPosition = (function (_ref) {
    var scrollAmount = _ref.scrollAmount,
        initialPointerPos = _ref.initialPointerPos,
        pointerPos = _ref.pointerPos;

    /** check for direction
     *
     * This is quite complicated, so also quite complicated to explain. Lemme’ try:
     *
     * Problem #1:
     * Sadly in HTML we can not have negative sizes.
     * so if we want to scale our element 10px to the right then it is easy,
     * we just have to add +10px to the width. But if we want to scale the element
     * -10px to the left then things become more complicated, we have to move
     * the element -10px to the left on the x axis and also scale the element
     * by +10px width to fake a negative sizing.
     *
     * One solution to this problem is using css-transforms scale() with
     * transform-origin of top left. BUT we can’t use this since it will size
     * everything, then when your element has a border for example, the border will
     * get inanely huge. Also transforms are not widely supported in IE.
     *
     * Example #1:
     * Unfortunately, things get even more complicated when we are inside a scroll-able
     * DIV. Then, let’s say we scroll to the right by 10px and move the cursor right by 5px in our
     * checks we have to subtract 10px from the initialcursor position in our check
     * (since the initial position is moved to the left by 10px) so in our example:
     * 1. pointerPos.x (5) > initialPointerPos.x (0) - scrollAmount.x (10) === 5 > -10 === true
     * then set the x position to the cursors start position
     * selectorPos.x = initialPointerPos.x (0) - scrollAmount.x (10) === 10 // 2.
     * then we can calculate the elements width, which is
     * the new cursor position minus the initial one plus the scroll amount, so in our example:
     * 3. selectorPos.w = pointerPos.x (5) - initialPointerPos.x (0) + scrollAmount.x (10) === 15;
     *
     * let’s say after that movement we now scroll 20px to the left and move our cursor by 30px to the left:
     * 1b. pointerPos.x (-30) > initialPointerPos.x (0) - scrollAmount.x (-20) === -30 < --20 === -30 < +20 === false;
     * 2b. selectorPos.x = pointerPos.x (-30) === -30; move left position to cursor (for more info see Problem #1)
     * 3b. selectorPos.w = initialPointerPos.x (0) - pointerPos.x (-30) - scrollAmount.x (-20) === 0--30--20 === 0+30+20 === 50;  // scale width to original left position (for more info see Problem #1)
     *
     * same thing has to be done for top/bottom
     *
     * I hope that makes sense. Try stuff out and play around with variables to get a hang of it.
     */
    var selectorPos = {}; // right

    if (pointerPos.x > initialPointerPos.x - scrollAmount.x) {
      // 1.
      selectorPos.x = initialPointerPos.x - scrollAmount.x; // 2.

      selectorPos.w = pointerPos.x - initialPointerPos.x + scrollAmount.x; // 3.
      // left
    } else {
      // 1b.
      selectorPos.x = pointerPos.x; // 2b.

      selectorPos.w = initialPointerPos.x - pointerPos.x - scrollAmount.x; // 3b.
    } // bottom


    if (pointerPos.y > initialPointerPos.y - scrollAmount.y) {
      selectorPos.y = initialPointerPos.y - scrollAmount.y;
      selectorPos.h = pointerPos.y - initialPointerPos.y + scrollAmount.y; // top
    } else {
      selectorPos.y = pointerPos.y;
      selectorPos.h = initialPointerPos.y - pointerPos.y - scrollAmount.y;
    }

    return selectorPos;
  });

  // @ts-check
  /**
   * @param {DSElement} element
   * @return {Vect2}
   */

  var getComputedTranslatePositions = function getComputedTranslatePositions(element) {
    var computed = window.getComputedStyle(element);
    if (!computed.transform || computed.transform === 'none') return {
      x: 0,
      y: 0
    };

    if (computed.transform.indexOf('3d') >= 0) {
      var matched = computed.transform.match( // matches the values inside translate(3d)
      /(?<=matrix3d\()(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?),(.*?)(?=\))/);
      return {
        x: parseInt(matched[13]) || 0,
        y: parseInt(matched[14]) || 0
      };
    } else {
      var _matched = computed.transform.match( // matches the values inside translate(3d)
      /(?<=matrix\()(.*?),(.*?),(.*?),(.*?),(.*?),(.*?)(?=\))/);

      return {
        x: parseInt(_matched[5]) || 0,
        y: parseInt(_matched[6]) || 0
      };
    }
  };
  /**
   * @param {DSElement} element
   * @return {Vect2}
   */


  var getTranslatedPositions = function getTranslatedPositions(element) {
    var transform = element.style.transform;
    if (!transform || transform.indexOf('translate') < 0) return getComputedTranslatePositions(element);
    var regex = transform.indexOf('3d') >= 0 ? /(?<=translate3d\()(.*?),(.*?),(.*?)(?=\))/ : /(?<=translate\()(.*?),(.*?)(?=\))/;
    var translate = transform.match(regex);
    var position = {
      x: parseInt(translate[1]) || 0,
      y: parseInt(translate[2]) || 0
    };
    if (!position.x && !position.x) return getComputedTranslatePositions(element);
    return position;
  };
  /**
   * @param {DSElement} element
   * @return {Vect2}
   */


  var getTopLeftPosition = function getTopLeftPosition(element) {
    var style = element.style;
    var position = {
      x: parseInt(style.left) || 0,
      y: parseInt(style.top) || 0
    }; // initial positions

    if (!position.x && !position.x) {
      var computed = window.getComputedStyle(element);
      return {
        x: parseInt(computed.left) || 0,
        y: parseInt(computed.top) || 0
      };
    }

    return position;
  };
  /**
   * Returns the X and Y coordinates based on styles
   * Can handle translate and top/left
   * @param {DSElement} element
   * @param {boolean} [useTranslate]
   * @return {Vect2}
   */


  var getStylePosition = (function (element, useTranslate) {
    if (useTranslate) return getTranslatedPositions(element);else return getTopLeftPosition(element);
  });

  // @ts-check
  /**
   * Axis-Aligned Bounding Box Collision Detection.
   * Imagine following Example:
   *
   *
   *        b01
   *     a01[1]a02
   *        b02      b11
   *              a11[2]a12
   *                 b12
   *
   *
   * to check if those two boxes collide we do this AABB calculation:
   * 1. a01 < a12 (left border pos box1 smaller than right border pos box2)
   * 2. a02 > a11 (right border pos box1 larger than left border pos box2)
   * 3. b01 < b12 (top border pos box1 smaller than bottom border pos box2)
   * 4. b02 > b11 (bottom border pos box1 larger than top border pos box2)
   * {@link https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box Wikipedia}
   * {@link https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection MDN}
   * @param {DSElementPos} el1
   * @param {DSElementPos} el2
   */

  var isCollision = (function (el1, el2) {
    if (el1.x < el2.x + el2.w && // 1.
    el1.x + el1.w > el2.x && // 2.
    el1.y < el2.y + el2.h && // 3.
    el1.h + el1.y > el2.y // 4.
    ) return true; // collision detected!
    else return false;
  });

  // @ts-check
  /**
   * Check if the selector is near a edges of the area
   * @param {{position:Vect2,boundingRect:DSBoundingRect}} props
   * @return {DSEdges}
   */

  var isCursorNearEdges = (function (_ref) {
    var position = _ref.position,
        boundingRect = _ref.boundingRect;
    var tolerance = {
      x: 10,
      y: 10
    };
    var edges = [];
    if (position.y < tolerance.y) edges.push('top');
    if (boundingRect.height - position.y < tolerance.y) edges.push('bottom');
    if (boundingRect.width - position.x < tolerance.x) edges.push('right');
    if (position.x < tolerance.x) edges.push('left');
    return (
      /** @type {DSEdges} */
      edges
    );
  });

  // @ts-check
  /**
   * Removes event-listeners to the selectorArea
   * @param {MutationObserver} modificationObserver
   * @param {DSModificationCallback} callback
   */

  var removeModificationObservers = (function (modificationObserver, callback) {
    window.removeEventListener('resize', callback);
    window.removeEventListener('scroll', callback);
    modificationObserver.disconnect();
  });

  // @ts-check
  /**
   * Scroll the element in the specified direction
   * @param {DSArea} element
   * @param {Array.<'top'|'bottom'|'left'|'right'|undefined>} directions
   * @param {number} multiplier
   */

  var scrollElement = (function (element, directions, multiplier) {
    if (!directions.length) return;
    var docEl = document && document.documentElement && document.documentElement.scrollTop && document.documentElement;

    var _element = element instanceof HTMLDocument ? docEl || document.body : element;

    var scrollTop = directions.includes('top') && _element.scrollTop > 0;

    var scrollBot = directions.includes('bottom') && _element.scrollTop < _element.scrollHeight;

    var scrollLeft = directions.includes('left') && _element.scrollLeft > 0;

    var scrollRight = directions.includes('right') && _element.scrollLeft < _element.scrollWidth;

    if (scrollTop) _element.scrollTop -= 1 * multiplier;
    if (scrollBot) _element.scrollTop += 1 * multiplier;
    if (scrollLeft) _element.scrollLeft -= 1 * multiplier;
    if (scrollRight) _element.scrollLeft += 1 * multiplier;
  });

  // @ts-check
  /**
   * Sets the style position to the X and Y coordinates
   * Can handle translate and top/left
   * @param {DSElement} element
   * @param {Vect2} values
   * @param {boolean} [useTranslate]
   * @return {DSElement}
   */

  var setStylePosition = (function (element, values, useTranslate) {
    if (useTranslate) {
      var prevTransform = element.style.transform;
      element.style.transform = "translate3d(".concat(values.x, "px,").concat(values.y, "px,1px) ").concat(prevTransform.replace(/translate.*?\)/g, ''));
    } else {
      element.style.left = "".concat(values.x, "px");
      element.style.top = "".concat(values.y, "px");
    }

    return element;
  });

  /**
   * Transforms any list or single item to an array so user doesn’t have to care.
   * @param {DSInputElements} items a single item, a Node-list or any element group
   * @return {DSElements}
   */

  var toArray = (function (items) {
    if (!items) return [];
    if (!Array.isArray(items) && (items instanceof HTMLElement || items instanceof SVGElement)) return [items];
    return _toConsumableArray(items);
  });

  // @ts-check
  /**
   * Updates element style left, top, width, height values
   * according to pos input object.
   * @param {HTMLElement} element
   * @param {DSElementPos} pos
   */

  var updateElementStylePos = (function (element, pos) {
    element.style.left = "".concat(pos.x, "px");
    element.style.top = "".concat(pos.y, "px");
    element.style.width = "".concat(pos.w, "px");
    element.style.height = "".concat(pos.h, "px");
  });

  var Area = /*#__PURE__*/function () {
    /**
     * @type {DSModificationCallback}
     * @private
     */

    /**
     * @type {MutationObserver}
     * @private
     */

    /**
     * @type {number}
     * @private
     */

    /**
     * @type {DSArea}
     * @private
     */

    /**
     * @type {DSArea[]}
     * @private
     */

    /**
     * @type {CSSStyleDeclaration}
     * @private
     * */

    /**
     * @type {{top:number,bottom:number,left:number,right:number}}
     * @private
     * */

    /**
     * @type {DSBoundingRect}
     * @private
     * */

    /**
     * @constructor Area
     * @param {Object} obj
     * @param {DSArea} obj.area
     * @param {PubSub} obj.PS
     * @param {number} obj.zoom
     * @ignore
     */
    function Area(_ref) {
      var _this = this;

      var area = _ref.area,
          PS = _ref.PS,
          zoom = _ref.zoom;

      _classCallCheck(this, Area);

      _defineProperty(this, "_modificationCallback", void 0);

      _defineProperty(this, "_modificationObserver", void 0);

      _defineProperty(this, "_zoom", void 0);

      _defineProperty(this, "_node", void 0);

      _defineProperty(this, "_parentNodes", void 0);

      _defineProperty(this, "_computedStyle", void 0);

      _defineProperty(this, "_computedBorder", void 0);

      _defineProperty(this, "_boundingClientRect", void 0);

      _defineProperty(this, "start", function () {
        addModificationObservers(_this.parentNodes, _this._modificationCallback, _this._modificationObserver);
      });

      _defineProperty(this, "reset", function () {
        _this._computedStyle = undefined;
        _this._boundingClientRect = undefined;
        _this._computedBorder = undefined;
        _this._parentNodes = undefined;
      });

      _defineProperty(this, "stop", function () {
        removeModificationObservers(_this._modificationObserver, _this._modificationCallback);

        _this.reset();
      });

      _defineProperty(this, "scroll", function (directions, multiplier) {
        scrollElement(_this._node, directions, multiplier);

        _this.PubSub.publish('Area:scroll', {
          data: {
            directions: directions,
            multiplier: multiplier
          }
        });
      });

      this._node = area;
      this._zoom = zoom;
      this.PubSub = PS; // Fix: Area has to have a special position attribute for calculations

      var position = this.computedStyle.position;
      var isPositioned = position === 'absolute' || position === 'relative' || position === 'fixed';
      if (!(this._node instanceof HTMLDocument) && !isPositioned) this._node.style.position = 'relative';
      this._modificationCallback = debounce(function (event) {
        _this.reset();

        _this.PubSub.publish('Area:modified', {
          event: event,
          item: _this
        });
      }, 60);
      this._modificationObserver = new MutationObserver(this._modificationCallback); // first immediate debounce to update values after dom-update

      setTimeout(function () {
        _this.reset();

        _this.PubSub.publish('Area:modified', {
          event: event,
          item: _this
        });
      });
      this.PubSub.subscribe('Interaction:init', this.start);
      this.PubSub.subscribe('Interaction:end', this.reset);
    }

    _createClass(Area, [{
      key: "HTMLNode",
      //////////////////////////////////////////////////////////////////////////////////////
      // Node Getters
      get: function get() {
        return (
          /** @type {DSArea} */
          this._node
        );
      }
      /**
       * The computed border from the element (caches result)
       * @type {{top:number,bottom:number,left:number,right:number}}
       */

    }, {
      key: "computedBorder",
      get: function get() {
        if (this._computedBorder) return this._computedBorder;
        return {
          top: parseInt(this.computedStyle.borderTopWidth),
          bottom: parseInt(this.computedStyle.borderBottomWidth),
          left: parseInt(this.computedStyle.borderLeftWidth),
          right: parseInt(this.computedStyle.borderRightWidth)
        };
      }
      /**
       * The computed styles from the element (caches result)
       * @type {CSSStyleDeclaration}
       */

    }, {
      key: "computedStyle",
      get: function get() {
        if (this._computedStyle) return this._computedStyle;
        if (this.HTMLNode instanceof HTMLDocument) return this._computedStyle = getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement);else return this._computedStyle = getComputedStyle(this.HTMLNode);
      }
      /**
       * The element rect (caches result) (without scrollbar or borders)
       * @type {DSBoundingRect}
       */

    }, {
      key: "boundingClientRect",
      get: function get() {
        if (this._boundingClientRect) return this._boundingClientRect;
        return this._boundingClientRect = getAreaRect(this.HTMLNode, this._zoom);
      }
    }, {
      key: "parentNodes",
      get: function get() {
        if (this._parentNodes) return this._parentNodes;

        var traverse = function traverse(toWatch) {
          var _toWatch$index;

          var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var parent = (_toWatch$index = toWatch[index]) === null || _toWatch$index === void 0 ? void 0 : _toWatch$index.parentNode;

          if (parent) {
            toWatch.push(parent);
            index++;
            return traverse(toWatch, index);
          } else {
            return toWatch;
          }
        };

        this._parentNodes = traverse([this.HTMLNode]);
        return this._parentNodes;
      }
    }]);

    return Area;
  }();

  var Drag = /*#__PURE__*/function () {
    /**
     * @type {boolean}
     * @private
     */

    /**
     * @type {Vect2}
     * @private
     */

    /**
     * @type {Vect2}
     * @private
     */

    /**
     * @type {DSElements}
     * @private
     */

    /**
     * @param {Object} p
     * @param {DragSelect} p.DS
     * @param {boolean} p.useTransform
     */
    function Drag(_ref) {
      var _this = this;

      var DS = _ref.DS,
          useTransform = _ref.useTransform;

      _classCallCheck(this, Drag);

      _defineProperty(this, "_useTransform", void 0);

      _defineProperty(this, "_prevCursorPos", void 0);

      _defineProperty(this, "_prevScrollPos", void 0);

      _defineProperty(this, "_elements", []);

      _defineProperty(this, "start", function (_ref2) {
        var isDragging = _ref2.isDragging;
        if (!isDragging) return;
        _this._prevCursorPos = null;
        _this._prevScrollPos = null;
        _this._elements = _this.DS.getSelection();

        _this._elements.forEach(function (element) {
          return element.style.zIndex = "".concat((parseInt(element.style.zIndex) || 0) + 9999);
        });
      });

      _defineProperty(this, "stop", function () {
        _this._prevCursorPos = null;
        _this._prevScrollPos = null;

        _this._elements.forEach(function (element) {
          return element.style.zIndex = "".concat((parseInt(element.style.zIndex) || 0) - 9998);
        });

        _this._elements = [];
      });

      _defineProperty(this, "update", function () {
        if (!_this._elements.length) return;

        var posDiff = _this._getPositionDifference(_this.DS.stores.PointerStore.currentVal, _this.DS.stores.ScrollStore.currentVal);

        _this._elements.forEach(function (element) {
          var elementPos = getStylePosition(element, _this._useTransform);
          var newPos = calc(elementPos, '+', posDiff);
          setStylePosition(element, newPos, _this._useTransform);
        });
      });

      this.DS = DS;
      this._useTransform = useTransform;
      this.DS.subscribe('Interaction:start', this.start);
      this.DS.subscribe('Interaction:end', this.stop);
      this.DS.subscribe('Interaction:update', this.update);
    }

    _createClass(Drag, [{
      key: "_getPositionDifference",

      /**
       * Difference value between two point of the cursor or scroll
       * @param {Vect2} currentPointerVal
       * @param {Vect2} currentScrollVal
       * @private
       */
      value: function _getPositionDifference(currentPointerVal, currentScrollVal) {
        var cursorDiff = this._prevCursorPos ? calc(currentPointerVal, '-', this._prevCursorPos) : {
          x: 0,
          y: 0
        };
        this._prevCursorPos = currentPointerVal;
        var scrollDiff = this._prevScrollPos ? calc(currentScrollVal, '-', this._prevScrollPos) : {
          x: 0,
          y: 0
        };
        this._prevScrollPos = currentScrollVal;
        return calc(cursorDiff, '+', scrollDiff);
      }
    }]);

    return Drag;
  }();

  var Interaction = /*#__PURE__*/function () {
    /**
     * @type {DSArea}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @constructor Interaction
     * @param {Object} obj
     * @param {DSArea} obj.areaElement
     * @param {boolean} obj.draggability
     * @param {boolean} obj.immediateDrag
     * @param {DragSelect} obj.DS
     * @ignore
     */
    function Interaction(_ref) {
      var _this = this;

      var areaElement = _ref.areaElement,
          DS = _ref.DS,
          draggability = _ref.draggability,
          immediateDrag = _ref.immediateDrag;

      _classCallCheck(this, Interaction);

      _defineProperty(this, "_areaElement", void 0);

      _defineProperty(this, "_draggability", void 0);

      _defineProperty(this, "_immediateDrag", void 0);

      _defineProperty(this, "isInteracting", void 0);

      _defineProperty(this, "isDragging", void 0);

      _defineProperty(this, "init", function () {
        _this.stop();

        _this._areaElement.addEventListener('mousedown', _this.start);

        _this._areaElement.addEventListener('touchstart', _this.start, {
          passive: false
        });

        _this.DS.publish('Interaction:init', {});
      });

      _defineProperty(this, "start", function (event) {
        if (event.type === 'touchstart') event.preventDefault(); // Call preventDefault() to prevent double click issue, see https://github.com/ThibaultJanBeyer/DragSelect/pull/29 & https://developer.mozilla.org/vi/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent

        if (!_this._canInteract(event)) return;
        _this.isInteracting = true;
        _this.isDragging = _this.isDragEvent(event);
        console.log('5', _this.isDragging);

        _this.DS.publish('Interaction:start', {
          event: event,
          isDragging: _this.isDragging
        });

        document.addEventListener('mouseup', _this.reset);
        document.addEventListener('touchend', _this.reset);
      });

      _defineProperty(this, "isDragEvent", function (event) {
        if (!_this._draggability || _this.DS.stores.KeyStore.isMultiSelectKeyPressed(event) || !_this.DS.SelectableSet.has(event.target)) return false;

        if (_this._immediateDrag) {
          if (!_this.DS.SelectedSet.size) _this.DS.SelectedSet.add(
          /** @type {DSElement} */
          event.target);else if (!_this.DS.SelectedSet.has(event.target)) {
            _this.DS.SelectedSet.clear();

            _this.DS.SelectedSet.add(
            /** @type {DSElement} */
            event.target);
          }
        }

        if (_this.DS.SelectedSet.has(event.target)) return true;
        return false;
      });

      _defineProperty(this, "onClick", function (_ref2) {
        var event = _ref2.event;
        if (!_this._canInteract(event)) return;
        if (event.detail > 0) return; // mouse interaction

        var _this$DS = _this.DS,
            _this$DS$stores = _this$DS.stores,
            PointerStore = _this$DS$stores.PointerStore,
            KeyStore = _this$DS$stores.KeyStore,
            SelectableSet = _this$DS.SelectableSet,
            SelectedSet = _this$DS.SelectedSet,
            publish = _this$DS.publish;
        PointerStore.start(event);
        var node =
        /** @type {any} */
        event.target;
        if (!SelectableSet.has(node)) return;
        if (!KeyStore.isMultiSelectKeyPressed(event)) SelectedSet.clear();
        SelectedSet.toggle(node);
        publish('Interaction:end', {
          event: event,
          isDragging: _this.isDragging
        }); // simulate mouse-up (that does not exist on keyboard)
      });

      _defineProperty(this, "stop", function () {
        _this.isInteracting = false;
        _this.isDragging = false;

        _this._areaElement.removeEventListener('mousedown', _this.start);

        _this._areaElement.removeEventListener('touchstart', _this.start, {
          // @ts-ignore
          passive: false
        });

        document.removeEventListener('mouseup', _this.reset);
        document.removeEventListener('touchend', _this.reset);
      });

      _defineProperty(this, "update", function (_ref3) {
        var event = _ref3.event,
            data = _ref3.data;
        if (_this.isInteracting) _this.DS.publish('Interaction:update', {
          event: event,
          data: data,
          isDragging: _this.isDragging
        });
      });

      _defineProperty(this, "reset", function (event) {
        _this.stop();

        _this.init();

        _this.DS.publish('Interaction:end', {
          event: event
        });
      });

      this._areaElement = areaElement;
      this._draggability = draggability;
      this._immediateDrag = immediateDrag;
      this.DS = DS;
      this.DS.subscribe('PointerStore:updated', this.update);
      this.DS.subscribe('Selectable:click', this.onClick);
      this.DS.subscribe('Selectable:pointer', function (_ref4) {
        var event = _ref4.event;
        return _this.start(event);
      });
      this.DS.subscribe('Area:scroll', this.update);
    }

    _createClass(Interaction, [{
      key: "_canInteract",
      value: function _canInteract(event) {
        if (
        /* right-clicks */
        event.button === 2 ||
        /* fix double-click issues */
        this.isInteracting ||
        /* fix outside elements issue */
        event.target && !this.DS.SelectorArea.isInside(event.target)) return false;
        return true;
      }
      /**
       * @param {DSEvent} event
       */

    }]);

    return Interaction;
  }();

  var PubSub = function PubSub() {
    var _this = this;

    _classCallCheck(this, PubSub);

    _defineProperty(this, "subscribers", {});

    _defineProperty(this, "subscribe", function (eventName, callback) {
      if (!Array.isArray(_this.subscribers[eventName])) _this.subscribers[eventName] = [];

      _this.subscribers[eventName].push(callback);

      return _this.subscribers[eventName].length - 1;
    });

    _defineProperty(this, "unsubscribe", function (eventName, callback, id) {
      if (id >= 0) _this.subscribers[eventName].splice(id, 1);else if (callback) _this.subscribers[eventName] = _this.subscribers[eventName].filter(function (cb) {
        return cb !== callback;
      });
    });

    _defineProperty(this, "publish", function (eventName, data) {
      if (!Array.isArray(_this.subscribers[eventName])) return;

      _this.subscribers[eventName].forEach(function (callback) {
        return callback(data);
      });
    });
  };

  var SelectableSet = /*#__PURE__*/function (_Set) {
    _inherits(SelectableSet, _Set);

    var _super = _createSuper(SelectableSet);

    /**
     * @type {DSElements}
     * @private
     * */

    /**
     * @type {string}
     * @private
     * */

    /**
     * @type {string}
     * @private
     * */

    /**
     * @constructor SelectableSet
     * @param {Object} p
     * @param {DSInputElements} p.elements
     * @param {DragSelect} p.DS
     * @param {string} p.className
     * @param {string} p.hoverClassName
     * @ignore
     */
    function SelectableSet(_ref) {
      var _this;

      var _elements = _ref.elements,
          className = _ref.className,
          hoverClassName = _ref.hoverClassName,
          DS = _ref.DS;

      _classCallCheck(this, SelectableSet);

      _this = _super.call(this);

      _defineProperty(_assertThisInitialized(_this), "_initElements", void 0);

      _defineProperty(_assertThisInitialized(_this), "_className", void 0);

      _defineProperty(_assertThisInitialized(_this), "_hoverClassName", void 0);

      _defineProperty(_assertThisInitialized(_this), "init", function () {
        return _this._initElements.forEach(function (el) {
          return _this.add(el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "clear", function () {
        return _this.forEach(function (el) {
          return _this["delete"](el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "_onClick", function (event) {
        return _this.DS.publish('Selectable:click', {
          event: event
        });
      });

      _defineProperty(_assertThisInitialized(_this), "_onPointer", function (event) {
        return _this.DS.publish('Selectable:pointer', {
          event: event
        });
      });

      _defineProperty(_assertThisInitialized(_this), "addAll", function (elements) {
        return elements.forEach(function (el) {
          return _this.add(el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "deleteAll", function (elements) {
        return elements.forEach(function (el) {
          return _this["delete"](el);
        });
      });

      _this.DS = DS;
      _this._initElements = toArray(_elements);
      _this._className = className;
      _this._hoverClassName = hoverClassName;

      _this.DS.subscribe('Interaction:init', _this.init);

      return _this;
    }

    _createClass(SelectableSet, [{
      key: "add",

      /** @param {DSElement} element */
      value: function add(element) {
        element.classList.add(this._className);
        element.addEventListener('click', this._onClick);
        element.addEventListener('mousedown', this._onPointer);
        element.addEventListener('touchstart', this._onPointer, {
          // @ts-ignore
          passive: false
        });
        return _get(_getPrototypeOf(SelectableSet.prototype), "add", this).call(this, element);
      }
      /** @param {DSElement} element */

    }, {
      key: "delete",
      value: function _delete(element) {
        element.classList.remove(this._className);
        element.classList.remove(this._hoverClassName);
        element.removeEventListener('click', this._onClick);
        element.removeEventListener('mousedown', this._onPointer);
        element.removeEventListener('touchstart', this._onPointer, {
          // @ts-ignore
          passive: false
        });
        return _get(_getPrototypeOf(SelectableSet.prototype), "delete", this).call(this, element);
      }
    }, {
      key: "elements",

      /** @return {DSElements} */
      get: function get() {
        return Array.from(this.values());
      }
    }]);

    return SelectableSet;
  }( /*#__PURE__*/_wrapNativeSuper(Set));

  var SelectedSet = /*#__PURE__*/function (_Set) {
    _inherits(SelectedSet, _Set);

    var _super = _createSuper(SelectedSet);

    /**
     * @type {string}
     * @private
     * */

    /**
     * @constructor SelectableSet
     * @param {Object} p
     * @param {DragSelect} p.DS
     * @param {string} p.className
     * @ignore
     */
    function SelectedSet(_ref) {
      var _this;

      var className = _ref.className,
          DS = _ref.DS;

      _classCallCheck(this, SelectedSet);

      _this = _super.call(this);

      _defineProperty(_assertThisInitialized(_this), "_className", void 0);

      _defineProperty(_assertThisInitialized(_this), "clear", function () {
        return _this.forEach(function (el) {
          return _this["delete"](el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "addAll", function (elements) {
        return elements.forEach(function (el) {
          return _this.add(el);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "deleteAll", function (elements) {
        return elements.forEach(function (el) {
          return _this["delete"](el);
        });
      });

      _this.DS = DS;
      _this._className = className;
      return _this;
    }
    /** @param {DSElement} element */


    _createClass(SelectedSet, [{
      key: "add",
      value: function add(element) {
        if (_get(_getPrototypeOf(SelectedSet.prototype), "has", this).call(this, element)) return;

        _get(_getPrototypeOf(SelectedSet.prototype), "add", this).call(this, element);

        element.classList.add(this._className);
        this.DS.publish('Selected:added', {
          items: this.elements,
          item: element
        });
        element.style.zIndex = "".concat((parseInt(element.style.zIndex) || 0) + 1);
        return this;
      }
      /** @param {DSElement} element */

    }, {
      key: "delete",
      value: function _delete(element) {
        if (!_get(_getPrototypeOf(SelectedSet.prototype), "has", this).call(this, element)) return;

        var deleted = _get(_getPrototypeOf(SelectedSet.prototype), "delete", this).call(this, element);

        element.classList.remove(this._className);
        this.DS.publish('Selected:removed', {
          items: this.elements,
          item: element
        });
        element.style.zIndex = "".concat((parseInt(element.style.zIndex) || 0) - 1);
        return deleted;
      }
    }, {
      key: "toggle",

      /**
       * Adds/Removes an element. If it is already selected = remove, if not = add.
       * @param {DSElement} element
       * @return {DSElement}
       */
      value: function toggle(element) {
        if (this.has(element)) this["delete"](element);else this.add(element);
        return element;
      }
      /** @param {DSElements} elements */

    }, {
      key: "elements",

      /** @return {DSElements} */
      get: function get() {
        return Array.from(this.values());
      }
    }]);

    return SelectedSet;
  }( /*#__PURE__*/_wrapNativeSuper(Set));

  var Selection = /*#__PURE__*/function () {
    /**
     * @type {Set}
     * @private
     * */

    /**
     * @type {string}
     * @private
     * */

    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @constructor Selection
     * @param {{ DS:DragSelect, hoverClassName:string, multiSelectToggling:boolean }} p
     * @ignore
     */
    function Selection(_ref) {
      var _this = this;

      var DS = _ref.DS,
          hoverClassName = _ref.hoverClassName,
          multiSelectToggling = _ref.multiSelectToggling;

      _classCallCheck(this, Selection);

      _defineProperty(this, "_prevSelected", void 0);

      _defineProperty(this, "_hoverClassName", void 0);

      _defineProperty(this, "_multiSelectToggling", void 0);

      _defineProperty(this, "start", function (_ref2) {
        var event = _ref2.event,
            isDragging = _ref2.isDragging;
        if (isDragging) return;

        _this._storePrevious(event);

        _this._checkIfInsideSelection(true, event);
      });

      _defineProperty(this, "update", function (_ref3) {
        var isDragging = _ref3.isDragging;
        if (isDragging) return;

        _this._checkIfInsideSelection();
      });

      _defineProperty(this, "_checkIfInsideSelection", function (force, event) {
        var _this$DS = _this.DS,
            SelectableSet = _this$DS.SelectableSet,
            SelectorArea = _this$DS.SelectorArea,
            Selector = _this$DS.Selector;
        /** @type {any} */

        var elPosCombo = SelectableSet.elements.map(function (element) {
          var rect = element.getBoundingClientRect();
          return [element, {
            y: rect.top,
            x: rect.left,
            h: rect.height,
            w: rect.width
          }];
        });
        var select = [];
        var unselect = [];

        for (var i = 0, il = elPosCombo.length; i < il; i++) {
          if (!SelectorArea.isInside(elPosCombo[i][0], elPosCombo[i][1])) continue;
          if (isCollision(elPosCombo[i][1], Selector.position)) select.push(elPosCombo[i][0]);else unselect.push(elPosCombo[i][0]);
        }

        select.forEach(function (element) {
          return _this._handleSelection(element, force, event);
        });
        unselect.forEach(function (element) {
          return _this._handleUnselection(element, force);
        });
        return select.length > -1;
      });

      this._hoverClassName = hoverClassName;
      this._multiSelectToggling = multiSelectToggling;
      this.DS = DS;
      this.DS.subscribe('Interaction:start', this.start);
      this.DS.subscribe('Interaction:update', this.update);
    }
    /**
     * Stores the previous selection (solves #9)
     * @param {DSEvent} event
     * @private
     * */


    _createClass(Selection, [{
      key: "_storePrevious",
      value: function _storePrevious(event) {
        var _this$DS2 = this.DS,
            KeyStore = _this$DS2.stores.KeyStore,
            SelectedSet = _this$DS2.SelectedSet;
        if (KeyStore.isMultiSelectKeyPressed(event)) this._prevSelected = new Set(SelectedSet);else this._prevSelected = new Set();
      }
      /** @param {{event:DSEvent,isDragging:boolean}} event */

    }, {
      key: "_handleSelection",

      /**
       * Logic when an element is selected
       * @param {DSElement} element
       * @param {boolean} force
       * @param {DSEvent} [event]
       * @private
       */
      value: function _handleSelection(element, force, event) {
        if (element.className.indexOf(this._hoverClassName) > 0 && !force) return false;
        var _this$DS3 = this.DS,
            SelectedSet = _this$DS3.SelectedSet,
            KeyStore = _this$DS3.stores.KeyStore;
        if (!SelectedSet.has(element)) SelectedSet.add(element);else if (KeyStore.isMultiSelectKeyPressed(event) && this._multiSelectToggling) SelectedSet["delete"](element);
        element.classList.add(this._hoverClassName);
      }
      /**
       * Logic when an element is de-selected
       * @param {DSElement} element
       * @param {boolean} [force]
       * @private
       */

    }, {
      key: "_handleUnselection",
      value: function _handleUnselection(element, force) {
        if (element.className.indexOf(this._hoverClassName) < 0 && !force) return false;
        var SelectedSet = this.DS.SelectedSet;
        var inSelection = SelectedSet.has(element);

        var inPrevSelection = this._prevSelected.has(element);
        /**
         * Special for issue #9.
         * if a multi-select-key is pressed, ds 'remembers' the last selection and reverts
         * to that state if the selection is not kept, to mimic the natural OS behaviour
         * = if item was selected and is not in selection anymore, reselect it
         * = if item was not selected and is not in selection anymore, unselect it
         */


        if (inSelection && !inPrevSelection) SelectedSet["delete"](element);else if (!inSelection && inPrevSelection) SelectedSet.add(element);
        element.classList.remove(this._hoverClassName);
      }
    }]);

    return Selection;
  }();

  var Selector = /*#__PURE__*/function () {
    /**
     * @type {DSElementPos}
     * @private
     */

    /**
     * @constructor Selector
     * @param {Object} p
     * @param {DragSelect} p.DS
     * @param {HTMLElement} p.selector
     * @param {string} p.selectorClass
     * @param {boolean} p.customStyles
     * @ignore
     */
    function Selector(_ref) {
      var _this = this;

      var DS = _ref.DS,
          selector = _ref.selector,
          selectorClass = _ref.selectorClass,
          customStyles = _ref.customStyles;

      _classCallCheck(this, Selector);

      _defineProperty(this, "_position", void 0);

      _defineProperty(this, "start", function (_ref2) {
        var isDragging = _ref2.isDragging;
        if (isDragging) return;
        var PointerStore = _this.DS.stores.PointerStore;
        var pPos = PointerStore.initialValArea;
        updateElementStylePos(_this.HTMLNode, {
          x: pPos.x,
          y: pPos.y,
          w: 1,
          h: 1
        });
        _this.HTMLNode.style.display = 'block';
        _this._position = null;
      });

      _defineProperty(this, "stop", function () {
        _this.HTMLNode.style.width = '0';
        _this.HTMLNode.style.height = '0';
        _this.HTMLNode.style.display = 'none';
      });

      _defineProperty(this, "update", function (_ref3) {
        var isDragging = _ref3.isDragging;
        if (isDragging) return;
        var _this$DS$stores = _this.DS.stores,
            ScrollStore = _this$DS$stores.ScrollStore,
            PointerStore = _this$DS$stores.PointerStore;
        var pos = getSelectorPosition({
          scrollAmount: ScrollStore.scrollAmount,
          initialPointerPos: PointerStore.initialValArea,
          pointerPos: PointerStore.currentValArea
        });
        updateElementStylePos(_this.HTMLNode, pos);
        _this._position = null;
      });

      this.DS = DS;
      this.HTMLNode = selector || createSelectorElement(customStyles);
      this.HTMLNode.classList.add(selectorClass);
      this.DS.subscribe('Interaction:start', this.start);
      this.DS.subscribe('Interaction:update', this.update);
      this.DS.subscribe('Interaction:end', this.stop);
    }

    _createClass(Selector, [{
      key: "position",
      get: function get() {
        if (this._position) return this._position;
        return this._position = getPosition(this.HTMLNode);
      }
    }]);

    return Selector;
  }();

  var SelectorArea = /*#__PURE__*/function () {
    /**
     * @type {number}
     * @private
     * */

    /**
     * @type {*}
     * @private
     * */

    /**
     * @type {DSElementPos}
     * @private
     */

    /**
     * @class SelectorArea
     * @constructor SelectorArea
     * @param {{ DS:DragSelect, selectorAreaClass:string, autoScrollSpeed:number}} obj
     * @ignore
     */
    function SelectorArea(_ref) {
      var _this = this;

      var DS = _ref.DS,
          selectorAreaClass = _ref.selectorAreaClass,
          autoScrollSpeed = _ref.autoScrollSpeed;

      _classCallCheck(this, SelectorArea);

      _defineProperty(this, "_autoScrollSpeed", void 0);

      _defineProperty(this, "_scrollInterval", void 0);

      _defineProperty(this, "_position", void 0);

      _defineProperty(this, "updatePos", function () {
        _this._position = null;
        var rect = _this.DS.Area.boundingClientRect;
        var border = _this.DS.Area.computedBorder;
        var style = _this.HTMLNode.style;
        var top = "".concat(rect.top + border.top, "px");
        var left = "".concat(rect.left + border.left, "px");
        var width = "".concat(rect.width, "px");
        var height = "".concat(rect.height, "px");
        if (style.top !== top) style.top = top;
        if (style.left !== left) style.left = left;
        if (style.width !== width) style.width = width;
        if (style.height !== height) style.height = height;
      });

      _defineProperty(this, "startAutoScroll", function () {
        return _this._scrollInterval = setInterval(function () {
          return _this.handleAutoScroll();
        }, 16);
      });

      _defineProperty(this, "handleAutoScroll", function () {
        var _this$DS = _this.DS,
            PointerStore = _this$DS.stores.PointerStore,
            Area = _this$DS.Area;
        var currentEdges = isCursorNearEdges({
          position: PointerStore.currentValArea,
          boundingRect: Area.boundingClientRect
        });
        if (currentEdges.length) Area.scroll(currentEdges, _this._autoScrollSpeed);
      });

      _defineProperty(this, "stopAutoScroll", function () {
        return clearInterval(_this._scrollInterval);
      });

      _defineProperty(this, "isInside", function (element, elementPos) {
        if (_this.DS.Area.HTMLNode.contains(element) && _this.DS.stores.ScrollStore.canScroll) return true;
        return isCollision(_this.position, elementPos || getPosition(element));
      });

      this._autoScrollSpeed = autoScrollSpeed;
      this.DS = DS;
      this.HTMLNode = createSelectorAreaElement(selectorAreaClass);
      this.HTMLNode.append(this.DS.Selector.HTMLNode);
      var docEl = document.body ? 'body' : 'documentElement';
      document[docEl].append(this.HTMLNode);
      this.DS.subscribe('Area:modified', this.updatePos);
      this.DS.subscribe('Interaction:start', this.startAutoScroll);
      this.DS.subscribe('Interaction:end', this.stopAutoScroll);
    }
    /** Updates the selectorAreas positions to match the areas */


    _createClass(SelectorArea, [{
      key: "isClicked",

      /**
       * checks if the click was triggered on the area.
       * @returns {boolean}
       */
      value: function isClicked() {
        var PointerStore = this.DS.stores.PointerStore;
        var cPos = {
          x: PointerStore.initialVal.x,
          y: PointerStore.initialVal.y,
          w: 0,
          h: 0
        };
        return isCollision(cPos, this.position);
      }
    }, {
      key: "position",
      get: function get() {
        if (this._position) return this._position;
        return this._position = getPosition(this.HTMLNode);
      }
    }]);

    return SelectorArea;
  }();

  var KeyStore = /*#__PURE__*/function () {
    /**
     * @type {boolean}
     * @private
     * */

    /**
     * @type {DSMultiSelectKeys}
     * @private
     * */

    /**
     * @type {Set<string>}
     * @private
     * */

    /**
     * @type {{control:string,shift:string,meta:string}}
     * @private
     * */

    /**
     * @class KeyStore
     * @constructor KeyStore
     * @param {{DS:DragSelect,multiSelectKeys:DSMultiSelectKeys,multiSelectMode:boolean}} p
     */
    function KeyStore(_ref) {
      var _this = this;

      var DS = _ref.DS,
          multiSelectKeys = _ref.multiSelectKeys,
          multiSelectMode = _ref.multiSelectMode;

      _classCallCheck(this, KeyStore);

      _defineProperty(this, "_multiSelectMode", void 0);

      _defineProperty(this, "_multiSelectKeys", void 0);

      _defineProperty(this, "_currentValues", new Set());

      _defineProperty(this, "_keyMapping", {
        control: 'ctrlKey',
        shift: 'shiftKey',
        meta: 'metaKey'
      });

      _defineProperty(this, "init", function () {
        document.addEventListener('keydown', _this.keydown);
        document.addEventListener('keyup', _this.keyup);
        window.addEventListener('blur', _this.reset);
      });

      _defineProperty(this, "keydown", function (event) {
        return _this._currentValues.add(event.key.toLowerCase());
      });

      _defineProperty(this, "keyup", function (event) {
        return _this._currentValues["delete"](event.key.toLowerCase());
      });

      _defineProperty(this, "stop", function () {
        document.removeEventListener('keydown', _this.keydown);
        document.removeEventListener('keyup', _this.reset);
        window.removeEventListener('blur', _this.reset);

        _this.reset();
      });

      _defineProperty(this, "reset", function () {
        _this._currentValues.clear();

        _this._isMultiSelect = false;
      });

      this.DS = DS;
      this._multiSelectMode = multiSelectMode; // @TODO: remove after deprecation

      this._multiSelectKeys = multiSelectKeys.map(function (key) {
        var deprecatedKeys = {
          ctrlKey: 'Control',
          shiftKey: 'Shift',
          metaKey: 'Meta'
        };
        /** @type {string} */

        var newName = deprecatedKeys[key];

        if (newName) {
          console.warn("[DragSelect] ".concat(key, " is deprecated. Use \"").concat(newName, "\" instead. Act Now!. See docs for more info"));
          return newName.toLowerCase();
        }

        return key.toLowerCase();
      });
      this.DS.subscribe('Interaction:init', this.init);
    }

    _createClass(KeyStore, [{
      key: "isMultiSelectKeyPressed",

      /** @param {KeyboardEvent|MouseEvent|TouchEvent} [event] */
      value: function isMultiSelectKeyPressed(event) {
        var _this2 = this;

        if (this._multiSelectMode) return true;
        if (this.currentValues.some(function (key) {
          return _this2._multiSelectKeys.includes(key);
        })) return true;
        if (event && this._multiSelectKeys.some(function (key) {
          return event[_this2._keyMapping[key]];
        })) return true;
        return false;
      }
    }, {
      key: "currentValues",
      get: function get() {
        return Array.from(this._currentValues.values());
      }
    }]);

    return KeyStore;
  }();

  var PointerStore = /*#__PURE__*/function () {
    /** @type {boolean} */
    // Pointer Positions within Area

    /** @type {Vect2} @private */

    /** @type {Vect2} @private */

    /** @type {Vect2} @private */
    // General Pointer Position

    /** @type {Vect2} @private */

    /** @type {Vect2} @private */

    /** @type {Vect2} @private */

    /** @type {TouchEvent} @private */

    /**
     * @class PointerStore
     * @constructor PointerStore
     * @param {{DS:DragSelect}} p
     */
    function PointerStore(_ref) {
      var _this = this;

      var DS = _ref.DS;

      _classCallCheck(this, PointerStore);

      _defineProperty(this, "_isMouseInteraction", false);

      _defineProperty(this, "_initialValArea", void 0);

      _defineProperty(this, "_currentValArea", void 0);

      _defineProperty(this, "_lastValArea", void 0);

      _defineProperty(this, "_initialVal", void 0);

      _defineProperty(this, "_currentVal", void 0);

      _defineProperty(this, "_lastVal", void 0);

      _defineProperty(this, "_lastTouch", void 0);

      _defineProperty(this, "init", function () {
        document.addEventListener('mousemove', _this.update);
        document.addEventListener('touchmove', _this.update, {
          // @ts-ignore
          passive: false
        });
      });

      _defineProperty(this, "update", function (event) {
        if (!event) return;
        _this.currentVal = getPointerPos({
          event: _this._normalizedEvent(event)
        });
        if (!_this._isMouseInteraction) return;

        _this.DS.publish('PointerStore:updated', {
          event: event
        });
      });

      _defineProperty(this, "stop", function () {
        document.removeEventListener('mousemove', _this.update);
        document.removeEventListener('touchmove', _this.update, {
          // @ts-ignore
          passive: false
        }); // debounce in order "onClick" to work

        setTimeout(function () {
          return _this._isMouseInteraction = false;
        }, 100);
      });

      _defineProperty(this, "reset", function (event) {
        if (!event) return;
        _this.currentVal = _this.lastVal = getPointerPos({
          event: _this._normalizedEvent(event)
        });

        _this.stop();

        _this.init();
      });

      this.DS = DS;
      this.DS.subscribe('Interaction:init', this.init);
      this.DS.subscribe('Interaction:start', function (_ref2) {
        var event = _ref2.event;
        return _this.start(event);
      });
      this.DS.subscribe('Interaction:end', function (_ref3) {
        var event = _ref3.event;
        return _this.reset(event);
      });
    }

    _createClass(PointerStore, [{
      key: "start",

      /** @param {DSEvent} [event] */
      value: function start(event) {
        if (!event) return;
        this._isMouseInteraction = true;
        this.currentVal = this.initialVal = getPointerPos({
          event: this._normalizedEvent(event)
        });
      }
      /** @param {DSEvent} [event] */

    }, {
      key: "_normalizedEvent",

      /**
       * @param {DSEvent} event
       * @return {MouseEvent|Touch}
       * @private
       */
      value: function _normalizedEvent(event) {
        // touchend has not touches. so we take the last touch if a touchevent, we need to store the positions
        if ('touches' in event && event.type !== 'touchend') this._lastTouch = event; // if a touchevent, return the last touch rather than the regular event
        // we need .touches[0] from that event instead

        return 'touches' in event ? this._lastTouch.touches[0] : event;
      }
      /** First recorded pointer position within the area */

    }, {
      key: "initialValArea",
      get: function get() {
        if (!this._initialValArea) return {
          x: 0,
          y: 0
        };
        return this._initialValArea;
      }
      /** Current pointer position within the area */

    }, {
      key: "currentValArea",
      get: function get() {
        if (!this._currentValArea) return {
          x: 0,
          y: 0
        };
        return this._currentValArea;
      }
      /** Last recorded pointer position within the area */

    }, {
      key: "lastValArea",
      get: function get() {
        if (!this._lastValArea) return {
          x: 0,
          y: 0
        };
        return this._lastValArea;
      }
      /** First recorded pointer position */

    }, {
      key: "initialVal",
      get: function get() {
        if (!this._initialVal) return {
          x: 0,
          y: 0
        };
        return this._initialVal;
      }
      /** Current pointer position */
      ,
      set: function set(value) {
        this._initialVal = value;
        this._initialValArea = value && calc(value, '-', calc(rect2vect(this.DS.Area.boundingClientRect), '+', rect2vect(this.DS.Area.computedBorder)));
      }
    }, {
      key: "currentVal",
      get: function get() {
        if (!this._currentVal) return {
          x: 0,
          y: 0
        };
        return this._currentVal;
      }
      /** Last recorded pointer position */
      ,
      set: function set(value) {
        this._currentVal = value;
        this._currentValArea = value && calc(value, '-', calc(rect2vect(this.DS.Area.boundingClientRect), '+', rect2vect(this.DS.Area.computedBorder)));
      }
    }, {
      key: "lastVal",
      get: function get() {
        if (!this._lastVal) return {
          x: 0,
          y: 0
        };
        return this._lastVal;
      },
      set: function set(value) {
        this._lastVal = value;
        this._lastValArea = value && calc(value, '-', calc(rect2vect(this.DS.Area.boundingClientRect), '+', rect2vect(this.DS.Area.computedBorder)));
      }
    }]);

    return PointerStore;
  }();

  var ScrollStore = /*#__PURE__*/function () {
    /**
     * @type {Vect2}
     * @private */

    /**
     * @type {Vect2}
     * @private */

    /**
     * @type {DSArea}
     * @private */

    /**
     * @type {boolean}
     * @private */

    /** @param {{ DS:DragSelect, areaElement: DSArea, zoom:number }} p */
    function ScrollStore(_ref) {
      var _this = this;

      var DS = _ref.DS,
          areaElement = _ref.areaElement,
          zoom = _ref.zoom;

      _classCallCheck(this, ScrollStore);

      _defineProperty(this, "_initialVal", void 0);

      _defineProperty(this, "_currentVal", void 0);

      _defineProperty(this, "_areaElement", void 0);

      _defineProperty(this, "_canScroll", void 0);

      _defineProperty(this, "init", function () {
        return _this._areaElement.addEventListener('scroll', _this.update);
      });

      _defineProperty(this, "start", function () {
        _this._currentVal = _this._initialVal = getCurrentScroll(_this._areaElement);

        _this._areaElement.addEventListener('scroll', _this.update);
      });

      _defineProperty(this, "update", function () {
        return _this._currentVal = getCurrentScroll(_this._areaElement);
      });

      _defineProperty(this, "stop", function () {
        _this._areaElement.removeEventListener('scroll', _this.update);

        _this._initialVal = {
          x: 0,
          y: 0
        };
        _this._canScroll = null;
      });

      _defineProperty(this, "reset", function () {
        _this.stop();

        _this.start();
      });

      this._areaElement = areaElement;
      this.DS = DS;
      this.zoom = zoom;
      this.DS.subscribe('Interaction:init', this.init);
      this.DS.subscribe('Interaction:start', function () {
        return _this.start();
      });
      this.DS.subscribe('Interaction:end', function () {
        return _this.reset();
      });
    }

    _createClass(ScrollStore, [{
      key: "canScroll",
      get: function get() {
        if (typeof this._canScroll === 'boolean') return this._canScroll;
        return this._canScroll = canScroll(this._areaElement);
      }
    }, {
      key: "scrollAmount",
      get: function get() {
        var scrollDiff = calc(this.currentVal, '-', this.initialVal); // if area is zoomed, the scroll values are skewed, we need to fix that manually :(

        var zoom = num2vect(this.zoom);
        var zoomScroll = calc(calc(scrollDiff, '*', zoom), '-', scrollDiff);
        return {
          x: scrollDiff.x + zoomScroll.x,
          y: scrollDiff.y + zoomScroll.y
        };
      }
    }, {
      key: "initialVal",
      get: function get() {
        if (!this._initialVal) return {
          x: 0,
          y: 0
        };
        return this._initialVal;
      }
    }, {
      key: "currentVal",
      get: function get() {
        if (!this._currentVal) return {
          x: 0,
          y: 0
        };
        return this._currentVal;
      }
    }]);

    return ScrollStore;
  }();

  //////////////////////////////////////////////////////////////////////////////////////

  var DragSelect = /*#__PURE__*/function () {
    /**
     * @class DragSelect
     * @constructor DragSelect
     * @param {Settings} settings
     */
    function DragSelect(_ref) {
      var _this = this;

      var _ref$area = _ref.area,
          area = _ref$area === void 0 ? document : _ref$area,
          _ref$selectables = _ref.selectables,
          selectables = _ref$selectables === void 0 ? [] : _ref$selectables,
          _ref$autoScrollSpeed = _ref.autoScrollSpeed,
          autoScrollSpeed = _ref$autoScrollSpeed === void 0 ? 5 : _ref$autoScrollSpeed,
          _ref$zoom = _ref.zoom,
          zoom = _ref$zoom === void 0 ? 1 : _ref$zoom,
          _ref$customStyles = _ref.customStyles,
          customStyles = _ref$customStyles === void 0 ? false : _ref$customStyles,
          _ref$multiSelectMode = _ref.multiSelectMode,
          multiSelectMode = _ref$multiSelectMode === void 0 ? false : _ref$multiSelectMode,
          _ref$multiSelectToggl = _ref.multiSelectToggling,
          multiSelectToggling = _ref$multiSelectToggl === void 0 ? true : _ref$multiSelectToggl,
          _ref$multiSelectKeys = _ref.multiSelectKeys,
          multiSelectKeys = _ref$multiSelectKeys === void 0 ? ['Control', 'Shift', 'Meta'] : _ref$multiSelectKeys,
          _ref$selector = _ref.selector,
          selector = _ref$selector === void 0 ? undefined : _ref$selector,
          _ref$draggability = _ref.draggability,
          draggability = _ref$draggability === void 0 ? true : _ref$draggability,
          _ref$immediateDrag = _ref.immediateDrag,
          immediateDrag = _ref$immediateDrag === void 0 ? true : _ref$immediateDrag,
          _ref$useTransform = _ref.useTransform,
          useTransform = _ref$useTransform === void 0 ? true : _ref$useTransform,
          _ref$hoverClass = _ref.hoverClass,
          hoverClass = _ref$hoverClass === void 0 ? 'ds-hover' : _ref$hoverClass,
          _ref$selectableClass = _ref.selectableClass,
          selectableClass = _ref$selectableClass === void 0 ? 'ds-selectable' : _ref$selectableClass,
          _ref$selectedClass = _ref.selectedClass,
          selectedClass = _ref$selectedClass === void 0 ? 'ds-selected' : _ref$selectedClass,
          _ref$selectorClass = _ref.selectorClass,
          selectorClass = _ref$selectorClass === void 0 ? 'ds-selector' : _ref$selectorClass,
          _ref$selectorAreaClas = _ref.selectorAreaClass,
          selectorAreaClass = _ref$selectorAreaClas === void 0 ? 'ds-selector-area' : _ref$selectorAreaClas,
          callback = _ref.callback,
          onDragMove = _ref.onDragMove,
          onDragStartBegin = _ref.onDragStartBegin,
          onDragStart = _ref.onDragStart,
          onElementSelect = _ref.onElementSelect,
          onElementUnselect = _ref.onElementUnselect;

      _classCallCheck(this, DragSelect);

      _defineProperty(this, "start", function () {
        return _this.Interaction.init();
      });

      _defineProperty(this, "getSelection", function () {
        return _this.SelectedSet.elements;
      });

      _defineProperty(this, "getSelectables", function () {
        return _this.SelectableSet.elements;
      });

      _defineProperty(this, "getInitialCursorPosition", function () {
        return _this.stores.PointerStore.initialVal;
      });

      _defineProperty(this, "getCurrentCursorPosition", function () {
        return _this.stores.PointerStore.currentVal;
      });

      _defineProperty(this, "getPreviousCursorPosition", function () {
        return _this.stores.PointerStore.lastVal;
      });

      _defineProperty(this, "getInitialCursorPositionArea", function () {
        return _this.stores.PointerStore.initialValArea;
      });

      _defineProperty(this, "getCurrentCursorPositionArea", function () {
        return _this.stores.PointerStore.currentValArea;
      });

      _defineProperty(this, "getPreviousCursorPositionArea", function () {
        return _this.stores.PointerStore.lastValArea;
      });

      _defineProperty(this, "isMultiSelect", function (event) {
        return _this.stores.KeyStore.isMultiSelectKeyPressed(event);
      });

      this.PubSub = new PubSub();
      this.subscribe = this.PubSub.subscribe;
      this.unsubscribe = this.PubSub.unsubscribe;
      this.publish = this.PubSub.publish;

      this._callbacksTemp({
        callback: callback,
        onDragMove: onDragMove,
        onDragStart: onDragStart,
        onDragStartBegin: onDragStartBegin,
        onElementSelect: onElementSelect,
        onElementUnselect: onElementUnselect
      });

      this.stores = {
        PointerStore: new PointerStore({
          DS: this
        }),
        ScrollStore: new ScrollStore({
          DS: this,
          areaElement: area,
          zoom: zoom
        }),
        KeyStore: new KeyStore({
          DS: this,
          multiSelectKeys: multiSelectKeys,
          multiSelectMode: multiSelectMode
        })
      };
      this.Area = new Area({
        area: area,
        PS: this.PubSub,
        zoom: zoom
      });
      this.Selector = new Selector({
        DS: this,
        selector: selector,
        selectorClass: selectorClass,
        customStyles: customStyles
      });
      this.SelectorArea = new SelectorArea({
        DS: this,
        selectorAreaClass: selectorAreaClass,
        autoScrollSpeed: autoScrollSpeed
      });
      this.SelectableSet = new SelectableSet({
        elements: selectables,
        DS: this,
        className: selectableClass,
        hoverClassName: hoverClass
      });
      this.SelectedSet = new SelectedSet({
        DS: this,
        className: selectedClass
      });
      this.Selection = new Selection({
        DS: this,
        hoverClassName: hoverClass,
        multiSelectToggling: multiSelectToggling
      });
      this.Drag = new Drag({
        DS: this,
        useTransform: useTransform
      });
      this.Interaction = new Interaction({
        areaElement: area,
        DS: this,
        draggability: draggability,
        immediateDrag: immediateDrag
      }); // Subscriber Aliases

      this.subscribe('Selected:added', function (_ref2) {
        var items = _ref2.items,
            item = _ref2.item;
        return _this.publish('elementselect', {
          items: items,
          item: item
        });
      });
      this.subscribe('Selected:removed', function (_ref3) {
        var items = _ref3.items,
            item = _ref3.item;
        return _this.publish('elementunselect', {
          items: items,
          item: item
        });
      });
      this.subscribe('Interaction:update', function (_ref4) {
        var event = _ref4.event,
            data = _ref4.data;
        if (event && !data) _this.publish('dragmove', {
          items: _this.getSelection(),
          event: event
        });
        if (!event && data) _this.publish('autoscroll', {
          data: data
        });
      });
      this.subscribe('Interaction:start', function (_ref5) {
        var event = _ref5.event;
        return _this.publish('dragstart', {
          items: _this.getSelection(),
          event: event
        });
      });
      this.subscribe('Interaction:end', function (_ref6) {
        var event = _ref6.event;
        return _this.publish('callback', {
          items: _this.getSelection(),
          event: event
        });
      });
      this.start();
    } // @TODO: remove after deprecation


    _createClass(DragSelect, [{
      key: "_callbacksTemp",
      value: function _callbacksTemp(_ref7) {
        var callback = _ref7.callback,
            onDragMove = _ref7.onDragMove,
            onDragStart = _ref7.onDragStart,
            onDragStartBegin = _ref7.onDragStartBegin,
            onElementSelect = _ref7.onElementSelect,
            onElementUnselect = _ref7.onElementUnselect;

        var warnMessage = function warnMessage(name, newName) {
          return console.warn("[DragSelect] ".concat(name, " is deprecated. Use DragSelect.subscribe(\"").concat(newName, "\", (callbackObject) => {}) instead. Act Now! See docs for more info"));
        };

        if (callback) {
          warnMessage('callback', 'callback');
          this.subscribe('callback', function (_ref8) {
            var items = _ref8.items,
                item = _ref8.item,
                event = _ref8.event;
            return callback(items, event);
          });
        }

        if (onDragMove) {
          warnMessage('onDragMove', 'dragmove');
          this.subscribe('dragmove', function (_ref9) {
            var items = _ref9.items,
                item = _ref9.item,
                event = _ref9.event;
            return onDragMove(event);
          });
        }

        if (onDragStart) {
          warnMessage('onDragStart', 'dragstart');
          this.subscribe('dragstart', function (_ref10) {
            var items = _ref10.items,
                item = _ref10.item,
                event = _ref10.event;
            return onDragStart(event);
          });
        }

        if (onDragStartBegin) {
          warnMessage('onDragStartBegin', 'dragstart');
          this.subscribe('dragstart', function (_ref11) {
            var items = _ref11.items,
                item = _ref11.item,
                event = _ref11.event;
            return onDragStartBegin(event);
          });
        }

        if (onElementSelect) {
          warnMessage('onElementSelect', 'elementselect');
          this.subscribe('elementselect', function (_ref12) {
            var items = _ref12.items,
                item = _ref12.item,
                event = _ref12.event;
            return onElementSelect(item, event);
          });
        }

        if (onElementUnselect) {
          warnMessage('onElementUnselect', 'elementunselect');
          this.subscribe('elementunselect', function (_ref13) {
            var items = _ref13.items,
                item = _ref13.item,
                event = _ref13.event;
            return onElementUnselect(item, event);
          });
        }
      } // Useful methods for the user
      //////////////////////////////////////////////////////////////////////////////////////

      /**
       * Initializes the functionality. Automatically triggered when created.
       * Also, reset the functionality after a teardown
       */

    }, {
      key: "stop",

      /**
       * Complete function teardown
       * Will teardown/stop the whole functionality
       * @param {boolean} [remove=true] - if elements should be removed.
       * @param {boolean} [fromSelection=true] - if elements should also be added/removed to the selection.
       * @param {boolean} [withCallback] - if elements should also be added/removed to the selection.
       */
      value: function stop() {
        var remove = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var fromSelection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var withCallback = arguments.length > 2 ? arguments[2] : undefined;
        if (withCallback) this.publish('callback', {
          items: this.getSelection()
        });
        this.Interaction.stop();
        this.Area.stop();
        this.Drag.stop();
        this.Selector.stop();
        this.stores.KeyStore.stop();
        this.stores.PointerStore.stop();
        this.stores.ScrollStore.stop();
        if (remove) this.SelectableSet.clear();
        if (fromSelection) this.SelectedSet.clear();
      }
      /**
       * Returns the current selected nodes
       * @return {DSElements}
       */

    }, {
      key: "addSelection",

      /**
       * Adds several elements to the selection list also adds the specific classes and take into account all calculations.
       * Does not clear the selection, in contrary to .setSelection. Can add multiple elements at once
       * @param {DSInputElements} elements one or multiple elements
       * @param {boolean} [triggerCallback] - if callback should be called
       * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
       * @return {DSElements} all selected elements
       */
      value: function addSelection(elements, triggerCallback, dontAddToSelectables) {
        this.SelectedSet.addAll(toArray(elements));
        if (!dontAddToSelectables) this.addSelectables(elements);
        if (triggerCallback) this.PubSub.publish('callback', {
          items: this.getSelection()
        });
        return this.getSelection();
      }
      /**
       * Removes specific elements from the selection
       * Multiple elements can be given at once, in contrary to unselect
       * @param {DSInputElements} elements one or multiple elements
       * @param {boolean} [triggerCallback] - if callback should be called
       * @param {boolean} [removeFromSelectables] - if element should be removed from the list of selectable elements
       * @return {DSElements} all selected elements
       */

    }, {
      key: "removeSelection",
      value: function removeSelection(elements, triggerCallback, removeFromSelectables) {
        this.SelectedSet.deleteAll(toArray(elements));
        if (removeFromSelectables) this.removeSelectables(elements);
        if (triggerCallback) this.PubSub.publish('callback', {
          items: this.getSelection()
        });
        return this.getSelection();
      }
      /**
       * Toggles specific elements from the selection:
       * If element is not in selection it will be added, if it is already selected, it will be removed.
       * Multiple elements can be given at once.
       * @param {DSInputElements} elements one or multiple elements
       * @param {boolean} [triggerCallback] - if callback should be called
       * @param {boolean} [alsoSelectables] - if element should not be added/removed to the list of selectable elements accordingly
       * @return {DSElements} all selected elements
       */

    }, {
      key: "toggleSelection",
      value: function toggleSelection(elements, triggerCallback, alsoSelectables) {
        var _this2 = this;

        toArray(elements).forEach(function (el) {
          return _this2.SelectedSet.has(el) ? _this2.removeSelection(elements, triggerCallback, alsoSelectables) : _this2.addSelection(elements, triggerCallback, alsoSelectables);
        });
        if (triggerCallback) this.PubSub.publish('callback', {
          items: this.getSelection()
        });
        return this.getSelection();
      }
      /**
       * Sets the current selected elements and optionally run the callback
       * By default, adds new elements also to the list of selectables
       * @param {DSInputElements} elements – dom elements
       * @param {boolean} [triggerCallback] - if callback should be called
       * @param {boolean} [dontAddToSelectables] - if element should not be added to the list of selectable elements
       * @return {DSElements}
       */

    }, {
      key: "setSelection",
      value: function setSelection(elements, triggerCallback, dontAddToSelectables) {
        this.clearSelection();
        this.addSelection(elements, triggerCallback, dontAddToSelectables);
        return this.getSelection();
      }
      /**
       * Unselect / Deselect all current selected Nodes
       * @param {boolean} [triggerCallback] - if callback should be called
       * @return {DSElements} this.selected, should be empty
       */

    }, {
      key: "clearSelection",
      value: function clearSelection(triggerCallback) {
        this.SelectedSet.clear();
        if (triggerCallback) this.PubSub.publish('callback', {
          items: this.getSelection()
        });
        return this.getSelection();
      }
      /**
       * Add elements that can be selected. No node is added twice
       * @param {DSInputElements} elements dom element(s)
       * @param {boolean} [addToSelection] if elements should also be added to current selection
       * @return {DSInputElements} the added element(s)
       */

    }, {
      key: "addSelectables",
      value: function addSelectables(elements, addToSelection) {
        var els = toArray(elements);
        this.SelectableSet.addAll(els);
        if (addToSelection) this.SelectedSet.addAll(els);
        return elements;
      }
      /**
       * Gets all nodes that can potentially be selected
       * @return {DSElements} this.selectables
       */

    }, {
      key: "setSelectables",

      /**
       * Sets all elements that can be selected.
       * Removes all current selectables (& their respective classes).
       * Adds the new set to the selectables set, thus replacing the original set.
       * @param {DSInputElements} elements – dom element(s)
       * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
       * @param {boolean} [addToSelection] if elements should also be added to current selection
       * @return {DSInputElements} elements – the added element(s)
       */
      value: function setSelectables(elements, removeFromSelection, addToSelection) {
        this.removeSelectables(elements, removeFromSelection);
        return this.addSelectables(elements, addToSelection);
      }
      /**
       * Remove elements from the elements that can be selected.
       * @param {DSInputElements} elements – dom element(s)
       * @param {boolean} [removeFromSelection] if elements should also be removed from current selection
       * @return {DSInputElements} the removed element(s)
       */

    }, {
      key: "removeSelectables",
      value: function removeSelectables(elements, removeFromSelection) {
        this.SelectedSet.clear();
        if (removeFromSelection) this.SelectedSet.clear();
        return elements;
      }
      /** The starting/initial position of the cursor/selector @return {Vect2} */

    }, {
      key: "getCursorPositionDifference",

      /**
       * Returns the cursor position difference between start and now
       * If usePreviousCursorDifference is passed,
       * it will output the cursor position difference between the previous selection and now
       * @param {boolean} [usePreviousCursorDifference]
       * @return {Vect2}
       * @deprecated
       */
      value: function getCursorPositionDifference(usePreviousCursorDifference) {
        var posA = this.getCurrentCursorPosition();
        var posB = usePreviousCursorDifference ? this.getPreviousCursorPosition() : this.getInitialCursorPosition();
        return calc(posA, '-', posB);
      }
    }]);

    return DragSelect;
  }();

  return DragSelect;

})));
