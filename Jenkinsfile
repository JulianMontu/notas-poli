pipeline {
    agent any
    
    environment {
        DOCKER_PATH= '/Applications/Docker.app/Contents/Resources/bin/docker'
        DOCKER_COMPOSE= '/Applications/Docker.app/Contents/Resources/bin/docker-compose'
    }

    stages {
        stage('checkout') {
            steps{
                git branch:'master', url:'https://github.com/JulianMontu/notas-poli.git'
            }
        }
        stage('build'){
            steps{
                //en este step configuro el buil d mi project
                echo 'npm run build'
            }
        }
        stage('Code Analisis'){
            steps{
                //en este step configuro el buil d mi project
                echo 'Run analisis'
            }
        }
        stage('Test'){
            steps{
                //en este step configuro el buil d mi project
                echo 'npm run test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh '${DOCKER_PATH} build -t docker-project:latest .'
            }
        }
        stage('Build with Docker Compose'){
            steps {
                sh '${DOCKER_COMPOSE} build'
            }
        }
        stage('Run docker images'){
            steps {
                sh '${DOCKER_COMPOSE} up -d'
            }
        }
    }
}
