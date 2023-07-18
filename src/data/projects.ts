export type Project = {
  title: string
  techs: string[]
  link: string
  isComingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Whai Piano',
    techs: [
      'ReactJS',
      'react-query',
      'TS',
      'Collaborative',
      'Full-stack',
      'Cloudinary',
    ],
    link: 'https://github.com/MaeWolff/dictionary-app',
  },
  {
    title: 'Username Generator',
    techs: ['Handlebars', 'JS', 'SQL'],
    link: 'http://technical-difficulties-username-in-20-qs.devacademy.nz/usernames',
  },
  {
    title: 'Min Memes',
    techs: ['Full-stack', 'ReactJS', 'TypeScript', 'Solo'],
    link: 'http://min-memes.devacademy.nz/',
  },
  {
    title: 'RED PING',
    techs: ['ReactJS', 'Python', 'Rust', 'TypeScript', 'Collaborative'],
    link: 'https://green-field-0a20fe310.3.azurestaticapps.net/',
  },
]

export default projects
