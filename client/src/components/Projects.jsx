import { useState, useEffect } from "react";

export default function Projects() {
    const [projects, setProject] = useState([]);

    useEffect(() => {

        const getProject = async () => {
            let response = await fetch(`http://localhost:8888/api/projects/`);
            let data = await response.json();
            setProject(data);
        }

        getProject();
    }, []);

    return (
        <section id="projects" className="w-full min-h-screen flex items-center justify-center">
            <div className="flex items-center min-h-screen py-24 justify-between flex-col w-5/6">
                <h2 className="text-4xl font-bold">Projects</h2>
                <div className="flex w-full gap-x-4 bg-slate-950 bg-opacity-40 p-12 rounded-3xl items-center sm:flex-col lg:flex-row">
                    {
                        projects.map((project) => (
                            <>
                                <div className="card w-96 shadow-xl bg-slate-950 bg-opacity-40 pt-12 pb-6 flex-1">
                                    <figure className="project-img w-5/6 self-center rounded-xl">
                                        <img src={"project-img/" + project._id + ".png"} />
                                    </figure>
                                    <div className="card-body gap-y-4 pb-0">
                                        <div className="flex justify-between items-center">
                                            <h3 className="card-title text-xl">{project.name}</h3>
                                            <a className="btn btn-sm btn-primary" href={project.url}>Code &lt;/&gt;</a>
                                        </div>
                                        <p className="text-secondary text-l">{project.description}</p>
                                        <div className="card-actions justify-end flex-nowrap">
                                            {
                                                project.languages.map((language) => (
                                                    <div className="badge badge-primary">{language}</div>
                                                ))
                                            }
                                            {
                                                project.skills.map((skill) => (
                                                    <div className="badge badge-primary badge-outline">{skill}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}