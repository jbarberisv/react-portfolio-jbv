import { useEffect, useState } from 'react';

export default function HomePage() {
  const[about, setAbout] = useState([]);

  useEffect( () => {
    console.log('run')
    setAbout('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nam illum, numquam eveniet molestias voluptas ratione consectetur mollitia minima dolores rerum a et ipsum ullam. Doloremque distinctio officia ratione fugit.');
  }, [])

  return (
    <section id="about" className="content-section">
      <div className="title">
        <h2>
            About me
        </h2>
      </div>
      <div className="menu-content">
        <p>
          {about}
        </p>
      </div>
    </section>
  )
}
