const newman = require('newman');

const nm = function (testCase) {
    newman.run({
        collection: require('../postman/DropboxAPITest.postman_collection.json'),
        environment: require('../postman/DropboxEnv.postman_environment.json'),
        folder: testCase,
        reporters: 'cli',
        reporter: {
            htmlextra: {
                export: './report/report.html',
                logs: true,
                displayProgressBar: true
            }
        }
    }, function (err) {
        if (err) { throw err; }
    });
}

const getFolder = function (opt) {
    let folder;
    switch (opt) {
        case 'upload':
            folder = "Upload test";
            break;
        case 'delete':
            folder = "Delete test";
            break;
        case 'metadata':
            folder = "Get File Metadata test";
            break;
        default:
            folder ="";
            break;
    }
    return folder;
}

const args = process.argv;
const folderToRun = getFolder(args[2]);
nm(folderToRun);