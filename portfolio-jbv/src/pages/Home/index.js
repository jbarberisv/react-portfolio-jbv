import { useEffect, useState } from 'react';

export default function HomePage() {
  const [about, setAbout] = useState('');

  useEffect(() => {
    const aboutText = `As a dedicated student and an enthusiastic full stack developer, I'm fueled by an insatiable curiosity for coding and a genuine passion for problem-solving. My journey in the world of technology has led me to explore the intricacies of both front-end and back-end development, where I continually seek to merge creativity with functionality.

    What Defines Me:

    Student at Heart: With a voracious appetite for learning, I thrive on soaking up new concepts, languages, and methodologies. My commitment to education empowers me to stay at the forefront of the ever-evolving tech landscape.

    Feel free to personalize and expand upon this profile text to align with your specific experiences, interests, and accomplishments.`;

    setAbout(aboutText);
  }, []);

  const paragraphs = about.split('\n\n').map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ));

  return (
    <section id="about" className="content-section">
      <div className="title">
        <h2>About me</h2>
      </div>
      <div className="menu-content">{paragraphs}</div>
    </section>
  );
}
