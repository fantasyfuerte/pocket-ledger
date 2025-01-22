function Footer() {
  return (
    <footer className="bg-backgroundSecondary rounded-lg shadow ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-primary/80 sm:text-center">
          © 2025{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline text-primary font-semibold"
          >
            PocketLedger™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-primary sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a
              href="https://github.com/fantasyfuerte/pocket-ledger"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Repo
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/fuerte.ts"
              target="_blank"
              className="hover:underline me-4 md:me-6"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
