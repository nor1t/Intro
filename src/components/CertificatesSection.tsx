import { FC, useState, useEffect } from 'react'

interface Certificate {
  id: number
  title: string
  issuer: string
  description: string
  image: string
}


const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'CERTIFICATE OF PARTICIPATION IN THE JUNCTIONX REGIONAL HACKATHON',
    issuer: 'Junction',
    description:
      'Awarded for participation in the JunctionXPrizren Regional Hackathon, a competitive 48-hour event bringing together developers, designers, and innovators from the region to build functional prototypes and solve real-world challenges under tight deadlines, we chose to make an mobile app called "KosVibe", where me and my team reached the finals which means top 5 out of more than 100 participants.',
    image: '/certificates/1.png',
  },
  {
    id: 2,
    title: 'CERTIFICATE OF PARTICIPATION IN THE JUNCTIONX TIRANA HACKATHON',
    issuer: 'Junction',
    description:
      'Awarded for participating in the JunctionXTirana Hackathon, 48-hours event bringing together developers, designers, and innovators from all over Europe to build functional prototypes and solve real-world challenges. I participated with my team and created a web app called SkaNova, more than 100 teams and 500 "hackers" participated.',
    image: '/certificates/2.png',
  },
  {
    id: 3,
    title: 'Introduction to Modern AI',
    issuer: 'CISCO',
    description:
      'Successfully completed the Introduction to Modern AI course by CISCO. I practiced using AI enabled features on free apps, such as photo apps, translation services, and chatbots. I had in depth practice in prompting a chatbot, and understand fundamentals of how the models work, which informs how they prompt chatbots.',
    image: '/certificates/3.png',
  },
  {
    id: 4,
    title: 'Debate Club Certificate "Lets Debate Change" Project',
    issuer: 'SOLIDAR.Suisse/Teach For Kosova',
    description:
      'Successfully completed the Debate Club sessions and activities as part of the "Lets Debate Change" project, funded by Solidar Suisse. This program provided structured training in public speaking, critical thinking, and constructive debate within a professional learning environment. Through interactive debates, teamwork, and evidence-based argumentation, I significantly strengthened my communication, presentation, and active listening skills. The experience also enhanced my confidence in expressing ideas clearly, engaging in respectful discussions, and collaborating effectively with diverse groups.',
    image: '/certificates/4.jpeg',
  },
    {
    id: 5,
    title: 'Green Summer School 2025: EcoFix',
    issuer: 'giz/German Cooperation',
    description:
      'Participated in the five-day Green Summer School 2025 EcoFix, where I collaborated with participants from across the Balkan region on topics related to environmental sustainability and electronic waste (e-waste) management. The program provided valuable hands-on and collaborative learning experiences, including presenting project ideas, assembling and troubleshooting computer hardware, and exploring practical approaches to reducing and recycling e-waste. Working in multicultural teams strengthened my communication, teamwork, and presentation skills while exposing me to diverse perspectives and innovative solutions for environmental challenges.',
    image: '/certificates/5.jpeg',
  },
  {
    id: 6,
    title: 'Soft Skills and Employability Training Certificate',
    issuer: 'European Union/UNDP',
    description:
      'Successfully completed training focused on developing essential soft skills and enhancing employability. The program strengthened my professional communication, teamwork, problem-solving, leadership, and time management abilities while providing practical insights into workplace expectations and career development. Through interactive activities and real-world scenarios, I improved my confidence in interviews, professional networking, and presenting ideas effectively. This training equipped me with the interpersonal and professional competencies needed to collaborate efficiently, adapt to dynamic work environments, and contribute effectively to multidisciplinary teams.',
    image: '/certificates/6.jpeg',
  },
  {
    id: 7,
    title: 'Volunteer Trainer "Play Unified" Program, 20 Hours',
    issuer: 'Olimpiada Speciale Kosovë',
    description:
      'Recognized for contributing as a volunteer trainer during the successful implementation of the "Play Unified"  program, which promotes inclusive sports by bringing together individuals with and without intellectual disabilities. Through this experience, I developed strong leadership, communication, and teamwork skills while supporting participants in a positive and inclusive environment. Beyond mentoring, the program also gave me opportunities to strengthen my technical abilities by assisting with digital tools and coding-related tasks used to support program activities and event organization. This experience reinforced the importance of combining technical skills with social impact, demonstrating how technology and collaboration can contribute to more inclusive communities.',
    image: '/certificates/7.jpeg',
  },

  {
    id: 8,
    title: 'Python Data Fundamentals',
    issuer: 'DataCamp',
    description:
      'Covers the foundational concepts of working with data in Python, including data types, structures, basic operations with NumPy and pandas, and introductory data manipulation techniques essential for any data-driven role.',
    image: '/certificates/8.png',
  },
  {
    id: 9,
    title: 'Cleaning Data with PySpark',
    issuer: 'DataCamp',
    description:
      'Focuses on cleaning and preparing large-scale datasets using PySpark. Covers handling missing values, casting data types, filtering, deduplication, and applying transformations across distributed DataFrames efficiently.',
    image: '/certificates/9.png',
  },
  {
    id: 10,
    title: 'End-to-End Machine Learning',
    issuer: 'DataCamp',
    description:
      'Walks through the complete machine learning pipeline — from data collection, cleaning, and exploratory analysis to feature engineering, model training, evaluation, hyperparameter tuning, and deploying a working ML solution.',
    image: '/certificates/10.png',
  },
  {
    id: 11,
    title: 'Exploratory Data Analysis in Python',
    issuer: 'DataCamp',
    description:
      'Teaches systematic approaches to exploring and visualizing datasets using pandas, matplotlib, and seaborn. Emphasizes identifying patterns, detecting outliers, and forming hypotheses before modeling.',
    image: '/certificates/11.png',
  },
  {
    id: 12,
    title: 'Feature Engineering for Machine Learning in Python',
    issuer: 'DataCamp',
    description:
      'Deep dive into creating and selecting predictive features from raw data. Covers encoding categorical variables, scaling numerical features, generating polynomial and interaction features, and handling time-based data.',
    image: '/certificates/12.png',
  },
  {
    id: 13,
    title: 'Feature Engineering with PySpark',
    issuer: 'DataCamp',
    description:
      'Applies feature engineering techniques at scale using PySpark. Covers StringIndexer, OneHotEncoder, VectorAssembler, StandardScaler, and pipeline construction for distributed machine learning workflows.',
    image: '/certificates/13.png',
  },
  {
    id: 14,
    title: 'Intermediate Python',
    issuer: 'DataCamp',
    description:
      'Builds on basic Python knowledge with topics including list comprehensions, lambda functions, error handling, iterators, generators, and object-oriented programming patterns for writing clean, efficient code.',
    image: '/certificates/14.png',
  },
  {
    id: 15,
    title: 'Introduction to Data Visualization with Seaborn',
    issuer: 'DataCamp',
    description:
      'Covers creating informative statistical graphics using Seaborn, including distribution plots, relational plots, categorical plots, and customizing aesthetics. Emphasizes communicating insights through visual storytelling.',
    image: '/certificates/15.png',
  },
  {
    id: 16,
    title: 'Introduction to Databricks SQL',
    issuer: 'DataCamp',
    description:
      'Introduces querying and analyzing data on the Databricks platform using SQL. Covers writing efficient queries, managing databases and tables, using built-in functions, and building dashboards within Databricks SQL.',
    image: '/certificates/16.png',
  },
  {
    id: 17,
    title: 'Introduction to dbt',
    issuer: 'DataCamp',
    description:
      'Covers the fundamentals of dbt (data build tool) for transforming data in modern analytics workflows. Includes writing models, managing dependencies, testing data quality, generating documentation, and deploying data pipelines.',
    image: '/certificates/17.png',
  },
  {
    id: 18,
    title: 'Introduction to PySpark',
    issuer: 'DataCamp',
    description:
      'Introduces distributed data processing with PySpark. Covers the Spark architecture, Resilient Distributed Datasets (RDDs), DataFrames, basic transformations, actions, and SQL queries on large-scale data.',
    image: '/certificates/18.png',
  },
  {
    id: 19,
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    description:
      'A beginner-friendly introduction to Python programming. Covers variables, data types, lists, dictionaries, loops, conditional statements, functions, and basic scripting — laying the groundwork for data science and automation.',
    image: '/certificates/19.png',
  },
  {
    id: 20,
    title: 'Introduction to Statistics in Python',
    issuer: 'DataCamp',
    description:
      'Covers core statistical concepts and their implementation in Python. Topics include descriptive statistics, probability distributions, sampling methods, hypothesis testing, confidence intervals, and correlation analysis.',
    image: '/certificates/20.png',
  },
  {
    id: 21,
    title: 'Joining Data with pandas',
    issuer: 'DataCamp',
    description:
      'Focuses on combining multiple datasets using pandas merge, join, and concatenation operations. Covers inner, outer, left, and right joins, handling duplicate keys, multi-index joins, and merging on indexes.',
    image: '/certificates/21.png',
  },
  {
    id: 22,
    title: 'Introduction to Machine Learning with PySpark',
    issuer: 'DataCamp',
    description:
      'Introduces building machine learning models at scale with PySpark MLlib. Covers classification, regression, clustering, and recommendation systems using Spark\'s distributed ML pipeline API on large datasets.',
    image: '/certificates/22.png',
  },
  {
    id: 23,
    title: 'Preprocessing for Machine Learning in Python',
    issuer: 'DataCamp',
    description:
      'Covers essential data preprocessing steps before modeling: handling missing data, encoding categorical features, scaling and normalization, train-test splitting, and building reusable preprocessing pipelines with scikit-learn.',
    image: '/certificates/23.png',
  },
  {
    id: 24,
    title: 'Supervised Learning with scikit-learn',
    issuer: 'DataCamp',
    description:
      'Comprehensive coverage of supervised machine learning using scikit-learn. Includes linear and logistic regression, decision trees, support vector machines, ensemble methods, model evaluation metrics, and cross-validation techniques.',
    image: '/certificates/24.png',
  },
  {
    id: 25,
    title: 'Understanding Machine Learning',
    issuer: 'DataCamp',
    description:
      'A conceptual introduction to machine learning covering the distinction between supervised, unsupervised, and reinforcement learning. Explains core concepts like overfitting, bias-variance tradeoff, and the ML workflow without heavy math.',
    image: '/certificates/25.png',
  },
  {
    id: 26,
    title: 'Unsupervised Learning in Python',
    issuer: 'DataCamp',
    description:
      'Explores unsupervised machine learning techniques including k-means and hierarchical clustering, principal component analysis (PCA) for dimensionality reduction, and t-SNE for visualizing high-dimensional data in Python.',
    image: '/certificates/26.png',
  },
  {
    id: 27,
    title: 'Gratitude for success achieved in FOOTBALL',
    issuer: 'Fushë-Kosova Municipality',
    description:
      'Honored by the municipality of Fushë-Kosova in recognition of my dedication, achievements, and contributions in football. Competing in a team-oriented environment taught me the value of discipline, collaboration, and responsibility. Football showed me that success is built through trust, communication, and supporting teammates toward a common goal. These lessons directly influence my approach to software development, where I enjoy collaborating with developers, sharing knowledge, and contributing to projects that require strong teamwork to achieve successful outcomes.',
    image: '/certificates/27.jpeg',
  },
  {
    id: 28,
    title: 'Gratitude for the contribution given in the club',
    issuer: 'SH.F. "Kosovari"',
    description:
      'Recognized by my football club for more than a decade of loyalty, dedication, and contribution to the team (2010-2022). This long-term commitment reflects my belief in giving my best to every team I am part of. Whether on the football field or in software development, I value commitment, consistency, and helping others succeed. I bring the same mindset to coding by actively supporting teammates, sharing solutions, and working collaboratively to overcome challenges and deliver high-quality results. I believe that collective success is always more meaningful than individual achievement.',
    image: '/certificates/28.jpeg',
  },
]

