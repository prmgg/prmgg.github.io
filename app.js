const { createApp } = Vue;

  createApp({
    data() {
      return {
        titlePart1: 'Hi',
        titlePart2: 'there',
        subtitle: 'I\'m a web developer',
        gradientStyle: {
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }
      }
    },
    mounted() {
      console.log('Vue app mounted');
    }
  }).mount('#app')