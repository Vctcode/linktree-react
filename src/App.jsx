import { useState } from 'react'

// Components
import ProfileSection from './components/ProfileSection/ProfileSection'
import Links from './components/Links/Links'
import Socials from './components/Socials/Socials'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProfileSection />
      <div>
        <Links id="" link="https://twitter.com/vic_oderinde" text="Twitter Link" />
        <Links id="btn_zuri" link="https://training.zuri.team" text="Zuri Team" />
        <Links id="books" link="https://books.zuri.team" text="Zuri Books" />
        <Links id="book_python" link="https://books.zuri.team/python-for-beginners?ref_id=victor" text="Python Books" />
        <Links id="pitch" link="https://background.zuri.team" text="Background Check for Coders" />
        <Links id="book_design" link="https://books.zuri.team/design-rules" text="Design Books" />
        <Socials />

      </div>

      <Footer />

    </div>
  )
}

export default App
