export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://media.licdn.com/dms/image/v2/D5603AQFedNqNnwFFHQ/profile-displayphoto-shrink_200_200/B56ZU.JmabGUAY-/0/1740504459429?e=2147483647&v=beta&t=KKkdas9mCmKVZYvzgmCfEwFB6SfoiymQnf9hxJlmIvc',
      light: 'https://media.licdn.com/dms/image/v2/D5603AQFedNqNnwFFHQ/profile-displayphoto-shrink_200_200/B56ZU.JmabGUAY-/0/1740504459429?e=2147483647&v=beta&t=KKkdas9mCmKVZYvzgmCfEwFB6SfoiymQnf9hxJlmIvc',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-nuxtdotjs',
      'to': 'https://nihirz.netlify.app',
      'target': '_blank',
      'aria-label': 'Website'
    }, {
      'icon': 'i-simple-icons-skype',
      'to': 'https://join.skype.com/invite/yRPor5b7B9aD',
      'target': '_blank',
      'aria-label': 'Skype'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/ZalaNihir',
      'target': '_blank',
      'aria-label': 'X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/ZalaNihir',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  }
})
