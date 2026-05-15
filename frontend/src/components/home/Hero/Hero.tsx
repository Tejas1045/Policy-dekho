import './Hero.css'
import SelectorCard from '../SelectorCard'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-blob-1"></div>
            <div className="hero-blob-2"></div>
            <div className="hero-blob-3"></div>

            <div className="hero-badge">
                <div className="hero-badge-dot"></div>
                <span>AI-powered policy recommendations</span>
            </div>

            <h1 className="hero-title">
                Insurance that<br/><em>actually</em> understands <span className="warm">you</span>
            </h1>

            <p className="hero-subtitle">
                Compare 50+ plans from India&apos;s top insurers. Get an AI recommendation tailored to your vehicle, city, and driving habits — in seconds.
            </p>
            <SelectorCard/>
        </section>
    )
}

export default Hero