
export default function Footer() {
  return (
    <>
      <a className="btn btn-lg btn-accent text-center fixed bottom-0 right-0 z-50 bg-opacity-60" href="#hero">Back To<br/> Top</a>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>Copyright © {new Date().getFullYear()} - All right reserved by Kwasi Apenteng</p>
        </aside>
      </footer>
    </>
  );
}