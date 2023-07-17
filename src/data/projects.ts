export type Project = {
  title: string
  techs: string[]
  link: string
  isComingSoon?: boolean
}

const projects: Project[] = [
  {
    title: 'Whai Piano',
    techs: ['ReactJS', 'react-query', 'TS'],
    link: 'https://github.com/MaeWolff/dictionary-app',
  },
  {
    title: 'RED PING',
    techs: ['ReactJS', 'Python', 'Rust', 'TypeScript', 'API'],
    link: 'https://green-field-0a20fe310.3.azurestaticapps.net/',
  },
  {
    title: 'Username Generator',
    techs: ['Handlebars', 'JS'],
    link: 'http://technical-difficulties-username-in-20-qs.devacademy.nz/usernames',
  },
]

export default projects
