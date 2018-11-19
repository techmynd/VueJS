module.exports = {
  dest: './dist',
  title: "Docs",
  description: "just docs for testing purpose",
  head: [
    ['link', { rel: 'icon', href: '/images/hero.png' }]
  ],
  themeConfig: {
  	nav: [
  		{ text: 'Home', link: '/' },
  		{ text: 'Guide', link: '/guide/' },
  		{ text: 'About', link: '/about/' },
  		{ text: 'Contact', link: '/contact/' },
  	],
  	//sidebar: 'auto'
  	sidebar: {
  		'/guide/': [
  			'',
  			'frontend',
  			'backend'

  		]
  	}
  }
}