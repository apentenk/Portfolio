export default function About() {
    return (
        <section id="hero" className="hero min-h-screen bg-base-100">
            <div className="hero-overlay bg-base-100 bg-opacity-75"></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img class="mask mask-circle" src="selfie.png" />
                </div>
                <div className="max-w-md">
                    <h1 className="mb-5 text-7xl font-bold text-primary">Kwasi Apenteng</h1>
                    <p className="mb-5 text-3xl text-secondary">Web Developer - Software Developer</p>
                </div>
            </div>
        </section>
    );
}