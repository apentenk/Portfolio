import { useState, useEffect } from "react";

export default function Skills() {
    const [languages, setLanguage] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {

        const getLanguages = async () => {
            let response = await fetch(`http://localhost:10000/api/languages/`);
            let data = await response.json();
            setLanguage(data);
        }

        const getSkills = async () => {
            let response = await fetch(`http://localhost:10000/api/skills/`);
            let data = await response.json();
            setSkills(data);
        }

        getLanguages();
        getSkills();
    }, []);

    return (
        <section id="skills" className="w-full min-h-screen flex items-center justify-center bg-slate-950 bg-opacity-20">
            <div className="flex items-center min-h-screen pt-24 pb-12 justify-between flex-col  w-4/6">
                <h2 className="text-4xl font-bold">Skills</h2>
                <div className="flex w-full sm:flex-col lg:flex-row bg-slate-950 bg-opacity-20 p-8 rounded-3xl">
                    <div className="flex flex-col flex-1 gap-y-4">
                        <h3 className="text-2xl font-bold text-center">Language Proficiency</h3>
                        <div className="flex flex-col gap-y-10">
                            {
                                languages.map((language) => (
                                    <div className="flex justify-between flex-col items-center lg:flex-row lg:item-end">
                                        <div className="flex items-center gap-x-6 flex-col lg:flex-row">
                                            <div className="skill-image">
                                                <img src={"skill-icons/" + language._id + ".png"}/>
                                            </div>
                                            <h2 className="text-xl font-bold">{language.name}</h2>
                                        </div>
                                        <progress className="progress w-56 self-center progress-primary" value={language.level * 2} max={10}></progress>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="flex flex-col flex-1">
                        <h3 className="text-2xl font-bold text-center">Other Skills</h3>
                        <div className="flex-1 grid sm:grid-cols-3 md:grid-cols-3 items-center">
                            {
                                skills.map((skill) => (
                                    <div className="flex flex-col self-center flex-1 items-center ">
                                        <div className="skill-image flex items-center justify-center">
                                            <img src={"skill-icons/" + skill._id + ".png"} />
                                        </div>
                                        <h2 className="font-bold">{skill.name}</h2>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}