export const CertificatesSection: FC = () => {
  const [selected, setSelected] = useState<Certificate | null>(null)
  const [visible, setVisible] = useState(false)

  const openModal = (cert: Certificate) => {
    setSelected(cert)
    requestAnimationFrame(() => {
      setVisible(true)
    })
  }

  const closeModal = () => {
    setVisible(false)
    setTimeout(() => setSelected(null), 350)
  }

  // Prevent background scroll while modal is open
  useEffect(() => {
    if (!selected) return
    const prevent = (e: Event) => e.preventDefault()
    document.addEventListener('wheel', prevent, { passive: false })
    document.addEventListener('touchmove', prevent, { passive: false })
    return () => {
      document.removeEventListener('wheel', prevent)
      document.removeEventListener('touchmove', prevent)
    }
  }, [selected])

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (selected) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selected])

  return (
    <div style={{ maxWidth: '960px', margin: '0 auto' }}>
      {/* Sub-header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '2rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <i className="fa-solid fa-award" style={{ color: 'var(--yellow)', fontSize: '1.1rem' }}></i>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          {CERTIFICATES.length} Verified Credentials
        </span>
      </div>

      {/* Certificate grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {CERTIFICATES.map((cert) => (
          <div
            key={cert.id}
            onClick={() => openModal(cert)}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              overflow: 'hidden',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              cursor: 'pointer',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,255,136,0.3)'
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.4), 0 0 20px rgba(0,255,136,0.06)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Image */}
            <div
              style={{
                width: '100%',
                aspectRatio: '16 / 9',
                overflow: 'hidden',
                background: 'var(--bg)',
                position: 'relative',
              }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.7) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Info */}
            <div
              style={{
                padding: '1rem 1.15rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  lineHeight: 1.3,
                }}
              >
                {cert.title}
              </h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i
                  className="fa-solid fa-building-columns"
                  style={{ color: 'var(--muted)', fontSize: '0.65rem' }}
                ></i>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    color: 'var(--cyan)',
                    opacity: 0.8,
                  }}
                >
                  {cert.issuer}
                </span>
              </div>
              <span
                style={{
                  display: 'inline-block',
                  marginTop: '4px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--green)',
                  padding: '3px 8px',
                  border: '1px solid rgba(0,255,136,0.2)',
                  borderRadius: '4px',
                  background: 'rgba(0,255,136,0.04)',
                  alignSelf: 'flex-start',
                }}
              >
                <i className="fa-solid fa-check-circle" style={{ marginRight: '4px' }}></i>
                VERIFIED
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== */}
      {/* FULL-SCREEN MODAL   */}
      {/* ==================== */}
      {selected && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal()
          }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            overflow: 'auto',
            background: visible ? 'rgba(4, 4, 10, 0.88)' : 'rgba(4, 4, 10, 0)',
            backdropFilter: visible ? 'blur(16px) saturate(120%)' : 'blur(0px) saturate(100%)',
            WebkitBackdropFilter: visible ? 'blur(16px) saturate(120%)' : 'blur(0px) saturate(100%)',
            transition: 'background 0.35s ease, backdrop-filter 0.35s ease, -webkit-backdrop-filter 0.35s ease',
          }}
        >
          {/* Modal card */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              maxWidth: '1000px',
              width: '100%',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              overflow: 'hidden',
              position: 'relative',
              alignItems: 'stretch',
              boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.03) inset',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
              transition: 'opacity 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
            className="modal-content"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                zIndex: 2,
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                background: 'rgba(10,10,18,0.85)',
                border: '1px solid var(--border)',
                color: 'var(--muted)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.25s',
                backdropFilter: 'blur(4px)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--pink)'
                e.currentTarget.style.color = 'var(--pink)'
                e.currentTarget.style.background = 'rgba(255,45,107,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--muted)'
                e.currentTarget.style.background = 'rgba(10,10,18,0.85)'
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>

            {/* Image side */}
            <div
              style={{
                flex: '0 0 55%',
                position: 'relative',
                background: 'var(--bg)',
                minHeight: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={selected.image}
                alt={selected.title}
                style={{
                  width: '100%',
                  aspectRatio: '16 / 9',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '25%',
                  background:
                    'linear-gradient(180deg, transparent 0%, rgba(10,10,15,0.6) 100%)',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Info side */}
            <div
              style={{
                flex: '1 1 45%',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '0.5rem',
                minWidth: 0,
                overflow: 'hidden',
              }}
            >
              {/* Issuer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <i
                  className="fa-solid fa-building-columns"
                  style={{ color: 'var(--yellow)', fontSize: '0.65rem' }}
                ></i>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--yellow)',
                    opacity: 0.9,
                    letterSpacing: '0.06em',
                  }}
                >
                  {selected.issuer}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {selected.title}
              </h3>

              {/* Gradient divider */}
              <div
                style={{
                  width: '36px',
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--green), var(--cyan))',
                  borderRadius: '1px',
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  lineHeight: 1.65,
                  color: 'var(--muted)',
                  margin: 0,
                }}
              >
                {selected.description}
              </p>

              {/* Footer row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '0.25rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    color: 'var(--green)',
                    padding: '4px 10px',
                    border: '1px solid rgba(0,255,136,0.25)',
                    borderRadius: '5px',
                    background: 'rgba(0,255,136,0.04)',
                  }}
                >
                  <i className="fa-solid fa-check-circle"></i>
                  VERIFIED
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    color: '#444',
                  }}
                >
                  ID: CRT-{String(selected.id).padStart(4, '0')}
                </span>
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 700px) {
              .modal-content {
                flex-direction: column !important;
              }
            }
          `}</style>
        </div>
      )}
    </div>
  )
}