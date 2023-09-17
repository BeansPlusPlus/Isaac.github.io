type Social = {
  label: string
  link: string
  image: string
}

type Presentation = {
  title: string
  description: string
  socials: Social[]
}

const presentation: Presentation = {
  //email can go here
  title: 'Izzy Irvine',
  description: "Welcome to Izzy's Landing Page",
  socials: [
    {
      label: 'Linked-in',
      //linkedin Link:
      link: 'https://www.linkedin.com/in/isaac-irvine/',
      image: '/Izzy.github.io/linkedin.png',
    },
    {
      label: 'Github',
      //github link here:
      link: 'https://github.com/Isaac-Irvine',
      image: '/Izzy.github.io/github.png',
    },
  ],
}

export default presentation
