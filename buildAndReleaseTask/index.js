"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var tl = require("azure-pipelines-task-lib/task");
function installMinikube() {
    return __awaiter(this, void 0, void 0, function () {
        var prereqs, minikubeName, shaSuffix, minikubeUrl, apt, curl;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prereqs = ["socat", "ebtables"];
                    minikubeName = "minikube";
                    shaSuffix = ".sha256";
                    minikubeUrl = "https://storage.googleapis.com/minikube/releases/v1.0.0/minikube-linux-amd64";
                    apt = tl.tool(tl.which('apt', true));
                    apt.arg("install").arg(prereqs);
                    apt.exec();
                    curl = tl.tool(tl.which('curl', true));
                    curl.arg("-Lo").arg(minikubeName).arg(minikubeUrl);
                    return [4 /*yield*/, curl.exec()];
                case 1:
                    _a.sent();
                    curl.arg("-Lo").arg(minikubeName + shaSuffix).arg(minikubeUrl + shaSuffix);
                    return [4 /*yield*/, curl.exec()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function () {
        var command, _a, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 7, , 8]);
                    command = tl.getInput('command', true);
                    _a = command;
                    switch (_a) {
                        case "start": return [3 /*break*/, 1];
                        case "status": return [3 /*break*/, 3];
                        case "stop": return [3 /*break*/, 4];
                        case "delete": return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 6];
                case 1: return [4 /*yield*/, installMinikube()];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 6];
                case 3:
                    {
                        return [3 /*break*/, 6];
                    }
                    _b.label = 4;
                case 4:
                    {
                        return [3 /*break*/, 6];
                    }
                    _b.label = 5;
                case 5:
                    {
                        return [3 /*break*/, 6];
                    }
                    _b.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    err_1 = _b.sent();
                    tl.setResult(tl.TaskResult.Failed, err_1.message);
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
run();
