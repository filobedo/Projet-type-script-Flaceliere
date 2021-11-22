pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
        git 'https://github.com/filobedo/Projet-type-script-Flaceliere'
      }
    }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Tests') {
      steps {
         sh 'npm test'
      }
    }      
  }
}
