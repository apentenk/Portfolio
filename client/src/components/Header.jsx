
export default function Header() {
  return (
    <header class="navbar bg-slate-950 bg-opacity-40 text-primary fixed top-0 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-5xl" href="/"><img className="h-full" src="logo_bright.png"/>Kwasi</a>
      </div>
      <div class="navbar-end">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden text-2xl">
            Menu
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-slate-950 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
            <li><a className="text-2xl" href="#skills">Skills</a></li>
            <li><a className="text-2xl" href="#education">Education</a></li>
            <li><a className="text-2xl" href="#experience">Experience</a></li>
            <li><a className="text-2xl" href="#projects">Projects</a></li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a className="text-2xl" href="#skills">Skills</a></li>
          <li><a className="text-2xl" href="#education">Education</a></li>
          <li><a className="text-2xl" href="#experience">Experience</a></li>
          <li><a className="text-2xl" href="#projects">Projects</a></li>
        </ul>
      </div>
    </header>

  );
}