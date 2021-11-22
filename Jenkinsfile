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
    
    stage('Notifier') {
      steps {
        discordSend description: "Jenkins Pipeline Build ${appName}", footer: "Start Build", link: "$BUILD_URL", result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/902202700924596274/mvQ5-hZHRgi1baxHWY6xd0WjkQbYFr-yqWWtmagDBksu4A2tFHzwC7WEcYs1oBIbyXDp"
      }
  }
  
}
