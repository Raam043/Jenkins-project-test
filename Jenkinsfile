pipeline {
    agent any

    stages {
        stage('Git checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Raam043/Jenkins-project-test.git'
            }
        }
        stage('Docker image Build') {
            steps {
                sh 'docker stop myapp'
                sh 'docker rm -f myapp'
                sh 'docker image rm -f myapp'
                sh 'docker build -t myapp .'
            }
        }
        stage('Docker Conatiner run') {
            steps {
                sh 'docker run -d --name myapp -p 80:80 myapp'
                sh 'docker tag myapp raam043/myapp:latest'
            }
        }
        stage('Image pushing to DockerHub') {
            steps {
                withCredentials([string(credentialsId: 'DP', variable: 'DP')]) {
                    sh 'docker login -u raam043 -p ${DP}'
                    sh 'docker push raam043/myapp:latest'
            }
        }
        }
         stage('Deploying application on Ansible Nodes') {
            steps {
                ansiblePlaybook credentialsId: 'Ansible-private-key', disableHostKeyChecking: true, installation: 'ansible', inventory: 'nodes.inv', playbook: 'httpd_container.yml'
            }
        }
    }
}
