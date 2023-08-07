import { useEffect, useState } from 'react';

const projects = [

        { href: 'https://github.com/jbarberisv/Beatview/raw/main/assets/Images/ss-MAI.png?raw=true',
        github: 'https://github.com/jbarberisv/Beatview',
        deployment: 'https://jbarberisv.github.io/Beatview/',
        name: 'MAI Music',
        description: 'Music app that gives you a music playlist depending on your emotional state'
        },
        { href: 'https://github.com/jbarberisv/text-editor-pwa-jbv/raw/main/client/src/images/Screenshot%202023-08-04%20at%2011.45.35%20PM.png?raw=true',
        github: 'https://github.com/jbarberisv/text-editor-pwa-jbv',
        deployment: 'https://editor-pwa-jbv-9b3a446054e5.herokuapp.com',
        name: 'Text Editor',
        description: 'App that edits text'
        },
        { href: 'https://github.com/jbarberisv/street-speak-p2/raw/JoaquinBranch/assets/img/screen%20shot%20street.png?raw=true',
        github: 'https://github.com/jbarberisv/street-speak-p2',
        deployment: 'https://mvp-ucf-app.herokuapp.com',
        name: 'Binary Babel',
        description: 'Dictionary where you can make up descriptions to words'
       },
       { href: 'https://github.com/renkayla/NurtureNavigator/blob/main/client/src/assets/logo.png?raw=true',
        github: 'https://github.com/renkayla/NurtureNavigator',
        deployment: 'https://github.com/renkayla/NurtureNavigator',
        name: 'Nuture Navigator',
        description: 'Website where you can search for information about plants'
       },
       { href: 'https://github.com/jbarberisv/work-day-schedule-jbv/raw/main/assets/images/workdayS.png?raw=true',
       github: 'https://github.com/jbarberisv/work-day-schedule-jbv',
       deployment: 'https://jbarberisv.github.io/work-day-schedule-jbv/',
       name: 'Work Schedule',
       description: 'Website where people can program there Day'
      },
      { href: 'https://github.com/jbarberisv/nosql-social-network-jbv/raw/main/assets/img/nosql-insomnia-ss.png?raw=true',
      github: 'https://github.com/jbarberisv/nosql-social-network-jbv',
      deployment: 'https://drive.google.com/file/d/171pMUTxsFqxBqZKGD9FxYcnDWc5QHMPF/view',
      description: 'app for managing users Friends and thoughts Reactions.'
     },
]

export default function HomePage() {
//   const[projects, setProjects] = useState([]);

 

  return (
    <section id="proyects" class="content-section">
        <div class="title">
            <h2>
                Proyects
            </h2>

        </div>
        <div class="menu-content">
            { projects.map( project => (
                <article>
                    <div class="image">
                        <img src={project.href} alt="image about project" />
                        <div class="description">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.github}>Github -</a>
                            <a href={project.deployment}>Deployment</a>
                        </div>
                    </div> 
                </article>

                ))
            }

        </div>
    </section>
  )
}
