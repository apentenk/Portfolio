
export default function Header({ clickHandler }) {
  return (
    <header className="navbar bg-slate-950 bg-opacity-40 text-primary fixed top-0 z-50" id="header">
      <div className="flex-1">
        <a className="btn btn-ghost text-5xl" href="/"><img className="h-full" src="logo_bright.png"/>Kwasi</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-secondary">
          <li><a className="text-2xl" href="#skills">Skills</a></li>
          <li><a className="text-2xl" href="#education">Education</a></li>
          <li><a className="text-2xl" href="#experience">Experience</a></li>
          <li><a className="text-2xl" href="#projects">Projects</a></li>
        </ul>
      </div>
    </header>
  );
}