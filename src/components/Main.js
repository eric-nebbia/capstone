import Hero from "./Hero"
import Highlights from "./Highlights"
import Testimonials from "./Testimonials"
import About from "./About"

function Main() {
    return (
    <main className="flex-box flex-row main-container" id="main">
        <div className="flex-column">
            <Hero></Hero>
            <Highlights></Highlights>
            <Testimonials></Testimonials>
            <About></About>
        </div>

    </main>
    )
}

export default Main