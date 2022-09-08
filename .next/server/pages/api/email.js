"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/email";
exports.ids = ["pages/api/email"];
exports.modules = {

/***/ "mailgun-js":
/*!*****************************!*\
  !*** external "mailgun-js" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("mailgun-js");

/***/ }),

/***/ "(api)/./src/pages/api/email.js":
/*!********************************!*\
  !*** ./src/pages/api/email.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst mg = __webpack_require__(/*! mailgun-js */ \"mailgun-js\");\nconst mailgun = ()=>mg({\n        apiKey: \"8dcf3d5cf5e680c9de1fd2e8f3b8208b-07a637b8-07bd6798\",\n        domain: \"sandbox86e01290c8ba487ab45c007ec15e26a1.mailgun.org\"\n    })\n;\nfunction handler(req, res) {\n    res.status(200).json({\n        name: \"John Doe\"\n    });\n    const { email , subject , message  } = req.body;\n    mailgun().messages().send({\n        from: \"Jokha <Jokha@databoat.om>\",\n        to: `${email}`,\n        subject: `${subject}`,\n        html: `<p>${message}</p>`\n    }, (error, body)=>{\n        if (error) {\n            console.log(error);\n            res.status(500).send({\n                message: \"Error in sending email\"\n            });\n        } else {\n            console.log(body);\n            res.send({\n                message: \"Email sent successfully\"\n            });\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2VtYWlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsOEJBQVksQ0FBQztBQUVoQyxNQUFNQyxPQUFPLEdBQUcsSUFDZEYsRUFBRSxDQUFDO1FBQ0RHLE1BQU0sRUFBRSxvREFBb0Q7UUFDNURDLE1BQU0sRUFBRSxxREFBcUQ7S0FDOUQsQ0FBQztBQUFDO0FBRVUsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN4Q0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUFFQyxJQUFJLEVBQUUsVUFBVTtLQUFFLENBQUMsQ0FBQztJQUMzQyxNQUFNLEVBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFQyxPQUFPLEdBQUUsR0FBR1AsR0FBRyxDQUFDUSxJQUFJO0lBQzVDWixPQUFPLEVBQUUsQ0FDTmEsUUFBUSxFQUFFLENBQ1ZDLElBQUksQ0FDSDtRQUNFQyxJQUFJLEVBQUUsMkJBQTJCO1FBQ2pDQyxFQUFFLEVBQUUsQ0FBQyxFQUFFUCxLQUFLLENBQUMsQ0FBQztRQUNkQyxPQUFPLEVBQUUsQ0FBQyxFQUFFQSxPQUFPLENBQUMsQ0FBQztRQUNyQk8sSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFTixPQUFPLENBQUMsSUFBSSxDQUFDO0tBQzFCLEVBQ0QsQ0FBQ08sS0FBSyxFQUFFTixJQUFJLEdBQUs7UUFDZixJQUFJTSxLQUFLLEVBQUU7WUFDVEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO1lBQ25CYixHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ1EsSUFBSSxDQUFDO2dCQUFFSCxPQUFPLEVBQUUsd0JBQXdCO2FBQUUsQ0FBQyxDQUFDO1NBQzdELE1BQU07WUFDTFEsT0FBTyxDQUFDQyxHQUFHLENBQUNSLElBQUksQ0FBQyxDQUFDO1lBQ2xCUCxHQUFHLENBQUNTLElBQUksQ0FBQztnQkFBRUgsT0FBTyxFQUFFLHlCQUF5QjthQUFFLENBQUMsQ0FBQztTQUNsRDtLQUNGLENBQ0YsQ0FBQztDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLW5leHQvLi9zcmMvcGFnZXMvYXBpL2VtYWlsLmpzP2ZhN2UiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWcgPSByZXF1aXJlKFwibWFpbGd1bi1qc1wiKTtcblxuY29uc3QgbWFpbGd1biA9ICgpID0+XG4gIG1nKHtcbiAgICBhcGlLZXk6IFwiOGRjZjNkNWNmNWU2ODBjOWRlMWZkMmU4ZjNiODIwOGItMDdhNjM3YjgtMDdiZDY3OThcIixcbiAgICBkb21haW46IFwic2FuZGJveDg2ZTAxMjkwYzhiYTQ4N2FiNDVjMDA3ZWMxNWUyNmExLm1haWxndW4ub3JnXCIsXG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbmFtZTogXCJKb2huIERvZVwiIH0pO1xuICBjb25zdCB7IGVtYWlsLCBzdWJqZWN0LCBtZXNzYWdlIH0gPSByZXEuYm9keTtcbiAgbWFpbGd1bigpXG4gICAgLm1lc3NhZ2VzKClcbiAgICAuc2VuZChcbiAgICAgIHtcbiAgICAgICAgZnJvbTogXCJKb2toYSA8Sm9raGFAZGF0YWJvYXQub20+XCIsXG4gICAgICAgIHRvOiBgJHtlbWFpbH1gLFxuICAgICAgICBzdWJqZWN0OiBgJHtzdWJqZWN0fWAsXG4gICAgICAgIGh0bWw6IGA8cD4ke21lc3NhZ2V9PC9wPmAsXG4gICAgICB9LFxuICAgICAgKGVycm9yLCBib2R5KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiRXJyb3IgaW4gc2VuZGluZyBlbWFpbFwiIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgICAgICAgIHJlcy5zZW5kKHsgbWVzc2FnZTogXCJFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseVwiIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJtZyIsInJlcXVpcmUiLCJtYWlsZ3VuIiwiYXBpS2V5IiwiZG9tYWluIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJuYW1lIiwiZW1haWwiLCJzdWJqZWN0IiwibWVzc2FnZSIsImJvZHkiLCJtZXNzYWdlcyIsInNlbmQiLCJmcm9tIiwidG8iLCJodG1sIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/email.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/email.js"));
module.exports = __webpack_exports__;

})();