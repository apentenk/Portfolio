import { useState, useEffect } from "react";

export default function Educations() {
    const [educations, setEducation] = useState([]);
    const option = {
        year: 'numeric',
        month: 'long'
    }

    useEffect(() => {

        const getEducation = async () => {
            let response = await fetch(`http://localhost:8888/api/education/`);
            let data = await response.json();
            setEducation(data);
        }

        getEducation();
    }, []);

    return (
        <section id="education" className="w-full min-h-screen flex items-center justify-center">
            <div className="flex items-center min-h-screen py-24 justify-between flex-col gap-y-12  w-4/6">
                <h2 className="text-4xl font-bold">Education</h2>
                {
                    educations.map((education) => (
                        <div className="card card-side p-6 bg-base-100 shadow-xl w-full bg-slate-950 bg-opacity-40">
                            <figure className="education-img bg-slate-50 bg-opacity-10 rounded-3xl p-6">
                                <img src={"education-img/" + education._id + ".png"} />
                            </figure>
                            <div className="card-body gap-y-6">
                                <h2 className="card-title text-2xl font-bold">{education.cert}</h2>
                                <div className="flex text-secondary justify-between text-xl font-bold">
                                    <h3>{education.name}</h3>
                                    <h3>{new Date(education.enrol).toLocaleDateString(undefined, option)} - {new Date(education.grad).toLocaleDateString(undefined, option)}</h3>
                                </div>
                                <p className="text-secondary text-xl w-3/6">{education.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}