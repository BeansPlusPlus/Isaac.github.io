type Social = {
  label: string
  link: string
}

type Presentation = {
  mail: string
  title: string
  description: string
  socials: Social[]
}

const presentation: Presentation = {
  mail: 'min.elliot48@gmail.com',
  title: 'Min Iles | A Portfolio',
  description:
    "Hello, I am Min, a Software Developer with experience going through Dev Academy's boot-camp and from my own projects in collaboration with others. I am currently working with *NodeJS, React, and Typescript*. Outside of work I am on the Board of an Art Gallery 'MEANWHILE', I love to socialize, and be creative and learning new coding languages. I love learning new things and thinking in different ways whenever possible, and enjoy creating and executing visions in teams. I am currently learning to use Astro to build this Portfolio and am dipping my toe into Python on the weekends.",
  socials: [
    {
      label: 'Linked-in',
      link: 'https://www.linkedin.com/in/min-iles-79bb2a221/',
    },
    {
      label: 'Github',
      link: 'https://github.com/Tominne',
    },
  ],
}

export default presentation
