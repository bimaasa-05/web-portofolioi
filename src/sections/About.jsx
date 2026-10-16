import SectionTitle from '../components/SectionTitle'
import { profile } from '../data/profile'
import { skillCategories } from '../data/skills'
import '../styles/about.css'

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionTitle
          eyebrow="Tentang"
          title="Tentang Saya"
          description="Profil singkat pemilik portofolio, termasuk keahlian dan cara saya bekerja."
        />

        <div className="about-grid">
          <div className="about-profile">
            <img
              className="about-avatar"
              src={profile.avatar}
              alt={`Foto profil ${profile.name}`}
            />
            <h3 className="about-name">{profile.name}</h3>
            <p className="about-role">{profile.role}</p>
            <p className="about-description">{profile.description}</p>

            <dl className="about-facts">
              <div className="about-fact">
                <dt>Minat</dt>
                <dd>{profile.interests}</dd>
              </div>
              <div className="about-fact">
                <dt>Perjalanan belajar</dt>
                <dd>{profile.learningPath}</dd>
              </div>
              <div className="about-fact">
                <dt>Fokus saat ini</dt>
                <dd>{profile.currentFocus}</dd>
              </div>
              <div className="about-fact">
                <dt>Pendekatan</dt>
                <dd>{profile.approach}</dd>
              </div>
            </dl>
          </div>

          <div className="about-skills">
            <h3 className="about-skills-title">Kemampuan teknis</h3>
            {skillCategories.map((category) => (
              <div className="about-skill-category" key={category.title}>
                <h4>{category.title}</h4>
                <ul className="about-skill-list">
                  {category.items.map((item) => (
                    <li className="badge" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
