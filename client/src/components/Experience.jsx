import { useState, useEffect } from "react";

export default function Experiences() {
    const [experiences, setExperience] = useState([]);
    const option = {
        year: 'numeric',
        month: 'long'
    }

    useEffect(() => {

        const getExperience = async () => {
            let response = await fetch(`/api/experience/`);
            let data = await response.json();
            setExperience(data);
        }

        getExperience();
    }, []);

    return (
        <section id="experience" className="w-full min-h-screen flex items-center justify-center bg-slate-950 bg-opacity-20">
            <div className="flex items-center min-h-screen py-24 justify-between flex-col  w-4/6">
                <h2 className="text-4xl font-bold">Work Experience</h2>
                <div className="flex flex-1 items-center justify-center w-full">
                    {
                        experiences.map((experience) => (
                            <div className="card card-side  p-6 bg-base-100 shadow-xl w-full bg-slate-950 bg-opacity-30 items-center sm:flex-col-reverse lg:flex-row">
                                <div className="card-body gap-y-4">
                                    <h2 className="card-title text-2xl font-bold">{experience.position}</h2>
                                    <h2 className="card-title text-xl text-secondary font-bold">{experience.company}</h2>
                                    <div className="flex text-secondary justify-between text-l font-bold">
                                        <h2>{experience.location}</h2>
                                        <h3>{new Date(experience.start).toLocaleDateString(undefined, option)} - {new Date(experience.end).toLocaleDateString(undefined, option)}</h3>
                                    </div>
                                    <ul className="list-disc pl-6">
                                        {experience.description.map((descript) => (
                                            <li className="text-secondary text-l">{descript}</li>
                                        ))}
                                    </ul>
                                </div>
                                <figure className="experience-img bg-slate-50 bg-opacity-10 rounded-3xl p-6 sm:w-3/6">
                                    <img src={"experience-img/" + experience._id + ".png"} />
                                </figure>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}