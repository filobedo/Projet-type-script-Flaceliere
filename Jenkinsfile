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
  
  post {
    success {
      echo "success path"
      discordSend description: "Jenkins Pipeline Build {Projet de BG}", footer: "Start Build", link: "http://pas_de_link.com", result: currentBuild.currentResult, title: "Hello bg", webhookURL: "https://discord.com/api/webhooks/912284109198491678/JSWgHNcVAeu_hIQcZNIC3AsxQmrbr__4JEiIP0WLtC9RPBIU-plnMP9V6W78QuTKkjim"
    }
  }
  
}
