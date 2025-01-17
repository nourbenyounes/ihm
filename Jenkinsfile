pipeline {
    agent any

    environment {
        SONARQUBE = 'sonarQube devSecOps' // Define the SonarQube server (configured in Jenkins)
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub using the configuration in Jenkins
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies (ensure npm is installed on the Jenkins agent)
                script {
                    bat 'npm install'
                }
            }
        }


stage('SonarQube Analysis') { steps { // Run SonarQube analysis (ensure the SonarQube plugin is installed in Jenkins)
  script { withEnv(['PATH+CUSTOM=C:\\Users\\Nour2\\Downloads\\sonar-scanner-cli-6.2.1.4610-windows-x64\\sonar-scanner-6.2.1.4610-windows-x64\\bin'])
  { bat 'sonar-scanner' } } } }




    }

    post {
        success {
            echo ' successful!'
        }
        failure {
            echo ' failed!'
        }
    }
}
