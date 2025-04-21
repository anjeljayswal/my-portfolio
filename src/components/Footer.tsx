const Footer = () => {
    return (
      <footer className="bg-card-light dark:bg-card-dark py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-text-light dark:text-text-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          <p className="text-text-light dark:text-text-dark">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;