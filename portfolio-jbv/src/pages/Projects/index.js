import { useEffect, useState } from 'react';

export default function HomePage() {
  const[projects, setProjects] = useState([]);

  useEffect( () => {
    setProjects([
      {name: "Project 1",
       description: "Desc 1"
      },
      {name: "Project 2",
      description: "Desc 2"
      },
    ]);
  }, [])

  return (
    <section id="proyects" class="content-section">
        <div class="title">
            <h2>
                Proyects
            </h2>

        </div>
        <div class="menu-content">
            <article>
                <div class="image">
                    <img src="https://github.com/jbarberisv/Beatview/raw/main/assets/Images/ss-MAI.png?raw=true" alt="" />
                    <div class="description">
                        <h3>MAI Music</h3>
                        <p>API Proyect JS</p>
                    </div>
                </div> 

            </article>

            <article>
                <div class="image">
                    <img src="./assest/images/project1.png" alt="" />
                    <div class="description">
                        <h3>Project2</h3>
                        <p>Description</p>
                    </div>
                </div> 

            </article>

            <article>
                <div class="image">
                    <img src="./assest/images/project1.png" alt="" />
                    <div class="description">
                        <h3>Project3</h3>
                        <p>Description</p>
                    </div>
                </div> 

            </article>

            <article>
                <div class="image">
                    <img src="./assest/images/project1.png" alt="" />
                    <div class="description">
                        <h3>Project4</h3>
                        <p>Description</p>
                    </div>
                </div> 

            </article>

            <article>
                <div class="image">
                    <img src="./assest/images/project1.png" alt="" />
                    <div class="description">
                        <h3>Project5</h3>
                        <p>Description</p>
                    </div>
                </div> 

            </article>
        </div>
    </section>
  )
}
