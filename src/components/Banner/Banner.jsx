
const Banner = () => {
    return (<div
        className="hero md:p-32 rounded-2xl opacity-80 mb-10"
        style={{
            backgroundImage: "url(https://i.postimg.cc/h4VhQLk3/bg-img.jpg)",
        }}>
        <div className="hero-content text-center text-white opacity-100">
            <div className="space-y-5">
                <h3 className="md:text-6xl text-xl font-bold">Discover an exceptional cooking class tailored for you!</h3>
                <p className="md:text-xl">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex gap-5 justify-center">
                    <button className="btn btn-accent text-white">Explore Now</button>
                    <button className="btn btn-outline btn-accent text-white">Our Feedback</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;