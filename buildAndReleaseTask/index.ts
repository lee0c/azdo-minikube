import tl = require('azure-pipelines-task-lib/task');
import { ToolRunner } from 'azure-pipelines-task-lib/toolrunner';

async function installMinikube() {
    let prereqs: Array<string> = ["socat", "ebtables"];
    let minikubeName: string = "minikube";
    let shaSuffix: string = ".sha256"
    let minikubeUrl: string = "minikube https://storage.googleapis.com/minikube/releases/v1.0.0/minikube-linux-amd64";

    let apt: ToolRunner = tl.tool(tl.which('apt', true));
    apt.arg("install").arg(prereqs);
    apt.exec();

    let curl: ToolRunner = tl.tool(tl.which('curl', true));
    curl.arg("-Lo").arg(minikubeName).arg(minikubeUrl);
    await curl.exec();

    curl.arg("-Lo").arg(minikubeName + shaSuffix).arg(minikubeUrl + shaSuffix);
    await curl.exec();
}

async function run() {
    try {
        const command: string = tl.getInput('command', true);

        switch (command) {
            case "start": {
                await installMinikube()
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
}

run();