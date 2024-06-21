import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">ABS Design</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Pegamut ota ogun state, ABS Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    ABS Design<br />
                    Block A plot 1<br />
                    Pegamut estate ota<br />
                    <a href="tel:234">+2348140806540</a>
                </address>
                <br />
                <p>Owner: Dan Davidson</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public