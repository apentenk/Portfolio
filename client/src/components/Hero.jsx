export default function Hero() {
    return (
        <section id="hero" className="hero min-h-screen bg-base-100">
            <div className="hero-overlay bg-base-100 bg-opacity-75"></div>
            <div className="hero-content flex-col justify-center items-center lg:flex-row-reverse">
                <div className="flex flex-col gap-y-3 items-center">
                    <img className="mask mask-circle w-5/6" src="selfie.png" />
                    <a className="link link-secondary" href="https://www.linkedin.com/in/apentengk/"><h2 className="text-2xl">Message Me on LinkedIn!</h2></a>
                </div>
                <div className="max-w-md">
                    <h1 className="mb-5 text-6xl font-bold text-primary">Kwasi Apenteng</h1>
                    <p className="mb-5 text-2xl text-secondary">Web Developer - Software Developer</p>
                </div>
            </div>
        </section>
    );
}