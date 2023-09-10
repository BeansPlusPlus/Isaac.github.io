type Social = {
  label: string
  link: string
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
    },
    {
      label: 'Github',
      //github link here:
      link: 'https://github.com/Isaac-Irvine',
    },
  ],
}

export default presentation
