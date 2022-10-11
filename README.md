# Testing API with Postman and Jenkins integration

## Technologies used:
- Postman with Newman to run from command line
- Jenkins

This repository has a Jenkinsfile specifying the build for a Jenkins pipeline on Windows 10 (the file uses 'bat' commands instead of 'sh' that would be used for Unix systems).

In the HT3JenkinsBuild folder, there's a config.xml file containing the settings for the Jenkins build. This build is set to download the Jenkinsfile from SCM--this repository--and run the tests as specified in it. The logs for first two completed builds are also in that folder.

About Postman tests: the tests are implemented in one collection, with each test case in its own folder to allow for running all the test cases at once or just a selected test case. To allow for running from command line, those tests are set-up with a temporary Dropbox account I've created just for this purpose. A refresh token is used to generate new access tokens. (Authorising the app to additional Dropbox accounts requires the use of a web browser.)

## Prerequisites
- Node.js and npm installed
- Jenkins local server

## Setup
1. Clone this repository with `git clone git@github.com:ksmmsk/HT3_Katarzyna_Agnieszka_Smiglak_Marczyk.git` (technically you only need the following folder, but I didn't want to submit multiple repositories as a solution, with one containing the build and the other the actual tests that Jenkins is running)
2. Copy the HT3JenkinsBuild folder into your Jenkins job directory (by default on Windows - `C:\ProgramData\Jenkins\.jenkins\jobs\`). 

## Running test suite
1. Run your local Jenkins server. If it was running during the setup process, restart it now.
2. On your dashboard, the HT3JenkinsBuild job should now appear. Click on it and click Build now.