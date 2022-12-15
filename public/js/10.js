(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/Pages/Auth/Signin.js":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Signin.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia */ \"./node_modules/@inertiajs/inertia/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var _Shared_Auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/Auth */ \"./resources/js/Shared/Auth.js\");\n/* harmony import */ var _Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/Shared/LoadingButton */ \"./resources/js/Shared/LoadingButton.js\");\n/* harmony import */ var _Shared_TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/Shared/TextInput */ \"./resources/js/Shared/TextInput.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__[\"usePage\"])(),\n      props = _usePage.props;\n\n  var errors = props.errors,\n      app = props.app;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      sending = _useState2[0],\n      setSending = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      otpForm = _useState4[0],\n      setOtpForm = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    phone_number: '',\n    password: '',\n    otp: ''\n  }),\n      _useState6 = _slicedToArray(_useState5, 2),\n      values = _useState6[0],\n      setValues = _useState6[1];\n\n  function handleChange(e) {\n    var key = e.target.name;\n    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;\n    setValues(function (values) {\n      return _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, key, value));\n    });\n  }\n\n  function handleSubmit(e) {\n    e.preventDefault();\n    setSending(true);\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(route('signin.verify'), values).then(function (res) {\n      debugger;\n\n      if (res.data.type == 'success') {\n        if (res.data.otp) {\n          setOtpForm(true);\n          setSending(false);\n        } else {\n          _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_3__[\"Inertia\"].post(route('signin.attempt'), values).then(function () {\n            setSending(false);\n          });\n        }\n      } else {\n        setSending(false);\n        Object(react_toastify__WEBPACK_IMPORTED_MODULE_5__[\"toast\"])(res.data.message);\n      }\n    });\n  } //...\n\n\n  function resendOtp() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(route('resend.otp'), values).then(function (res) {\n      Object(react_toastify__WEBPACK_IMPORTED_MODULE_5__[\"toast\"])(res.data.message);\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Auth__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Login\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", {\n    className: \"main-content\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"authentication-page-wrapper max-562\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit,\n    id: \"login-form\"\n  }, !otpForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph form-heading text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"login\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph input-design\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    placeholder: \"Phone Number\",\n    name: \"phone_number\",\n    type: \"number\",\n    value: values.phone_number,\n    errors: errors.phone_number,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph input-design\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    placeholder: \"Password\",\n    name: \"password\",\n    type: \"password\",\n    value: values.password,\n    errors: errors.password,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph forget-password text-right\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__[\"InertiaLink\"], {\n    href: route('forgot')\n  }, \"Forgot Password?\"))), otpForm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph form-heading text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Verification Code\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph input-design\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_TextInput__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    placeholder: \"Code\",\n    name: \"otp\",\n    type: \"number\",\n    value: values.otp,\n    errors: errors.otp,\n    onChange: handleChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"javascript:void(0)\",\n    className: \"resendOtp\",\n    onClick: function onClick() {\n      return resendOtp();\n    }\n  }, \"Resend Code\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph submit-design text-center margin-auto\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_LoadingButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    type: \"submit\",\n    loading: sending,\n    className: \"pink-btn-design\"\n  }, otpForm ? 'Verify OTP' : 'Login')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-grouph signup-text text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"New to \", app.name, \"?\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_4__[\"InertiaLink\"], {\n    href: route('signup')\n  }, \" Sign Up\")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_5__[\"ToastContainer\"], null));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvUGFnZXMvQXV0aC9TaWduaW4uanM/ZmRjMiJdLCJuYW1lcyI6WyJ1c2VQYWdlIiwicHJvcHMiLCJlcnJvcnMiLCJhcHAiLCJ1c2VTdGF0ZSIsInNlbmRpbmciLCJzZXRTZW5kaW5nIiwib3RwRm9ybSIsInNldE90cEZvcm0iLCJwaG9uZV9udW1iZXIiLCJwYXNzd29yZCIsIm90cCIsInZhbHVlcyIsInNldFZhbHVlcyIsImhhbmRsZUNoYW5nZSIsImUiLCJrZXkiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJ0eXBlIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0Iiwicm91dGUiLCJ0aGVuIiwicmVzIiwiZGF0YSIsIkluZXJ0aWEiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJyZXNlbmRPdHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsMkVBQU07QUFBQSxpQkFDRkEsd0VBQU8sRUFETDtBQUFBLE1BQ1pDLEtBRFksWUFDWkEsS0FEWTs7QUFBQSxNQUVaQyxNQUZZLEdBRUlELEtBRkosQ0FFWkMsTUFGWTtBQUFBLE1BRUpDLEdBRkksR0FFSUYsS0FGSixDQUVKRSxHQUZJOztBQUFBLGtCQUdVQyxzREFBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQTtBQUFBLE1BR2JDLE9BSGE7QUFBQSxNQUdKQyxVQUhJOztBQUFBLG1CQUlVRixzREFBUSxDQUFDLEtBQUQsQ0FKbEI7QUFBQTtBQUFBLE1BSWJHLE9BSmE7QUFBQSxNQUlKQyxVQUpJOztBQUFBLG1CQUtRSixzREFBUSxDQUFDO0FBQ3BDSyxnQkFBWSxFQUFFLEVBRHNCO0FBRXBDQyxZQUFRLEVBQUUsRUFGMEI7QUFHcENDLE9BQUcsRUFBRTtBQUgrQixHQUFELENBTGhCO0FBQUE7QUFBQSxN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QURELENBZEEsZUF3QkE7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyxvRUFBRDtBQUFhLFFBQUksRUFBRVksS0FBSyxDQUFDLFFBQUQ7QUFBeEIsd0JBREQsQ0F4QkEsQ0FIRCxFQWlDRW5CLE9BQU8saUJBQ1IscUlBQ0E7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyRkFERCxDQURBLGVBSUE7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyx5REFBRDtBQUNDLGVBQVcsRUFBQyxNQURiO0FBRUMsUUFBSSxFQUFDLEtBRk47QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlDLFNBQUssRUFBRUssTUFBTSxDQUFDRCxHQUpmO0FBS0MsVUFBTSxFQUFFVCxNQUFNLENBQUNTLEdBTGhCO0FBTUMsWUFBUSxFQUFFRztBQU5YLElBREQsQ0FKQSxlQWNBO0FBQUcsUUFBSSxFQUFDLG9CQUFSO0FBQTZCLGFBQVMsRUFBQyxXQUF2QztBQUFtRCxXQUFPLEVBQUU7QUFBQSxhQUFNbUIsU0FBUyxFQUFmO0FBQUE7QUFBNUQsbUJBZEEsQ0FsQ0QsZUFvREM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyw2REFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFFNUIsT0FGVjtBQUdDLGFBQVMsRUFBQztBQUhYLEtBS0VFLE9BQU8sR0FBRyxZQUFILEdBQWtCLE9BTDNCLENBREQsQ0FwREQsZUE2REM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQyxpRkFBV0osR0FBRyxDQUFDZSxJQUFmLG9CQUNDLDJEQUFDLG9FQUFEO0FBQWEsUUFBSSxFQUFFUSxLQUFLLENBQUMsUUFBRDtBQUF4QixnQkFERCxDQURELENBN0RELENBREQsQ0FERCxDQURELENBSEQsQ0FEQSxlQThFRCwyREFBQyw2REFBRCxPQTlFQyxDQURFO0FBbUZILENBMUlEIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL1BhZ2VzL0F1dGgvU2lnbmluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEluZXJ0aWEgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEnO1xuaW1wb3J0IHsgSW5lcnRpYUxpbmssIHVzZVBhZ2UgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IEF1dGggZnJvbSAnQC9TaGFyZWQvQXV0aCc7XG5pbXBvcnQgTG9hZGluZ0J1dHRvbiBmcm9tICdAL1NoYXJlZC9Mb2FkaW5nQnV0dG9uJztcblxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdAL1NoYXJlZC9UZXh0SW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cdGNvbnN0IHsgcHJvcHMgfSA9IHVzZVBhZ2UoKTtcblx0Y29uc3QgeyBlcnJvcnMsIGFwcCB9ID0gcHJvcHM7XG5cdGNvbnN0IFtzZW5kaW5nLCBzZXRTZW5kaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW290cEZvcm0sIHNldE90cEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbdmFsdWVzLCBzZXRWYWx1ZXNdID0gdXNlU3RhdGUoe1xuXHRcdHBob25lX251bWJlcjogJycsXG5cdFx0cGFzc3dvcmQ6ICcnLFxuXHRcdG90cDogJycsXG5cdH0pO1xuXHRcblx0ZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGUpIHtcblx0XHRjb25zdCBrZXkgPSBlLnRhcmdldC5uYW1lO1xuXHRcdGNvbnN0IHZhbHVlID1cblx0XHRlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnID8gZS50YXJnZXQuY2hlY2tlZCA6IGUudGFyZ2V0LnZhbHVlO1xuXG5cdFx0c2V0VmFsdWVzKHZhbHVlcyA9PiAoe1xuXHRcdFx0Li4udmFsdWVzLFxuXHRcdFx0W2tleV06IHZhbHVlXG5cdFx0fSkpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzZXRTZW5kaW5nKHRydWUpO1xuXHRcdFxuXHRcdGF4aW9zLnBvc3Qocm91dGUoJ3NpZ25pbi52ZXJpZnknKSwgdmFsdWVzKS50aGVuKChyZXMpID0+IHtcblx0XHRcdGRlYnVnZ2VyO1xuXHRcdFx0aWYocmVzLmRhdGEudHlwZT09J3N1Y2Nlc3MnKXtcblx0XHRcdFx0aWYocmVzLmRhdGEub3RwKXtcblx0XHRcdFx0XHRzZXRPdHBGb3JtKHRydWUpO1xuXHRcdFx0XHRcdHNldFNlbmRpbmcoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdEluZXJ0aWEucG9zdChyb3V0ZSgnc2lnbmluLmF0dGVtcHQnKSwgdmFsdWVzKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHRcdHNldFNlbmRpbmcoZmFsc2UpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c2V0U2VuZGluZyhmYWxzZSk7XG5cdFx0XHRcdHRvYXN0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdFxuXHRcdFxuXHR9XG5cblx0Ly8uLi5cblx0ZnVuY3Rpb24gcmVzZW5kT3RwKCkge1xuXHRcdGF4aW9zLnBvc3Qocm91dGUoJ3Jlc2VuZC5vdHAnKSwgdmFsdWVzKS50aGVuKChyZXMpID0+IHtcblx0XHRcdHRvYXN0KHJlcy5kYXRhLm1lc3NhZ2UpO1xuXHRcdH0pO1xuXHR9XG5cdFxuICAgIHJldHVybiAoXG5cdFx0PEF1dGg+XG5cdFx0PGRpdj5cblx0XHRcdDxIZWxtZXQgdGl0bGU9XCJMb2dpblwiIC8+XG5cdFxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXV0aGVudGljYXRpb24tcGFnZS13cmFwcGVyIG1heC01NjJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gaWQ9XCJsb2dpbi1mb3JtXCI+XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdHshb3RwRm9ybSAmJlxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBoIGZvcm0taGVhZGluZyB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMj5sb2dpbjwvaDI+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBoIGlucHV0LWRlc2lnblwiPlxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0SW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwaG9uZV9udW1iZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cIm51bWJlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dmFsdWVzLnBob25lX251bWJlcn1cblx0XHRcdFx0XHRcdFx0XHRcdGVycm9ycz17ZXJyb3JzLnBob25lX251bWJlcn1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaCBpbnB1dC1kZXNpZ25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dElucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0XHRcdGVycm9ycz17ZXJyb3JzLnBhc3N3b3JkfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBoIGZvcmdldC1wYXNzd29yZCB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PEluZXJ0aWFMaW5rIGhyZWY9e3JvdXRlKCdmb3Jnb3QnKX0+Rm9yZ290IFBhc3N3b3JkPzwvSW5lcnRpYUxpbms+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0e290cEZvcm0gJiZcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaCBmb3JtLWhlYWRpbmcgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDI+VmVyaWZpY2F0aW9uIENvZGU8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaCBpbnB1dC1kZXNpZ25cIj5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dElucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNvZGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm90cFwiXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwibnVtYmVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt2YWx1ZXMub3RwfVxuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JzPXtlcnJvcnMub3RwfVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3NOYW1lPVwicmVzZW5kT3RwXCIgb25DbGljaz17KCkgPT4gcmVzZW5kT3RwKCl9PlJlc2VuZCBDb2RlPC9hPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwaCBzdWJtaXQtZGVzaWduIHRleHQtY2VudGVyIG1hcmdpbi1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZz17c2VuZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBpbmstYnRuLWRlc2lnblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7b3RwRm9ybSA/ICdWZXJpZnkgT1RQJyA6ICdMb2dpbicgfVxuXHRcdFx0XHRcdFx0XHRcdDwvTG9hZGluZ0J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cGggc2lnbnVwLXRleHQgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cD5OZXcgdG8ge2FwcC5uYW1lfT8gXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW5lcnRpYUxpbmsgaHJlZj17cm91dGUoJ3NpZ251cCcpfT4gU2lnbiBVcDwvSW5lcnRpYUxpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC9kaXY+XG5cdDxUb2FzdENvbnRhaW5lciAvPlxuXG5cdDwvQXV0aD5cbiAgICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/Pages/Auth/Signin.js\n");

/***/ }),

