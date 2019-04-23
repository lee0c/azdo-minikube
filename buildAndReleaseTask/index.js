"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const tl = require("azure-pipelines-task-lib/task");
function installMinikube() {
    return __awaiter(this, void 0, void 0, function* () {
        let prereqs = ["socat", "ebtables"];
        let minikubeName = "minikube";
        let shaSuffix = ".sha256";
        let minikubeUrl = "minikube https://storage.googleapis.com/minikube/releases/v1.0.0/minikube-linux-amd64";
        let apt = tl.tool(tl.which('apt', true));
        apt.arg("install").arg(prereqs);
        apt.exec();
        let curl = tl.tool(tl.which('curl', true));
        curl.arg("-Lo").arg(minikubeName).arg(minikubeUrl);
        yield curl.exec();
        curl.arg("-Lo").arg(minikubeName + shaSuffix).arg(minikubeUrl + shaSuffix);
        yield curl.exec();
    });
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const command = tl.getInput('command', true);
            switch (command) {
                case "start": {
                    yield installMinikube();
                    break;
                }
                case "status": {
                    break;
                }
                case "stop": {
                    break;
                }
                case "delete": {
                    break;
                }
            }
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    });
}
run();
