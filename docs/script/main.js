/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARRAY_TYPE: () => (/* binding */ ARRAY_TYPE),
/* harmony export */   EPSILON: () => (/* binding */ EPSILON),
/* harmony export */   RANDOM: () => (/* binding */ RANDOM),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   setMatrixArrayType: () => (/* binding */ setMatrixArrayType),
/* harmony export */   toRadian: () => (/* binding */ toRadian)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   glMatrix: () => (/* reexport module object */ _common_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   mat2: () => (/* reexport module object */ _mat2_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   mat2d: () => (/* reexport module object */ _mat2d_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   mat3: () => (/* reexport module object */ _mat3_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   mat4: () => (/* reexport module object */ _mat4_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   quat: () => (/* reexport module object */ _quat_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   quat2: () => (/* reexport module object */ _quat2_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   vec2: () => (/* reexport module object */ _vec2_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   vec3: () => (/* reexport module object */ _vec3_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   vec4: () => (/* reexport module object */ _vec4_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat2.js */ "./node_modules/gl-matrix/esm/mat2.js");
/* harmony import */ var _mat2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat2d.js */ "./node_modules/gl-matrix/esm/mat2d.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var _quat2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quat2.js */ "./node_modules/gl-matrix/esm/quat2.js");
/* harmony import */ var _vec2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vec2.js */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");












/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LDU: () => (/* binding */ LDU),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */

function fromValues(m00, m01, m10, m11) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */

function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}
/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}
/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3]; // Calculate the determinant

  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;
  return out;
}
/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the source matrix
 * @returns {mat2} out
 */

function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;
  return out;
}
/**
 * Calculates the determinant of a mat2
 *
 * @param {ReadonlyMat2} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}
/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}
/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}
/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2
 *
 * @param {ReadonlyMat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns Frobenius norm of a mat2
 *
 * @param {ReadonlyMat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3]);
}
/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {ReadonlyMat2} L the lower triangular matrix
 * @param {ReadonlyMat2} D the diagonal matrix
 * @param {ReadonlyMat2} U the upper triangular matrix
 * @param {ReadonlyMat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}
/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @returns {mat2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2} a The first matrix.
 * @param {ReadonlyMat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {ReadonlyMat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {ReadonlyMat2} a the first operand
 * @param {ReadonlyMat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Alias for {@link mat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat2d.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat2d.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2x3 Matrix
 * @module mat2d
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, b,
 *  c, d,
 *  tx, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, b, 0,
 *  c, d, 0,
 *  tx, ty, 1]
 * </pre>
 * The last column is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[4] = 0;
    out[5] = 0;
  }

  out[0] = 1;
  out[3] = 1;
  return out;
}
/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {ReadonlyMat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}
/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */

function fromValues(a, b, c, d, tx, ty) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */

function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}
/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {mat2d} out
 */

function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];
  var det = aa * ad - ab * ac;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}
/**
 * Calculates the determinant of a mat2d
 *
 * @param {ReadonlyMat2d} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}
/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}
/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/

function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}
/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to translate
 * @param {ReadonlyVec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/

function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat2d} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat2d} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}
/**
 * Returns a string representation of a mat2d
 *
 * @param {ReadonlyMat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat2d(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ")";
}
/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {ReadonlyMat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], 1);
}
/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @returns {mat2d} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}
/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {ReadonlyMat2d} a the first operand
 * @param {ReadonlyMat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat2d} a The first matrix.
 * @param {ReadonlyMat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}
/**
 * Alias for {@link mat2d.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat2d.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromMat2d: () => (/* binding */ fromMat2d),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   normalFromMat4: () => (/* binding */ normalFromMat4),
/* harmony export */   projection: () => (/* binding */ projection),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   adjoint: () => (/* binding */ adjoint),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   determinant: () => (/* binding */ determinant),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   frob: () => (/* binding */ frob),
/* harmony export */   fromQuat: () => (/* binding */ fromQuat),
/* harmony export */   fromQuat2: () => (/* binding */ fromQuat2),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromRotationTranslation: () => (/* binding */ fromRotationTranslation),
/* harmony export */   fromRotationTranslationScale: () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   fromRotationTranslationScaleOrigin: () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   fromScaling: () => (/* binding */ fromScaling),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   fromXRotation: () => (/* binding */ fromXRotation),
/* harmony export */   fromYRotation: () => (/* binding */ fromYRotation),
/* harmony export */   fromZRotation: () => (/* binding */ fromZRotation),
/* harmony export */   frustum: () => (/* binding */ frustum),
/* harmony export */   getRotation: () => (/* binding */ getRotation),
/* harmony export */   getScaling: () => (/* binding */ getScaling),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   lookAt: () => (/* binding */ lookAt),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   multiplyScalar: () => (/* binding */ multiplyScalar),
/* harmony export */   multiplyScalarAndAdd: () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   ortho: () => (/* binding */ ortho),
/* harmony export */   orthoNO: () => (/* binding */ orthoNO),
/* harmony export */   orthoZO: () => (/* binding */ orthoZO),
/* harmony export */   perspective: () => (/* binding */ perspective),
/* harmony export */   perspectiveFromFieldOfView: () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   perspectiveNO: () => (/* binding */ perspectiveNO),
/* harmony export */   perspectiveZO: () => (/* binding */ perspectiveZO),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   targetTo: () => (/* binding */ targetTo),
/* harmony export */   translate: () => (/* binding */ translate),
/* harmony export */   transpose: () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */

var perspective = perspectiveNO;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */

var ortho = orthoNO;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   calculateW: () => (/* binding */ calculateW),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   exp: () => (/* binding */ exp),
/* harmony export */   fromEuler: () => (/* binding */ fromEuler),
/* harmony export */   fromMat3: () => (/* binding */ fromMat3),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   getAngle: () => (/* binding */ getAngle),
/* harmony export */   getAxisAngle: () => (/* binding */ getAxisAngle),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   ln: () => (/* binding */ ln),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pow: () => (/* binding */ pow),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   rotationTo: () => (/* binding */ rotationTo),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setAxes: () => (/* binding */ setAxes),
/* harmony export */   setAxisAngle: () => (/* binding */ setAxisAngle),
/* harmony export */   slerp: () => (/* binding */ slerp),
/* harmony export */   sqlerp: () => (/* binding */ sqlerp),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.length;
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.equals;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.create();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.dot(a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__.len(tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_3__.create();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat2.js":
/*!*********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat2.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   conjugate: () => (/* binding */ conjugate),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   fromMat4: () => (/* binding */ fromMat4),
/* harmony export */   fromRotation: () => (/* binding */ fromRotation),
/* harmony export */   fromRotationTranslation: () => (/* binding */ fromRotationTranslation),
/* harmony export */   fromRotationTranslationValues: () => (/* binding */ fromRotationTranslationValues),
/* harmony export */   fromTranslation: () => (/* binding */ fromTranslation),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   getDual: () => (/* binding */ getDual),
/* harmony export */   getReal: () => (/* binding */ getReal),
/* harmony export */   getTranslation: () => (/* binding */ getTranslation),
/* harmony export */   identity: () => (/* binding */ identity),
/* harmony export */   invert: () => (/* binding */ invert),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   rotateAroundAxis: () => (/* binding */ rotateAroundAxis),
/* harmony export */   rotateByQuatAppend: () => (/* binding */ rotateByQuatAppend),
/* harmony export */   rotateByQuatPrepend: () => (/* binding */ rotateByQuatPrepend),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   setDual: () => (/* binding */ setDual),
/* harmony export */   setReal: () => (/* binding */ setReal),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   translate: () => (/* binding */ translate)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quat.js */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mat4.js */ "./node_modules/gl-matrix/esm/mat4.js");



/**
 * Dual Quaternion<br>
 * Format: [real, dual]<br>
 * Quaternion format: XYZW<br>
 * Make sure to have normalized dual quaternions, otherwise the functions may not work as intended.<br>
 * @module quat2
 */

/**
 * Creates a new identity dual quat
 *
 * @returns {quat2} a new dual quaternion [real -> rotation, dual -> translation]
 */

function create() {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    dq[0] = 0;
    dq[1] = 0;
    dq[2] = 0;
    dq[4] = 0;
    dq[5] = 0;
    dq[6] = 0;
    dq[7] = 0;
  }

  dq[3] = 1;
  return dq;
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat2} a dual quaternion to clone
 * @returns {quat2} new dual quaternion
 * @function
 */

function clone(a) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
  dq[0] = a[0];
  dq[1] = a[1];
  dq[2] = a[2];
  dq[3] = a[3];
  dq[4] = a[4];
  dq[5] = a[5];
  dq[6] = a[6];
  dq[7] = a[7];
  return dq;
}
/**
 * Creates a new dual quat initialized with the given values
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromValues(x1, y1, z1, w1, x2, y2, z2, w2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  dq[4] = x2;
  dq[5] = y2;
  dq[6] = z2;
  dq[7] = w2;
  return dq;
}
/**
 * Creates a new dual quat from the given values (quat and translation)
 *
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component (translation)
 * @param {Number} y2 Y component (translation)
 * @param {Number} z2 Z component (translation)
 * @returns {quat2} new dual quaternion
 * @function
 */

function fromRotationTranslationValues(x1, y1, z1, w1, x2, y2, z2) {
  var dq = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(8);
  dq[0] = x1;
  dq[1] = y1;
  dq[2] = z1;
  dq[3] = w1;
  var ax = x2 * 0.5,
      ay = y2 * 0.5,
      az = z2 * 0.5;
  dq[4] = ax * w1 + ay * z1 - az * y1;
  dq[5] = ay * w1 + az * x1 - ax * z1;
  dq[6] = az * w1 + ax * y1 - ay * x1;
  dq[7] = -ax * x1 - ay * y1 - az * z1;
  return dq;
}
/**
 * Creates a dual quat from a quaternion and a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q a normalized quaternion
 * @param {ReadonlyVec3} t tranlation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotationTranslation(out, q, t) {
  var ax = t[0] * 0.5,
      ay = t[1] * 0.5,
      az = t[2] * 0.5,
      bx = q[0],
      by = q[1],
      bz = q[2],
      bw = q[3];
  out[0] = bx;
  out[1] = by;
  out[2] = bz;
  out[3] = bw;
  out[4] = ax * bw + ay * bz - az * by;
  out[5] = ay * bw + az * bx - ax * bz;
  out[6] = az * bw + ax * by - ay * bx;
  out[7] = -ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Creates a dual quat from a translation
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyVec3} t translation vector
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromTranslation(out, t) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = t[0] * 0.5;
  out[5] = t[1] * 0.5;
  out[6] = t[2] * 0.5;
  out[7] = 0;
  return out;
}
/**
 * Creates a dual quat from a quaternion
 *
 * @param {ReadonlyQuat2} dual quaternion receiving operation result
 * @param {ReadonlyQuat} q the quaternion
 * @returns {quat2} dual quaternion receiving operation result
 * @function
 */

function fromRotation(out, q) {
  out[0] = q[0];
  out[1] = q[1];
  out[2] = q[2];
  out[3] = q[3];
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Creates a new dual quat from a matrix (4x4)
 *
 * @param {quat2} out the dual quaternion
 * @param {ReadonlyMat4} a the matrix
 * @returns {quat2} dual quat receiving operation result
 * @function
 */

function fromMat4(out, a) {
  //TODO Optimize this
  var outer = _quat_js__WEBPACK_IMPORTED_MODULE_1__.create();
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__.getRotation(outer, a);
  var t = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  _mat4_js__WEBPACK_IMPORTED_MODULE_2__.getTranslation(t, a);
  fromRotationTranslation(out, outer, t);
  return out;
}
/**
 * Copy the values from one dual quat to another
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the source dual quaternion
 * @returns {quat2} out
 * @function
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  return out;
}
/**
 * Set a dual quat to the identity dual quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @returns {quat2} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  return out;
}
/**
 * Set the components of a dual quat to the given values
 *
 * @param {quat2} out the receiving quaternion
 * @param {Number} x1 X component
 * @param {Number} y1 Y component
 * @param {Number} z1 Z component
 * @param {Number} w1 W component
 * @param {Number} x2 X component
 * @param {Number} y2 Y component
 * @param {Number} z2 Z component
 * @param {Number} w2 W component
 * @returns {quat2} out
 * @function
 */

function set(out, x1, y1, z1, w1, x2, y2, z2, w2) {
  out[0] = x1;
  out[1] = y1;
  out[2] = z1;
  out[3] = w1;
  out[4] = x2;
  out[5] = y2;
  out[6] = z2;
  out[7] = w2;
  return out;
}
/**
 * Gets the real part of a dual quat
 * @param  {quat} out real part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} real part
 */

var getReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__.copy;
/**
 * Gets the dual part of a dual quat
 * @param  {quat} out dual part
 * @param  {ReadonlyQuat2} a Dual Quaternion
 * @return {quat} dual part
 */

function getDual(out, a) {
  out[0] = a[4];
  out[1] = a[5];
  out[2] = a[6];
  out[3] = a[7];
  return out;
}
/**
 * Set the real component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the real part
 * @returns {quat2} out
 * @function
 */

var setReal = _quat_js__WEBPACK_IMPORTED_MODULE_1__.copy;
/**
 * Set the dual component of a dual quat to the given quaternion
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat} q a quaternion representing the dual part
 * @returns {quat2} out
 * @function
 */

function setDual(out, q) {
  out[4] = q[0];
  out[5] = q[1];
  out[6] = q[2];
  out[7] = q[3];
  return out;
}
/**
 * Gets the translation of a normalized dual quat
 * @param  {vec3} out translation
 * @param  {ReadonlyQuat2} a Dual Quaternion to be decomposed
 * @return {vec3} translation
 */

function getTranslation(out, a) {
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3];
  out[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
  out[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
  out[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  return out;
}
/**
 * Translates a dual quat by the given vector
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {quat2} out
 */

function translate(out, a, v) {
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3],
      bx1 = v[0] * 0.5,
      by1 = v[1] * 0.5,
      bz1 = v[2] * 0.5,
      ax2 = a[4],
      ay2 = a[5],
      az2 = a[6],
      aw2 = a[7];
  out[0] = ax1;
  out[1] = ay1;
  out[2] = az1;
  out[3] = aw1;
  out[4] = aw1 * bx1 + ay1 * bz1 - az1 * by1 + ax2;
  out[5] = aw1 * by1 + az1 * bx1 - ax1 * bz1 + ay2;
  out[6] = aw1 * bz1 + ax1 * by1 - ay1 * bx1 + az2;
  out[7] = -ax1 * bx1 - ay1 * by1 - az1 * bz1 + aw2;
  return out;
}
/**
 * Rotates a dual quat around the X axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateX(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__.rotateX(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Y axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateY(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__.rotateY(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat around the Z axis
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {number} rad how far should the rotation be
 * @returns {quat2} out
 */

function rotateZ(out, a, rad) {
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7],
      ax1 = ax * bw + aw * bx + ay * bz - az * by,
      ay1 = ay * bw + aw * by + az * bx - ax * bz,
      az1 = az * bw + aw * bz + ax * by - ay * bx,
      aw1 = aw * bw - ax * bx - ay * by - az * bz;
  _quat_js__WEBPACK_IMPORTED_MODULE_1__.rotateZ(out, a, rad);
  bx = out[0];
  by = out[1];
  bz = out[2];
  bw = out[3];
  out[4] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[5] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[6] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[7] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (a * q)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @returns {quat2} out
 */

function rotateByQuatAppend(out, a, q) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  out[0] = ax * qw + aw * qx + ay * qz - az * qy;
  out[1] = ay * qw + aw * qy + az * qx - ax * qz;
  out[2] = az * qw + aw * qz + ax * qy - ay * qx;
  out[3] = aw * qw - ax * qx - ay * qy - az * qz;
  ax = a[4];
  ay = a[5];
  az = a[6];
  aw = a[7];
  out[4] = ax * qw + aw * qx + ay * qz - az * qy;
  out[5] = ay * qw + aw * qy + az * qx - ax * qz;
  out[6] = az * qw + aw * qz + ax * qy - ay * qx;
  out[7] = aw * qw - ax * qx - ay * qy - az * qz;
  return out;
}
/**
 * Rotates a dual quat by a given quaternion (q * a)
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat} q quaternion to rotate by
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @returns {quat2} out
 */

function rotateByQuatPrepend(out, q, a) {
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3],
      bx = a[0],
      by = a[1],
      bz = a[2],
      bw = a[3];
  out[0] = qx * bw + qw * bx + qy * bz - qz * by;
  out[1] = qy * bw + qw * by + qz * bx - qx * bz;
  out[2] = qz * bw + qw * bz + qx * by - qy * bx;
  out[3] = qw * bw - qx * bx - qy * by - qz * bz;
  bx = a[4];
  by = a[5];
  bz = a[6];
  bw = a[7];
  out[4] = qx * bw + qw * bx + qy * bz - qz * by;
  out[5] = qy * bw + qw * by + qz * bx - qx * bz;
  out[6] = qz * bw + qw * bz + qx * by - qy * bx;
  out[7] = qw * bw - qx * bx - qy * by - qz * bz;
  return out;
}
/**
 * Rotates a dual quat around a given axis. Does the normalisation automatically
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the dual quaternion to rotate
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @param {Number} rad how far the rotation should be
 * @returns {quat2} out
 */

function rotateAroundAxis(out, a, axis, rad) {
  //Special case for rad = 0
  if (Math.abs(rad) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return copy(out, a);
  }

  var axisLength = Math.hypot(axis[0], axis[1], axis[2]);
  rad = rad * 0.5;
  var s = Math.sin(rad);
  var bx = s * axis[0] / axisLength;
  var by = s * axis[1] / axisLength;
  var bz = s * axis[2] / axisLength;
  var bw = Math.cos(rad);
  var ax1 = a[0],
      ay1 = a[1],
      az1 = a[2],
      aw1 = a[3];
  out[0] = ax1 * bw + aw1 * bx + ay1 * bz - az1 * by;
  out[1] = ay1 * bw + aw1 * by + az1 * bx - ax1 * bz;
  out[2] = az1 * bw + aw1 * bz + ax1 * by - ay1 * bx;
  out[3] = aw1 * bw - ax1 * bx - ay1 * by - az1 * bz;
  var ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  out[4] = ax * bw + aw * bx + ay * bz - az * by;
  out[5] = ay * bw + aw * by + az * bx - ax * bz;
  out[6] = az * bw + aw * bz + ax * by - ay * bx;
  out[7] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Adds two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 * @function
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  return out;
}
/**
 * Multiplies two dual quat's
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {quat2} out
 */

function multiply(out, a, b) {
  var ax0 = a[0],
      ay0 = a[1],
      az0 = a[2],
      aw0 = a[3],
      bx1 = b[4],
      by1 = b[5],
      bz1 = b[6],
      bw1 = b[7],
      ax1 = a[4],
      ay1 = a[5],
      az1 = a[6],
      aw1 = a[7],
      bx0 = b[0],
      by0 = b[1],
      bz0 = b[2],
      bw0 = b[3];
  out[0] = ax0 * bw0 + aw0 * bx0 + ay0 * bz0 - az0 * by0;
  out[1] = ay0 * bw0 + aw0 * by0 + az0 * bx0 - ax0 * bz0;
  out[2] = az0 * bw0 + aw0 * bz0 + ax0 * by0 - ay0 * bx0;
  out[3] = aw0 * bw0 - ax0 * bx0 - ay0 * by0 - az0 * bz0;
  out[4] = ax0 * bw1 + aw0 * bx1 + ay0 * bz1 - az0 * by1 + ax1 * bw0 + aw1 * bx0 + ay1 * bz0 - az1 * by0;
  out[5] = ay0 * bw1 + aw0 * by1 + az0 * bx1 - ax0 * bz1 + ay1 * bw0 + aw1 * by0 + az1 * bx0 - ax1 * bz0;
  out[6] = az0 * bw1 + aw0 * bz1 + ax0 * by1 - ay0 * bx1 + az1 * bw0 + aw1 * bz0 + ax1 * by0 - ay1 * bx0;
  out[7] = aw0 * bw1 - ax0 * bx1 - ay0 * by1 - az0 * bz1 + aw1 * bw0 - ax1 * bx0 - ay1 * by0 - az1 * bz0;
  return out;
}
/**
 * Alias for {@link quat2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a dual quat by a scalar number
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the dual quat to scale
 * @param {Number} b amount to scale the dual quat by
 * @returns {quat2} out
 * @function
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  return out;
}
/**
 * Calculates the dot product of two dual quat's (The dot product of the real parts)
 *
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _quat_js__WEBPACK_IMPORTED_MODULE_1__.dot;
/**
 * Performs a linear interpolation between two dual quats's
 * NOTE: The resulting dual quaternions won't always be normalized (The error is most noticeable when t = 0.5)
 *
 * @param {quat2} out the receiving dual quat
 * @param {ReadonlyQuat2} a the first operand
 * @param {ReadonlyQuat2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat2} out
 */

function lerp(out, a, b, t) {
  var mt = 1 - t;
  if (dot(a, b) < 0) t = -t;
  out[0] = a[0] * mt + b[0] * t;
  out[1] = a[1] * mt + b[1] * t;
  out[2] = a[2] * mt + b[2] * t;
  out[3] = a[3] * mt + b[3] * t;
  out[4] = a[4] * mt + b[4] * t;
  out[5] = a[5] * mt + b[5] * t;
  out[6] = a[6] * mt + b[6] * t;
  out[7] = a[7] * mt + b[7] * t;
  return out;
}
/**
 * Calculates the inverse of a dual quat. If they are normalized, conjugate is cheaper
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quat to calculate inverse of
 * @returns {quat2} out
 */

function invert(out, a) {
  var sqlen = squaredLength(a);
  out[0] = -a[0] / sqlen;
  out[1] = -a[1] / sqlen;
  out[2] = -a[2] / sqlen;
  out[3] = a[3] / sqlen;
  out[4] = -a[4] / sqlen;
  out[5] = -a[5] / sqlen;
  out[6] = -a[6] / sqlen;
  out[7] = a[7] / sqlen;
  return out;
}
/**
 * Calculates the conjugate of a dual quat
 * If the dual quaternion is normalized, this function is faster than quat2.inverse and produces the same result.
 *
 * @param {quat2} out the receiving quaternion
 * @param {ReadonlyQuat2} a quat to calculate conjugate of
 * @returns {quat2} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  out[4] = -a[4];
  out[5] = -a[5];
  out[6] = -a[6];
  out[7] = a[7];
  return out;
}
/**
 * Calculates the length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate length of
 * @returns {Number} length of a
 * @function
 */

var length = _quat_js__WEBPACK_IMPORTED_MODULE_1__.length;
/**
 * Alias for {@link quat2.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a dual quat
 *
 * @param {ReadonlyQuat2} a dual quat to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _quat_js__WEBPACK_IMPORTED_MODULE_1__.squaredLength;
/**
 * Alias for {@link quat2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a dual quat
 *
 * @param {quat2} out the receiving dual quaternion
 * @param {ReadonlyQuat2} a dual quaternion to normalize
 * @returns {quat2} out
 * @function
 */

function normalize(out, a) {
  var magnitude = squaredLength(a);

  if (magnitude > 0) {
    magnitude = Math.sqrt(magnitude);
    var a0 = a[0] / magnitude;
    var a1 = a[1] / magnitude;
    var a2 = a[2] / magnitude;
    var a3 = a[3] / magnitude;
    var b0 = a[4];
    var b1 = a[5];
    var b2 = a[6];
    var b3 = a[7];
    var a_dot_b = a0 * b0 + a1 * b1 + a2 * b2 + a3 * b3;
    out[0] = a0;
    out[1] = a1;
    out[2] = a2;
    out[3] = a3;
    out[4] = (b0 - a0 * a_dot_b) / magnitude;
    out[5] = (b1 - a1 * a_dot_b) / magnitude;
    out[6] = (b2 - a2 * a_dot_b) / magnitude;
    out[7] = (b3 - a3 * a_dot_b) / magnitude;
  }

  return out;
}
/**
 * Returns a string representation of a dual quatenion
 *
 * @param {ReadonlyQuat2} a dual quaternion to represent as a string
 * @returns {String} string representation of the dual quat
 */

function str(a) {
  return "quat2(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ")";
}
/**
 * Returns whether or not the dual quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat2} a the first dual quaternion.
 * @param {ReadonlyQuat2} b the second dual quaternion.
 * @returns {Boolean} true if the dual quaternions are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7];
}
/**
 * Returns whether or not the dual quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat2} a the first dual quat.
 * @param {ReadonlyQuat2} b the second dual quat.
 * @returns {Boolean} true if the dual quats are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7));
}

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec2.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat2: () => (/* binding */ transformMat2),
/* harmony export */   transformMat2d: () => (/* binding */ transformMat2d),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   angle: () => (/* binding */ angle),
/* harmony export */   bezier: () => (/* binding */ bezier),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   hermite: () => (/* binding */ hermite),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   rotateX: () => (/* binding */ rotateX),
/* harmony export */   rotateY: () => (/* binding */ rotateY),
/* harmony export */   rotateZ: () => (/* binding */ rotateZ),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat3: () => (/* binding */ transformMat3),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   ceil: () => (/* binding */ ceil),
/* harmony export */   clone: () => (/* binding */ clone),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   create: () => (/* binding */ create),
/* harmony export */   cross: () => (/* binding */ cross),
/* harmony export */   dist: () => (/* binding */ dist),
/* harmony export */   distance: () => (/* binding */ distance),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   divide: () => (/* binding */ divide),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   equals: () => (/* binding */ equals),
/* harmony export */   exactEquals: () => (/* binding */ exactEquals),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   fromValues: () => (/* binding */ fromValues),
/* harmony export */   inverse: () => (/* binding */ inverse),
/* harmony export */   len: () => (/* binding */ len),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   mul: () => (/* binding */ mul),
/* harmony export */   multiply: () => (/* binding */ multiply),
/* harmony export */   negate: () => (/* binding */ negate),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   scale: () => (/* binding */ scale),
/* harmony export */   scaleAndAdd: () => (/* binding */ scaleAndAdd),
/* harmony export */   set: () => (/* binding */ set),
/* harmony export */   sqrDist: () => (/* binding */ sqrDist),
/* harmony export */   sqrLen: () => (/* binding */ sqrLen),
/* harmony export */   squaredDistance: () => (/* binding */ squaredDistance),
/* harmony export */   squaredLength: () => (/* binding */ squaredLength),
/* harmony export */   str: () => (/* binding */ str),
/* harmony export */   sub: () => (/* binding */ sub),
/* harmony export */   subtract: () => (/* binding */ subtract),
/* harmony export */   transformMat4: () => (/* binding */ transformMat4),
/* harmony export */   transformQuat: () => (/* binding */ transformQuat),
/* harmony export */   zero: () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),

/***/ "./src/ts/engine/engine.ts":
/*!*********************************!*\
  !*** ./src/ts/engine/engine.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Engine = void 0;
const WebGPU = __importStar(__webpack_require__(/*! ../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
const indexing_1 = __webpack_require__(/*! ./indexing/indexing */ "./src/ts/engine/indexing/indexing.ts");
const fillable_mesh_1 = __webpack_require__(/*! ./initial-conditions/fillable-mesh */ "./src/ts/engine/initial-conditions/fillable-mesh.ts");
const initial_positions_1 = __webpack_require__(/*! ./initial-conditions/initial-positions */ "./src/ts/engine/initial-conditions/initial-positions.ts");
const acceleration_1 = __webpack_require__(/*! ./simulation/acceleration */ "./src/ts/engine/simulation/acceleration.ts");
const initialization_1 = __webpack_require__(/*! ./simulation/initialization */ "./src/ts/engine/simulation/initialization.ts");
const integration_1 = __webpack_require__(/*! ./simulation/integration */ "./src/ts/engine/simulation/integration.ts");
const obstacles_rotation_1 = __webpack_require__(/*! ./simulation/obstacles-rotation */ "./src/ts/engine/simulation/obstacles-rotation.ts");
class Engine {
    constructor(device, data) {
        this.device = device;
        const resetResult = this.applyReset(data);
        this.particlesBuffer = resetResult.particlesBuffer;
        this.particlesCount = resetResult.particlesCount;
        this.spheresRadius = data.spheresRadius;
        this.cellSize = resetResult.cellSize;
        this.gridSize = resetResult.gridSize;
        const particlesBufferData = {
            particlesBuffer: this.particlesBuffer,
            particlesCount: this.particlesCount,
            particlesStructType: Engine.particleStructType,
        };
        this.initialization = new initialization_1.Initialization(this.device, {
            particlesPositions: resetResult.particlesPositions,
            obstaclesPositions: resetResult.obstaclesPositions,
            particlesBufferData,
        });
        this.indexing = new indexing_1.Indexing(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            particlesBufferData,
        });
        this.acceleration = new acceleration_1.Acceleration(this.device, {
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            cellsBufferData: this.indexing.cellsBufferData,
            particlesBufferData,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });
        this.integration = new integration_1.Integration(this.device, {
            particlesBufferData,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });
        this.obstaclesRotation = new obstacles_rotation_1.ParticlesRotation(this.device, {
            particlesBufferData,
            weightThreshold: initialization_1.Initialization.PARTICLE_WEIGHT_THRESHOLD,
        });
        this.needsInitialization = true;
        this.needsIndexing = true;
    }
    compute(commandEncoder, dt, gravity, obstaclesRotationMatrix) {
        if (this.needsInitialization) {
            this.initialization.compute(commandEncoder);
            this.needsInitialization = false;
            this.needsIndexing = true;
        }
        this.indexIfNeeded(commandEncoder);
        if (dt > 0) {
            this.acceleration.compute(commandEncoder, dt, gravity);
            this.integration.compute(commandEncoder, dt);
            if (obstaclesRotationMatrix) {
                this.obstaclesRotation.compute(commandEncoder, obstaclesRotationMatrix);
            }
            this.needsIndexing = true;
            this.indexIfNeeded(commandEncoder);
        }
    }
    reinitialize() {
        this.needsInitialization = true;
    }
    reset(data) {
        this.particlesBuffer.free();
        const resetResult = this.applyReset(data);
        this.particlesBuffer = resetResult.particlesBuffer;
        this.particlesCount = resetResult.particlesCount;
        this.spheresRadius = data.spheresRadius;
        this.cellSize = resetResult.cellSize;
        this.gridSize = resetResult.gridSize;
        const particlesBufferData = {
            particlesBuffer: this.particlesBuffer,
            particlesCount: this.particlesCount,
            particlesStructType: Engine.particleStructType,
        };
        this.initialization.reset({
            particlesPositions: resetResult.particlesPositions,
            obstaclesPositions: resetResult.obstaclesPositions,
            particlesBufferData,
        });
        this.indexing.reset({
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            particlesBufferData,
        });
        this.acceleration.reset({
            gridSize: this.gridSize,
            cellSize: this.cellSize,
            cellsBufferData: this.indexing.cellsBufferData,
            particlesBufferData,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });
        this.integration.reset({
            particlesBufferData,
            particleRadius: this.spheresRadius,
            weightThreshold: Engine.getMaxWeight(false),
        });
        this.obstaclesRotation.reset({
            particlesBufferData,
            weightThreshold: initialization_1.Initialization.PARTICLE_WEIGHT_THRESHOLD,
        });
        this.needsInitialization = true;
        this.needsIndexing = true;
    }
    applyReset(data) {
        const particlesFillableMesh = new fillable_mesh_1.FillableMesh(data.particlesContainerMesh.triangles);
        const particlesPositionsComputer = new initial_positions_1.InitialPositions(data.spheresRadius, particlesFillableMesh, true);
        const particlesPositions = particlesPositionsComputer.computePositions();
        let obstaclesPositions = [];
        if (data.obstaclesMesh) {
            const obstaclesFillableMesh = new fillable_mesh_1.FillableMesh(data.obstaclesMesh.triangles);
            const obstaclesPositionsComputer = new initial_positions_1.InitialPositions(data.spheresRadius, obstaclesFillableMesh, false);
            obstaclesPositions = obstaclesPositionsComputer.computePositions();
        }
        const particlesCount = particlesPositions.length + obstaclesPositions.length;
        const particlesBuffer = new WebGPU.Buffer(this.device, {
            size: Engine.particleStructType.size * particlesCount,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });
        const cellSize = Math.max(0.01, 2.05 * data.spheresRadius);
        const gridSize = [Math.ceil(1 / cellSize), Math.ceil(1 / cellSize), Math.ceil(1 / cellSize)];
        return { particlesBuffer, particlesCount, particlesPositions, obstaclesPositions, cellSize, gridSize };
    }
    static getMaxWeight(includeObstacles) {
        if (includeObstacles) {
            return initialization_1.Initialization.PARTICLE_WEIGHT_OBSTACLE + 1000;
        }
        return initialization_1.Initialization.PARTICLE_WEIGHT_THRESHOLD;
    }
    static get cellBufferDescriptor() {
        return indexing_1.Indexing.cellsBufferDescriptor;
    }
    get cellsBufferData() {
        return this.indexing.cellsBufferData;
    }
    get nonEmptyCellsBuffers() {
        return this.indexing.nonEmptyCellsBuffers;
    }
    get gridData() {
        return this.indexing.gridData;
    }
    get spheresBuffer() {
        return {
            gpuBuffer: this.particlesBuffer.gpuBuffer,
            instancesCount: this.particlesCount,
            sphereRadius: this.spheresRadius,
        };
    }
    indexIfNeeded(commandEncoder) {
        if (this.needsIndexing) {
            this.indexing.compute(commandEncoder);
            this.needsIndexing = false;
        }
    }
}
exports.Engine = Engine;
Engine.particleStructType = new WebGPU.Types.StructType("Particle", [
    { name: "position", type: WebGPU.Types.vec3F32 },
    { name: "weight", type: WebGPU.Types.f32 },
    { name: "velocity", type: WebGPU.Types.vec3F32 },
    { name: "foam", type: WebGPU.Types.f32 },
    { name: "acceleration", type: WebGPU.Types.vec3F32 },
    { name: "indexInCell", type: WebGPU.Types.u32 },
]);
Engine.spheresBufferDescriptor = {
    positionAttribute: Engine.particleStructType.asVertexAttribute("position"),
    weightAttribute: Engine.particleStructType.asVertexAttribute("weight"),
    foamAttribute: Engine.particleStructType.asVertexAttribute("foam"),
    bufferArrayStride: Engine.particleStructType.size,
};


/***/ }),

/***/ "./src/ts/engine/indexing/count-particles-per-cell.ts":
/*!************************************************************!*\
  !*** ./src/ts/engine/indexing/count-particles-per-cell.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CountParticlesPerCell = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class CountParticlesPerCell {
    constructor(device, data) {
        this.device = device;
        const cellStructType = new WebGPU.Types.StructType("Cell", [
            { name: "particlesCount", type: WebGPU.Types.atomicU32 },
            { name: "offset", type: WebGPU.Types.u32 },
        ]);
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "gridSize", type: WebGPU.Types.vec3I32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
            { name: "cellsStride", type: WebGPU.Types.vec3U32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
        ]);
        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.CountParticlesPerCell,
                    structs: [this.uniforms, cellStructType, data.particlesBufferData.particlesStructType],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: CountParticlesPerCell.WORKGROUP_SIZE,
                },
            },
        });
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    compute(commandEncoder) {
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
    reset(data) {
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    applyReset(data) {
        this.uniforms.setValueFromName("gridSize", data.gridSize);
        this.uniforms.setValueFromName("cellSize", data.cellSize);
        this.uniforms.setValueFromName("cellsStride", [1, data.gridSize[0], data.gridSize[0] * data.gridSize[1]]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.uploadToGPU();
        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / CountParticlesPerCell.WORKGROUP_SIZE);
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.cellsBufferData.cellsBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
        return { workgroupsCount, bindgroup };
    }
}
exports.CountParticlesPerCell = CountParticlesPerCell;
CountParticlesPerCell.WORKGROUP_SIZE = 128;


/***/ }),

/***/ "./src/ts/engine/indexing/finalize-prefix-sum.ts":
/*!*******************************************************!*\
  !*** ./src/ts/engine/indexing/finalize-prefix-sum.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FinalizePrefixSum = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class FinalizePrefixSum {
    constructor(device, data) {
        this.device = device;
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "cellsCount", type: WebGPU.Types.u32 },
        ]);
        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.FinalizePrefixSum,
                    structs: [data.cellsBufferData.cellStructType, WebGPU.Types.indirectDrawBufferType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: FinalizePrefixSum.WORKGROUP_SIZE,
                },
            },
        });
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    compute(commandEncoder) {
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
    reset(data) {
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    applyReset(data) {
        this.uniforms.setValueFromName("cellsCount", data.cellsBufferData.cellsCount);
        this.uniforms.uploadToGPU();
        const workgroupsCount = Math.ceil(data.cellsBufferData.cellsCount / FinalizePrefixSum.WORKGROUP_SIZE);
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.dataItemsBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.cellsBufferData.cellsBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: data.cellsIndirectDrawBuffer.bindingResource,
                },
                {
                    binding: 3,
                    resource: data.nonEmptyCellsIndicesBuffer.bindingResource,
                },
                {
                    binding: 4,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
        return { workgroupsCount, bindgroup };
    }
}
exports.FinalizePrefixSum = FinalizePrefixSum;
FinalizePrefixSum.WORKGROUP_SIZE = 128;


/***/ }),

/***/ "./src/ts/engine/indexing/indexing.ts":
/*!********************************************!*\
  !*** ./src/ts/engine/indexing/indexing.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Indexing = void 0;
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
const count_particles_per_cell_1 = __webpack_require__(/*! ./count-particles-per-cell */ "./src/ts/engine/indexing/count-particles-per-cell.ts");
const finalize_prefix_sum_1 = __webpack_require__(/*! ./finalize-prefix-sum */ "./src/ts/engine/indexing/finalize-prefix-sum.ts");
const prefix_sum_1 = __webpack_require__(/*! ./prefix-sum */ "./src/ts/engine/indexing/prefix-sum.ts");
const prepare_prefix_sum_1 = __webpack_require__(/*! ./prepare-prefix-sum */ "./src/ts/engine/indexing/prepare-prefix-sum.ts");
const reorder_particles_1 = __webpack_require__(/*! ./reorder-particles */ "./src/ts/engine/indexing/reorder-particles.ts");
const reset_cells_1 = __webpack_require__(/*! ./reset-cells */ "./src/ts/engine/indexing/reset-cells.ts");
class Indexing {
    constructor(device, data) {
        this.device = device;
        this.cellsIndirectDrawBuffer = new WebGPU.Buffer(device, {
            size: WebGPU.Types.indirectDrawBufferType.size,
            usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.STORAGE,
        });
        WebGPU.Types.indirectDrawBufferType.setValue(this.cellsIndirectDrawBuffer.getMappedRange(), 0, {
            vertexCount: 24,
            instancesCount: 0,
            firstVertex: 0,
            firstInstance: 0, // will be dynamically computed on GPU
        });
        this.cellsIndirectDrawBuffer.unmap();
        const resetResult = this.applyReset(data);
        this.cellsCount = resetResult.cellsCount;
        this.cellsBuffer = resetResult.cellsBuffer;
        this.nonEmptyCellsIndicesBuffer = resetResult.nonEmptyCellsIndicesBuffer;
        this.gridData = resetResult.gridData;
        this.resetCells = new reset_cells_1.ResetCells(device, {
            cellsBufferData: this.cellsBufferData,
        });
        this.countParticlesPerCell = new count_particles_per_cell_1.CountParticlesPerCell(device, {
            cellsBufferData: this.cellsBufferData,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
            particlesBufferData: data.particlesBufferData,
        });
        this.preparePrefixSum = new prepare_prefix_sum_1.PreparePrefixSum(device, {
            cellsBufferData: this.cellsBufferData,
        });
        this.prefixSum = new prefix_sum_1.PrefixSum(device, {
            itemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            itemsCount: this.cellsCount,
            type: WebGPU.Types.vec2U32,
        });
        this.finalizePrefixSum = new finalize_prefix_sum_1.FinalizePrefixSum(device, {
            dataItemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            cellsBufferData: this.cellsBufferData,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer,
            nonEmptyCellsIndicesBuffer: this.nonEmptyCellsIndicesBuffer,
        });
        this.reorderParticles = new reorder_particles_1.ReorderParticles(device, {
            particlesBufferData: data.particlesBufferData,
            cellsBufferData: this.cellsBufferData,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
        });
    }
    compute(commandEncoder) {
        this.resetCells.compute(commandEncoder);
        this.countParticlesPerCell.compute(commandEncoder);
        this.preparePrefixSum.compute(commandEncoder);
        this.prefixSum.compute(commandEncoder);
        this.finalizePrefixSum.compute(commandEncoder);
        this.reorderParticles.compute(commandEncoder);
    }
    reset(data) {
        this.cellsBuffer.free();
        this.nonEmptyCellsIndicesBuffer.free();
        const resetResult = this.applyReset(data);
        this.cellsCount = resetResult.cellsCount;
        this.cellsBuffer = resetResult.cellsBuffer;
        this.nonEmptyCellsIndicesBuffer = resetResult.nonEmptyCellsIndicesBuffer;
        this.gridData = resetResult.gridData;
        this.resetCells.reset({
            cellsBufferData: this.cellsBufferData,
        });
        this.countParticlesPerCell.reset({
            cellsBufferData: this.cellsBufferData,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
            particlesBufferData: data.particlesBufferData,
        });
        this.preparePrefixSum.reset({
            cellsBufferData: this.cellsBufferData,
        });
        this.prefixSum.reset({
            itemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            itemsCount: this.cellsCount,
            type: WebGPU.Types.vec2U32,
        });
        this.finalizePrefixSum.reset({
            dataItemsBuffer: this.preparePrefixSum.dataItemsBuffer,
            cellsBufferData: this.cellsBufferData,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer,
            nonEmptyCellsIndicesBuffer: this.nonEmptyCellsIndicesBuffer,
        });
        this.reorderParticles.reset({
            particlesBufferData: data.particlesBufferData,
            cellsBufferData: this.cellsBufferData,
            gridSize: data.gridSize,
            cellSize: data.cellSize,
        });
    }
    applyReset(data) {
        const cellsCount = data.gridSize[0] * data.gridSize[1] * data.gridSize[2];
        const cellsBuffer = new WebGPU.Buffer(this.device, {
            size: Indexing.cellStructType.size * cellsCount,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.VERTEX,
        });
        const nonEmptyCellsIndicesBuffer = new WebGPU.Buffer(this.device, {
            size: Uint32Array.BYTES_PER_ELEMENT * cellsCount,
            usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
        });
        const gridData = {
            gridSize: data.gridSize,
            cellSize: data.cellSize,
        };
        return { cellsCount, cellsBuffer, nonEmptyCellsIndicesBuffer, gridData };
    }
    get nonEmptyCellsBuffers() {
        return {
            nonEmptyCellsIndicesBuffer: this.nonEmptyCellsIndicesBuffer.gpuBuffer,
            cellsIndirectDrawBuffer: this.cellsIndirectDrawBuffer.gpuBuffer,
        };
    }
    get cellsBufferData() {
        return {
            cellsBuffer: this.cellsBuffer,
            cellStructType: Indexing.cellStructType,
            cellsCount: this.cellsCount,
        };
    }
}
exports.Indexing = Indexing;
Indexing.cellStructType = new WebGPU.Types.StructType("Cell", [
    { name: "particlesCount", type: WebGPU.Types.u32 },
    { name: "offset", type: WebGPU.Types.u32 },
]);
Indexing.cellsBufferDescriptor = {
    particlesCountAttribute: Indexing.cellStructType.asVertexAttribute("particlesCount"),
    bufferArrayStride: Indexing.cellStructType.size,
};


/***/ }),

/***/ "./src/ts/engine/indexing/prefix-sum.ts":
/*!**********************************************!*\
  !*** ./src/ts/engine/indexing/prefix-sum.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrefixSum = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class PrefixSum {
    constructor(device, data) {
        this.downPassBindgroup = null;
        this.childPrefixSum = null;
        this.device = device;
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "itemsCount", type: WebGPU.Types.u32 },
        ]);
        if (!PrefixSum.reducePipeline) {
            PrefixSum.reducePipeline = device.createComputePipeline({
                layout: "auto",
                compute: {
                    module: WebGPU.ShaderModule.create(device, {
                        code: ShaderSources.Engine.Indexing.PrefixSum.Reduce,
                        aliases: {
                            "Type": data.type.typeName,
                        },
                        structs: [this.uniforms],
                    }),
                    entryPoint: "main",
                    constants: {
                        workgroupSize: PrefixSum.WORKGROUP_SIZE,
                        maxLevel: PrefixSum.MAX_WORKGROUP_LEVEL,
                    },
                }
            });
        }
        const resetResult = this.applyReset(data);
        this.dispatchSize = resetResult.dispatchSize;
        this.localTotalsBuffer = resetResult.localTotalsBuffer;
        this.reduceBindgroup = resetResult.reduceBindgroup;
        this.downPassBindgroup = resetResult.downPassBindgroup;
        this.childPrefixSum = resetResult.childPrefixSum;
    }
    compute(commandEncoder) {
        if (!PrefixSum.reducePipeline) {
            throw new Error();
        }
        const reducePass = commandEncoder.beginComputePass();
        reducePass.setPipeline(PrefixSum.reducePipeline);
        this.localSort(reducePass);
        reducePass.end();
        if (this.childPrefixSum) {
            if (!PrefixSum.downPassPipeline) {
                throw new Error();
            }
            const downPass = commandEncoder.beginComputePass();
            downPass.setPipeline(PrefixSum.downPassPipeline);
            this.downPass(downPass);
            downPass.end();
        }
    }
    localSort(pass) {
        pass.setBindGroup(0, this.reduceBindgroup);
        pass.dispatchWorkgroups(this.dispatchSize);
        if (this.childPrefixSum) {
            this.childPrefixSum.localSort(pass);
        }
    }
    downPass(pass) {
        if (this.childPrefixSum) {
            this.childPrefixSum.downPass(pass);
            if (!this.downPassBindgroup) {
                throw new Error();
            }
            pass.setBindGroup(0, this.downPassBindgroup);
            pass.dispatchWorkgroups(this.dispatchSize);
        }
    }
    reset(data) {
        this.localTotalsBuffer.free();
        let child = this.childPrefixSum;
        while (child) {
            child.localTotalsBuffer.free();
            child.uniforms.free();
            child = child.childPrefixSum;
        }
        const resetResult = this.applyReset(data);
        this.dispatchSize = resetResult.dispatchSize;
        this.localTotalsBuffer = resetResult.localTotalsBuffer;
        this.reduceBindgroup = resetResult.reduceBindgroup;
        this.downPassBindgroup = resetResult.downPassBindgroup;
        this.childPrefixSum = resetResult.childPrefixSum;
    }
    applyReset(data) {
        if (data.itemsBuffer.size !== data.type.size * data.itemsCount) {
            throw new Error("Prefix sum: invalid data");
        }
        this.uniforms.setValueFromName("itemsCount", data.itemsCount);
        this.uniforms.uploadToGPU();
        const dispatchSize = Math.ceil(data.itemsCount / PrefixSum.WORKGROUP_SIZE);
        const localTotalsBuffer = new WebGPU.Buffer(this.device, {
            size: data.type.size * dispatchSize,
            usage: GPUBufferUsage.STORAGE,
        });
        const reduceBindgroup = this.device.createBindGroup({
            layout: PrefixSum.reducePipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.itemsBuffer.bindingResource,
                }, {
                    binding: 1,
                    resource: localTotalsBuffer.bindingResource,
                }, {
                    binding: 2,
                    resource: this.uniforms.bindingResource,
                }
            ]
        });
        let childPrefixSum = null;
        let downPassBindgroup = null;
        if (dispatchSize > 1) { // I will need another prefix sum on the totals
            if (!PrefixSum.downPassPipeline) {
                PrefixSum.downPassPipeline = this.device.createComputePipeline({
                    layout: "auto",
                    compute: {
                        module: WebGPU.ShaderModule.create(this.device, {
                            code: ShaderSources.Engine.Indexing.PrefixSum.DownPass,
                            aliases: {
                                "Type": data.type.typeName,
                            },
                            structs: [this.uniforms],
                        }),
                        entryPoint: "main",
                        constants: {
                            workgroupSize: PrefixSum.WORKGROUP_SIZE,
                        },
                    }
                });
            }
            downPassBindgroup = this.device.createBindGroup({
                layout: PrefixSum.downPassPipeline.getBindGroupLayout(0),
                entries: [
                    {
                        binding: 0,
                        resource: localTotalsBuffer.bindingResource,
                    }, {
                        binding: 1,
                        resource: data.itemsBuffer.bindingResource,
                    }, {
                        binding: 2,
                        resource: this.uniforms.bindingResource,
                    }
                ]
            });
            childPrefixSum = new PrefixSum(this.device, {
                itemsBuffer: localTotalsBuffer,
                itemsCount: dispatchSize,
                type: data.type,
            });
        }
        return { dispatchSize, localTotalsBuffer, reduceBindgroup, downPassBindgroup, childPrefixSum };
    }
}
exports.PrefixSum = PrefixSum;
PrefixSum.MAX_WORKGROUP_LEVEL = 8;
PrefixSum.WORKGROUP_SIZE = 1 << (PrefixSum.MAX_WORKGROUP_LEVEL - 1);
PrefixSum.downPassPipeline = null;


/***/ }),

/***/ "./src/ts/engine/indexing/prepare-prefix-sum.ts":
/*!******************************************************!*\
  !*** ./src/ts/engine/indexing/prepare-prefix-sum.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PreparePrefixSum = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class PreparePrefixSum {
    constructor(device, data) {
        this.device = device;
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "cellsCount", type: WebGPU.Types.u32 },
        ]);
        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.PreparePrefixSum,
                    structs: [data.cellsBufferData.cellStructType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: PreparePrefixSum.WORKGROUP_SIZE,
                },
            },
        });
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.dataItemsBuffer = resetResult.dataItemsBuffer;
        this.bindgroup = resetResult.bindgroup;
    }
    compute(commandEncoder) {
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
    reset(data) {
        this.dataItemsBuffer.free();
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.dataItemsBuffer = resetResult.dataItemsBuffer;
        this.bindgroup = resetResult.bindgroup;
    }
    applyReset(data) {
        this.uniforms.setValueFromName("cellsCount", data.cellsBufferData.cellsCount);
        this.uniforms.uploadToGPU();
        const workgroupsCount = Math.ceil(data.cellsBufferData.cellsCount / PreparePrefixSum.WORKGROUP_SIZE);
        const dataItemsBuffer = new WebGPU.Buffer(this.device, {
            size: (Uint32Array.BYTES_PER_ELEMENT * 2) * data.cellsBufferData.cellsCount,
            usage: GPUBufferUsage.STORAGE,
        });
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.cellsBufferData.cellsBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: dataItemsBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
        return { workgroupsCount, dataItemsBuffer, bindgroup };
    }
}
exports.PreparePrefixSum = PreparePrefixSum;
PreparePrefixSum.WORKGROUP_SIZE = 128;


/***/ }),

/***/ "./src/ts/engine/indexing/reorder-particles.ts":
/*!*****************************************************!*\
  !*** ./src/ts/engine/indexing/reorder-particles.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReorderParticles = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class ReorderParticles {
    constructor(device, data) {
        this.device = device;
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "gridSize", type: WebGPU.Types.vec3I32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
            { name: "cellsStride", type: WebGPU.Types.vec3U32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
        ]);
        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.ReorderParticles,
                    structs: [data.cellsBufferData.cellStructType, data.particlesBufferData.particlesStructType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: ReorderParticles.WORKGROUP_SIZE,
                },
            },
        });
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.sourceParticlesBuffer = data.particlesBufferData.particlesBuffer;
        this.tempParticlesBuffer = resetResult.tempParticlesBuffer;
        this.bindgroup = resetResult.bindgroup;
    }
    compute(commandEncoder) {
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
        commandEncoder.copyBufferToBuffer(this.tempParticlesBuffer.gpuBuffer, 0, this.sourceParticlesBuffer.gpuBuffer, 0, this.sourceParticlesBuffer.size);
    }
    reset(data) {
        this.tempParticlesBuffer.free();
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.sourceParticlesBuffer = data.particlesBufferData.particlesBuffer;
        this.tempParticlesBuffer = resetResult.tempParticlesBuffer;
        this.bindgroup = resetResult.bindgroup;
    }
    applyReset(data) {
        this.uniforms.setValueFromName("gridSize", data.gridSize);
        this.uniforms.setValueFromName("cellSize", data.cellSize);
        this.uniforms.setValueFromName("cellsStride", [1, data.gridSize[0], data.gridSize[0] * data.gridSize[1]]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.uploadToGPU();
        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / ReorderParticles.WORKGROUP_SIZE);
        if (!data.particlesBufferData.particlesBuffer.hasUsage(GPUBufferUsage.COPY_DST)) {
            throw new Error();
        }
        const tempParticlesBuffer = new WebGPU.Buffer(this.device, {
            size: data.particlesBufferData.particlesBuffer.size,
            usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
        });
        if (!tempParticlesBuffer.hasUsage(GPUBufferUsage.COPY_SRC)) {
            throw new Error();
        }
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.cellsBufferData.cellsBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: tempParticlesBuffer.bindingResource,
                },
                {
                    binding: 3,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
        return { workgroupsCount, tempParticlesBuffer, bindgroup };
    }
}
exports.ReorderParticles = ReorderParticles;
ReorderParticles.WORKGROUP_SIZE = 256;


/***/ }),

/***/ "./src/ts/engine/indexing/reset-cells.ts":
/*!***********************************************!*\
  !*** ./src/ts/engine/indexing/reset-cells.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetCells = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class ResetCells {
    constructor(device, data) {
        this.device = device;
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "cellsCount", type: WebGPU.Types.u32 },
        ]);
        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Indexing.ResetCells,
                    structs: [data.cellsBufferData.cellStructType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: ResetCells.WORKGROUP_SIZE,
                },
            },
        });
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    compute(commandEncoder) {
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
    reset(data) {
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    applyReset(data) {
        this.uniforms.setValueFromName("cellsCount", data.cellsBufferData.cellsCount);
        this.uniforms.uploadToGPU();
        const workgroupsCount = Math.ceil(data.cellsBufferData.cellsCount / ResetCells.WORKGROUP_SIZE);
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.cellsBufferData.cellsBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: this.uniforms.bindingResource,
                }
            ]
        });
        return { workgroupsCount, bindgroup };
    }
}
exports.ResetCells = ResetCells;
ResetCells.WORKGROUP_SIZE = 128;


/***/ }),

/***/ "./src/ts/engine/initial-conditions/fillable-mesh.ts":
/*!***********************************************************!*\
  !*** ./src/ts/engine/initial-conditions/fillable-mesh.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FillableMesh = void 0;
const ray_caster_1 = __webpack_require__(/*! ./ray-caster */ "./src/ts/engine/initial-conditions/ray-caster.ts");
class FillableMesh {
    constructor(triangles) {
        this.registeredSegments = [];
        this.rayCasterX = new ray_caster_1.RayCaster(ray_caster_1.ERayDirection.X, triangles);
        this.rayCasterY = new ray_caster_1.RayCaster(ray_caster_1.ERayDirection.Y, triangles);
        this.rayCasterZ = new ray_caster_1.RayCaster(ray_caster_1.ERayDirection.Z, triangles);
        const boundingBoxMin = [+100, +100, +100];
        const boundingBoxMax = [-100, -100, -100];
        for (const triangle of triangles) {
            for (let i = 0; i < 3; i++) {
                boundingBoxMin[i] = Math.min(boundingBoxMin[i], triangle.p1[i], triangle.p2[i], triangle.p3[i]);
                boundingBoxMax[i] = Math.max(boundingBoxMax[i], triangle.p1[i], triangle.p2[i], triangle.p3[i]);
            }
        }
        this.boundingBoxMin = boundingBoxMin;
        this.boundingBoxMax = boundingBoxMax;
    }
    isInside(point) {
        for (let i = 0; i < 3; i++) {
            if (point[i] < this.boundingBoxMin[i] || point[i] > this.boundingBoxMax[i]) {
                return false;
            }
        }
        return this.isInsideAccordingToProjection(ray_caster_1.ERayDirection.X, [point[1], point[2]], point[0]) &&
            this.isInsideAccordingToProjection(ray_caster_1.ERayDirection.Y, [point[0], point[2]], point[1]) &&
            this.isInsideAccordingToProjection(ray_caster_1.ERayDirection.Z, [point[0], point[1]], point[2]);
    }
    getSegments(rayDirection, rayCoords) {
        let segments;
        const registeredSegment = this.registeredSegments.find(segment => {
            return segment.direction === rayDirection &&
                segment.coords[0] === rayCoords[0] &&
                segment.coords[1] === rayCoords[1];
        });
        if (registeredSegment) {
            segments = registeredSegment.segments;
        }
        else {
            if (rayDirection === ray_caster_1.ERayDirection.X) {
                segments = this.rayCasterX.computeInternalSegments(rayCoords);
            }
            else if (rayDirection === ray_caster_1.ERayDirection.Y) {
                segments = this.rayCasterY.computeInternalSegments(rayCoords);
            }
            else {
                segments = this.rayCasterZ.computeInternalSegments(rayCoords);
            }
            this.registeredSegments.push({
                direction: rayDirection,
                coords: rayCoords,
                segments,
            });
        }
        return segments;
    }
    isInsideAccordingToProjection(rayDirection, rayCoords, depth) {
        const segments = this.getSegments(rayDirection, rayCoords);
        for (const segment of segments) {
            if (segment.from <= depth && depth <= segment.to) {
                return true;
            }
        }
        return false;
    }
}
exports.FillableMesh = FillableMesh;


/***/ }),

/***/ "./src/ts/engine/initial-conditions/initial-positions.ts":
/*!***************************************************************!*\
  !*** ./src/ts/engine/initial-conditions/initial-positions.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InitialPositions = void 0;
const ray_caster_1 = __webpack_require__(/*! ./ray-caster */ "./src/ts/engine/initial-conditions/ray-caster.ts");
function shiftToStart(x, stride) {
    while (x >= stride) {
        x -= stride;
    }
    return x;
}
class InitialPositions {
    constructor(spheresRadius, mesh, restrictToDomain) {
        this.spheresRadius = spheresRadius;
        this.mesh = mesh;
        this.restrictToDomain = restrictToDomain;
        this.strideX = 2 * spheresRadius;
        this.strideY = spheresRadius * Math.sqrt(3);
        this.strideZ = 2 * spheresRadius * Math.sqrt(6) / 3;
    }
    computePositions() {
        const positions = [];
        const startZ = -this.strideZ;
        for (let z = startZ, nZ = 0; z < 1 + this.strideZ; z += this.strideZ, nZ++) {
            const xShiftFromZ = (nZ % 2 === 0) ? 0 : this.spheresRadius;
            let startY = 0;
            if (nZ % 4 === 1 || nZ % 4 === 3) {
                startY = Math.sqrt(3) * this.spheresRadius / 3;
            }
            else if (nZ % 4 === 2) {
                startY = 2 * Math.sqrt(3) * this.spheresRadius / 3;
            }
            startY = shiftToStart(startY, this.strideY) - this.strideY;
            for (let y = startY, nY = 0; y < 1 + this.strideY; y += this.strideY, nY++) {
                const xShiftFromY = ((nY + 1) % 2) * this.spheresRadius;
                const startX = shiftToStart(xShiftFromZ + xShiftFromY, this.strideX) - this.strideX;
                const segments = this.mesh.getSegments(ray_caster_1.ERayDirection.X, [y, z]);
                this.addRow(startX, y, z, positions, segments);
            }
        }
        return positions;
    }
    addRow(startX, y, z, positions, segments) {
        for (let x = startX; x <= 1 + this.strideX; x += this.strideX) {
            const isInDomain = !this.restrictToDomain || ((x >= this.spheresRadius) && (y >= this.spheresRadius) && (z >= this.spheresRadius) && (1 - x >= this.spheresRadius) && (1 - y >= this.spheresRadius) && (1 - z >= this.spheresRadius));
            if (isInDomain) {
                for (const segment of segments) {
                    if (segment.from <= x && x <= segment.to) {
                        positions.push([x, y, z]);
                        break;
                    }
                }
            }
        }
    }
}
exports.InitialPositions = InitialPositions;


/***/ }),

/***/ "./src/ts/engine/initial-conditions/models/mesh.ts":
/*!*********************************************************!*\
  !*** ./src/ts/engine/initial-conditions/models/mesh.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Mesh = void 0;
const triangle_1 = __webpack_require__(/*! ./triangle */ "./src/ts/engine/initial-conditions/models/triangle.ts");
class Mesh {
    static load(input) {
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        const vertices = [];
        const triangles = [];
        const lines = input.split("\n");
        lines.forEach((line, i) => {
            const lineItems = line.trim().split(/\s+/);
            const command = lineItems[0];
            if (command === "v") { // declare vertex
                if (lineItems.length !== 4) {
                    throw new Error(`Obj loading: line ${i} because it is a vertice declaration that has the wrong count of coordinates: '${line}'.`);
                }
                vertices.push([
                    parseFloat(lineItems[1]),
                    parseFloat(lineItems[2]),
                    parseFloat(lineItems[3]),
                ]);
            }
            else if (command === "f") { // declare face
                if (lineItems.length < 4) {
                    throw new Error(`Obj loading: line ${i} because it is a face declaration that doesn't mention enough vertices: '${line}'.`);
                }
                // faces with more that 3 vertices are interpreted as TRIANGLE_FAN
                for (let iV = 3; iV < lineItems.length; iV++) {
                    const indices = [
                        +(lineItems[1].split("/")[0]),
                        +(lineItems[iV - 1].split("/")[0]),
                        +(lineItems[iV].split("/")[0]),
                    ];
                    for (const indice of indices) {
                        if (indice < 1 || indice > vertices.length) {
                            throw new Error(`Obj loading: line ${i} because vertex index ${indice} is out of range: '${line}'.`);
                        }
                    }
                    triangles.push(new triangle_1.Triangle(vertices[indices[0] - 1], vertices[indices[1] - 1], vertices[indices[2] - 1]));
                }
            }
            else {
                if (line !== "") {
                    console.debug(`Ignoring line ${i} because it is not a vertice or face declaration: '${line}'.`);
                }
            }
        });
        return new Mesh(triangles);
    }
    constructor(triangles) {
        this.triangles = triangles;
    }
}
exports.Mesh = Mesh;


/***/ }),

/***/ "./src/ts/engine/initial-conditions/models/models.ts":
/*!***********************************************************!*\
  !*** ./src/ts/engine/initial-conditions/models/models.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/// <reference types="./obj-type"/>
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Obstacles = exports.Particles = void 0;
const column_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/column.obj */ "./src/models/column.obj"));
const particles_s_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/particles-s.obj */ "./src/models/particles-s.obj"));
const particles_x_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/particles-x.obj */ "./src/models/particles-x.obj"));
const particles_xx_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/particles-xx.obj */ "./src/models/particles-xx.obj"));
const particles_xxx_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/particles-xxx.obj */ "./src/models/particles-xxx.obj"));
const particles_xxxx_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/particles-xxxx.obj */ "./src/models/particles-xxxx.obj"));
const particles_xxxxx_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/particles-xxxxx.obj */ "./src/models/particles-xxxxx.obj"));
const capsules_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/capsules.obj */ "./src/models/capsules.obj"));
const cup_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/cup.obj */ "./src/models/cup.obj"));
const funnel_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/funnel.obj */ "./src/models/funnel.obj"));
const helix_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/helix.obj */ "./src/models/helix.obj"));
const pierced_floor_obj_1 = __importDefault(__webpack_require__(/*! ../../../../models/pierced-floor.obj */ "./src/models/pierced-floor.obj"));
const particles = {
    Column: column_obj_1.default,
    S: particles_s_obj_1.default,
    X: particles_x_obj_1.default,
    XX: particles_xx_obj_1.default,
    XXX: particles_xxx_obj_1.default,
    XXXX: particles_xxxx_obj_1.default,
    XXXXX: particles_xxxxx_obj_1.default,
};
exports.Particles = particles;
const obstacles = {
    Capsules: capsules_obj_1.default,
    Cup: cup_obj_1.default,
    Funnel: funnel_obj_1.default,
    Helix: helix_obj_1.default,
    PiercedFloor: pierced_floor_obj_1.default
};
exports.Obstacles = obstacles;


/***/ }),

/***/ "./src/ts/engine/initial-conditions/models/triangle.ts":
/*!*************************************************************!*\
  !*** ./src/ts/engine/initial-conditions/models/triangle.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Triangle = void 0;
const glMatrix = __importStar(__webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js"));
function minus(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2],
    ];
}
function crossProduct(v1, v2) {
    return [
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0],
    ];
}
function normalize(v) {
    const lengthSquared = glMatrix.vec3.sqrLen(v);
    if (lengthSquared > 0) {
        const length = Math.sqrt(lengthSquared);
        v[0] /= length;
        v[1] /= length;
        v[2] /= length;
    }
    else {
        v[0] = 1;
        v[1] = 0;
        v[2] = 0;
    }
}
class Triangle {
    constructor(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
        const v12 = minus(p2, p1);
        const v13 = minus(p3, p1);
        const normal = crossProduct(v12, v13);
        normalize(normal);
        this.normal = normal;
    }
}
exports.Triangle = Triangle;


/***/ }),

/***/ "./src/ts/engine/initial-conditions/ray-caster.ts":
/*!********************************************************!*\
  !*** ./src/ts/engine/initial-conditions/ray-caster.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RayCaster = exports.ERayDirection = void 0;
var ERayDirection;
(function (ERayDirection) {
    ERayDirection[ERayDirection["X"] = 0] = "X";
    ERayDirection[ERayDirection["Y"] = 1] = "Y";
    ERayDirection[ERayDirection["Z"] = 2] = "Z";
})(ERayDirection || (exports.ERayDirection = ERayDirection = {}));
function minus(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1],
    ];
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
/** Computes the barycentric coordinates of a point relatively to the triangle.
 * Only takes into account the X and Y coordinates.
 */
function computeBarycentricXY(triangle, p) {
    const v0 = minus(triangle.p2, triangle.p1);
    const v1 = minus(triangle.p3, triangle.p1);
    const v2 = minus(p, triangle.p1);
    const d00 = dot(v0, v0);
    const d01 = dot(v0, v1);
    const d11 = dot(v1, v1);
    const d20 = dot(v2, v0);
    const d21 = dot(v2, v1);
    const denom = d00 * d11 - d01 * d01;
    const v = (denom === 0) ? -2 : (d11 * d20 - d01 * d21) / denom;
    const w = (denom === 0) ? -2 : (d00 * d21 - d01 * d20) / denom;
    const u = 1 - v - w;
    return [u, v, w];
}
class RayCaster {
    constructor(direction, triangles) {
        let coord1;
        let coord2;
        let selectedCoord;
        switch (direction) {
            case ERayDirection.X:
                selectedCoord = 0;
                coord1 = 1;
                coord2 = 2;
                break;
            case ERayDirection.Y:
                coord1 = 0;
                selectedCoord = 1;
                coord2 = 2;
                break;
            case ERayDirection.Z:
                coord1 = 0;
                coord2 = 1;
                selectedCoord = 2;
                break;
        }
        this.triangles2D = triangles.map((triangle) => {
            return {
                p1: [triangle.p1[coord1], triangle.p1[coord2]],
                c1: triangle.p1[selectedCoord],
                p2: [triangle.p2[coord1], triangle.p2[coord2]],
                c2: triangle.p2[selectedCoord],
                p3: [triangle.p3[coord1], triangle.p3[coord2]],
                c3: triangle.p3[selectedCoord],
            };
        });
    }
    computeInternalSegments(rayCoords) {
        const intersections = [];
        // {
        const rawIntersections = [];
        for (const triangle of this.triangles2D) {
            const barycentric = computeBarycentricXY(triangle, rayCoords);
            const rayHitsTriangle = Math.max(...barycentric) < 1 && Math.min(...barycentric) > 0;
            if (rayHitsTriangle) {
                const z = barycentric[0] * triangle.c1 + barycentric[1] * triangle.c2 + barycentric[2] * triangle.c3;
                rawIntersections.push(z);
            }
        }
        if (rawIntersections.length > 0) {
            rawIntersections.sort();
            let last = -10000;
            rawIntersections.forEach(value => {
                if (Math.abs(value - last) > 0.0001) {
                    intersections.push(value);
                    last = value;
                }
            });
        }
        // }
        // if (intersections.length % 2 !== 0) {
        //     throw new Error(`Invalid intersections length '${intersections.length}'.`);
        // }
        const segments = [];
        for (let i = 0; i + 1 < intersections.length; i += 2) {
            segments.push({
                from: intersections[i],
                to: intersections[i + 1],
            });
        }
        return segments;
    }
}
exports.RayCaster = RayCaster;


/***/ }),

/***/ "./src/ts/engine/simulation/acceleration.ts":
/*!**************************************************!*\
  !*** ./src/ts/engine/simulation/acceleration.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Acceleration = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const parameters_1 = __webpack_require__(/*! ../../ui/parameters */ "./src/ts/ui/parameters.ts");
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class Acceleration {
    constructor(device, data) {
        this.device = device;
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "gridSize", type: WebGPU.Types.vec3I32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
            { name: "cellsStride", type: WebGPU.Types.vec3U32 },
            { name: "particleRadius", type: WebGPU.Types.f32 },
            { name: "gravity", type: WebGPU.Types.vec3F32 },
            { name: "dt", type: WebGPU.Types.f32 },
            { name: "upperBound", type: WebGPU.Types.vec3F32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
            { name: "lowerBound", type: WebGPU.Types.vec3F32 },
            { name: "weightThreshold", type: WebGPU.Types.f32 },
        ]);
        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Simulation.Acceleration,
                    structs: [data.particlesBufferData.particlesStructType, this.uniforms, data.cellsBufferData.cellStructType],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Acceleration.WORKGROUP_SIZE,
                },
            },
        });
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
        this.particleRadius = data.particleRadius;
    }
    compute(commandEncoder, dt, gravity) {
        this.uniforms.setValueFromName("gravity", gravity);
        this.uniforms.setValueFromName("dt", dt);
        this.uniforms.setValueFromName("lowerBound", [this.particleRadius, this.particleRadius, this.particleRadius]);
        this.uniforms.setValueFromName("upperBound", [1 - this.particleRadius, 1 - this.particleRadius, parameters_1.Parameters.domainContraction - this.particleRadius]);
        this.uniforms.uploadToGPU();
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
    reset(data) {
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
        this.particleRadius = data.particleRadius;
    }
    applyReset(data) {
        this.uniforms.setValueFromName("gridSize", data.gridSize);
        this.uniforms.setValueFromName("cellSize", data.cellSize);
        this.uniforms.setValueFromName("cellsStride", [1, data.gridSize[0], data.gridSize[0] * data.gridSize[1]]);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.setValueFromName("particleRadius", data.particleRadius);
        this.uniforms.setValueFromName("weightThreshold", data.weightThreshold);
        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / Acceleration.WORKGROUP_SIZE);
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.cellsBufferData.cellsBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
        return { workgroupsCount, bindgroup };
    }
}
exports.Acceleration = Acceleration;
Acceleration.WORKGROUP_SIZE = 128;


/***/ }),

/***/ "./src/ts/engine/simulation/initialization.ts":
/*!****************************************************!*\
  !*** ./src/ts/engine/simulation/initialization.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Initialization = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class Initialization {
    constructor(device, data) {
        this.device = device;
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "particlesCount", type: WebGPU.Types.u32 },
        ]);
        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Simulation.Initialization,
                    structs: [data.particlesBufferData.particlesStructType, this.uniforms, Initialization.initialParticleStructType],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Initialization.WORKGROUP_SIZE,
                },
            },
        });
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.positionsBuffer = resetResult.positionsBuffer;
        this.bindgroup = resetResult.bindgroup;
    }
    compute(commandEncoder) {
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
    reset(data) {
        this.positionsBuffer.free();
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.positionsBuffer = resetResult.positionsBuffer;
        this.bindgroup = resetResult.bindgroup;
    }
    applyReset(data) {
        if (data.particlesBufferData.particlesCount !== (data.particlesPositions.length + data.obstaclesPositions.length)) {
            throw new Error();
        }
        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / Initialization.WORKGROUP_SIZE);
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.uploadToGPU();
        const positionsBuffer = new WebGPU.Buffer(this.device, {
            size: Initialization.initialParticleStructType.size * (data.particlesPositions.length + data.obstaclesPositions.length),
            usage: GPUBufferUsage.STORAGE,
        });
        const positionsData = positionsBuffer.getMappedRange();
        data.particlesPositions.forEach((position, index) => {
            const offset = index * Initialization.initialParticleStructType.size;
            Initialization.initialParticleStructType.setValue(positionsData, offset, {
                position,
                weight: Initialization.PARTICLE_WEIGHT_WATER,
            });
        });
        data.obstaclesPositions.forEach((position, index) => {
            const offset = (data.particlesPositions.length + index) * Initialization.initialParticleStructType.size;
            Initialization.initialParticleStructType.setValue(positionsData, offset, {
                position,
                weight: Initialization.PARTICLE_WEIGHT_OBSTACLE,
            });
        });
        positionsBuffer.unmap();
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: positionsBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 2,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
        return { workgroupsCount, positionsBuffer, bindgroup };
    }
}
exports.Initialization = Initialization;
Initialization.WORKGROUP_SIZE = 256;
Initialization.PARTICLE_WEIGHT_WATER = 1;
Initialization.PARTICLE_WEIGHT_THRESHOLD = 10;
Initialization.PARTICLE_WEIGHT_OBSTACLE = 100000;
Initialization.initialParticleStructType = new WebGPU.Types.StructType("InitialParticle", [
    { name: "position", type: WebGPU.Types.vec3F32 },
    { name: "weight", type: WebGPU.Types.f32 },
]);


/***/ }),

/***/ "./src/ts/engine/simulation/integration.ts":
/*!*************************************************!*\
  !*** ./src/ts/engine/simulation/integration.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Integration = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class Integration {
    constructor(device, data) {
        this.device = device;
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "dt", type: WebGPU.Types.f32 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
            { name: "particleRadius", type: WebGPU.Types.f32 },
            { name: "weightThreshold", type: WebGPU.Types.f32 },
            { name: "velocityDamping", type: WebGPU.Types.f32 },
            { name: "foamDamping", type: WebGPU.Types.f32 },
        ]);
        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Simulation.Integration,
                    structs: [data.particlesBufferData.particlesStructType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Integration.WORKGROUP_SIZE,
                },
            },
        });
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    compute(commandEncoder, dt) {
        this.uniforms.setValueFromName("dt", dt);
        this.uniforms.setValueFromName("velocityDamping", Math.pow(0.999, dt / 0.0005));
        this.uniforms.setValueFromName("foamDamping", Math.pow(0.997, dt / 0.0005));
        this.uniforms.uploadToGPU();
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
    reset(data) {
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    applyReset(data) {
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.setValueFromName("particleRadius", data.particleRadius);
        this.uniforms.setValueFromName("weightThreshold", data.weightThreshold);
        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / Integration.WORKGROUP_SIZE);
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
        return { workgroupsCount, bindgroup };
    }
}
exports.Integration = Integration;
Integration.WORKGROUP_SIZE = 128;


/***/ }),

/***/ "./src/ts/engine/simulation/obstacles-rotation.ts":
/*!********************************************************!*\
  !*** ./src/ts/engine/simulation/obstacles-rotation.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParticlesRotation = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class ParticlesRotation {
    constructor(device, data) {
        this.device = device;
        this.uniforms = new WebGPU.Uniforms(device, [
            { name: "rotationMatrix", type: WebGPU.Types.mat4x4 },
            { name: "particlesCount", type: WebGPU.Types.u32 },
            { name: "weightThreshold", type: WebGPU.Types.f32 },
        ]);
        this.pipeline = device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(device, {
                    code: ShaderSources.Engine.Simulation.ObstaclesRotation,
                    structs: [data.particlesBufferData.particlesStructType, this.uniforms],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: ParticlesRotation.WORKGROUP_SIZE,
                },
            },
        });
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    compute(commandEncoder, rotationMatrix) {
        this.uniforms.setValueFromName("rotationMatrix", rotationMatrix);
        this.uniforms.uploadToGPU();
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroup);
        computePass.dispatchWorkgroups(this.workgroupsCount);
        computePass.end();
    }
    reset(data) {
        const resetResult = this.applyReset(data);
        this.workgroupsCount = resetResult.workgroupsCount;
        this.bindgroup = resetResult.bindgroup;
    }
    applyReset(data) {
        this.uniforms.setValueFromName("particlesCount", data.particlesBufferData.particlesCount);
        this.uniforms.setValueFromName("weightThreshold", data.weightThreshold);
        const workgroupsCount = Math.ceil(data.particlesBufferData.particlesCount / ParticlesRotation.WORKGROUP_SIZE);
        const bindgroup = this.device.createBindGroup({
            layout: this.pipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: data.particlesBufferData.particlesBuffer.bindingResource,
                },
                {
                    binding: 1,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
        return { workgroupsCount, bindgroup };
    }
}
exports.ParticlesRotation = ParticlesRotation;
ParticlesRotation.WORKGROUP_SIZE = 128;


/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const camera_1 = __webpack_require__(/*! ./rendering/camera */ "./src/ts/rendering/camera.ts");
const scene_1 = __webpack_require__(/*! ./scene */ "./src/ts/scene.ts");
const counter_1 = __webpack_require__(/*! ./ui/counter */ "./src/ts/ui/counter.ts");
const Indicators = __importStar(__webpack_require__(/*! ./ui/indicators */ "./src/ts/ui/indicators.ts"));
const parameters_1 = __webpack_require__(/*! ./ui/parameters */ "./src/ts/ui/parameters.ts");
const WebGPU = __importStar(__webpack_require__(/*! ./webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
function main(device, canvas) {
    WebGPU.Uniforms.tryToOptimize = parameters_1.Parameters.isInDebug;
    const webgpuCanvas = new WebGPU.Canvas(canvas);
    const camera = new camera_1.Camera();
    const scene = new scene_1.Scene(webgpuCanvas, {
        spheresRadius: parameters_1.Parameters.particlesRadius,
        obstacle: parameters_1.Parameters.obstacleType,
        particlesQuantity: parameters_1.Parameters.particlesQuantity,
    });
    const framesCounter = new counter_1.Counter();
    framesCounter.onChange = Indicators.setAverageFps;
    const iterationsCounter = new counter_1.Counter();
    iterationsCounter.onChange = Indicators.setAverageIps;
    parameters_1.Parameters.onParticlesQuantityChange.push(() => scene.setParticlesQuantity(parameters_1.Parameters.particlesQuantity));
    parameters_1.Parameters.onParticlesRadiusChange.push(() => scene.setParticlesRadius(parameters_1.Parameters.particlesRadius));
    parameters_1.Parameters.onParticlesResetObservers.push(() => scene.reinitialize());
    parameters_1.Parameters.onDomainResetObservers.push(() => scene.reinitializeDomain());
    parameters_1.Parameters.onObstacleChange.push(() => scene.setObstacle(parameters_1.Parameters.obstacleType));
    function mainLoop() {
        framesCounter.register();
        webgpuCanvas.setClearColor(parameters_1.Parameters.renderBackgroundColor);
        webgpuCanvas.adjustSize();
        scene.setCanvasSize(webgpuCanvas.width, webgpuCanvas.height);
        const commandEncoder = device.createCommandEncoder();
        if (parameters_1.Parameters.enginePaused) {
            scene.update(commandEncoder, 0);
        }
        else {
            const timestep = parameters_1.Parameters.engineTimestep;
            for (let i = parameters_1.Parameters.engineStepsPerFrame; i > 0; i--) {
                scene.update(commandEncoder, timestep);
                iterationsCounter.register();
            }
        }
        scene.render(commandEncoder, camera.viewData);
        device.queue.submit([commandEncoder.finish()]);
        requestAnimationFrame(mainLoop);
    }
    requestAnimationFrame(mainLoop);
}
async function initialize() {
    const canvasElement = Page.Canvas.getCanvas();
    if (!canvasElement) {
        throw new Error("Could not find canvas on page.");
    }
    const device = await WebGPU.initialize();
    if (!device) {
        throw new Error("No GPU device.");
    }
    main(device, canvasElement);
}
initialize();


/***/ }),

/***/ "./src/ts/rendering/axes-renderer.ts":
/*!*******************************************!*\
  !*** ./src/ts/rendering/axes-renderer.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AxesRenderer = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class AxesRenderer {
    constructor(webgpuCanvas) {
        this.device = webgpuCanvas.device;
        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
        ]);
        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.Axes,
            structs: [this.uniforms],
        });
        this.renderPipeline = this.device.createRenderPipeline({
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
                buffers: []
            },
            fragment: {
                module: shaderModule,
                entryPoint: "main_fragment",
                targets: [{
                        format: webgpuCanvas.textureFormat,
                    }],
            },
            primitive: {
                cullMode: "none",
                topology: "line-list",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            },
        });
        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                }]
        });
    }
    render(renderpassEncoder, viewData) {
        this.uniforms.setValueFromName("mvp", viewData.vpMatrix);
        this.uniforms.uploadToGPU();
        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.draw(6);
    }
}
exports.AxesRenderer = AxesRenderer;


/***/ }),

/***/ "./src/ts/rendering/camera.ts":
/*!************************************!*\
  !*** ./src/ts/rendering/camera.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/// <reference types="../page-interface-generated" />
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Camera = void 0;
const glMatrix = __importStar(__webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js"));
const parameters_1 = __webpack_require__(/*! ../ui/parameters */ "./src/ts/ui/parameters.ts");
function clamp(x, min, max) {
    if (x < min) {
        return min;
    }
    else if (x > max) {
        return max;
    }
    return x;
}
const zNearData = [
    { distance: 2, value: 0.6 },
    { distance: 2.2222222222222223, value: 0.8 },
    { distance: 2.469135802469136, value: 1 },
    { distance: 2.7434842249657065, value: 1 },
    { distance: 3.0483158055174515, value: 1.3 },
    { distance: 3.387017561686057, value: 1.7 },
    { distance: 3.763352846317841, value: 1.8 },
    { distance: 4.223740568257958, value: 2.4 },
    { distance: 6.437647566312998, value: 4.3 },
    { distance: 9.811991413371434, value: 7.4 },
    { distance: 16.6958844644795, value: 14.1 },
];
const zFarData = [
    { distance: 2, value: 3.3 },
    { distance: 2.2222222222222223, value: 3.4 },
    { distance: 2.469135802469136, value: 3.6 },
    { distance: 2.7434842249657065, value: 3.9 },
    { distance: 3.0483158055174515, value: 4 },
    { distance: 3.387017561686057, value: 4.3 },
    { distance: 3.763352846317841, value: 4.8 },
    { distance: 4.223740568257958, value: 5.2 },
    { distance: 6.437647566312998, value: 7.3 },
    { distance: 9.811991413371434, value: 10.8 },
    { distance: 16.6958844644795, value: 17.8 },
];
function interpolate(datas, distance) {
    for (let i = 0; i < datas.length - 1; i++) {
        const previousData = datas[i];
        const nextData = datas[i + 1];
        if (distance < previousData.distance) {
            return previousData.value;
        }
        else if (distance < nextData.distance) {
            return previousData.value + (nextData.value - previousData.value) * (distance - previousData.distance) / (nextData.distance - previousData.distance);
        }
    }
    return datas[datas.length - 1].value;
}
const minZoom = 0.6;
const maxZoom = 5;
class Camera {
    constructor() {
        this._lookAt = [0, 0, 0];
        this._viewUpWorldspace = glMatrix.vec3.create();
        this._viewRightWorlspace = glMatrix.vec3.create();
        this._eyePosition = glMatrix.vec3.create();
        this._viewMatrix = glMatrix.mat4.create();
        this._projectionMatrix = glMatrix.mat4.create();
        this._vpMatrix = glMatrix.mat4.create();
        this.zoom = 3;
        this.theta = 1;
        this.phi = 1.2;
        this.clampZoom();
        this.clampPhi();
        Page.Canvas.Observers.mouseWheel.push((delta) => {
            this.zoom *= 1 - 0.1 * delta;
            this.clampZoom();
            this.recomputeEyePosition();
        });
        Page.Canvas.Observers.mouseDrag.push((dX, dY) => {
            this.theta -= 0.5 * 2 * 3.14159 * dX;
            this.phi -= 0.5 * 2 * 3 * dY;
            this.clampPhi();
            this.recomputeEyePosition();
        });
        // right button to move camera vertically
        {
            const canvasElement = Page.Canvas.getCanvas();
            if (!canvasElement) {
                throw new Error("No canvas element :(");
            }
            canvasElement.addEventListener("contextmenu", (event) => {
                event.preventDefault();
                return false;
            });
            let rightMouseButtonDown = false;
            const RIGHT_BUTTON_CODE = 2;
            let lastMousePosition = Page.Canvas.getMousePosition();
            canvasElement.addEventListener("mousedown", (event) => {
                if (event.button === RIGHT_BUTTON_CODE) {
                    rightMouseButtonDown = true;
                    lastMousePosition = Page.Canvas.getMousePosition();
                }
            });
            document.addEventListener("mouseup", (event) => {
                if (event.button === RIGHT_BUTTON_CODE) {
                    rightMouseButtonDown = false;
                }
            });
            Page.Canvas.Observers.mouseMove.push((newX, newY) => {
                if (rightMouseButtonDown) {
                    const dY = newY - lastMousePosition[1];
                    this._lookAt[2] += dY;
                    this._lookAt[2] = clamp(this._lookAt[2], -.5, .5);
                    this.recomputeEyePosition();
                }
                lastMousePosition = [newX, newY];
            });
        }
        this.recomputeEyePosition();
    }
    get viewData() {
        this.recomputeProjectionMatrix();
        return {
            vMatrix: this._viewMatrix,
            pMatrix: this._projectionMatrix,
            vpMatrix: this._vpMatrix,
            cameraPosition: this._eyePosition,
            cameraUp: this._viewUpWorldspace,
            cameraRight: this._viewRightWorlspace,
            relativeDistance: this.zoom / maxZoom,
        };
    }
    recomputeViewProjectionMatrix() {
        glMatrix.mat4.multiply(this._vpMatrix, this._projectionMatrix, this._viewMatrix);
    }
    recomputeProjectionMatrix() {
        const aspectRatio = Page.Canvas.getAspectRatio();
        if (parameters_1.Parameters.renderProjection === parameters_1.EProjection.PERSPECTIVE) {
            // const zFar = this.distance + 1.3;
            // const zNear = Math.max(0.6, zFar - 4);
            const zFar = interpolate(zFarData, this.distance);
            const zNear = interpolate(zNearData, this.distance);
            glMatrix.mat4.perspective(this._projectionMatrix, 30 * (Math.PI / 180), aspectRatio, zNear, zFar);
        }
        else {
            const side = 2.5 / this.zoom;
            glMatrix.mat4.ortho(this._projectionMatrix, -side * aspectRatio, side * aspectRatio, -side, side, this.distance - 3.75, this.distance + 1.1);
        }
        this.recomputeViewProjectionMatrix();
    }
    recomputeViewMatrix() {
        const up = [0, 0, 1];
        if (this._eyePosition[0] === 0 && this._eyePosition[1] === 0) { // we are the vertical of the origin
            up[0] = -Math.sign(this._eyePosition[2]) * Math.cos(this.theta);
            up[1] = -Math.sign(this._eyePosition[2]) * Math.sin(this.theta);
            up[2] = 0;
        }
        glMatrix.mat4.lookAt(this._viewMatrix, this._eyePosition, this._lookAt, up);
        this._viewRightWorlspace[0] = this._viewMatrix[0];
        this._viewRightWorlspace[1] = this._viewMatrix[4];
        this._viewRightWorlspace[2] = this._viewMatrix[8];
        this._viewUpWorldspace[0] = this._viewMatrix[1];
        this._viewUpWorldspace[1] = this._viewMatrix[5];
        this._viewUpWorldspace[2] = this._viewMatrix[9];
    }
    recomputeEyePosition() {
        this._eyePosition[0] = this._lookAt[0] + this.distance * (Math.sin(this.phi) * Math.cos(this.theta));
        this._eyePosition[1] = this._lookAt[1] + this.distance * (Math.sin(this.phi) * Math.sin(this.theta));
        this._eyePosition[2] = this._lookAt[2] + this.distance * (Math.cos(this.phi));
        this.recomputeViewMatrix();
    }
    clampZoom() {
        this.zoom = clamp(this.zoom, minZoom, maxZoom);
    }
    clampPhi() {
        this.phi = clamp(this.phi, 0, Math.PI);
    }
    get distance() {
        return 10 / this.zoom;
    }
}
exports.Camera = Camera;


/***/ }),

/***/ "./src/ts/rendering/cube-renderer.ts":
/*!*******************************************!*\
  !*** ./src/ts/rendering/cube-renderer.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CubeRenderer = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class CubeRenderer {
    constructor(webgpuCanvas) {
        this.device = webgpuCanvas.device;
        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
            { name: "proportions", type: WebGPU.Types.vec3F32 },
        ]);
        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.Cube,
            structs: [this.uniforms],
        });
        this.renderPipeline = this.device.createRenderPipeline({
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
                buffers: []
            },
            fragment: {
                module: shaderModule,
                entryPoint: "main_fragment",
                targets: [{
                        format: webgpuCanvas.textureFormat,
                    }],
            },
            primitive: {
                cullMode: "none",
                topology: "line-list",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            },
        });
        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                }]
        });
    }
    render(renderpassEncoder, renderData) {
        this.uniforms.setValueFromName("mvp", renderData.mvpMatrix);
        this.uniforms.setValueFromName("proportions", renderData.proportions);
        this.uniforms.uploadToGPU();
        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.draw(24);
    }
}
exports.CubeRenderer = CubeRenderer;


/***/ }),

/***/ "./src/ts/rendering/grid-cells-by-population-renderer.ts":
/*!***************************************************************!*\
  !*** ./src/ts/rendering/grid-cells-by-population-renderer.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GridCellsByPopulationRenderer = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class GridCellsByPopulationRenderer {
    constructor(webgpuCanvas, bufferDescriptor) {
        this.device = webgpuCanvas.device;
        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
            { name: "color", type: WebGPU.Types.vec4F32 },
            { name: "gridSize", type: WebGPU.Types.vec3U32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
        ]);
        this.uniforms.setValueFromName("color", [1, 1, 1, 1]);
        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Engine.Indexing.RenderCellsByPopulation,
            structs: [this.uniforms],
        });
        this.renderPipeline = this.device.createRenderPipeline({
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
                buffers: [
                    {
                        attributes: [
                            {
                                shaderLocation: 0,
                                offset: bufferDescriptor.particlesCountAttribute.offset,
                                format: bufferDescriptor.particlesCountAttribute.format,
                            }
                        ],
                        arrayStride: bufferDescriptor.bufferArrayStride,
                        stepMode: "instance",
                    }
                ]
            },
            fragment: {
                module: shaderModule,
                entryPoint: "main_fragment",
                targets: [{
                        format: webgpuCanvas.textureFormat,
                        blend: {
                            color: {
                                srcFactor: "src-alpha",
                                dstFactor: "one-minus-src-alpha",
                                operation: "add",
                            },
                            alpha: {
                                srcFactor: "zero",
                                dstFactor: "one",
                                operation: "add",
                            }
                        },
                    }],
            },
            primitive: {
                cullMode: "none",
                topology: "line-list",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            },
        });
        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                }]
        });
    }
    render(renderpassEncoder, data) {
        this.uniforms.setValueFromName("mvp", data.mvpMatrix);
        this.uniforms.setValueFromName("gridSize", data.gridData.gridSize);
        this.uniforms.setValueFromName("cellSize", data.gridData.cellSize);
        this.uniforms.uploadToGPU();
        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.setVertexBuffer(0, data.gpuBuffer);
        renderpassEncoder.draw(24, data.gridData.gridSize[0] * data.gridData.gridSize[1] * data.gridData.gridSize[2]);
    }
}
exports.GridCellsByPopulationRenderer = GridCellsByPopulationRenderer;


/***/ }),

/***/ "./src/ts/rendering/grid-cells-renderer.ts":
/*!*************************************************!*\
  !*** ./src/ts/rendering/grid-cells-renderer.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GridCellsRenderer = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class GridCellsRenderer {
    constructor(webgpuCanvas) {
        this.device = webgpuCanvas.device;
        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
            { name: "color", type: WebGPU.Types.vec4F32 },
            { name: "gridSize", type: WebGPU.Types.vec3U32 },
            { name: "cellSize", type: WebGPU.Types.f32 },
        ]);
        this.uniforms.setValueFromName("color", [1, 1, 1, 1]);
        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.GridCells,
            structs: [this.uniforms],
        });
        this.renderPipeline = this.device.createRenderPipeline({
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
                buffers: [
                    {
                        attributes: [
                            {
                                shaderLocation: 0,
                                offset: 0,
                                format: "uint32",
                            }
                        ],
                        arrayStride: Uint32Array.BYTES_PER_ELEMENT,
                        stepMode: "instance",
                    }
                ]
            },
            fragment: {
                module: shaderModule,
                entryPoint: "main_fragment",
                targets: [{
                        format: webgpuCanvas.textureFormat,
                    }],
            },
            primitive: {
                cullMode: "none",
                topology: "line-list",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            },
        });
        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                }]
        });
    }
    render(renderpassEncoder, renderData) {
        this.uniforms.setValueFromName("mvp", renderData.mvpMatrix);
        this.uniforms.setValueFromName("gridSize", renderData.gridData.gridSize);
        this.uniforms.setValueFromName("cellSize", renderData.gridData.cellSize);
        this.uniforms.uploadToGPU();
        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
        renderpassEncoder.setVertexBuffer(0, renderData.buffers.nonEmptyCellsIndicesBuffer);
        renderpassEncoder.drawIndirect(renderData.buffers.cellsIndirectDrawBuffer, 0);
    }
}
exports.GridCellsRenderer = GridCellsRenderer;


/***/ }),

/***/ "./src/ts/rendering/mesh/mesh-renderable.ts":
/*!**************************************************!*\
  !*** ./src/ts/rendering/mesh/mesh-renderable.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MeshRenderable = void 0;
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
const glMatrix = __importStar(__webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js"));
class MeshRenderable {
    constructor(device, mesh) {
        this.modelMatrix = glMatrix.mat4.create();
        this.verticesCount = 3 * mesh.triangles.length;
        this.buffer = new WebGPU.Buffer(device, {
            size: 4 * 2 * 3 * 3 * mesh.triangles.length,
            usage: GPUBufferUsage.VERTEX,
        });
        const buffer = new Float32Array(this.buffer.getMappedRange());
        let i = 0;
        for (const triangle of mesh.triangles) {
            buffer[i++] = triangle.p1[0];
            buffer[i++] = triangle.p1[1];
            buffer[i++] = triangle.p1[2];
            buffer[i++] = triangle.normal[0];
            buffer[i++] = triangle.normal[1];
            buffer[i++] = triangle.normal[2];
            buffer[i++] = triangle.p2[0];
            buffer[i++] = triangle.p2[1];
            buffer[i++] = triangle.p2[2];
            buffer[i++] = triangle.normal[0];
            buffer[i++] = triangle.normal[1];
            buffer[i++] = triangle.normal[2];
            buffer[i++] = triangle.p3[0];
            buffer[i++] = triangle.p3[1];
            buffer[i++] = triangle.p3[2];
            buffer[i++] = triangle.normal[0];
            buffer[i++] = triangle.normal[1];
            buffer[i++] = triangle.normal[2];
        }
        this.buffer.unmap();
    }
    free() {
        this.buffer.free();
    }
}
exports.MeshRenderable = MeshRenderable;


/***/ }),

/***/ "./src/ts/rendering/mesh/mesh-renderer.ts":
/*!************************************************!*\
  !*** ./src/ts/rendering/mesh/mesh-renderer.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MeshRenderer = void 0;
const glMatrix = __importStar(__webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js"));
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
const mesh_renderable_1 = __webpack_require__(/*! ./mesh-renderable */ "./src/ts/rendering/mesh/mesh-renderable.ts");
class MeshRenderer {
    constructor(webgpuCanvas) {
        this.device = webgpuCanvas.device;
        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "mvp", type: WebGPU.Types.mat4x4 },
            { name: "modelMatrix", type: WebGPU.Types.mat4x4 },
            { name: "lightDirection", type: WebGPU.Types.vec3F32 },
            { name: "displayMode", type: WebGPU.Types.u32 },
        ]);
        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.Mesh,
            structs: [this.uniforms],
        });
        this.renderPipeline = this.device.createRenderPipeline({
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
                buffers: [
                    {
                        attributes: [
                            {
                                shaderLocation: 0,
                                offset: 0,
                                format: "float32x3",
                            },
                            {
                                shaderLocation: 1,
                                offset: 3 * Float32Array.BYTES_PER_ELEMENT,
                                format: "float32x3",
                            }
                        ],
                        arrayStride: 6 * Float32Array.BYTES_PER_ELEMENT,
                        stepMode: "vertex",
                    }
                ]
            },
            fragment: {
                module: shaderModule,
                entryPoint: "main_fragment",
                targets: [{
                        format: webgpuCanvas.textureFormat,
                    }],
            },
            primitive: {
                cullMode: "none",
                topology: "triangle-list",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            },
        });
        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [
                {
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                },
            ]
        });
    }
    createMeshRenderable(mesh) {
        return new mesh_renderable_1.MeshRenderable(this.device, mesh);
    }
    render(renderpassEncoder, renderData) {
        if (renderData.meshes.length === 0) {
            return;
        }
        this.uniforms.setValueFromName("displayMode", renderData.displayNormals ? 1 : 0);
        this.uniforms.setValueFromName("lightDirection", renderData.lightDirection);
        renderpassEncoder.setPipeline(this.renderPipeline);
        for (const mesh of renderData.meshes) {
            const mvpMatrix = glMatrix.mat4.create();
            glMatrix.mat4.multiply(mvpMatrix, renderData.mvpMatrix, mesh.modelMatrix);
            const modelMatrix = glMatrix.mat4.create();
            glMatrix.mat4.multiply(modelMatrix, renderData.modelMatrix, mesh.modelMatrix);
            this.uniforms.setValueFromName("mvp", mvpMatrix);
            this.uniforms.setValueFromName("modelMatrix", modelMatrix);
            this.uniforms.uploadToGPU();
            renderpassEncoder.setVertexBuffer(0, mesh.buffer.gpuBuffer);
            renderpassEncoder.setBindGroup(0, this.uniformsBindgroup);
            renderpassEncoder.draw(mesh.verticesCount);
        }
    }
    free() {
        this.uniforms.free();
    }
}
exports.MeshRenderer = MeshRenderer;


/***/ }),

/***/ "./src/ts/rendering/spheres/blur.ts":
/*!******************************************!*\
  !*** ./src/ts/rendering/spheres/blur.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Blur = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class Blur {
    constructor(device, data) {
        this.bindgroupHorizontal = null;
        this.bindgroupVertical = null;
        this.device = device;
        this.temporaryTexture = new WebGPU.Texture(device, "rgba8unorm", GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING);
        // this.temporaryFoamTexture = new WebGPU.Texture(device, "rgba8unorm", GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING);
        const uniformBufferAttributes = [
            { name: "direction", type: WebGPU.Types.vec2I32 },
            { name: "blurFactors_0", type: WebGPU.Types.f32 },
            { name: "blurFactors_1", type: WebGPU.Types.f32 },
            { name: "blurFactors_2", type: WebGPU.Types.f32 },
            { name: "blurFactors_3", type: WebGPU.Types.f32 },
            { name: "blurFactors_4", type: WebGPU.Types.f32 },
            { name: "blurFactors_5", type: WebGPU.Types.f32 },
            { name: "blurFactors_6", type: WebGPU.Types.f32 },
            { name: "blurFactors_7", type: WebGPU.Types.f32 },
            { name: "blurFactors_8", type: WebGPU.Types.f32 },
            { name: "padding", type: WebGPU.Types.f32 }, // padding
        ];
        this.uniformsHorizontal = new WebGPU.Uniforms(device, uniformBufferAttributes);
        this.uniformsHorizontal.setValueFromName("direction", [1, 0]);
        this.uniformsHorizontal.uploadToGPU();
        this.uniformsVertical = new WebGPU.Uniforms(device, uniformBufferAttributes);
        this.uniformsVertical.setValueFromName("direction", [0, 1]);
        this.uniformsVertical.uploadToGPU();
        this.pipeline = this.device.createComputePipeline({
            layout: "auto",
            compute: {
                module: WebGPU.ShaderModule.create(this.device, {
                    code: ShaderSources.Rendering.Spheres.Blur,
                    structs: [this.uniformsHorizontal],
                }),
                entryPoint: "main",
                constants: {
                    workgroupSize: Blur.WORKGROUP_SIZE,
                }
            }
        });
        this.setDeferredTextures(data);
    }
    compute(commandEncoder, compression) {
        if (!this.bindgroupHorizontal || !this.bindgroupVertical) {
            throw new Error();
        }
        this.computeBlurFactors(compression);
        const width = this.temporaryTexture.getWidth();
        const height = this.temporaryTexture.getHeight();
        const computePass = commandEncoder.beginComputePass();
        computePass.setPipeline(this.pipeline);
        computePass.setBindGroup(0, this.bindgroupHorizontal);
        computePass.dispatchWorkgroups(Math.ceil(width / Blur.USEFUL_WORKGROUP_SIZE), height);
        computePass.setBindGroup(0, this.bindgroupVertical);
        computePass.dispatchWorkgroups(Math.ceil(height / Blur.USEFUL_WORKGROUP_SIZE), width);
        computePass.end();
    }
    setDeferredTextures(data) {
        if (!data.deferredTexture.hasUsage(GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING)) {
            throw new Error("Texture has wrong usage.");
        }
        // if (!data.foamTexture.hasUsage(GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING)) {
        //     throw new Error("Texture has wrong usage.");
        // }
        if (data.deferredTexture.format !== "rgba8unorm" || this.temporaryTexture.format !== "rgba8unorm") {
            throw new Error("Texture has wrong format.");
        }
        // if (data.foamTexture.format !== "rgba8unorm" || this.temporaryFoamTexture.format !== "rgba8unorm") {
        //     throw new Error("Texture has wrong format.");
        // }
        // if (data.foamTexture.getWidth() !== data.deferredTexture.getWidth() || data.foamTexture.getHeight() !== data.deferredTexture.getHeight()) {
        //     throw new Error();
        // }
        const width = data.deferredTexture.getWidth();
        const height = data.deferredTexture.getHeight();
        this.temporaryTexture.setSize(width, height);
        // this.temporaryFoamTexture.setSize(width, height);
        const deferredTextureView = data.deferredTexture.getView();
        // const deferredFoamTextureView = data.foamTexture.getView();
        const temporaryTextureView = this.temporaryTexture.getView();
        // const temporaryFoamTextureView = this.temporaryFoamTexture.getView();
        const layout = this.pipeline.getBindGroupLayout(0);
        this.bindgroupHorizontal = this.device.createBindGroup({
            layout,
            entries: [
                {
                    binding: 0,
                    resource: deferredTextureView,
                }, {
                    binding: 1,
                    resource: temporaryTextureView,
                }, {
                    binding: 2,
                    resource: this.uniformsHorizontal.bindingResource,
                    // }, {
                    //     binding: 3,
                    //     resource: deferredFoamTextureView,
                    // }, {
                    //     binding: 4,
                    //     resource: temporaryFoamTextureView,
                },
            ]
        });
        this.bindgroupVertical = this.device.createBindGroup({
            layout,
            entries: [
                {
                    binding: 0,
                    resource: temporaryTextureView,
                }, {
                    binding: 1,
                    resource: deferredTextureView,
                }, {
                    binding: 2,
                    resource: this.uniformsVertical.bindingResource,
                    // }, {
                    //     binding: 3,
                    //     resource: temporaryFoamTextureView,
                    // }, {
                    //     binding: 4,
                    //     resource: deferredFoamTextureView,
                },
            ]
        });
    }
    computeBlurFactors(compression) {
        const factors = [];
        const sigma = 4;
        const prefix = 1 / (Math.sqrt(2 * Math.PI) * sigma);
        let sum = 0;
        for (let i = 0; i <= Blur.BLUR_RADIUS; i++) {
            const x = i / compression;
            const result = prefix * Math.exp(-0.5 * x * x / (2 * sigma * sigma));
            factors.push(result);
            sum += (i === 0) ? result : 2 * result;
        }
        for (let i = 0; i < factors.length; i++) {
            factors[i] /= sum;
        }
        factors.forEach((factor, index) => {
            this.uniformsHorizontal.setValueFromName(`blurFactors_${index}`, factor);
            this.uniformsVertical.setValueFromName(`blurFactors_${index}`, factor);
        });
        this.uniformsHorizontal.uploadToGPU();
        this.uniformsVertical.uploadToGPU();
    }
}
exports.Blur = Blur;
Blur.WORKGROUP_SIZE = 256;
Blur.BLUR_RADIUS = 8;
Blur.USEFUL_WORKGROUP_SIZE = Blur.WORKGROUP_SIZE - (2 * Blur.BLUR_RADIUS);


/***/ }),

/***/ "./src/ts/rendering/spheres/composition.ts":
/*!*************************************************!*\
  !*** ./src/ts/rendering/spheres/composition.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Composition = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const parameters_1 = __webpack_require__(/*! ../../ui/parameters */ "./src/ts/ui/parameters.ts");
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class Composition {
    constructor(webgpuCanvas, data) {
        this.device = webgpuCanvas.device;
        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "cameraRight", type: WebGPU.Types.vec3F32 },
            { name: "displayMode", type: WebGPU.Types.u32 },
            { name: "cameraUp", type: WebGPU.Types.vec3F32 },
            { name: "f0", type: WebGPU.Types.f32 },
            { name: "worldColor", type: WebGPU.Types.vec3F32 },
            { name: "specularity", type: WebGPU.Types.f32 },
            { name: "waterColor", type: WebGPU.Types.vec3F32 },
            { name: "waterOpacity", type: WebGPU.Types.f32 },
            { name: "lightDirection", type: WebGPU.Types.vec3F32 },
            { name: "enableFoam", type: WebGPU.Types.u32 },
        ]);
        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.Spheres.Composition,
            structs: [this.uniforms],
        });
        this.renderPipeline = this.device.createRenderPipeline({
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
            },
            fragment: {
                module: shaderModule,
                entryPoint: "main_fragment",
                targets: [{
                        format: webgpuCanvas.textureFormat,
                    }],
            },
            primitive: {
                cullMode: "none",
                topology: "triangle-strip",
            },
            depthStencil: {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            },
        });
        this.linearSampler = this.device.createSampler({
            magFilter: "linear",
            minFilter: "linear",
        });
        this.texturesBindgroup = this.createTextureBindgroup(data);
        this.uniformsBindgroup = this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(1),
            entries: [
                {
                    binding: 0,
                    resource: this.uniforms.bindingResource,
                }
            ]
        });
    }
    render(renderpassEncoder, viewData, renderData) {
        this.uniforms.setValueFromName("cameraRight", viewData.cameraRight);
        this.uniforms.setValueFromName("displayMode", parameters_1.Parameters.displayMode);
        this.uniforms.setValueFromName("cameraUp", viewData.cameraUp);
        this.uniforms.setValueFromName("f0", parameters_1.Parameters.waterFresnel);
        this.uniforms.setValueFromName("worldColor", parameters_1.Parameters.renderBackgroundColor.slice(0, 3));
        this.uniforms.setValueFromName("specularity", parameters_1.Parameters.waterSpecularity);
        this.uniforms.setValueFromName("waterColor", parameters_1.Parameters.renderWaterColor.slice(0, 3));
        this.uniforms.setValueFromName("waterOpacity", parameters_1.Parameters.renderWaterOpacity);
        this.uniforms.setValueFromName("lightDirection", renderData.lightDirection);
        this.uniforms.setValueFromName("enableFoam", parameters_1.Parameters.renderFoam ? 1 : 0);
        this.uniforms.uploadToGPU();
        renderpassEncoder.setPipeline(this.renderPipeline);
        renderpassEncoder.setBindGroup(0, this.texturesBindgroup);
        renderpassEncoder.setBindGroup(1, this.uniformsBindgroup);
        renderpassEncoder.draw(4);
    }
    setDeferredTexture(data) {
        this.texturesBindgroup = this.createTextureBindgroup(data);
    }
    createTextureBindgroup(data) {
        return this.device.createBindGroup({
            layout: this.renderPipeline.getBindGroupLayout(0),
            entries: [{
                    binding: 0,
                    resource: this.linearSampler,
                }, {
                    binding: 1,
                    resource: data.deferredTexture.getView(),
                }, {
                    binding: 2,
                    resource: data.foamTexture.getView(),
                }]
        });
    }
}
exports.Composition = Composition;


/***/ }),

/***/ "./src/ts/rendering/spheres/deferred.ts":
/*!**********************************************!*\
  !*** ./src/ts/rendering/spheres/deferred.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Deferred = void 0;
const ShaderSources = __importStar(__webpack_require__(/*! ../../shader-sources */ "./src/ts/shader-sources.ts"));
const parameters_1 = __webpack_require__(/*! ../../ui/parameters */ "./src/ts/ui/parameters.ts");
const WebGPU = __importStar(__webpack_require__(/*! ../../webgpu-utils/webgpu-utils */ "./src/ts/webgpu-utils/webgpu-utils.ts"));
class Deferred {
    constructor(webgpuCanvas, data) {
        this.device = webgpuCanvas.device;
        this.texture = new WebGPU.Texture(this.device, "rgba8unorm", GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING);
        this.foamTexture = new WebGPU.Texture(this.device, "r8unorm", GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING);
        this.depthTexture = new WebGPU.Texture(this.device, "depth16unorm", GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING);
        this.uniforms = new WebGPU.Uniforms(this.device, [
            { name: "vpMatrix", type: WebGPU.Types.mat4x4 },
            { name: "mMatrix", type: WebGPU.Types.mat4x4 },
            { name: "cameraUp", type: WebGPU.Types.vec3F32 },
            { name: "sphereRadius", type: WebGPU.Types.f32 },
            { name: "cameraRight", type: WebGPU.Types.vec3F32 },
            { name: "weightThreshold", type: WebGPU.Types.f32 }
        ]);
        const shaderModule = WebGPU.ShaderModule.create(this.device, {
            code: ShaderSources.Rendering.Spheres.Spheres,
            structs: [this.uniforms],
        });
        // RGA render pass
        {
            const colorAttachment = {
                view: this.texture.getView(),
                clearValue: [0, 1, 0, 1],
                loadOp: "clear",
                storeOp: "store",
            };
            const foamAttachment = {
                view: this.foamTexture.getView(),
                clearValue: [0, 0, 0, 0],
                loadOp: "clear",
                storeOp: "store",
            };
            const depthAttachment = {
                view: this.depthTexture.getView(),
                depthClearValue: 1,
                depthLoadOp: "clear",
                depthStoreOp: "store",
                stencilReadOnly: true,
            };
            const renderPassDescriptor = {
                colorAttachments: [colorAttachment, foamAttachment],
                depthStencilAttachment: depthAttachment,
            };
            const pipelineDescriptor = this.createDeferredDescriptor(shaderModule, {
                fragmentMain: "main_fragment_rga",
                bufferDescriptor: data.spheresBufferDescriptor,
                writeMask: GPUColorWrite.RED | GPUColorWrite.GREEN | GPUColorWrite.ALPHA,
                foamTexture: this.foamTexture,
            });
            pipelineDescriptor.depthStencil = {
                depthWriteEnabled: true,
                depthCompare: "less",
                format: this.depthTexture.format,
            };
            const pipeline = this.device.createRenderPipeline(pipelineDescriptor);
            const uniformsBindgroup = this.device.createBindGroup({
                layout: pipeline.getBindGroupLayout(0),
                entries: [{
                        binding: 0,
                        resource: this.uniforms.bindingResource,
                    }]
            });
            this.rgaRenderPass = {
                colorAttachment,
                foamAttachment,
                depthAttachment,
                descriptor: renderPassDescriptor,
                pipeline,
                uniformsBindgroup,
            };
        }
        // B render pass
        {
            const colorAttachment = {
                view: this.texture.getView(),
                loadOp: "load",
                storeOp: "store",
            };
            const depthAttachment = {
                view: data.sceneDepthTextureView,
                depthReadOnly: true,
                stencilReadOnly: true,
            };
            const renderPassDescriptor = {
                colorAttachments: [colorAttachment],
                depthStencilAttachment: depthAttachment,
            };
            const additiveBlend = {
                color: {
                    srcFactor: "one",
                    dstFactor: "one",
                    operation: "add",
                },
                alpha: {
                    srcFactor: "one",
                    dstFactor: "one",
                    operation: "add",
                }
            };
            const pipelineDescriptor = this.createDeferredDescriptor(shaderModule, {
                fragmentMain: "main_fragment_b",
                bufferDescriptor: data.spheresBufferDescriptor,
                writeMask: GPUColorWrite.BLUE,
                blend: additiveBlend,
            });
            pipelineDescriptor.depthStencil = {
                depthWriteEnabled: false,
                depthCompare: "less",
                format: webgpuCanvas.depthTextureFormat,
            };
            const pipeline = this.device.createRenderPipeline(pipelineDescriptor);
            const uniformsBindgroup = this.device.createBindGroup({
                layout: pipeline.getBindGroupLayout(0),
                entries: [{
                        binding: 0,
                        resource: this.uniforms.bindingResource,
                    }]
            });
            this.bRenderPass = {
                colorAttachment,
                depthAttachment,
                descriptor: renderPassDescriptor,
                pipeline,
                uniformsBindgroup,
            };
        }
    }
    render(commandEncoder, viewData, data) {
        this.uniforms.setValueFromName("vpMatrix", viewData.vpMatrix);
        this.uniforms.setValueFromName("mMatrix", data.modelMatrix);
        this.uniforms.setValueFromName("cameraUp", viewData.cameraUp);
        this.uniforms.setValueFromName("cameraRight", viewData.cameraRight);
        this.uniforms.setValueFromName("sphereRadius", parameters_1.Parameters.spheresRadiusFactor * data.sphereRadius);
        this.uniforms.setValueFromName("weightThreshold", data.maxDisplayedWeight);
        this.uniforms.uploadToGPU();
        const renderPasses = [this.rgaRenderPass];
        if (data.willUseWaterDepth) {
            renderPasses.push(this.bRenderPass);
        }
        const width = this.texture.getWidth();
        const height = this.texture.getHeight();
        for (const renderPass of renderPasses) {
            const renderpassEncoder = commandEncoder.beginRenderPass(renderPass.descriptor);
            renderpassEncoder.setViewport(0, 0, width, height, 0, 1);
            renderpassEncoder.setScissorRect(0, 0, width, height);
            renderpassEncoder.setPipeline(renderPass.pipeline);
            renderpassEncoder.setVertexBuffer(0, data.gpuBuffer);
            renderpassEncoder.setBindGroup(0, renderPass.uniformsBindgroup);
            renderpassEncoder.draw(6, data.instancesCount);
            renderpassEncoder.end();
        }
    }
    setSize(width, height) {
        let somethingChanged = false;
        const renderPasses = [this.rgaRenderPass, this.bRenderPass];
        if (this.texture.setSize(width, height)) {
            for (const renderPass of renderPasses) {
                renderPass.colorAttachment.view = this.texture.getView();
            }
            somethingChanged = true;
        }
        if (this.foamTexture.setSize(width, height)) {
            for (const renderPass of renderPasses) {
                if (renderPass.foamAttachment) {
                    renderPass.foamAttachment.view = this.foamTexture.getView();
                }
            }
            somethingChanged = true;
        }
        if (this.depthTexture.setSize(width, height)) {
            this.rgaRenderPass.depthAttachment.view = this.depthTexture.getView();
            somethingChanged = true;
        }
        return somethingChanged;
    }
    setSceneDepthTextureView(sceneDepthTextureView) {
        this.bRenderPass.depthAttachment.view = sceneDepthTextureView;
    }
    createDeferredDescriptor(shaderModule, data) {
        const targets = [];
        const colorTarget = {
            format: this.texture.format,
            writeMask: data.writeMask,
        };
        if (data.blend) {
            colorTarget.blend = data.blend;
        }
        targets.push(colorTarget);
        if (data.foamTexture) {
            targets.push({ format: data.foamTexture.format });
        }
        return {
            layout: "auto",
            vertex: {
                module: shaderModule,
                entryPoint: "main_vertex",
                buffers: [
                    {
                        attributes: [
                            {
                                shaderLocation: 0,
                                offset: data.bufferDescriptor.positionAttribute.offset,
                                format: data.bufferDescriptor.positionAttribute.format,
                            },
                            {
                                shaderLocation: 1,
                                offset: data.bufferDescriptor.weightAttribute.offset,
                                format: data.bufferDescriptor.weightAttribute.format,
                            },
                            {
                                shaderLocation: 2,
                                offset: data.bufferDescriptor.foamAttribute.offset,
                                format: data.bufferDescriptor.foamAttribute.format,
                            },
                        ],
                        arrayStride: data.bufferDescriptor.bufferArrayStride,
                        stepMode: "instance",
                    }
                ]
            },
            fragment: {
                module: shaderModule,
                entryPoint: data.fragmentMain,
                targets,
            },
            primitive: {
                cullMode: "none",
                topology: "triangle-list",
            },
        };
    }
}
exports.Deferred = Deferred;


/***/ }),

/***/ "./src/ts/rendering/spheres/spheres-renderer.ts":
/*!******************************************************!*\
  !*** ./src/ts/rendering/spheres/spheres-renderer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpheresRenderer = void 0;
const parameters_1 = __webpack_require__(/*! ../../ui/parameters */ "./src/ts/ui/parameters.ts");
const blur_1 = __webpack_require__(/*! ./blur */ "./src/ts/rendering/spheres/blur.ts");
const composition_1 = __webpack_require__(/*! ./composition */ "./src/ts/rendering/spheres/composition.ts");
const deferred_1 = __webpack_require__(/*! ./deferred */ "./src/ts/rendering/spheres/deferred.ts");
class SpheresRenderer {
    constructor(webgpuCanvas, data) {
        this.webgpuCanvas = webgpuCanvas;
        this.deferredRenderer = new deferred_1.Deferred(webgpuCanvas, data);
        const texturesData = {
            deferredTexture: this.deferredRenderer.texture,
            foamTexture: this.deferredRenderer.foamTexture,
        };
        this.blur = new blur_1.Blur(webgpuCanvas.device, texturesData);
        this.compositionRenderer = new composition_1.Composition(webgpuCanvas, texturesData);
    }
    renderDeferred(commandEncoder, viewData, data) {
        this.deferredRenderer.render(commandEncoder, viewData, data);
        if (parameters_1.Parameters.blur) {
            const screenScale = 0.25 * this.webgpuCanvas.height / 512;
            this.blur.compute(commandEncoder, viewData.relativeDistance * screenScale);
        }
    }
    renderComposition(renderpassEncoder, viewData, renderData) {
        this.compositionRenderer.render(renderpassEncoder, viewData, renderData);
    }
    setSize(width, height) {
        if (this.deferredRenderer.setSize(width, height)) {
            const texturesData = {
                deferredTexture: this.deferredRenderer.texture,
                foamTexture: this.deferredRenderer.foamTexture,
            };
            this.blur.setDeferredTextures(texturesData);
            this.compositionRenderer.setDeferredTexture(texturesData);
            return true;
        }
        return false;
    }
    setSceneDepthTextureView(sceneDepthTextureView) {
        this.deferredRenderer.setSceneDepthTextureView(sceneDepthTextureView);
    }
}
exports.SpheresRenderer = SpheresRenderer;


/***/ }),

/***/ "./src/ts/scene.ts":
/*!*************************!*\
  !*** ./src/ts/scene.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Scene = void 0;
const glMatrix = __importStar(__webpack_require__(/*! gl-matrix */ "./node_modules/gl-matrix/esm/index.js"));
const engine_1 = __webpack_require__(/*! ./engine/engine */ "./src/ts/engine/engine.ts");
const mesh_1 = __webpack_require__(/*! ./engine/initial-conditions/models/mesh */ "./src/ts/engine/initial-conditions/models/mesh.ts");
const Models = __importStar(__webpack_require__(/*! ./engine/initial-conditions/models/models */ "./src/ts/engine/initial-conditions/models/models.ts"));
const axes_renderer_1 = __webpack_require__(/*! ./rendering/axes-renderer */ "./src/ts/rendering/axes-renderer.ts");
const cube_renderer_1 = __webpack_require__(/*! ./rendering/cube-renderer */ "./src/ts/rendering/cube-renderer.ts");
const grid_cells_by_population_renderer_1 = __webpack_require__(/*! ./rendering/grid-cells-by-population-renderer */ "./src/ts/rendering/grid-cells-by-population-renderer.ts");
const grid_cells_renderer_1 = __webpack_require__(/*! ./rendering/grid-cells-renderer */ "./src/ts/rendering/grid-cells-renderer.ts");
const mesh_renderer_1 = __webpack_require__(/*! ./rendering/mesh/mesh-renderer */ "./src/ts/rendering/mesh/mesh-renderer.ts");
const spheres_renderer_1 = __webpack_require__(/*! ./rendering/spheres/spheres-renderer */ "./src/ts/rendering/spheres/spheres-renderer.ts");
const Indicators = __importStar(__webpack_require__(/*! ./ui/indicators */ "./src/ts/ui/indicators.ts"));
const parameters_1 = __webpack_require__(/*! ./ui/parameters */ "./src/ts/ui/parameters.ts");
class Scene {
    constructor(webgpuCanvas, data) {
        this.modelMatrix = glMatrix.mat4.create();
        this.mvpMatrix = glMatrix.mat4.create();
        this.obstaclesMesh = null;
        this.particlesMeshes = [];
        this.obstacleMeshes = [];
        this.domainRotationPeriod = 0;
        this.domainContractionPeriod = 0;
        this.webgpuCanvas = webgpuCanvas;
        this.axesRenderer = new axes_renderer_1.AxesRenderer(webgpuCanvas);
        this.cubeRenderer = new cube_renderer_1.CubeRenderer(webgpuCanvas);
        this.spheresRenderer = new spheres_renderer_1.SpheresRenderer(webgpuCanvas, {
            spheresBufferDescriptor: engine_1.Engine.spheresBufferDescriptor,
            sceneDepthTextureView: webgpuCanvas.depthTextureView,
        });
        this.meshRenderer = new mesh_renderer_1.MeshRenderer(webgpuCanvas);
        this.gridCellsRenderer = new grid_cells_renderer_1.GridCellsRenderer(webgpuCanvas);
        this.gridCellsPerPopulationRenderer = new grid_cells_by_population_renderer_1.GridCellsByPopulationRenderer(this.webgpuCanvas, engine_1.Engine.cellBufferDescriptor);
        this.particlesContainerMesh = Scene.loadParticlesMesh(data.particlesQuantity);
        this.particlesMeshes.push(this.meshRenderer.createMeshRenderable(this.particlesContainerMesh));
        this.obstaclesMesh = Scene.loadObstacleMesh(data.obstacle);
        if (this.obstaclesMesh) {
            this.obstacleMeshes.push(this.meshRenderer.createMeshRenderable(this.obstaclesMesh));
        }
        this.engine = new engine_1.Engine(webgpuCanvas.device, {
            particlesContainerMesh: this.particlesContainerMesh,
            obstaclesMesh: this.obstaclesMesh,
            spheresRadius: data.spheresRadius
        });
        Indicators.setParticlesCount(this.engine.spheresBuffer.instancesCount);
        Indicators.setGridSize(this.engine.gridData.gridSize);
    }
    update(commandEncoder, dt) {
        const domainAnimation = parameters_1.Parameters.domainAnimation;
        if (domainAnimation === parameters_1.EDomainAnimationType.ROTATION) {
            this.domainRotationPeriod += 0.4 * dt;
            parameters_1.Parameters.domainRotation = this.domainRotationPeriod;
        }
        else {
            this.domainRotationPeriod = parameters_1.Parameters.domainRotation;
            if (domainAnimation === parameters_1.EDomainAnimationType.CONTRACT) {
                this.domainContractionPeriod += 0.8 * dt;
                parameters_1.Parameters.domainContraction = 0.2 + 0.8 * (0.5 + 0.5 * Math.cos(this.domainContractionPeriod));
            }
        }
        const rotation = parameters_1.Parameters.domainRotation;
        const gravity = [0, parameters_1.Parameters.particlesGravity * Math.cos(rotation), parameters_1.Parameters.particlesGravity * Math.sin(rotation)];
        if (parameters_1.Parameters.obstacleAnimation === parameters_1.EObstacleAnimationType.ROTATION) {
            const rotationMatrix = glMatrix.mat4.create();
            glMatrix.mat4.translate(rotationMatrix, rotationMatrix, [0.5, 0, 0.5]);
            glMatrix.mat4.rotateY(rotationMatrix, rotationMatrix, 0.9 * dt);
            glMatrix.mat4.translate(rotationMatrix, rotationMatrix, [-0.5, 0, -0.5]);
            for (const mesh of this.obstacleMeshes) {
                glMatrix.mat4.multiply(mesh.modelMatrix, mesh.modelMatrix, rotationMatrix);
            }
            this.engine.compute(commandEncoder, dt, gravity, rotationMatrix);
        }
        this.engine.compute(commandEncoder, dt, gravity);
    }
    render(commandEncoder, viewData) {
        glMatrix.mat4.fromXRotation(this.modelMatrix, -Math.PI / 2 - parameters_1.Parameters.domainRotation);
        glMatrix.mat4.translate(this.modelMatrix, this.modelMatrix, [-0.5, -0.5, -0.5]);
        glMatrix.mat4.multiply(this.mvpMatrix, viewData.vpMatrix, this.modelMatrix);
        const lightDirection = [Math.SQRT1_2, 0, Math.SQRT1_2];
        {
            const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder);
            const renderableMeshes = [];
            if (parameters_1.Parameters.obstacleDisplayAsMesh) {
                renderableMeshes.push(...this.obstacleMeshes);
            }
            if (parameters_1.Parameters.particlesDisplayAsMesh) {
                renderableMeshes.push(...this.particlesMeshes);
            }
            this.meshRenderer.render(renderpassEncoder, {
                meshes: renderableMeshes,
                mvpMatrix: this.mvpMatrix,
                modelMatrix: this.modelMatrix,
                displayNormals: ![parameters_1.EDisplayMode.WATER, parameters_1.EDisplayMode.BALLS].includes(parameters_1.Parameters.displayMode),
                lightDirection,
            });
            renderpassEncoder.end();
        }
        if (parameters_1.Parameters.particlesDisplay) {
            this.spheresRenderer.setSceneDepthTextureView(this.webgpuCanvas.depthTextureView);
            this.spheresRenderer.renderDeferred(commandEncoder, viewData, {
                modelMatrix: this.modelMatrix,
                gpuBuffer: this.engine.spheresBuffer.gpuBuffer,
                instancesCount: this.engine.spheresBuffer.instancesCount,
                sphereRadius: this.engine.spheresBuffer.sphereRadius,
                maxDisplayedWeight: engine_1.Engine.getMaxWeight(parameters_1.Parameters.obstacleDisplayAsSpheres),
                willUseWaterDepth: [parameters_1.EDisplayMode.WATER_DEPTH, parameters_1.EDisplayMode.WATER].includes(parameters_1.Parameters.displayMode),
            });
        }
        const renderpassEncoder = this.webgpuCanvas.beginRenderPass(commandEncoder, { clearColor: false, clearDepth: false });
        if (parameters_1.Parameters.renderAxes) {
            this.axesRenderer.render(renderpassEncoder, viewData);
        }
        if (parameters_1.Parameters.domainDisplay) {
            this.cubeRenderer.render(renderpassEncoder, {
                mvpMatrix: this.mvpMatrix,
                proportions: [1, 1, parameters_1.Parameters.domainContraction],
            });
        }
        if (parameters_1.Parameters.particlesDisplay) {
            this.spheresRenderer.renderComposition(renderpassEncoder, viewData, { lightDirection });
        }
        switch (parameters_1.Parameters.renderGridCells) {
            case parameters_1.EGridDisplayMode.FINAL:
                this.gridCellsRenderer.render(renderpassEncoder, {
                    mvpMatrix: this.mvpMatrix,
                    buffers: this.engine.nonEmptyCellsBuffers,
                    gridData: this.engine.gridData,
                });
                break;
            case parameters_1.EGridDisplayMode.COLOR_BY_POPULATION:
                this.gridCellsPerPopulationRenderer.render(renderpassEncoder, {
                    mvpMatrix: this.mvpMatrix,
                    gpuBuffer: this.engine.cellsBufferData.cellsBuffer.gpuBuffer,
                    gridData: this.engine.gridData,
                });
                break;
        }
        renderpassEncoder.end();
    }
    reinitialize() {
        this.engine.reinitialize();
        for (const mesh of this.obstacleMeshes) {
            glMatrix.mat4.identity(mesh.modelMatrix);
        }
        this.reinitializeDomain();
    }
    reinitializeDomain() {
        this.domainRotationPeriod = 0;
        this.domainContractionPeriod = 0;
        parameters_1.Parameters.domainRotation = this.domainRotationPeriod;
        parameters_1.Parameters.domainContraction = 1;
    }
    setParticlesRadius(size) {
        this.engine.reset({
            particlesContainerMesh: this.particlesContainerMesh,
            obstaclesMesh: this.obstaclesMesh,
            spheresRadius: size,
        });
        for (const mesh of this.obstacleMeshes) {
            glMatrix.mat4.identity(mesh.modelMatrix);
        }
        Indicators.setParticlesCount(this.engine.spheresBuffer.instancesCount);
        Indicators.setGridSize(this.engine.gridData.gridSize);
    }
    setParticlesQuantity(quantity) {
        for (const renderableMesh of this.particlesMeshes) {
            renderableMesh.free();
        }
        this.particlesMeshes.length = 0;
        this.particlesContainerMesh = Scene.loadParticlesMesh(quantity);
        this.particlesMeshes.push(this.meshRenderer.createMeshRenderable(this.particlesContainerMesh));
        this.engine.reset({
            particlesContainerMesh: this.particlesContainerMesh,
            obstaclesMesh: this.obstaclesMesh,
            spheresRadius: this.engine.spheresBuffer.sphereRadius,
        });
        for (const mesh of this.obstacleMeshes) {
            glMatrix.mat4.identity(mesh.modelMatrix);
        }
        Indicators.setParticlesCount(this.engine.spheresBuffer.instancesCount);
        Indicators.setGridSize(this.engine.gridData.gridSize);
    }
    setObstacle(obstacle) {
        for (const renderableMesh of this.obstacleMeshes) {
            renderableMesh.free();
        }
        this.obstacleMeshes.length = 0;
        this.obstaclesMesh = Scene.loadObstacleMesh(obstacle);
        if (this.obstaclesMesh) {
            this.obstacleMeshes.push(this.meshRenderer.createMeshRenderable(this.obstaclesMesh));
        }
        this.engine.reset({
            particlesContainerMesh: this.particlesContainerMesh,
            obstaclesMesh: this.obstaclesMesh,
            spheresRadius: this.engine.spheresBuffer.sphereRadius,
        });
        for (const mesh of this.obstacleMeshes) {
            glMatrix.mat4.identity(mesh.modelMatrix);
        }
        Indicators.setParticlesCount(this.engine.spheresBuffer.instancesCount);
        Indicators.setGridSize(this.engine.gridData.gridSize);
    }
    setCanvasSize(width, height) {
        return this.spheresRenderer.setSize(width, height);
    }
    static loadParticlesMesh(quantity) {
        switch (quantity) {
            case parameters_1.EParticlesQuantity.S:
                return mesh_1.Mesh.load(Models.Particles.S);
            case parameters_1.EParticlesQuantity.X:
                return mesh_1.Mesh.load(Models.Particles.X);
            case parameters_1.EParticlesQuantity.XX:
                return mesh_1.Mesh.load(Models.Particles.XX);
            case parameters_1.EParticlesQuantity.XXX:
                return mesh_1.Mesh.load(Models.Particles.XXX);
            case parameters_1.EParticlesQuantity.XXXX:
                return mesh_1.Mesh.load(Models.Particles.XXXX);
            case parameters_1.EParticlesQuantity.XXXXX:
                return mesh_1.Mesh.load(Models.Particles.XXXXX);
            default:
                throw new Error();
        }
    }
    static loadObstacleMesh(obstacle) {
        switch (obstacle) {
            case parameters_1.EObstacleType.NONE:
                return null;
            case parameters_1.EObstacleType.CAPSULES:
                return mesh_1.Mesh.load(Models.Obstacles.Capsules);
            case parameters_1.EObstacleType.HELIX:
                return mesh_1.Mesh.load(Models.Obstacles.Helix);
            case parameters_1.EObstacleType.PIERCED_FLOOR:
                return mesh_1.Mesh.load(Models.Obstacles.PiercedFloor);
            case parameters_1.EObstacleType.FUNNEL:
                return mesh_1.Mesh.load(Models.Obstacles.Funnel);
            case parameters_1.EObstacleType.CUP:
                return mesh_1.Mesh.load(Models.Obstacles.Cup);
            default:
                throw new Error();
        }
    }
}
exports.Scene = Scene;


/***/ }),

/***/ "./src/ts/shader-sources.ts":
/*!**********************************!*\
  !*** ./src/ts/shader-sources.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/// <reference types="./webgpu-utils/wgsl-type"/>
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Rendering = exports.Engine = void 0;
const count_particles_per_cell_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/indexing/count-particles-per-cell.wgsl */ "./src/shaders/engine/indexing/count-particles-per-cell.wgsl"));
const finalize_prefix_sum_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/indexing/finalize-prefix-sum.wgsl */ "./src/shaders/engine/indexing/finalize-prefix-sum.wgsl"));
const down_pass_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/indexing/prefix-sum/down-pass.wgsl */ "./src/shaders/engine/indexing/prefix-sum/down-pass.wgsl"));
const reduce_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/indexing/prefix-sum/reduce.wgsl */ "./src/shaders/engine/indexing/prefix-sum/reduce.wgsl"));
const prepare_prefix_sum_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/indexing/prepare-prefix-sum.wgsl */ "./src/shaders/engine/indexing/prepare-prefix-sum.wgsl"));
const render_cells_by_population_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/indexing/render-cells-by-population.wgsl */ "./src/shaders/engine/indexing/render-cells-by-population.wgsl"));
const reorder_particles_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/indexing/reorder-particles.wgsl */ "./src/shaders/engine/indexing/reorder-particles.wgsl"));
const reset_cells_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/indexing/reset-cells.wgsl */ "./src/shaders/engine/indexing/reset-cells.wgsl"));
const acceleration_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/simulation/acceleration.wgsl */ "./src/shaders/engine/simulation/acceleration.wgsl"));
const initialization_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/simulation/initialization.wgsl */ "./src/shaders/engine/simulation/initialization.wgsl"));
const integration_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/simulation/integration.wgsl */ "./src/shaders/engine/simulation/integration.wgsl"));
const obstacles_rotation_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/engine/simulation/obstacles-rotation.wgsl */ "./src/shaders/engine/simulation/obstacles-rotation.wgsl"));
const axes_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/rendering/axes.wgsl */ "./src/shaders/rendering/axes.wgsl"));
const cube_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/rendering/cube.wgsl */ "./src/shaders/rendering/cube.wgsl"));
const grid_cells_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/rendering/grid-cells.wgsl */ "./src/shaders/rendering/grid-cells.wgsl"));
const mesh_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/rendering/mesh.wgsl */ "./src/shaders/rendering/mesh.wgsl"));
const blur_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/rendering/spheres/blur.wgsl */ "./src/shaders/rendering/spheres/blur.wgsl"));
const composition_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/rendering/spheres/composition.wgsl */ "./src/shaders/rendering/spheres/composition.wgsl"));
const spheres_wgsl_1 = __importDefault(__webpack_require__(/*! ../shaders/rendering/spheres/spheres.wgsl */ "./src/shaders/rendering/spheres/spheres.wgsl"));
const engine = {
    Indexing: {
        CountParticlesPerCell: count_particles_per_cell_wgsl_1.default,
        FinalizePrefixSum: finalize_prefix_sum_wgsl_1.default,
        PreparePrefixSum: prepare_prefix_sum_wgsl_1.default,
        RenderCellsByPopulation: render_cells_by_population_wgsl_1.default,
        ReorderParticles: reorder_particles_wgsl_1.default,
        ResetCells: reset_cells_wgsl_1.default,
        PrefixSum: {
            DownPass: down_pass_wgsl_1.default,
            Reduce: reduce_wgsl_1.default,
        },
    },
    Simulation: {
        Acceleration: acceleration_wgsl_1.default,
        Initialization: initialization_wgsl_1.default,
        Integration: integration_wgsl_1.default,
        ObstaclesRotation: obstacles_rotation_wgsl_1.default,
    },
};
exports.Engine = engine;
const rendering = {
    Axes: axes_wgsl_1.default,
    Cube: cube_wgsl_1.default,
    GridCells: grid_cells_wgsl_1.default,
    Mesh: mesh_wgsl_1.default,
    Spheres: {
        Blur: blur_wgsl_1.default,
        Composition: composition_wgsl_1.default,
        Spheres: spheres_wgsl_1.default,
    },
};
exports.Rendering = rendering;


/***/ }),

/***/ "./src/ts/ui/counter.ts":
/*!******************************!*\
  !*** ./src/ts/ui/counter.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Counter = void 0;
class Counter {
    constructor() {
        this.count = 0;
        this.onChange = null;
        let lastUpdate = performance.now();
        setInterval(() => {
            const now = performance.now();
            const dt = now - lastUpdate;
            lastUpdate = now;
            if (this.onChange) {
                const countPerSeconds = 1000 * this.count / dt;
                this.onChange(countPerSeconds);
            }
            this.count = 0;
        }, 500);
    }
    register() {
        this.count++;
    }
}
exports.Counter = Counter;


/***/ }),

/***/ "./src/ts/ui/indicators.ts":
/*!*********************************!*\
  !*** ./src/ts/ui/indicators.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


/// <reference types="../page-interface-generated" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setParticlesCount = exports.setGridSize = exports.setAverageIps = exports.setAverageFps = void 0;
function setAverageFps(value) {
    Page.Canvas.setIndicatorText("average-fps", `${value.toFixed()} fps`);
}
exports.setAverageFps = setAverageFps;
function setAverageIps(value) {
    Page.Canvas.setIndicatorText("average-ips", `${value.toFixed()}`);
}
exports.setAverageIps = setAverageIps;
function setParticlesCount(value) {
    Page.Canvas.setIndicatorText("particles-count", `${value.toLocaleString()}`);
}
exports.setParticlesCount = setParticlesCount;
function setGridSize(value) {
    Page.Canvas.setIndicatorText("grid", `${value[0]}x${value[1]}x${value[2]} (${(value[0] * value[1] * value[2]).toLocaleString()} cells)`);
}
exports.setGridSize = setGridSize;


/***/ }),

/***/ "./src/ts/ui/parameters.ts":
/*!*********************************!*\
  !*** ./src/ts/ui/parameters.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


/// <reference types="../page-interface-generated" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Parameters = exports.EProjection = exports.EObstacleType = exports.EParticlesQuantity = exports.EObstacleAnimationType = exports.EGridDisplayMode = exports.EDomainAnimationType = exports.EDisplayMode = void 0;
const controlId = {
    ENGINE_PAUSE_CHECKBOX: "engine-pause-checkbox-id",
    ENGINE_TIMESTEP_RANGE: "engine-timestep-range-id",
    ENGINE_STEPS_PER_FRAME_RANGE: "engine-iterations-per-frame-range-id",
    RENDER_BACKGROUND_COLORPICKER: "render-background-color-id",
    RENDER_MODE_TABS: "render-mode-tabs-id",
    RENDER_WATER_COLOR_COLORPICKER: "render-water-color-id",
    RENDER_WATER_OPACITY_RANGE: "render-water-opacity-range-id",
    RENDER_FOAM_CHECKBOX: "render-foam-checkbox-id",
    RENDER_INDICATORS_CHECKBOX: "render-indicators-checkbox-id",
    RENDER_AXES_CHECKBOX: "render-axes-checkbox-id",
    RENDER_GRID_CELLS_SELECT: "render-grid-cells-select-id",
    RENDER_PROJECTION_TABS: "render-projection-tabs-id",
    PARTICLES_RADIUS_TABS: "particles-radius-tabs-id",
    PARTICLES_QUANTITY_SELECT: "particles-quantity-select-id",
    PARTICLES_GRAVITY_RANGE: "particles-gravity-range-id",
    PARTICLES_DISPLAY_CHECKBOX: "particles-display-checkbox-id",
    PARTICLES_RESET_BUTTON: "particles-reset-button-id",
    OBSTACLE_SELECT: "obstacles-select-id",
    OBSTACLE_ANIMATION_SELECT: "obstacles-animation-select-id",
    OBSTACLE_MESH_CHECKBOX: "obstacle-mesh-checkbox-id",
    OBSTACLE_SPHERES_CHECKBOX: "obstacle-spheres-checkbox-id",
    DOMAIN_ANIMATION_SELECT: "domain-animation-select-id",
    DOMAIN_ROTATION_RANGE: "domain-rotation-range-id",
    DOMAIN_CONTRACTION_RANGE: "domain-contraction-range-id",
    DOMAIN_DISPLAY_CHECKBOX: "domain-display-checkbox-id",
    DOMAIN_RESET_BUTTON: "domain-reset-button-id",
    DEBUG_BLUR_CHECKBOX: "debug-blur-checkbox-id",
    DEBUG_SPHERES_RADIUS_RANGE: "debug-spheres-radius-range-id",
    DEBUG_DISPLAY_MODE_SELECT: "debug-display-mode-select-id",
    DEBUG_SPECULARITY_RANGE: "debug-specularity-range-id",
    DEBUG_FRESNEL_RANGE: "debug-fresnel-range-id",
};
function updateIndicatorsVisibility() {
    const shouldBeVisible = Page.Checkbox.isChecked(controlId.RENDER_INDICATORS_CHECKBOX);
    Page.Canvas.setIndicatorsVisibility(shouldBeVisible);
}
Page.Checkbox.addObserver(controlId.RENDER_INDICATORS_CHECKBOX, updateIndicatorsVisibility);
updateIndicatorsVisibility();
function buildColor(id) {
    const color = Page.ColorPicker.getValue(id);
    return [color.r / 255, color.g / 255, color.b / 255, 1];
}
var EProjection;
(function (EProjection) {
    EProjection["ORTHO"] = "ortho";
    EProjection["PERSPECTIVE"] = "perspective";
})(EProjection || (exports.EProjection = EProjection = {}));
var EDisplayMode;
(function (EDisplayMode) {
    EDisplayMode[EDisplayMode["LOCAL_POSITION"] = 0] = "LOCAL_POSITION";
    EDisplayMode[EDisplayMode["CSREENSPACE_NORMALS"] = 1] = "CSREENSPACE_NORMALS";
    EDisplayMode[EDisplayMode["WORLDSPACE_NORMALS"] = 2] = "WORLDSPACE_NORMALS";
    EDisplayMode[EDisplayMode["WATER_DEPTH"] = 3] = "WATER_DEPTH";
    EDisplayMode[EDisplayMode["WATER"] = 4] = "WATER";
    EDisplayMode[EDisplayMode["DEPTH"] = 5] = "DEPTH";
    EDisplayMode[EDisplayMode["BALLS"] = 6] = "BALLS";
})(EDisplayMode || (exports.EDisplayMode = EDisplayMode = {}));
var EGridDisplayMode;
(function (EGridDisplayMode) {
    EGridDisplayMode[EGridDisplayMode["HIDDEN"] = 0] = "HIDDEN";
    EGridDisplayMode[EGridDisplayMode["COLOR_BY_POPULATION"] = 1] = "COLOR_BY_POPULATION";
    EGridDisplayMode[EGridDisplayMode["FINAL"] = 2] = "FINAL";
})(EGridDisplayMode || (exports.EGridDisplayMode = EGridDisplayMode = {}));
var EObstacleType;
(function (EObstacleType) {
    EObstacleType["NONE"] = "none";
    EObstacleType["CAPSULES"] = "capsules";
    EObstacleType["HELIX"] = "helix";
    EObstacleType["PIERCED_FLOOR"] = "pierced-floor";
    EObstacleType["FUNNEL"] = "funnel";
    EObstacleType["CUP"] = "cup";
})(EObstacleType || (exports.EObstacleType = EObstacleType = {}));
var EDomainAnimationType;
(function (EDomainAnimationType) {
    EDomainAnimationType["NONE"] = "none";
    EDomainAnimationType["ROTATION"] = "rotate";
    EDomainAnimationType["CONTRACT"] = "contract";
})(EDomainAnimationType || (exports.EDomainAnimationType = EDomainAnimationType = {}));
var EObstacleAnimationType;
(function (EObstacleAnimationType) {
    EObstacleAnimationType["NONE"] = "none";
    EObstacleAnimationType["ROTATION"] = "rotate";
})(EObstacleAnimationType || (exports.EObstacleAnimationType = EObstacleAnimationType = {}));
var EParticlesQuantity;
(function (EParticlesQuantity) {
    EParticlesQuantity["S"] = "s";
    EParticlesQuantity["X"] = "x";
    EParticlesQuantity["XX"] = "xx";
    EParticlesQuantity["XXX"] = "xxx";
    EParticlesQuantity["XXXX"] = "xxxx";
    EParticlesQuantity["XXXXX"] = "xxxxx";
})(EParticlesQuantity || (exports.EParticlesQuantity = EParticlesQuantity = {}));
const isInDebug = new URLSearchParams(window.location.search).get("debug") === "1";
Page.Controls.setVisibility(controlId.PARTICLES_DISPLAY_CHECKBOX, isInDebug);
Page.Controls.setVisibility(controlId.OBSTACLE_MESH_CHECKBOX, isInDebug);
Page.Controls.setVisibility(controlId.OBSTACLE_SPHERES_CHECKBOX, isInDebug);
Page.Controls.setVisibility(controlId.RENDER_FOAM_CHECKBOX, isInDebug);
Page.Controls.setVisibility(controlId.RENDER_AXES_CHECKBOX, isInDebug);
Page.Controls.setVisibility(controlId.RENDER_GRID_CELLS_SELECT, isInDebug);
Page.Controls.setVisibility(controlId.RENDER_PROJECTION_TABS, isInDebug);
class Parameters {
    static get enginePaused() {
        return Page.Checkbox.isChecked(controlId.ENGINE_PAUSE_CHECKBOX);
    }
    static get engineTimestep() {
        return Page.Range.getValue(controlId.ENGINE_TIMESTEP_RANGE);
    }
    static get engineStepsPerFrame() {
        return Page.Range.getValue(controlId.ENGINE_STEPS_PER_FRAME_RANGE);
    }
    static get renderBackgroundColor() {
        return buildColor(controlId.RENDER_BACKGROUND_COLORPICKER);
    }
    static get renderWaterColor() {
        return buildColor(controlId.RENDER_WATER_COLOR_COLORPICKER);
    }
    static get renderWaterOpacity() {
        return Page.Range.getValue(controlId.RENDER_WATER_OPACITY_RANGE);
    }
    static get renderFoam() {
        return Page.Checkbox.isChecked(controlId.RENDER_FOAM_CHECKBOX);
    }
    static get renderAxes() {
        return Page.Checkbox.isChecked(controlId.RENDER_AXES_CHECKBOX);
    }
    static get renderGridCells() {
        const value = Page.Select.getValue(controlId.RENDER_GRID_CELLS_SELECT);
        if (!value) {
            throw new Error();
        }
        return +value;
    }
    static get renderProjection() {
        return Page.Tabs.getValues(controlId.RENDER_PROJECTION_TABS)[0];
    }
    static get particlesRadius() {
        const value = Page.Tabs.getValues(controlId.PARTICLES_RADIUS_TABS)[0];
        if (!value) {
            throw new Error();
        }
        return +value;
    }
    static get particlesQuantity() {
        const value = Page.Select.getValue(controlId.PARTICLES_QUANTITY_SELECT);
        if (!value) {
            throw new Error();
        }
        return value;
    }
    static get particlesGravity() {
        return Page.Range.getValue(controlId.PARTICLES_GRAVITY_RANGE);
    }
    static get particlesDisplay() {
        return Page.Checkbox.isChecked(controlId.PARTICLES_DISPLAY_CHECKBOX);
    }
    static get particlesDisplayAsMesh() {
        return false;
    }
    static get obstacleType() {
        const value = Page.Select.getValue(controlId.OBSTACLE_SELECT);
        if (!value) {
            throw new Error();
        }
        return value;
    }
    static get obstacleAnimation() {
        const value = Page.Select.getValue(controlId.OBSTACLE_ANIMATION_SELECT);
        if (!value) {
            throw new Error();
        }
        return value;
    }
    static get obstacleDisplayAsMesh() {
        return Page.Checkbox.isChecked(controlId.OBSTACLE_MESH_CHECKBOX);
    }
    static get obstacleDisplayAsSpheres() {
        return Page.Checkbox.isChecked(controlId.OBSTACLE_SPHERES_CHECKBOX);
    }
    static get domainAnimation() {
        const value = Page.Select.getValue(controlId.DOMAIN_ANIMATION_SELECT);
        if (!value) {
            throw new Error();
        }
        return value;
    }
    static set domainRotation(value) {
        const rotation = (180 * value / Math.PI) % 360;
        Page.Range.setValue(controlId.DOMAIN_ROTATION_RANGE, rotation);
    }
    static get domainRotation() {
        return Math.PI * Page.Range.getValue(controlId.DOMAIN_ROTATION_RANGE) / 180;
    }
    static set domainContraction(value) {
        Page.Range.setValue(controlId.DOMAIN_CONTRACTION_RANGE, value);
    }
    static get domainContraction() {
        return Page.Range.getValue(controlId.DOMAIN_CONTRACTION_RANGE);
    }
    static get domainDisplay() {
        return Page.Checkbox.isChecked(controlId.DOMAIN_DISPLAY_CHECKBOX);
    }
    static get blur() {
        if (Parameters.isInDebug) {
            return Page.Checkbox.isChecked(controlId.DEBUG_BLUR_CHECKBOX);
        }
        else {
            return Parameters.displayMode === EDisplayMode.WATER;
        }
    }
    static get spheresRadiusFactor() {
        return Page.Range.getValue(controlId.DEBUG_SPHERES_RADIUS_RANGE);
    }
    static get displayMode() {
        let value;
        if (Parameters.isInDebug) {
            value = Page.Select.getValue(controlId.DEBUG_DISPLAY_MODE_SELECT);
        }
        else {
            value = Page.Tabs.getValues(controlId.RENDER_MODE_TABS)[0];
        }
        if (!value) {
            throw new Error();
        }
        return +value;
    }
    static get waterSpecularity() {
        return Page.Range.getValue(controlId.DEBUG_SPECULARITY_RANGE);
    }
    static get waterFresnel() {
        return Page.Range.getValue(controlId.DEBUG_FRESNEL_RANGE);
    }
}
exports.Parameters = Parameters;
Parameters.isInDebug = isInDebug;
Parameters.onParticlesQuantityChange = [];
Parameters.onParticlesResetObservers = [];
Parameters.onDomainResetObservers = [];
Parameters.onParticlesRadiusChange = [];
Parameters.onObstacleChange = [];
Page.Tabs.addObserver(controlId.PARTICLES_RADIUS_TABS, () => {
    for (const observer of Parameters.onParticlesRadiusChange) {
        observer();
    }
});
Page.Select.addObserver(controlId.PARTICLES_QUANTITY_SELECT, () => {
    updateObstacleAnimationVisibility();
    for (const observer of Parameters.onParticlesQuantityChange) {
        observer();
    }
});
Page.Button.addObserver(controlId.PARTICLES_RESET_BUTTON, () => {
    for (const observer of Parameters.onParticlesResetObservers) {
        observer();
    }
});
Page.Button.addObserver(controlId.DOMAIN_RESET_BUTTON, () => {
    for (const observer of Parameters.onDomainResetObservers) {
        observer();
    }
});
function updateObstacleAnimationVisibility() {
    Page.Controls.setVisibility(controlId.OBSTACLE_ANIMATION_SELECT, Parameters.obstacleType !== EObstacleType.NONE);
}
Page.Select.addObserver(controlId.OBSTACLE_SELECT, () => {
    updateObstacleAnimationVisibility();
    for (const observer of Parameters.onObstacleChange) {
        observer();
    }
});
updateObstacleAnimationVisibility();
function updateWaterControlsVisibility() {
    const isWaterMode = Parameters.displayMode === EDisplayMode.WATER;
    Page.Controls.setVisibility(controlId.RENDER_WATER_COLOR_COLORPICKER, isWaterMode);
    Page.Controls.setVisibility(controlId.RENDER_WATER_OPACITY_RANGE, isWaterMode);
}
Page.Tabs.addObserver(controlId.RENDER_MODE_TABS, updateWaterControlsVisibility);
updateWaterControlsVisibility();
Page.Sections.setVisibility("debug-section-id", Parameters.isInDebug);


/***/ }),

/***/ "./src/ts/webgpu-utils/helpers/memory-metrics.ts":
/*!*******************************************************!*\
  !*** ./src/ts/webgpu-utils/helpers/memory-metrics.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerDestruction = exports.registerAllocation = void 0;
const size_1 = __webpack_require__(/*! ./size */ "./src/ts/webgpu-utils/helpers/size.ts");
const totalSizeByObjectTypes = {};
function writeMemoryBreakdown() {
    let result = "GPU memory breakdown:\n";
    for (const [objectType, objectSize] of Object.entries(totalSizeByObjectTypes)) {
        const printableSize = (0, size_1.getPrintableSizeFromBytes)(objectSize);
        result += `\t- ${objectType}: ${printableSize}\n`;
    }
    console.debug(result);
}
let scheduledBreakdownId = -1;
function scheduleBreakdown() {
    if (scheduledBreakdownId > 0) {
        clearTimeout(scheduledBreakdownId);
    }
    scheduledBreakdownId = window.setTimeout(() => {
        writeMemoryBreakdown();
        scheduledBreakdownId = -1;
    }, 1000);
}
function buildName(data) {
    if (data === null || data === void 0 ? void 0 : data.properties) {
        return `${data.objectType} (${data.properties})`;
    }
    return data.objectType;
}
function registerAllocation(data) {
    if (!totalSizeByObjectTypes[data.objectType]) {
        totalSizeByObjectTypes[data.objectType] = 0;
    }
    totalSizeByObjectTypes[data.objectType] += data.objectSizeInBytes;
    const name = buildName(data);
    const objectPrintableSize = (0, size_1.getPrintableSizeFromBytes)(data.objectSizeInBytes);
    console.debug(`Allocated ${name} of size ${objectPrintableSize}.`);
    scheduleBreakdown();
}
exports.registerAllocation = registerAllocation;
function registerDestruction(data) {
    if (typeof totalSizeByObjectTypes[data.objectType] === "undefined") {
        throw new Error(`Did not register any allocation for ${data.objectType}.`);
    }
    if (totalSizeByObjectTypes[data.objectType] < data.objectSizeInBytes) {
        throw new Error(`Invalid memory count for ${data.objectType}.`);
    }
    totalSizeByObjectTypes[data.objectType] -= data.objectSizeInBytes;
    const name = buildName(data);
    const objectPrintableSize = (0, size_1.getPrintableSizeFromBytes)(data.objectSizeInBytes);
    console.debug(`Destroyed ${name} of size ${objectPrintableSize}.`);
    scheduleBreakdown();
}
exports.registerDestruction = registerDestruction;


/***/ }),

/***/ "./src/ts/webgpu-utils/helpers/size.ts":
/*!*********************************************!*\
  !*** ./src/ts/webgpu-utils/helpers/size.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPrintableSizeFromGigaBytes = exports.getPrintableSizeFromMegaBytes = exports.getPrintableSizeFromKiloBytes = exports.getPrintableSizeFromBytes = void 0;
function printSize(size) {
    const naive = size.toFixed(2);
    if (naive.endsWith("00")) {
        return size.toFixed();
    }
    else if (naive.endsWith("0")) {
        return size.toFixed(1);
    }
    return naive;
}
function getPrintableSize(size, units) {
    if (size < 1024 || units.length === 1) {
        return `${printSize(size)}${units[0]}`;
    }
    return getPrintableSize(size / 1024, units.slice(1));
}
function getPrintableSizeFromBytes(sizeInBytes) {
    return getPrintableSize(sizeInBytes, ["B", "KB", "MB", "GB"]);
}
exports.getPrintableSizeFromBytes = getPrintableSizeFromBytes;
function getPrintableSizeFromKiloBytes(sizeInKiloBytes) {
    return getPrintableSize(sizeInKiloBytes, ["KB", "MB", "GB"]);
}
exports.getPrintableSizeFromKiloBytes = getPrintableSizeFromKiloBytes;
function getPrintableSizeFromMegaBytes(sizeInMegaBytes) {
    return getPrintableSize(sizeInMegaBytes, ["MB", "GB"]);
}
exports.getPrintableSizeFromMegaBytes = getPrintableSizeFromMegaBytes;
function getPrintableSizeFromGigaBytes(sizeInGigaBytes) {
    return getPrintableSize(sizeInGigaBytes, ["GB"]);
}
exports.getPrintableSizeFromGigaBytes = getPrintableSizeFromGigaBytes;


/***/ }),

/***/ "./src/ts/webgpu-utils/helpers/utils.ts":
/*!**********************************************!*\
  !*** ./src/ts/webgpu-utils/helpers/utils.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.iterateOnAllPermutations = void 0;
function* iterateOnAllPermutations(array) {
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i];
        const remainingElements = array.filter((_value, index) => index !== i);
        if (remainingElements.length === 0) {
            yield array;
        }
        else {
            for (const subPermutation of iterateOnAllPermutations(remainingElements)) {
                yield [currentElement, ...subPermutation];
            }
        }
    }
}
exports.iterateOnAllPermutations = iterateOnAllPermutations;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/array-type.ts":
/*!****************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/array-type.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayType = void 0;
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/ts/webgpu-utils/host-shareable-types/helpers.ts");
class ArrayType {
    constructor(subTypeConstructor, n) {
        const elements = [];
        for (let i = 0; i < n; i++) {
            elements.push(new subTypeConstructor());
        }
        const firstElement = elements[0];
        if (!firstElement) {
            throw new Error(`Invalid array size '${n}'.`);
        }
        this.typeName = `array<${firstElement.typeName}, ${n}>`;
        this.align = firstElement.align;
        this.stride = (0, helpers_1.roundUp)(firstElement.align, firstElement.size);
        this.size = elements.length * this.stride;
        this.elements = elements;
    }
    setValue(arrayBuffer, offset, value) {
        if (!Array.isArray(value) || value.length !== this.elements.length) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valuesArray = value;
        valuesArray.forEach((arrayValue, index) => {
            const element = this.elements[index];
            if (!element) {
                throw new Error();
            }
            const localOffset = index * this.stride;
            element.setValue(arrayBuffer, offset + localOffset, arrayValue);
        });
    }
}
exports.ArrayType = ArrayType;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/atomic-i32.ts":
/*!***************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/atomic-i32.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.atomicI32 = void 0;
class AtomicI32 {
    constructor() {
        this.typeName = "atomic<i32>";
        this.gpuVertexFormat = "sint32";
        this.align = 4;
        this.size = 4;
    }
    setValue(arrayBuffer, offset, value) {
        if (typeof value !== "number" || !Number.isInteger(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        new Int32Array(arrayBuffer, offset, 1).set([value]);
    }
}
const atomicI32 = new AtomicI32();
exports.atomicI32 = atomicI32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/atomic-u32.ts":
/*!***************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/atomic-u32.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.atomicU32 = void 0;
class AtomicU32 {
    constructor() {
        this.typeName = "atomic<u32>";
        this.gpuVertexFormat = "uint32";
        this.align = 4;
        this.size = 4;
    }
    setValue(arrayBuffer, offset, value) {
        if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
            throw new Error(`Invalid value '${value}'.`);
        }
        new Uint32Array(arrayBuffer, offset, 1).set([value]);
    }
}
const atomicU32 = new AtomicU32();
exports.atomicU32 = atomicU32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/f32.ts":
/*!********************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/f32.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.f32 = void 0;
class F32 {
    constructor() {
        this.typeName = "f32";
        this.gpuVertexFormat = "float32";
        this.align = 4;
        this.size = 4;
    }
    setValue(arrayBuffer, offset, value) {
        if (typeof value !== "number") {
            throw new Error(`Invalid value '${value}'.`);
        }
        new Float32Array(arrayBuffer, offset, 1).set([value]);
    }
}
const f32 = new F32();
exports.f32 = f32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/i32.ts":
/*!********************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/i32.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.i32 = void 0;
class I32 {
    constructor() {
        this.typeName = "i32";
        this.gpuVertexFormat = "sint32";
        this.align = 4;
        this.size = 4;
    }
    setValue(arrayBuffer, offset, value) {
        if (typeof value !== "number" || !Number.isInteger(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        new Int32Array(arrayBuffer, offset, 1).set([value]);
    }
}
const i32 = new I32();
exports.i32 = i32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/mat2x2.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/mat2x2.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mat2x2 = void 0;
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/ts/webgpu-utils/host-shareable-types/helpers.ts");
class Mat2x2 {
    constructor() {
        this.typeName = "mat2x2<f32>";
        this.align = 8;
        this.size = 16;
    }
    setValue(arrayBuffer, offset, value) {
        if (!(0, helpers_1.isArrayLike)(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsArray = value;
        if (valueAsArray.length !== 2 * 2) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const values = valueAsArray;
        for (const val of values) {
            if (typeof val !== "number") {
                throw new Error(`Invalid value '${value}'.`);
            }
        }
        new Float32Array(arrayBuffer, offset, 2 * 2).set(values);
    }
}
const mat2x2 = new Mat2x2();
exports.mat2x2 = mat2x2;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/mat4x4.ts":
/*!***********************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/mat4x4.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mat4x4 = void 0;
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/ts/webgpu-utils/host-shareable-types/helpers.ts");
class Mat4x4 {
    constructor() {
        this.typeName = "mat4x4<f32>";
        this.align = 16;
        this.size = 64;
    }
    setValue(arrayBuffer, offset, value) {
        if (!(0, helpers_1.isArrayLike)(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsArray = value;
        if (valueAsArray.length !== 4 * 4) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const values = valueAsArray;
        for (const val of values) {
            if (typeof val !== "number") {
                throw new Error(`Invalid value '${value}'.`);
            }
        }
        new Float32Array(arrayBuffer, offset, 4 * 4).set(values);
    }
}
const mat4x4 = new Mat4x4();
exports.mat4x4 = mat4x4;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/u32.ts":
/*!********************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/u32.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.u32 = void 0;
class U32 {
    constructor() {
        this.typeName = "u32";
        this.gpuVertexFormat = "uint32";
        this.align = 4;
        this.size = 4;
    }
    setValue(arrayBuffer, offset, value) {
        if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
            throw new Error(`Invalid value '${value}'.`);
        }
        new Uint32Array(arrayBuffer, offset, 1).set([value]);
    }
}
const u32 = new U32();
exports.u32 = u32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec2-f32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vec2-f32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec2F32 = void 0;
const vecx_f32_1 = __webpack_require__(/*! ./vecx-f32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-f32.ts");
const vec2F32 = new vecx_f32_1.VecXF32(2, 8, 8);
exports.vec2F32 = vec2F32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec2-i32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vec2-i32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec2I32 = void 0;
const vecx_i32_1 = __webpack_require__(/*! ./vecx-i32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-i32.ts");
const vec2I32 = new vecx_i32_1.VecXI32(2, 8, 8);
exports.vec2I32 = vec2I32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec2-u32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vec2-u32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec2U32 = void 0;
const vecx_u32_1 = __webpack_require__(/*! ./vecx-u32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-u32.ts");
const vec2U32 = new vecx_u32_1.VecXU32(2, 8, 8);
exports.vec2U32 = vec2U32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec3-f32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vec3-f32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec3F32 = void 0;
const vecx_f32_1 = __webpack_require__(/*! ./vecx-f32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-f32.ts");
const vec3F32 = new vecx_f32_1.VecXF32(3, 16, 12);
exports.vec3F32 = vec3F32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec3-i32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vec3-i32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec3I32 = void 0;
const vecx_i32_1 = __webpack_require__(/*! ./vecx-i32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-i32.ts");
const vec3I32 = new vecx_i32_1.VecXI32(3, 16, 12);
exports.vec3I32 = vec3I32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec3-u32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vec3-u32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec3U32 = void 0;
const vecx_u32_1 = __webpack_require__(/*! ./vecx-u32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-u32.ts");
const vec3U32 = new vecx_u32_1.VecXU32(3, 16, 12);
exports.vec3U32 = vec3U32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec4-f32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vec4-f32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec4F32 = void 0;
const vecx_f32_1 = __webpack_require__(/*! ./vecx-f32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-f32.ts");
const vec4F32 = new vecx_f32_1.VecXF32(4, 16, 16);
exports.vec4F32 = vec4F32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec4-i32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vec4-i32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec4I32 = void 0;
const vecx_i32_1 = __webpack_require__(/*! ./vecx-i32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-i32.ts");
const vec4I32 = new vecx_i32_1.VecXI32(4, 16, 16);
exports.vec4I32 = vec4I32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec4-u32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vec4-u32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec4U32 = void 0;
const vecx_u32_1 = __webpack_require__(/*! ./vecx-u32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-u32.ts");
const vec4U32 = new vecx_u32_1.VecXU32(4, 16, 16);
exports.vec4U32 = vec4U32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-f32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-f32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VecXF32 = void 0;
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/ts/webgpu-utils/host-shareable-types/helpers.ts");
class VecXF32 {
    constructor(n, align, size) {
        this.typeName = `vec${n}<f32>`;
        this.gpuVertexFormat = `float32x${n}`;
        this.align = align;
        this.size = size;
        this.n = n;
    }
    setValue(arrayBuffer, offset, value) {
        if (!(0, helpers_1.isArrayLike)(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsArray = value;
        if (valueAsArray.length !== this.n) {
            throw new Error(`Invalid value '${value}'.`);
        }
        for (const val of valueAsArray) {
            if (typeof val !== "number") {
                throw new Error(`Invalid value '${value}'.`);
            }
        }
        new Float32Array(arrayBuffer, offset, this.n).set(valueAsArray);
    }
}
exports.VecXF32 = VecXF32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-i32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-i32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VecXI32 = void 0;
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/ts/webgpu-utils/host-shareable-types/helpers.ts");
class VecXI32 {
    constructor(n, align, size) {
        this.typeName = `vec${n}<i32>`;
        this.gpuVertexFormat = `sint32x${n}`;
        this.align = align;
        this.size = size;
        this.n = n;
    }
    setValue(arrayBuffer, offset, value) {
        if (!(0, helpers_1.isArrayLike)(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsArray = value;
        if (valueAsArray.length !== this.n) {
            throw new Error(`Invalid value '${value}'.`);
        }
        for (const val of valueAsArray) {
            if (typeof val !== "number" || !Number.isInteger(val)) {
                throw new Error(`Invalid value '${value}'.`);
            }
        }
        new Int32Array(arrayBuffer, offset, this.n).set(valueAsArray);
    }
}
exports.VecXI32 = VecXI32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-u32.ts":
/*!*************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/base-types/vecx-u32.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VecXU32 = void 0;
const helpers_1 = __webpack_require__(/*! ../helpers */ "./src/ts/webgpu-utils/host-shareable-types/helpers.ts");
class VecXU32 {
    constructor(n, align, size) {
        this.typeName = `vec${n}<u32>`;
        this.gpuVertexFormat = `uint32x${n}`;
        this.align = align;
        this.size = size;
        this.n = n;
    }
    setValue(arrayBuffer, offset, value) {
        if (!(0, helpers_1.isArrayLike)(value)) {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsArray = value;
        if (valueAsArray.length !== this.n) {
            throw new Error(`Invalid value '${value}'.`);
        }
        for (const val of valueAsArray) {
            if (typeof val !== "number" || !Number.isInteger(val) || val < 0) {
                throw new Error(`Invalid value '${value}'.`);
            }
        }
        new Uint32Array(arrayBuffer, offset, this.n).set(valueAsArray);
    }
}
exports.VecXU32 = VecXU32;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/helpers.ts":
/*!*************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/helpers.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.roundUp = exports.isArrayLike = void 0;
function roundUp(k, n) {
    return Math.ceil(n / k) * k;
}
exports.roundUp = roundUp;
function isArrayLike(value) {
    return Array.isArray(value) || ArrayBuffer.isView(value);
}
exports.isArrayLike = isArrayLike;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/indirect-draw-buffer-type.ts":
/*!*******************************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/indirect-draw-buffer-type.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.indirectDrawBufferType = void 0;
const struct_type_1 = __webpack_require__(/*! ./struct-type */ "./src/ts/webgpu-utils/host-shareable-types/struct-type.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/ts/webgpu-utils/host-shareable-types/types.ts");
const indirectDrawBufferType = new struct_type_1.StructType("IndirectDrawBuffer", [
    { name: "vertexCount", type: types_1.u32 },
    { name: "instancesCount", type: types_1.u32 },
    { name: "firstVertex", type: types_1.u32 },
    { name: "firstInstance", type: types_1.u32 },
]);
exports.indirectDrawBufferType = indirectDrawBufferType;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/struct-type.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/struct-type.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StructType = void 0;
const helpers_1 = __webpack_require__(/*! ./helpers */ "./src/ts/webgpu-utils/host-shareable-types/helpers.ts");
class StructType {
    constructor(structName, attributesDefinitions) {
        const attributes = [];
        attributesDefinitions.forEach((attributeDefinition, index) => {
            const name = attributeDefinition.name;
            for (const knownAttribute of attributes) {
                if (knownAttribute.name === name) {
                    throw new Error(`Duplicate attribute name '${name}'.`);
                }
            }
            let align;
            const customAlign = attributeDefinition.customAlign;
            if (typeof customAlign === "number") {
                if (customAlign < attributeDefinition.type.align) {
                    throw new Error(`Custom align '${customAlign}' is supposed to be bigger than default '${attributeDefinition.type.align}' for '${name}' type '${attributeDefinition.type.typeName}'.`);
                }
                align = customAlign;
            }
            else {
                align = attributeDefinition.type.align;
            }
            let size;
            const customSize = attributeDefinition.customSize;
            if (typeof customSize === "number") {
                if (customSize < attributeDefinition.type.size) {
                    throw new Error(`Custom size '${customSize}' is supposed to be bigger than default '${attributeDefinition.type.size}' for '${name}' type '${attributeDefinition.type.typeName}'.`);
                }
                size = customSize;
            }
            else {
                size = attributeDefinition.type.size;
            }
            let offset = 0;
            const previousAttribute = attributes[index - 1];
            if (previousAttribute) {
                offset = (0, helpers_1.roundUp)(align, previousAttribute.offset + previousAttribute.size);
            }
            attributes.push({
                name,
                type: attributeDefinition.type,
                align,
                size,
                offset,
                customAlign,
                customSize,
            });
        });
        let align = -1;
        for (const attribute of attributes) {
            align = Math.max(align, attribute.align);
        }
        const lastAttribute = attributes[attributes.length - 1];
        if (!lastAttribute) {
            throw new Error(`Struct should have at least 1 attribute.`);
        }
        const size = (0, helpers_1.roundUp)(align, lastAttribute.offset + lastAttribute.size);
        this.typeName = `struct ${structName}`;
        this.align = align;
        this.size = size;
        this.name = structName;
        this.attributes = attributes;
    }
    setValue(arrayBuffer, offset, value) {
        if (typeof value !== "object") {
            throw new Error(`Invalid value '${value}'.`);
        }
        const valueAsObject = value;
        for (const [attributeName, attributeValue] of Object.entries(valueAsObject)) {
            this.setValueFromName(arrayBuffer, offset, attributeName, attributeValue);
        }
    }
    setValueFromName(arrayBuffer, offset, attributeName, attributeValue) {
        for (const attribute of this.attributes) {
            if (attribute.name === attributeName) {
                attribute.type.setValue(arrayBuffer, offset + attribute.offset, attributeValue);
                return;
            }
        }
        throw new Error(`Unknown struct attribute '${attributeName}'.`);
    }
    asVertexAttribute(attributeName) {
        for (const attribute of this.attributes) {
            if (attribute.name === attributeName) {
                if (!attribute.type.gpuVertexFormat) {
                    throw new Error(`Unsupported attribute type '${attribute.type.typeName}'.`);
                }
                return {
                    format: attribute.type.gpuVertexFormat,
                    offset: attribute.offset,
                };
            }
        }
        throw new Error(`Unknown attribute '${attributeName}'.`);
    }
    toString() {
        const attributesStringData = this.attributes.map(attribute => {
            let declaration = "    ";
            if (typeof attribute.customAlign === "number") {
                declaration += `@align(${attribute.customAlign}) `;
            }
            if (typeof attribute.customSize === "number") {
                declaration += `@size(${attribute.customSize}) `;
            }
            declaration += `${attribute.name}: ${attribute.type.typeName},`;
            const offsetComment = `offset(${attribute.offset})`;
            const alignComment = `align(${attribute.align})`;
            const sizeComment = `size(${attribute.size})`;
            return {
                declaration,
                offsetComment,
                alignComment,
                sizeComment,
            };
        });
        const structDeclaration = `struct ${this.name} {`;
        const structAlignComment = `align(${this.align})`;
        const structSizeComment = `size(${this.size})`;
        let maxDeclarationSize = structDeclaration.length;
        let maxOffsetCommentSize = 0;
        let maxAlignCommentSize = structAlignComment.length;
        let maxSizeCommentSize = structSizeComment.length;
        for (const attributeAsString of attributesStringData) {
            maxDeclarationSize = Math.max(maxDeclarationSize, attributeAsString.declaration.length);
            maxOffsetCommentSize = Math.max(maxOffsetCommentSize, attributeAsString.offsetComment.length);
            maxAlignCommentSize = Math.max(maxAlignCommentSize, attributeAsString.alignComment.length);
            maxSizeCommentSize = Math.max(maxSizeCommentSize, attributeAsString.sizeComment.length);
        }
        const attributesString = attributesStringData.map(attributeStringData => {
            return `${attributeStringData.declaration.padEnd(maxDeclarationSize, " ")} // ${attributeStringData.offsetComment.padEnd(maxOffsetCommentSize, " ")} ${attributeStringData.alignComment.padEnd(maxAlignCommentSize, " ")} ${attributeStringData.sizeComment.padEnd(maxSizeCommentSize, " ")}`;
        }).join("\n");
        return `${structDeclaration.padEnd(maxDeclarationSize, " ")} // ${" ".repeat(maxOffsetCommentSize)} ${structAlignComment.padEnd(maxAlignCommentSize, " ")} ${structSizeComment.padEnd(maxSizeCommentSize, " ")}
${attributesString}
};`;
    }
    isCompact() {
        let attributesTotalSize = 0;
        for (const attribute of this.attributes) {
            attributesTotalSize += attribute.size;
        }
        return this.size === attributesTotalSize;
    }
}
exports.StructType = StructType;


/***/ }),

/***/ "./src/ts/webgpu-utils/host-shareable-types/types.ts":
/*!***********************************************************!*\
  !*** ./src/ts/webgpu-utils/host-shareable-types/types.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StructType = exports.indirectDrawBufferType = exports.vec4U32 = exports.vec4I32 = exports.vec4F32 = exports.vec3U32 = exports.vec3I32 = exports.vec3F32 = exports.vec2U32 = exports.vec2I32 = exports.vec2F32 = exports.u32 = exports.mat4x4 = exports.mat2x2 = exports.i32 = exports.f32 = exports.atomicU32 = exports.atomicI32 = exports.ArrayType = void 0;
var array_type_1 = __webpack_require__(/*! ./array-type */ "./src/ts/webgpu-utils/host-shareable-types/array-type.ts");
Object.defineProperty(exports, "ArrayType", ({ enumerable: true, get: function () { return array_type_1.ArrayType; } }));
var atomic_i32_1 = __webpack_require__(/*! ./base-types/atomic-i32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/atomic-i32.ts");
Object.defineProperty(exports, "atomicI32", ({ enumerable: true, get: function () { return atomic_i32_1.atomicI32; } }));
var atomic_u32_1 = __webpack_require__(/*! ./base-types/atomic-u32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/atomic-u32.ts");
Object.defineProperty(exports, "atomicU32", ({ enumerable: true, get: function () { return atomic_u32_1.atomicU32; } }));
var f32_1 = __webpack_require__(/*! ./base-types/f32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/f32.ts");
Object.defineProperty(exports, "f32", ({ enumerable: true, get: function () { return f32_1.f32; } }));
var i32_1 = __webpack_require__(/*! ./base-types/i32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/i32.ts");
Object.defineProperty(exports, "i32", ({ enumerable: true, get: function () { return i32_1.i32; } }));
var mat2x2_1 = __webpack_require__(/*! ./base-types/mat2x2 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/mat2x2.ts");
Object.defineProperty(exports, "mat2x2", ({ enumerable: true, get: function () { return mat2x2_1.mat2x2; } }));
var mat4x4_1 = __webpack_require__(/*! ./base-types/mat4x4 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/mat4x4.ts");
Object.defineProperty(exports, "mat4x4", ({ enumerable: true, get: function () { return mat4x4_1.mat4x4; } }));
var u32_1 = __webpack_require__(/*! ./base-types/u32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/u32.ts");
Object.defineProperty(exports, "u32", ({ enumerable: true, get: function () { return u32_1.u32; } }));
var vec2_f32_1 = __webpack_require__(/*! ./base-types/vec2-f32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec2-f32.ts");
Object.defineProperty(exports, "vec2F32", ({ enumerable: true, get: function () { return vec2_f32_1.vec2F32; } }));
var vec2_i32_1 = __webpack_require__(/*! ./base-types/vec2-i32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec2-i32.ts");
Object.defineProperty(exports, "vec2I32", ({ enumerable: true, get: function () { return vec2_i32_1.vec2I32; } }));
var vec2_u32_1 = __webpack_require__(/*! ./base-types/vec2-u32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec2-u32.ts");
Object.defineProperty(exports, "vec2U32", ({ enumerable: true, get: function () { return vec2_u32_1.vec2U32; } }));
var vec3_f32_1 = __webpack_require__(/*! ./base-types/vec3-f32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec3-f32.ts");
Object.defineProperty(exports, "vec3F32", ({ enumerable: true, get: function () { return vec3_f32_1.vec3F32; } }));
var vec3_i32_1 = __webpack_require__(/*! ./base-types/vec3-i32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec3-i32.ts");
Object.defineProperty(exports, "vec3I32", ({ enumerable: true, get: function () { return vec3_i32_1.vec3I32; } }));
var vec3_u32_1 = __webpack_require__(/*! ./base-types/vec3-u32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec3-u32.ts");
Object.defineProperty(exports, "vec3U32", ({ enumerable: true, get: function () { return vec3_u32_1.vec3U32; } }));
var vec4_f32_1 = __webpack_require__(/*! ./base-types/vec4-f32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec4-f32.ts");
Object.defineProperty(exports, "vec4F32", ({ enumerable: true, get: function () { return vec4_f32_1.vec4F32; } }));
var vec4_i32_1 = __webpack_require__(/*! ./base-types/vec4-i32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec4-i32.ts");
Object.defineProperty(exports, "vec4I32", ({ enumerable: true, get: function () { return vec4_i32_1.vec4I32; } }));
var vec4_u32_1 = __webpack_require__(/*! ./base-types/vec4-u32 */ "./src/ts/webgpu-utils/host-shareable-types/base-types/vec4-u32.ts");
Object.defineProperty(exports, "vec4U32", ({ enumerable: true, get: function () { return vec4_u32_1.vec4U32; } }));
var indirect_draw_buffer_type_1 = __webpack_require__(/*! ./indirect-draw-buffer-type */ "./src/ts/webgpu-utils/host-shareable-types/indirect-draw-buffer-type.ts");
Object.defineProperty(exports, "indirectDrawBufferType", ({ enumerable: true, get: function () { return indirect_draw_buffer_type_1.indirectDrawBufferType; } }));
var struct_type_1 = __webpack_require__(/*! ./struct-type */ "./src/ts/webgpu-utils/host-shareable-types/struct-type.ts");
Object.defineProperty(exports, "StructType", ({ enumerable: true, get: function () { return struct_type_1.StructType; } }));


/***/ }),

/***/ "./src/ts/webgpu-utils/texture/texture-types.ts":
/*!******************************************************!*\
  !*** ./src/ts/webgpu-utils/texture/texture-types.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.textureTypes = void 0;
const textureTypes = {
    "r8unorm": { texelSize: 1 },
    "r8snorm": { texelSize: 1 },
    "r8uint": { texelSize: 1 },
    "r8sint": { texelSize: 1 },
    "r16uint": { texelSize: 2 },
    "r16sint": { texelSize: 2 },
    "r16float": { texelSize: 2 },
    "rg8unorm": { texelSize: 2 },
    "rg8snorm": { texelSize: 2 },
    "rg8uint": { texelSize: 2 },
    "rg8sint": { texelSize: 2 },
    "r32uint": { texelSize: 4 },
    "r32sint": { texelSize: 4 },
    "r32float": { texelSize: 4 },
    "rg16uint": { texelSize: 4 },
    "rg16sint": { texelSize: 4 },
    "rg16float": { texelSize: 4 },
    "rgba8unorm": { texelSize: 4 },
    "rgba8unorm-srgb": { texelSize: 4 },
    "rgba8snorm": { texelSize: 4 },
    "rgba8uint": { texelSize: 4 },
    "rgba8sint": { texelSize: 4 },
    "bgra8unorm": { texelSize: 4 },
    "bgra8unorm-srgb": { texelSize: 4 },
    "rgb9e5ufloat": { texelSize: 4 },
    "rgb10a2unorm": { texelSize: 4 },
    "rg11b10ufloat": { texelSize: 4 },
    "rg32uint": { texelSize: 8 },
    "rg32sint": { texelSize: 8 },
    "rg32float": { texelSize: 8 },
    "rgba16uint": { texelSize: 8 },
    "rgba16sint": { texelSize: 8 },
    "rgba16float": { texelSize: 8 },
    "rgba32uint": { texelSize: 16 },
    "rgba32sint": { texelSize: 16 },
    "rgba32float": { texelSize: 16 },
    "stencil8": { texelSize: 1 },
    "depth16unorm": { texelSize: 2 },
    "depth24plus": { texelSize: 4 },
    "depth24plus-stencil8": { texelSize: 4 },
    "depth32float": { texelSize: 4 },
    "depth32float-stencil8": { texelSize: 5 },
    "bc1-rgba-unorm": { texelSize: 8 },
    "bc1-rgba-unorm-srgb": { texelSize: 8 },
    "bc2-rgba-unorm": { texelSize: 16 },
    "bc2-rgba-unorm-srgb": { texelSize: 16 },
    "bc3-rgba-unorm": { texelSize: 16 },
    "bc3-rgba-unorm-srgb": { texelSize: 16 },
    "bc4-r-unorm": { texelSize: 8 },
    "bc4-r-snorm": { texelSize: 8 },
    "bc5-rg-unorm": { texelSize: 16 },
    "bc5-rg-snorm": { texelSize: 16 },
    "bc6h-rgb-ufloat": { texelSize: 16 },
    "bc6h-rgb-float": { texelSize: 16 },
    "bc7-rgba-unorm": { texelSize: 16 },
    "bc7-rgba-unorm-srgb": { texelSize: 16 },
    "etc2-rgb8unorm": { texelSize: 8 },
    "etc2-rgb8unorm-srgb": { texelSize: 8 },
    "etc2-rgb8a1unorm": { texelSize: 8 },
    "etc2-rgb8a1unorm-srgb": { texelSize: 8 },
    "etc2-rgba8unorm": { texelSize: 16 },
    "etc2-rgba8unorm-srgb": { texelSize: 16 },
    "eac-r11unorm": { texelSize: 8 },
    "eac-r11snorm": { texelSize: 8 },
    "eac-rg11unorm": { texelSize: 16 },
    "eac-rg11snorm": { texelSize: 16 },
    "astc-4x4-unorm": { texelSize: 16 },
    "astc-4x4-unorm-srgb": { texelSize: 16 },
    "astc-5x4-unorm": { texelSize: 16 },
    "astc-5x4-unorm-srgb": { texelSize: 16 },
    "astc-5x5-unorm": { texelSize: 16 },
    "astc-5x5-unorm-srgb": { texelSize: 16 },
    "astc-6x5-unorm": { texelSize: 16 },
    "astc-6x5-unorm-srgb": { texelSize: 16 },
    "astc-6x6-unorm": { texelSize: 16 },
    "astc-6x6-unorm-srgb": { texelSize: 16 },
    "astc-8x5-unorm": { texelSize: 16 },
    "astc-8x5-unorm-srgb": { texelSize: 16 },
    "astc-8x6-unorm": { texelSize: 16 },
    "astc-8x6-unorm-srgb": { texelSize: 16 },
    "astc-8x8-unorm": { texelSize: 16 },
    "astc-8x8-unorm-srgb": { texelSize: 16 },
    "astc-10x5-unorm": { texelSize: 16 },
    "astc-10x5-unorm-srgb": { texelSize: 16 },
    "astc-10x6-unorm": { texelSize: 16 },
    "astc-10x6-unorm-srgb": { texelSize: 16 },
    "astc-10x8-unorm": { texelSize: 16 },
    "astc-10x8-unorm-srgb": { texelSize: 16 },
    "astc-10x10-unorm": { texelSize: 16 },
    "astc-10x10-unorm-srgb": { texelSize: 16 },
    "astc-12x10-unorm": { texelSize: 16 },
    "astc-12x10-unorm-srgb": { texelSize: 16 },
    "astc-12x12-unorm": { texelSize: 16 },
    "astc-12x12-unorm-srgb": { texelSize: 16 },
};
exports.textureTypes = textureTypes;


/***/ }),

/***/ "./src/ts/webgpu-utils/texture/texture.ts":
/*!************************************************!*\
  !*** ./src/ts/webgpu-utils/texture/texture.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Texture = void 0;
const MemoryMetrics = __importStar(__webpack_require__(/*! ../helpers/memory-metrics */ "./src/ts/webgpu-utils/helpers/memory-metrics.ts"));
const texture_types_1 = __webpack_require__(/*! ./texture-types */ "./src/ts/webgpu-utils/texture/texture-types.ts");
function computeMemoryCost(width, height, format) {
    const texelSize = texture_types_1.textureTypes[format];
    return width * height * texelSize.texelSize;
}
class Texture {
    constructor(device, format, usage) {
        this.device = device;
        this.format = format;
        this.usage = usage;
        this.width = 1;
        this.height = 1;
        this.texture = null;
    }
    get() {
        if (!this.texture) {
            if (this.width <= 0 || this.height <= 0) {
                throw new Error(`Invalid texture size ${this.width}x${this.height}.`);
            }
            this.texture = this.device.createTexture({
                size: [this.width, this.height],
                format: this.format,
                usage: this.usage,
            });
            const width = this.texture.width;
            const height = this.texture.height;
            MemoryMetrics.registerAllocation({
                objectType: Texture.objectType,
                objectSizeInBytes: computeMemoryCost(width, height, this.format),
                properties: `${width}x${height}, ${this.format}`,
            });
        }
        return this.texture;
    }
    getView(descriptor) {
        return this.get().createView(descriptor);
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setSize(width, height) {
        if (this.width !== width || this.height !== height) {
            this.width = width;
            this.height = height;
            this.free();
            return true;
        }
        return false;
    }
    hasUsage(usage) {
        return (this.usage & usage) === usage;
    }
    free() {
        if (this.texture) {
            const width = this.texture.width;
            const height = this.texture.height;
            this.texture.destroy();
            this.texture = null;
            MemoryMetrics.registerDestruction({
                objectType: Texture.objectType,
                objectSizeInBytes: computeMemoryCost(width, height, this.format),
                properties: `${width}x${height}, ${this.format}`,
            });
        }
    }
}
exports.Texture = Texture;
Texture.objectType = "GPUTexture";


/***/ }),

/***/ "./src/ts/webgpu-utils/uniforms-buffer.ts":
/*!************************************************!*\
  !*** ./src/ts/webgpu-utils/uniforms-buffer.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StructType = exports.UniformsBuffer = void 0;
const utils_1 = __webpack_require__(/*! ./helpers/utils */ "./src/ts/webgpu-utils/helpers/utils.ts");
const struct_type_1 = __webpack_require__(/*! ./host-shareable-types/struct-type */ "./src/ts/webgpu-utils/host-shareable-types/struct-type.ts");
Object.defineProperty(exports, "StructType", ({ enumerable: true, get: function () { return struct_type_1.StructType; } }));
const webgpu_buffer_1 = __webpack_require__(/*! ./webgpu-buffer */ "./src/ts/webgpu-utils/webgpu-buffer.ts");
class UniformsBuffer {
    constructor(device, attributesDefinitions) {
        this.needsToUpload = true;
        this.device = device;
        this.structType = new struct_type_1.StructType("Uniforms", attributesDefinitions);
        if (UniformsBuffer.tryToOptimize && !this.structType.isCompact()) {
            const bestPermutation = UniformsBuffer.compact(attributesDefinitions);
            const bestStructType = new struct_type_1.StructType("Uniforms", bestPermutation);
            if (bestStructType.size < this.structType.size) {
                console.warn(`Uniforms could be more compact.\nCurrent is of size ${this.structType.size}:\n${this.structType}\n\nwhile best is of size ${bestStructType.size}:\n${bestStructType}`);
            }
        }
        this.data = new ArrayBuffer(this.structType.size);
        this.gpuBuffer = new webgpu_buffer_1.WebGPUBuffer(this.device, {
            size: this.structType.size,
            usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM,
        });
    }
    get bindingResource() {
        return this.gpuBuffer.bindingResource;
    }
    setValueFromName(name, value) {
        this.structType.setValueFromName(this.data, 0, name, value);
        this.needsToUpload = true;
    }
    uploadToGPU() {
        if (this.needsToUpload) {
            this.device.queue.writeBuffer(this.gpuBuffer.gpuBuffer, 0, this.data);
            this.needsToUpload = false;
        }
    }
    toString() {
        return this.structType.toString();
    }
    free() {
        this.gpuBuffer.free();
    }
    static compact(attributesDefinitions) {
        let bestPermutation = attributesDefinitions;
        let minSize = new struct_type_1.StructType("Uniforms", attributesDefinitions).size;
        for (const permutation of (0, utils_1.iterateOnAllPermutations)(attributesDefinitions)) {
            const size = new struct_type_1.StructType("Uniforms", permutation).size;
            if (size < minSize) {
                minSize = size;
                bestPermutation = permutation;
            }
        }
        return bestPermutation;
    }
}
exports.UniformsBuffer = UniformsBuffer;
UniformsBuffer.tryToOptimize = true;


/***/ }),

/***/ "./src/ts/webgpu-utils/webgpu-buffer.ts":
/*!**********************************************!*\
  !*** ./src/ts/webgpu-utils/webgpu-buffer.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebGPUBuffer = void 0;
const MemoryMetrics = __importStar(__webpack_require__(/*! ./helpers/memory-metrics */ "./src/ts/webgpu-utils/helpers/memory-metrics.ts"));
class WebGPUBuffer {
    constructor(device, descriptor) {
        this.device = device;
        this.buffer = null;
        this.size = descriptor.size;
        this.usage = descriptor.usage;
    }
    get gpuBuffer() {
        if (!this.buffer) {
            this.buffer = this.createBuffer({
                size: this.size,
                usage: this.usage,
            });
        }
        return this.buffer;
    }
    get bindingResource() {
        return { buffer: this.gpuBuffer };
    }
    getMappedRange(offset, size) {
        if (!this.buffer) {
            this.buffer = this.createBuffer({
                size: this.size,
                usage: this.usage,
                mappedAtCreation: true,
            });
        }
        if (this.buffer.mapState !== "mapped") {
            throw new Error();
        }
        return this.buffer.getMappedRange(offset, size);
    }
    unmap() {
        if (!this.buffer || this.buffer.mapState !== "mapped") {
            throw new Error();
        }
        this.buffer.unmap();
    }
    hasUsage(usage) {
        return (this.usage & usage) === usage;
    }
    free() {
        if (this.buffer) {
            this.buffer.destroy();
            this.buffer = null;
            MemoryMetrics.registerDestruction({
                objectType: WebGPUBuffer.objectType,
                objectSizeInBytes: this.size,
            });
        }
    }
    createBuffer(descriptor) {
        const buffer = this.device.createBuffer(descriptor);
        MemoryMetrics.registerAllocation({
            objectType: WebGPUBuffer.objectType,
            objectSizeInBytes: this.size,
        });
        return buffer;
    }
}
exports.WebGPUBuffer = WebGPUBuffer;
WebGPUBuffer.objectType = "GPUBuffer";


/***/ }),

/***/ "./src/ts/webgpu-utils/webgpu-canvas.ts":
/*!**********************************************!*\
  !*** ./src/ts/webgpu-utils/webgpu-canvas.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebGPUCanvas = void 0;
const texture_1 = __webpack_require__(/*! ./texture/texture */ "./src/ts/webgpu-utils/texture/texture.ts");
const WebGPU = __importStar(__webpack_require__(/*! ./webgpu-device */ "./src/ts/webgpu-utils/webgpu-device.ts"));
class WebGPUCanvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.devicePixelRatio = window.devicePixelRatio;
        {
            const contextName = "webgpu";
            const context = canvas.getContext(contextName);
            if (!context) {
                throw new Error(`Failed to get a '${contextName}' context from canvas.`);
            }
            this.context = context;
        }
        const device = WebGPU.device;
        if (!device) {
            throw new Error("No GPU device");
        }
        this.canvasConfiguration = {
            device,
            format: navigator.gpu.getPreferredCanvasFormat(),
            usage: GPUTextureUsage.RENDER_ATTACHMENT,
            alphaMode: "opaque",
            // no "size" attribute to use the canvas' width and height
        };
        this.context.configure(this.canvasConfiguration);
        this.depthTexture = new texture_1.Texture(device, "depth16unorm", GPUTextureUsage.RENDER_ATTACHMENT);
        this.depthTextureView = this.depthTexture.getView();
        this.textureFormat = this.canvasConfiguration.format;
        this.clearColor = { r: 0, g: 0, b: 0, a: 1 };
        this.adjustSize();
    }
    get aspectRatio() {
        return this.width / this.height;
    }
    get device() {
        return this.canvasConfiguration.device;
    }
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.height;
    }
    get depthTextureFormat() {
        return this.depthTexture.format;
    }
    setClearColor(color) {
        this.clearColor.r = color[0];
        this.clearColor.g = color[1];
        this.clearColor.b = color[2];
        this.clearColor.a = color[3];
    }
    adjustSize() {
        const actualWidth = Math.floor(this.devicePixelRatio * this.canvas.clientWidth);
        const actualHeight = Math.floor(this.devicePixelRatio * this.canvas.clientHeight);
        if (this.canvas.width !== actualWidth || this.canvas.height !== actualHeight) {
            this.canvas.width = actualWidth;
            this.canvas.height = actualHeight;
            if (this.depthTexture.setSize(this.canvas.width, this.canvas.height)) {
                this.depthTextureView = this.depthTexture.getView();
            }
        }
    }
    beginRenderPass(commandEncoder, options) {
        const renderPassDescriptor = this.getRenderPassDescriptor(options);
        const renderPassEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        renderPassEncoder.setViewport(0, 0, this.width, this.height, 0, 1);
        renderPassEncoder.setScissorRect(0, 0, this.width, this.height);
        return renderPassEncoder;
    }
    getRenderPassDescriptor(options) {
        return {
            colorAttachments: [{
                    view: this.context.getCurrentTexture().createView(),
                    clearValue: this.clearColor,
                    loadOp: ((options === null || options === void 0 ? void 0 : options.clearColor) === false) ? "load" : "clear",
                    storeOp: "store",
                }],
            depthStencilAttachment: {
                view: this.depthTextureView,
                depthClearValue: 1,
                depthLoadOp: ((options === null || options === void 0 ? void 0 : options.clearDepth) === false) ? "load" : "clear",
                depthStoreOp: "store",
                stencilReadOnly: true,
            },
        };
    }
}
exports.WebGPUCanvas = WebGPUCanvas;


/***/ }),

/***/ "./src/ts/webgpu-utils/webgpu-device.ts":
/*!**********************************************!*\
  !*** ./src/ts/webgpu-utils/webgpu-device.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


/// <reference types="../page-interface-generated" />
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.initialize = exports.gpu = exports.device = exports.adapter = void 0;
function throwAndDisplayException(id, message) {
    Page.Demopage.setErrorMessage(id, message);
    Page.Canvas.toggleFullscreen(false);
    throw new Error(message);
}
const gpu = navigator.gpu;
exports.gpu = gpu;
if (!gpu) {
    throwAndDisplayException("webgpu-support", "Your browser does not seem to support WebGPU.");
}
let adapter = null;
exports.adapter = adapter;
let device = null;
exports.device = device;
async function requestDevice() {
    if (!device) {
        exports.adapter = adapter = await gpu.requestAdapter({
            powerPreference: "high-performance"
        });
        if (adapter) {
            if (adapter.isFallbackAdapter) {
                Page.Demopage.setErrorMessage("webgpu-is-fallback", "The retrieved GPU adapter is fallback. The performance might be degraded.");
            }
            exports.device = device = await adapter.requestDevice();
        }
        else {
            throwAndDisplayException("webgpu-adapter", "Request for GPU adapter failed.");
        }
    }
    return device;
}
exports.initialize = requestDevice;


/***/ }),

/***/ "./src/ts/webgpu-utils/webgpu-shader-module.ts":
/*!*****************************************************!*\
  !*** ./src/ts/webgpu-utils/webgpu-shader-module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShaderModule = void 0;
class ShaderModule {
    static create(device, data) {
        let code = data.code;
        if (data.injected) {
            for (const [key, value] of Object.entries(data.injected)) {
                code = code.replace(key, value);
            }
        }
        if (data.structs) {
            const structsAsString = data.structs.map(struct => struct.toString());
            code = structsAsString.join("\n\n") + "\n\n" + code;
        }
        if (data.aliases) {
            const aliasesAsString = Object.entries(data.aliases).map(([name, value]) => {
                return `alias ${name} = ${value};`;
            });
            code = aliasesAsString.join("\n") + "\n\n" + code;
        }
        return device.createShaderModule({ code });
    }
}
exports.ShaderModule = ShaderModule;


/***/ }),

/***/ "./src/ts/webgpu-utils/webgpu-utils.ts":
/*!*********************************************!*\
  !*** ./src/ts/webgpu-utils/webgpu-utils.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShaderModule = exports.Canvas = exports.Buffer = exports.Uniforms = exports.Texture = exports.Types = void 0;
exports.Types = __importStar(__webpack_require__(/*! ./host-shareable-types/types */ "./src/ts/webgpu-utils/host-shareable-types/types.ts"));
var texture_1 = __webpack_require__(/*! ./texture/texture */ "./src/ts/webgpu-utils/texture/texture.ts");
Object.defineProperty(exports, "Texture", ({ enumerable: true, get: function () { return texture_1.Texture; } }));
var uniforms_buffer_1 = __webpack_require__(/*! ./uniforms-buffer */ "./src/ts/webgpu-utils/uniforms-buffer.ts");
Object.defineProperty(exports, "Uniforms", ({ enumerable: true, get: function () { return uniforms_buffer_1.UniformsBuffer; } }));
var webgpu_buffer_1 = __webpack_require__(/*! ./webgpu-buffer */ "./src/ts/webgpu-utils/webgpu-buffer.ts");
Object.defineProperty(exports, "Buffer", ({ enumerable: true, get: function () { return webgpu_buffer_1.WebGPUBuffer; } }));
var webgpu_canvas_1 = __webpack_require__(/*! ./webgpu-canvas */ "./src/ts/webgpu-utils/webgpu-canvas.ts");
Object.defineProperty(exports, "Canvas", ({ enumerable: true, get: function () { return webgpu_canvas_1.WebGPUCanvas; } }));
__exportStar(__webpack_require__(/*! ./webgpu-device */ "./src/ts/webgpu-utils/webgpu-device.ts"), exports);
var webgpu_shader_module_1 = __webpack_require__(/*! ./webgpu-shader-module */ "./src/ts/webgpu-utils/webgpu-shader-module.ts");
Object.defineProperty(exports, "ShaderModule", ({ enumerable: true, get: function () { return webgpu_shader_module_1.ShaderModule; } }));


/***/ }),

/***/ "./src/models/capsules.obj":
/*!*********************************!*\
  !*** ./src/models/capsules.obj ***!
  \*********************************/
/***/ ((module) => {

module.exports = "v 0.500000 0.555557 0.173766\r\nv 0.500000 0.583147 0.116107\r\nv 0.500000 0.598079 0.040771\r\nv 0.500000 0.600000 -0.000000\r\nv 0.500000 0.598079 -0.040771\r\nv 0.500000 0.583147 -0.116107\r\nv 0.503806 0.519134 0.204971\r\nv 0.507466 0.537533 0.193079\r\nv 0.510839 0.554490 0.173766\r\nv 0.513795 0.569352 0.147776\r\nv 0.516221 0.581549 0.116107\r\nv 0.518024 0.590613 0.079976\r\nv 0.519134 0.596194 0.040771\r\nv 0.519509 0.598079 -0.000000\r\nv 0.519134 0.596194 -0.040771\r\nv 0.518024 0.590613 -0.079976\r\nv 0.516221 0.581549 -0.116107\r\nv 0.513795 0.569352 -0.147776\r\nv 0.510839 0.554489 -0.173766\r\nv 0.507466 0.537533 -0.193079\r\nv 0.503806 0.519134 -0.204971\r\nv 0.507466 0.518024 0.204971\r\nv 0.514645 0.535355 0.193079\r\nv 0.521261 0.551328 0.173766\r\nv 0.527060 0.565328 0.147776\r\nv 0.531819 0.576818 0.116107\r\nv 0.535355 0.585355 0.079976\r\nv 0.537533 0.590613 0.040771\r\nv 0.538268 0.592388 -0.000000\r\nv 0.537533 0.590613 -0.040771\r\nv 0.535355 0.585355 -0.079976\r\nv 0.531819 0.576818 -0.116107\r\nv 0.527060 0.565328 -0.147776\r\nv 0.521261 0.551328 -0.173766\r\nv 0.514645 0.535355 -0.193079\r\nv 0.507466 0.518024 -0.204971\r\nv 0.510839 0.516221 0.204971\r\nv 0.521261 0.531819 0.193079\r\nv 0.530866 0.546194 0.173766\r\nv 0.539285 0.558794 0.147776\r\nv 0.546194 0.569134 0.116107\r\nv 0.551328 0.576818 0.079976\r\nv 0.554489 0.581549 0.040771\r\nv 0.555557 0.583147 -0.000000\r\nv 0.554489 0.581549 -0.040771\r\nv 0.551328 0.576818 -0.079976\r\nv 0.546194 0.569134 -0.116107\r\nv 0.539285 0.558794 -0.147776\r\nv 0.530866 0.546194 -0.173766\r\nv 0.521261 0.531819 -0.193079\r\nv 0.510839 0.516221 -0.204971\r\nv 0.513795 0.513795 0.204971\r\nv 0.527060 0.527060 0.193079\r\nv 0.539285 0.539285 0.173766\r\nv 0.550000 0.550000 0.147776\r\nv 0.558794 0.558794 0.116107\r\nv 0.565328 0.565328 0.079976\r\nv 0.569352 0.569352 0.040771\r\nv 0.570711 0.570711 -0.000000\r\nv 0.569352 0.569352 -0.040771\r\nv 0.565328 0.565328 -0.079976\r\nv 0.558794 0.558794 -0.116107\r\nv 0.550000 0.550000 -0.147776\r\nv 0.539285 0.539285 -0.173766\r\nv 0.527060 0.527060 -0.193079\r\nv 0.513795 0.513795 -0.204971\r\nv 0.516221 0.510839 0.204971\r\nv 0.531819 0.521261 0.193079\r\nv 0.546194 0.530866 0.173766\r\nv 0.558794 0.539285 0.147776\r\nv 0.569134 0.546194 0.116107\r\nv 0.576818 0.551328 0.079976\r\nv 0.581549 0.554489 0.040771\r\nv 0.583147 0.555557 -0.000000\r\nv 0.581549 0.554489 -0.040771\r\nv 0.576818 0.551328 -0.079976\r\nv 0.569134 0.546194 -0.116107\r\nv 0.558794 0.539285 -0.147776\r\nv 0.546194 0.530866 -0.173766\r\nv 0.531819 0.521261 -0.193079\r\nv 0.516221 0.510839 -0.204971\r\nv 0.500000 0.500000 0.208987\r\nv 0.518024 0.507466 0.204971\r\nv 0.535355 0.514645 0.193079\r\nv 0.551328 0.521261 0.173766\r\nv 0.565328 0.527060 0.147776\r\nv 0.576818 0.531819 0.116107\r\nv 0.585355 0.535355 0.079976\r\nv 0.590613 0.537533 0.040771\r\nv 0.592388 0.538268 -0.000000\r\nv 0.590613 0.537533 -0.040771\r\nv 0.585355 0.535355 -0.079976\r\nv 0.576818 0.531819 -0.116107\r\nv 0.565328 0.527060 -0.147776\r\nv 0.551328 0.521261 -0.173766\r\nv 0.535355 0.514645 -0.193079\r\nv 0.518024 0.507466 -0.204971\r\nv 0.519134 0.503806 0.204971\r\nv 0.537533 0.507466 0.193079\r\nv 0.554489 0.510839 0.173766\r\nv 0.569352 0.513795 0.147776\r\nv 0.581549 0.516221 0.116107\r\nv 0.590613 0.518024 0.079976\r\nv 0.596194 0.519134 0.040771\r\nv 0.598079 0.519509 -0.000000\r\nv 0.596194 0.519134 -0.040771\r\nv 0.590613 0.518024 -0.079976\r\nv 0.581549 0.516221 -0.116107\r\nv 0.569352 0.513795 -0.147776\r\nv 0.554489 0.510839 -0.173766\r\nv 0.537533 0.507466 -0.193079\r\nv 0.519134 0.503806 -0.204971\r\nv 0.519509 0.500000 0.204971\r\nv 0.538268 0.500000 0.193079\r\nv 0.555557 0.500000 0.173766\r\nv 0.570711 0.500000 0.147776\r\nv 0.583147 0.500000 0.116107\r\nv 0.592388 0.500000 0.079976\r\nv 0.598079 0.500000 0.040771\r\nv 0.600000 0.500000 -0.000000\r\nv 0.598079 0.500000 -0.040771\r\nv 0.592388 0.500000 -0.079976\r\nv 0.583147 0.500000 -0.116107\r\nv 0.570711 0.500000 -0.147776\r\nv 0.555557 0.500000 -0.173766\r\nv 0.538268 0.500000 -0.193079\r\nv 0.519509 0.500000 -0.204971\r\nv 0.519134 0.496194 0.204971\r\nv 0.537533 0.492534 0.193079\r\nv 0.554489 0.489161 0.173766\r\nv 0.569352 0.486205 0.147776\r\nv 0.581549 0.483779 0.116107\r\nv 0.590613 0.481976 0.079976\r\nv 0.596194 0.480866 0.040771\r\nv 0.598078 0.480491 0.000000\r\nv 0.596194 0.480866 -0.040771\r\nv 0.590613 0.481976 -0.079976\r\nv 0.581549 0.483779 -0.116107\r\nv 0.569352 0.486205 -0.147776\r\nv 0.554489 0.489161 -0.173766\r\nv 0.537533 0.492534 -0.193079\r\nv 0.519134 0.496194 -0.204971\r\nv 0.518024 0.492534 0.204971\r\nv 0.535355 0.485355 0.193079\r\nv 0.551328 0.478739 0.173766\r\nv 0.565328 0.472940 0.147776\r\nv 0.576818 0.468181 0.116107\r\nv 0.585355 0.464645 0.079976\r\nv 0.590613 0.462467 0.040771\r\nv 0.592388 0.461732 0.000000\r\nv 0.590613 0.462467 -0.040771\r\nv 0.585355 0.464645 -0.079976\r\nv 0.576818 0.468181 -0.116107\r\nv 0.565328 0.472940 -0.147776\r\nv 0.551328 0.478739 -0.173766\r\nv 0.535355 0.485355 -0.193079\r\nv 0.518024 0.492534 -0.204971\r\nv 0.516221 0.489161 0.204971\r\nv 0.531819 0.478739 0.193079\r\nv 0.546194 0.469134 0.173766\r\nv 0.558794 0.460715 0.147776\r\nv 0.569134 0.453806 0.116107\r\nv 0.576818 0.448672 0.079976\r\nv 0.581549 0.445510 0.040771\r\nv 0.583147 0.444443 0.000000\r\nv 0.581549 0.445510 -0.040771\r\nv 0.576818 0.448672 -0.079976\r\nv 0.569134 0.453806 -0.116107\r\nv 0.558794 0.460715 -0.147776\r\nv 0.546194 0.469134 -0.173766\r\nv 0.531819 0.478739 -0.193079\r\nv 0.516221 0.489161 -0.204971\r\nv 0.513795 0.486205 0.204971\r\nv 0.527060 0.472940 0.193079\r\nv 0.539285 0.460715 0.173766\r\nv 0.550000 0.450000 0.147776\r\nv 0.558794 0.441206 0.116107\r\nv 0.565328 0.434672 0.079976\r\nv 0.569352 0.430648 0.040771\r\nv 0.570711 0.429289 0.000000\r\nv 0.569352 0.430648 -0.040771\r\nv 0.565328 0.434672 -0.079976\r\nv 0.558794 0.441206 -0.116107\r\nv 0.550000 0.450000 -0.147776\r\nv 0.539285 0.460715 -0.173766\r\nv 0.527060 0.472940 -0.193079\r\nv 0.513795 0.486205 -0.204971\r\nv 0.510839 0.483779 0.204971\r\nv 0.521261 0.468181 0.193079\r\nv 0.530866 0.453806 0.173766\r\nv 0.539285 0.441206 0.147776\r\nv 0.546194 0.430866 0.116107\r\nv 0.551328 0.423182 0.079976\r\nv 0.554489 0.418451 0.040771\r\nv 0.555557 0.416853 0.000000\r\nv 0.554489 0.418451 -0.040771\r\nv 0.551328 0.423182 -0.079976\r\nv 0.546194 0.430866 -0.116107\r\nv 0.539285 0.441206 -0.147776\r\nv 0.530866 0.453806 -0.173766\r\nv 0.521261 0.468181 -0.193079\r\nv 0.510839 0.483779 -0.204971\r\nv 0.507466 0.481976 0.204971\r\nv 0.514645 0.464645 0.193079\r\nv 0.521261 0.448672 0.173766\r\nv 0.527060 0.434672 0.147776\r\nv 0.531819 0.423182 0.116107\r\nv 0.535355 0.414645 0.079976\r\nv 0.537533 0.409387 0.040771\r\nv 0.538268 0.407612 0.000000\r\nv 0.537533 0.409387 -0.040771\r\nv 0.535355 0.414645 -0.079976\r\nv 0.531819 0.423182 -0.116107\r\nv 0.527060 0.434672 -0.147776\r\nv 0.521261 0.448672 -0.173766\r\nv 0.514645 0.464645 -0.193079\r\nv 0.507466 0.481976 -0.204971\r\nv 0.503806 0.480866 0.204971\r\nv 0.507466 0.462467 0.193079\r\nv 0.510839 0.445511 0.173766\r\nv 0.513795 0.430648 0.147776\r\nv 0.516221 0.418451 0.116107\r\nv 0.518024 0.409387 0.079976\r\nv 0.519134 0.403806 0.040771\r\nv 0.519509 0.401922 0.000000\r\nv 0.519134 0.403806 -0.040771\r\nv 0.518024 0.409387 -0.079976\r\nv 0.516221 0.418451 -0.116107\r\nv 0.513795 0.430648 -0.147776\r\nv 0.510839 0.445511 -0.173766\r\nv 0.507466 0.462467 -0.193079\r\nv 0.503806 0.480866 -0.204971\r\nv 0.500000 0.480491 0.204971\r\nv 0.500000 0.461732 0.193079\r\nv 0.500000 0.444443 0.173766\r\nv 0.500000 0.429289 0.147776\r\nv 0.500000 0.416853 0.116107\r\nv 0.500000 0.407612 0.079976\r\nv 0.500000 0.401921 0.040771\r\nv 0.500000 0.400000 0.000000\r\nv 0.500000 0.401921 -0.040771\r\nv 0.500000 0.407612 -0.079976\r\nv 0.500000 0.416853 -0.116107\r\nv 0.500000 0.429289 -0.147776\r\nv 0.500000 0.444443 -0.173766\r\nv 0.500000 0.461732 -0.193079\r\nv 0.500000 0.480491 -0.204971\r\nv 0.496194 0.480866 0.204971\r\nv 0.492534 0.462467 0.193079\r\nv 0.489161 0.445511 0.173766\r\nv 0.486205 0.430648 0.147776\r\nv 0.483779 0.418451 0.116107\r\nv 0.481976 0.409387 0.079976\r\nv 0.480866 0.403806 0.040771\r\nv 0.480491 0.401922 0.000000\r\nv 0.480866 0.403806 -0.040771\r\nv 0.481976 0.409387 -0.079976\r\nv 0.483779 0.418451 -0.116107\r\nv 0.486205 0.430648 -0.147776\r\nv 0.489161 0.445511 -0.173766\r\nv 0.492534 0.462467 -0.193079\r\nv 0.496194 0.480866 -0.204971\r\nv 0.492534 0.481976 0.204971\r\nv 0.485355 0.464645 0.193079\r\nv 0.478739 0.448672 0.173766\r\nv 0.472940 0.434672 0.147776\r\nv 0.468181 0.423182 0.116107\r\nv 0.464645 0.414645 0.079976\r\nv 0.462467 0.409387 0.040771\r\nv 0.461732 0.407612 0.000000\r\nv 0.462467 0.409387 -0.040771\r\nv 0.464645 0.414645 -0.079976\r\nv 0.468181 0.423182 -0.116107\r\nv 0.472940 0.434672 -0.147776\r\nv 0.478739 0.448672 -0.173766\r\nv 0.485355 0.464645 -0.193079\r\nv 0.492534 0.481976 -0.204971\r\nv 0.489161 0.483779 0.204971\r\nv 0.478739 0.468181 0.193079\r\nv 0.469134 0.453806 0.173766\r\nv 0.460715 0.441206 0.147776\r\nv 0.453806 0.430866 0.116107\r\nv 0.448672 0.423182 0.079976\r\nv 0.445510 0.418451 0.040771\r\nv 0.444443 0.416853 0.000000\r\nv 0.445510 0.418451 -0.040771\r\nv 0.448672 0.423182 -0.079976\r\nv 0.453806 0.430866 -0.116107\r\nv 0.460715 0.441206 -0.147776\r\nv 0.469134 0.453806 -0.173766\r\nv 0.478739 0.468181 -0.193079\r\nv 0.489161 0.483779 -0.204971\r\nv 0.486205 0.486205 0.204971\r\nv 0.472940 0.472940 0.193079\r\nv 0.460715 0.460715 0.173766\r\nv 0.450000 0.450000 0.147776\r\nv 0.441206 0.441206 0.116107\r\nv 0.434672 0.434672 0.079976\r\nv 0.430648 0.430648 0.040771\r\nv 0.429289 0.429289 0.000000\r\nv 0.430648 0.430648 -0.040771\r\nv 0.434672 0.434672 -0.079976\r\nv 0.441206 0.441206 -0.116107\r\nv 0.450000 0.450000 -0.147776\r\nv 0.460715 0.460715 -0.173766\r\nv 0.472940 0.472940 -0.193079\r\nv 0.486205 0.486205 -0.204971\r\nv 0.500000 0.500000 -0.208987\r\nv 0.483779 0.489161 0.204971\r\nv 0.468181 0.478739 0.193079\r\nv 0.453806 0.469134 0.173766\r\nv 0.441206 0.460715 0.147776\r\nv 0.430866 0.453806 0.116107\r\nv 0.423182 0.448672 0.079976\r\nv 0.418451 0.445511 0.040771\r\nv 0.416853 0.444443 0.000000\r\nv 0.418451 0.445511 -0.040771\r\nv 0.423182 0.448672 -0.079976\r\nv 0.430866 0.453806 -0.116107\r\nv 0.441206 0.460715 -0.147776\r\nv 0.453806 0.469134 -0.173766\r\nv 0.468181 0.478739 -0.193079\r\nv 0.483779 0.489161 -0.204971\r\nv 0.481976 0.492534 0.204971\r\nv 0.464645 0.485355 0.193079\r\nv 0.448672 0.478739 0.173766\r\nv 0.434672 0.472940 0.147776\r\nv 0.423182 0.468181 0.116107\r\nv 0.414645 0.464645 0.079976\r\nv 0.409387 0.462467 0.040771\r\nv 0.407612 0.461732 0.000000\r\nv 0.409387 0.462467 -0.040771\r\nv 0.414645 0.464645 -0.079976\r\nv 0.423182 0.468181 -0.116107\r\nv 0.434672 0.472940 -0.147776\r\nv 0.448672 0.478739 -0.173766\r\nv 0.464645 0.485355 -0.193079\r\nv 0.481976 0.492534 -0.204971\r\nv 0.480866 0.496194 0.204971\r\nv 0.462467 0.492534 0.193079\r\nv 0.445511 0.489161 0.173766\r\nv 0.430648 0.486205 0.147776\r\nv 0.418451 0.483779 0.116107\r\nv 0.409387 0.481976 0.079976\r\nv 0.403806 0.480866 0.040771\r\nv 0.401922 0.480491 0.000000\r\nv 0.403806 0.480866 -0.040771\r\nv 0.409387 0.481976 -0.079976\r\nv 0.418451 0.483779 -0.116107\r\nv 0.430648 0.486205 -0.147776\r\nv 0.445511 0.489161 -0.173766\r\nv 0.462467 0.492534 -0.193079\r\nv 0.480866 0.496194 -0.204971\r\nv 0.480491 0.500000 0.204971\r\nv 0.461732 0.500000 0.193079\r\nv 0.444443 0.500000 0.173766\r\nv 0.429289 0.500000 0.147776\r\nv 0.416853 0.500000 0.116107\r\nv 0.407612 0.500000 0.079976\r\nv 0.401922 0.500000 0.040771\r\nv 0.400000 0.500000 -0.000000\r\nv 0.401922 0.500000 -0.040771\r\nv 0.407612 0.500000 -0.079976\r\nv 0.416853 0.500000 -0.116107\r\nv 0.429289 0.500000 -0.147776\r\nv 0.444443 0.500000 -0.173766\r\nv 0.461732 0.500000 -0.193079\r\nv 0.480491 0.500000 -0.204971\r\nv 0.480866 0.503806 0.204971\r\nv 0.462467 0.507466 0.193079\r\nv 0.445511 0.510839 0.173766\r\nv 0.430648 0.513795 0.147776\r\nv 0.418451 0.516221 0.116107\r\nv 0.409387 0.518024 0.079976\r\nv 0.403806 0.519134 0.040771\r\nv 0.401922 0.519509 -0.000000\r\nv 0.403806 0.519134 -0.040771\r\nv 0.409387 0.518024 -0.079976\r\nv 0.418451 0.516221 -0.116107\r\nv 0.430648 0.513795 -0.147776\r\nv 0.445511 0.510839 -0.173766\r\nv 0.462467 0.507466 -0.193079\r\nv 0.480866 0.503806 -0.204971\r\nv 0.481976 0.507466 0.204971\r\nv 0.464645 0.514645 0.193079\r\nv 0.448672 0.521261 0.173766\r\nv 0.434672 0.527060 0.147776\r\nv 0.423182 0.531819 0.116107\r\nv 0.414645 0.535355 0.079976\r\nv 0.409387 0.537533 0.040771\r\nv 0.407612 0.538268 -0.000000\r\nv 0.409387 0.537533 -0.040771\r\nv 0.414645 0.535355 -0.079976\r\nv 0.423182 0.531819 -0.116107\r\nv 0.434672 0.527060 -0.147776\r\nv 0.448672 0.521261 -0.173766\r\nv 0.464645 0.514645 -0.193079\r\nv 0.481976 0.507466 -0.204971\r\nv 0.483779 0.510839 0.204971\r\nv 0.468181 0.521261 0.193079\r\nv 0.453806 0.530866 0.173766\r\nv 0.441206 0.539285 0.147776\r\nv 0.430866 0.546194 0.116107\r\nv 0.423182 0.551328 0.079976\r\nv 0.418451 0.554489 0.040771\r\nv 0.416853 0.555557 -0.000000\r\nv 0.418451 0.554489 -0.040771\r\nv 0.423182 0.551328 -0.079976\r\nv 0.430866 0.546194 -0.116107\r\nv 0.441206 0.539285 -0.147776\r\nv 0.453806 0.530866 -0.173766\r\nv 0.468181 0.521261 -0.193079\r\nv 0.483779 0.510839 -0.204971\r\nv 0.486205 0.513795 0.204971\r\nv 0.472940 0.527060 0.193079\r\nv 0.460715 0.539285 0.173766\r\nv 0.450000 0.550000 0.147776\r\nv 0.441206 0.558794 0.116107\r\nv 0.434672 0.565328 0.079976\r\nv 0.430648 0.569352 0.040771\r\nv 0.429289 0.570711 -0.000000\r\nv 0.430648 0.569352 -0.040771\r\nv 0.434672 0.565328 -0.079976\r\nv 0.441206 0.558794 -0.116107\r\nv 0.450000 0.550000 -0.147776\r\nv 0.460715 0.539285 -0.173766\r\nv 0.472940 0.527060 -0.193079\r\nv 0.486205 0.513795 -0.204971\r\nv 0.489161 0.516221 0.204971\r\nv 0.478739 0.531819 0.193079\r\nv 0.469134 0.546194 0.173766\r\nv 0.460715 0.558794 0.147776\r\nv 0.453806 0.569134 0.116107\r\nv 0.448672 0.576818 0.079976\r\nv 0.445511 0.581549 0.040771\r\nv 0.444443 0.583147 -0.000000\r\nv 0.445511 0.581549 -0.040771\r\nv 0.448672 0.576818 -0.079976\r\nv 0.453806 0.569134 -0.116107\r\nv 0.460715 0.558794 -0.147776\r\nv 0.469134 0.546194 -0.173766\r\nv 0.478739 0.531819 -0.193079\r\nv 0.489161 0.516221 -0.204971\r\nv 0.492534 0.518024 0.204971\r\nv 0.485355 0.535355 0.193079\r\nv 0.478739 0.551328 0.173766\r\nv 0.472940 0.565328 0.147776\r\nv 0.468181 0.576818 0.116107\r\nv 0.464645 0.585355 0.079976\r\nv 0.462467 0.590613 0.040771\r\nv 0.461732 0.592388 -0.000000\r\nv 0.462467 0.590613 -0.040771\r\nv 0.464645 0.585355 -0.079976\r\nv 0.468181 0.576818 -0.116107\r\nv 0.472940 0.565328 -0.147776\r\nv 0.478739 0.551328 -0.173766\r\nv 0.485355 0.535355 -0.193079\r\nv 0.492534 0.518024 -0.204971\r\nv 0.496194 0.519134 0.204971\r\nv 0.492534 0.537533 0.193079\r\nv 0.489161 0.554489 0.173766\r\nv 0.486205 0.569352 0.147776\r\nv 0.483779 0.581549 0.116107\r\nv 0.481976 0.590613 0.079976\r\nv 0.480866 0.596194 0.040771\r\nv 0.480491 0.598078 -0.000000\r\nv 0.480866 0.596194 -0.040771\r\nv 0.481976 0.590613 -0.079976\r\nv 0.483779 0.581549 -0.116107\r\nv 0.486205 0.569352 -0.147776\r\nv 0.489161 0.554489 -0.173766\r\nv 0.492534 0.537533 -0.193079\r\nv 0.496194 0.519134 -0.204971\r\nv 0.500000 0.519509 0.204971\r\nv 0.500000 0.538268 0.193079\r\nv 0.500000 0.570711 0.147776\r\nv 0.500000 0.592388 0.079976\r\nv 0.500000 0.592388 -0.079976\r\nv 0.500000 0.570711 -0.147776\r\nv 0.500000 0.555557 -0.173766\r\nv 0.500000 0.538268 -0.193079\r\nv 0.500000 0.519509 -0.204971\r\nf 1 475 8 9\r\nf 6 478 16 17\r\nf 476 1 9 10\r\nf 479 6 17 18\r\nf 2 476 10 11\r\nf 480 479 18 19\r\nf 477 2 11 12\r\nf 481 480 19 20\r\nf 3 477 12 13\r\nf 482 481 20 21\r\nf 4 3 13 14\r\nf 474 82 7\r\nf 308 482 21\r\nf 5 4 14 15\r\nf 475 474 7 8\r\nf 478 5 15 16\r\nf 15 14 29 30\r\nf 8 7 22 23\r\nf 16 15 30 31\r\nf 9 8 23 24\r\nf 17 16 31 32\r\nf 10 9 24 25\r\nf 18 17 32 33\r\nf 11 10 25 26\r\nf 19 18 33 34\r\nf 12 11 26 27\r\nf 20 19 34 35\r\nf 13 12 27 28\r\nf 21 20 35 36\r\nf 14 13 28 29\r\nf 7 82 22\r\nf 308 21 36\r\nf 34 33 48 49\r\nf 27 26 41 42\r\nf 35 34 49 50\r\nf 28 27 42 43\r\nf 36 35 50 51\r\nf 29 28 43 44\r\nf 22 82 37\r\nf 308 36 51\r\nf 30 29 44 45\r\nf 23 22 37 38\r\nf 31 30 45 46\r\nf 24 23 38 39\r\nf 32 31 46 47\r\nf 25 24 39 40\r\nf 33 32 47 48\r\nf 26 25 40 41\r\nf 46 45 60 61\r\nf 39 38 53 54\r\nf 47 46 61 62\r\nf 40 39 54 55\r\nf 48 47 62 63\r\nf 41 40 55 56\r\nf 49 48 63 64\r\nf 42 41 56 57\r\nf 50 49 64 65\r\nf 43 42 57 58\r\nf 51 50 65 66\r\nf 44 43 58 59\r\nf 37 82 52\r\nf 308 51 66\r\nf 45 44 59 60\r\nf 38 37 52 53\r\nf 65 64 79 80\r\nf 58 57 72 73\r\nf 66 65 80 81\r\nf 59 58 73 74\r\nf 52 82 67\r\nf 308 66 81\r\nf 60 59 74 75\r\nf 53 52 67 68\r\nf 61 60 75 76\r\nf 54 53 68 69\r\nf 62 61 76 77\r\nf 55 54 69 70\r\nf 63 62 77 78\r\nf 56 55 70 71\r\nf 64 63 78 79\r\nf 57 56 71 72\r\nf 69 68 84 85\r\nf 77 76 92 93\r\nf 70 69 85 86\r\nf 78 77 93 94\r\nf 71 70 86 87\r\nf 79 78 94 95\r\nf 72 71 87 88\r\nf 80 79 95 96\r\nf 73 72 88 89\r\nf 81 80 96 97\r\nf 74 73 89 90\r\nf 67 82 83\r\nf 308 81 97\r\nf 75 74 90 91\r\nf 68 67 83 84\r\nf 76 75 91 92\r\nf 89 88 103 104\r\nf 97 96 111 112\r\nf 90 89 104 105\r\nf 83 82 98\r\nf 308 97 112\r\nf 91 90 105 106\r\nf 84 83 98 99\r\nf 92 91 106 107\r\nf 85 84 99 100\r\nf 93 92 107 108\r\nf 86 85 100 101\r\nf 94 93 108 109\r\nf 87 86 101 102\r\nf 95 94 109 110\r\nf 88 87 102 103\r\nf 96 95 110 111\r\nf 108 107 122 123\r\nf 101 100 115 116\r\nf 109 108 123 124\r\nf 102 101 116 117\r\nf 110 109 124 125\r\nf 103 102 117 118\r\nf 111 110 125 126\r\nf 104 103 118 119\r\nf 112 111 126 127\r\nf 105 104 119 120\r\nf 98 82 113\r\nf 308 112 127\r\nf 106 105 120 121\r\nf 99 98 113 114\r\nf 107 106 121 122\r\nf 100 99 114 115\r\nf 127 126 141 142\r\nf 120 119 134 135\r\nf 113 82 128\r\nf 308 127 142\r\nf 121 120 135 136\r\nf 114 113 128 129\r\nf 122 121 136 137\r\nf 115 114 129 130\r\nf 123 122 137 138\r\nf 116 115 130 131\r\nf 124 123 138 139\r\nf 117 116 131 132\r\nf 125 124 139 140\r\nf 118 117 132 133\r\nf 126 125 140 141\r\nf 119 118 133 134\r\nf 131 130 145 146\r\nf 139 138 153 154\r\nf 132 131 146 147\r\nf 140 139 154 155\r\nf 133 132 147 148\r\nf 141 140 155 156\r\nf 134 133 148 149\r\nf 142 141 156 157\r\nf 135 134 149 150\r\nf 128 82 143\r\nf 308 142 157\r\nf 136 135 150 151\r\nf 129 128 143 144\r\nf 137 136 151 152\r\nf 130 129 144 145\r\nf 138 137 152 153\r\nf 150 149 164 165\r\nf 143 82 158\r\nf 308 157 172\r\nf 151 150 165 166\r\nf 144 143 158 159\r\nf 152 151 166 167\r\nf 145 144 159 160\r\nf 153 152 167 168\r\nf 146 145 160 161\r\nf 154 153 168 169\r\nf 147 146 161 162\r\nf 155 154 169 170\r\nf 148 147 162 163\r\nf 156 155 170 171\r\nf 149 148 163 164\r\nf 157 156 171 172\r\nf 169 168 183 184\r\nf 162 161 176 177\r\nf 170 169 184 185\r\nf 163 162 177 178\r\nf 171 170 185 186\r\nf 164 163 178 179\r\nf 172 171 186 187\r\nf 165 164 179 180\r\nf 158 82 173\r\nf 308 172 187\r\nf 166 165 180 181\r\nf 159 158 173 174\r\nf 167 166 181 182\r\nf 160 159 174 175\r\nf 168 167 182 183\r\nf 161 160 175 176\r\nf 308 187 202\r\nf 181 180 195 196\r\nf 174 173 188 189\r\nf 182 181 196 197\r\nf 175 174 189 190\r\nf 183 182 197 198\r\nf 176 175 190 191\r\nf 184 183 198 199\r\nf 177 176 191 192\r\nf 185 184 199 200\r\nf 178 177 192 193\r\nf 186 185 200 201\r\nf 179 178 193 194\r\nf 187 186 201 202\r\nf 180 179 194 195\r\nf 173 82 188\r\nf 200 199 214 215\r\nf 193 192 207 208\r\nf 201 200 215 216\r\nf 194 193 208 209\r\nf 202 201 216 217\r\nf 195 194 209 210\r\nf 188 82 203\r\nf 308 202 217\r\nf 196 195 210 211\r\nf 189 188 203 204\r\nf 197 196 211 212\r\nf 190 189 204 205\r\nf 198 197 212 213\r\nf 191 190 205 206\r\nf 199 198 213 214\r\nf 192 191 206 207\r\nf 204 203 218 219\r\nf 212 211 226 227\r\nf 205 204 219 220\r\nf 213 212 227 228\r\nf 206 205 220 221\r\nf 214 213 228 229\r\nf 207 206 221 222\r\nf 215 214 229 230\r\nf 208 207 222 223\r\nf 216 215 230 231\r\nf 209 208 223 224\r\nf 217 216 231 232\r\nf 210 209 224 225\r\nf 203 82 218\r\nf 308 217 232\r\nf 211 210 225 226\r\nf 223 222 237 238\r\nf 231 230 245 246\r\nf 224 223 238 239\r\nf 232 231 246 247\r\nf 225 224 239 240\r\nf 218 82 233\r\nf 308 232 247\r\nf 226 225 240 241\r\nf 219 218 233 234\r\nf 227 226 241 242\r\nf 220 219 234 235\r\nf 228 227 242 243\r\nf 221 220 235 236\r\nf 229 228 243 244\r\nf 222 221 236 237\r\nf 230 229 244 245\r\nf 242 241 256 257\r\nf 235 234 249 250\r\nf 243 242 257 258\r\nf 236 235 250 251\r\nf 244 243 258 259\r\nf 237 236 251 252\r\nf 245 244 259 260\r\nf 238 237 252 253\r\nf 246 245 260 261\r\nf 239 238 253 254\r\nf 247 246 261 262\r\nf 240 239 254 255\r\nf 233 82 248\r\nf 308 247 262\r\nf 241 240 255 256\r\nf 234 233 248 249\r\nf 261 260 275 276\r\nf 254 253 268 269\r\nf 262 261 276 277\r\nf 255 254 269 270\r\nf 248 82 263\r\nf 308 262 277\r\nf 256 255 270 271\r\nf 249 248 263 264\r\nf 257 256 271 272\r\nf 250 249 264 265\r\nf 258 257 272 273\r\nf 251 250 265 266\r\nf 259 258 273 274\r\nf 252 251 266 267\r\nf 260 259 274 275\r\nf 253 252 267 268\r\nf 265 264 279 280\r\nf 273 272 287 288\r\nf 266 265 280 281\r\nf 274 273 288 289\r\nf 267 266 281 282\r\nf 275 274 289 290\r\nf 268 267 282 283\r\nf 276 275 290 291\r\nf 269 268 283 284\r\nf 277 276 291 292\r\nf 270 269 284 285\r\nf 263 82 278\r\nf 308 277 292\r\nf 271 270 285 286\r\nf 264 263 278 279\r\nf 272 271 286 287\r\nf 284 283 298 299\r\nf 292 291 306 307\r\nf 285 284 299 300\r\nf 278 82 293\r\nf 308 292 307\r\nf 286 285 300 301\r\nf 279 278 293 294\r\nf 287 286 301 302\r\nf 280 279 294 295\r\nf 288 287 302 303\r\nf 281 280 295 296\r\nf 289 288 303 304\r\nf 282 281 296 297\r\nf 290 289 304 305\r\nf 283 282 297 298\r\nf 291 290 305 306\r\nf 303 302 318 319\r\nf 296 295 311 312\r\nf 304 303 319 320\r\nf 297 296 312 313\r\nf 305 304 320 321\r\nf 298 297 313 314\r\nf 306 305 321 322\r\nf 299 298 314 315\r\nf 307 306 322 323\r\nf 300 299 315 316\r\nf 293 82 309\r\nf 308 307 323\r\nf 301 300 316 317\r\nf 294 293 309 310\r\nf 302 301 317 318\r\nf 295 294 310 311\r\nf 323 322 337 338\r\nf 316 315 330 331\r\nf 309 82 324\r\nf 308 323 338\r\nf 317 316 331 332\r\nf 310 309 324 325\r\nf 318 317 332 333\r\nf 311 310 325 326\r\nf 319 318 333 334\r\nf 312 311 326 327\r\nf 320 319 334 335\r\nf 313 312 327 328\r\nf 321 320 335 336\r\nf 314 313 328 329\r\nf 322 321 336 337\r\nf 315 314 329 330\r\nf 335 334 349 350\r\nf 328 327 342 343\r\nf 336 335 350 351\r\nf 329 328 343 344\r\nf 337 336 351 352\r\nf 330 329 344 345\r\nf 338 337 352 353\r\nf 331 330 345 346\r\nf 324 82 339\r\nf 308 338 353\r\nf 332 331 346 347\r\nf 325 324 339 340\r\nf 333 332 347 348\r\nf 326 325 340 341\r\nf 334 333 348 349\r\nf 327 326 341 342\r\nf 339 82 354\r\nf 308 353 368\r\nf 347 346 361 362\r\nf 340 339 354 355\r\nf 348 347 362 363\r\nf 341 340 355 356\r\nf 349 348 363 364\r\nf 342 341 356 357\r\nf 350 349 364 365\r\nf 343 342 357 358\r\nf 351 350 365 366\r\nf 344 343 358 359\r\nf 352 351 366 367\r\nf 345 344 359 360\r\nf 353 352 367 368\r\nf 346 345 360 361\r\nf 358 357 372 373\r\nf 366 365 380 381\r\nf 359 358 373 374\r\nf 367 366 381 382\r\nf 360 359 374 375\r\nf 368 367 382 383\r\nf 361 360 375 376\r\nf 354 82 369\r\nf 308 368 383\r\nf 362 361 376 377\r\nf 355 354 369 370\r\nf 363 362 377 378\r\nf 356 355 370 371\r\nf 364 363 378 379\r\nf 357 356 371 372\r\nf 365 364 379 380\r\nf 377 376 391 392\r\nf 370 369 384 385\r\nf 378 377 392 393\r\nf 371 370 385 386\r\nf 379 378 393 394\r\nf 372 371 386 387\r\nf 380 379 394 395\r\nf 373 372 387 388\r\nf 381 380 395 396\r\nf 374 373 388 389\r\nf 382 381 396 397\r\nf 375 374 389 390\r\nf 383 382 397 398\r\nf 376 375 390 391\r\nf 369 82 384\r\nf 308 383 398\r\nf 396 395 410 411\r\nf 389 388 403 404\r\nf 397 396 411 412\r\nf 390 389 404 405\r\nf 398 397 412 413\r\nf 391 390 405 406\r\nf 384 82 399\r\nf 308 398 413\r\nf 392 391 406 407\r\nf 385 384 399 400\r\nf 393 392 407 408\r\nf 386 385 400 401\r\nf 394 393 408 409\r\nf 387 386 401 402\r\nf 395 394 409 410\r\nf 388 387 402 403\r\nf 400 399 414 415\r\nf 408 407 422 423\r\nf 401 400 415 416\r\nf 409 408 423 424\r\nf 402 401 416 417\r\nf 410 409 424 425\r\nf 403 402 417 418\r\nf 411 410 425 426\r\nf 404 403 418 419\r\nf 412 411 426 427\r\nf 405 404 419 420\r\nf 413 412 427 428\r\nf 406 405 420 421\r\nf 399 82 414\r\nf 308 413 428\r\nf 407 406 421 422\r\nf 419 418 433 434\r\nf 427 426 441 442\r\nf 420 419 434 435\r\nf 428 427 442 443\r\nf 421 420 435 436\r\nf 414 82 429\r\nf 308 428 443\r\nf 422 421 436 437\r\nf 415 414 429 430\r\nf 423 422 437 438\r\nf 416 415 430 431\r\nf 424 423 438 439\r\nf 417 416 431 432\r\nf 425 424 439 440\r\nf 418 417 432 433\r\nf 426 425 440 441\r\nf 438 437 452 453\r\nf 431 430 445 446\r\nf 439 438 453 454\r\nf 432 431 446 447\r\nf 440 439 454 455\r\nf 433 432 447 448\r\nf 441 440 455 456\r\nf 434 433 448 449\r\nf 442 441 456 457\r\nf 435 434 449 450\r\nf 443 442 457 458\r\nf 436 435 450 451\r\nf 429 82 444\r\nf 308 443 458\r\nf 437 436 451 452\r\nf 430 429 444 445\r\nf 457 456 471 472\r\nf 450 449 464 465\r\nf 458 457 472 473\r\nf 451 450 465 466\r\nf 444 82 459\r\nf 308 458 473\r\nf 452 451 466 467\r\nf 445 444 459 460\r\nf 453 452 467 468\r\nf 446 445 460 461\r\nf 454 453 468 469\r\nf 447 446 461 462\r\nf 455 454 469 470\r\nf 448 447 462 463\r\nf 456 455 470 471\r\nf 449 448 463 464\r\nf 469 468 478 6\r\nf 462 461 1 476\r\nf 470 469 6 479\r\nf 463 462 476 2\r\nf 471 470 479 480\r\nf 464 463 2 477\r\nf 472 471 480 481\r\nf 465 464 477 3\r\nf 473 472 481 482\r\nf 466 465 3 4\r\nf 459 82 474\r\nf 308 473 482\r\nf 467 466 4 5\r\nf 460 459 474 475\r\nf 468 467 5 478\r\nf 461 460 475 1\r\nv 0.500000 0.555557 1.173766\r\nv 0.500000 0.583147 1.116107\r\nv 0.500000 0.598079 1.040771\r\nv 0.500000 0.600000 1.000000\r\nv 0.500000 0.598079 0.959229\r\nv 0.500000 0.583147 0.883893\r\nv 0.503806 0.519134 1.204971\r\nv 0.507466 0.537533 1.193079\r\nv 0.510839 0.554490 1.173766\r\nv 0.513795 0.569352 1.147776\r\nv 0.516221 0.581549 1.116107\r\nv 0.518024 0.590613 1.079976\r\nv 0.519134 0.596194 1.040771\r\nv 0.519509 0.598079 1.000000\r\nv 0.519134 0.596194 0.959229\r\nv 0.518024 0.590613 0.920024\r\nv 0.516221 0.581549 0.883893\r\nv 0.513795 0.569352 0.852224\r\nv 0.510839 0.554489 0.826234\r\nv 0.507466 0.537533 0.806921\r\nv 0.503806 0.519134 0.795029\r\nv 0.507466 0.518024 1.204971\r\nv 0.514645 0.535355 1.193079\r\nv 0.521261 0.551328 1.173766\r\nv 0.527060 0.565328 1.147776\r\nv 0.531819 0.576818 1.116107\r\nv 0.535355 0.585355 1.079976\r\nv 0.537533 0.590613 1.040771\r\nv 0.538268 0.592388 1.000000\r\nv 0.537533 0.590613 0.959229\r\nv 0.535355 0.585355 0.920024\r\nv 0.531819 0.576818 0.883893\r\nv 0.527060 0.565328 0.852224\r\nv 0.521261 0.551328 0.826234\r\nv 0.514645 0.535355 0.806921\r\nv 0.507466 0.518024 0.795029\r\nv 0.510839 0.516221 1.204971\r\nv 0.521261 0.531819 1.193079\r\nv 0.530866 0.546194 1.173766\r\nv 0.539285 0.558794 1.147776\r\nv 0.546194 0.569134 1.116107\r\nv 0.551328 0.576818 1.079976\r\nv 0.554489 0.581549 1.040771\r\nv 0.555557 0.583147 1.000000\r\nv 0.554489 0.581549 0.959229\r\nv 0.551328 0.576818 0.920024\r\nv 0.546194 0.569134 0.883893\r\nv 0.539285 0.558794 0.852224\r\nv 0.530866 0.546194 0.826234\r\nv 0.521261 0.531819 0.806921\r\nv 0.510839 0.516221 0.795029\r\nv 0.513795 0.513795 1.204971\r\nv 0.527060 0.527060 1.193079\r\nv 0.539285 0.539285 1.173766\r\nv 0.550000 0.550000 1.147776\r\nv 0.558794 0.558794 1.116107\r\nv 0.565328 0.565328 1.079976\r\nv 0.569352 0.569352 1.040771\r\nv 0.570711 0.570711 1.000000\r\nv 0.569352 0.569352 0.959229\r\nv 0.565328 0.565328 0.920024\r\nv 0.558794 0.558794 0.883893\r\nv 0.550000 0.550000 0.852224\r\nv 0.539285 0.539285 0.826234\r\nv 0.527060 0.527060 0.806921\r\nv 0.513795 0.513795 0.795029\r\nv 0.516221 0.510839 1.204971\r\nv 0.531819 0.521261 1.193079\r\nv 0.546194 0.530866 1.173766\r\nv 0.558794 0.539285 1.147776\r\nv 0.569134 0.546194 1.116107\r\nv 0.576818 0.551328 1.079976\r\nv 0.581549 0.554489 1.040771\r\nv 0.583147 0.555557 1.000000\r\nv 0.581549 0.554489 0.959229\r\nv 0.576818 0.551328 0.920024\r\nv 0.569134 0.546194 0.883893\r\nv 0.558794 0.539285 0.852224\r\nv 0.546194 0.530866 0.826234\r\nv 0.531819 0.521261 0.806921\r\nv 0.516221 0.510839 0.795029\r\nv 0.500000 0.500000 1.208987\r\nv 0.518024 0.507466 1.204971\r\nv 0.535355 0.514645 1.193079\r\nv 0.551328 0.521261 1.173766\r\nv 0.565328 0.527060 1.147776\r\nv 0.576818 0.531819 1.116107\r\nv 0.585355 0.535355 1.079976\r\nv 0.590613 0.537533 1.040771\r\nv 0.592388 0.538268 1.000000\r\nv 0.590613 0.537533 0.959229\r\nv 0.585355 0.535355 0.920024\r\nv 0.576818 0.531819 0.883893\r\nv 0.565328 0.527060 0.852224\r\nv 0.551328 0.521261 0.826234\r\nv 0.535355 0.514645 0.806921\r\nv 0.518024 0.507466 0.795029\r\nv 0.519134 0.503806 1.204971\r\nv 0.537533 0.507466 1.193079\r\nv 0.554489 0.510839 1.173766\r\nv 0.569352 0.513795 1.147776\r\nv 0.581549 0.516221 1.116107\r\nv 0.590613 0.518024 1.079976\r\nv 0.596194 0.519134 1.040771\r\nv 0.598079 0.519509 1.000000\r\nv 0.596194 0.519134 0.959229\r\nv 0.590613 0.518024 0.920024\r\nv 0.581549 0.516221 0.883893\r\nv 0.569352 0.513795 0.852224\r\nv 0.554489 0.510839 0.826234\r\nv 0.537533 0.507466 0.806921\r\nv 0.519134 0.503806 0.795029\r\nv 0.519509 0.500000 1.204971\r\nv 0.538268 0.500000 1.193079\r\nv 0.555557 0.500000 1.173766\r\nv 0.570711 0.500000 1.147776\r\nv 0.583147 0.500000 1.116107\r\nv 0.592388 0.500000 1.079976\r\nv 0.598079 0.500000 1.040771\r\nv 0.600000 0.500000 1.000000\r\nv 0.598079 0.500000 0.959229\r\nv 0.592388 0.500000 0.920024\r\nv 0.583147 0.500000 0.883893\r\nv 0.570711 0.500000 0.852224\r\nv 0.555557 0.500000 0.826234\r\nv 0.538268 0.500000 0.806921\r\nv 0.519509 0.500000 0.795029\r\nv 0.519134 0.496194 1.204971\r\nv 0.537533 0.492534 1.193079\r\nv 0.554489 0.489161 1.173766\r\nv 0.569352 0.486205 1.147776\r\nv 0.581549 0.483779 1.116107\r\nv 0.590613 0.481976 1.079976\r\nv 0.596194 0.480866 1.040771\r\nv 0.598078 0.480491 1.000000\r\nv 0.596194 0.480866 0.959229\r\nv 0.590613 0.481976 0.920024\r\nv 0.581549 0.483779 0.883893\r\nv 0.569352 0.486205 0.852224\r\nv 0.554489 0.489161 0.826234\r\nv 0.537533 0.492534 0.806921\r\nv 0.519134 0.496194 0.795029\r\nv 0.518024 0.492534 1.204971\r\nv 0.535355 0.485355 1.193079\r\nv 0.551328 0.478739 1.173766\r\nv 0.565328 0.472940 1.147776\r\nv 0.576818 0.468181 1.116107\r\nv 0.585355 0.464645 1.079976\r\nv 0.590613 0.462467 1.040771\r\nv 0.592388 0.461732 1.000000\r\nv 0.590613 0.462467 0.959229\r\nv 0.585355 0.464645 0.920024\r\nv 0.576818 0.468181 0.883893\r\nv 0.565328 0.472940 0.852224\r\nv 0.551328 0.478739 0.826234\r\nv 0.535355 0.485355 0.806921\r\nv 0.518024 0.492534 0.795029\r\nv 0.516221 0.489161 1.204971\r\nv 0.531819 0.478739 1.193079\r\nv 0.546194 0.469134 1.173766\r\nv 0.558794 0.460715 1.147776\r\nv 0.569134 0.453806 1.116107\r\nv 0.576818 0.448672 1.079976\r\nv 0.581549 0.445510 1.040771\r\nv 0.583147 0.444443 1.000000\r\nv 0.581549 0.445510 0.959229\r\nv 0.576818 0.448672 0.920024\r\nv 0.569134 0.453806 0.883893\r\nv 0.558794 0.460715 0.852224\r\nv 0.546194 0.469134 0.826234\r\nv 0.531819 0.478739 0.806921\r\nv 0.516221 0.489161 0.795029\r\nv 0.513795 0.486205 1.204971\r\nv 0.527060 0.472940 1.193079\r\nv 0.539285 0.460715 1.173766\r\nv 0.550000 0.450000 1.147776\r\nv 0.558794 0.441206 1.116107\r\nv 0.565328 0.434672 1.079976\r\nv 0.569352 0.430648 1.040771\r\nv 0.570711 0.429289 1.000000\r\nv 0.569352 0.430648 0.959229\r\nv 0.565328 0.434672 0.920024\r\nv 0.558794 0.441206 0.883893\r\nv 0.550000 0.450000 0.852224\r\nv 0.539285 0.460715 0.826234\r\nv 0.527060 0.472940 0.806921\r\nv 0.513795 0.486205 0.795029\r\nv 0.510839 0.483779 1.204971\r\nv 0.521261 0.468181 1.193079\r\nv 0.530866 0.453806 1.173766\r\nv 0.539285 0.441206 1.147776\r\nv 0.546194 0.430866 1.116107\r\nv 0.551328 0.423182 1.079976\r\nv 0.554489 0.418451 1.040771\r\nv 0.555557 0.416853 1.000000\r\nv 0.554489 0.418451 0.959229\r\nv 0.551328 0.423182 0.920024\r\nv 0.546194 0.430866 0.883893\r\nv 0.539285 0.441206 0.852224\r\nv 0.530866 0.453806 0.826234\r\nv 0.521261 0.468181 0.806921\r\nv 0.510839 0.483779 0.795029\r\nv 0.507466 0.481976 1.204971\r\nv 0.514645 0.464645 1.193079\r\nv 0.521261 0.448672 1.173766\r\nv 0.527060 0.434672 1.147776\r\nv 0.531819 0.423182 1.116107\r\nv 0.535355 0.414645 1.079976\r\nv 0.537533 0.409387 1.040771\r\nv 0.538268 0.407612 1.000000\r\nv 0.537533 0.409387 0.959229\r\nv 0.535355 0.414645 0.920024\r\nv 0.531819 0.423182 0.883893\r\nv 0.527060 0.434672 0.852224\r\nv 0.521261 0.448672 0.826234\r\nv 0.514645 0.464645 0.806921\r\nv 0.507466 0.481976 0.795029\r\nv 0.503806 0.480866 1.204971\r\nv 0.507466 0.462467 1.193079\r\nv 0.510839 0.445511 1.173766\r\nv 0.513795 0.430648 1.147776\r\nv 0.516221 0.418451 1.116107\r\nv 0.518024 0.409387 1.079976\r\nv 0.519134 0.403806 1.040771\r\nv 0.519509 0.401922 1.000000\r\nv 0.519134 0.403806 0.959229\r\nv 0.518024 0.409387 0.920024\r\nv 0.516221 0.418451 0.883893\r\nv 0.513795 0.430648 0.852224\r\nv 0.510839 0.445511 0.826234\r\nv 0.507466 0.462467 0.806921\r\nv 0.503806 0.480866 0.795029\r\nv 0.500000 0.480491 1.204971\r\nv 0.500000 0.461732 1.193079\r\nv 0.500000 0.444443 1.173766\r\nv 0.500000 0.429289 1.147776\r\nv 0.500000 0.416853 1.116107\r\nv 0.500000 0.407612 1.079976\r\nv 0.500000 0.401921 1.040771\r\nv 0.500000 0.400000 1.000000\r\nv 0.500000 0.401921 0.959229\r\nv 0.500000 0.407612 0.920024\r\nv 0.500000 0.416853 0.883893\r\nv 0.500000 0.429289 0.852224\r\nv 0.500000 0.444443 0.826234\r\nv 0.500000 0.461732 0.806921\r\nv 0.500000 0.480491 0.795029\r\nv 0.496194 0.480866 1.204971\r\nv 0.492534 0.462467 1.193079\r\nv 0.489161 0.445511 1.173766\r\nv 0.486205 0.430648 1.147776\r\nv 0.483779 0.418451 1.116107\r\nv 0.481976 0.409387 1.079976\r\nv 0.480866 0.403806 1.040771\r\nv 0.480491 0.401922 1.000000\r\nv 0.480866 0.403806 0.959229\r\nv 0.481976 0.409387 0.920024\r\nv 0.483779 0.418451 0.883893\r\nv 0.486205 0.430648 0.852224\r\nv 0.489161 0.445511 0.826234\r\nv 0.492534 0.462467 0.806921\r\nv 0.496194 0.480866 0.795029\r\nv 0.492534 0.481976 1.204971\r\nv 0.485355 0.464645 1.193079\r\nv 0.478739 0.448672 1.173766\r\nv 0.472940 0.434672 1.147776\r\nv 0.468181 0.423182 1.116107\r\nv 0.464645 0.414645 1.079976\r\nv 0.462467 0.409387 1.040771\r\nv 0.461732 0.407612 1.000000\r\nv 0.462467 0.409387 0.959229\r\nv 0.464645 0.414645 0.920024\r\nv 0.468181 0.423182 0.883893\r\nv 0.472940 0.434672 0.852224\r\nv 0.478739 0.448672 0.826234\r\nv 0.485355 0.464645 0.806921\r\nv 0.492534 0.481976 0.795029\r\nv 0.489161 0.483779 1.204971\r\nv 0.478739 0.468181 1.193079\r\nv 0.469134 0.453806 1.173766\r\nv 0.460715 0.441206 1.147776\r\nv 0.453806 0.430866 1.116107\r\nv 0.448672 0.423182 1.079976\r\nv 0.445510 0.418451 1.040771\r\nv 0.444443 0.416853 1.000000\r\nv 0.445510 0.418451 0.959229\r\nv 0.448672 0.423182 0.920024\r\nv 0.453806 0.430866 0.883893\r\nv 0.460715 0.441206 0.852224\r\nv 0.469134 0.453806 0.826234\r\nv 0.478739 0.468181 0.806921\r\nv 0.489161 0.483779 0.795029\r\nv 0.486205 0.486205 1.204971\r\nv 0.472940 0.472940 1.193079\r\nv 0.460715 0.460715 1.173766\r\nv 0.450000 0.450000 1.147776\r\nv 0.441206 0.441206 1.116107\r\nv 0.434672 0.434672 1.079976\r\nv 0.430648 0.430648 1.040771\r\nv 0.429289 0.429289 1.000000\r\nv 0.430648 0.430648 0.959229\r\nv 0.434672 0.434672 0.920024\r\nv 0.441206 0.441206 0.883893\r\nv 0.450000 0.450000 0.852224\r\nv 0.460715 0.460715 0.826234\r\nv 0.472940 0.472940 0.806921\r\nv 0.486205 0.486205 0.795029\r\nv 0.500000 0.500000 0.791013\r\nv 0.483779 0.489161 1.204971\r\nv 0.468181 0.478739 1.193079\r\nv 0.453806 0.469134 1.173766\r\nv 0.441206 0.460715 1.147776\r\nv 0.430866 0.453806 1.116107\r\nv 0.423182 0.448672 1.079976\r\nv 0.418451 0.445511 1.040771\r\nv 0.416853 0.444443 1.000000\r\nv 0.418451 0.445511 0.959229\r\nv 0.423182 0.448672 0.920024\r\nv 0.430866 0.453806 0.883893\r\nv 0.441206 0.460715 0.852224\r\nv 0.453806 0.469134 0.826234\r\nv 0.468181 0.478739 0.806921\r\nv 0.483779 0.489161 0.795029\r\nv 0.481976 0.492534 1.204971\r\nv 0.464645 0.485355 1.193079\r\nv 0.448672 0.478739 1.173766\r\nv 0.434672 0.472940 1.147776\r\nv 0.423182 0.468181 1.116107\r\nv 0.414645 0.464645 1.079976\r\nv 0.409387 0.462467 1.040771\r\nv 0.407612 0.461732 1.000000\r\nv 0.409387 0.462467 0.959229\r\nv 0.414645 0.464645 0.920024\r\nv 0.423182 0.468181 0.883893\r\nv 0.434672 0.472940 0.852224\r\nv 0.448672 0.478739 0.826234\r\nv 0.464645 0.485355 0.806921\r\nv 0.481976 0.492534 0.795029\r\nv 0.480866 0.496194 1.204971\r\nv 0.462467 0.492534 1.193079\r\nv 0.445511 0.489161 1.173766\r\nv 0.430648 0.486205 1.147776\r\nv 0.418451 0.483779 1.116107\r\nv 0.409387 0.481976 1.079976\r\nv 0.403806 0.480866 1.040771\r\nv 0.401922 0.480491 1.000000\r\nv 0.403806 0.480866 0.959229\r\nv 0.409387 0.481976 0.920024\r\nv 0.418451 0.483779 0.883893\r\nv 0.430648 0.486205 0.852224\r\nv 0.445511 0.489161 0.826234\r\nv 0.462467 0.492534 0.806921\r\nv 0.480866 0.496194 0.795029\r\nv 0.480491 0.500000 1.204971\r\nv 0.461732 0.500000 1.193079\r\nv 0.444443 0.500000 1.173766\r\nv 0.429289 0.500000 1.147776\r\nv 0.416853 0.500000 1.116107\r\nv 0.407612 0.500000 1.079976\r\nv 0.401922 0.500000 1.040771\r\nv 0.400000 0.500000 1.000000\r\nv 0.401922 0.500000 0.959229\r\nv 0.407612 0.500000 0.920024\r\nv 0.416853 0.500000 0.883893\r\nv 0.429289 0.500000 0.852224\r\nv 0.444443 0.500000 0.826234\r\nv 0.461732 0.500000 0.806921\r\nv 0.480491 0.500000 0.795029\r\nv 0.480866 0.503806 1.204971\r\nv 0.462467 0.507466 1.193079\r\nv 0.445511 0.510839 1.173766\r\nv 0.430648 0.513795 1.147776\r\nv 0.418451 0.516221 1.116107\r\nv 0.409387 0.518024 1.079976\r\nv 0.403806 0.519134 1.040771\r\nv 0.401922 0.519509 1.000000\r\nv 0.403806 0.519134 0.959229\r\nv 0.409387 0.518024 0.920024\r\nv 0.418451 0.516221 0.883893\r\nv 0.430648 0.513795 0.852224\r\nv 0.445511 0.510839 0.826234\r\nv 0.462467 0.507466 0.806921\r\nv 0.480866 0.503806 0.795029\r\nv 0.481976 0.507466 1.204971\r\nv 0.464645 0.514645 1.193079\r\nv 0.448672 0.521261 1.173766\r\nv 0.434672 0.527060 1.147776\r\nv 0.423182 0.531819 1.116107\r\nv 0.414645 0.535355 1.079976\r\nv 0.409387 0.537533 1.040771\r\nv 0.407612 0.538268 1.000000\r\nv 0.409387 0.537533 0.959229\r\nv 0.414645 0.535355 0.920024\r\nv 0.423182 0.531819 0.883893\r\nv 0.434672 0.527060 0.852224\r\nv 0.448672 0.521261 0.826234\r\nv 0.464645 0.514645 0.806921\r\nv 0.481976 0.507466 0.795029\r\nv 0.483779 0.510839 1.204971\r\nv 0.468181 0.521261 1.193079\r\nv 0.453806 0.530866 1.173766\r\nv 0.441206 0.539285 1.147776\r\nv 0.430866 0.546194 1.116107\r\nv 0.423182 0.551328 1.079976\r\nv 0.418451 0.554489 1.040771\r\nv 0.416853 0.555557 1.000000\r\nv 0.418451 0.554489 0.959229\r\nv 0.423182 0.551328 0.920024\r\nv 0.430866 0.546194 0.883893\r\nv 0.441206 0.539285 0.852224\r\nv 0.453806 0.530866 0.826234\r\nv 0.468181 0.521261 0.806921\r\nv 0.483779 0.510839 0.795029\r\nv 0.486205 0.513795 1.204971\r\nv 0.472940 0.527060 1.193079\r\nv 0.460715 0.539285 1.173766\r\nv 0.450000 0.550000 1.147776\r\nv 0.441206 0.558794 1.116107\r\nv 0.434672 0.565328 1.079976\r\nv 0.430648 0.569352 1.040771\r\nv 0.429289 0.570711 1.000000\r\nv 0.430648 0.569352 0.959229\r\nv 0.434672 0.565328 0.920024\r\nv 0.441206 0.558794 0.883893\r\nv 0.450000 0.550000 0.852224\r\nv 0.460715 0.539285 0.826234\r\nv 0.472940 0.527060 0.806921\r\nv 0.486205 0.513795 0.795029\r\nv 0.489161 0.516221 1.204971\r\nv 0.478739 0.531819 1.193079\r\nv 0.469134 0.546194 1.173766\r\nv 0.460715 0.558794 1.147776\r\nv 0.453806 0.569134 1.116107\r\nv 0.448672 0.576818 1.079976\r\nv 0.445511 0.581549 1.040771\r\nv 0.444443 0.583147 1.000000\r\nv 0.445511 0.581549 0.959229\r\nv 0.448672 0.576818 0.920024\r\nv 0.453806 0.569134 0.883893\r\nv 0.460715 0.558794 0.852224\r\nv 0.469134 0.546194 0.826234\r\nv 0.478739 0.531819 0.806921\r\nv 0.489161 0.516221 0.795029\r\nv 0.492534 0.518024 1.204971\r\nv 0.485355 0.535355 1.193079\r\nv 0.478739 0.551328 1.173766\r\nv 0.472940 0.565328 1.147776\r\nv 0.468181 0.576818 1.116107\r\nv 0.464645 0.585355 1.079976\r\nv 0.462467 0.590613 1.040771\r\nv 0.461732 0.592388 1.000000\r\nv 0.462467 0.590613 0.959229\r\nv 0.464645 0.585355 0.920024\r\nv 0.468181 0.576818 0.883893\r\nv 0.472940 0.565328 0.852224\r\nv 0.478739 0.551328 0.826234\r\nv 0.485355 0.535355 0.806921\r\nv 0.492534 0.518024 0.795029\r\nv 0.496194 0.519134 1.204971\r\nv 0.492534 0.537533 1.193079\r\nv 0.489161 0.554489 1.173766\r\nv 0.486205 0.569352 1.147776\r\nv 0.483779 0.581549 1.116107\r\nv 0.481976 0.590613 1.079976\r\nv 0.480866 0.596194 1.040771\r\nv 0.480491 0.598078 1.000000\r\nv 0.480866 0.596194 0.959229\r\nv 0.481976 0.590613 0.920024\r\nv 0.483779 0.581549 0.883893\r\nv 0.486205 0.569352 0.852224\r\nv 0.489161 0.554489 0.826234\r\nv 0.492534 0.537533 0.806921\r\nv 0.496194 0.519134 0.795029\r\nv 0.500000 0.519509 1.204971\r\nv 0.500000 0.538268 1.193079\r\nv 0.500000 0.570711 1.147776\r\nv 0.500000 0.592388 1.079976\r\nv 0.500000 0.592388 0.920024\r\nv 0.500000 0.570711 0.852224\r\nv 0.500000 0.555557 0.826234\r\nv 0.500000 0.538268 0.806921\r\nv 0.500000 0.519509 0.795029\r\nf 483 957 490 491\r\nf 488 960 498 499\r\nf 958 483 491 492\r\nf 961 488 499 500\r\nf 484 958 492 493\r\nf 962 961 500 501\r\nf 959 484 493 494\r\nf 963 962 501 502\r\nf 485 959 494 495\r\nf 964 963 502 503\r\nf 486 485 495 496\r\nf 956 564 489\r\nf 790 964 503\r\nf 487 486 496 497\r\nf 957 956 489 490\r\nf 960 487 497 498\r\nf 497 496 511 512\r\nf 490 489 504 505\r\nf 498 497 512 513\r\nf 491 490 505 506\r\nf 499 498 513 514\r\nf 492 491 506 507\r\nf 500 499 514 515\r\nf 493 492 507 508\r\nf 501 500 515 516\r\nf 494 493 508 509\r\nf 502 501 516 517\r\nf 495 494 509 510\r\nf 503 502 517 518\r\nf 496 495 510 511\r\nf 489 564 504\r\nf 790 503 518\r\nf 516 515 530 531\r\nf 509 508 523 524\r\nf 517 516 531 532\r\nf 510 509 524 525\r\nf 518 517 532 533\r\nf 511 510 525 526\r\nf 504 564 519\r\nf 790 518 533\r\nf 512 511 526 527\r\nf 505 504 519 520\r\nf 513 512 527 528\r\nf 506 505 520 521\r\nf 514 513 528 529\r\nf 507 506 521 522\r\nf 515 514 529 530\r\nf 508 507 522 523\r\nf 528 527 542 543\r\nf 521 520 535 536\r\nf 529 528 543 544\r\nf 522 521 536 537\r\nf 530 529 544 545\r\nf 523 522 537 538\r\nf 531 530 545 546\r\nf 524 523 538 539\r\nf 532 531 546 547\r\nf 525 524 539 540\r\nf 533 532 547 548\r\nf 526 525 540 541\r\nf 519 564 534\r\nf 790 533 548\r\nf 527 526 541 542\r\nf 520 519 534 535\r\nf 547 546 561 562\r\nf 540 539 554 555\r\nf 548 547 562 563\r\nf 541 540 555 556\r\nf 534 564 549\r\nf 790 548 563\r\nf 542 541 556 557\r\nf 535 534 549 550\r\nf 543 542 557 558\r\nf 536 535 550 551\r\nf 544 543 558 559\r\nf 537 536 551 552\r\nf 545 544 559 560\r\nf 538 537 552 553\r\nf 546 545 560 561\r\nf 539 538 553 554\r\nf 551 550 566 567\r\nf 559 558 574 575\r\nf 552 551 567 568\r\nf 560 559 575 576\r\nf 553 552 568 569\r\nf 561 560 576 577\r\nf 554 553 569 570\r\nf 562 561 577 578\r\nf 555 554 570 571\r\nf 563 562 578 579\r\nf 556 555 571 572\r\nf 549 564 565\r\nf 790 563 579\r\nf 557 556 572 573\r\nf 550 549 565 566\r\nf 558 557 573 574\r\nf 571 570 585 586\r\nf 579 578 593 594\r\nf 572 571 586 587\r\nf 565 564 580\r\nf 790 579 594\r\nf 573 572 587 588\r\nf 566 565 580 581\r\nf 574 573 588 589\r\nf 567 566 581 582\r\nf 575 574 589 590\r\nf 568 567 582 583\r\nf 576 575 590 591\r\nf 569 568 583 584\r\nf 577 576 591 592\r\nf 570 569 584 585\r\nf 578 577 592 593\r\nf 590 589 604 605\r\nf 583 582 597 598\r\nf 591 590 605 606\r\nf 584 583 598 599\r\nf 592 591 606 607\r\nf 585 584 599 600\r\nf 593 592 607 608\r\nf 586 585 600 601\r\nf 594 593 608 609\r\nf 587 586 601 602\r\nf 580 564 595\r\nf 790 594 609\r\nf 588 587 602 603\r\nf 581 580 595 596\r\nf 589 588 603 604\r\nf 582 581 596 597\r\nf 609 608 623 624\r\nf 602 601 616 617\r\nf 595 564 610\r\nf 790 609 624\r\nf 603 602 617 618\r\nf 596 595 610 611\r\nf 604 603 618 619\r\nf 597 596 611 612\r\nf 605 604 619 620\r\nf 598 597 612 613\r\nf 606 605 620 621\r\nf 599 598 613 614\r\nf 607 606 621 622\r\nf 600 599 614 615\r\nf 608 607 622 623\r\nf 601 600 615 616\r\nf 613 612 627 628\r\nf 621 620 635 636\r\nf 614 613 628 629\r\nf 622 621 636 637\r\nf 615 614 629 630\r\nf 623 622 637 638\r\nf 616 615 630 631\r\nf 624 623 638 639\r\nf 617 616 631 632\r\nf 610 564 625\r\nf 790 624 639\r\nf 618 617 632 633\r\nf 611 610 625 626\r\nf 619 618 633 634\r\nf 612 611 626 627\r\nf 620 619 634 635\r\nf 632 631 646 647\r\nf 625 564 640\r\nf 790 639 654\r\nf 633 632 647 648\r\nf 626 625 640 641\r\nf 634 633 648 649\r\nf 627 626 641 642\r\nf 635 634 649 650\r\nf 628 627 642 643\r\nf 636 635 650 651\r\nf 629 628 643 644\r\nf 637 636 651 652\r\nf 630 629 644 645\r\nf 638 637 652 653\r\nf 631 630 645 646\r\nf 639 638 653 654\r\nf 651 650 665 666\r\nf 644 643 658 659\r\nf 652 651 666 667\r\nf 645 644 659 660\r\nf 653 652 667 668\r\nf 646 645 660 661\r\nf 654 653 668 669\r\nf 647 646 661 662\r\nf 640 564 655\r\nf 790 654 669\r\nf 648 647 662 663\r\nf 641 640 655 656\r\nf 649 648 663 664\r\nf 642 641 656 657\r\nf 650 649 664 665\r\nf 643 642 657 658\r\nf 790 669 684\r\nf 663 662 677 678\r\nf 656 655 670 671\r\nf 664 663 678 679\r\nf 657 656 671 672\r\nf 665 664 679 680\r\nf 658 657 672 673\r\nf 666 665 680 681\r\nf 659 658 673 674\r\nf 667 666 681 682\r\nf 660 659 674 675\r\nf 668 667 682 683\r\nf 661 660 675 676\r\nf 669 668 683 684\r\nf 662 661 676 677\r\nf 655 564 670\r\nf 682 681 696 697\r\nf 675 674 689 690\r\nf 683 682 697 698\r\nf 676 675 690 691\r\nf 684 683 698 699\r\nf 677 676 691 692\r\nf 670 564 685\r\nf 790 684 699\r\nf 678 677 692 693\r\nf 671 670 685 686\r\nf 679 678 693 694\r\nf 672 671 686 687\r\nf 680 679 694 695\r\nf 673 672 687 688\r\nf 681 680 695 696\r\nf 674 673 688 689\r\nf 686 685 700 701\r\nf 694 693 708 709\r\nf 687 686 701 702\r\nf 695 694 709 710\r\nf 688 687 702 703\r\nf 696 695 710 711\r\nf 689 688 703 704\r\nf 697 696 711 712\r\nf 690 689 704 705\r\nf 698 697 712 713\r\nf 691 690 705 706\r\nf 699 698 713 714\r\nf 692 691 706 707\r\nf 685 564 700\r\nf 790 699 714\r\nf 693 692 707 708\r\nf 705 704 719 720\r\nf 713 712 727 728\r\nf 706 705 720 721\r\nf 714 713 728 729\r\nf 707 706 721 722\r\nf 700 564 715\r\nf 790 714 729\r\nf 708 707 722 723\r\nf 701 700 715 716\r\nf 709 708 723 724\r\nf 702 701 716 717\r\nf 710 709 724 725\r\nf 703 702 717 718\r\nf 711 710 725 726\r\nf 704 703 718 719\r\nf 712 711 726 727\r\nf 724 723 738 739\r\nf 717 716 731 732\r\nf 725 724 739 740\r\nf 718 717 732 733\r\nf 726 725 740 741\r\nf 719 718 733 734\r\nf 727 726 741 742\r\nf 720 719 734 735\r\nf 728 727 742 743\r\nf 721 720 735 736\r\nf 729 728 743 744\r\nf 722 721 736 737\r\nf 715 564 730\r\nf 790 729 744\r\nf 723 722 737 738\r\nf 716 715 730 731\r\nf 743 742 757 758\r\nf 736 735 750 751\r\nf 744 743 758 759\r\nf 737 736 751 752\r\nf 730 564 745\r\nf 790 744 759\r\nf 738 737 752 753\r\nf 731 730 745 746\r\nf 739 738 753 754\r\nf 732 731 746 747\r\nf 740 739 754 755\r\nf 733 732 747 748\r\nf 741 740 755 756\r\nf 734 733 748 749\r\nf 742 741 756 757\r\nf 735 734 749 750\r\nf 747 746 761 762\r\nf 755 754 769 770\r\nf 748 747 762 763\r\nf 756 755 770 771\r\nf 749 748 763 764\r\nf 757 756 771 772\r\nf 750 749 764 765\r\nf 758 757 772 773\r\nf 751 750 765 766\r\nf 759 758 773 774\r\nf 752 751 766 767\r\nf 745 564 760\r\nf 790 759 774\r\nf 753 752 767 768\r\nf 746 745 760 761\r\nf 754 753 768 769\r\nf 766 765 780 781\r\nf 774 773 788 789\r\nf 767 766 781 782\r\nf 760 564 775\r\nf 790 774 789\r\nf 768 767 782 783\r\nf 761 760 775 776\r\nf 769 768 783 784\r\nf 762 761 776 777\r\nf 770 769 784 785\r\nf 763 762 777 778\r\nf 771 770 785 786\r\nf 764 763 778 779\r\nf 772 771 786 787\r\nf 765 764 779 780\r\nf 773 772 787 788\r\nf 785 784 800 801\r\nf 778 777 793 794\r\nf 786 785 801 802\r\nf 779 778 794 795\r\nf 787 786 802 803\r\nf 780 779 795 796\r\nf 788 787 803 804\r\nf 781 780 796 797\r\nf 789 788 804 805\r\nf 782 781 797 798\r\nf 775 564 791\r\nf 790 789 805\r\nf 783 782 798 799\r\nf 776 775 791 792\r\nf 784 783 799 800\r\nf 777 776 792 793\r\nf 805 804 819 820\r\nf 798 797 812 813\r\nf 791 564 806\r\nf 790 805 820\r\nf 799 798 813 814\r\nf 792 791 806 807\r\nf 800 799 814 815\r\nf 793 792 807 808\r\nf 801 800 815 816\r\nf 794 793 808 809\r\nf 802 801 816 817\r\nf 795 794 809 810\r\nf 803 802 817 818\r\nf 796 795 810 811\r\nf 804 803 818 819\r\nf 797 796 811 812\r\nf 817 816 831 832\r\nf 810 809 824 825\r\nf 818 817 832 833\r\nf 811 810 825 826\r\nf 819 818 833 834\r\nf 812 811 826 827\r\nf 820 819 834 835\r\nf 813 812 827 828\r\nf 806 564 821\r\nf 790 820 835\r\nf 814 813 828 829\r\nf 807 806 821 822\r\nf 815 814 829 830\r\nf 808 807 822 823\r\nf 816 815 830 831\r\nf 809 808 823 824\r\nf 821 564 836\r\nf 790 835 850\r\nf 829 828 843 844\r\nf 822 821 836 837\r\nf 830 829 844 845\r\nf 823 822 837 838\r\nf 831 830 845 846\r\nf 824 823 838 839\r\nf 832 831 846 847\r\nf 825 824 839 840\r\nf 833 832 847 848\r\nf 826 825 840 841\r\nf 834 833 848 849\r\nf 827 826 841 842\r\nf 835 834 849 850\r\nf 828 827 842 843\r\nf 840 839 854 855\r\nf 848 847 862 863\r\nf 841 840 855 856\r\nf 849 848 863 864\r\nf 842 841 856 857\r\nf 850 849 864 865\r\nf 843 842 857 858\r\nf 836 564 851\r\nf 790 850 865\r\nf 844 843 858 859\r\nf 837 836 851 852\r\nf 845 844 859 860\r\nf 838 837 852 853\r\nf 846 845 860 861\r\nf 839 838 853 854\r\nf 847 846 861 862\r\nf 859 858 873 874\r\nf 852 851 866 867\r\nf 860 859 874 875\r\nf 853 852 867 868\r\nf 861 860 875 876\r\nf 854 853 868 869\r\nf 862 861 876 877\r\nf 855 854 869 870\r\nf 863 862 877 878\r\nf 856 855 870 871\r\nf 864 863 878 879\r\nf 857 856 871 872\r\nf 865 864 879 880\r\nf 858 857 872 873\r\nf 851 564 866\r\nf 790 865 880\r\nf 878 877 892 893\r\nf 871 870 885 886\r\nf 879 878 893 894\r\nf 872 871 886 887\r\nf 880 879 894 895\r\nf 873 872 887 888\r\nf 866 564 881\r\nf 790 880 895\r\nf 874 873 888 889\r\nf 867 866 881 882\r\nf 875 874 889 890\r\nf 868 867 882 883\r\nf 876 875 890 891\r\nf 869 868 883 884\r\nf 877 876 891 892\r\nf 870 869 884 885\r\nf 882 881 896 897\r\nf 890 889 904 905\r\nf 883 882 897 898\r\nf 891 890 905 906\r\nf 884 883 898 899\r\nf 892 891 906 907\r\nf 885 884 899 900\r\nf 893 892 907 908\r\nf 886 885 900 901\r\nf 894 893 908 909\r\nf 887 886 901 902\r\nf 895 894 909 910\r\nf 888 887 902 903\r\nf 881 564 896\r\nf 790 895 910\r\nf 889 888 903 904\r\nf 901 900 915 916\r\nf 909 908 923 924\r\nf 902 901 916 917\r\nf 910 909 924 925\r\nf 903 902 917 918\r\nf 896 564 911\r\nf 790 910 925\r\nf 904 903 918 919\r\nf 897 896 911 912\r\nf 905 904 919 920\r\nf 898 897 912 913\r\nf 906 905 920 921\r\nf 899 898 913 914\r\nf 907 906 921 922\r\nf 900 899 914 915\r\nf 908 907 922 923\r\nf 920 919 934 935\r\nf 913 912 927 928\r\nf 921 920 935 936\r\nf 914 913 928 929\r\nf 922 921 936 937\r\nf 915 914 929 930\r\nf 923 922 937 938\r\nf 916 915 930 931\r\nf 924 923 938 939\r\nf 917 916 931 932\r\nf 925 924 939 940\r\nf 918 917 932 933\r\nf 911 564 926\r\nf 790 925 940\r\nf 919 918 933 934\r\nf 912 911 926 927\r\nf 939 938 953 954\r\nf 932 931 946 947\r\nf 940 939 954 955\r\nf 933 932 947 948\r\nf 926 564 941\r\nf 790 940 955\r\nf 934 933 948 949\r\nf 927 926 941 942\r\nf 935 934 949 950\r\nf 928 927 942 943\r\nf 936 935 950 951\r\nf 929 928 943 944\r\nf 937 936 951 952\r\nf 930 929 944 945\r\nf 938 937 952 953\r\nf 931 930 945 946\r\nf 951 950 960 488\r\nf 944 943 483 958\r\nf 952 951 488 961\r\nf 945 944 958 484\r\nf 953 952 961 962\r\nf 946 945 484 959\r\nf 954 953 962 963\r\nf 947 946 959 485\r\nf 955 954 963 964\r\nf 948 947 485 486\r\nf 941 564 956\r\nf 790 955 964\r\nf 949 948 486 487\r\nf 942 941 956 957\r\nf 950 949 487 960\r\nf 943 942 957 483\r\nv 0.500000 1.173766 0.444443\r\nv 0.500000 1.116107 0.416853\r\nv 0.500000 1.040771 0.401922\r\nv 0.500000 1.000000 0.400000\r\nv 0.500000 0.959229 0.401922\r\nv 0.500000 0.883893 0.416853\r\nv 0.503806 1.204971 0.480866\r\nv 0.507466 1.193079 0.462467\r\nv 0.510839 1.173766 0.445511\r\nv 0.513795 1.147776 0.430648\r\nv 0.516221 1.116107 0.418451\r\nv 0.518024 1.079976 0.409387\r\nv 0.519134 1.040771 0.403806\r\nv 0.519509 1.000000 0.401922\r\nv 0.519134 0.959229 0.403806\r\nv 0.518024 0.920024 0.409387\r\nv 0.516221 0.883893 0.418451\r\nv 0.513795 0.852224 0.430648\r\nv 0.510839 0.826234 0.445511\r\nv 0.507466 0.806921 0.462467\r\nv 0.503806 0.795029 0.480866\r\nv 0.507466 1.204971 0.481976\r\nv 0.514645 1.193079 0.464645\r\nv 0.521261 1.173766 0.448672\r\nv 0.527060 1.147776 0.434672\r\nv 0.531819 1.116107 0.423182\r\nv 0.535355 1.079976 0.414645\r\nv 0.537533 1.040771 0.409387\r\nv 0.538268 1.000000 0.407612\r\nv 0.537533 0.959229 0.409387\r\nv 0.535355 0.920024 0.414645\r\nv 0.531819 0.883893 0.423182\r\nv 0.527060 0.852224 0.434672\r\nv 0.521261 0.826234 0.448672\r\nv 0.514645 0.806921 0.464645\r\nv 0.507466 0.795029 0.481976\r\nv 0.510839 1.204971 0.483779\r\nv 0.521261 1.193079 0.468181\r\nv 0.530866 1.173766 0.453806\r\nv 0.539285 1.147776 0.441206\r\nv 0.546194 1.116107 0.430866\r\nv 0.551328 1.079976 0.423182\r\nv 0.554489 1.040771 0.418451\r\nv 0.555557 1.000000 0.416853\r\nv 0.554489 0.959229 0.418451\r\nv 0.551328 0.920024 0.423182\r\nv 0.546194 0.883893 0.430866\r\nv 0.539285 0.852224 0.441206\r\nv 0.530866 0.826234 0.453806\r\nv 0.521261 0.806921 0.468181\r\nv 0.510839 0.795029 0.483779\r\nv 0.513795 1.204971 0.486205\r\nv 0.527060 1.193079 0.472940\r\nv 0.539285 1.173766 0.460715\r\nv 0.550000 1.147776 0.450000\r\nv 0.558794 1.116107 0.441206\r\nv 0.565328 1.079976 0.434672\r\nv 0.569352 1.040771 0.430648\r\nv 0.570711 1.000000 0.429289\r\nv 0.569352 0.959229 0.430648\r\nv 0.565328 0.920024 0.434672\r\nv 0.558794 0.883893 0.441206\r\nv 0.550000 0.852224 0.450000\r\nv 0.539285 0.826234 0.460715\r\nv 0.527060 0.806921 0.472940\r\nv 0.513795 0.795029 0.486205\r\nv 0.516221 1.204971 0.489161\r\nv 0.531819 1.193079 0.478739\r\nv 0.546194 1.173766 0.469134\r\nv 0.558794 1.147776 0.460715\r\nv 0.569134 1.116107 0.453806\r\nv 0.576818 1.079976 0.448672\r\nv 0.581549 1.040771 0.445511\r\nv 0.583147 1.000000 0.444443\r\nv 0.581549 0.959229 0.445511\r\nv 0.576818 0.920024 0.448672\r\nv 0.569134 0.883893 0.453806\r\nv 0.558794 0.852224 0.460715\r\nv 0.546194 0.826234 0.469134\r\nv 0.531819 0.806921 0.478739\r\nv 0.516221 0.795029 0.489161\r\nv 0.500000 1.208987 0.500000\r\nv 0.518024 1.204971 0.492534\r\nv 0.535355 1.193079 0.485355\r\nv 0.551328 1.173766 0.478739\r\nv 0.565328 1.147776 0.472940\r\nv 0.576818 1.116107 0.468181\r\nv 0.585355 1.079976 0.464645\r\nv 0.590613 1.040771 0.462467\r\nv 0.592388 1.000000 0.461732\r\nv 0.590613 0.959229 0.462467\r\nv 0.585355 0.920024 0.464645\r\nv 0.576818 0.883893 0.468181\r\nv 0.565328 0.852224 0.472940\r\nv 0.551328 0.826234 0.478739\r\nv 0.535355 0.806921 0.485355\r\nv 0.518024 0.795029 0.492534\r\nv 0.519134 1.204971 0.496194\r\nv 0.537533 1.193079 0.492534\r\nv 0.554489 1.173766 0.489161\r\nv 0.569352 1.147776 0.486205\r\nv 0.581549 1.116107 0.483779\r\nv 0.590613 1.079976 0.481976\r\nv 0.596194 1.040771 0.480866\r\nv 0.598079 1.000000 0.480491\r\nv 0.596194 0.959229 0.480866\r\nv 0.590613 0.920024 0.481976\r\nv 0.581549 0.883893 0.483779\r\nv 0.569352 0.852224 0.486205\r\nv 0.554489 0.826234 0.489161\r\nv 0.537533 0.806921 0.492534\r\nv 0.519134 0.795029 0.496194\r\nv 0.519509 1.204971 0.500000\r\nv 0.538268 1.193079 0.500000\r\nv 0.555557 1.173766 0.500000\r\nv 0.570711 1.147776 0.500000\r\nv 0.583147 1.116107 0.500000\r\nv 0.592388 1.079976 0.500000\r\nv 0.598079 1.040771 0.500000\r\nv 0.600000 1.000000 0.500000\r\nv 0.598079 0.959229 0.500000\r\nv 0.592388 0.920024 0.500000\r\nv 0.583147 0.883893 0.500000\r\nv 0.570711 0.852224 0.500000\r\nv 0.555557 0.826234 0.500000\r\nv 0.538268 0.806921 0.500000\r\nv 0.519509 0.795029 0.500000\r\nv 0.519134 1.204971 0.503806\r\nv 0.537533 1.193079 0.507466\r\nv 0.554489 1.173766 0.510839\r\nv 0.569352 1.147776 0.513795\r\nv 0.581549 1.116107 0.516221\r\nv 0.590613 1.079976 0.518024\r\nv 0.596194 1.040771 0.519134\r\nv 0.598078 1.000000 0.519509\r\nv 0.596194 0.959229 0.519134\r\nv 0.590613 0.920024 0.518024\r\nv 0.581549 0.883893 0.516221\r\nv 0.569352 0.852224 0.513795\r\nv 0.554489 0.826234 0.510839\r\nv 0.537533 0.806921 0.507466\r\nv 0.519134 0.795029 0.503806\r\nv 0.518024 1.204971 0.507466\r\nv 0.535355 1.193079 0.514645\r\nv 0.551328 1.173766 0.521261\r\nv 0.565328 1.147776 0.527060\r\nv 0.576818 1.116107 0.531819\r\nv 0.585355 1.079976 0.535355\r\nv 0.590613 1.040771 0.537533\r\nv 0.592388 1.000000 0.538268\r\nv 0.590613 0.959229 0.537533\r\nv 0.585355 0.920024 0.535355\r\nv 0.576818 0.883893 0.531819\r\nv 0.565328 0.852224 0.527060\r\nv 0.551328 0.826234 0.521261\r\nv 0.535355 0.806921 0.514645\r\nv 0.518024 0.795029 0.507466\r\nv 0.516221 1.204971 0.510839\r\nv 0.531819 1.193079 0.521261\r\nv 0.546194 1.173766 0.530866\r\nv 0.558794 1.147776 0.539285\r\nv 0.569134 1.116107 0.546194\r\nv 0.576818 1.079976 0.551328\r\nv 0.581549 1.040771 0.554490\r\nv 0.583147 1.000000 0.555557\r\nv 0.581549 0.959229 0.554490\r\nv 0.576818 0.920024 0.551328\r\nv 0.569134 0.883893 0.546194\r\nv 0.558794 0.852224 0.539285\r\nv 0.546194 0.826234 0.530866\r\nv 0.531819 0.806921 0.521261\r\nv 0.516221 0.795029 0.510839\r\nv 0.513795 1.204971 0.513795\r\nv 0.527060 1.193079 0.527060\r\nv 0.539285 1.173766 0.539285\r\nv 0.550000 1.147776 0.550000\r\nv 0.558794 1.116107 0.558794\r\nv 0.565328 1.079976 0.565328\r\nv 0.569352 1.040771 0.569352\r\nv 0.570711 1.000000 0.570711\r\nv 0.569352 0.959229 0.569352\r\nv 0.565328 0.920024 0.565328\r\nv 0.558794 0.883893 0.558794\r\nv 0.550000 0.852224 0.550000\r\nv 0.539285 0.826234 0.539285\r\nv 0.527060 0.806921 0.527060\r\nv 0.513795 0.795029 0.513795\r\nv 0.510839 1.204971 0.516221\r\nv 0.521261 1.193079 0.531819\r\nv 0.530866 1.173766 0.546194\r\nv 0.539285 1.147776 0.558794\r\nv 0.546194 1.116107 0.569134\r\nv 0.551328 1.079976 0.576818\r\nv 0.554489 1.040771 0.581549\r\nv 0.555557 1.000000 0.583147\r\nv 0.554489 0.959229 0.581549\r\nv 0.551328 0.920024 0.576818\r\nv 0.546194 0.883893 0.569134\r\nv 0.539285 0.852224 0.558794\r\nv 0.530866 0.826234 0.546194\r\nv 0.521261 0.806921 0.531819\r\nv 0.510839 0.795029 0.516221\r\nv 0.507466 1.204971 0.518024\r\nv 0.514645 1.193079 0.535355\r\nv 0.521261 1.173766 0.551328\r\nv 0.527060 1.147776 0.565328\r\nv 0.531819 1.116107 0.576818\r\nv 0.535355 1.079976 0.585355\r\nv 0.537533 1.040771 0.590613\r\nv 0.538268 1.000000 0.592388\r\nv 0.537533 0.959229 0.590613\r\nv 0.535355 0.920024 0.585355\r\nv 0.531819 0.883893 0.576818\r\nv 0.527060 0.852224 0.565328\r\nv 0.521261 0.826234 0.551328\r\nv 0.514645 0.806921 0.535355\r\nv 0.507466 0.795029 0.518024\r\nv 0.503806 1.204971 0.519134\r\nv 0.507466 1.193079 0.537533\r\nv 0.510839 1.173766 0.554490\r\nv 0.513795 1.147776 0.569352\r\nv 0.516221 1.116107 0.581549\r\nv 0.518024 1.079976 0.590613\r\nv 0.519134 1.040771 0.596194\r\nv 0.519509 1.000000 0.598079\r\nv 0.519134 0.959229 0.596194\r\nv 0.518024 0.920024 0.590613\r\nv 0.516221 0.883893 0.581549\r\nv 0.513795 0.852224 0.569352\r\nv 0.510839 0.826234 0.554490\r\nv 0.507466 0.806921 0.537533\r\nv 0.503806 0.795029 0.519134\r\nv 0.500000 1.204971 0.519509\r\nv 0.500000 1.193079 0.538268\r\nv 0.500000 1.173766 0.555557\r\nv 0.500000 1.147776 0.570711\r\nv 0.500000 1.116107 0.583147\r\nv 0.500000 1.079976 0.592388\r\nv 0.500000 1.040771 0.598079\r\nv 0.500000 1.000000 0.600000\r\nv 0.500000 0.959229 0.598079\r\nv 0.500000 0.920024 0.592388\r\nv 0.500000 0.883893 0.583147\r\nv 0.500000 0.852224 0.570711\r\nv 0.500000 0.826234 0.555557\r\nv 0.500000 0.806921 0.538268\r\nv 0.500000 0.795029 0.519509\r\nv 0.496194 1.204971 0.519134\r\nv 0.492534 1.193079 0.537533\r\nv 0.489161 1.173766 0.554490\r\nv 0.486205 1.147776 0.569352\r\nv 0.483779 1.116107 0.581549\r\nv 0.481976 1.079976 0.590613\r\nv 0.480866 1.040771 0.596194\r\nv 0.480491 1.000000 0.598079\r\nv 0.480866 0.959229 0.596194\r\nv 0.481976 0.920024 0.590613\r\nv 0.483779 0.883893 0.581549\r\nv 0.486205 0.852224 0.569352\r\nv 0.489161 0.826234 0.554490\r\nv 0.492534 0.806921 0.537533\r\nv 0.496194 0.795029 0.519134\r\nv 0.492534 1.204971 0.518024\r\nv 0.485355 1.193079 0.535355\r\nv 0.478739 1.173766 0.551328\r\nv 0.472940 1.147776 0.565328\r\nv 0.468181 1.116107 0.576818\r\nv 0.464645 1.079976 0.585355\r\nv 0.462467 1.040771 0.590613\r\nv 0.461732 1.000000 0.592388\r\nv 0.462467 0.959229 0.590613\r\nv 0.464645 0.920024 0.585355\r\nv 0.468181 0.883893 0.576818\r\nv 0.472940 0.852224 0.565328\r\nv 0.478739 0.826234 0.551328\r\nv 0.485355 0.806921 0.535355\r\nv 0.492534 0.795029 0.518024\r\nv 0.489161 1.204971 0.516221\r\nv 0.478739 1.193079 0.531819\r\nv 0.469134 1.173766 0.546194\r\nv 0.460715 1.147776 0.558794\r\nv 0.453806 1.116107 0.569134\r\nv 0.448672 1.079976 0.576818\r\nv 0.445510 1.040771 0.581549\r\nv 0.444443 1.000000 0.583147\r\nv 0.445510 0.959229 0.581549\r\nv 0.448672 0.920024 0.576818\r\nv 0.453806 0.883893 0.569134\r\nv 0.460715 0.852224 0.558794\r\nv 0.469134 0.826234 0.546194\r\nv 0.478739 0.806921 0.531819\r\nv 0.489161 0.795029 0.516221\r\nv 0.486205 1.204971 0.513795\r\nv 0.472940 1.193079 0.527060\r\nv 0.460715 1.173766 0.539285\r\nv 0.450000 1.147776 0.550000\r\nv 0.441206 1.116107 0.558794\r\nv 0.434672 1.079976 0.565328\r\nv 0.430648 1.040771 0.569352\r\nv 0.429289 1.000000 0.570711\r\nv 0.430648 0.959229 0.569352\r\nv 0.434672 0.920024 0.565328\r\nv 0.441206 0.883893 0.558794\r\nv 0.450000 0.852224 0.550000\r\nv 0.460715 0.826234 0.539285\r\nv 0.472940 0.806921 0.527060\r\nv 0.486205 0.795029 0.513795\r\nv 0.500000 0.791013 0.500000\r\nv 0.483779 1.204971 0.510839\r\nv 0.468181 1.193079 0.521261\r\nv 0.453806 1.173766 0.530866\r\nv 0.441206 1.147776 0.539285\r\nv 0.430866 1.116107 0.546194\r\nv 0.423182 1.079976 0.551328\r\nv 0.418451 1.040771 0.554490\r\nv 0.416853 1.000000 0.555557\r\nv 0.418451 0.959229 0.554490\r\nv 0.423182 0.920024 0.551328\r\nv 0.430866 0.883893 0.546194\r\nv 0.441206 0.852224 0.539285\r\nv 0.453806 0.826234 0.530866\r\nv 0.468181 0.806921 0.521261\r\nv 0.483779 0.795029 0.510839\r\nv 0.481976 1.204971 0.507466\r\nv 0.464645 1.193079 0.514645\r\nv 0.448672 1.173766 0.521261\r\nv 0.434672 1.147776 0.527060\r\nv 0.423182 1.116107 0.531819\r\nv 0.414645 1.079976 0.535355\r\nv 0.409387 1.040771 0.537533\r\nv 0.407612 1.000000 0.538268\r\nv 0.409387 0.959229 0.537533\r\nv 0.414645 0.920024 0.535355\r\nv 0.423182 0.883893 0.531819\r\nv 0.434672 0.852224 0.527060\r\nv 0.448672 0.826234 0.521261\r\nv 0.464645 0.806921 0.514645\r\nv 0.481976 0.795029 0.507466\r\nv 0.480866 1.204971 0.503806\r\nv 0.462467 1.193079 0.507466\r\nv 0.445511 1.173766 0.510839\r\nv 0.430648 1.147776 0.513795\r\nv 0.418451 1.116107 0.516221\r\nv 0.409387 1.079976 0.518024\r\nv 0.403806 1.040771 0.519134\r\nv 0.401922 1.000000 0.519509\r\nv 0.403806 0.959229 0.519134\r\nv 0.409387 0.920024 0.518024\r\nv 0.418451 0.883893 0.516221\r\nv 0.430648 0.852224 0.513795\r\nv 0.445511 0.826234 0.510839\r\nv 0.462467 0.806921 0.507466\r\nv 0.480866 0.795029 0.503806\r\nv 0.480491 1.204971 0.500000\r\nv 0.461732 1.193079 0.500000\r\nv 0.444443 1.173766 0.500000\r\nv 0.429289 1.147776 0.500000\r\nv 0.416853 1.116107 0.500000\r\nv 0.407612 1.079976 0.500000\r\nv 0.401922 1.040771 0.500000\r\nv 0.400000 1.000000 0.500000\r\nv 0.401922 0.959229 0.500000\r\nv 0.407612 0.920024 0.500000\r\nv 0.416853 0.883893 0.500000\r\nv 0.429289 0.852224 0.500000\r\nv 0.444443 0.826234 0.500000\r\nv 0.461732 0.806921 0.500000\r\nv 0.480491 0.795029 0.500000\r\nv 0.480866 1.204971 0.496194\r\nv 0.462467 1.193079 0.492534\r\nv 0.445511 1.173766 0.489161\r\nv 0.430648 1.147776 0.486205\r\nv 0.418451 1.116107 0.483779\r\nv 0.409387 1.079976 0.481976\r\nv 0.403806 1.040771 0.480866\r\nv 0.401922 1.000000 0.480491\r\nv 0.403806 0.959229 0.480866\r\nv 0.409387 0.920024 0.481976\r\nv 0.418451 0.883893 0.483779\r\nv 0.430648 0.852224 0.486205\r\nv 0.445511 0.826234 0.489161\r\nv 0.462467 0.806921 0.492534\r\nv 0.480866 0.795029 0.496194\r\nv 0.481976 1.204971 0.492534\r\nv 0.464645 1.193079 0.485355\r\nv 0.448672 1.173766 0.478739\r\nv 0.434672 1.147776 0.472940\r\nv 0.423182 1.116107 0.468181\r\nv 0.414645 1.079976 0.464645\r\nv 0.409387 1.040771 0.462467\r\nv 0.407612 1.000000 0.461732\r\nv 0.409387 0.959229 0.462467\r\nv 0.414645 0.920024 0.464645\r\nv 0.423182 0.883893 0.468181\r\nv 0.434672 0.852224 0.472940\r\nv 0.448672 0.826234 0.478739\r\nv 0.464645 0.806921 0.485355\r\nv 0.481976 0.795029 0.492534\r\nv 0.483779 1.204971 0.489161\r\nv 0.468181 1.193079 0.478739\r\nv 0.453806 1.173766 0.469134\r\nv 0.441206 1.147776 0.460715\r\nv 0.430866 1.116107 0.453806\r\nv 0.423182 1.079976 0.448672\r\nv 0.418451 1.040771 0.445511\r\nv 0.416853 1.000000 0.444443\r\nv 0.418451 0.959229 0.445511\r\nv 0.423182 0.920024 0.448672\r\nv 0.430866 0.883893 0.453806\r\nv 0.441206 0.852224 0.460715\r\nv 0.453806 0.826234 0.469134\r\nv 0.468181 0.806921 0.478739\r\nv 0.483779 0.795029 0.489161\r\nv 0.486205 1.204971 0.486205\r\nv 0.472940 1.193079 0.472940\r\nv 0.460715 1.173766 0.460715\r\nv 0.450000 1.147776 0.450000\r\nv 0.441206 1.116107 0.441206\r\nv 0.434672 1.079976 0.434672\r\nv 0.430648 1.040771 0.430648\r\nv 0.429289 1.000000 0.429289\r\nv 0.430648 0.959229 0.430648\r\nv 0.434672 0.920024 0.434672\r\nv 0.441206 0.883893 0.441206\r\nv 0.450000 0.852224 0.450000\r\nv 0.460715 0.826234 0.460715\r\nv 0.472940 0.806921 0.472940\r\nv 0.486205 0.795029 0.486205\r\nv 0.489161 1.204971 0.483779\r\nv 0.478739 1.193079 0.468181\r\nv 0.469134 1.173766 0.453806\r\nv 0.460715 1.147776 0.441206\r\nv 0.453806 1.116107 0.430866\r\nv 0.448672 1.079976 0.423182\r\nv 0.445511 1.040771 0.418451\r\nv 0.444443 1.000000 0.416853\r\nv 0.445511 0.959229 0.418451\r\nv 0.448672 0.920024 0.423182\r\nv 0.453806 0.883893 0.430866\r\nv 0.460715 0.852224 0.441206\r\nv 0.469134 0.826234 0.453806\r\nv 0.478739 0.806921 0.468181\r\nv 0.489161 0.795029 0.483779\r\nv 0.492534 1.204971 0.481976\r\nv 0.485355 1.193079 0.464645\r\nv 0.478739 1.173766 0.448672\r\nv 0.472940 1.147776 0.434672\r\nv 0.468181 1.116107 0.423182\r\nv 0.464645 1.079976 0.414645\r\nv 0.462467 1.040771 0.409387\r\nv 0.461732 1.000000 0.407612\r\nv 0.462467 0.959229 0.409387\r\nv 0.464645 0.920024 0.414645\r\nv 0.468181 0.883893 0.423182\r\nv 0.472940 0.852224 0.434672\r\nv 0.478739 0.826234 0.448672\r\nv 0.485355 0.806921 0.464645\r\nv 0.492534 0.795029 0.481976\r\nv 0.496194 1.204971 0.480866\r\nv 0.492534 1.193079 0.462467\r\nv 0.489161 1.173766 0.445511\r\nv 0.486205 1.147776 0.430648\r\nv 0.483779 1.116107 0.418451\r\nv 0.481976 1.079976 0.409387\r\nv 0.480866 1.040771 0.403806\r\nv 0.480491 1.000000 0.401922\r\nv 0.480866 0.959229 0.403806\r\nv 0.481976 0.920024 0.409387\r\nv 0.483779 0.883893 0.418451\r\nv 0.486205 0.852224 0.430648\r\nv 0.489161 0.826234 0.445511\r\nv 0.492534 0.806921 0.462467\r\nv 0.496194 0.795029 0.480866\r\nv 0.500000 1.204971 0.480491\r\nv 0.500000 1.193079 0.461732\r\nv 0.500000 1.147776 0.429289\r\nv 0.500000 1.079976 0.407612\r\nv 0.500000 0.920024 0.407612\r\nv 0.500000 0.852224 0.429289\r\nv 0.500000 0.826234 0.444443\r\nv 0.500000 0.806921 0.461732\r\nv 0.500000 0.795029 0.480491\r\nf 965 1439 972 973\r\nf 970 1442 980 981\r\nf 1440 965 973 974\r\nf 1443 970 981 982\r\nf 966 1440 974 975\r\nf 1444 1443 982 983\r\nf 1441 966 975 976\r\nf 1445 1444 983 984\r\nf 967 1441 976 977\r\nf 1446 1445 984 985\r\nf 968 967 977 978\r\nf 1438 1046 971\r\nf 1272 1446 985\r\nf 969 968 978 979\r\nf 1439 1438 971 972\r\nf 1442 969 979 980\r\nf 979 978 993 994\r\nf 972 971 986 987\r\nf 980 979 994 995\r\nf 973 972 987 988\r\nf 981 980 995 996\r\nf 974 973 988 989\r\nf 982 981 996 997\r\nf 975 974 989 990\r\nf 983 982 997 998\r\nf 976 975 990 991\r\nf 984 983 998 999\r\nf 977 976 991 992\r\nf 985 984 999 1000\r\nf 978 977 992 993\r\nf 971 1046 986\r\nf 1272 985 1000\r\nf 998 997 1012 1013\r\nf 991 990 1005 1006\r\nf 999 998 1013 1014\r\nf 992 991 1006 1007\r\nf 1000 999 1014 1015\r\nf 993 992 1007 1008\r\nf 986 1046 1001\r\nf 1272 1000 1015\r\nf 994 993 1008 1009\r\nf 987 986 1001 1002\r\nf 995 994 1009 1010\r\nf 988 987 1002 1003\r\nf 996 995 1010 1011\r\nf 989 988 1003 1004\r\nf 997 996 1011 1012\r\nf 990 989 1004 1005\r\nf 1010 1009 1024 1025\r\nf 1003 1002 1017 1018\r\nf 1011 1010 1025 1026\r\nf 1004 1003 1018 1019\r\nf 1012 1011 1026 1027\r\nf 1005 1004 1019 1020\r\nf 1013 1012 1027 1028\r\nf 1006 1005 1020 1021\r\nf 1014 1013 1028 1029\r\nf 1007 1006 1021 1022\r\nf 1015 1014 1029 1030\r\nf 1008 1007 1022 1023\r\nf 1001 1046 1016\r\nf 1272 1015 1030\r\nf 1009 1008 1023 1024\r\nf 1002 1001 1016 1017\r\nf 1029 1028 1043 1044\r\nf 1022 1021 1036 1037\r\nf 1030 1029 1044 1045\r\nf 1023 1022 1037 1038\r\nf 1016 1046 1031\r\nf 1272 1030 1045\r\nf 1024 1023 1038 1039\r\nf 1017 1016 1031 1032\r\nf 1025 1024 1039 1040\r\nf 1018 1017 1032 1033\r\nf 1026 1025 1040 1041\r\nf 1019 1018 1033 1034\r\nf 1027 1026 1041 1042\r\nf 1020 1019 1034 1035\r\nf 1028 1027 1042 1043\r\nf 1021 1020 1035 1036\r\nf 1033 1032 1048 1049\r\nf 1041 1040 1056 1057\r\nf 1034 1033 1049 1050\r\nf 1042 1041 1057 1058\r\nf 1035 1034 1050 1051\r\nf 1043 1042 1058 1059\r\nf 1036 1035 1051 1052\r\nf 1044 1043 1059 1060\r\nf 1037 1036 1052 1053\r\nf 1045 1044 1060 1061\r\nf 1038 1037 1053 1054\r\nf 1031 1046 1047\r\nf 1272 1045 1061\r\nf 1039 1038 1054 1055\r\nf 1032 1031 1047 1048\r\nf 1040 1039 1055 1056\r\nf 1053 1052 1067 1068\r\nf 1061 1060 1075 1076\r\nf 1054 1053 1068 1069\r\nf 1047 1046 1062\r\nf 1272 1061 1076\r\nf 1055 1054 1069 1070\r\nf 1048 1047 1062 1063\r\nf 1056 1055 1070 1071\r\nf 1049 1048 1063 1064\r\nf 1057 1056 1071 1072\r\nf 1050 1049 1064 1065\r\nf 1058 1057 1072 1073\r\nf 1051 1050 1065 1066\r\nf 1059 1058 1073 1074\r\nf 1052 1051 1066 1067\r\nf 1060 1059 1074 1075\r\nf 1072 1071 1086 1087\r\nf 1065 1064 1079 1080\r\nf 1073 1072 1087 1088\r\nf 1066 1065 1080 1081\r\nf 1074 1073 1088 1089\r\nf 1067 1066 1081 1082\r\nf 1075 1074 1089 1090\r\nf 1068 1067 1082 1083\r\nf 1076 1075 1090 1091\r\nf 1069 1068 1083 1084\r\nf 1062 1046 1077\r\nf 1272 1076 1091\r\nf 1070 1069 1084 1085\r\nf 1063 1062 1077 1078\r\nf 1071 1070 1085 1086\r\nf 1064 1063 1078 1079\r\nf 1091 1090 1105 1106\r\nf 1084 1083 1098 1099\r\nf 1077 1046 1092\r\nf 1272 1091 1106\r\nf 1085 1084 1099 1100\r\nf 1078 1077 1092 1093\r\nf 1086 1085 1100 1101\r\nf 1079 1078 1093 1094\r\nf 1087 1086 1101 1102\r\nf 1080 1079 1094 1095\r\nf 1088 1087 1102 1103\r\nf 1081 1080 1095 1096\r\nf 1089 1088 1103 1104\r\nf 1082 1081 1096 1097\r\nf 1090 1089 1104 1105\r\nf 1083 1082 1097 1098\r\nf 1095 1094 1109 1110\r\nf 1103 1102 1117 1118\r\nf 1096 1095 1110 1111\r\nf 1104 1103 1118 1119\r\nf 1097 1096 1111 1112\r\nf 1105 1104 1119 1120\r\nf 1098 1097 1112 1113\r\nf 1106 1105 1120 1121\r\nf 1099 1098 1113 1114\r\nf 1092 1046 1107\r\nf 1272 1106 1121\r\nf 1100 1099 1114 1115\r\nf 1093 1092 1107 1108\r\nf 1101 1100 1115 1116\r\nf 1094 1093 1108 1109\r\nf 1102 1101 1116 1117\r\nf 1114 1113 1128 1129\r\nf 1107 1046 1122\r\nf 1272 1121 1136\r\nf 1115 1114 1129 1130\r\nf 1108 1107 1122 1123\r\nf 1116 1115 1130 1131\r\nf 1109 1108 1123 1124\r\nf 1117 1116 1131 1132\r\nf 1110 1109 1124 1125\r\nf 1118 1117 1132 1133\r\nf 1111 1110 1125 1126\r\nf 1119 1118 1133 1134\r\nf 1112 1111 1126 1127\r\nf 1120 1119 1134 1135\r\nf 1113 1112 1127 1128\r\nf 1121 1120 1135 1136\r\nf 1133 1132 1147 1148\r\nf 1126 1125 1140 1141\r\nf 1134 1133 1148 1149\r\nf 1127 1126 1141 1142\r\nf 1135 1134 1149 1150\r\nf 1128 1127 1142 1143\r\nf 1136 1135 1150 1151\r\nf 1129 1128 1143 1144\r\nf 1122 1046 1137\r\nf 1272 1136 1151\r\nf 1130 1129 1144 1145\r\nf 1123 1122 1137 1138\r\nf 1131 1130 1145 1146\r\nf 1124 1123 1138 1139\r\nf 1132 1131 1146 1147\r\nf 1125 1124 1139 1140\r\nf 1272 1151 1166\r\nf 1145 1144 1159 1160\r\nf 1138 1137 1152 1153\r\nf 1146 1145 1160 1161\r\nf 1139 1138 1153 1154\r\nf 1147 1146 1161 1162\r\nf 1140 1139 1154 1155\r\nf 1148 1147 1162 1163\r\nf 1141 1140 1155 1156\r\nf 1149 1148 1163 1164\r\nf 1142 1141 1156 1157\r\nf 1150 1149 1164 1165\r\nf 1143 1142 1157 1158\r\nf 1151 1150 1165 1166\r\nf 1144 1143 1158 1159\r\nf 1137 1046 1152\r\nf 1164 1163 1178 1179\r\nf 1157 1156 1171 1172\r\nf 1165 1164 1179 1180\r\nf 1158 1157 1172 1173\r\nf 1166 1165 1180 1181\r\nf 1159 1158 1173 1174\r\nf 1152 1046 1167\r\nf 1272 1166 1181\r\nf 1160 1159 1174 1175\r\nf 1153 1152 1167 1168\r\nf 1161 1160 1175 1176\r\nf 1154 1153 1168 1169\r\nf 1162 1161 1176 1177\r\nf 1155 1154 1169 1170\r\nf 1163 1162 1177 1178\r\nf 1156 1155 1170 1171\r\nf 1168 1167 1182 1183\r\nf 1176 1175 1190 1191\r\nf 1169 1168 1183 1184\r\nf 1177 1176 1191 1192\r\nf 1170 1169 1184 1185\r\nf 1178 1177 1192 1193\r\nf 1171 1170 1185 1186\r\nf 1179 1178 1193 1194\r\nf 1172 1171 1186 1187\r\nf 1180 1179 1194 1195\r\nf 1173 1172 1187 1188\r\nf 1181 1180 1195 1196\r\nf 1174 1173 1188 1189\r\nf 1167 1046 1182\r\nf 1272 1181 1196\r\nf 1175 1174 1189 1190\r\nf 1187 1186 1201 1202\r\nf 1195 1194 1209 1210\r\nf 1188 1187 1202 1203\r\nf 1196 1195 1210 1211\r\nf 1189 1188 1203 1204\r\nf 1182 1046 1197\r\nf 1272 1196 1211\r\nf 1190 1189 1204 1205\r\nf 1183 1182 1197 1198\r\nf 1191 1190 1205 1206\r\nf 1184 1183 1198 1199\r\nf 1192 1191 1206 1207\r\nf 1185 1184 1199 1200\r\nf 1193 1192 1207 1208\r\nf 1186 1185 1200 1201\r\nf 1194 1193 1208 1209\r\nf 1206 1205 1220 1221\r\nf 1199 1198 1213 1214\r\nf 1207 1206 1221 1222\r\nf 1200 1199 1214 1215\r\nf 1208 1207 1222 1223\r\nf 1201 1200 1215 1216\r\nf 1209 1208 1223 1224\r\nf 1202 1201 1216 1217\r\nf 1210 1209 1224 1225\r\nf 1203 1202 1217 1218\r\nf 1211 1210 1225 1226\r\nf 1204 1203 1218 1219\r\nf 1197 1046 1212\r\nf 1272 1211 1226\r\nf 1205 1204 1219 1220\r\nf 1198 1197 1212 1213\r\nf 1225 1224 1239 1240\r\nf 1218 1217 1232 1233\r\nf 1226 1225 1240 1241\r\nf 1219 1218 1233 1234\r\nf 1212 1046 1227\r\nf 1272 1226 1241\r\nf 1220 1219 1234 1235\r\nf 1213 1212 1227 1228\r\nf 1221 1220 1235 1236\r\nf 1214 1213 1228 1229\r\nf 1222 1221 1236 1237\r\nf 1215 1214 1229 1230\r\nf 1223 1222 1237 1238\r\nf 1216 1215 1230 1231\r\nf 1224 1223 1238 1239\r\nf 1217 1216 1231 1232\r\nf 1229 1228 1243 1244\r\nf 1237 1236 1251 1252\r\nf 1230 1229 1244 1245\r\nf 1238 1237 1252 1253\r\nf 1231 1230 1245 1246\r\nf 1239 1238 1253 1254\r\nf 1232 1231 1246 1247\r\nf 1240 1239 1254 1255\r\nf 1233 1232 1247 1248\r\nf 1241 1240 1255 1256\r\nf 1234 1233 1248 1249\r\nf 1227 1046 1242\r\nf 1272 1241 1256\r\nf 1235 1234 1249 1250\r\nf 1228 1227 1242 1243\r\nf 1236 1235 1250 1251\r\nf 1248 1247 1262 1263\r\nf 1256 1255 1270 1271\r\nf 1249 1248 1263 1264\r\nf 1242 1046 1257\r\nf 1272 1256 1271\r\nf 1250 1249 1264 1265\r\nf 1243 1242 1257 1258\r\nf 1251 1250 1265 1266\r\nf 1244 1243 1258 1259\r\nf 1252 1251 1266 1267\r\nf 1245 1244 1259 1260\r\nf 1253 1252 1267 1268\r\nf 1246 1245 1260 1261\r\nf 1254 1253 1268 1269\r\nf 1247 1246 1261 1262\r\nf 1255 1254 1269 1270\r\nf 1267 1266 1282 1283\r\nf 1260 1259 1275 1276\r\nf 1268 1267 1283 1284\r\nf 1261 1260 1276 1277\r\nf 1269 1268 1284 1285\r\nf 1262 1261 1277 1278\r\nf 1270 1269 1285 1286\r\nf 1263 1262 1278 1279\r\nf 1271 1270 1286 1287\r\nf 1264 1263 1279 1280\r\nf 1257 1046 1273\r\nf 1272 1271 1287\r\nf 1265 1264 1280 1281\r\nf 1258 1257 1273 1274\r\nf 1266 1265 1281 1282\r\nf 1259 1258 1274 1275\r\nf 1287 1286 1301 1302\r\nf 1280 1279 1294 1295\r\nf 1273 1046 1288\r\nf 1272 1287 1302\r\nf 1281 1280 1295 1296\r\nf 1274 1273 1288 1289\r\nf 1282 1281 1296 1297\r\nf 1275 1274 1289 1290\r\nf 1283 1282 1297 1298\r\nf 1276 1275 1290 1291\r\nf 1284 1283 1298 1299\r\nf 1277 1276 1291 1292\r\nf 1285 1284 1299 1300\r\nf 1278 1277 1292 1293\r\nf 1286 1285 1300 1301\r\nf 1279 1278 1293 1294\r\nf 1299 1298 1313 1314\r\nf 1292 1291 1306 1307\r\nf 1300 1299 1314 1315\r\nf 1293 1292 1307 1308\r\nf 1301 1300 1315 1316\r\nf 1294 1293 1308 1309\r\nf 1302 1301 1316 1317\r\nf 1295 1294 1309 1310\r\nf 1288 1046 1303\r\nf 1272 1302 1317\r\nf 1296 1295 1310 1311\r\nf 1289 1288 1303 1304\r\nf 1297 1296 1311 1312\r\nf 1290 1289 1304 1305\r\nf 1298 1297 1312 1313\r\nf 1291 1290 1305 1306\r\nf 1303 1046 1318\r\nf 1272 1317 1332\r\nf 1311 1310 1325 1326\r\nf 1304 1303 1318 1319\r\nf 1312 1311 1326 1327\r\nf 1305 1304 1319 1320\r\nf 1313 1312 1327 1328\r\nf 1306 1305 1320 1321\r\nf 1314 1313 1328 1329\r\nf 1307 1306 1321 1322\r\nf 1315 1314 1329 1330\r\nf 1308 1307 1322 1323\r\nf 1316 1315 1330 1331\r\nf 1309 1308 1323 1324\r\nf 1317 1316 1331 1332\r\nf 1310 1309 1324 1325\r\nf 1322 1321 1336 1337\r\nf 1330 1329 1344 1345\r\nf 1323 1322 1337 1338\r\nf 1331 1330 1345 1346\r\nf 1324 1323 1338 1339\r\nf 1332 1331 1346 1347\r\nf 1325 1324 1339 1340\r\nf 1318 1046 1333\r\nf 1272 1332 1347\r\nf 1326 1325 1340 1341\r\nf 1319 1318 1333 1334\r\nf 1327 1326 1341 1342\r\nf 1320 1319 1334 1335\r\nf 1328 1327 1342 1343\r\nf 1321 1320 1335 1336\r\nf 1329 1328 1343 1344\r\nf 1341 1340 1355 1356\r\nf 1334 1333 1348 1349\r\nf 1342 1341 1356 1357\r\nf 1335 1334 1349 1350\r\nf 1343 1342 1357 1358\r\nf 1336 1335 1350 1351\r\nf 1344 1343 1358 1359\r\nf 1337 1336 1351 1352\r\nf 1345 1344 1359 1360\r\nf 1338 1337 1352 1353\r\nf 1346 1345 1360 1361\r\nf 1339 1338 1353 1354\r\nf 1347 1346 1361 1362\r\nf 1340 1339 1354 1355\r\nf 1333 1046 1348\r\nf 1272 1347 1362\r\nf 1360 1359 1374 1375\r\nf 1353 1352 1367 1368\r\nf 1361 1360 1375 1376\r\nf 1354 1353 1368 1369\r\nf 1362 1361 1376 1377\r\nf 1355 1354 1369 1370\r\nf 1348 1046 1363\r\nf 1272 1362 1377\r\nf 1356 1355 1370 1371\r\nf 1349 1348 1363 1364\r\nf 1357 1356 1371 1372\r\nf 1350 1349 1364 1365\r\nf 1358 1357 1372 1373\r\nf 1351 1350 1365 1366\r\nf 1359 1358 1373 1374\r\nf 1352 1351 1366 1367\r\nf 1364 1363 1378 1379\r\nf 1372 1371 1386 1387\r\nf 1365 1364 1379 1380\r\nf 1373 1372 1387 1388\r\nf 1366 1365 1380 1381\r\nf 1374 1373 1388 1389\r\nf 1367 1366 1381 1382\r\nf 1375 1374 1389 1390\r\nf 1368 1367 1382 1383\r\nf 1376 1375 1390 1391\r\nf 1369 1368 1383 1384\r\nf 1377 1376 1391 1392\r\nf 1370 1369 1384 1385\r\nf 1363 1046 1378\r\nf 1272 1377 1392\r\nf 1371 1370 1385 1386\r\nf 1383 1382 1397 1398\r\nf 1391 1390 1405 1406\r\nf 1384 1383 1398 1399\r\nf 1392 1391 1406 1407\r\nf 1385 1384 1399 1400\r\nf 1378 1046 1393\r\nf 1272 1392 1407\r\nf 1386 1385 1400 1401\r\nf 1379 1378 1393 1394\r\nf 1387 1386 1401 1402\r\nf 1380 1379 1394 1395\r\nf 1388 1387 1402 1403\r\nf 1381 1380 1395 1396\r\nf 1389 1388 1403 1404\r\nf 1382 1381 1396 1397\r\nf 1390 1389 1404 1405\r\nf 1402 1401 1416 1417\r\nf 1395 1394 1409 1410\r\nf 1403 1402 1417 1418\r\nf 1396 1395 1410 1411\r\nf 1404 1403 1418 1419\r\nf 1397 1396 1411 1412\r\nf 1405 1404 1419 1420\r\nf 1398 1397 1412 1413\r\nf 1406 1405 1420 1421\r\nf 1399 1398 1413 1414\r\nf 1407 1406 1421 1422\r\nf 1400 1399 1414 1415\r\nf 1393 1046 1408\r\nf 1272 1407 1422\r\nf 1401 1400 1415 1416\r\nf 1394 1393 1408 1409\r\nf 1421 1420 1435 1436\r\nf 1414 1413 1428 1429\r\nf 1422 1421 1436 1437\r\nf 1415 1414 1429 1430\r\nf 1408 1046 1423\r\nf 1272 1422 1437\r\nf 1416 1415 1430 1431\r\nf 1409 1408 1423 1424\r\nf 1417 1416 1431 1432\r\nf 1410 1409 1424 1425\r\nf 1418 1417 1432 1433\r\nf 1411 1410 1425 1426\r\nf 1419 1418 1433 1434\r\nf 1412 1411 1426 1427\r\nf 1420 1419 1434 1435\r\nf 1413 1412 1427 1428\r\nf 1433 1432 1442 970\r\nf 1426 1425 965 1440\r\nf 1434 1433 970 1443\r\nf 1427 1426 1440 966\r\nf 1435 1434 1443 1444\r\nf 1428 1427 966 1441\r\nf 1436 1435 1444 1445\r\nf 1429 1428 1441 967\r\nf 1437 1436 1445 1446\r\nf 1430 1429 967 968\r\nf 1423 1046 1438\r\nf 1272 1437 1446\r\nf 1431 1430 968 969\r\nf 1424 1423 1438 1439\r\nf 1432 1431 969 1442\r\nf 1425 1424 1439 965\r\nv 0.500000 0.173766 0.444443\r\nv 0.500000 0.116107 0.416853\r\nv 0.500000 0.040771 0.401921\r\nv 0.500000 -0.000000 0.400000\r\nv 0.500000 -0.040771 0.401921\r\nv 0.500000 -0.116107 0.416853\r\nv 0.503806 0.204971 0.480866\r\nv 0.507466 0.193079 0.462467\r\nv 0.510839 0.173766 0.445510\r\nv 0.513795 0.147776 0.430648\r\nv 0.516221 0.116107 0.418451\r\nv 0.518024 0.079976 0.409387\r\nv 0.519134 0.040771 0.403806\r\nv 0.519509 -0.000000 0.401921\r\nv 0.519134 -0.040771 0.403806\r\nv 0.518024 -0.079976 0.409387\r\nv 0.516221 -0.116107 0.418451\r\nv 0.513795 -0.147776 0.430648\r\nv 0.510839 -0.173766 0.445510\r\nv 0.507466 -0.193079 0.462467\r\nv 0.503806 -0.204971 0.480866\r\nv 0.507466 0.204971 0.481976\r\nv 0.514645 0.193079 0.464645\r\nv 0.521261 0.173766 0.448672\r\nv 0.527060 0.147776 0.434672\r\nv 0.531819 0.116107 0.423182\r\nv 0.535355 0.079976 0.414645\r\nv 0.537533 0.040771 0.409387\r\nv 0.538268 -0.000000 0.407612\r\nv 0.537533 -0.040771 0.409387\r\nv 0.535355 -0.079976 0.414645\r\nv 0.531819 -0.116107 0.423182\r\nv 0.527060 -0.147776 0.434672\r\nv 0.521261 -0.173766 0.448672\r\nv 0.514645 -0.193079 0.464645\r\nv 0.507466 -0.204971 0.481976\r\nv 0.510839 0.204971 0.483779\r\nv 0.521261 0.193079 0.468181\r\nv 0.530866 0.173766 0.453806\r\nv 0.539285 0.147776 0.441206\r\nv 0.546194 0.116107 0.430866\r\nv 0.551328 0.079976 0.423182\r\nv 0.554489 0.040771 0.418451\r\nv 0.555557 -0.000000 0.416853\r\nv 0.554489 -0.040771 0.418451\r\nv 0.551328 -0.079976 0.423182\r\nv 0.546194 -0.116107 0.430866\r\nv 0.539285 -0.147776 0.441206\r\nv 0.530866 -0.173766 0.453806\r\nv 0.521261 -0.193079 0.468181\r\nv 0.510839 -0.204971 0.483779\r\nv 0.513795 0.204971 0.486205\r\nv 0.527060 0.193079 0.472940\r\nv 0.539285 0.173766 0.460715\r\nv 0.550000 0.147776 0.450000\r\nv 0.558794 0.116107 0.441206\r\nv 0.565328 0.079976 0.434672\r\nv 0.569352 0.040771 0.430648\r\nv 0.570711 -0.000000 0.429289\r\nv 0.569352 -0.040771 0.430648\r\nv 0.565328 -0.079976 0.434672\r\nv 0.558794 -0.116107 0.441206\r\nv 0.550000 -0.147776 0.450000\r\nv 0.539285 -0.173766 0.460715\r\nv 0.527060 -0.193079 0.472940\r\nv 0.513795 -0.204971 0.486205\r\nv 0.516221 0.204971 0.489161\r\nv 0.531819 0.193079 0.478739\r\nv 0.546194 0.173766 0.469134\r\nv 0.558794 0.147776 0.460715\r\nv 0.569134 0.116107 0.453806\r\nv 0.576818 0.079976 0.448672\r\nv 0.581549 0.040771 0.445510\r\nv 0.583147 -0.000000 0.444443\r\nv 0.581549 -0.040771 0.445510\r\nv 0.576818 -0.079976 0.448672\r\nv 0.569134 -0.116107 0.453806\r\nv 0.558794 -0.147776 0.460715\r\nv 0.546194 -0.173766 0.469134\r\nv 0.531819 -0.193079 0.478739\r\nv 0.516221 -0.204971 0.489161\r\nv 0.500000 0.208987 0.500000\r\nv 0.518024 0.204971 0.492534\r\nv 0.535355 0.193079 0.485355\r\nv 0.551328 0.173766 0.478739\r\nv 0.565328 0.147776 0.472940\r\nv 0.576818 0.116107 0.468181\r\nv 0.585355 0.079976 0.464645\r\nv 0.590613 0.040771 0.462467\r\nv 0.592388 -0.000000 0.461732\r\nv 0.590613 -0.040771 0.462467\r\nv 0.585355 -0.079976 0.464645\r\nv 0.576818 -0.116107 0.468181\r\nv 0.565328 -0.147776 0.472940\r\nv 0.551328 -0.173766 0.478739\r\nv 0.535355 -0.193079 0.485355\r\nv 0.518024 -0.204971 0.492534\r\nv 0.519134 0.204971 0.496194\r\nv 0.537533 0.193079 0.492534\r\nv 0.554489 0.173766 0.489161\r\nv 0.569352 0.147776 0.486205\r\nv 0.581549 0.116107 0.483779\r\nv 0.590613 0.079976 0.481976\r\nv 0.596194 0.040771 0.480866\r\nv 0.598079 -0.000000 0.480491\r\nv 0.596194 -0.040771 0.480866\r\nv 0.590613 -0.079976 0.481976\r\nv 0.581549 -0.116107 0.483779\r\nv 0.569352 -0.147776 0.486205\r\nv 0.554489 -0.173766 0.489161\r\nv 0.537533 -0.193079 0.492534\r\nv 0.519134 -0.204971 0.496194\r\nv 0.519509 0.204971 0.500000\r\nv 0.538268 0.193079 0.500000\r\nv 0.555557 0.173766 0.500000\r\nv 0.570711 0.147776 0.500000\r\nv 0.583147 0.116107 0.500000\r\nv 0.592388 0.079976 0.500000\r\nv 0.598079 0.040771 0.500000\r\nv 0.600000 -0.000000 0.500000\r\nv 0.598079 -0.040771 0.500000\r\nv 0.592388 -0.079976 0.500000\r\nv 0.583147 -0.116107 0.500000\r\nv 0.570711 -0.147776 0.500000\r\nv 0.555557 -0.173766 0.500000\r\nv 0.538268 -0.193079 0.500000\r\nv 0.519509 -0.204971 0.500000\r\nv 0.519134 0.204971 0.503806\r\nv 0.537533 0.193079 0.507466\r\nv 0.554489 0.173766 0.510839\r\nv 0.569352 0.147776 0.513795\r\nv 0.581549 0.116107 0.516221\r\nv 0.590613 0.079976 0.518024\r\nv 0.596194 0.040771 0.519134\r\nv 0.598078 0.000000 0.519509\r\nv 0.596194 -0.040771 0.519134\r\nv 0.590613 -0.079976 0.518024\r\nv 0.581549 -0.116107 0.516221\r\nv 0.569352 -0.147776 0.513795\r\nv 0.554489 -0.173766 0.510839\r\nv 0.537533 -0.193079 0.507466\r\nv 0.519134 -0.204971 0.503806\r\nv 0.518024 0.204971 0.507466\r\nv 0.535355 0.193079 0.514645\r\nv 0.551328 0.173766 0.521261\r\nv 0.565328 0.147776 0.527060\r\nv 0.576818 0.116107 0.531819\r\nv 0.585355 0.079976 0.535355\r\nv 0.590613 0.040771 0.537533\r\nv 0.592388 0.000000 0.538268\r\nv 0.590613 -0.040771 0.537533\r\nv 0.585355 -0.079976 0.535355\r\nv 0.576818 -0.116107 0.531819\r\nv 0.565328 -0.147776 0.527060\r\nv 0.551328 -0.173766 0.521261\r\nv 0.535355 -0.193079 0.514645\r\nv 0.518024 -0.204971 0.507466\r\nv 0.516221 0.204971 0.510839\r\nv 0.531819 0.193079 0.521261\r\nv 0.546194 0.173766 0.530866\r\nv 0.558794 0.147776 0.539285\r\nv 0.569134 0.116107 0.546194\r\nv 0.576818 0.079976 0.551328\r\nv 0.581549 0.040771 0.554489\r\nv 0.583147 0.000000 0.555557\r\nv 0.581549 -0.040771 0.554489\r\nv 0.576818 -0.079976 0.551328\r\nv 0.569134 -0.116107 0.546194\r\nv 0.558794 -0.147776 0.539285\r\nv 0.546194 -0.173766 0.530866\r\nv 0.531819 -0.193079 0.521261\r\nv 0.516221 -0.204971 0.510839\r\nv 0.513795 0.204971 0.513795\r\nv 0.527060 0.193079 0.527060\r\nv 0.539285 0.173766 0.539285\r\nv 0.550000 0.147776 0.550000\r\nv 0.558794 0.116107 0.558794\r\nv 0.565328 0.079976 0.565328\r\nv 0.569352 0.040771 0.569352\r\nv 0.570711 0.000000 0.570711\r\nv 0.569352 -0.040771 0.569352\r\nv 0.565328 -0.079976 0.565328\r\nv 0.558794 -0.116107 0.558794\r\nv 0.550000 -0.147776 0.550000\r\nv 0.539285 -0.173766 0.539285\r\nv 0.527060 -0.193079 0.527060\r\nv 0.513795 -0.204971 0.513795\r\nv 0.510839 0.204971 0.516221\r\nv 0.521261 0.193079 0.531819\r\nv 0.530866 0.173766 0.546194\r\nv 0.539285 0.147776 0.558794\r\nv 0.546194 0.116107 0.569134\r\nv 0.551328 0.079976 0.576818\r\nv 0.554489 0.040771 0.581549\r\nv 0.555557 0.000000 0.583147\r\nv 0.554489 -0.040771 0.581549\r\nv 0.551328 -0.079976 0.576818\r\nv 0.546194 -0.116107 0.569134\r\nv 0.539285 -0.147776 0.558794\r\nv 0.530866 -0.173766 0.546194\r\nv 0.521261 -0.193079 0.531819\r\nv 0.510839 -0.204971 0.516221\r\nv 0.507466 0.204971 0.518024\r\nv 0.514645 0.193079 0.535355\r\nv 0.521261 0.173766 0.551328\r\nv 0.527060 0.147776 0.565328\r\nv 0.531819 0.116107 0.576818\r\nv 0.535355 0.079976 0.585355\r\nv 0.537533 0.040771 0.590613\r\nv 0.538268 0.000000 0.592388\r\nv 0.537533 -0.040771 0.590613\r\nv 0.535355 -0.079976 0.585355\r\nv 0.531819 -0.116107 0.576818\r\nv 0.527060 -0.147776 0.565328\r\nv 0.521261 -0.173766 0.551328\r\nv 0.514645 -0.193079 0.535355\r\nv 0.507466 -0.204971 0.518024\r\nv 0.503806 0.204971 0.519134\r\nv 0.507466 0.193079 0.537533\r\nv 0.510839 0.173766 0.554489\r\nv 0.513795 0.147776 0.569352\r\nv 0.516221 0.116107 0.581549\r\nv 0.518024 0.079976 0.590613\r\nv 0.519134 0.040771 0.596194\r\nv 0.519509 0.000000 0.598078\r\nv 0.519134 -0.040771 0.596194\r\nv 0.518024 -0.079976 0.590613\r\nv 0.516221 -0.116107 0.581549\r\nv 0.513795 -0.147776 0.569352\r\nv 0.510839 -0.173766 0.554489\r\nv 0.507466 -0.193079 0.537533\r\nv 0.503806 -0.204971 0.519134\r\nv 0.500000 0.204971 0.519509\r\nv 0.500000 0.193079 0.538268\r\nv 0.500000 0.173766 0.555557\r\nv 0.500000 0.147776 0.570711\r\nv 0.500000 0.116107 0.583147\r\nv 0.500000 0.079976 0.592388\r\nv 0.500000 0.040771 0.598078\r\nv 0.500000 0.000000 0.600000\r\nv 0.500000 -0.040771 0.598078\r\nv 0.500000 -0.079976 0.592388\r\nv 0.500000 -0.116107 0.583147\r\nv 0.500000 -0.147776 0.570711\r\nv 0.500000 -0.173766 0.555557\r\nv 0.500000 -0.193079 0.538268\r\nv 0.500000 -0.204971 0.519509\r\nv 0.496194 0.204971 0.519134\r\nv 0.492534 0.193079 0.537533\r\nv 0.489161 0.173766 0.554489\r\nv 0.486205 0.147776 0.569352\r\nv 0.483779 0.116107 0.581549\r\nv 0.481976 0.079976 0.590613\r\nv 0.480866 0.040771 0.596194\r\nv 0.480491 0.000000 0.598078\r\nv 0.480866 -0.040771 0.596194\r\nv 0.481976 -0.079976 0.590613\r\nv 0.483779 -0.116107 0.581549\r\nv 0.486205 -0.147776 0.569352\r\nv 0.489161 -0.173766 0.554489\r\nv 0.492534 -0.193079 0.537533\r\nv 0.496194 -0.204971 0.519134\r\nv 0.492534 0.204971 0.518024\r\nv 0.485355 0.193079 0.535355\r\nv 0.478739 0.173766 0.551328\r\nv 0.472940 0.147776 0.565328\r\nv 0.468181 0.116107 0.576818\r\nv 0.464645 0.079976 0.585355\r\nv 0.462467 0.040771 0.590613\r\nv 0.461732 0.000000 0.592388\r\nv 0.462467 -0.040771 0.590613\r\nv 0.464645 -0.079976 0.585355\r\nv 0.468181 -0.116107 0.576818\r\nv 0.472940 -0.147776 0.565328\r\nv 0.478739 -0.173766 0.551328\r\nv 0.485355 -0.193079 0.535355\r\nv 0.492534 -0.204971 0.518024\r\nv 0.489161 0.204971 0.516221\r\nv 0.478739 0.193079 0.531819\r\nv 0.469134 0.173766 0.546194\r\nv 0.460715 0.147776 0.558794\r\nv 0.453806 0.116107 0.569134\r\nv 0.448672 0.079976 0.576818\r\nv 0.445510 0.040771 0.581549\r\nv 0.444443 0.000000 0.583147\r\nv 0.445510 -0.040771 0.581549\r\nv 0.448672 -0.079976 0.576818\r\nv 0.453806 -0.116107 0.569134\r\nv 0.460715 -0.147776 0.558794\r\nv 0.469134 -0.173766 0.546194\r\nv 0.478739 -0.193079 0.531819\r\nv 0.489161 -0.204971 0.516221\r\nv 0.486205 0.204971 0.513795\r\nv 0.472940 0.193079 0.527060\r\nv 0.460715 0.173766 0.539285\r\nv 0.450000 0.147776 0.550000\r\nv 0.441206 0.116107 0.558794\r\nv 0.434672 0.079976 0.565328\r\nv 0.430648 0.040771 0.569352\r\nv 0.429289 0.000000 0.570711\r\nv 0.430648 -0.040771 0.569352\r\nv 0.434672 -0.079976 0.565328\r\nv 0.441206 -0.116107 0.558794\r\nv 0.450000 -0.147776 0.550000\r\nv 0.460715 -0.173766 0.539285\r\nv 0.472940 -0.193079 0.527060\r\nv 0.486205 -0.204971 0.513795\r\nv 0.500000 -0.208987 0.500000\r\nv 0.483779 0.204971 0.510839\r\nv 0.468181 0.193079 0.521261\r\nv 0.453806 0.173766 0.530866\r\nv 0.441206 0.147776 0.539285\r\nv 0.430866 0.116107 0.546194\r\nv 0.423182 0.079976 0.551328\r\nv 0.418451 0.040771 0.554489\r\nv 0.416853 0.000000 0.555557\r\nv 0.418451 -0.040771 0.554489\r\nv 0.423182 -0.079976 0.551328\r\nv 0.430866 -0.116107 0.546194\r\nv 0.441206 -0.147776 0.539285\r\nv 0.453806 -0.173766 0.530866\r\nv 0.468181 -0.193079 0.521261\r\nv 0.483779 -0.204971 0.510839\r\nv 0.481976 0.204971 0.507466\r\nv 0.464645 0.193079 0.514645\r\nv 0.448672 0.173766 0.521261\r\nv 0.434672 0.147776 0.527060\r\nv 0.423182 0.116107 0.531819\r\nv 0.414645 0.079976 0.535355\r\nv 0.409387 0.040771 0.537533\r\nv 0.407612 0.000000 0.538268\r\nv 0.409387 -0.040771 0.537533\r\nv 0.414645 -0.079976 0.535355\r\nv 0.423182 -0.116107 0.531819\r\nv 0.434672 -0.147776 0.527060\r\nv 0.448672 -0.173766 0.521261\r\nv 0.464645 -0.193079 0.514645\r\nv 0.481976 -0.204971 0.507466\r\nv 0.480866 0.204971 0.503806\r\nv 0.462467 0.193079 0.507466\r\nv 0.445511 0.173766 0.510839\r\nv 0.430648 0.147776 0.513795\r\nv 0.418451 0.116107 0.516221\r\nv 0.409387 0.079976 0.518024\r\nv 0.403806 0.040771 0.519134\r\nv 0.401922 0.000000 0.519509\r\nv 0.403806 -0.040771 0.519134\r\nv 0.409387 -0.079976 0.518024\r\nv 0.418451 -0.116107 0.516221\r\nv 0.430648 -0.147776 0.513795\r\nv 0.445511 -0.173766 0.510839\r\nv 0.462467 -0.193079 0.507466\r\nv 0.480866 -0.204971 0.503806\r\nv 0.480491 0.204971 0.500000\r\nv 0.461732 0.193079 0.500000\r\nv 0.444443 0.173766 0.500000\r\nv 0.429289 0.147776 0.500000\r\nv 0.416853 0.116107 0.500000\r\nv 0.407612 0.079976 0.500000\r\nv 0.401922 0.040771 0.500000\r\nv 0.400000 -0.000000 0.500000\r\nv 0.401922 -0.040771 0.500000\r\nv 0.407612 -0.079976 0.500000\r\nv 0.416853 -0.116107 0.500000\r\nv 0.429289 -0.147776 0.500000\r\nv 0.444443 -0.173766 0.500000\r\nv 0.461732 -0.193079 0.500000\r\nv 0.480491 -0.204971 0.500000\r\nv 0.480866 0.204971 0.496194\r\nv 0.462467 0.193079 0.492534\r\nv 0.445511 0.173766 0.489161\r\nv 0.430648 0.147776 0.486205\r\nv 0.418451 0.116107 0.483779\r\nv 0.409387 0.079976 0.481976\r\nv 0.403806 0.040771 0.480866\r\nv 0.401922 -0.000000 0.480491\r\nv 0.403806 -0.040771 0.480866\r\nv 0.409387 -0.079976 0.481976\r\nv 0.418451 -0.116107 0.483779\r\nv 0.430648 -0.147776 0.486205\r\nv 0.445511 -0.173766 0.489161\r\nv 0.462467 -0.193079 0.492534\r\nv 0.480866 -0.204971 0.496194\r\nv 0.481976 0.204971 0.492534\r\nv 0.464645 0.193079 0.485355\r\nv 0.448672 0.173766 0.478739\r\nv 0.434672 0.147776 0.472940\r\nv 0.423182 0.116107 0.468181\r\nv 0.414645 0.079976 0.464645\r\nv 0.409387 0.040771 0.462467\r\nv 0.407612 -0.000000 0.461732\r\nv 0.409387 -0.040771 0.462467\r\nv 0.414645 -0.079976 0.464645\r\nv 0.423182 -0.116107 0.468181\r\nv 0.434672 -0.147776 0.472940\r\nv 0.448672 -0.173766 0.478739\r\nv 0.464645 -0.193079 0.485355\r\nv 0.481976 -0.204971 0.492534\r\nv 0.483779 0.204971 0.489161\r\nv 0.468181 0.193079 0.478739\r\nv 0.453806 0.173766 0.469134\r\nv 0.441206 0.147776 0.460715\r\nv 0.430866 0.116107 0.453806\r\nv 0.423182 0.079976 0.448672\r\nv 0.418451 0.040771 0.445510\r\nv 0.416853 -0.000000 0.444443\r\nv 0.418451 -0.040771 0.445510\r\nv 0.423182 -0.079976 0.448672\r\nv 0.430866 -0.116107 0.453806\r\nv 0.441206 -0.147776 0.460715\r\nv 0.453806 -0.173766 0.469134\r\nv 0.468181 -0.193079 0.478739\r\nv 0.483779 -0.204971 0.489161\r\nv 0.486205 0.204971 0.486205\r\nv 0.472940 0.193079 0.472940\r\nv 0.460715 0.173766 0.460715\r\nv 0.450000 0.147776 0.450000\r\nv 0.441206 0.116107 0.441206\r\nv 0.434672 0.079976 0.434672\r\nv 0.430648 0.040771 0.430648\r\nv 0.429289 -0.000000 0.429289\r\nv 0.430648 -0.040771 0.430648\r\nv 0.434672 -0.079976 0.434672\r\nv 0.441206 -0.116107 0.441206\r\nv 0.450000 -0.147776 0.450000\r\nv 0.460715 -0.173766 0.460715\r\nv 0.472940 -0.193079 0.472940\r\nv 0.486205 -0.204971 0.486205\r\nv 0.489161 0.204971 0.483779\r\nv 0.478739 0.193079 0.468181\r\nv 0.469134 0.173766 0.453806\r\nv 0.460715 0.147776 0.441206\r\nv 0.453806 0.116107 0.430866\r\nv 0.448672 0.079976 0.423182\r\nv 0.445511 0.040771 0.418451\r\nv 0.444443 -0.000000 0.416853\r\nv 0.445511 -0.040771 0.418451\r\nv 0.448672 -0.079976 0.423182\r\nv 0.453806 -0.116107 0.430866\r\nv 0.460715 -0.147776 0.441206\r\nv 0.469134 -0.173766 0.453806\r\nv 0.478739 -0.193079 0.468181\r\nv 0.489161 -0.204971 0.483779\r\nv 0.492534 0.204971 0.481976\r\nv 0.485355 0.193079 0.464645\r\nv 0.478739 0.173766 0.448672\r\nv 0.472940 0.147776 0.434672\r\nv 0.468181 0.116107 0.423182\r\nv 0.464645 0.079976 0.414645\r\nv 0.462467 0.040771 0.409387\r\nv 0.461732 -0.000000 0.407612\r\nv 0.462467 -0.040771 0.409387\r\nv 0.464645 -0.079976 0.414645\r\nv 0.468181 -0.116107 0.423182\r\nv 0.472940 -0.147776 0.434672\r\nv 0.478739 -0.173766 0.448672\r\nv 0.485355 -0.193079 0.464645\r\nv 0.492534 -0.204971 0.481976\r\nv 0.496194 0.204971 0.480866\r\nv 0.492534 0.193079 0.462467\r\nv 0.489161 0.173766 0.445511\r\nv 0.486205 0.147776 0.430648\r\nv 0.483779 0.116107 0.418451\r\nv 0.481976 0.079976 0.409387\r\nv 0.480866 0.040771 0.403806\r\nv 0.480491 -0.000000 0.401922\r\nv 0.480866 -0.040771 0.403806\r\nv 0.481976 -0.079976 0.409387\r\nv 0.483779 -0.116107 0.418451\r\nv 0.486205 -0.147776 0.430648\r\nv 0.489161 -0.173766 0.445511\r\nv 0.492534 -0.193079 0.462467\r\nv 0.496194 -0.204971 0.480866\r\nv 0.500000 0.204971 0.480491\r\nv 0.500000 0.193079 0.461732\r\nv 0.500000 0.147776 0.429289\r\nv 0.500000 0.079976 0.407612\r\nv 0.500000 -0.079976 0.407612\r\nv 0.500000 -0.147776 0.429289\r\nv 0.500000 -0.173766 0.444443\r\nv 0.500000 -0.193079 0.461732\r\nv 0.500000 -0.204971 0.480491\r\nf 1447 1921 1454 1455\r\nf 1452 1924 1462 1463\r\nf 1922 1447 1455 1456\r\nf 1925 1452 1463 1464\r\nf 1448 1922 1456 1457\r\nf 1926 1925 1464 1465\r\nf 1923 1448 1457 1458\r\nf 1927 1926 1465 1466\r\nf 1449 1923 1458 1459\r\nf 1928 1927 1466 1467\r\nf 1450 1449 1459 1460\r\nf 1920 1528 1453\r\nf 1754 1928 1467\r\nf 1451 1450 1460 1461\r\nf 1921 1920 1453 1454\r\nf 1924 1451 1461 1462\r\nf 1461 1460 1475 1476\r\nf 1454 1453 1468 1469\r\nf 1462 1461 1476 1477\r\nf 1455 1454 1469 1470\r\nf 1463 1462 1477 1478\r\nf 1456 1455 1470 1471\r\nf 1464 1463 1478 1479\r\nf 1457 1456 1471 1472\r\nf 1465 1464 1479 1480\r\nf 1458 1457 1472 1473\r\nf 1466 1465 1480 1481\r\nf 1459 1458 1473 1474\r\nf 1467 1466 1481 1482\r\nf 1460 1459 1474 1475\r\nf 1453 1528 1468\r\nf 1754 1467 1482\r\nf 1480 1479 1494 1495\r\nf 1473 1472 1487 1488\r\nf 1481 1480 1495 1496\r\nf 1474 1473 1488 1489\r\nf 1482 1481 1496 1497\r\nf 1475 1474 1489 1490\r\nf 1468 1528 1483\r\nf 1754 1482 1497\r\nf 1476 1475 1490 1491\r\nf 1469 1468 1483 1484\r\nf 1477 1476 1491 1492\r\nf 1470 1469 1484 1485\r\nf 1478 1477 1492 1493\r\nf 1471 1470 1485 1486\r\nf 1479 1478 1493 1494\r\nf 1472 1471 1486 1487\r\nf 1492 1491 1506 1507\r\nf 1485 1484 1499 1500\r\nf 1493 1492 1507 1508\r\nf 1486 1485 1500 1501\r\nf 1494 1493 1508 1509\r\nf 1487 1486 1501 1502\r\nf 1495 1494 1509 1510\r\nf 1488 1487 1502 1503\r\nf 1496 1495 1510 1511\r\nf 1489 1488 1503 1504\r\nf 1497 1496 1511 1512\r\nf 1490 1489 1504 1505\r\nf 1483 1528 1498\r\nf 1754 1497 1512\r\nf 1491 1490 1505 1506\r\nf 1484 1483 1498 1499\r\nf 1511 1510 1525 1526\r\nf 1504 1503 1518 1519\r\nf 1512 1511 1526 1527\r\nf 1505 1504 1519 1520\r\nf 1498 1528 1513\r\nf 1754 1512 1527\r\nf 1506 1505 1520 1521\r\nf 1499 1498 1513 1514\r\nf 1507 1506 1521 1522\r\nf 1500 1499 1514 1515\r\nf 1508 1507 1522 1523\r\nf 1501 1500 1515 1516\r\nf 1509 1508 1523 1524\r\nf 1502 1501 1516 1517\r\nf 1510 1509 1524 1525\r\nf 1503 1502 1517 1518\r\nf 1515 1514 1530 1531\r\nf 1523 1522 1538 1539\r\nf 1516 1515 1531 1532\r\nf 1524 1523 1539 1540\r\nf 1517 1516 1532 1533\r\nf 1525 1524 1540 1541\r\nf 1518 1517 1533 1534\r\nf 1526 1525 1541 1542\r\nf 1519 1518 1534 1535\r\nf 1527 1526 1542 1543\r\nf 1520 1519 1535 1536\r\nf 1513 1528 1529\r\nf 1754 1527 1543\r\nf 1521 1520 1536 1537\r\nf 1514 1513 1529 1530\r\nf 1522 1521 1537 1538\r\nf 1535 1534 1549 1550\r\nf 1543 1542 1557 1558\r\nf 1536 1535 1550 1551\r\nf 1529 1528 1544\r\nf 1754 1543 1558\r\nf 1537 1536 1551 1552\r\nf 1530 1529 1544 1545\r\nf 1538 1537 1552 1553\r\nf 1531 1530 1545 1546\r\nf 1539 1538 1553 1554\r\nf 1532 1531 1546 1547\r\nf 1540 1539 1554 1555\r\nf 1533 1532 1547 1548\r\nf 1541 1540 1555 1556\r\nf 1534 1533 1548 1549\r\nf 1542 1541 1556 1557\r\nf 1554 1553 1568 1569\r\nf 1547 1546 1561 1562\r\nf 1555 1554 1569 1570\r\nf 1548 1547 1562 1563\r\nf 1556 1555 1570 1571\r\nf 1549 1548 1563 1564\r\nf 1557 1556 1571 1572\r\nf 1550 1549 1564 1565\r\nf 1558 1557 1572 1573\r\nf 1551 1550 1565 1566\r\nf 1544 1528 1559\r\nf 1754 1558 1573\r\nf 1552 1551 1566 1567\r\nf 1545 1544 1559 1560\r\nf 1553 1552 1567 1568\r\nf 1546 1545 1560 1561\r\nf 1573 1572 1587 1588\r\nf 1566 1565 1580 1581\r\nf 1559 1528 1574\r\nf 1754 1573 1588\r\nf 1567 1566 1581 1582\r\nf 1560 1559 1574 1575\r\nf 1568 1567 1582 1583\r\nf 1561 1560 1575 1576\r\nf 1569 1568 1583 1584\r\nf 1562 1561 1576 1577\r\nf 1570 1569 1584 1585\r\nf 1563 1562 1577 1578\r\nf 1571 1570 1585 1586\r\nf 1564 1563 1578 1579\r\nf 1572 1571 1586 1587\r\nf 1565 1564 1579 1580\r\nf 1577 1576 1591 1592\r\nf 1585 1584 1599 1600\r\nf 1578 1577 1592 1593\r\nf 1586 1585 1600 1601\r\nf 1579 1578 1593 1594\r\nf 1587 1586 1601 1602\r\nf 1580 1579 1594 1595\r\nf 1588 1587 1602 1603\r\nf 1581 1580 1595 1596\r\nf 1574 1528 1589\r\nf 1754 1588 1603\r\nf 1582 1581 1596 1597\r\nf 1575 1574 1589 1590\r\nf 1583 1582 1597 1598\r\nf 1576 1575 1590 1591\r\nf 1584 1583 1598 1599\r\nf 1596 1595 1610 1611\r\nf 1589 1528 1604\r\nf 1754 1603 1618\r\nf 1597 1596 1611 1612\r\nf 1590 1589 1604 1605\r\nf 1598 1597 1612 1613\r\nf 1591 1590 1605 1606\r\nf 1599 1598 1613 1614\r\nf 1592 1591 1606 1607\r\nf 1600 1599 1614 1615\r\nf 1593 1592 1607 1608\r\nf 1601 1600 1615 1616\r\nf 1594 1593 1608 1609\r\nf 1602 1601 1616 1617\r\nf 1595 1594 1609 1610\r\nf 1603 1602 1617 1618\r\nf 1615 1614 1629 1630\r\nf 1608 1607 1622 1623\r\nf 1616 1615 1630 1631\r\nf 1609 1608 1623 1624\r\nf 1617 1616 1631 1632\r\nf 1610 1609 1624 1625\r\nf 1618 1617 1632 1633\r\nf 1611 1610 1625 1626\r\nf 1604 1528 1619\r\nf 1754 1618 1633\r\nf 1612 1611 1626 1627\r\nf 1605 1604 1619 1620\r\nf 1613 1612 1627 1628\r\nf 1606 1605 1620 1621\r\nf 1614 1613 1628 1629\r\nf 1607 1606 1621 1622\r\nf 1754 1633 1648\r\nf 1627 1626 1641 1642\r\nf 1620 1619 1634 1635\r\nf 1628 1627 1642 1643\r\nf 1621 1620 1635 1636\r\nf 1629 1628 1643 1644\r\nf 1622 1621 1636 1637\r\nf 1630 1629 1644 1645\r\nf 1623 1622 1637 1638\r\nf 1631 1630 1645 1646\r\nf 1624 1623 1638 1639\r\nf 1632 1631 1646 1647\r\nf 1625 1624 1639 1640\r\nf 1633 1632 1647 1648\r\nf 1626 1625 1640 1641\r\nf 1619 1528 1634\r\nf 1646 1645 1660 1661\r\nf 1639 1638 1653 1654\r\nf 1647 1646 1661 1662\r\nf 1640 1639 1654 1655\r\nf 1648 1647 1662 1663\r\nf 1641 1640 1655 1656\r\nf 1634 1528 1649\r\nf 1754 1648 1663\r\nf 1642 1641 1656 1657\r\nf 1635 1634 1649 1650\r\nf 1643 1642 1657 1658\r\nf 1636 1635 1650 1651\r\nf 1644 1643 1658 1659\r\nf 1637 1636 1651 1652\r\nf 1645 1644 1659 1660\r\nf 1638 1637 1652 1653\r\nf 1650 1649 1664 1665\r\nf 1658 1657 1672 1673\r\nf 1651 1650 1665 1666\r\nf 1659 1658 1673 1674\r\nf 1652 1651 1666 1667\r\nf 1660 1659 1674 1675\r\nf 1653 1652 1667 1668\r\nf 1661 1660 1675 1676\r\nf 1654 1653 1668 1669\r\nf 1662 1661 1676 1677\r\nf 1655 1654 1669 1670\r\nf 1663 1662 1677 1678\r\nf 1656 1655 1670 1671\r\nf 1649 1528 1664\r\nf 1754 1663 1678\r\nf 1657 1656 1671 1672\r\nf 1669 1668 1683 1684\r\nf 1677 1676 1691 1692\r\nf 1670 1669 1684 1685\r\nf 1678 1677 1692 1693\r\nf 1671 1670 1685 1686\r\nf 1664 1528 1679\r\nf 1754 1678 1693\r\nf 1672 1671 1686 1687\r\nf 1665 1664 1679 1680\r\nf 1673 1672 1687 1688\r\nf 1666 1665 1680 1681\r\nf 1674 1673 1688 1689\r\nf 1667 1666 1681 1682\r\nf 1675 1674 1689 1690\r\nf 1668 1667 1682 1683\r\nf 1676 1675 1690 1691\r\nf 1688 1687 1702 1703\r\nf 1681 1680 1695 1696\r\nf 1689 1688 1703 1704\r\nf 1682 1681 1696 1697\r\nf 1690 1689 1704 1705\r\nf 1683 1682 1697 1698\r\nf 1691 1690 1705 1706\r\nf 1684 1683 1698 1699\r\nf 1692 1691 1706 1707\r\nf 1685 1684 1699 1700\r\nf 1693 1692 1707 1708\r\nf 1686 1685 1700 1701\r\nf 1679 1528 1694\r\nf 1754 1693 1708\r\nf 1687 1686 1701 1702\r\nf 1680 1679 1694 1695\r\nf 1707 1706 1721 1722\r\nf 1700 1699 1714 1715\r\nf 1708 1707 1722 1723\r\nf 1701 1700 1715 1716\r\nf 1694 1528 1709\r\nf 1754 1708 1723\r\nf 1702 1701 1716 1717\r\nf 1695 1694 1709 1710\r\nf 1703 1702 1717 1718\r\nf 1696 1695 1710 1711\r\nf 1704 1703 1718 1719\r\nf 1697 1696 1711 1712\r\nf 1705 1704 1719 1720\r\nf 1698 1697 1712 1713\r\nf 1706 1705 1720 1721\r\nf 1699 1698 1713 1714\r\nf 1711 1710 1725 1726\r\nf 1719 1718 1733 1734\r\nf 1712 1711 1726 1727\r\nf 1720 1719 1734 1735\r\nf 1713 1712 1727 1728\r\nf 1721 1720 1735 1736\r\nf 1714 1713 1728 1729\r\nf 1722 1721 1736 1737\r\nf 1715 1714 1729 1730\r\nf 1723 1722 1737 1738\r\nf 1716 1715 1730 1731\r\nf 1709 1528 1724\r\nf 1754 1723 1738\r\nf 1717 1716 1731 1732\r\nf 1710 1709 1724 1725\r\nf 1718 1717 1732 1733\r\nf 1730 1729 1744 1745\r\nf 1738 1737 1752 1753\r\nf 1731 1730 1745 1746\r\nf 1724 1528 1739\r\nf 1754 1738 1753\r\nf 1732 1731 1746 1747\r\nf 1725 1724 1739 1740\r\nf 1733 1732 1747 1748\r\nf 1726 1725 1740 1741\r\nf 1734 1733 1748 1749\r\nf 1727 1726 1741 1742\r\nf 1735 1734 1749 1750\r\nf 1728 1727 1742 1743\r\nf 1736 1735 1750 1751\r\nf 1729 1728 1743 1744\r\nf 1737 1736 1751 1752\r\nf 1749 1748 1764 1765\r\nf 1742 1741 1757 1758\r\nf 1750 1749 1765 1766\r\nf 1743 1742 1758 1759\r\nf 1751 1750 1766 1767\r\nf 1744 1743 1759 1760\r\nf 1752 1751 1767 1768\r\nf 1745 1744 1760 1761\r\nf 1753 1752 1768 1769\r\nf 1746 1745 1761 1762\r\nf 1739 1528 1755\r\nf 1754 1753 1769\r\nf 1747 1746 1762 1763\r\nf 1740 1739 1755 1756\r\nf 1748 1747 1763 1764\r\nf 1741 1740 1756 1757\r\nf 1769 1768 1783 1784\r\nf 1762 1761 1776 1777\r\nf 1755 1528 1770\r\nf 1754 1769 1784\r\nf 1763 1762 1777 1778\r\nf 1756 1755 1770 1771\r\nf 1764 1763 1778 1779\r\nf 1757 1756 1771 1772\r\nf 1765 1764 1779 1780\r\nf 1758 1757 1772 1773\r\nf 1766 1765 1780 1781\r\nf 1759 1758 1773 1774\r\nf 1767 1766 1781 1782\r\nf 1760 1759 1774 1775\r\nf 1768 1767 1782 1783\r\nf 1761 1760 1775 1776\r\nf 1781 1780 1795 1796\r\nf 1774 1773 1788 1789\r\nf 1782 1781 1796 1797\r\nf 1775 1774 1789 1790\r\nf 1783 1782 1797 1798\r\nf 1776 1775 1790 1791\r\nf 1784 1783 1798 1799\r\nf 1777 1776 1791 1792\r\nf 1770 1528 1785\r\nf 1754 1784 1799\r\nf 1778 1777 1792 1793\r\nf 1771 1770 1785 1786\r\nf 1779 1778 1793 1794\r\nf 1772 1771 1786 1787\r\nf 1780 1779 1794 1795\r\nf 1773 1772 1787 1788\r\nf 1785 1528 1800\r\nf 1754 1799 1814\r\nf 1793 1792 1807 1808\r\nf 1786 1785 1800 1801\r\nf 1794 1793 1808 1809\r\nf 1787 1786 1801 1802\r\nf 1795 1794 1809 1810\r\nf 1788 1787 1802 1803\r\nf 1796 1795 1810 1811\r\nf 1789 1788 1803 1804\r\nf 1797 1796 1811 1812\r\nf 1790 1789 1804 1805\r\nf 1798 1797 1812 1813\r\nf 1791 1790 1805 1806\r\nf 1799 1798 1813 1814\r\nf 1792 1791 1806 1807\r\nf 1804 1803 1818 1819\r\nf 1812 1811 1826 1827\r\nf 1805 1804 1819 1820\r\nf 1813 1812 1827 1828\r\nf 1806 1805 1820 1821\r\nf 1814 1813 1828 1829\r\nf 1807 1806 1821 1822\r\nf 1800 1528 1815\r\nf 1754 1814 1829\r\nf 1808 1807 1822 1823\r\nf 1801 1800 1815 1816\r\nf 1809 1808 1823 1824\r\nf 1802 1801 1816 1817\r\nf 1810 1809 1824 1825\r\nf 1803 1802 1817 1818\r\nf 1811 1810 1825 1826\r\nf 1823 1822 1837 1838\r\nf 1816 1815 1830 1831\r\nf 1824 1823 1838 1839\r\nf 1817 1816 1831 1832\r\nf 1825 1824 1839 1840\r\nf 1818 1817 1832 1833\r\nf 1826 1825 1840 1841\r\nf 1819 1818 1833 1834\r\nf 1827 1826 1841 1842\r\nf 1820 1819 1834 1835\r\nf 1828 1827 1842 1843\r\nf 1821 1820 1835 1836\r\nf 1829 1828 1843 1844\r\nf 1822 1821 1836 1837\r\nf 1815 1528 1830\r\nf 1754 1829 1844\r\nf 1842 1841 1856 1857\r\nf 1835 1834 1849 1850\r\nf 1843 1842 1857 1858\r\nf 1836 1835 1850 1851\r\nf 1844 1843 1858 1859\r\nf 1837 1836 1851 1852\r\nf 1830 1528 1845\r\nf 1754 1844 1859\r\nf 1838 1837 1852 1853\r\nf 1831 1830 1845 1846\r\nf 1839 1838 1853 1854\r\nf 1832 1831 1846 1847\r\nf 1840 1839 1854 1855\r\nf 1833 1832 1847 1848\r\nf 1841 1840 1855 1856\r\nf 1834 1833 1848 1849\r\nf 1846 1845 1860 1861\r\nf 1854 1853 1868 1869\r\nf 1847 1846 1861 1862\r\nf 1855 1854 1869 1870\r\nf 1848 1847 1862 1863\r\nf 1856 1855 1870 1871\r\nf 1849 1848 1863 1864\r\nf 1857 1856 1871 1872\r\nf 1850 1849 1864 1865\r\nf 1858 1857 1872 1873\r\nf 1851 1850 1865 1866\r\nf 1859 1858 1873 1874\r\nf 1852 1851 1866 1867\r\nf 1845 1528 1860\r\nf 1754 1859 1874\r\nf 1853 1852 1867 1868\r\nf 1865 1864 1879 1880\r\nf 1873 1872 1887 1888\r\nf 1866 1865 1880 1881\r\nf 1874 1873 1888 1889\r\nf 1867 1866 1881 1882\r\nf 1860 1528 1875\r\nf 1754 1874 1889\r\nf 1868 1867 1882 1883\r\nf 1861 1860 1875 1876\r\nf 1869 1868 1883 1884\r\nf 1862 1861 1876 1877\r\nf 1870 1869 1884 1885\r\nf 1863 1862 1877 1878\r\nf 1871 1870 1885 1886\r\nf 1864 1863 1878 1879\r\nf 1872 1871 1886 1887\r\nf 1884 1883 1898 1899\r\nf 1877 1876 1891 1892\r\nf 1885 1884 1899 1900\r\nf 1878 1877 1892 1893\r\nf 1886 1885 1900 1901\r\nf 1879 1878 1893 1894\r\nf 1887 1886 1901 1902\r\nf 1880 1879 1894 1895\r\nf 1888 1887 1902 1903\r\nf 1881 1880 1895 1896\r\nf 1889 1888 1903 1904\r\nf 1882 1881 1896 1897\r\nf 1875 1528 1890\r\nf 1754 1889 1904\r\nf 1883 1882 1897 1898\r\nf 1876 1875 1890 1891\r\nf 1903 1902 1917 1918\r\nf 1896 1895 1910 1911\r\nf 1904 1903 1918 1919\r\nf 1897 1896 1911 1912\r\nf 1890 1528 1905\r\nf 1754 1904 1919\r\nf 1898 1897 1912 1913\r\nf 1891 1890 1905 1906\r\nf 1899 1898 1913 1914\r\nf 1892 1891 1906 1907\r\nf 1900 1899 1914 1915\r\nf 1893 1892 1907 1908\r\nf 1901 1900 1915 1916\r\nf 1894 1893 1908 1909\r\nf 1902 1901 1916 1917\r\nf 1895 1894 1909 1910\r\nf 1915 1914 1924 1452\r\nf 1908 1907 1447 1922\r\nf 1916 1915 1452 1925\r\nf 1909 1908 1922 1448\r\nf 1917 1916 1925 1926\r\nf 1910 1909 1448 1923\r\nf 1918 1917 1926 1927\r\nf 1911 1910 1923 1449\r\nf 1919 1918 1927 1928\r\nf 1912 1911 1449 1450\r\nf 1905 1528 1920\r\nf 1754 1919 1928\r\nf 1913 1912 1450 1451\r\nf 1906 1905 1920 1921\r\nf 1914 1913 1451 1924\r\nf 1907 1906 1921 1447\r\nv 0.826234 0.500000 0.444443\r\nv 0.883893 0.500000 0.416853\r\nv 0.959229 0.500000 0.401922\r\nv 1.000000 0.500000 0.400000\r\nv 1.040771 0.500000 0.401922\r\nv 1.116107 0.500000 0.416853\r\nv 0.795029 0.503806 0.480866\r\nv 0.806921 0.507466 0.462467\r\nv 0.826234 0.510839 0.445511\r\nv 0.852224 0.513795 0.430648\r\nv 0.883893 0.516221 0.418451\r\nv 0.920024 0.518024 0.409387\r\nv 0.959229 0.519134 0.403806\r\nv 1.000000 0.519509 0.401922\r\nv 1.040771 0.519134 0.403806\r\nv 1.079976 0.518024 0.409387\r\nv 1.116107 0.516221 0.418451\r\nv 1.147776 0.513795 0.430648\r\nv 1.173766 0.510839 0.445511\r\nv 1.193079 0.507466 0.462467\r\nv 1.204971 0.503806 0.480866\r\nv 0.795029 0.507466 0.481976\r\nv 0.806921 0.514645 0.464645\r\nv 0.826234 0.521261 0.448672\r\nv 0.852224 0.527060 0.434672\r\nv 0.883893 0.531819 0.423182\r\nv 0.920024 0.535355 0.414645\r\nv 0.959229 0.537533 0.409387\r\nv 1.000000 0.538268 0.407612\r\nv 1.040771 0.537533 0.409387\r\nv 1.079976 0.535355 0.414645\r\nv 1.116107 0.531819 0.423182\r\nv 1.147776 0.527060 0.434672\r\nv 1.173766 0.521261 0.448672\r\nv 1.193079 0.514645 0.464645\r\nv 1.204971 0.507466 0.481976\r\nv 0.795029 0.510839 0.483779\r\nv 0.806921 0.521261 0.468181\r\nv 0.826234 0.530866 0.453806\r\nv 0.852224 0.539285 0.441206\r\nv 0.883893 0.546194 0.430866\r\nv 0.920024 0.551328 0.423182\r\nv 0.959229 0.554489 0.418451\r\nv 1.000000 0.555557 0.416853\r\nv 1.040771 0.554489 0.418451\r\nv 1.079976 0.551328 0.423182\r\nv 1.116107 0.546194 0.430866\r\nv 1.147776 0.539285 0.441206\r\nv 1.173766 0.530866 0.453806\r\nv 1.193079 0.521261 0.468181\r\nv 1.204971 0.510839 0.483779\r\nv 0.795029 0.513795 0.486205\r\nv 0.806921 0.527060 0.472940\r\nv 0.826234 0.539285 0.460715\r\nv 0.852224 0.550000 0.450000\r\nv 0.883893 0.558794 0.441206\r\nv 0.920024 0.565328 0.434672\r\nv 0.959229 0.569352 0.430648\r\nv 1.000000 0.570711 0.429289\r\nv 1.040771 0.569352 0.430648\r\nv 1.079976 0.565328 0.434672\r\nv 1.116107 0.558794 0.441206\r\nv 1.147776 0.550000 0.450000\r\nv 1.173766 0.539285 0.460715\r\nv 1.193079 0.527060 0.472940\r\nv 1.204971 0.513795 0.486205\r\nv 0.795029 0.516221 0.489161\r\nv 0.806921 0.531819 0.478739\r\nv 0.826234 0.546194 0.469134\r\nv 0.852224 0.558794 0.460715\r\nv 0.883893 0.569134 0.453806\r\nv 0.920024 0.576818 0.448672\r\nv 0.959229 0.581549 0.445511\r\nv 1.000000 0.583147 0.444443\r\nv 1.040771 0.581549 0.445511\r\nv 1.079976 0.576818 0.448672\r\nv 1.116107 0.569134 0.453806\r\nv 1.147776 0.558794 0.460715\r\nv 1.173766 0.546194 0.469134\r\nv 1.193079 0.531819 0.478739\r\nv 1.204971 0.516221 0.489161\r\nv 0.791013 0.500000 0.500000\r\nv 0.795029 0.518024 0.492534\r\nv 0.806921 0.535355 0.485355\r\nv 0.826234 0.551328 0.478739\r\nv 0.852224 0.565328 0.472940\r\nv 0.883893 0.576818 0.468181\r\nv 0.920024 0.585355 0.464645\r\nv 0.959229 0.590613 0.462467\r\nv 1.000000 0.592388 0.461732\r\nv 1.040771 0.590613 0.462467\r\nv 1.079976 0.585355 0.464645\r\nv 1.116107 0.576818 0.468181\r\nv 1.147776 0.565328 0.472940\r\nv 1.173766 0.551328 0.478739\r\nv 1.193079 0.535355 0.485355\r\nv 1.204971 0.518024 0.492534\r\nv 0.795029 0.519134 0.496194\r\nv 0.806921 0.537533 0.492534\r\nv 0.826234 0.554489 0.489161\r\nv 0.852224 0.569352 0.486205\r\nv 0.883893 0.581549 0.483779\r\nv 0.920024 0.590613 0.481976\r\nv 0.959229 0.596194 0.480866\r\nv 1.000000 0.598078 0.480491\r\nv 1.040771 0.596194 0.480866\r\nv 1.079976 0.590613 0.481976\r\nv 1.116107 0.581549 0.483779\r\nv 1.147776 0.569352 0.486205\r\nv 1.173766 0.554489 0.489161\r\nv 1.193079 0.537533 0.492534\r\nv 1.204971 0.519134 0.496194\r\nv 0.795029 0.519509 0.500000\r\nv 0.806921 0.538268 0.500000\r\nv 0.826234 0.555557 0.500000\r\nv 0.852224 0.570711 0.500000\r\nv 0.883893 0.583147 0.500000\r\nv 0.920024 0.592388 0.500000\r\nv 0.959229 0.598078 0.500000\r\nv 1.000000 0.600000 0.500000\r\nv 1.040771 0.598078 0.500000\r\nv 1.079976 0.592388 0.500000\r\nv 1.116107 0.583147 0.500000\r\nv 1.147776 0.570711 0.500000\r\nv 1.173766 0.555557 0.500000\r\nv 1.193079 0.538268 0.500000\r\nv 1.204971 0.519509 0.500000\r\nv 0.795029 0.519134 0.503806\r\nv 0.806921 0.537533 0.507466\r\nv 0.826234 0.554489 0.510839\r\nv 0.852224 0.569352 0.513795\r\nv 0.883893 0.581549 0.516221\r\nv 0.920024 0.590613 0.518024\r\nv 0.959229 0.596194 0.519134\r\nv 1.000000 0.598078 0.519509\r\nv 1.040771 0.596194 0.519134\r\nv 1.079976 0.590613 0.518024\r\nv 1.116107 0.581549 0.516221\r\nv 1.147776 0.569352 0.513795\r\nv 1.173766 0.554489 0.510839\r\nv 1.193079 0.537533 0.507466\r\nv 1.204971 0.519134 0.503806\r\nv 0.795029 0.518024 0.507466\r\nv 0.806921 0.535355 0.514645\r\nv 0.826234 0.551328 0.521261\r\nv 0.852224 0.565328 0.527060\r\nv 0.883893 0.576818 0.531819\r\nv 0.920024 0.585355 0.535355\r\nv 0.959229 0.590613 0.537533\r\nv 1.000000 0.592388 0.538268\r\nv 1.040771 0.590613 0.537533\r\nv 1.079976 0.585355 0.535355\r\nv 1.116107 0.576818 0.531819\r\nv 1.147776 0.565328 0.527060\r\nv 1.173766 0.551328 0.521261\r\nv 1.193079 0.535355 0.514645\r\nv 1.204971 0.518024 0.507466\r\nv 0.795029 0.516221 0.510839\r\nv 0.806921 0.531819 0.521261\r\nv 0.826234 0.546194 0.530866\r\nv 0.852224 0.558794 0.539285\r\nv 0.883893 0.569134 0.546194\r\nv 0.920024 0.576818 0.551328\r\nv 0.959229 0.581549 0.554490\r\nv 1.000000 0.583147 0.555557\r\nv 1.040771 0.581549 0.554490\r\nv 1.079976 0.576818 0.551328\r\nv 1.116107 0.569134 0.546194\r\nv 1.147776 0.558794 0.539285\r\nv 1.173766 0.546194 0.530866\r\nv 1.193079 0.531819 0.521261\r\nv 1.204971 0.516221 0.510839\r\nv 0.795029 0.513795 0.513795\r\nv 0.806921 0.527060 0.527060\r\nv 0.826234 0.539285 0.539285\r\nv 0.852224 0.550000 0.550000\r\nv 0.883893 0.558794 0.558794\r\nv 0.920024 0.565328 0.565328\r\nv 0.959229 0.569352 0.569352\r\nv 1.000000 0.570711 0.570711\r\nv 1.040771 0.569352 0.569352\r\nv 1.079976 0.565328 0.565328\r\nv 1.116107 0.558794 0.558794\r\nv 1.147776 0.550000 0.550000\r\nv 1.173766 0.539285 0.539285\r\nv 1.193079 0.527060 0.527060\r\nv 1.204971 0.513795 0.513795\r\nv 0.795029 0.510839 0.516221\r\nv 0.806921 0.521261 0.531819\r\nv 0.826234 0.530866 0.546194\r\nv 0.852224 0.539285 0.558794\r\nv 0.883893 0.546194 0.569134\r\nv 0.920024 0.551328 0.576818\r\nv 0.959229 0.554489 0.581549\r\nv 1.000000 0.555557 0.583147\r\nv 1.040771 0.554489 0.581549\r\nv 1.079976 0.551328 0.576818\r\nv 1.116107 0.546194 0.569134\r\nv 1.147776 0.539285 0.558794\r\nv 1.173766 0.530866 0.546194\r\nv 1.193079 0.521261 0.531819\r\nv 1.204971 0.510839 0.516221\r\nv 0.795029 0.507466 0.518024\r\nv 0.806921 0.514645 0.535355\r\nv 0.826234 0.521261 0.551328\r\nv 0.852224 0.527060 0.565328\r\nv 0.883893 0.531819 0.576818\r\nv 0.920024 0.535355 0.585355\r\nv 0.959229 0.537533 0.590613\r\nv 1.000000 0.538268 0.592388\r\nv 1.040771 0.537533 0.590613\r\nv 1.079976 0.535355 0.585355\r\nv 1.116107 0.531819 0.576818\r\nv 1.147776 0.527060 0.565328\r\nv 1.173766 0.521261 0.551328\r\nv 1.193079 0.514645 0.535355\r\nv 1.204971 0.507466 0.518024\r\nv 0.795029 0.503806 0.519134\r\nv 0.806921 0.507466 0.537533\r\nv 0.826234 0.510839 0.554490\r\nv 0.852224 0.513795 0.569352\r\nv 0.883893 0.516221 0.581549\r\nv 0.920024 0.518024 0.590613\r\nv 0.959229 0.519134 0.596194\r\nv 1.000000 0.519509 0.598079\r\nv 1.040771 0.519134 0.596194\r\nv 1.079976 0.518024 0.590613\r\nv 1.116107 0.516221 0.581549\r\nv 1.147776 0.513795 0.569352\r\nv 1.173766 0.510839 0.554490\r\nv 1.193079 0.507466 0.537533\r\nv 1.204971 0.503806 0.519134\r\nv 0.795029 0.500000 0.519509\r\nv 0.806921 0.500000 0.538268\r\nv 0.826234 0.500000 0.555557\r\nv 0.852224 0.500000 0.570711\r\nv 0.883893 0.500000 0.583147\r\nv 0.920024 0.500000 0.592388\r\nv 0.959229 0.500000 0.598079\r\nv 1.000000 0.500000 0.600000\r\nv 1.040771 0.500000 0.598079\r\nv 1.079976 0.500000 0.592388\r\nv 1.116107 0.500000 0.583147\r\nv 1.147776 0.500000 0.570711\r\nv 1.173766 0.500000 0.555557\r\nv 1.193079 0.500000 0.538268\r\nv 1.204971 0.500000 0.519509\r\nv 0.795029 0.496194 0.519134\r\nv 0.806921 0.492534 0.537533\r\nv 0.826234 0.489161 0.554490\r\nv 0.852224 0.486205 0.569352\r\nv 0.883893 0.483779 0.581549\r\nv 0.920024 0.481976 0.590613\r\nv 0.959229 0.480866 0.596194\r\nv 1.000000 0.480491 0.598079\r\nv 1.040771 0.480866 0.596194\r\nv 1.079976 0.481976 0.590613\r\nv 1.116107 0.483779 0.581549\r\nv 1.147776 0.486205 0.569352\r\nv 1.173766 0.489161 0.554490\r\nv 1.193079 0.492534 0.537533\r\nv 1.204971 0.496194 0.519134\r\nv 0.795029 0.492534 0.518024\r\nv 0.806921 0.485355 0.535355\r\nv 0.826234 0.478739 0.551328\r\nv 0.852224 0.472940 0.565328\r\nv 0.883893 0.468181 0.576818\r\nv 0.920024 0.464645 0.585355\r\nv 0.959229 0.462467 0.590613\r\nv 1.000000 0.461732 0.592388\r\nv 1.040771 0.462467 0.590613\r\nv 1.079976 0.464645 0.585355\r\nv 1.116107 0.468181 0.576818\r\nv 1.147776 0.472940 0.565328\r\nv 1.173766 0.478739 0.551328\r\nv 1.193079 0.485355 0.535355\r\nv 1.204971 0.492534 0.518024\r\nv 0.795029 0.489161 0.516221\r\nv 0.806921 0.478739 0.531819\r\nv 0.826234 0.469134 0.546194\r\nv 0.852224 0.460715 0.558794\r\nv 0.883893 0.453806 0.569134\r\nv 0.920024 0.448672 0.576818\r\nv 0.959229 0.445510 0.581549\r\nv 1.000000 0.444443 0.583147\r\nv 1.040771 0.445510 0.581549\r\nv 1.079976 0.448672 0.576818\r\nv 1.116107 0.453806 0.569134\r\nv 1.147776 0.460715 0.558794\r\nv 1.173766 0.469134 0.546194\r\nv 1.193079 0.478739 0.531819\r\nv 1.204971 0.489161 0.516221\r\nv 0.795029 0.486205 0.513795\r\nv 0.806921 0.472940 0.527060\r\nv 0.826234 0.460715 0.539285\r\nv 0.852224 0.450000 0.550000\r\nv 0.883893 0.441206 0.558794\r\nv 0.920024 0.434672 0.565328\r\nv 0.959229 0.430648 0.569352\r\nv 1.000000 0.429289 0.570711\r\nv 1.040771 0.430648 0.569352\r\nv 1.079976 0.434672 0.565328\r\nv 1.116107 0.441206 0.558794\r\nv 1.147776 0.450000 0.550000\r\nv 1.173766 0.460715 0.539285\r\nv 1.193079 0.472940 0.527060\r\nv 1.204971 0.486205 0.513795\r\nv 1.208987 0.500000 0.500000\r\nv 0.795029 0.483779 0.510839\r\nv 0.806921 0.468181 0.521261\r\nv 0.826234 0.453806 0.530866\r\nv 0.852224 0.441206 0.539285\r\nv 0.883893 0.430866 0.546194\r\nv 0.920024 0.423182 0.551328\r\nv 0.959229 0.418451 0.554490\r\nv 1.000000 0.416853 0.555557\r\nv 1.040771 0.418451 0.554490\r\nv 1.079976 0.423182 0.551328\r\nv 1.116107 0.430866 0.546194\r\nv 1.147776 0.441206 0.539285\r\nv 1.173766 0.453806 0.530866\r\nv 1.193079 0.468181 0.521261\r\nv 1.204971 0.483779 0.510839\r\nv 0.795029 0.481976 0.507466\r\nv 0.806921 0.464645 0.514645\r\nv 0.826234 0.448672 0.521261\r\nv 0.852224 0.434672 0.527060\r\nv 0.883893 0.423182 0.531819\r\nv 0.920024 0.414645 0.535355\r\nv 0.959229 0.409387 0.537533\r\nv 1.000000 0.407612 0.538268\r\nv 1.040771 0.409387 0.537533\r\nv 1.079976 0.414645 0.535355\r\nv 1.116107 0.423182 0.531819\r\nv 1.147776 0.434672 0.527060\r\nv 1.173766 0.448672 0.521261\r\nv 1.193079 0.464645 0.514645\r\nv 1.204971 0.481976 0.507466\r\nv 0.795029 0.480866 0.503806\r\nv 0.806921 0.462467 0.507466\r\nv 0.826234 0.445511 0.510839\r\nv 0.852224 0.430648 0.513795\r\nv 0.883893 0.418451 0.516221\r\nv 0.920024 0.409387 0.518024\r\nv 0.959229 0.403806 0.519134\r\nv 1.000000 0.401922 0.519509\r\nv 1.040771 0.403806 0.519134\r\nv 1.079976 0.409387 0.518024\r\nv 1.116107 0.418451 0.516221\r\nv 1.147776 0.430648 0.513795\r\nv 1.173766 0.445510 0.510839\r\nv 1.193079 0.462467 0.507466\r\nv 1.204971 0.480866 0.503806\r\nv 0.795029 0.480491 0.500000\r\nv 0.806921 0.461732 0.500000\r\nv 0.826234 0.444443 0.500000\r\nv 0.852224 0.429289 0.500000\r\nv 0.883893 0.416853 0.500000\r\nv 0.920024 0.407612 0.500000\r\nv 0.959229 0.401921 0.500000\r\nv 1.000000 0.400000 0.500000\r\nv 1.040771 0.401921 0.500000\r\nv 1.079976 0.407612 0.500000\r\nv 1.116107 0.416853 0.500000\r\nv 1.147776 0.429289 0.500000\r\nv 1.173766 0.444443 0.500000\r\nv 1.193079 0.461732 0.500000\r\nv 1.204971 0.480491 0.500000\r\nv 0.795029 0.480866 0.496194\r\nv 0.806921 0.462467 0.492534\r\nv 0.826234 0.445511 0.489161\r\nv 0.852224 0.430648 0.486205\r\nv 0.883893 0.418451 0.483779\r\nv 0.920024 0.409387 0.481976\r\nv 0.959229 0.403806 0.480866\r\nv 1.000000 0.401922 0.480491\r\nv 1.040771 0.403806 0.480866\r\nv 1.079976 0.409387 0.481976\r\nv 1.116107 0.418451 0.483779\r\nv 1.147776 0.430648 0.486205\r\nv 1.173766 0.445510 0.489161\r\nv 1.193079 0.462467 0.492534\r\nv 1.204971 0.480866 0.496194\r\nv 0.795029 0.481976 0.492534\r\nv 0.806921 0.464645 0.485355\r\nv 0.826234 0.448672 0.478739\r\nv 0.852224 0.434672 0.472940\r\nv 0.883893 0.423182 0.468181\r\nv 0.920024 0.414645 0.464645\r\nv 0.959229 0.409387 0.462467\r\nv 1.000000 0.407612 0.461732\r\nv 1.040771 0.409387 0.462467\r\nv 1.079976 0.414645 0.464645\r\nv 1.116107 0.423182 0.468181\r\nv 1.147776 0.434672 0.472940\r\nv 1.173766 0.448672 0.478739\r\nv 1.193079 0.464645 0.485355\r\nv 1.204971 0.481976 0.492534\r\nv 0.795029 0.483779 0.489161\r\nv 0.806921 0.468181 0.478739\r\nv 0.826234 0.453806 0.469134\r\nv 0.852224 0.441206 0.460715\r\nv 0.883893 0.430866 0.453806\r\nv 0.920024 0.423182 0.448672\r\nv 0.959229 0.418451 0.445511\r\nv 1.000000 0.416853 0.444443\r\nv 1.040771 0.418451 0.445511\r\nv 1.079976 0.423182 0.448672\r\nv 1.116107 0.430866 0.453806\r\nv 1.147776 0.441206 0.460715\r\nv 1.173766 0.453806 0.469134\r\nv 1.193079 0.468181 0.478739\r\nv 1.204971 0.483779 0.489161\r\nv 0.795029 0.486205 0.486205\r\nv 0.806921 0.472940 0.472940\r\nv 0.826234 0.460715 0.460715\r\nv 0.852224 0.450000 0.450000\r\nv 0.883893 0.441206 0.441206\r\nv 0.920024 0.434672 0.434672\r\nv 0.959229 0.430648 0.430648\r\nv 1.000000 0.429289 0.429289\r\nv 1.040771 0.430648 0.430648\r\nv 1.079976 0.434672 0.434672\r\nv 1.116107 0.441206 0.441206\r\nv 1.147776 0.450000 0.450000\r\nv 1.173766 0.460715 0.460715\r\nv 1.193079 0.472940 0.472940\r\nv 1.204971 0.486205 0.486205\r\nv 0.795029 0.489161 0.483779\r\nv 0.806921 0.478739 0.468181\r\nv 0.826234 0.469134 0.453806\r\nv 0.852224 0.460715 0.441206\r\nv 0.883893 0.453806 0.430866\r\nv 0.920024 0.448672 0.423182\r\nv 0.959229 0.445511 0.418451\r\nv 1.000000 0.444443 0.416853\r\nv 1.040771 0.445511 0.418451\r\nv 1.079976 0.448672 0.423182\r\nv 1.116107 0.453806 0.430866\r\nv 1.147776 0.460715 0.441206\r\nv 1.173766 0.469134 0.453806\r\nv 1.193079 0.478739 0.468181\r\nv 1.204971 0.489161 0.483779\r\nv 0.795029 0.492534 0.481976\r\nv 0.806921 0.485355 0.464645\r\nv 0.826234 0.478739 0.448672\r\nv 0.852224 0.472940 0.434672\r\nv 0.883893 0.468181 0.423182\r\nv 0.920024 0.464645 0.414645\r\nv 0.959229 0.462467 0.409387\r\nv 1.000000 0.461732 0.407612\r\nv 1.040771 0.462467 0.409387\r\nv 1.079976 0.464645 0.414645\r\nv 1.116107 0.468181 0.423182\r\nv 1.147776 0.472940 0.434672\r\nv 1.173766 0.478739 0.448672\r\nv 1.193079 0.485355 0.464645\r\nv 1.204971 0.492534 0.481976\r\nv 0.795029 0.496194 0.480866\r\nv 0.806921 0.492534 0.462467\r\nv 0.826234 0.489161 0.445511\r\nv 0.852224 0.486205 0.430648\r\nv 0.883893 0.483779 0.418451\r\nv 0.920024 0.481976 0.409387\r\nv 0.959229 0.480866 0.403806\r\nv 1.000000 0.480491 0.401922\r\nv 1.040771 0.480866 0.403806\r\nv 1.079976 0.481976 0.409387\r\nv 1.116107 0.483779 0.418451\r\nv 1.147776 0.486205 0.430648\r\nv 1.173766 0.489161 0.445511\r\nv 1.193079 0.492534 0.462467\r\nv 1.204971 0.496194 0.480866\r\nv 0.795029 0.500000 0.480491\r\nv 0.806921 0.500000 0.461732\r\nv 0.852224 0.500000 0.429289\r\nv 0.920024 0.500000 0.407612\r\nv 1.079976 0.500000 0.407612\r\nv 1.147776 0.500000 0.429289\r\nv 1.173766 0.500000 0.444443\r\nv 1.193079 0.500000 0.461732\r\nv 1.204971 0.500000 0.480491\r\nf 1929 2403 1936 1937\r\nf 1934 2406 1944 1945\r\nf 2404 1929 1937 1938\r\nf 2407 1934 1945 1946\r\nf 1930 2404 1938 1939\r\nf 2408 2407 1946 1947\r\nf 2405 1930 1939 1940\r\nf 2409 2408 1947 1948\r\nf 1931 2405 1940 1941\r\nf 2410 2409 1948 1949\r\nf 1932 1931 1941 1942\r\nf 2402 2010 1935\r\nf 2236 2410 1949\r\nf 1933 1932 1942 1943\r\nf 2403 2402 1935 1936\r\nf 2406 1933 1943 1944\r\nf 1943 1942 1957 1958\r\nf 1936 1935 1950 1951\r\nf 1944 1943 1958 1959\r\nf 1937 1936 1951 1952\r\nf 1945 1944 1959 1960\r\nf 1938 1937 1952 1953\r\nf 1946 1945 1960 1961\r\nf 1939 1938 1953 1954\r\nf 1947 1946 1961 1962\r\nf 1940 1939 1954 1955\r\nf 1948 1947 1962 1963\r\nf 1941 1940 1955 1956\r\nf 1949 1948 1963 1964\r\nf 1942 1941 1956 1957\r\nf 1935 2010 1950\r\nf 2236 1949 1964\r\nf 1962 1961 1976 1977\r\nf 1955 1954 1969 1970\r\nf 1963 1962 1977 1978\r\nf 1956 1955 1970 1971\r\nf 1964 1963 1978 1979\r\nf 1957 1956 1971 1972\r\nf 1950 2010 1965\r\nf 2236 1964 1979\r\nf 1958 1957 1972 1973\r\nf 1951 1950 1965 1966\r\nf 1959 1958 1973 1974\r\nf 1952 1951 1966 1967\r\nf 1960 1959 1974 1975\r\nf 1953 1952 1967 1968\r\nf 1961 1960 1975 1976\r\nf 1954 1953 1968 1969\r\nf 1974 1973 1988 1989\r\nf 1967 1966 1981 1982\r\nf 1975 1974 1989 1990\r\nf 1968 1967 1982 1983\r\nf 1976 1975 1990 1991\r\nf 1969 1968 1983 1984\r\nf 1977 1976 1991 1992\r\nf 1970 1969 1984 1985\r\nf 1978 1977 1992 1993\r\nf 1971 1970 1985 1986\r\nf 1979 1978 1993 1994\r\nf 1972 1971 1986 1987\r\nf 1965 2010 1980\r\nf 2236 1979 1994\r\nf 1973 1972 1987 1988\r\nf 1966 1965 1980 1981\r\nf 1993 1992 2007 2008\r\nf 1986 1985 2000 2001\r\nf 1994 1993 2008 2009\r\nf 1987 1986 2001 2002\r\nf 1980 2010 1995\r\nf 2236 1994 2009\r\nf 1988 1987 2002 2003\r\nf 1981 1980 1995 1996\r\nf 1989 1988 2003 2004\r\nf 1982 1981 1996 1997\r\nf 1990 1989 2004 2005\r\nf 1983 1982 1997 1998\r\nf 1991 1990 2005 2006\r\nf 1984 1983 1998 1999\r\nf 1992 1991 2006 2007\r\nf 1985 1984 1999 2000\r\nf 1997 1996 2012 2013\r\nf 2005 2004 2020 2021\r\nf 1998 1997 2013 2014\r\nf 2006 2005 2021 2022\r\nf 1999 1998 2014 2015\r\nf 2007 2006 2022 2023\r\nf 2000 1999 2015 2016\r\nf 2008 2007 2023 2024\r\nf 2001 2000 2016 2017\r\nf 2009 2008 2024 2025\r\nf 2002 2001 2017 2018\r\nf 1995 2010 2011\r\nf 2236 2009 2025\r\nf 2003 2002 2018 2019\r\nf 1996 1995 2011 2012\r\nf 2004 2003 2019 2020\r\nf 2017 2016 2031 2032\r\nf 2025 2024 2039 2040\r\nf 2018 2017 2032 2033\r\nf 2011 2010 2026\r\nf 2236 2025 2040\r\nf 2019 2018 2033 2034\r\nf 2012 2011 2026 2027\r\nf 2020 2019 2034 2035\r\nf 2013 2012 2027 2028\r\nf 2021 2020 2035 2036\r\nf 2014 2013 2028 2029\r\nf 2022 2021 2036 2037\r\nf 2015 2014 2029 2030\r\nf 2023 2022 2037 2038\r\nf 2016 2015 2030 2031\r\nf 2024 2023 2038 2039\r\nf 2036 2035 2050 2051\r\nf 2029 2028 2043 2044\r\nf 2037 2036 2051 2052\r\nf 2030 2029 2044 2045\r\nf 2038 2037 2052 2053\r\nf 2031 2030 2045 2046\r\nf 2039 2038 2053 2054\r\nf 2032 2031 2046 2047\r\nf 2040 2039 2054 2055\r\nf 2033 2032 2047 2048\r\nf 2026 2010 2041\r\nf 2236 2040 2055\r\nf 2034 2033 2048 2049\r\nf 2027 2026 2041 2042\r\nf 2035 2034 2049 2050\r\nf 2028 2027 2042 2043\r\nf 2055 2054 2069 2070\r\nf 2048 2047 2062 2063\r\nf 2041 2010 2056\r\nf 2236 2055 2070\r\nf 2049 2048 2063 2064\r\nf 2042 2041 2056 2057\r\nf 2050 2049 2064 2065\r\nf 2043 2042 2057 2058\r\nf 2051 2050 2065 2066\r\nf 2044 2043 2058 2059\r\nf 2052 2051 2066 2067\r\nf 2045 2044 2059 2060\r\nf 2053 2052 2067 2068\r\nf 2046 2045 2060 2061\r\nf 2054 2053 2068 2069\r\nf 2047 2046 2061 2062\r\nf 2059 2058 2073 2074\r\nf 2067 2066 2081 2082\r\nf 2060 2059 2074 2075\r\nf 2068 2067 2082 2083\r\nf 2061 2060 2075 2076\r\nf 2069 2068 2083 2084\r\nf 2062 2061 2076 2077\r\nf 2070 2069 2084 2085\r\nf 2063 2062 2077 2078\r\nf 2056 2010 2071\r\nf 2236 2070 2085\r\nf 2064 2063 2078 2079\r\nf 2057 2056 2071 2072\r\nf 2065 2064 2079 2080\r\nf 2058 2057 2072 2073\r\nf 2066 2065 2080 2081\r\nf 2078 2077 2092 2093\r\nf 2071 2010 2086\r\nf 2236 2085 2100\r\nf 2079 2078 2093 2094\r\nf 2072 2071 2086 2087\r\nf 2080 2079 2094 2095\r\nf 2073 2072 2087 2088\r\nf 2081 2080 2095 2096\r\nf 2074 2073 2088 2089\r\nf 2082 2081 2096 2097\r\nf 2075 2074 2089 2090\r\nf 2083 2082 2097 2098\r\nf 2076 2075 2090 2091\r\nf 2084 2083 2098 2099\r\nf 2077 2076 2091 2092\r\nf 2085 2084 2099 2100\r\nf 2097 2096 2111 2112\r\nf 2090 2089 2104 2105\r\nf 2098 2097 2112 2113\r\nf 2091 2090 2105 2106\r\nf 2099 2098 2113 2114\r\nf 2092 2091 2106 2107\r\nf 2100 2099 2114 2115\r\nf 2093 2092 2107 2108\r\nf 2086 2010 2101\r\nf 2236 2100 2115\r\nf 2094 2093 2108 2109\r\nf 2087 2086 2101 2102\r\nf 2095 2094 2109 2110\r\nf 2088 2087 2102 2103\r\nf 2096 2095 2110 2111\r\nf 2089 2088 2103 2104\r\nf 2236 2115 2130\r\nf 2109 2108 2123 2124\r\nf 2102 2101 2116 2117\r\nf 2110 2109 2124 2125\r\nf 2103 2102 2117 2118\r\nf 2111 2110 2125 2126\r\nf 2104 2103 2118 2119\r\nf 2112 2111 2126 2127\r\nf 2105 2104 2119 2120\r\nf 2113 2112 2127 2128\r\nf 2106 2105 2120 2121\r\nf 2114 2113 2128 2129\r\nf 2107 2106 2121 2122\r\nf 2115 2114 2129 2130\r\nf 2108 2107 2122 2123\r\nf 2101 2010 2116\r\nf 2128 2127 2142 2143\r\nf 2121 2120 2135 2136\r\nf 2129 2128 2143 2144\r\nf 2122 2121 2136 2137\r\nf 2130 2129 2144 2145\r\nf 2123 2122 2137 2138\r\nf 2116 2010 2131\r\nf 2236 2130 2145\r\nf 2124 2123 2138 2139\r\nf 2117 2116 2131 2132\r\nf 2125 2124 2139 2140\r\nf 2118 2117 2132 2133\r\nf 2126 2125 2140 2141\r\nf 2119 2118 2133 2134\r\nf 2127 2126 2141 2142\r\nf 2120 2119 2134 2135\r\nf 2132 2131 2146 2147\r\nf 2140 2139 2154 2155\r\nf 2133 2132 2147 2148\r\nf 2141 2140 2155 2156\r\nf 2134 2133 2148 2149\r\nf 2142 2141 2156 2157\r\nf 2135 2134 2149 2150\r\nf 2143 2142 2157 2158\r\nf 2136 2135 2150 2151\r\nf 2144 2143 2158 2159\r\nf 2137 2136 2151 2152\r\nf 2145 2144 2159 2160\r\nf 2138 2137 2152 2153\r\nf 2131 2010 2146\r\nf 2236 2145 2160\r\nf 2139 2138 2153 2154\r\nf 2151 2150 2165 2166\r\nf 2159 2158 2173 2174\r\nf 2152 2151 2166 2167\r\nf 2160 2159 2174 2175\r\nf 2153 2152 2167 2168\r\nf 2146 2010 2161\r\nf 2236 2160 2175\r\nf 2154 2153 2168 2169\r\nf 2147 2146 2161 2162\r\nf 2155 2154 2169 2170\r\nf 2148 2147 2162 2163\r\nf 2156 2155 2170 2171\r\nf 2149 2148 2163 2164\r\nf 2157 2156 2171 2172\r\nf 2150 2149 2164 2165\r\nf 2158 2157 2172 2173\r\nf 2170 2169 2184 2185\r\nf 2163 2162 2177 2178\r\nf 2171 2170 2185 2186\r\nf 2164 2163 2178 2179\r\nf 2172 2171 2186 2187\r\nf 2165 2164 2179 2180\r\nf 2173 2172 2187 2188\r\nf 2166 2165 2180 2181\r\nf 2174 2173 2188 2189\r\nf 2167 2166 2181 2182\r\nf 2175 2174 2189 2190\r\nf 2168 2167 2182 2183\r\nf 2161 2010 2176\r\nf 2236 2175 2190\r\nf 2169 2168 2183 2184\r\nf 2162 2161 2176 2177\r\nf 2189 2188 2203 2204\r\nf 2182 2181 2196 2197\r\nf 2190 2189 2204 2205\r\nf 2183 2182 2197 2198\r\nf 2176 2010 2191\r\nf 2236 2190 2205\r\nf 2184 2183 2198 2199\r\nf 2177 2176 2191 2192\r\nf 2185 2184 2199 2200\r\nf 2178 2177 2192 2193\r\nf 2186 2185 2200 2201\r\nf 2179 2178 2193 2194\r\nf 2187 2186 2201 2202\r\nf 2180 2179 2194 2195\r\nf 2188 2187 2202 2203\r\nf 2181 2180 2195 2196\r\nf 2193 2192 2207 2208\r\nf 2201 2200 2215 2216\r\nf 2194 2193 2208 2209\r\nf 2202 2201 2216 2217\r\nf 2195 2194 2209 2210\r\nf 2203 2202 2217 2218\r\nf 2196 2195 2210 2211\r\nf 2204 2203 2218 2219\r\nf 2197 2196 2211 2212\r\nf 2205 2204 2219 2220\r\nf 2198 2197 2212 2213\r\nf 2191 2010 2206\r\nf 2236 2205 2220\r\nf 2199 2198 2213 2214\r\nf 2192 2191 2206 2207\r\nf 2200 2199 2214 2215\r\nf 2212 2211 2226 2227\r\nf 2220 2219 2234 2235\r\nf 2213 2212 2227 2228\r\nf 2206 2010 2221\r\nf 2236 2220 2235\r\nf 2214 2213 2228 2229\r\nf 2207 2206 2221 2222\r\nf 2215 2214 2229 2230\r\nf 2208 2207 2222 2223\r\nf 2216 2215 2230 2231\r\nf 2209 2208 2223 2224\r\nf 2217 2216 2231 2232\r\nf 2210 2209 2224 2225\r\nf 2218 2217 2232 2233\r\nf 2211 2210 2225 2226\r\nf 2219 2218 2233 2234\r\nf 2231 2230 2246 2247\r\nf 2224 2223 2239 2240\r\nf 2232 2231 2247 2248\r\nf 2225 2224 2240 2241\r\nf 2233 2232 2248 2249\r\nf 2226 2225 2241 2242\r\nf 2234 2233 2249 2250\r\nf 2227 2226 2242 2243\r\nf 2235 2234 2250 2251\r\nf 2228 2227 2243 2244\r\nf 2221 2010 2237\r\nf 2236 2235 2251\r\nf 2229 2228 2244 2245\r\nf 2222 2221 2237 2238\r\nf 2230 2229 2245 2246\r\nf 2223 2222 2238 2239\r\nf 2251 2250 2265 2266\r\nf 2244 2243 2258 2259\r\nf 2237 2010 2252\r\nf 2236 2251 2266\r\nf 2245 2244 2259 2260\r\nf 2238 2237 2252 2253\r\nf 2246 2245 2260 2261\r\nf 2239 2238 2253 2254\r\nf 2247 2246 2261 2262\r\nf 2240 2239 2254 2255\r\nf 2248 2247 2262 2263\r\nf 2241 2240 2255 2256\r\nf 2249 2248 2263 2264\r\nf 2242 2241 2256 2257\r\nf 2250 2249 2264 2265\r\nf 2243 2242 2257 2258\r\nf 2263 2262 2277 2278\r\nf 2256 2255 2270 2271\r\nf 2264 2263 2278 2279\r\nf 2257 2256 2271 2272\r\nf 2265 2264 2279 2280\r\nf 2258 2257 2272 2273\r\nf 2266 2265 2280 2281\r\nf 2259 2258 2273 2274\r\nf 2252 2010 2267\r\nf 2236 2266 2281\r\nf 2260 2259 2274 2275\r\nf 2253 2252 2267 2268\r\nf 2261 2260 2275 2276\r\nf 2254 2253 2268 2269\r\nf 2262 2261 2276 2277\r\nf 2255 2254 2269 2270\r\nf 2267 2010 2282\r\nf 2236 2281 2296\r\nf 2275 2274 2289 2290\r\nf 2268 2267 2282 2283\r\nf 2276 2275 2290 2291\r\nf 2269 2268 2283 2284\r\nf 2277 2276 2291 2292\r\nf 2270 2269 2284 2285\r\nf 2278 2277 2292 2293\r\nf 2271 2270 2285 2286\r\nf 2279 2278 2293 2294\r\nf 2272 2271 2286 2287\r\nf 2280 2279 2294 2295\r\nf 2273 2272 2287 2288\r\nf 2281 2280 2295 2296\r\nf 2274 2273 2288 2289\r\nf 2286 2285 2300 2301\r\nf 2294 2293 2308 2309\r\nf 2287 2286 2301 2302\r\nf 2295 2294 2309 2310\r\nf 2288 2287 2302 2303\r\nf 2296 2295 2310 2311\r\nf 2289 2288 2303 2304\r\nf 2282 2010 2297\r\nf 2236 2296 2311\r\nf 2290 2289 2304 2305\r\nf 2283 2282 2297 2298\r\nf 2291 2290 2305 2306\r\nf 2284 2283 2298 2299\r\nf 2292 2291 2306 2307\r\nf 2285 2284 2299 2300\r\nf 2293 2292 2307 2308\r\nf 2305 2304 2319 2320\r\nf 2298 2297 2312 2313\r\nf 2306 2305 2320 2321\r\nf 2299 2298 2313 2314\r\nf 2307 2306 2321 2322\r\nf 2300 2299 2314 2315\r\nf 2308 2307 2322 2323\r\nf 2301 2300 2315 2316\r\nf 2309 2308 2323 2324\r\nf 2302 2301 2316 2317\r\nf 2310 2309 2324 2325\r\nf 2303 2302 2317 2318\r\nf 2311 2310 2325 2326\r\nf 2304 2303 2318 2319\r\nf 2297 2010 2312\r\nf 2236 2311 2326\r\nf 2324 2323 2338 2339\r\nf 2317 2316 2331 2332\r\nf 2325 2324 2339 2340\r\nf 2318 2317 2332 2333\r\nf 2326 2325 2340 2341\r\nf 2319 2318 2333 2334\r\nf 2312 2010 2327\r\nf 2236 2326 2341\r\nf 2320 2319 2334 2335\r\nf 2313 2312 2327 2328\r\nf 2321 2320 2335 2336\r\nf 2314 2313 2328 2329\r\nf 2322 2321 2336 2337\r\nf 2315 2314 2329 2330\r\nf 2323 2322 2337 2338\r\nf 2316 2315 2330 2331\r\nf 2328 2327 2342 2343\r\nf 2336 2335 2350 2351\r\nf 2329 2328 2343 2344\r\nf 2337 2336 2351 2352\r\nf 2330 2329 2344 2345\r\nf 2338 2337 2352 2353\r\nf 2331 2330 2345 2346\r\nf 2339 2338 2353 2354\r\nf 2332 2331 2346 2347\r\nf 2340 2339 2354 2355\r\nf 2333 2332 2347 2348\r\nf 2341 2340 2355 2356\r\nf 2334 2333 2348 2349\r\nf 2327 2010 2342\r\nf 2236 2341 2356\r\nf 2335 2334 2349 2350\r\nf 2347 2346 2361 2362\r\nf 2355 2354 2369 2370\r\nf 2348 2347 2362 2363\r\nf 2356 2355 2370 2371\r\nf 2349 2348 2363 2364\r\nf 2342 2010 2357\r\nf 2236 2356 2371\r\nf 2350 2349 2364 2365\r\nf 2343 2342 2357 2358\r\nf 2351 2350 2365 2366\r\nf 2344 2343 2358 2359\r\nf 2352 2351 2366 2367\r\nf 2345 2344 2359 2360\r\nf 2353 2352 2367 2368\r\nf 2346 2345 2360 2361\r\nf 2354 2353 2368 2369\r\nf 2366 2365 2380 2381\r\nf 2359 2358 2373 2374\r\nf 2367 2366 2381 2382\r\nf 2360 2359 2374 2375\r\nf 2368 2367 2382 2383\r\nf 2361 2360 2375 2376\r\nf 2369 2368 2383 2384\r\nf 2362 2361 2376 2377\r\nf 2370 2369 2384 2385\r\nf 2363 2362 2377 2378\r\nf 2371 2370 2385 2386\r\nf 2364 2363 2378 2379\r\nf 2357 2010 2372\r\nf 2236 2371 2386\r\nf 2365 2364 2379 2380\r\nf 2358 2357 2372 2373\r\nf 2385 2384 2399 2400\r\nf 2378 2377 2392 2393\r\nf 2386 2385 2400 2401\r\nf 2379 2378 2393 2394\r\nf 2372 2010 2387\r\nf 2236 2386 2401\r\nf 2380 2379 2394 2395\r\nf 2373 2372 2387 2388\r\nf 2381 2380 2395 2396\r\nf 2374 2373 2388 2389\r\nf 2382 2381 2396 2397\r\nf 2375 2374 2389 2390\r\nf 2383 2382 2397 2398\r\nf 2376 2375 2390 2391\r\nf 2384 2383 2398 2399\r\nf 2377 2376 2391 2392\r\nf 2397 2396 2406 1934\r\nf 2390 2389 1929 2404\r\nf 2398 2397 1934 2407\r\nf 2391 2390 2404 1930\r\nf 2399 2398 2407 2408\r\nf 2392 2391 1930 2405\r\nf 2400 2399 2408 2409\r\nf 2393 2392 2405 1931\r\nf 2401 2400 2409 2410\r\nf 2394 2393 1931 1932\r\nf 2387 2010 2402\r\nf 2236 2401 2410\r\nf 2395 2394 1932 1933\r\nf 2388 2387 2402 2403\r\nf 2396 2395 1933 2406\r\nf 2389 2388 2403 1929\r\nv -0.173766 0.500000 0.444443\r\nv -0.116107 0.500000 0.416853\r\nv -0.040771 0.500000 0.401921\r\nv 0.000000 0.500000 0.400000\r\nv 0.040771 0.500000 0.401921\r\nv 0.116107 0.500000 0.416853\r\nv -0.204971 0.503806 0.480866\r\nv -0.193079 0.507466 0.462467\r\nv -0.173766 0.510839 0.445510\r\nv -0.147776 0.513795 0.430648\r\nv -0.116107 0.516221 0.418451\r\nv -0.079976 0.518024 0.409387\r\nv -0.040771 0.519134 0.403806\r\nv 0.000000 0.519509 0.401921\r\nv 0.040771 0.519134 0.403806\r\nv 0.079976 0.518024 0.409387\r\nv 0.116107 0.516221 0.418451\r\nv 0.147776 0.513795 0.430648\r\nv 0.173766 0.510839 0.445511\r\nv 0.193079 0.507466 0.462467\r\nv 0.204971 0.503806 0.480866\r\nv -0.204971 0.507466 0.481976\r\nv -0.193079 0.514645 0.464645\r\nv -0.173766 0.521261 0.448672\r\nv -0.147776 0.527060 0.434672\r\nv -0.116107 0.531819 0.423182\r\nv -0.079976 0.535355 0.414645\r\nv -0.040771 0.537533 0.409387\r\nv 0.000000 0.538268 0.407612\r\nv 0.040771 0.537533 0.409387\r\nv 0.079976 0.535355 0.414645\r\nv 0.116107 0.531819 0.423182\r\nv 0.147776 0.527060 0.434672\r\nv 0.173766 0.521261 0.448672\r\nv 0.193079 0.514645 0.464645\r\nv 0.204971 0.507466 0.481976\r\nv -0.204971 0.510839 0.483779\r\nv -0.193079 0.521261 0.468181\r\nv -0.173766 0.530866 0.453806\r\nv -0.147776 0.539285 0.441206\r\nv -0.116107 0.546194 0.430866\r\nv -0.079976 0.551328 0.423182\r\nv -0.040771 0.554490 0.418451\r\nv 0.000000 0.555557 0.416853\r\nv 0.040771 0.554490 0.418451\r\nv 0.079976 0.551328 0.423182\r\nv 0.116107 0.546194 0.430866\r\nv 0.147776 0.539285 0.441206\r\nv 0.173766 0.530866 0.453806\r\nv 0.193079 0.521261 0.468181\r\nv 0.204971 0.510839 0.483779\r\nv -0.204971 0.513795 0.486205\r\nv -0.193079 0.527060 0.472940\r\nv -0.173766 0.539285 0.460715\r\nv -0.147776 0.550000 0.450000\r\nv -0.116107 0.558794 0.441206\r\nv -0.079976 0.565328 0.434672\r\nv -0.040771 0.569352 0.430648\r\nv 0.000000 0.570711 0.429289\r\nv 0.040771 0.569352 0.430648\r\nv 0.079976 0.565328 0.434672\r\nv 0.116107 0.558794 0.441206\r\nv 0.147776 0.550000 0.450000\r\nv 0.173766 0.539285 0.460715\r\nv 0.193079 0.527060 0.472940\r\nv 0.204971 0.513795 0.486205\r\nv -0.204971 0.516221 0.489161\r\nv -0.193079 0.531819 0.478739\r\nv -0.173766 0.546194 0.469134\r\nv -0.147776 0.558794 0.460715\r\nv -0.116107 0.569134 0.453806\r\nv -0.079976 0.576818 0.448672\r\nv -0.040771 0.581549 0.445510\r\nv 0.000000 0.583147 0.444443\r\nv 0.040771 0.581549 0.445511\r\nv 0.079976 0.576818 0.448672\r\nv 0.116107 0.569134 0.453806\r\nv 0.147776 0.558794 0.460715\r\nv 0.173766 0.546194 0.469134\r\nv 0.193079 0.531819 0.478739\r\nv 0.204971 0.516221 0.489161\r\nv -0.208987 0.500000 0.500000\r\nv -0.204971 0.518024 0.492534\r\nv -0.193079 0.535355 0.485355\r\nv -0.173766 0.551328 0.478739\r\nv -0.147776 0.565328 0.472940\r\nv -0.116107 0.576818 0.468181\r\nv -0.079976 0.585355 0.464645\r\nv -0.040771 0.590613 0.462467\r\nv 0.000000 0.592388 0.461732\r\nv 0.040771 0.590613 0.462467\r\nv 0.079976 0.585355 0.464645\r\nv 0.116107 0.576818 0.468181\r\nv 0.147776 0.565328 0.472940\r\nv 0.173766 0.551328 0.478739\r\nv 0.193079 0.535355 0.485355\r\nv 0.204971 0.518024 0.492534\r\nv -0.204971 0.519134 0.496194\r\nv -0.193079 0.537533 0.492534\r\nv -0.173766 0.554490 0.489161\r\nv -0.147776 0.569352 0.486205\r\nv -0.116107 0.581549 0.483779\r\nv -0.079976 0.590613 0.481976\r\nv -0.040771 0.596194 0.480866\r\nv 0.000000 0.598079 0.480491\r\nv 0.040771 0.596194 0.480866\r\nv 0.079976 0.590613 0.481976\r\nv 0.116107 0.581549 0.483779\r\nv 0.147776 0.569352 0.486205\r\nv 0.173766 0.554490 0.489161\r\nv 0.193079 0.537533 0.492534\r\nv 0.204971 0.519134 0.496194\r\nv -0.204971 0.519509 0.500000\r\nv -0.193079 0.538268 0.500000\r\nv -0.173766 0.555557 0.500000\r\nv -0.147776 0.570711 0.500000\r\nv -0.116107 0.583147 0.500000\r\nv -0.079976 0.592388 0.500000\r\nv -0.040771 0.598079 0.500000\r\nv 0.000000 0.600000 0.500000\r\nv 0.040771 0.598079 0.500000\r\nv 0.079976 0.592388 0.500000\r\nv 0.116107 0.583147 0.500000\r\nv 0.147776 0.570711 0.500000\r\nv 0.173766 0.555557 0.500000\r\nv 0.193079 0.538268 0.500000\r\nv 0.204971 0.519509 0.500000\r\nv -0.204971 0.519134 0.503806\r\nv -0.193079 0.537533 0.507466\r\nv -0.173766 0.554490 0.510839\r\nv -0.147776 0.569352 0.513795\r\nv -0.116107 0.581549 0.516221\r\nv -0.079976 0.590613 0.518024\r\nv -0.040771 0.596194 0.519134\r\nv 0.000000 0.598079 0.519509\r\nv 0.040771 0.596194 0.519134\r\nv 0.079976 0.590613 0.518024\r\nv 0.116107 0.581549 0.516221\r\nv 0.147776 0.569352 0.513795\r\nv 0.173766 0.554490 0.510839\r\nv 0.193079 0.537533 0.507466\r\nv 0.204971 0.519134 0.503806\r\nv -0.204971 0.518024 0.507466\r\nv -0.193079 0.535355 0.514645\r\nv -0.173766 0.551328 0.521261\r\nv -0.147776 0.565328 0.527060\r\nv -0.116107 0.576818 0.531819\r\nv -0.079976 0.585355 0.535355\r\nv -0.040771 0.590613 0.537533\r\nv 0.000000 0.592388 0.538268\r\nv 0.040771 0.590613 0.537533\r\nv 0.079976 0.585355 0.535355\r\nv 0.116107 0.576818 0.531819\r\nv 0.147776 0.565328 0.527060\r\nv 0.173766 0.551328 0.521261\r\nv 0.193079 0.535355 0.514645\r\nv 0.204971 0.518024 0.507466\r\nv -0.204971 0.516221 0.510839\r\nv -0.193079 0.531819 0.521261\r\nv -0.173766 0.546194 0.530866\r\nv -0.147776 0.558794 0.539285\r\nv -0.116107 0.569134 0.546194\r\nv -0.079976 0.576818 0.551328\r\nv -0.040771 0.581549 0.554489\r\nv 0.000000 0.583147 0.555557\r\nv 0.040771 0.581549 0.554489\r\nv 0.079976 0.576818 0.551328\r\nv 0.116107 0.569134 0.546194\r\nv 0.147776 0.558794 0.539285\r\nv 0.173766 0.546194 0.530866\r\nv 0.193079 0.531819 0.521261\r\nv 0.204971 0.516221 0.510839\r\nv -0.204971 0.513795 0.513795\r\nv -0.193079 0.527060 0.527060\r\nv -0.173766 0.539285 0.539285\r\nv -0.147776 0.550000 0.550000\r\nv -0.116107 0.558794 0.558794\r\nv -0.079976 0.565328 0.565328\r\nv -0.040771 0.569352 0.569352\r\nv -0.000000 0.570711 0.570711\r\nv 0.040771 0.569352 0.569352\r\nv 0.079976 0.565328 0.565328\r\nv 0.116107 0.558794 0.558794\r\nv 0.147776 0.550000 0.550000\r\nv 0.173766 0.539285 0.539285\r\nv 0.193079 0.527060 0.527060\r\nv 0.204971 0.513795 0.513795\r\nv -0.204971 0.510839 0.516221\r\nv -0.193079 0.521261 0.531819\r\nv -0.173766 0.530866 0.546194\r\nv -0.147776 0.539285 0.558794\r\nv -0.116107 0.546194 0.569134\r\nv -0.079976 0.551328 0.576818\r\nv -0.040771 0.554490 0.581549\r\nv -0.000000 0.555557 0.583147\r\nv 0.040771 0.554490 0.581549\r\nv 0.079976 0.551328 0.576818\r\nv 0.116107 0.546194 0.569134\r\nv 0.147776 0.539285 0.558794\r\nv 0.173766 0.530866 0.546194\r\nv 0.193079 0.521261 0.531819\r\nv 0.204971 0.510839 0.516221\r\nv -0.204971 0.507466 0.518024\r\nv -0.193079 0.514645 0.535355\r\nv -0.173766 0.521261 0.551328\r\nv -0.147776 0.527060 0.565328\r\nv -0.116107 0.531819 0.576818\r\nv -0.079976 0.535355 0.585355\r\nv -0.040771 0.537533 0.590613\r\nv -0.000000 0.538268 0.592388\r\nv 0.040771 0.537533 0.590613\r\nv 0.079976 0.535355 0.585355\r\nv 0.116107 0.531819 0.576818\r\nv 0.147776 0.527060 0.565328\r\nv 0.173766 0.521261 0.551328\r\nv 0.193079 0.514645 0.535355\r\nv 0.204971 0.507466 0.518024\r\nv -0.204971 0.503806 0.519134\r\nv -0.193079 0.507466 0.537533\r\nv -0.173766 0.510839 0.554489\r\nv -0.147776 0.513795 0.569352\r\nv -0.116107 0.516221 0.581549\r\nv -0.079976 0.518024 0.590613\r\nv -0.040771 0.519134 0.596194\r\nv -0.000000 0.519509 0.598078\r\nv 0.040771 0.519134 0.596194\r\nv 0.079976 0.518024 0.590613\r\nv 0.116107 0.516221 0.581549\r\nv 0.147776 0.513795 0.569352\r\nv 0.173766 0.510839 0.554489\r\nv 0.193079 0.507466 0.537533\r\nv 0.204971 0.503806 0.519134\r\nv -0.204971 0.500000 0.519509\r\nv -0.193079 0.500000 0.538268\r\nv -0.173766 0.500000 0.555557\r\nv -0.147776 0.500000 0.570711\r\nv -0.116107 0.500000 0.583147\r\nv -0.079976 0.500000 0.592388\r\nv -0.040771 0.500000 0.598078\r\nv -0.000000 0.500000 0.600000\r\nv 0.040771 0.500000 0.598079\r\nv 0.079976 0.500000 0.592388\r\nv 0.116107 0.500000 0.583147\r\nv 0.147776 0.500000 0.570711\r\nv 0.173766 0.500000 0.555557\r\nv 0.193079 0.500000 0.538268\r\nv 0.204971 0.500000 0.519509\r\nv -0.204971 0.496194 0.519134\r\nv -0.193079 0.492534 0.537533\r\nv -0.173766 0.489161 0.554489\r\nv -0.147776 0.486205 0.569352\r\nv -0.116107 0.483779 0.581549\r\nv -0.079976 0.481976 0.590613\r\nv -0.040771 0.480866 0.596194\r\nv -0.000000 0.480491 0.598078\r\nv 0.040771 0.480866 0.596194\r\nv 0.079976 0.481976 0.590613\r\nv 0.116107 0.483779 0.581549\r\nv 0.147776 0.486205 0.569352\r\nv 0.173766 0.489161 0.554489\r\nv 0.193079 0.492534 0.537533\r\nv 0.204971 0.496194 0.519134\r\nv -0.204971 0.492534 0.518024\r\nv -0.193079 0.485355 0.535355\r\nv -0.173766 0.478739 0.551328\r\nv -0.147776 0.472940 0.565328\r\nv -0.116107 0.468181 0.576818\r\nv -0.079976 0.464645 0.585355\r\nv -0.040771 0.462467 0.590613\r\nv -0.000000 0.461732 0.592388\r\nv 0.040771 0.462467 0.590613\r\nv 0.079976 0.464645 0.585355\r\nv 0.116107 0.468181 0.576818\r\nv 0.147776 0.472940 0.565328\r\nv 0.173766 0.478739 0.551328\r\nv 0.193079 0.485355 0.535355\r\nv 0.204971 0.492534 0.518024\r\nv -0.204971 0.489161 0.516221\r\nv -0.193079 0.478739 0.531819\r\nv -0.173766 0.469134 0.546194\r\nv -0.147776 0.460715 0.558794\r\nv -0.116107 0.453806 0.569134\r\nv -0.079976 0.448672 0.576818\r\nv -0.040771 0.445511 0.581549\r\nv -0.000000 0.444443 0.583147\r\nv 0.040771 0.445511 0.581549\r\nv 0.079976 0.448672 0.576818\r\nv 0.116107 0.453806 0.569134\r\nv 0.147776 0.460715 0.558794\r\nv 0.173766 0.469134 0.546194\r\nv 0.193079 0.478739 0.531819\r\nv 0.204971 0.489161 0.516221\r\nv -0.204971 0.486205 0.513795\r\nv -0.193079 0.472940 0.527060\r\nv -0.173766 0.460715 0.539285\r\nv -0.147776 0.450000 0.550000\r\nv -0.116107 0.441206 0.558794\r\nv -0.079976 0.434672 0.565328\r\nv -0.040771 0.430648 0.569352\r\nv -0.000000 0.429289 0.570711\r\nv 0.040771 0.430648 0.569352\r\nv 0.079976 0.434672 0.565328\r\nv 0.116107 0.441206 0.558794\r\nv 0.147776 0.450000 0.550000\r\nv 0.173766 0.460715 0.539285\r\nv 0.193079 0.472940 0.527060\r\nv 0.204971 0.486205 0.513795\r\nv 0.208987 0.500000 0.500000\r\nv -0.204971 0.483779 0.510839\r\nv -0.193079 0.468181 0.521261\r\nv -0.173766 0.453806 0.530866\r\nv -0.147776 0.441206 0.539285\r\nv -0.116107 0.430866 0.546194\r\nv -0.079976 0.423182 0.551328\r\nv -0.040771 0.418451 0.554489\r\nv -0.000000 0.416853 0.555557\r\nv 0.040771 0.418451 0.554489\r\nv 0.079976 0.423182 0.551328\r\nv 0.116107 0.430866 0.546194\r\nv 0.147776 0.441206 0.539285\r\nv 0.173766 0.453806 0.530866\r\nv 0.193079 0.468181 0.521261\r\nv 0.204971 0.483779 0.510839\r\nv -0.204971 0.481976 0.507466\r\nv -0.193079 0.464645 0.514645\r\nv -0.173766 0.448672 0.521261\r\nv -0.147776 0.434672 0.527060\r\nv -0.116107 0.423182 0.531819\r\nv -0.079976 0.414645 0.535355\r\nv -0.040771 0.409387 0.537533\r\nv -0.000000 0.407612 0.538268\r\nv 0.040771 0.409387 0.537533\r\nv 0.079976 0.414645 0.535355\r\nv 0.116107 0.423182 0.531819\r\nv 0.147776 0.434672 0.527060\r\nv 0.173766 0.448672 0.521261\r\nv 0.193079 0.464645 0.514645\r\nv 0.204971 0.481976 0.507466\r\nv -0.204971 0.480866 0.503806\r\nv -0.193079 0.462467 0.507466\r\nv -0.173766 0.445511 0.510839\r\nv -0.147776 0.430648 0.513795\r\nv -0.116107 0.418451 0.516221\r\nv -0.079976 0.409387 0.518024\r\nv -0.040771 0.403806 0.519134\r\nv -0.000000 0.401922 0.519509\r\nv 0.040771 0.403806 0.519134\r\nv 0.079976 0.409387 0.518024\r\nv 0.116107 0.418451 0.516221\r\nv 0.147776 0.430648 0.513795\r\nv 0.173766 0.445511 0.510839\r\nv 0.193079 0.462467 0.507466\r\nv 0.204971 0.480866 0.503806\r\nv -0.204971 0.480491 0.500000\r\nv -0.193079 0.461732 0.500000\r\nv -0.173766 0.444443 0.500000\r\nv -0.147776 0.429289 0.500000\r\nv -0.116107 0.416853 0.500000\r\nv -0.079976 0.407612 0.500000\r\nv -0.040771 0.401922 0.500000\r\nv -0.000000 0.400000 0.500000\r\nv 0.040771 0.401922 0.500000\r\nv 0.079976 0.407612 0.500000\r\nv 0.116107 0.416853 0.500000\r\nv 0.147776 0.429289 0.500000\r\nv 0.173766 0.444443 0.500000\r\nv 0.193079 0.461732 0.500000\r\nv 0.204971 0.480491 0.500000\r\nv -0.204971 0.480866 0.496194\r\nv -0.193079 0.462467 0.492534\r\nv -0.173766 0.445511 0.489161\r\nv -0.147776 0.430648 0.486205\r\nv -0.116107 0.418451 0.483779\r\nv -0.079976 0.409387 0.481976\r\nv -0.040771 0.403806 0.480866\r\nv -0.000000 0.401922 0.480491\r\nv 0.040771 0.403806 0.480866\r\nv 0.079976 0.409387 0.481976\r\nv 0.116107 0.418451 0.483779\r\nv 0.147776 0.430648 0.486205\r\nv 0.173766 0.445511 0.489161\r\nv 0.193079 0.462467 0.492534\r\nv 0.204971 0.480866 0.496194\r\nv -0.204971 0.481976 0.492534\r\nv -0.193079 0.464645 0.485355\r\nv -0.173766 0.448672 0.478739\r\nv -0.147776 0.434672 0.472940\r\nv -0.116107 0.423182 0.468181\r\nv -0.079976 0.414645 0.464645\r\nv -0.040771 0.409387 0.462467\r\nv -0.000000 0.407612 0.461732\r\nv 0.040771 0.409387 0.462467\r\nv 0.079976 0.414645 0.464645\r\nv 0.116107 0.423182 0.468181\r\nv 0.147776 0.434672 0.472940\r\nv 0.173766 0.448672 0.478739\r\nv 0.193079 0.464645 0.485355\r\nv 0.204971 0.481976 0.492534\r\nv -0.204971 0.483779 0.489161\r\nv -0.193079 0.468181 0.478739\r\nv -0.173766 0.453806 0.469134\r\nv -0.147776 0.441206 0.460715\r\nv -0.116107 0.430866 0.453806\r\nv -0.079976 0.423182 0.448672\r\nv -0.040771 0.418451 0.445510\r\nv -0.000000 0.416853 0.444443\r\nv 0.040771 0.418451 0.445510\r\nv 0.079976 0.423182 0.448672\r\nv 0.116107 0.430866 0.453806\r\nv 0.147776 0.441206 0.460715\r\nv 0.173766 0.453806 0.469134\r\nv 0.193079 0.468181 0.478739\r\nv 0.204971 0.483779 0.489161\r\nv -0.204971 0.486205 0.486205\r\nv -0.193079 0.472940 0.472940\r\nv -0.173766 0.460715 0.460715\r\nv -0.147776 0.450000 0.450000\r\nv -0.116107 0.441206 0.441206\r\nv -0.079976 0.434672 0.434672\r\nv -0.040771 0.430648 0.430648\r\nv 0.000000 0.429289 0.429289\r\nv 0.040771 0.430648 0.430648\r\nv 0.079976 0.434672 0.434672\r\nv 0.116107 0.441206 0.441206\r\nv 0.147776 0.450000 0.450000\r\nv 0.173766 0.460715 0.460715\r\nv 0.193079 0.472940 0.472940\r\nv 0.204971 0.486205 0.486205\r\nv -0.204971 0.489161 0.483779\r\nv -0.193079 0.478739 0.468181\r\nv -0.173766 0.469134 0.453806\r\nv -0.147776 0.460715 0.441206\r\nv -0.116107 0.453806 0.430866\r\nv -0.079976 0.448672 0.423182\r\nv -0.040771 0.445511 0.418451\r\nv 0.000000 0.444443 0.416853\r\nv 0.040771 0.445511 0.418451\r\nv 0.079976 0.448672 0.423182\r\nv 0.116107 0.453806 0.430866\r\nv 0.147776 0.460715 0.441206\r\nv 0.173766 0.469134 0.453806\r\nv 0.193079 0.478739 0.468181\r\nv 0.204971 0.489161 0.483779\r\nv -0.204971 0.492534 0.481976\r\nv -0.193079 0.485355 0.464645\r\nv -0.173766 0.478739 0.448672\r\nv -0.147776 0.472940 0.434672\r\nv -0.116107 0.468181 0.423182\r\nv -0.079976 0.464645 0.414645\r\nv -0.040771 0.462467 0.409387\r\nv 0.000000 0.461732 0.407612\r\nv 0.040771 0.462467 0.409387\r\nv 0.079976 0.464645 0.414645\r\nv 0.116107 0.468181 0.423182\r\nv 0.147776 0.472940 0.434672\r\nv 0.173766 0.478739 0.448672\r\nv 0.193079 0.485355 0.464645\r\nv 0.204971 0.492534 0.481976\r\nv -0.204971 0.496194 0.480866\r\nv -0.193079 0.492534 0.462467\r\nv -0.173766 0.489161 0.445511\r\nv -0.147776 0.486205 0.430648\r\nv -0.116107 0.483779 0.418451\r\nv -0.079976 0.481976 0.409387\r\nv -0.040771 0.480866 0.403806\r\nv 0.000000 0.480491 0.401922\r\nv 0.040771 0.480866 0.403806\r\nv 0.079976 0.481976 0.409387\r\nv 0.116107 0.483779 0.418451\r\nv 0.147776 0.486205 0.430648\r\nv 0.173766 0.489161 0.445511\r\nv 0.193079 0.492534 0.462467\r\nv 0.204971 0.496194 0.480866\r\nv -0.204971 0.500000 0.480491\r\nv -0.193079 0.500000 0.461732\r\nv -0.147776 0.500000 0.429289\r\nv -0.079976 0.500000 0.407612\r\nv 0.079976 0.500000 0.407612\r\nv 0.147776 0.500000 0.429289\r\nv 0.173766 0.500000 0.444443\r\nv 0.193079 0.500000 0.461732\r\nv 0.204971 0.500000 0.480491\r\nf 2411 2885 2418 2419\r\nf 2416 2888 2426 2427\r\nf 2886 2411 2419 2420\r\nf 2889 2416 2427 2428\r\nf 2412 2886 2420 2421\r\nf 2890 2889 2428 2429\r\nf 2887 2412 2421 2422\r\nf 2891 2890 2429 2430\r\nf 2413 2887 2422 2423\r\nf 2892 2891 2430 2431\r\nf 2414 2413 2423 2424\r\nf 2884 2492 2417\r\nf 2718 2892 2431\r\nf 2415 2414 2424 2425\r\nf 2885 2884 2417 2418\r\nf 2888 2415 2425 2426\r\nf 2425 2424 2439 2440\r\nf 2418 2417 2432 2433\r\nf 2426 2425 2440 2441\r\nf 2419 2418 2433 2434\r\nf 2427 2426 2441 2442\r\nf 2420 2419 2434 2435\r\nf 2428 2427 2442 2443\r\nf 2421 2420 2435 2436\r\nf 2429 2428 2443 2444\r\nf 2422 2421 2436 2437\r\nf 2430 2429 2444 2445\r\nf 2423 2422 2437 2438\r\nf 2431 2430 2445 2446\r\nf 2424 2423 2438 2439\r\nf 2417 2492 2432\r\nf 2718 2431 2446\r\nf 2444 2443 2458 2459\r\nf 2437 2436 2451 2452\r\nf 2445 2444 2459 2460\r\nf 2438 2437 2452 2453\r\nf 2446 2445 2460 2461\r\nf 2439 2438 2453 2454\r\nf 2432 2492 2447\r\nf 2718 2446 2461\r\nf 2440 2439 2454 2455\r\nf 2433 2432 2447 2448\r\nf 2441 2440 2455 2456\r\nf 2434 2433 2448 2449\r\nf 2442 2441 2456 2457\r\nf 2435 2434 2449 2450\r\nf 2443 2442 2457 2458\r\nf 2436 2435 2450 2451\r\nf 2456 2455 2470 2471\r\nf 2449 2448 2463 2464\r\nf 2457 2456 2471 2472\r\nf 2450 2449 2464 2465\r\nf 2458 2457 2472 2473\r\nf 2451 2450 2465 2466\r\nf 2459 2458 2473 2474\r\nf 2452 2451 2466 2467\r\nf 2460 2459 2474 2475\r\nf 2453 2452 2467 2468\r\nf 2461 2460 2475 2476\r\nf 2454 2453 2468 2469\r\nf 2447 2492 2462\r\nf 2718 2461 2476\r\nf 2455 2454 2469 2470\r\nf 2448 2447 2462 2463\r\nf 2475 2474 2489 2490\r\nf 2468 2467 2482 2483\r\nf 2476 2475 2490 2491\r\nf 2469 2468 2483 2484\r\nf 2462 2492 2477\r\nf 2718 2476 2491\r\nf 2470 2469 2484 2485\r\nf 2463 2462 2477 2478\r\nf 2471 2470 2485 2486\r\nf 2464 2463 2478 2479\r\nf 2472 2471 2486 2487\r\nf 2465 2464 2479 2480\r\nf 2473 2472 2487 2488\r\nf 2466 2465 2480 2481\r\nf 2474 2473 2488 2489\r\nf 2467 2466 2481 2482\r\nf 2479 2478 2494 2495\r\nf 2487 2486 2502 2503\r\nf 2480 2479 2495 2496\r\nf 2488 2487 2503 2504\r\nf 2481 2480 2496 2497\r\nf 2489 2488 2504 2505\r\nf 2482 2481 2497 2498\r\nf 2490 2489 2505 2506\r\nf 2483 2482 2498 2499\r\nf 2491 2490 2506 2507\r\nf 2484 2483 2499 2500\r\nf 2477 2492 2493\r\nf 2718 2491 2507\r\nf 2485 2484 2500 2501\r\nf 2478 2477 2493 2494\r\nf 2486 2485 2501 2502\r\nf 2499 2498 2513 2514\r\nf 2507 2506 2521 2522\r\nf 2500 2499 2514 2515\r\nf 2493 2492 2508\r\nf 2718 2507 2522\r\nf 2501 2500 2515 2516\r\nf 2494 2493 2508 2509\r\nf 2502 2501 2516 2517\r\nf 2495 2494 2509 2510\r\nf 2503 2502 2517 2518\r\nf 2496 2495 2510 2511\r\nf 2504 2503 2518 2519\r\nf 2497 2496 2511 2512\r\nf 2505 2504 2519 2520\r\nf 2498 2497 2512 2513\r\nf 2506 2505 2520 2521\r\nf 2518 2517 2532 2533\r\nf 2511 2510 2525 2526\r\nf 2519 2518 2533 2534\r\nf 2512 2511 2526 2527\r\nf 2520 2519 2534 2535\r\nf 2513 2512 2527 2528\r\nf 2521 2520 2535 2536\r\nf 2514 2513 2528 2529\r\nf 2522 2521 2536 2537\r\nf 2515 2514 2529 2530\r\nf 2508 2492 2523\r\nf 2718 2522 2537\r\nf 2516 2515 2530 2531\r\nf 2509 2508 2523 2524\r\nf 2517 2516 2531 2532\r\nf 2510 2509 2524 2525\r\nf 2537 2536 2551 2552\r\nf 2530 2529 2544 2545\r\nf 2523 2492 2538\r\nf 2718 2537 2552\r\nf 2531 2530 2545 2546\r\nf 2524 2523 2538 2539\r\nf 2532 2531 2546 2547\r\nf 2525 2524 2539 2540\r\nf 2533 2532 2547 2548\r\nf 2526 2525 2540 2541\r\nf 2534 2533 2548 2549\r\nf 2527 2526 2541 2542\r\nf 2535 2534 2549 2550\r\nf 2528 2527 2542 2543\r\nf 2536 2535 2550 2551\r\nf 2529 2528 2543 2544\r\nf 2541 2540 2555 2556\r\nf 2549 2548 2563 2564\r\nf 2542 2541 2556 2557\r\nf 2550 2549 2564 2565\r\nf 2543 2542 2557 2558\r\nf 2551 2550 2565 2566\r\nf 2544 2543 2558 2559\r\nf 2552 2551 2566 2567\r\nf 2545 2544 2559 2560\r\nf 2538 2492 2553\r\nf 2718 2552 2567\r\nf 2546 2545 2560 2561\r\nf 2539 2538 2553 2554\r\nf 2547 2546 2561 2562\r\nf 2540 2539 2554 2555\r\nf 2548 2547 2562 2563\r\nf 2560 2559 2574 2575\r\nf 2553 2492 2568\r\nf 2718 2567 2582\r\nf 2561 2560 2575 2576\r\nf 2554 2553 2568 2569\r\nf 2562 2561 2576 2577\r\nf 2555 2554 2569 2570\r\nf 2563 2562 2577 2578\r\nf 2556 2555 2570 2571\r\nf 2564 2563 2578 2579\r\nf 2557 2556 2571 2572\r\nf 2565 2564 2579 2580\r\nf 2558 2557 2572 2573\r\nf 2566 2565 2580 2581\r\nf 2559 2558 2573 2574\r\nf 2567 2566 2581 2582\r\nf 2579 2578 2593 2594\r\nf 2572 2571 2586 2587\r\nf 2580 2579 2594 2595\r\nf 2573 2572 2587 2588\r\nf 2581 2580 2595 2596\r\nf 2574 2573 2588 2589\r\nf 2582 2581 2596 2597\r\nf 2575 2574 2589 2590\r\nf 2568 2492 2583\r\nf 2718 2582 2597\r\nf 2576 2575 2590 2591\r\nf 2569 2568 2583 2584\r\nf 2577 2576 2591 2592\r\nf 2570 2569 2584 2585\r\nf 2578 2577 2592 2593\r\nf 2571 2570 2585 2586\r\nf 2718 2597 2612\r\nf 2591 2590 2605 2606\r\nf 2584 2583 2598 2599\r\nf 2592 2591 2606 2607\r\nf 2585 2584 2599 2600\r\nf 2593 2592 2607 2608\r\nf 2586 2585 2600 2601\r\nf 2594 2593 2608 2609\r\nf 2587 2586 2601 2602\r\nf 2595 2594 2609 2610\r\nf 2588 2587 2602 2603\r\nf 2596 2595 2610 2611\r\nf 2589 2588 2603 2604\r\nf 2597 2596 2611 2612\r\nf 2590 2589 2604 2605\r\nf 2583 2492 2598\r\nf 2610 2609 2624 2625\r\nf 2603 2602 2617 2618\r\nf 2611 2610 2625 2626\r\nf 2604 2603 2618 2619\r\nf 2612 2611 2626 2627\r\nf 2605 2604 2619 2620\r\nf 2598 2492 2613\r\nf 2718 2612 2627\r\nf 2606 2605 2620 2621\r\nf 2599 2598 2613 2614\r\nf 2607 2606 2621 2622\r\nf 2600 2599 2614 2615\r\nf 2608 2607 2622 2623\r\nf 2601 2600 2615 2616\r\nf 2609 2608 2623 2624\r\nf 2602 2601 2616 2617\r\nf 2614 2613 2628 2629\r\nf 2622 2621 2636 2637\r\nf 2615 2614 2629 2630\r\nf 2623 2622 2637 2638\r\nf 2616 2615 2630 2631\r\nf 2624 2623 2638 2639\r\nf 2617 2616 2631 2632\r\nf 2625 2624 2639 2640\r\nf 2618 2617 2632 2633\r\nf 2626 2625 2640 2641\r\nf 2619 2618 2633 2634\r\nf 2627 2626 2641 2642\r\nf 2620 2619 2634 2635\r\nf 2613 2492 2628\r\nf 2718 2627 2642\r\nf 2621 2620 2635 2636\r\nf 2633 2632 2647 2648\r\nf 2641 2640 2655 2656\r\nf 2634 2633 2648 2649\r\nf 2642 2641 2656 2657\r\nf 2635 2634 2649 2650\r\nf 2628 2492 2643\r\nf 2718 2642 2657\r\nf 2636 2635 2650 2651\r\nf 2629 2628 2643 2644\r\nf 2637 2636 2651 2652\r\nf 2630 2629 2644 2645\r\nf 2638 2637 2652 2653\r\nf 2631 2630 2645 2646\r\nf 2639 2638 2653 2654\r\nf 2632 2631 2646 2647\r\nf 2640 2639 2654 2655\r\nf 2652 2651 2666 2667\r\nf 2645 2644 2659 2660\r\nf 2653 2652 2667 2668\r\nf 2646 2645 2660 2661\r\nf 2654 2653 2668 2669\r\nf 2647 2646 2661 2662\r\nf 2655 2654 2669 2670\r\nf 2648 2647 2662 2663\r\nf 2656 2655 2670 2671\r\nf 2649 2648 2663 2664\r\nf 2657 2656 2671 2672\r\nf 2650 2649 2664 2665\r\nf 2643 2492 2658\r\nf 2718 2657 2672\r\nf 2651 2650 2665 2666\r\nf 2644 2643 2658 2659\r\nf 2671 2670 2685 2686\r\nf 2664 2663 2678 2679\r\nf 2672 2671 2686 2687\r\nf 2665 2664 2679 2680\r\nf 2658 2492 2673\r\nf 2718 2672 2687\r\nf 2666 2665 2680 2681\r\nf 2659 2658 2673 2674\r\nf 2667 2666 2681 2682\r\nf 2660 2659 2674 2675\r\nf 2668 2667 2682 2683\r\nf 2661 2660 2675 2676\r\nf 2669 2668 2683 2684\r\nf 2662 2661 2676 2677\r\nf 2670 2669 2684 2685\r\nf 2663 2662 2677 2678\r\nf 2675 2674 2689 2690\r\nf 2683 2682 2697 2698\r\nf 2676 2675 2690 2691\r\nf 2684 2683 2698 2699\r\nf 2677 2676 2691 2692\r\nf 2685 2684 2699 2700\r\nf 2678 2677 2692 2693\r\nf 2686 2685 2700 2701\r\nf 2679 2678 2693 2694\r\nf 2687 2686 2701 2702\r\nf 2680 2679 2694 2695\r\nf 2673 2492 2688\r\nf 2718 2687 2702\r\nf 2681 2680 2695 2696\r\nf 2674 2673 2688 2689\r\nf 2682 2681 2696 2697\r\nf 2694 2693 2708 2709\r\nf 2702 2701 2716 2717\r\nf 2695 2694 2709 2710\r\nf 2688 2492 2703\r\nf 2718 2702 2717\r\nf 2696 2695 2710 2711\r\nf 2689 2688 2703 2704\r\nf 2697 2696 2711 2712\r\nf 2690 2689 2704 2705\r\nf 2698 2697 2712 2713\r\nf 2691 2690 2705 2706\r\nf 2699 2698 2713 2714\r\nf 2692 2691 2706 2707\r\nf 2700 2699 2714 2715\r\nf 2693 2692 2707 2708\r\nf 2701 2700 2715 2716\r\nf 2713 2712 2728 2729\r\nf 2706 2705 2721 2722\r\nf 2714 2713 2729 2730\r\nf 2707 2706 2722 2723\r\nf 2715 2714 2730 2731\r\nf 2708 2707 2723 2724\r\nf 2716 2715 2731 2732\r\nf 2709 2708 2724 2725\r\nf 2717 2716 2732 2733\r\nf 2710 2709 2725 2726\r\nf 2703 2492 2719\r\nf 2718 2717 2733\r\nf 2711 2710 2726 2727\r\nf 2704 2703 2719 2720\r\nf 2712 2711 2727 2728\r\nf 2705 2704 2720 2721\r\nf 2733 2732 2747 2748\r\nf 2726 2725 2740 2741\r\nf 2719 2492 2734\r\nf 2718 2733 2748\r\nf 2727 2726 2741 2742\r\nf 2720 2719 2734 2735\r\nf 2728 2727 2742 2743\r\nf 2721 2720 2735 2736\r\nf 2729 2728 2743 2744\r\nf 2722 2721 2736 2737\r\nf 2730 2729 2744 2745\r\nf 2723 2722 2737 2738\r\nf 2731 2730 2745 2746\r\nf 2724 2723 2738 2739\r\nf 2732 2731 2746 2747\r\nf 2725 2724 2739 2740\r\nf 2745 2744 2759 2760\r\nf 2738 2737 2752 2753\r\nf 2746 2745 2760 2761\r\nf 2739 2738 2753 2754\r\nf 2747 2746 2761 2762\r\nf 2740 2739 2754 2755\r\nf 2748 2747 2762 2763\r\nf 2741 2740 2755 2756\r\nf 2734 2492 2749\r\nf 2718 2748 2763\r\nf 2742 2741 2756 2757\r\nf 2735 2734 2749 2750\r\nf 2743 2742 2757 2758\r\nf 2736 2735 2750 2751\r\nf 2744 2743 2758 2759\r\nf 2737 2736 2751 2752\r\nf 2749 2492 2764\r\nf 2718 2763 2778\r\nf 2757 2756 2771 2772\r\nf 2750 2749 2764 2765\r\nf 2758 2757 2772 2773\r\nf 2751 2750 2765 2766\r\nf 2759 2758 2773 2774\r\nf 2752 2751 2766 2767\r\nf 2760 2759 2774 2775\r\nf 2753 2752 2767 2768\r\nf 2761 2760 2775 2776\r\nf 2754 2753 2768 2769\r\nf 2762 2761 2776 2777\r\nf 2755 2754 2769 2770\r\nf 2763 2762 2777 2778\r\nf 2756 2755 2770 2771\r\nf 2768 2767 2782 2783\r\nf 2776 2775 2790 2791\r\nf 2769 2768 2783 2784\r\nf 2777 2776 2791 2792\r\nf 2770 2769 2784 2785\r\nf 2778 2777 2792 2793\r\nf 2771 2770 2785 2786\r\nf 2764 2492 2779\r\nf 2718 2778 2793\r\nf 2772 2771 2786 2787\r\nf 2765 2764 2779 2780\r\nf 2773 2772 2787 2788\r\nf 2766 2765 2780 2781\r\nf 2774 2773 2788 2789\r\nf 2767 2766 2781 2782\r\nf 2775 2774 2789 2790\r\nf 2787 2786 2801 2802\r\nf 2780 2779 2794 2795\r\nf 2788 2787 2802 2803\r\nf 2781 2780 2795 2796\r\nf 2789 2788 2803 2804\r\nf 2782 2781 2796 2797\r\nf 2790 2789 2804 2805\r\nf 2783 2782 2797 2798\r\nf 2791 2790 2805 2806\r\nf 2784 2783 2798 2799\r\nf 2792 2791 2806 2807\r\nf 2785 2784 2799 2800\r\nf 2793 2792 2807 2808\r\nf 2786 2785 2800 2801\r\nf 2779 2492 2794\r\nf 2718 2793 2808\r\nf 2806 2805 2820 2821\r\nf 2799 2798 2813 2814\r\nf 2807 2806 2821 2822\r\nf 2800 2799 2814 2815\r\nf 2808 2807 2822 2823\r\nf 2801 2800 2815 2816\r\nf 2794 2492 2809\r\nf 2718 2808 2823\r\nf 2802 2801 2816 2817\r\nf 2795 2794 2809 2810\r\nf 2803 2802 2817 2818\r\nf 2796 2795 2810 2811\r\nf 2804 2803 2818 2819\r\nf 2797 2796 2811 2812\r\nf 2805 2804 2819 2820\r\nf 2798 2797 2812 2813\r\nf 2810 2809 2824 2825\r\nf 2818 2817 2832 2833\r\nf 2811 2810 2825 2826\r\nf 2819 2818 2833 2834\r\nf 2812 2811 2826 2827\r\nf 2820 2819 2834 2835\r\nf 2813 2812 2827 2828\r\nf 2821 2820 2835 2836\r\nf 2814 2813 2828 2829\r\nf 2822 2821 2836 2837\r\nf 2815 2814 2829 2830\r\nf 2823 2822 2837 2838\r\nf 2816 2815 2830 2831\r\nf 2809 2492 2824\r\nf 2718 2823 2838\r\nf 2817 2816 2831 2832\r\nf 2829 2828 2843 2844\r\nf 2837 2836 2851 2852\r\nf 2830 2829 2844 2845\r\nf 2838 2837 2852 2853\r\nf 2831 2830 2845 2846\r\nf 2824 2492 2839\r\nf 2718 2838 2853\r\nf 2832 2831 2846 2847\r\nf 2825 2824 2839 2840\r\nf 2833 2832 2847 2848\r\nf 2826 2825 2840 2841\r\nf 2834 2833 2848 2849\r\nf 2827 2826 2841 2842\r\nf 2835 2834 2849 2850\r\nf 2828 2827 2842 2843\r\nf 2836 2835 2850 2851\r\nf 2848 2847 2862 2863\r\nf 2841 2840 2855 2856\r\nf 2849 2848 2863 2864\r\nf 2842 2841 2856 2857\r\nf 2850 2849 2864 2865\r\nf 2843 2842 2857 2858\r\nf 2851 2850 2865 2866\r\nf 2844 2843 2858 2859\r\nf 2852 2851 2866 2867\r\nf 2845 2844 2859 2860\r\nf 2853 2852 2867 2868\r\nf 2846 2845 2860 2861\r\nf 2839 2492 2854\r\nf 2718 2853 2868\r\nf 2847 2846 2861 2862\r\nf 2840 2839 2854 2855\r\nf 2867 2866 2881 2882\r\nf 2860 2859 2874 2875\r\nf 2868 2867 2882 2883\r\nf 2861 2860 2875 2876\r\nf 2854 2492 2869\r\nf 2718 2868 2883\r\nf 2862 2861 2876 2877\r\nf 2855 2854 2869 2870\r\nf 2863 2862 2877 2878\r\nf 2856 2855 2870 2871\r\nf 2864 2863 2878 2879\r\nf 2857 2856 2871 2872\r\nf 2865 2864 2879 2880\r\nf 2858 2857 2872 2873\r\nf 2866 2865 2880 2881\r\nf 2859 2858 2873 2874\r\nf 2879 2878 2888 2416\r\nf 2872 2871 2411 2886\r\nf 2880 2879 2416 2889\r\nf 2873 2872 2886 2412\r\nf 2881 2880 2889 2890\r\nf 2874 2873 2412 2887\r\nf 2882 2881 2890 2891\r\nf 2875 2874 2887 2413\r\nf 2883 2882 2891 2892\r\nf 2876 2875 2413 2414\r\nf 2869 2492 2884\r\nf 2718 2883 2892\r\nf 2877 2876 2414 2415\r\nf 2870 2869 2884 2885\r\nf 2878 2877 2415 2888\r\nf 2871 2870 2885 2411";

/***/ }),

/***/ "./src/models/column.obj":
/*!*******************************!*\
  !*** ./src/models/column.obj ***!
  \*******************************/
/***/ ((module) => {

module.exports = "v 1.000000 0.000000 1.000000\r\nv 0.800000 0.000000 1.000000\r\nv 1.000000 0.000000 0.000000\r\nv 0.800000 0.000000 0.000000\r\nv 1.000000 1.000000 1.000000\r\nv 0.800000 1.000000 1.000000\r\nv 1.000000 1.000000 0.000000\r\nv 0.800000 1.000000 0.000000\r\nf 1 2 4 3\r\nf 3 4 8 7\r\nf 7 8 6 5\r\nf 5 6 2 1\r\nf 3 7 5 1\r\nf 8 4 2 6";

/***/ }),

/***/ "./src/models/cup.obj":
/*!****************************!*\
  !*** ./src/models/cup.obj ***!
  \****************************/
/***/ ((module) => {

module.exports = "v 0.515148 0.744236 0.443467\r\nv 0.529714 0.727164 0.389107\r\nv 0.554904 0.662132 0.295096\r\nv 0.571735 0.564805 0.232280\r\nv 0.576154 0.508527 0.215790\r\nv 0.535629 0.744236 0.453567\r\nv 0.569889 0.727164 0.408919\r\nv 0.601463 0.699441 0.367771\r\nv 0.629138 0.662132 0.331704\r\nv 0.651850 0.616671 0.302105\r\nv 0.668727 0.564805 0.280111\r\nv 0.679119 0.508527 0.266567\r\nv 0.682628 0.470000 0.261994\r\nv 0.550686 0.744236 0.470736\r\nv 0.599424 0.727164 0.442597\r\nv 0.644341 0.699441 0.416664\r\nv 0.683712 0.662132 0.393934\r\nv 0.716022 0.616671 0.375280\r\nv 0.740031 0.564805 0.361418\r\nv 0.754815 0.508527 0.352882\r\nv 0.759808 0.470000 0.350000\r\nv 0.558026 0.744236 0.492361\r\nv 0.613823 0.727164 0.485015\r\nv 0.665245 0.699441 0.478245\r\nv 0.710317 0.662132 0.472311\r\nv 0.747307 0.616671 0.467441\r\nv 0.774793 0.564805 0.463823\r\nv 0.791718 0.508527 0.461595\r\nv 0.797433 0.470000 0.460842\r\nv 0.556533 0.744236 0.515148\r\nv 0.610893 0.727164 0.529714\r\nv 0.660992 0.699441 0.543138\r\nv 0.704904 0.662132 0.554904\r\nv 0.740941 0.616671 0.564560\r\nv 0.767720 0.564805 0.571735\r\nv 0.784210 0.508527 0.576154\r\nv 0.789778 0.470000 0.577646\r\nv 0.546433 0.744236 0.535629\r\nv 0.591081 0.727164 0.569889\r\nv 0.632229 0.699441 0.601463\r\nv 0.668296 0.662132 0.629138\r\nv 0.697895 0.616671 0.651850\r\nv 0.719889 0.564805 0.668727\r\nv 0.733433 0.508527 0.679119\r\nv 0.738006 0.470000 0.682628\r\nv 0.529263 0.744236 0.550686\r\nv 0.557402 0.727164 0.599424\r\nv 0.583336 0.699441 0.644341\r\nv 0.606066 0.662132 0.683712\r\nv 0.624720 0.616671 0.716022\r\nv 0.638582 0.564805 0.740031\r\nv 0.647118 0.508527 0.754816\r\nv 0.650000 0.470000 0.759808\r\nv 0.507639 0.744236 0.558026\r\nv 0.514985 0.727164 0.613823\r\nv 0.521755 0.699441 0.665245\r\nv 0.527689 0.662132 0.710317\r\nv 0.532559 0.616671 0.747307\r\nv 0.536177 0.564805 0.774793\r\nv 0.538405 0.508527 0.791718\r\nv 0.539158 0.470000 0.797433\r\nv 0.484852 0.744236 0.556533\r\nv 0.470286 0.727164 0.610893\r\nv 0.456862 0.699441 0.660992\r\nv 0.445096 0.662132 0.704904\r\nv 0.435440 0.616671 0.740941\r\nv 0.428265 0.564805 0.767720\r\nv 0.423846 0.508527 0.784210\r\nv 0.422354 0.470000 0.789778\r\nv 0.464371 0.744236 0.546433\r\nv 0.430111 0.727164 0.591081\r\nv 0.398537 0.699441 0.632229\r\nv 0.370862 0.662132 0.668296\r\nv 0.348150 0.616671 0.697895\r\nv 0.331273 0.564805 0.719889\r\nv 0.320881 0.508527 0.733433\r\nv 0.317371 0.470000 0.738006\r\nv 0.449314 0.744236 0.529263\r\nv 0.400576 0.727164 0.557402\r\nv 0.355659 0.699441 0.583336\r\nv 0.316288 0.662132 0.606066\r\nv 0.283978 0.616671 0.624720\r\nv 0.259969 0.564805 0.638582\r\nv 0.245184 0.508527 0.647118\r\nv 0.240192 0.470000 0.650000\r\nv 0.441974 0.744236 0.507639\r\nv 0.386177 0.727164 0.514985\r\nv 0.334755 0.699441 0.521755\r\nv 0.289683 0.662132 0.527689\r\nv 0.252693 0.616671 0.532559\r\nv 0.225207 0.564805 0.536177\r\nv 0.208282 0.508527 0.538405\r\nv 0.202567 0.470000 0.539158\r\nv 0.500000 0.750000 0.500000\r\nv 0.443467 0.744236 0.484852\r\nv 0.389107 0.727164 0.470286\r\nv 0.339008 0.699441 0.456862\r\nv 0.295096 0.662132 0.445096\r\nv 0.259059 0.616671 0.435440\r\nv 0.232280 0.564805 0.428265\r\nv 0.215790 0.508527 0.423846\r\nv 0.210222 0.470000 0.422354\r\nv 0.453567 0.744236 0.464371\r\nv 0.408919 0.727164 0.430111\r\nv 0.367771 0.699441 0.398537\r\nv 0.331704 0.662132 0.370862\r\nv 0.302105 0.616671 0.348150\r\nv 0.280111 0.564805 0.331273\r\nv 0.266567 0.508527 0.320881\r\nv 0.261994 0.470000 0.317371\r\nv 0.470736 0.744236 0.449314\r\nv 0.442598 0.727164 0.400576\r\nv 0.416664 0.699441 0.355659\r\nv 0.393934 0.662132 0.316288\r\nv 0.375280 0.616671 0.283978\r\nv 0.361418 0.564805 0.259969\r\nv 0.352882 0.508527 0.245184\r\nv 0.350000 0.470000 0.240192\r\nv 0.492361 0.744236 0.441974\r\nv 0.485015 0.727164 0.386177\r\nv 0.478245 0.699441 0.334755\r\nv 0.472311 0.662132 0.289683\r\nv 0.467442 0.616671 0.252693\r\nv 0.463823 0.564805 0.225207\r\nv 0.461595 0.508527 0.208282\r\nv 0.460842 0.470000 0.202567\r\nv 0.543138 0.699441 0.339008\r\nv 0.564560 0.616671 0.259059\r\nv 0.577646 0.470000 0.210222\r\nv 0.510604 0.655965 0.460427\r\nv 0.520800 0.644015 0.422375\r\nv 0.538433 0.598492 0.356567\r\nv 0.550215 0.530364 0.312596\r\nv 0.553308 0.490969 0.301053\r\nv 0.524940 0.655965 0.467497\r\nv 0.548922 0.644015 0.436243\r\nv 0.571024 0.624609 0.407440\r\nv 0.590396 0.598492 0.382193\r\nv 0.606295 0.566670 0.361474\r\nv 0.618109 0.530364 0.346078\r\nv 0.625383 0.490969 0.336597\r\nv 0.627840 0.450000 0.333396\r\nv 0.535480 0.655965 0.479516\r\nv 0.569597 0.644015 0.459818\r\nv 0.601039 0.624609 0.441665\r\nv 0.628598 0.598492 0.425754\r\nv 0.651215 0.566670 0.412696\r\nv 0.668022 0.530364 0.402993\r\nv 0.678371 0.490969 0.397018\r\nv 0.681865 0.450000 0.395000\r\nv 0.540618 0.655965 0.494652\r\nv 0.579676 0.644015 0.489510\r\nv 0.615672 0.624609 0.484772\r\nv 0.647222 0.598492 0.480618\r\nv 0.673115 0.566670 0.477209\r\nv 0.692355 0.530364 0.474676\r\nv 0.704203 0.490969 0.473116\r\nv 0.708203 0.450000 0.472590\r\nv 0.539573 0.655965 0.510604\r\nv 0.577625 0.644015 0.520800\r\nv 0.612694 0.624609 0.530196\r\nv 0.643433 0.598492 0.538433\r\nv 0.668659 0.566670 0.545192\r\nv 0.687404 0.530364 0.550215\r\nv 0.698947 0.490969 0.553308\r\nv 0.702844 0.450000 0.554352\r\nv 0.532503 0.655965 0.524940\r\nv 0.563757 0.644015 0.548922\r\nv 0.592560 0.624609 0.571024\r\nv 0.617807 0.598492 0.590396\r\nv 0.638526 0.566670 0.606295\r\nv 0.653922 0.530364 0.618109\r\nv 0.663403 0.490969 0.625383\r\nv 0.666604 0.450000 0.627840\r\nv 0.520484 0.655965 0.535480\r\nv 0.540182 0.644015 0.569597\r\nv 0.558335 0.624609 0.601039\r\nv 0.574246 0.598492 0.628598\r\nv 0.587304 0.566670 0.651215\r\nv 0.597007 0.530364 0.668022\r\nv 0.602982 0.490969 0.678371\r\nv 0.605000 0.450000 0.681865\r\nv 0.505347 0.655965 0.540618\r\nv 0.510490 0.644015 0.579676\r\nv 0.515228 0.624609 0.615672\r\nv 0.519382 0.598492 0.647222\r\nv 0.522791 0.566670 0.673115\r\nv 0.525324 0.530364 0.692355\r\nv 0.526884 0.490969 0.704203\r\nv 0.527410 0.450000 0.708203\r\nv 0.489396 0.655965 0.539573\r\nv 0.479200 0.644015 0.577625\r\nv 0.469804 0.624609 0.612694\r\nv 0.461567 0.598492 0.643433\r\nv 0.454808 0.566670 0.668659\r\nv 0.449785 0.530364 0.687404\r\nv 0.446692 0.490969 0.698947\r\nv 0.445648 0.450000 0.702844\r\nv 0.475060 0.655965 0.532503\r\nv 0.451078 0.644015 0.563757\r\nv 0.428976 0.624609 0.592560\r\nv 0.409604 0.598492 0.617807\r\nv 0.393705 0.566670 0.638526\r\nv 0.381891 0.530364 0.653922\r\nv 0.374616 0.490969 0.663403\r\nv 0.372160 0.450000 0.666604\r\nv 0.464520 0.655965 0.520484\r\nv 0.430403 0.644015 0.540182\r\nv 0.398961 0.624609 0.558335\r\nv 0.371402 0.598492 0.574246\r\nv 0.348785 0.566670 0.587304\r\nv 0.331978 0.530364 0.597007\r\nv 0.321629 0.490969 0.602982\r\nv 0.318135 0.450000 0.605000\r\nv 0.459382 0.655965 0.505347\r\nv 0.420324 0.644015 0.510490\r\nv 0.384328 0.624609 0.515228\r\nv 0.352778 0.598492 0.519382\r\nv 0.326885 0.566670 0.522791\r\nv 0.307645 0.530364 0.525324\r\nv 0.295797 0.490969 0.526884\r\nv 0.291797 0.450000 0.527410\r\nv 0.500000 0.660000 0.500000\r\nv 0.460427 0.655965 0.489396\r\nv 0.422375 0.644015 0.479200\r\nv 0.387306 0.624609 0.469804\r\nv 0.356567 0.598492 0.461567\r\nv 0.331341 0.566670 0.454808\r\nv 0.312596 0.530364 0.449785\r\nv 0.301053 0.490969 0.446692\r\nv 0.297156 0.450000 0.445648\r\nv 0.467497 0.655965 0.475060\r\nv 0.436243 0.644015 0.451078\r\nv 0.407440 0.624609 0.428976\r\nv 0.382193 0.598492 0.409604\r\nv 0.361474 0.566670 0.393705\r\nv 0.346078 0.540363 0.381891\r\nv 0.336597 0.490969 0.374616\r\nv 0.333396 0.450000 0.372160\r\nv 0.479516 0.655965 0.464520\r\nv 0.459818 0.644015 0.430403\r\nv 0.441665 0.624609 0.398961\r\nv 0.425754 0.598492 0.371402\r\nv 0.412696 0.566670 0.348785\r\nv 0.402993 0.540363 0.331978\r\nv 0.397018 0.490969 0.321629\r\nv 0.395000 0.450000 0.318135\r\nv 0.494652 0.655965 0.459382\r\nv 0.489510 0.644015 0.420324\r\nv 0.484772 0.624609 0.384328\r\nv 0.480618 0.598492 0.352778\r\nv 0.477209 0.566670 0.326885\r\nv 0.474676 0.530364 0.307645\r\nv 0.473116 0.490969 0.295797\r\nv 0.472590 0.450000 0.291797\r\nv 0.530196 0.624609 0.387306\r\nv 0.545192 0.566670 0.331341\r\nv 0.554352 0.450000 0.297156\r\nv 0.316473 0.616671 0.335550\r\nv 0.360912 0.616671 0.296578\r\nf 127 2 7 8\r\nf 3 127 8 9\r\nf 128 3 9 10\r\nf 4 128 10 11\r\nf 5 4 11 12\r\nf 129 5 12 13\r\nf 1 94 6\r\nf 2 1 6 7\r\nf 7 6 14 15\r\nf 8 7 15 16\r\nf 9 8 16 17\r\nf 10 9 17 18\r\nf 11 10 18 19\r\nf 12 11 19 20\r\nf 13 12 20 21\r\nf 6 94 14\r\nf 19 18 26 27\r\nf 20 19 27 28\r\nf 21 20 28 29\r\nf 14 94 22\r\nf 15 14 22 23\r\nf 16 15 23 24\r\nf 17 16 24 25\r\nf 18 17 25 26\r\nf 24 23 31 32\r\nf 25 24 32 33\r\nf 26 25 33 34\r\nf 27 26 34 35\r\nf 28 27 35 36\r\nf 29 28 36 37\r\nf 22 94 30\r\nf 23 22 30 31\r\nf 36 35 43 44\r\nf 37 36 44 45\r\nf 30 94 38\r\nf 31 30 38 39\r\nf 32 31 39 40\r\nf 33 32 40 41\r\nf 34 33 41 42\r\nf 35 34 42 43\r\nf 40 39 47 48\r\nf 41 40 48 49\r\nf 42 41 49 50\r\nf 43 42 50 51\r\nf 44 43 51 52\r\nf 45 44 52 53\r\nf 38 94 46\r\nf 39 38 46 47\r\nf 52 51 59 60\r\nf 53 52 60 61\r\nf 46 94 54\r\nf 47 46 54 55\r\nf 48 47 55 56\r\nf 49 48 56 57\r\nf 50 49 57 58\r\nf 51 50 58 59\r\nf 57 56 64 65\r\nf 58 57 65 66\r\nf 59 58 66 67\r\nf 60 59 67 68\r\nf 61 60 68 69\r\nf 54 94 62\r\nf 55 54 62 63\r\nf 56 55 63 64\r\nf 69 68 76 77\r\nf 62 94 70\r\nf 63 62 70 71\r\nf 64 63 71 72\r\nf 65 64 72 73\r\nf 66 65 73 74\r\nf 67 66 74 75\r\nf 68 67 75 76\r\nf 74 73 81 82\r\nf 75 74 82 83\r\nf 76 75 83 84\r\nf 77 76 84 85\r\nf 70 94 78\r\nf 71 70 78 79\r\nf 72 71 79 80\r\nf 73 72 80 81\r\nf 78 94 86\r\nf 79 78 86 87\r\nf 80 79 87 88\r\nf 81 80 88 89\r\nf 82 81 89 90\r\nf 83 82 90 91\r\nf 84 83 91 92\r\nf 85 84 92 93\r\nf 90 89 98 99\r\nf 91 90 99 100\r\nf 92 91 100 101\r\nf 93 92 101 102\r\nf 86 94 95\r\nf 87 86 95 96\r\nf 88 87 96 97\r\nf 89 88 97 98\r\nf 96 95 103 104\r\nf 97 96 104 105\r\nf 98 97 105 106\r\nf 99 98 106 107\r\nf 100 99 107 108\r\nf 101 100 108 109\r\nf 102 101 109 110\r\nf 95 94 103\r\nf 103 94 111\r\nf 104 103 111 112\r\nf 105 104 112 113\r\nf 106 105 113 114\r\nf 107 106 114 115 260 259\r\nf 112 111 119 120\r\nf 113 112 120 121\r\nf 114 113 121 122\r\nf 115 114 122 123\r\nf 116 115 123 124\r\nf 117 116 124 125\r\nf 118 117 125 126\r\nf 111 94 119\r\nf 124 123 128 4\r\nf 125 124 4 5\r\nf 126 125 5 129\r\nf 119 94 1\r\nf 120 119 1 2\r\nf 121 120 2 127\r\nf 122 121 127 3\r\nf 123 122 3 128\r\nf 256 131 136 137\r\nf 132 256 137 138\r\nf 257 132 138 139\r\nf 133 257 139 140\r\nf 134 133 140 141\r\nf 258 134 141 142\r\nf 130 223 135\r\nf 131 130 135 136\r\nf 136 135 143 144\r\nf 137 136 144 145\r\nf 138 137 145 146\r\nf 139 138 146 147\r\nf 140 139 147 148\r\nf 141 140 148 149\r\nf 142 141 149 150\r\nf 135 223 143\r\nf 148 147 155 156\r\nf 149 148 156 157\r\nf 150 149 157 158\r\nf 143 223 151\r\nf 144 143 151 152\r\nf 145 144 152 153\r\nf 146 145 153 154\r\nf 147 146 154 155\r\nf 153 152 160 161\r\nf 154 153 161 162\r\nf 155 154 162 163\r\nf 156 155 163 164\r\nf 157 156 164 165\r\nf 158 157 165 166\r\nf 151 223 159\r\nf 152 151 159 160\r\nf 165 164 172 173\r\nf 166 165 173 174\r\nf 159 223 167\r\nf 160 159 167 168\r\nf 161 160 168 169\r\nf 162 161 169 170\r\nf 163 162 170 171\r\nf 164 163 171 172\r\nf 169 168 176 177\r\nf 170 169 177 178\r\nf 171 170 178 179\r\nf 172 171 179 180\r\nf 173 172 180 181\r\nf 174 173 181 182\r\nf 167 223 175\r\nf 168 167 175 176\r\nf 181 180 188 189\r\nf 182 181 189 190\r\nf 175 223 183\r\nf 176 175 183 184\r\nf 177 176 184 185\r\nf 178 177 185 186\r\nf 179 178 186 187\r\nf 180 179 187 188\r\nf 186 185 193 194\r\nf 187 186 194 195\r\nf 188 187 195 196\r\nf 189 188 196 197\r\nf 190 189 197 198\r\nf 183 223 191\r\nf 184 183 191 192\r\nf 185 184 192 193\r\nf 198 197 205 206\r\nf 191 223 199\r\nf 192 191 199 200\r\nf 193 192 200 201\r\nf 194 193 201 202\r\nf 195 194 202 203\r\nf 196 195 203 204\r\nf 197 196 204 205\r\nf 203 202 210 211\r\nf 204 203 211 212\r\nf 205 204 212 213\r\nf 206 205 213 214\r\nf 199 223 207\r\nf 200 199 207 208\r\nf 201 200 208 209\r\nf 202 201 209 210\r\nf 207 223 215\r\nf 208 207 215 216\r\nf 209 208 216 217\r\nf 210 209 217 218\r\nf 211 210 218 219\r\nf 212 211 219 220\r\nf 213 212 220 221\r\nf 214 213 221 222\r\nf 219 218 227 228\r\nf 220 219 228 229\r\nf 221 220 229 230\r\nf 222 221 230 231\r\nf 215 223 224\r\nf 216 215 224 225\r\nf 217 216 225 226\r\nf 218 217 226 227\r\nf 225 224 232 233\r\nf 226 225 233 234\r\nf 227 226 234 235\r\nf 228 227 235 236\r\nf 229 228 236 237\r\nf 230 229 237 238\r\nf 231 230 238 239\r\nf 224 223 232\r\nf 232 223 240\r\nf 233 232 240 241\r\nf 234 233 241 242\r\nf 235 234 242 243\r\nf 236 235 243 244\r\nf 241 240 248 249\r\nf 242 241 249 250\r\nf 243 242 250 251\r\nf 244 243 251 252\r\nf 245 244 252 253\r\nf 246 245 253 254\r\nf 247 246 254 255\r\nf 240 223 248\r\nf 253 252 257 133\r\nf 254 253 133 134\r\nf 255 254 134 258\r\nf 248 223 130\r\nf 249 248 130 131\r\nf 250 249 131 256\r\nf 251 250 256 132\r\nf 252 251 132 257\r\nf 69 77 206 198\r\nf 77 85 214 206\r\nf 93 222 214 85\r\nf 93 102 231 222\r\nf 110 239 231 102\r\nf 118 126 255 247\r\nf 126 129 258 255\r\nf 129 13 142 258\r\nf 13 21 150 142\r\nf 21 29 158 150\r\nf 29 37 166 158\r\nf 37 45 174 166\r\nf 45 53 182 174\r\nf 53 61 190 182\r\nf 61 69 198 190\r\nf 110 109 238 239\r\nf 118 247 246 117\r\nf 244 260 259 236\r\nf 259 108 236\r\nf 108 107 259\r\nf 260 116 115\r\nf 237 236 108\r\nf 109 108 237 238\r\nf 117 246 245 116\r\nf 245 116 244\r\nf 260 244 116";

/***/ }),

/***/ "./src/models/funnel.obj":
/*!*******************************!*\
  !*** ./src/models/funnel.obj ***!
  \*******************************/
/***/ ((module) => {

module.exports = "v 0.500000 0.400000 0.100000\r\nv 0.500000 0.680000 0.440000\r\nv 0.578036 0.400000 0.107686\r\nv 0.511705 0.680000 0.441153\r\nv 0.653073 0.400000 0.130448\r\nv 0.522961 0.680000 0.444567\r\nv 0.722228 0.400000 0.167412\r\nv 0.533334 0.680000 0.450112\r\nv 0.782843 0.400000 0.217157\r\nv 0.542426 0.680000 0.457574\r\nv 0.832588 0.400000 0.277772\r\nv 0.549888 0.680000 0.466666\r\nv 0.869552 0.400000 0.346927\r\nv 0.555433 0.680000 0.477039\r\nv 0.892314 0.400000 0.421964\r\nv 0.558847 0.680000 0.488295\r\nv 0.900000 0.400000 0.500000\r\nv 0.560000 0.680000 0.500000\r\nv 0.892314 0.400000 0.578036\r\nv 0.558847 0.680000 0.511705\r\nv 0.869552 0.400000 0.653073\r\nv 0.555433 0.680000 0.522961\r\nv 0.832588 0.400000 0.722228\r\nv 0.549888 0.680000 0.533334\r\nv 0.782843 0.400000 0.782843\r\nv 0.542426 0.680000 0.542426\r\nv 0.722228 0.400000 0.832588\r\nv 0.533334 0.680000 0.549888\r\nv 0.653073 0.400000 0.869552\r\nv 0.522961 0.680000 0.555433\r\nv 0.578036 0.400000 0.892314\r\nv 0.511705 0.680000 0.558847\r\nv 0.500000 0.400000 0.900000\r\nv 0.500000 0.680000 0.560000\r\nv 0.421964 0.400000 0.892314\r\nv 0.488295 0.680000 0.558847\r\nv 0.346927 0.400000 0.869552\r\nv 0.477039 0.680000 0.555433\r\nv 0.277772 0.400000 0.832588\r\nv 0.466666 0.680000 0.549888\r\nv 0.217157 0.400000 0.782843\r\nv 0.457574 0.680000 0.542426\r\nv 0.167412 0.400000 0.722228\r\nv 0.450112 0.680000 0.533334\r\nv 0.130448 0.400000 0.653073\r\nv 0.444567 0.680000 0.522961\r\nv 0.107686 0.400000 0.578036\r\nv 0.441153 0.680000 0.511705\r\nv 0.100000 0.400000 0.500000\r\nv 0.440000 0.680000 0.500000\r\nv 0.107686 0.400000 0.421964\r\nv 0.441153 0.680000 0.488295\r\nv 0.130448 0.400000 0.346927\r\nv 0.444567 0.680000 0.477039\r\nv 0.167412 0.400000 0.277772\r\nv 0.450112 0.680000 0.466666\r\nv 0.217157 0.400000 0.217157\r\nv 0.457574 0.680000 0.457574\r\nv 0.277772 0.400000 0.167412\r\nv 0.466666 0.680000 0.450112\r\nv 0.346927 0.400000 0.130448\r\nv 0.477039 0.680000 0.444567\r\nv 0.421964 0.400000 0.107686\r\nv 0.488295 0.680000 0.441153\r\nv 0.500000 0.500000 0.100000\r\nv 0.578036 0.500000 0.107686\r\nv 0.653073 0.500000 0.130448\r\nv 0.722228 0.500000 0.167412\r\nv 0.782843 0.500000 0.217157\r\nv 0.832588 0.500000 0.277772\r\nv 0.869552 0.500000 0.346927\r\nv 0.892314 0.500000 0.421964\r\nv 0.900000 0.500000 0.500000\r\nv 0.892314 0.500000 0.578036\r\nv 0.869552 0.500000 0.653073\r\nv 0.832588 0.500000 0.722228\r\nv 0.782843 0.500000 0.782843\r\nv 0.722228 0.500000 0.832588\r\nv 0.653073 0.500000 0.869552\r\nv 0.578036 0.500000 0.892314\r\nv 0.500000 0.500000 0.900000\r\nv 0.421964 0.500000 0.892314\r\nv 0.346927 0.500000 0.869552\r\nv 0.277772 0.500000 0.832588\r\nv 0.217157 0.500000 0.782843\r\nv 0.167412 0.500000 0.722228\r\nv 0.130448 0.500000 0.653073\r\nv 0.107686 0.500000 0.578036\r\nv 0.100000 0.500000 0.500000\r\nv 0.107686 0.500000 0.421964\r\nv 0.130448 0.500000 0.346927\r\nv 0.167412 0.500000 0.277772\r\nv 0.217157 0.500000 0.217157\r\nv 0.277772 0.500000 0.167412\r\nv 0.346927 0.500000 0.130448\r\nv 0.421964 0.500000 0.107686\r\nv 0.500000 0.740000 0.436000\r\nv 0.512486 0.740000 0.437230\r\nv 0.524492 0.740000 0.440872\r\nv 0.535556 0.740000 0.446786\r\nv 0.545255 0.740000 0.454745\r\nv 0.553214 0.740000 0.464444\r\nv 0.559128 0.740000 0.475508\r\nv 0.562770 0.740000 0.487514\r\nv 0.564000 0.740000 0.500000\r\nv 0.562770 0.740000 0.512486\r\nv 0.559128 0.740000 0.524492\r\nv 0.553214 0.740000 0.535556\r\nv 0.545255 0.740000 0.545255\r\nv 0.535556 0.740000 0.553214\r\nv 0.524492 0.740000 0.559128\r\nv 0.512486 0.740000 0.562770\r\nv 0.500000 0.740000 0.564000\r\nv 0.487514 0.740000 0.562770\r\nv 0.475508 0.740000 0.559128\r\nv 0.464444 0.740000 0.553214\r\nv 0.454745 0.740000 0.545255\r\nv 0.446786 0.740000 0.535556\r\nv 0.440872 0.740000 0.524492\r\nv 0.437230 0.740000 0.512486\r\nv 0.436000 0.740000 0.500000\r\nv 0.437230 0.740000 0.487514\r\nv 0.440872 0.740000 0.475508\r\nv 0.446786 0.740000 0.464444\r\nv 0.454745 0.740000 0.454745\r\nv 0.464444 0.740000 0.446786\r\nv 0.475508 0.740000 0.440872\r\nv 0.487514 0.740000 0.437230\r\nf 1 2 4 3\r\nf 3 4 6 5\r\nf 5 6 8 7\r\nf 7 8 10 9\r\nf 9 10 12 11\r\nf 11 12 14 13\r\nf 13 14 16 15\r\nf 15 16 18 17\r\nf 17 18 20 19\r\nf 19 20 22 21\r\nf 21 22 24 23\r\nf 23 24 26 25\r\nf 25 26 28 27\r\nf 27 28 30 29\r\nf 29 30 32 31\r\nf 31 32 34 33\r\nf 33 34 36 35\r\nf 35 36 38 37\r\nf 37 38 40 39\r\nf 39 40 42 41\r\nf 41 42 44 43\r\nf 43 44 46 45\r\nf 45 46 48 47\r\nf 47 48 50 49\r\nf 49 50 52 51\r\nf 51 52 54 53\r\nf 53 54 56 55\r\nf 55 56 58 57\r\nf 57 58 60 59\r\nf 59 60 62 61\r\nf 61 62 64 63\r\nf 63 64 2 1\r\nf 15 17 73 72\r\nf 85 86 118 117\r\nf 33 35 82 81\r\nf 51 53 91 90\r\nf 7 9 69 68\r\nf 25 27 78 77\r\nf 43 45 87 86\r\nf 61 63 96 95\r\nf 17 19 74 73\r\nf 35 37 83 82\r\nf 53 55 92 91\r\nf 9 11 70 69\r\nf 27 29 79 78\r\nf 45 47 88 87\r\nf 1 3 66 65\r\nf 63 1 65 96\r\nf 19 21 75 74\r\nf 37 39 84 83\r\nf 55 57 93 92\r\nf 11 13 71 70\r\nf 29 31 80 79\r\nf 47 49 89 88\r\nf 3 5 67 66\r\nf 21 23 76 75\r\nf 39 41 85 84\r\nf 57 59 94 93\r\nf 13 15 72 71\r\nf 31 33 81 80\r\nf 49 51 90 89\r\nf 5 7 68 67\r\nf 23 25 77 76\r\nf 41 43 86 85\r\nf 59 61 95 94\r\nf 72 73 105 104\r\nf 86 87 119 118\r\nf 73 74 106 105\r\nf 87 88 120 119\r\nf 74 75 107 106\r\nf 88 89 121 120\r\nf 75 76 108 107\r\nf 89 90 122 121\r\nf 76 77 109 108\r\nf 90 91 123 122\r\nf 77 78 110 109\r\nf 91 92 124 123\r\nf 78 79 111 110\r\nf 65 66 98 97\r\nf 92 93 125 124\r\nf 79 80 112 111\r\nf 66 67 99 98\r\nf 93 94 126 125\r\nf 80 81 113 112\r\nf 67 68 100 99\r\nf 94 95 127 126\r\nf 81 82 114 113\r\nf 68 69 101 100\r\nf 95 96 128 127\r\nf 82 83 115 114\r\nf 69 70 102 101\r\nf 96 65 97 128\r\nf 83 84 116 115\r\nf 70 71 103 102\r\nf 84 85 117 116\r\nf 71 72 104 103\r\nf 30 28 110 111\r\nf 28 26 109 110\r\nf 26 24 108 109\r\nf 24 22 107 108\r\nf 22 20 106 107\r\nf 20 18 105 106\r\nf 18 16 104 105\r\nf 16 14 103 104\r\nf 14 12 102 103\r\nf 12 10 101 102\r\nf 10 8 100 101\r\nf 32 30 111 112\r\nf 34 32 112 113\r\nf 36 34 113 114\r\nf 38 36 114 115\r\nf 40 38 115 116\r\nf 42 40 116 117\r\nf 44 42 117 118\r\nf 46 44 118 119\r\nf 48 46 119 120\r\nf 50 48 120 121\r\nf 52 50 121 122\r\nf 54 52 122 123\r\nf 56 54 123 124\r\nf 58 56 124 125\r\nf 60 58 125 126\r\nf 62 60 126 127\r\nf 64 62 127 128\r\nf 2 64 128 97\r\nf 4 2 97 98\r\nf 6 4 98 99\r\nf 8 6 99 100";

/***/ }),

/***/ "./src/models/helix.obj":
/*!******************************!*\
  !*** ./src/models/helix.obj ***!
  \******************************/
/***/ ((module) => {

module.exports = "v 0.467072 1.050000 0.088400\r\nv 0.452960 1.050000 0.382400\r\nv 0.532928 1.050000 0.088400\r\nv 0.547040 1.050000 0.382400\r\nv 0.872920 1.050000 0.677284\r\nv 0.374635 0.560000 0.518062\r\nv 0.625365 1.050000 0.518062\r\nv 0.839992 1.050000 0.734316\r\nv 0.578325 1.050000 0.599538\r\nv 0.160008 1.050000 0.734316\r\nv 0.127080 0.560000 0.677283\r\nv 0.421675 1.050000 0.599538\r\nv 0.421675 0.560000 0.599538\r\nv 0.127080 1.050000 0.677283\r\nv 0.374635 1.050000 0.518062\r\nv 0.160008 0.560000 0.734316\r\nv 0.578325 0.560000 0.599538\r\nv 0.839992 0.560000 0.734316\r\nv 0.625365 0.560000 0.518062\r\nv 0.872920 0.560000 0.677284\r\nv 0.547040 0.560000 0.382400\r\nv 0.532928 0.560000 0.088400\r\nv 0.452960 0.560000 0.382400\r\nv 0.467072 0.560000 0.088400\r\nv 0.500000 0.330000 0.500000\r\nv 0.500000 0.410000 0.088400\r\nv 0.143544 0.410000 0.705800\r\nv 0.856456 0.410000 0.705800\r\nf 10 14 11 16\r\nf 15 2 23 6\r\nf 2 4 3 1\r\nf 8 9 17 18\r\nf 23 26 25\r\nf 7 9 8 5\r\nf 1 3 22 24\r\nf 7 5 20 19\r\nf 12 15 14 10\r\nf 4 7 19 21\r\nf 5 8 18 20\r\nf 4 2 15 12 9 7\r\nf 2 1 24 23\r\nf 12 10 16 13\r\nf 3 4 21 22\r\nf 9 12 13 17\r\nf 14 15 6 11\r\nf 25 6 23\r\nf 25 21 19\r\nf 13 25 17\r\nf 25 27 6\r\nf 27 25 13\r\nf 11 27 16\r\nf 22 26 24\r\nf 18 28 20\r\nf 25 26 21\r\nf 28 25 19\r\nf 17 25 28\r\nf 17 28 18\r\nf 20 28 19\r\nf 21 26 22\r\nf 24 26 23\r\nf 6 27 11\r\nf 16 27 13";

/***/ }),

/***/ "./src/models/particles-s.obj":
/*!************************************!*\
  !*** ./src/models/particles-s.obj ***!
  \************************************/
/***/ ((module) => {

module.exports = "v 0.000000 -0.000000 1.000000\r\nv 0.000000 0.050000 1.000000\r\nv 0.000000 0.000000 0.000000\r\nv 0.000000 0.050000 0.000000\r\nv 1.000000 -0.000000 1.000000\r\nv 1.000000 0.050000 1.000000\r\nv 1.000000 0.000000 0.000000\r\nv 1.000000 0.050000 0.000000\r\nf 1 2 4 3\r\nf 3 4 8 7\r\nf 7 8 6 5\r\nf 5 6 2 1\r\nf 3 7 5 1\r\nf 8 4 2 6\r\n";

/***/ }),

/***/ "./src/models/particles-x.obj":
/*!************************************!*\
  !*** ./src/models/particles-x.obj ***!
  \************************************/
/***/ ((module) => {

module.exports = "v 0.000000 -0.000000 1.000000\r\nv 0.000000 0.100000 1.000000\r\nv 0.000000 0.000000 0.000000\r\nv 0.000000 0.100000 0.000000\r\nv 1.000000 -0.000000 1.000000\r\nv 1.000000 0.100000 1.000000\r\nv 1.000000 0.000000 0.000000\r\nv 1.000000 0.100000 0.000000\r\nf 1 2 4 3\r\nf 3 4 8 7\r\nf 7 8 6 5\r\nf 5 6 2 1\r\nf 3 7 5 1\r\nf 8 4 2 6";

/***/ }),

/***/ "./src/models/particles-xx.obj":
/*!*************************************!*\
  !*** ./src/models/particles-xx.obj ***!
  \*************************************/
/***/ ((module) => {

module.exports = "v 0.000000 -0.000000 1.000000\r\nv 0.000000 0.200000 1.000000\r\nv 0.000000 0.000000 0.000000\r\nv 0.000000 0.200000 0.000000\r\nv 1.000000 -0.000000 1.000000\r\nv 1.000000 0.200000 1.000000\r\nv 1.000000 0.000000 0.000000\r\nv 1.000000 0.200000 0.000000\r\nf 1 2 4 3\r\nf 3 4 8 7\r\nf 7 8 6 5\r\nf 5 6 2 1\r\nf 3 7 5 1\r\nf 8 4 2 6";

/***/ }),

/***/ "./src/models/particles-xxx.obj":
/*!**************************************!*\
  !*** ./src/models/particles-xxx.obj ***!
  \**************************************/
/***/ ((module) => {

module.exports = "v 0.000000 -0.000000 1.000000\r\nv 0.000000 0.300000 1.000000\r\nv 0.000000 0.000000 0.000000\r\nv 0.000000 0.300000 0.000000\r\nv 1.000000 -0.000000 1.000000\r\nv 1.000000 0.300000 1.000000\r\nv 1.000000 0.000000 0.000000\r\nv 1.000000 0.300000 0.000000\r\nf 1 2 4 3\r\nf 3 4 8 7\r\nf 7 8 6 5\r\nf 5 6 2 1\r\nf 3 7 5 1\r\nf 8 4 2 6";

/***/ }),

/***/ "./src/models/particles-xxxx.obj":
/*!***************************************!*\
  !*** ./src/models/particles-xxxx.obj ***!
  \***************************************/
/***/ ((module) => {

module.exports = "v 0.000000 -0.000000 1.000000\r\nv 0.000000 0.400000 1.000000\r\nv 0.000000 0.000000 0.000000\r\nv 0.000000 0.400000 0.000000\r\nv 1.000000 -0.000000 1.000000\r\nv 1.000000 0.400000 1.000000\r\nv 1.000000 0.000000 0.000000\r\nv 1.000000 0.400000 0.000000\r\nf 1 2 4 3\r\nf 3 4 8 7\r\nf 7 8 6 5\r\nf 5 6 2 1\r\nf 3 7 5 1\r\nf 8 4 2 6";

/***/ }),

/***/ "./src/models/particles-xxxxx.obj":
/*!****************************************!*\
  !*** ./src/models/particles-xxxxx.obj ***!
  \****************************************/
/***/ ((module) => {

module.exports = "v 0.000000 -0.000000 1.000000\r\nv 0.000000 0.500000 1.000000\r\nv 0.000000 0.000000 0.000000\r\nv 0.000000 0.500000 0.000000\r\nv 1.000000 -0.000000 1.000000\r\nv 1.000000 0.500000 1.000000\r\nv 1.000000 0.000000 0.000000\r\nv 1.000000 0.500000 0.000000\r\nf 1 2 4 3\r\nf 3 4 8 7\r\nf 7 8 6 5\r\nf 5 6 2 1\r\nf 3 7 5 1\r\nf 8 4 2 6";

/***/ }),

/***/ "./src/models/pierced-floor.obj":
/*!**************************************!*\
  !*** ./src/models/pierced-floor.obj ***!
  \**************************************/
/***/ ((module) => {

module.exports = "v 0.000000 0.500000 0.000000\r\nv 0.200000 0.680053 0.300000\r\nv 0.300000 0.680053 0.300000\r\nv 0.200000 0.680053 0.200000\r\nv 0.300000 0.680053 0.200000\r\nv 0.000000 0.700000 0.000000\r\nv 0.200000 0.700053 0.300000\r\nv 0.300000 0.700053 0.300000\r\nv 0.200000 0.700053 0.200000\r\nv 0.300000 0.700053 0.200000\r\nv 0.500000 0.500000 0.000000\r\nv 1.000000 0.500000 0.000000\r\nv 0.700000 0.680053 0.300000\r\nv 0.800000 0.680053 0.300000\r\nv 0.700000 0.680053 0.200000\r\nv 0.800000 0.680053 0.200000\r\nv 1.000000 0.500000 0.500000\r\nv 0.500000 0.700000 0.000000\r\nv 1.000000 0.700000 0.000000\r\nv 0.700000 0.700053 0.300000\r\nv 0.800000 0.700053 0.300000\r\nv 0.700000 0.700053 0.200000\r\nv 0.800000 0.700053 0.200000\r\nv 0.700000 0.680053 0.800000\r\nv 0.800000 0.680053 0.800000\r\nv 0.700000 0.680053 0.700000\r\nv 0.800000 0.680053 0.700000\r\nv 1.000000 0.500000 1.000000\r\nv 0.500000 0.700000 1.000000\r\nv 1.000000 0.700000 0.500000\r\nv 0.700000 0.700053 0.800000\r\nv 0.800000 0.700053 0.800000\r\nv 0.700000 0.700053 0.700000\r\nv 0.800000 0.700053 0.700000\r\nv 1.000000 0.700000 1.000000\r\nv 0.000000 0.500000 1.000000\r\nv 0.000000 0.500000 0.500000\r\nv 0.500000 0.500000 0.500000\r\nv 0.200000 0.680053 0.800000\r\nv 0.300000 0.680053 0.800000\r\nv 0.200000 0.680053 0.700000\r\nv 0.300000 0.680053 0.700000\r\nv 0.500000 0.500000 1.000000\r\nv 0.000000 0.700000 1.000000\r\nv 0.000000 0.700000 0.500000\r\nv 0.500000 0.700000 0.500000\r\nv 0.200000 0.700053 0.800000\r\nv 0.300000 0.700053 0.800000\r\nv 0.200000 0.700053 0.700000\r\nv 0.300000 0.700053 0.700000\r\nf 37 2 3 38\r\nf 38 3 5 11\r\nf 1 4 2 37\r\nf 11 5 4 1\r\nf 45 46 8 7\r\nf 46 18 10 8\r\nf 6 45 7 9\r\nf 18 6 9 10\r\nf 4 5 10 9\r\nf 2 4 9 7\r\nf 3 2 7 8\r\nf 5 3 8 10\r\nf 38 13 14 17\r\nf 17 14 16 12\r\nf 11 15 13 38\r\nf 12 16 15 11\r\nf 46 30 21 20\r\nf 30 19 23 21\r\nf 18 46 20 22\r\nf 19 18 22 23\r\nf 15 16 23 22\r\nf 13 15 22 20\r\nf 14 13 20 21\r\nf 16 14 21 23\r\nf 43 24 25 28\r\nf 28 25 27 17\r\nf 38 26 24 43\r\nf 17 27 26 38\r\nf 29 35 32 31\r\nf 35 30 34 32\r\nf 46 29 31 33\r\nf 30 46 33 34\r\nf 26 27 34 33\r\nf 24 26 33 31\r\nf 25 24 31 32\r\nf 27 25 32 34\r\nf 36 39 40 43\r\nf 43 40 42 38\r\nf 37 41 39 36\r\nf 38 42 41 37\r\nf 44 29 48 47\r\nf 29 46 50 48\r\nf 45 44 47 49\r\nf 46 45 49 50\r\nf 41 42 50 49\r\nf 39 41 49 47\r\nf 40 39 47 48\r\nf 42 40 48 50\r\nf 11 18 19 12\r\nf 1 6 18 11\r\nf 6 1 37 45\r\nf 36 44 45 37\r\nf 35 28 43 29\r\nf 43 29 44 36\r\nf 17 30 35 28\r\nf 19 30 17 12";

/***/ }),

/***/ "./src/shaders/engine/indexing/count-particles-per-cell.wgsl":
/*!*******************************************************************!*\
  !*** ./src/shaders/engine/indexing/count-particles-per-cell.wgsl ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<storage,read_write> cellsBuffer: array<Cell>;\r\n@group(0) @binding(1) var<storage,read_write> particlesBuffer: array<Particle>;\r\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,\r\n};\r\n\r\nfn computeCellId(position: vec3<f32>) -> vec3<i32> {\r\n    let naiveCellId = vec3<i32>(position / uniforms.cellSize);\r\n    return clamp(naiveCellId, vec3<i32>(0), uniforms.gridSize - 1);\r\n}\r\n\r\nfn computeCellIndex(position: vec3<f32>) -> u32 {\r\n    let cellId = computeCellId(position);\r\n    return dot(vec3<u32>(cellId), uniforms.cellsStride);\r\n}\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let particleId = in.globalInvocationId.x;\r\n\r\n    if (particleId < uniforms.particlesCount) {\r\n        let position = particlesBuffer[particleId].position;\r\n        let cellIndex: u32 = computeCellIndex(position);\r\n        particlesBuffer[particleId].indexInCell = atomicAdd(&cellsBuffer[cellIndex].particlesCount, 1u);\r\n    }\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/indexing/finalize-prefix-sum.wgsl":
/*!**************************************************************!*\
  !*** ./src/shaders/engine/indexing/finalize-prefix-sum.wgsl ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "struct DataItem {               //           align(4) size(8)\r\n    offsetOfFirstParticle: u32, // offset(0) align(4) size(4)\r\n    offsetOfCell: u32,          // offset(4) align(4) size(4)\r\n};\r\n\r\n@group(0) @binding(0) var<storage,read> prefixSumResultBuffer: array<DataItem>;\r\n@group(0) @binding(1) var<storage,read_write> cellsBuffer: array<Cell>;\r\n@group(0) @binding(2) var<storage,read_write> indirectDrawBuffer: IndirectDrawBuffer;\r\n@group(0) @binding(3) var<storage,read_write> nonEmptyCellsIndicesBuffer: array<u32>;\r\n@group(0) @binding(4) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,\r\n};\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let cellIndex = in.globalInvocationId.x;\r\n\r\n    if (cellIndex < uniforms.cellsCount) {\r\n        let dataItem = prefixSumResultBuffer[cellIndex];\r\n        let cellParticlesCount = cellsBuffer[cellIndex].particlesCount;\r\n        cellsBuffer[cellIndex].offset = dataItem.offsetOfFirstParticle;\r\n\r\n        let doesCellContainParticles = min(1u, cellParticlesCount);\r\n        if (doesCellContainParticles == 1u) {\r\n            nonEmptyCellsIndicesBuffer[dataItem.offsetOfCell] = cellIndex;\r\n        }\r\n\r\n        if (cellIndex == uniforms.cellsCount - 1u) {\r\n            indirectDrawBuffer.instancesCount = dataItem.offsetOfCell + doesCellContainParticles;\r\n        }\r\n    }\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/indexing/prefix-sum/down-pass.wgsl":
/*!***************************************************************!*\
  !*** ./src/shaders/engine/indexing/prefix-sum/down-pass.wgsl ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<storage,read> workgroupOffset: array<Type>;\r\n@group(0) @binding(1) var<storage,read_write> outputBuffer: array<Type>;\r\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalId: vec3<u32>,\r\n    @builtin(workgroup_id) workgroupId: vec3<u32>,\r\n};\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let globalIndex = in.globalId.x;\r\n    let workgroupIndex = in.workgroupId.x;\r\n\r\n    if (globalIndex < uniforms.itemsCount) {\r\n        outputBuffer[globalIndex] = outputBuffer[globalIndex] + workgroupOffset[workgroupIndex];\r\n    }\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/indexing/prefix-sum/reduce.wgsl":
/*!************************************************************!*\
  !*** ./src/shaders/engine/indexing/prefix-sum/reduce.wgsl ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<storage,read_write> data: array<Type>;\r\n@group(0) @binding(1) var<storage,read_write> workgroupsTotals: array<Type>; // each cell stores the total for the corresponding workgroup\r\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: u32; // = 128u;\r\noverride maxLevel: u32;// = 8u; // 2^8 == 256 == 2 * 128\r\n\r\nvar<workgroup> workgroupCache: array<Type,workgroupSize>;\r\n\r\nstruct ComputeIn {\r\n    @builtin(local_invocation_id) localId: vec3<u32>,\r\n    @builtin(global_invocation_id) globalId: vec3<u32>,\r\n    @builtin(workgroup_id) workgroupId: vec3<u32>,\r\n};\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let globalIndex = in.globalId.x;\r\n    let workgroupIndex = in.workgroupId.x;\r\n    let localIndex = in.localId.x;\r\n    let localIndexpp = localIndex + 1u;\r\n\r\n    // load workgroup cache\r\n    if (globalIndex < uniforms.itemsCount) {\r\n        workgroupCache[localIndex] = data[globalIndex];\r\n    } else {\r\n        workgroupCache[localIndex] = Type(0);\r\n    }\r\n    workgroupBarrier();\r\n\r\n    // local reduce\r\n    for (var level = 0u; level < maxLevel; level = level + 1u) {\r\n        if (localIndexpp % (2u << level) == 0u) {\r\n            workgroupCache[localIndex] = workgroupCache[localIndex] + workgroupCache[localIndex - (1u << level)];\r\n        }\r\n        workgroupBarrier();\r\n    }\r\n\r\n    if (localIndex == workgroupSize - 1u) {\r\n        workgroupsTotals[workgroupIndex] = workgroupCache[localIndex];\r\n        workgroupCache[localIndex] = Type(0u); // exclusive prefix sum\r\n    }\r\n\r\n    workgroupBarrier();\r\n\r\n    // local downsweep\r\n    for (var level = maxLevel; level > 0u; level = level - 1u) {\r\n        if (localIndexpp % (1u << level) == 0u) {\r\n            let tempRight = workgroupCache[localIndex];\r\n            let leftIndex = localIndex - (1u << (level - 1u));\r\n            workgroupCache[localIndex] = tempRight + workgroupCache[leftIndex];\r\n            workgroupCache[leftIndex] = tempRight;\r\n        }\r\n        workgroupBarrier();\r\n    }\r\n\r\n    // store result\r\n    if (globalIndex < uniforms.itemsCount) {\r\n        data[globalIndex] = workgroupCache[localIndex];\r\n    }\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/indexing/prepare-prefix-sum.wgsl":
/*!*************************************************************!*\
  !*** ./src/shaders/engine/indexing/prepare-prefix-sum.wgsl ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "struct DataItem {              //           align(4) size(8)\r\n    particlesCount: u32,       // offset(0) align(4) size(4)\r\n    doesContainParticles: u32, // offset(4) align(4) size(4)\r\n};\r\n\r\n@group(0) @binding(0) var<storage,read> cellsBuffer: array<Cell>;\r\n@group(0) @binding(1) var<storage,read_write> dataBuffer: array<DataItem>;\r\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,\r\n};\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let cellIndex = in.globalInvocationId.x;\r\n\r\n    if (cellIndex < uniforms.cellsCount) {\r\n        var dataItem: DataItem;\r\n        dataItem.particlesCount = cellsBuffer[cellIndex].particlesCount;\r\n        dataItem.doesContainParticles = min(1u, dataItem.particlesCount); // 0u or 1u\r\n        dataBuffer[cellIndex] = dataItem;\r\n    }\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/indexing/render-cells-by-population.wgsl":
/*!*********************************************************************!*\
  !*** ./src/shaders/engine/indexing/render-cells-by-population.wgsl ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<uniform> uniforms: Uniforms;\r\n\r\nstruct VertexIn {\r\n    @location(0) particlesCount: u32,\r\n    @builtin(vertex_index) vertexIndex: u32,\r\n    @builtin(instance_index ) cellIndex: u32,\r\n};\r\n\r\nstruct VertexOut {\r\n   @builtin(position) position: vec4<f32>,\r\n   @location(0) @interpolate(flat) particlesCount: u32,\r\n};\r\n\r\n@vertex\r\nfn main_vertex(in: VertexIn) -> VertexOut {\r\n    const corners = array<vec3<f32>, 24>(\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(1.0, 0.0, 0.0),\r\n        vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, 1.0),\r\n        vec3<f32>(0.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0),\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 1.0, 0.0),\r\n        vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 1.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 1.0), vec3<f32>(0.0, 1.0, 1.0),\r\n        vec3<f32>(1.0, 0.0, 1.0), vec3<f32>(1.0, 1.0, 1.0),\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 0.0, 1.0),\r\n        vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 0.0, 1.0),\r\n        vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(0.0, 1.0, 1.0),\r\n        vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 1.0),\r\n    );\r\n    let corner = corners[in.vertexIndex];\r\n\r\n    let cellId = vec3<u32>(\r\n        in.cellIndex % uniforms.gridSize.x,\r\n        (in.cellIndex / uniforms.gridSize.x) % uniforms.gridSize.y,\r\n        in.cellIndex / (uniforms.gridSize.x * uniforms.gridSize.y)\r\n    );\r\n\r\n    let cellOrigin = vec3<f32>(cellId);\r\n\r\n    var out: VertexOut;\r\n    let position = (cellOrigin + corner) * uniforms.cellSize;\r\n    out.position = uniforms.mvp * vec4<f32>(position, 1.0);\r\n    out.particlesCount = in.particlesCount;\r\n    return out;\r\n}\r\n\r\nstruct FragmentOut {\r\n    @location(0) color: vec4<f32>,\r\n};\r\n\r\n@fragment\r\nfn main_fragment(in: VertexOut) -> FragmentOut {\r\n    if (in.particlesCount == 0u) {\r\n        discard;\r\n    }\r\n\r\n    var out: FragmentOut;\r\n    out.color = vec4<f32>(uniforms.color.rgb, f32(in.particlesCount) / 3.0);\r\n    // out.color = uniforms.color;\r\n    return out;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/indexing/reorder-particles.wgsl":
/*!************************************************************!*\
  !*** ./src/shaders/engine/indexing/reorder-particles.wgsl ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<storage,read> inputParticlesBuffer: array<Particle>;\r\n@group(0) @binding(1) var<storage,read> cellsBuffer: array<Cell>;\r\n@group(0) @binding(2) var<storage,read_write> outputParticlesBuffer: array<Particle>;\r\n@group(0) @binding(3) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,\r\n};\r\n\r\nfn computeCellId(position: vec3<f32>) -> vec3<i32> {\r\n    let naiveCellId = vec3<i32>(position / uniforms.cellSize);\r\n    return clamp(naiveCellId, vec3<i32>(0), uniforms.gridSize - 1);\r\n}\r\n\r\nfn computeCellIndex(position: vec3<f32>) -> u32 {\r\n    let cellId = computeCellId(position);\r\n    return dot(vec3<u32>(cellId), uniforms.cellsStride);\r\n}\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let particleIndex = in.globalInvocationId.x;\r\n\r\n    if (particleIndex < uniforms.particlesCount) {\r\n        let particle = inputParticlesBuffer[particleIndex];\r\n\r\n        let cellIndex: u32 = computeCellIndex(particle.position);\r\n        let cellOffset = cellsBuffer[cellIndex].offset;\r\n\r\n        let finalParticleIndex = cellOffset + particle.indexInCell;\r\n        outputParticlesBuffer[finalParticleIndex] = particle;\r\n    }\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/indexing/reset-cells.wgsl":
/*!******************************************************!*\
  !*** ./src/shaders/engine/indexing/reset-cells.wgsl ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<storage,read_write> cellsBuffer: array<Cell>;\r\n@group(0) @binding(1) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,\r\n};\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let cellIndex = in.globalInvocationId.x;\r\n\r\n    if (cellIndex < uniforms.cellsCount) {\r\n        var output: Cell;\r\n        output.particlesCount = 0u;\r\n        output.offset = 0u;\r\n        cellsBuffer[cellIndex] = output;\r\n    }\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/simulation/acceleration.wgsl":
/*!*********************************************************!*\
  !*** ./src/shaders/engine/simulation/acceleration.wgsl ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<storage,read_write> particlesBuffer: array<Particle>;\r\n@group(0) @binding(1) var<storage,read> cellsBuffer: array<Cell>;\r\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,\r\n};\r\n\r\nfn computeCellId(position: vec3<f32>) -> vec3<i32> {\r\n    let naiveCellId = vec3<i32>(position / uniforms.cellSize);\r\n    return clamp(naiveCellId, vec3<i32>(0), uniforms.gridSize - 1);\r\n}\r\n\r\nfn computeCellIndex(position: vec3<f32>) -> u32 {\r\n    let cellId = computeCellId(position);\r\n    return dot(vec3<u32>(cellId), uniforms.cellsStride);\r\n}\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let particleId = in.globalInvocationId.x;\r\n    if (particleId >= uniforms.particlesCount) {\r\n        return;\r\n    }\r\n\r\n    var particle = particlesBuffer[particleId];\r\n    if (particle.weight >= uniforms.weightThreshold) {\r\n        return;\r\n    }\r\n\r\n    particle.acceleration = vec3<f32>(0);\r\n\r\n    let cellId = computeCellId(particle.position);\r\n    let minNeighbourCellId = vec3<u32>(max(cellId - 1, vec3<i32>(0)));\r\n    let maxNeighbourCellId = vec3<u32>(min(cellId + 1, uniforms.gridSize - 1));\r\n    var neighbourCellId: vec3<u32>;\r\n    for (neighbourCellId.z = minNeighbourCellId.z; neighbourCellId.z <= maxNeighbourCellId.z; neighbourCellId.z++) {\r\n        for (neighbourCellId.y = minNeighbourCellId.y; neighbourCellId.y <= maxNeighbourCellId.y; neighbourCellId.y++) {\r\n            for (neighbourCellId.x = minNeighbourCellId.x; neighbourCellId.x <= maxNeighbourCellId.x; neighbourCellId.x++) {\r\n                let neighbourCellIndex = dot(neighbourCellId, uniforms.cellsStride);\r\n                let neighbourCell = cellsBuffer[neighbourCellIndex];\r\n\r\n                let neighbourStartIndex = neighbourCell.offset;\r\n                let neighbourEndIndex = neighbourCell.offset + neighbourCell.particlesCount; // exclusive\r\n                for (var neighbourIndex = neighbourStartIndex; neighbourIndex < neighbourEndIndex; neighbourIndex++) {\r\n                    if (neighbourIndex != particleId) {\r\n                        let neighbour = particlesBuffer[neighbourIndex];\r\n                        let fromVector = particle.position - neighbour.position;\r\n                        let distance = length(fromVector);\r\n                        \r\n                        let penetration = 2.0 * uniforms.particleRadius - distance;\r\n\r\n                        if (penetration > 0.0) {\r\n                            particle.acceleration += (0.96 * neighbour.weight / (particle.weight + neighbour.weight)) * penetration * normalize(fromVector) / uniforms.dt;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    particle.acceleration += uniforms.gravity;\r\n\r\n    // upper bound\r\n    let upperBoundPenetration = particle.position - uniforms.upperBound;\r\n    let upperBoundCheck = step(vec3<f32>(0), upperBoundPenetration); // 1 if out of bounds, 0 if in bounds\r\n    particle.acceleration -= upperBoundCheck * (2.0 * upperBoundPenetration) / uniforms.dt;\r\n\r\n    // lower bound\r\n    let lowerBoundPenetration = uniforms.lowerBound - particle.position;\r\n    let lowerBoundCheck = step(vec3<f32>(0), lowerBoundPenetration); // 1 if out of bounds, 0 if in bounds\r\n    particle.acceleration += lowerBoundCheck * (2.0 * lowerBoundPenetration) / uniforms.dt;\r\n\r\n    particlesBuffer[particleId] = particle;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/simulation/initialization.wgsl":
/*!***********************************************************!*\
  !*** ./src/shaders/engine/simulation/initialization.wgsl ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<storage,read> initialParticlesBuffer: array<InitialParticle>;\r\n@group(0) @binding(1) var<storage,read_write> particlesBuffer: array<Particle>;\r\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,\r\n};\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let particleId = in.globalInvocationId.x;\r\n    if (particleId >= uniforms.particlesCount) {\r\n        return;\r\n    }\r\n\r\n    var initialParticle = initialParticlesBuffer[particleId];\r\n\r\n    var particle: Particle;\r\n    particle.position = initialParticle.position;\r\n    particle.weight = initialParticle.weight;\r\n    particle.velocity = vec3<f32>(0);\r\n    particle.foam = 0.0;\r\n    particle.acceleration = vec3<f32>(0);\r\n    particlesBuffer[particleId] = particle;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/simulation/integration.wgsl":
/*!********************************************************!*\
  !*** ./src/shaders/engine/simulation/integration.wgsl ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<storage,read_write> particlesBuffer: array<Particle>;\r\n@group(0) @binding(1) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,\r\n};\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let particleId = in.globalInvocationId.x;\r\n    if (particleId >= uniforms.particlesCount) {\r\n        return;\r\n    }\r\n\r\n    var particle = particlesBuffer[particleId];\r\n    if (particle.weight >= uniforms.weightThreshold) {\r\n        return;\r\n    }\r\n\r\n    let dtAcceleration: vec3<f32> = uniforms.dt * particle.acceleration;\r\n    particle.foam += 10.0 * uniforms.dt * length(particle.velocity);\r\n    particle.velocity = particle.velocity + dtAcceleration;\r\n    particle.velocity *= uniforms.velocityDamping;\r\n    particle.position = particle.position + uniforms.dt * particle.velocity;\r\n    particle.foam = min(1.0, particle.foam * uniforms.foamDamping);\r\n\r\n    particlesBuffer[particleId] = particle;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/engine/simulation/obstacles-rotation.wgsl":
/*!***************************************************************!*\
  !*** ./src/shaders/engine/simulation/obstacles-rotation.wgsl ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<storage,read_write> particlesBuffer: array<Particle>;\r\n@group(0) @binding(1) var<uniform> uniforms: Uniforms;\r\n\r\noverride workgroupSize: i32;\r\n\r\nstruct ComputeIn {\r\n    @builtin(global_invocation_id) globalInvocationId : vec3<u32>,\r\n};\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let particleId = in.globalInvocationId.x;\r\n    if (particleId >= uniforms.particlesCount) {\r\n        return;\r\n    }\r\n\r\n    var particle = particlesBuffer[particleId];\r\n    if (particle.weight < uniforms.weightThreshold) {\r\n        return;\r\n    }\r\n\r\n    particle.position = (uniforms.rotationMatrix * vec4<f32>(particle.position, 1)).xyz;\r\n\r\n    particlesBuffer[particleId] = particle;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/rendering/axes.wgsl":
/*!*****************************************!*\
  !*** ./src/shaders/rendering/axes.wgsl ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<uniform> uniforms: Uniforms;\r\n\r\nstruct VertexIn {\r\n    @builtin(vertex_index) vertexIndex: u32,\r\n};\r\n\r\nstruct VertexOut {\r\n    @builtin(position) position: vec4<f32>,\r\n    @location(0) @interpolate(flat) color: vec4<f32>,\r\n};\r\n\r\n@vertex\r\nfn main_vertex(in: VertexIn) -> VertexOut {\r\n    const vertices = array<vec3<f32>, 6>(\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(1.0, 0.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 1.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 0.0, 1.0),\r\n    );\r\n\r\n    const colors = array<vec4<f32>, 6>(\r\n        vec4<f32>(1.0, 0.0, 0.0, 1.0), vec4<f32>(1.0, 0.0, 0.0, 1.0),\r\n        vec4<f32>(0.0, 1.0, 0.0, 1.0), vec4<f32>(0.0, 1.0, 0.0, 1.0),\r\n        vec4<f32>(0.0, 0.0, 1.0, 1.0), vec4<f32>(1.0, 0.0, 1.0, 1.0),\r\n    );\r\n\r\n    var out: VertexOut;\r\n    let position = vertices[in.vertexIndex];\r\n    out.position = uniforms.mvp * vec4<f32>(position, 1.0);\r\n    out.color = colors[in.vertexIndex];\r\n    return out;\r\n}\r\n\r\nstruct FragmentOut {\r\n    @location(0) color: vec4<f32>,\r\n};\r\n\r\n@fragment\r\nfn main_fragment(in: VertexOut) -> FragmentOut {\r\n    var out: FragmentOut;\r\n    out.color = in.color;\r\n    return out;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/rendering/cube.wgsl":
/*!*****************************************!*\
  !*** ./src/shaders/rendering/cube.wgsl ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<uniform> uniforms: Uniforms;\r\n\r\nstruct VertexIn {\r\n    @builtin(vertex_index) vertexIndex: u32,\r\n};\r\n\r\nstruct VertexOut {\r\n    @builtin(position) position: vec4<f32>,\r\n};\r\n\r\n@vertex\r\nfn main_vertex(in: VertexIn) -> VertexOut {\r\n    const corners = array<vec3<f32>, 24>(\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(1.0, 0.0, 0.0),\r\n        vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, 1.0),\r\n        vec3<f32>(0.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0),\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 1.0, 0.0),\r\n        vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 1.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 1.0), vec3<f32>(0.0, 1.0, 1.0),\r\n        vec3<f32>(1.0, 0.0, 1.0), vec3<f32>(1.0, 1.0, 1.0),\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 0.0, 1.0),\r\n        vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 0.0, 1.0),\r\n        vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(0.0, 1.0, 1.0),\r\n        vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 1.0),\r\n    );\r\n\r\n    var out: VertexOut;\r\n    let position = corners[in.vertexIndex] * uniforms.proportions;\r\n    out.position = uniforms.mvp * vec4<f32>(position, 1.0);\r\n    return out;\r\n}\r\n\r\nstruct FragmentOut {\r\n    @location(0) color: vec4<f32>,\r\n};\r\n\r\n@fragment\r\nfn main_fragment(in: VertexOut) -> FragmentOut {\r\n    var out: FragmentOut;\r\n    out.color = vec4<f32>(1.0);\r\n    return out;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/rendering/grid-cells.wgsl":
/*!***********************************************!*\
  !*** ./src/shaders/rendering/grid-cells.wgsl ***!
  \***********************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<uniform> uniforms: Uniforms;\r\n\r\nstruct VertexIn {\r\n    @location(0) cellIndex: u32,\r\n    @builtin(vertex_index) vertexIndex: u32,\r\n};\r\n\r\nstruct VertexOut {\r\n   @builtin(position) position: vec4<f32>,\r\n};\r\n\r\n@vertex\r\nfn main_vertex(in: VertexIn) -> VertexOut {\r\n    const corners = array<vec3<f32>, 24>(\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(1.0, 0.0, 0.0),\r\n        vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 1.0), vec3<f32>(1.0, 0.0, 1.0),\r\n        vec3<f32>(0.0, 1.0, 1.0), vec3<f32>(1.0, 1.0, 1.0),\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 1.0, 0.0),\r\n        vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 1.0, 0.0),\r\n        vec3<f32>(0.0, 0.0, 1.0), vec3<f32>(0.0, 1.0, 1.0),\r\n        vec3<f32>(1.0, 0.0, 1.0), vec3<f32>(1.0, 1.0, 1.0),\r\n        vec3<f32>(0.0, 0.0, 0.0), vec3<f32>(0.0, 0.0, 1.0),\r\n        vec3<f32>(1.0, 0.0, 0.0), vec3<f32>(1.0, 0.0, 1.0),\r\n        vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(0.0, 1.0, 1.0),\r\n        vec3<f32>(1.0, 1.0, 0.0), vec3<f32>(1.0, 1.0, 1.0),\r\n    );\r\n    let corner = corners[in.vertexIndex];\r\n\r\n    let cellId = vec3<u32>(\r\n        in.cellIndex % uniforms.gridSize.x,\r\n        (in.cellIndex / uniforms.gridSize.x) % uniforms.gridSize.y,\r\n        in.cellIndex / (uniforms.gridSize.x * uniforms.gridSize.y)\r\n    );\r\n\r\n    let cellOrigin = vec3<f32>(cellId);\r\n\r\n    var out: VertexOut;\r\n    let position = (cellOrigin + corner) * uniforms.cellSize;\r\n    out.position = uniforms.mvp * vec4<f32>(position, 1.0);\r\n    return out;\r\n}\r\n\r\nstruct FragmentOut {\r\n    @location(0) color: vec4<f32>,\r\n};\r\n\r\n@fragment\r\nfn main_fragment() -> FragmentOut {\r\n    var out: FragmentOut;\r\n    out.color = uniforms.color;\r\n    return out;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/rendering/mesh.wgsl":
/*!*****************************************!*\
  !*** ./src/shaders/rendering/mesh.wgsl ***!
  \*****************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<uniform> uniforms: Uniforms;\r\n\r\nstruct VertexIn {\r\n    @location(0) modelPosition: vec3<f32>,\r\n    @location(1) modelNormal: vec3<f32>,\r\n};\r\n\r\nstruct VertexOut {\r\n    @builtin(position) worldPosition: vec4<f32>,\r\n    @location(0) @interpolate(flat) worldNormal: vec3<f32>,\r\n};\r\n\r\n@vertex\r\nfn main_vertex(in: VertexIn) -> VertexOut {\r\n    var output: VertexOut;\r\n    output.worldPosition = uniforms.mvp * vec4<f32>(in.modelPosition, 1.0);\r\n    output.worldNormal = (uniforms.modelMatrix * vec4<f32>(in.modelNormal, 0.0)).xyz;\r\n    return output;\r\n}\r\n\r\nstruct FragmentOut {\r\n    @location(0) color: vec4<f32>,\r\n};\r\n\r\n@fragment\r\nfn main_fragment(in: VertexOut) -> FragmentOut {\r\n    var output: FragmentOut;\r\n\r\n    var finalColor = 0.5 + 0.5 * in.worldNormal;\r\n\r\n    if (uniforms.displayMode == 0u) {\r\n        const albedo = vec3<f32>(1);\r\n        let ambiant =  0.2;\r\n        let diffuse = 0.8 * (0.5 + 0.5 * dot(in.worldNormal, uniforms.lightDirection));\r\n        finalColor = albedo * (ambiant + diffuse);\r\n    }\r\n\r\n    output.color = vec4<f32>(finalColor, 1.0);\r\n    return output;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/rendering/spheres/blur.wgsl":
/*!*************************************************!*\
  !*** ./src/shaders/rendering/spheres/blur.wgsl ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var inputTexture: texture_2d<f32>;\r\n@group(0) @binding(1) var outputTexture: texture_storage_2d<rgba8unorm, write>;\r\n@group(0) @binding(2) var<uniform> uniforms: Uniforms;\r\n// @group(0) @binding(1) var inputFoamTexture: texture_2d<f32>;\r\n// @group(0) @binding(3) var outputFoamTexture: texture_storage_2d<rgba8unorm, write>;\r\n\r\nstruct ComputeIn {\r\n    @builtin(workgroup_id) workgroupId: vec3<u32>,\r\n    @builtin(local_invocation_id) localInvocationId: vec3<u32>,\r\n    @builtin(global_invocation_id) globalInvocationId: vec3<u32>,\r\n};\r\n\r\noverride workgroupSize: i32;\r\nconst blurRadius = 8;\r\n\r\nalias FragmentDataType = vec3<f32>;\r\n\r\nstruct Fragment {\r\n    data: FragmentDataType,\r\n    depth: f32,\r\n};\r\n\r\nvar<workgroup> workgroupCache : array<Fragment, workgroupSize>;\r\n\r\nfn loadFragment(texelId: vec2<i32>) -> Fragment {\r\n    var currentFragment: Fragment;\r\n    let rawTexel = textureLoad(inputTexture, texelId, 0);\r\n    // let foam = textureLoad(inputFoamTexture, texelId, 0).r;\r\n    currentFragment.data = rawTexel.rgb;\r\n    currentFragment.depth = rawTexel.a;\r\n    return currentFragment;\r\n}\r\nfn storeFragment(texelId: vec2<i32>, cumulatedData: FragmentDataType, depth: f32) {\r\n    let outputColor = vec4<f32>(cumulatedData.rgb, depth);\r\n    // let outputFoamColor = vec4<f32>(cumulatedData.a);\r\n    textureStore(outputTexture, texelId, outputColor);\r\n    // textureStore(outputFoamTexture, texelId, outputFoamColor);\r\n}\r\n\r\nfn addContribution(currentFragmentDepth: f32, neighbourIndexInCache: i32, factor: f32, cumulatedData: ptr<function,FragmentDataType>, samplesCount: ptr<function,f32>) {\r\n    if (neighbourIndexInCache >= 0 && neighbourIndexInCache < workgroupSize) {\r\n        let neighbourFragment = workgroupCache[neighbourIndexInCache];\r\n\r\n        if (distance(currentFragmentDepth, neighbourFragment.depth) < 0.02) {\r\n            *samplesCount = *samplesCount + factor;\r\n            *cumulatedData = *cumulatedData + factor * neighbourFragment.data;\r\n        }\r\n    }\r\n}\r\n\r\n@compute @workgroup_size(workgroupSize)\r\nfn main(in: ComputeIn) {\r\n    let textureSize = vec2<i32>(textureDimensions(inputTexture));\r\n    let globalInvocationId = vec2<i32>(in.globalInvocationId.xy) - vec2<i32>(2 * blurRadius * i32(in.workgroupId.x), 0);\r\n\r\n    let texelId = globalInvocationId.x * uniforms.direction + globalInvocationId.y * (vec2<i32>(1) - uniforms.direction);\r\n    let indexInCache = i32(in.localInvocationId.x);\r\n\r\n    // first, load workgroup cache\r\n    let currentFragment = loadFragment(texelId);\r\n    workgroupCache[indexInCache] = currentFragment;\r\n    workgroupBarrier();\r\n\r\n    // then compute blur\r\n    if (texelId.x < textureSize.x && texelId.y < textureSize.y) {\r\n        let textureSize1D: i32 = dot(textureSize, uniforms.direction);\r\n        let nearImageBorder = (globalInvocationId.x <= blurRadius) || (globalInvocationId.x >= textureSize1D - 1 - blurRadius);\r\n        let insideWorkgroup = (indexInCache >= blurRadius) && (indexInCache <= workgroupSize - 1 - blurRadius);\r\n        if (nearImageBorder || insideWorkgroup) {\r\n            var cumulatedData = FragmentDataType(0);\r\n            var samplesCount = 0.0;\r\n\r\n            addContribution(currentFragment.depth, indexInCache, uniforms.blurFactors_0, &cumulatedData, &samplesCount);\r\n\r\n            addContribution(currentFragment.depth, indexInCache - 1, uniforms.blurFactors_1, &cumulatedData, &samplesCount);\r\n            addContribution(currentFragment.depth, indexInCache + 1, uniforms.blurFactors_1, &cumulatedData, &samplesCount);\r\n\r\n            addContribution(currentFragment.depth, indexInCache - 2, uniforms.blurFactors_2, &cumulatedData, &samplesCount);\r\n            addContribution(currentFragment.depth, indexInCache + 2, uniforms.blurFactors_2, &cumulatedData, &samplesCount);\r\n\r\n            addContribution(currentFragment.depth, indexInCache - 3, uniforms.blurFactors_3, &cumulatedData, &samplesCount);\r\n            addContribution(currentFragment.depth, indexInCache + 3, uniforms.blurFactors_3, &cumulatedData, &samplesCount);\r\n\r\n            addContribution(currentFragment.depth, indexInCache - 4, uniforms.blurFactors_4, &cumulatedData, &samplesCount);\r\n            addContribution(currentFragment.depth, indexInCache + 4, uniforms.blurFactors_4, &cumulatedData, &samplesCount);\r\n\r\n            addContribution(currentFragment.depth, indexInCache - 5, uniforms.blurFactors_5, &cumulatedData, &samplesCount);\r\n            addContribution(currentFragment.depth, indexInCache + 5, uniforms.blurFactors_5, &cumulatedData, &samplesCount);\r\n\r\n            addContribution(currentFragment.depth, indexInCache - 6, uniforms.blurFactors_6, &cumulatedData, &samplesCount);\r\n            addContribution(currentFragment.depth, indexInCache + 6, uniforms.blurFactors_6, &cumulatedData, &samplesCount);\r\n\r\n            cumulatedData = cumulatedData / samplesCount;\r\n            storeFragment(texelId, cumulatedData, currentFragment.depth);\r\n        }\r\n\r\n    }\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/rendering/spheres/composition.wgsl":
/*!********************************************************!*\
  !*** ./src/shaders/rendering/spheres/composition.wgsl ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var uSampler: sampler;\r\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\r\n@group(0) @binding(2) var uFoamTexture: texture_2d<f32>;\r\n\r\nconst displayMode_positionLocal = 0u;\r\nconst displayMode_normalScreenspace = 1u;\r\nconst displayMode_normalWorld = 2u;\r\nconst displayMode_waterDepth = 3u;\r\nconst displayMode_water = 4u;\r\nconst displayMode_depth = 5u;\r\nconst displayMode_balls = 6u;\r\n\r\n@group(1) @binding(0) var<uniform> uniforms: Uniforms;\r\n\r\nstruct VertexIn {\r\n    @builtin(vertex_index) vertexIndex: u32,\r\n}\r\nstruct VertexOut {\r\n    @builtin(position) position: vec4<f32>,\r\n    @location(0) uv: vec2<f32>, // in [0, 1]^2\r\n}\r\n\r\nconst quadCorners = array<vec2<f32>, 4>(\r\n    vec2<f32>(0.0, 0.0),\r\n    vec2<f32>(0.0, 1.0),\r\n    vec2<f32>(1.0, 0.0),\r\n    vec2<f32>(1.0, 1.0),\r\n);\r\n\r\n@vertex\r\nfn main_vertex(in: VertexIn) -> VertexOut {\r\n    var out: VertexOut;\r\n    out.uv = quadCorners[in.vertexIndex];\r\n    out.position = vec4<f32>(2.0 * out.uv.x - 1.0, 1.0 - 2.0 * out.uv.y, 0.0, 1.0);\r\n    return out;\r\n}\r\n\r\nstruct FragmentOut {\r\n    @builtin(frag_depth) depth: f32,\r\n    @location(0) color: vec4<f32>,\r\n}\r\n\r\n@fragment\r\nfn main_fragment(in: VertexOut) -> FragmentOut {\r\n    var out: FragmentOut;\r\n\r\n    let sample = textureSample(uTexture, uSampler, in.uv);\r\n    let depth = sample.a;\r\n    out.depth = depth;\r\n    if (depth >= 1.0) {\r\n        discard;\r\n    }\r\n\r\n    let foam = select(\r\n        0.0,\r\n        0.9 * smoothstep(0.15, 0.2, textureSample(uFoamTexture, uSampler, in.uv).r),\r\n        uniforms.enableFoam == 1u\r\n    );\r\n    const foamColor = vec3<f32>(1.0, 1.2, 1.4);\r\n\r\n    let positionLocal = 2.0 * sample.rg - 1.0;\r\n    let waterDepth = sample.b;\r\n\r\n    let distanceFromLocalCenterSquared = min(dot(positionLocal, positionLocal), 1.0);\r\n    let normalScreenspace = vec3<f32>(positionLocal, sqrt(1.0 - distanceFromLocalCenterSquared));\r\n    let toCamera = cross(uniforms.cameraRight, uniforms.cameraUp);\r\n    let normalWorld = normalScreenspace.x * uniforms.cameraRight + normalScreenspace.y * uniforms.cameraUp + normalScreenspace.z * toCamera;\r\n\r\n    switch uniforms.displayMode {\r\n        case displayMode_depth {\r\n            out.color = vec4<f32>(vec3<f32>(depth), 1.0);\r\n        }\r\n        case displayMode_positionLocal {\r\n            out.color = vec4<f32>(positionLocal, 0.0, 1.0);\r\n        }\r\n        case displayMode_normalScreenspace {\r\n            out.color = vec4<f32>(0.5 + 0.5 * normalScreenspace, 1.0);\r\n        } \r\n        case displayMode_normalWorld {\r\n            out.color = vec4<f32>(0.5 + 0.5 * normalWorld, 1.0);\r\n        }\r\n        case displayMode_waterDepth {\r\n            out.color = vec4<f32>(vec3<f32>(waterDepth), 1.0);\r\n        }\r\n        case displayMode_water {\r\n            let reflectedRayWorlspace = reflect(-toCamera, normalWorld);\r\n            let specular = uniforms.specularity * smoothstep(0.90, 0.95, reflectedRayWorlspace.z);\r\n\r\n            let pureWaterColor: vec3<f32> = pow(uniforms.waterColor, vec3<f32>(1.0 + 8.0 * waterDepth * uniforms.waterOpacity));\r\n            let waterColor = mix(pureWaterColor, foamColor, foam);\r\n            let fresnelFactor = uniforms.f0 * 2.0 * pow(1.0 - normalScreenspace.z, 2.0); // not at all the real formula\r\n            out.color = vec4<f32>(\r\n                specular + mix(waterColor, uniforms.worldColor, fresnelFactor),\r\n                1.0\r\n            );\r\n        }\r\n        case displayMode_balls {\r\n                let albedo = 1.3 * mix(vec3<f32>(0.184, 0.45, 0.913), foamColor, foam);\r\n                let ambiant =  0.4;\r\n                let diffuse = 0.6 * (0.5 + 0.5 * dot(normalWorld, uniforms.lightDirection));\r\n\r\n                out.color = vec4<f32>(\r\n                    albedo * (ambiant + diffuse),\r\n                    1.0\r\n                );\r\n        }\r\n        default {\r\n            out.color = vec4<f32>(0.0, 0.0, 1.0, 1.0);\r\n        }\r\n    }\r\n\r\n    return out;\r\n}\r\n";

/***/ }),

/***/ "./src/shaders/rendering/spheres/spheres.wgsl":
/*!****************************************************!*\
  !*** ./src/shaders/rendering/spheres/spheres.wgsl ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "@group(0) @binding(0) var<uniform> uniforms: Uniforms;\r\n\r\nstruct VertexIn {\r\n    @location(0) center: vec3<f32>,\r\n    @location(1) weight: f32,\r\n    @location(2) foam: f32,\r\n    @builtin(vertex_index) vertexIndex: u32,\r\n};\r\n\r\nstruct VertexOut {\r\n    @builtin(position) position: vec4<f32>,\r\n    @location(0) localPosition: vec2<f32>, // in {-1, +1}^2\r\n    @location(1) middlePointDepth: f32,\r\n    @location(2) @interpolate(flat) isDisplayed: u32,\r\n    @location(3) @interpolate(flat) foam: f32,\r\n};\r\n\r\n@vertex\r\nfn main_vertex(in: VertexIn) -> VertexOut {\r\n    const quadVertices = array<vec2<f32>,6>(\r\n        vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, -1.0), vec2<f32>(1.0, 1.0),\r\n        vec2<f32>(-1.0, -1.0), vec2<f32>(1.0, 1.0), vec2<f32>(-1.0, 1.0),\r\n    );\r\n\r\n    let corner = quadVertices[in.vertexIndex];\r\n\r\n    var output: VertexOut;\r\n    let centerWorld4 = uniforms.mMatrix * vec4<f32>(in.center, 1.0);\r\n    let centerWorld = centerWorld4.xyz / centerWorld4.w;\r\n\r\n    let worldPosition: vec3<f32> = centerWorld + uniforms.sphereRadius * (corner.x * uniforms.cameraRight + corner.y * uniforms.cameraUp);\r\n    output.position = uniforms.vpMatrix * vec4<f32>(worldPosition, 1.0);\r\n    output.localPosition = corner;\r\n\r\n    let toCamera: vec3<f32> = cross(uniforms.cameraRight, uniforms.cameraUp);\r\n    let nearestPointWorldPosition: vec3<f32> = centerWorld + uniforms.sphereRadius * toCamera;\r\n    let nearestPoint = uniforms.vpMatrix * vec4<f32>(nearestPointWorldPosition, 1.0);\r\n    output.middlePointDepth = nearestPoint.z / nearestPoint.w;\r\n\r\n    output.isDisplayed = select(0u, 1u, in.weight < uniforms.weightThreshold);\r\n    output.foam = in.foam;\r\n\r\n    return output;\r\n}\r\n\r\nfn computeLocalDepth(in: VertexOut) -> f32 {\r\n    if (in.isDisplayed == 0u) {\r\n        discard;\r\n    }\r\n\r\n    let distanceFromCenterSquared: f32 = dot(in.localPosition, in.localPosition);\r\n    if (distanceFromCenterSquared > 1.0) {\r\n        discard;\r\n    }\r\n\r\n    return sqrt(1.0 - distanceFromCenterSquared);\r\n}\r\n\r\nfn computeDepth(in: VertexOut, localDepth: f32) -> f32 {\r\n    return mix(in.position.z, in.middlePointDepth, localDepth);\r\n}\r\n\r\nstruct FragmentRGAOut {\r\n    @builtin(frag_depth) depth: f32,\r\n    @location(0) color: vec4<f32>,\r\n    @location(1) foam: vec4<f32>,\r\n};\r\n\r\n@fragment\r\nfn main_fragment_rga(in: VertexOut) -> FragmentRGAOut {\r\n    let localDepth = computeLocalDepth(in);\r\n    let depth = computeDepth(in, localDepth);\r\n\r\n    var output: FragmentRGAOut;\r\n    output.depth = depth;\r\n    output.color = vec4<f32>(0.5 + 0.5 * in.localPosition, 0, depth);\r\n    output.foam = vec4<f32>(in.foam);\r\n    return output;\r\n}\r\n\r\nstruct FragmentBOut {\r\n    @location(0) color: vec4<f32>,\r\n};\r\n\r\n@fragment\r\nfn main_fragment_b(in: VertexOut) -> FragmentBOut {\r\n    let localDepth = computeLocalDepth(in);\r\n    let waterDepth = max(0.005, 40.0 * uniforms.sphereRadius * localDepth);\r\n\r\n    var output: FragmentBOut;\r\n    output.color = vec4<f32>(0, 0, 0.1 * waterDepth, 0);\r\n    return output;\r\n}\r\n";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map