export type Project = {
  title: string
  techs: string[]
  link: string
  Reflection: string
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
    link: 'https://piano-pitches.devacademy.nz/',
    Reflection:
      'We made this project as a final group project at Dev boot-camp, as a playful way to stay connected to each other, and also build a whimsical tool others could use to connect and laugh whilst doing so. If I were to update this further, I would create private piano rooms people could play with and maintain privacy. I would also automate all the black keys, not only the ones of the Whai piano, so that they automatically play a duet of the two white keys on either side, as I quite enjoyed than feature on our Cohort piano. I would also allow people to customize their own private/group chat pianos.',
  },
  {
    title: 'Username Generator',
    techs: ['Handlebars', 'JS', 'SQL'],
    link: 'http://technical-difficulties-username-in-20-qs.devacademy.nz/usernames',
    Reflection:
      'This was the first group project I ever took part in at Dev Academy. It definitely was an idea pulled from the hat about how to integrate Handlebars and a database into a fun app to show the others. Our first team was mighty frolick focused and so naturally a silly little app was born. If I were to add anything further, I would make it more obvious whose username is whose and give users a way to share that online or download a png.',
  },
  {
    title: 'Min Memes',
    techs: ['Full-stack', 'ReactJS', 'TypeScript', 'Solo'],
    link: 'http://min-memes.devacademy.nz/',
    Reflection:
      'If you have not noticed a theme yet, I love play, I love laughter, I love spreading whimsy and joy almost above all else. This was my first Fullstack application built as a challenge to myself(and for NZQA of-course). Whilst the ins and outs of building client and server side along with passing data through a database and allowing people to edit said data, was my main focus in building this, I had to add my trademark whimsy and make it about something whimsical(memes). I would style this app much further and re order the new memes to appear at the top of the feed rather than scrolling to the bottom to find them. I would also allow people to login and follow meme accounts or topics they wished to see. I would perhaps keep agency over a feed everyone can see that shares artworks or staff picks as it were if I were ever at a size to do that.',
  },
  {
    title: 'RED PING',
    techs: ['ReactJS', 'Python', 'Rust', 'TypeScript', 'Collaborative'],
    link: 'https://green-field-0a20fe310.3.azurestaticapps.net/',
    Reflection:
      'RED PING, is a work in progress! It is unfinished and we are working on it. This is not a Dev Academy project, but a project with software engineers I have met out in the wild world of Wellington. It was inspired by having many connections that need a way to communicate urgent emotional or physical crisis, or at-least warn or green-light a situations so others know whether to worry or not worry. Whilst we are still striving for an MVP(minimal viable product) eventually I would love to be able to include a little GPT chat bot that can respond with helpful tools or conversation when noone else is available, I would make the colours and buttons customizable as I LOVE customization and peoples ability to make things their own. I would also allow people to share joy and wellbeing PINGS not just less well PINGS, with the purpose of spreading hope as-well as taking care. ',
  },
]

export default projects