/***/ "./resources/js/Shared/Auth.js":
/*!*************************************!*\
  !*** ./resources/js/Shared/Auth.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Auth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"./node_modules/react-helmet/es/Helmet.js\");\n/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/progress */ \"./node_modules/@inertiajs/progress/dist/index.js\");\n/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Shared_AuthHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Shared/AuthHeader */ \"./resources/js/Shared/AuthHeader.js\");\n/* harmony import */ var _Shared_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Shared/Footer */ \"./resources/js/Shared/Footer.js\");\n/* harmony import */ var _Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/Shared/FlashMessages */ \"./resources/js/Shared/FlashMessages.js\");\n\n\n\n\n\n\n\nfunction Auth(_ref) {\n  var children = _ref.children;\n\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__[\"usePage\"])(),\n      props = _usePage.props;\n\n  var app = props.app;\n  _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__[\"InertiaProgress\"].init({\n    color: '#ed60bd',\n    includeCSS: true,\n    showSpinner: true\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    titleTemplate: \"%s | \".concat(app.name)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_AuthHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_FlashMessages__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Shared_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvU2hhcmVkL0F1dGguanM/YzMzMCJdLCJuYW1lcyI6WyJBdXRoIiwiY2hpbGRyZW4iLCJ1c2VQYWdlIiwicHJvcHMiLCJhcHAiLCJJbmVydGlhUHJvZ3Jlc3MiLCJpbml0IiwiY29sb3IiLCJpbmNsdWRlQ1NTIiwic2hvd1NwaW5uZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBNEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsaUJBQ3hCQyx3RUFBTyxFQURpQjtBQUFBLE1BQ2xDQyxLQURrQyxZQUNsQ0EsS0FEa0M7O0FBQUEsTUFFbENDLEdBRmtDLEdBRTFCRCxLQUYwQixDQUVsQ0MsR0FGa0M7QUFJMUNDLHFFQUFlLENBQUNDLElBQWhCLENBQXFCO0FBQ3BCQyxTQUFLLEVBQUUsU0FEYTtBQUVwQkMsY0FBVSxFQUFFLElBRlE7QUFHcEJDLGVBQVcsRUFBRTtBQUhPLEdBQXJCO0FBTUEsc0JBQ0MscUZBQ0MsMkRBQUMsb0RBQUQ7QUFBUSxpQkFBYSxpQkFBVUwsR0FBRyxDQUFDTSxJQUFkO0FBQXJCLElBREQsZUFHQywyREFBQywwREFBRCxPQUhELGVBSUMsMkRBQUMsNkRBQUQsT0FKRCxFQUtFVCxRQUxGLGVBTUMsMkRBQUMsc0RBQUQsT0FORCxDQUREO0FBVUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvU2hhcmVkL0F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVsbWV0IGZyb20gJ3JlYWN0LWhlbG1ldCc7XG5pbXBvcnQgeyBJbmVydGlhUHJvZ3Jlc3MgfSBmcm9tICdAaW5lcnRpYWpzL3Byb2dyZXNzJztcbmltcG9ydCB7IHVzZVBhZ2UgfSBmcm9tICdAaW5lcnRpYWpzL2luZXJ0aWEtcmVhY3QnO1xuXG5pbXBvcnQgQXV0aEhlYWRlciBmcm9tICdAL1NoYXJlZC9BdXRoSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9TaGFyZWQvRm9vdGVyJztcbmltcG9ydCBGbGFzaE1lc3NhZ2VzIGZyb20gJ0AvU2hhcmVkL0ZsYXNoTWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKHsgY2hpbGRyZW4gfSkge1xuXHRjb25zdCB7IHByb3BzIH0gPSB1c2VQYWdlKCk7XG5cdGNvbnN0IHsgYXBwIH0gPSBwcm9wcztcblx0XG5cdEluZXJ0aWFQcm9ncmVzcy5pbml0KHtcblx0XHRjb2xvcjogJyNlZDYwYmQnLFxuXHRcdGluY2x1ZGVDU1M6IHRydWUsXG5cdFx0c2hvd1NwaW5uZXI6IHRydWUsXG5cdH0pO1xuXHRcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PEhlbG1ldCB0aXRsZVRlbXBsYXRlPXtgJXMgfCAke2FwcC5uYW1lfWB9IC8+XG5cdFx0XHRcblx0XHRcdDxBdXRoSGVhZGVyIC8+XG5cdFx0XHQ8Rmxhc2hNZXNzYWdlcyAvPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PEZvb3RlciAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/Shared/Auth.js\n");

