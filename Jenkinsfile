pipeline {
    agent any
    
    stages {
        stage('checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/JulianMontu/notas-poli.git'
            }
        }
        stage('install') {
            steps {
                bat 'npm install -f'
            }
        }
        stage('build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Run analysis'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
            }
        }
        stage('Build Docker Image') {
            steps {
                bat 'docker build -t docker-project:latest .'
            }
        }
        stage('Build with Docker Compose') {
            steps {
                bat 'docker-compose build'
            }
        }
        stage('Run Docker Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }
    }
}
