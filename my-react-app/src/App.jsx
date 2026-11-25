import ProfileCard from './components/ProfileCard'


function App() {
  return (
     <div className="app">

      <h1 className="main-title">
        Profile Card Gallery
      </h1>

      <div className="profile-container">

        <ProfileCard
          image="/image/profile1.jpg"
          name="Sujeeth Kumar"
          role="Student"
          description="I am a computer science student learning React and web development."
        />

        <ProfileCard
          image="/image/profile2.jpg"
          name="Arun Kumar"
          role="Web Developer"
          description="I enjoy creating websites using HTML, CSS and JavaScript."
        />

        <ProfileCard
          image="/image/profile3.jpg"
          name="sai"
          role="UI Designer"
          description="I design simple and beautiful user interfaces."
        />

      </div>

    </div>
  )
}
export default App