/***/ }),

/***/ "./resources/js/Shared/AuthHeader.js":
/*!*******************************************!*\
  !*** ./resources/js/Shared/AuthHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ \"./node_modules/@inertiajs/inertia-react/dist/index.js\");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__[\"usePage\"])(),\n      props = _usePage.props;\n\n  var app = props.app;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n    id: \"main-header\",\n    className: \"relative-header\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"header-logo text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__[\"InertiaLink\"], {\n    href: route('home'),\n    className: \"pink\"\n  }, app.name)));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvU2hhcmVkL0F1dGhIZWFkZXIuanM/N2I2YiJdLCJuYW1lcyI6WyJ1c2VQYWdlIiwicHJvcHMiLCJhcHAiLCJyb3V0ZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRWUsMkVBQU07QUFBQSxpQkFDRkEsd0VBQU8sRUFETDtBQUFBLE1BQ1pDLEtBRFksWUFDWkEsS0FEWTs7QUFBQSxNQUVaQyxHQUZZLEdBRUpELEtBRkksQ0FFWkMsR0FGWTtBQUlwQixzQkFDQztBQUFRLE1BQUUsRUFBQyxhQUFYO0FBQXlCLGFBQVMsRUFBQztBQUFuQyxrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDJEQUFDLG9FQUFEO0FBQWEsUUFBSSxFQUFFQyxLQUFLLENBQUMsTUFBRCxDQUF4QjtBQUFrQyxhQUFTLEVBQUM7QUFBNUMsS0FDRUQsR0FBRyxDQUFDRSxJQUROLENBREQsQ0FERCxDQUREO0FBU0EsQ0FiRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9TaGFyZWQvQXV0aEhlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEluZXJ0aWFMaW5rLCB1c2VQYWdlIH0gZnJvbSAnQGluZXJ0aWFqcy9pbmVydGlhLXJlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuXHRjb25zdCB7IHByb3BzIH0gPSB1c2VQYWdlKCk7XG5cdGNvbnN0IHsgYXBwIH0gPSBwcm9wcztcblx0XG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBpZD1cIm1haW4taGVhZGVyXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUtaGVhZGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1sb2dvIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdDxJbmVydGlhTGluayBocmVmPXtyb3V0ZSgnaG9tZScpfSBjbGFzc05hbWU9XCJwaW5rXCI+XG5cdFx0XHRcdFx0e2FwcC5uYW1lfVxuXHRcdFx0XHQ8L0luZXJ0aWFMaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/Shared/AuthHeader.js\n");

/***/ })

}]);