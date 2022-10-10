pipeline {
    agent any
    stages {
        stage('Get code from repository') {
            steps {
                git branch: 'main', url: 'https://github.com/ksmmsk/HT3_Katarzyna_Agnieszka_Smiglak_Marczyk.git'
            }
        }
        stage('Install the dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run the upload test') {
            steps {
                bat 'npm run testupload'
            }
        }
        stage('Run the get file metadata test') {
            steps {
                bat 'npm run testdelete'
            }
        }
                stage('Run the delete test') {
            steps {
                bat 'npm run testmetadata'
            }
        }
    }
}