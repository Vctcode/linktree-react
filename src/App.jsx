import { useState } from 'react'

// Components
import ProfileSection from './components/ProfileSection/ProfileSection'
import Links from './components/Links/Links'
import Socials from './components/Socials/Socials'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)
  const slackUsername = "vct-code"

  return (
    <div className="App">
      <ProfileSection />
      <div>
        <Links id="" link="https://twitter.com/vic_oderinde" text="Twitter Link" subtext="" />

        <Links id="btn_zuri" link="https://training.zuri.team" text="Zuri Team" subtext="" />

        <Links id="books" link="https://books.zuri.team" text="Zuri Books" subtext="Follow this link to get amazing books about design and coding" />

        <Links id="book_python" link={`https://books.zuri.team/python-for-beginners?ref_id=${slackUsername}`} text="Python Books" subtext="Python made easy. Get this book at a rate of $5.00" />

        <Links id="pitch" link="https://background.zuri.team" text="Background Check for Coders" subtext="We help you verify coders with our background checks tool, its reliable and safe to use." />

        <Links id="book_design" link="https://books.zuri.team/design-rules" text="Design Books" subtext="Get a free Design book to enhance your design skill. Offered by Zuri." />

        <Socials />

      </div>

      <Footer />

    </div>
  )
}

export default App
