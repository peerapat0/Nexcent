import Hero from '../components/Hero'
import Clients from '../components/Clients'
import Features from '../components/Features'
import Highlight from '../components/Highlight'
import Stats from '../components/Stats'
import HowTo from '../components/HowTo'
import Testimonial from '../components/Testimonial'
import Blog from '../components/Blog'
import CTA from '../components/CTA'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
export default function Home() {
return (
<main>
<Navbar />
<Hero />
<Clients />
<Features />
<Highlight />
<Stats />
<HowTo />
<Testimonial />
<Blog />
<CTA />
<Footer />

</main>
)
}
