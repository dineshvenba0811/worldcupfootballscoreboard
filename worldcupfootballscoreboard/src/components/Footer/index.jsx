import classes from "./footer.module.scss";
import packageJson from '../../../package.json';

/**
 * Footer component renders the footer part of the application which includes linkedin profile
 * and github profile link.
 **/
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className={classes.footer} data-cy="footer">
        <ul>
          <li className={classes.footerLinks}>
            <a
                href="https://www.linkedin.com/in/dineshkumarchandrasekar081094/"
                target="_blank"
                rel="noopener noreferrer"
                data-cy="linkedinLink"
            >
              LinkedIn
            </a>{" "}
            &bull;{" "}
            <a
                href="https://github.com/dineshvenba0811"
                target="_blank"
                rel="noopener noreferrer"
                data-cy="githubLink"
            >
              github
            </a>
          </li>
          <li className={classes.footerCopyrights}>
            © {packageJson.author} {currentYear}. All rights reserved.
          </li>
          <li>
            <div className={classes.version}>v.{packageJson.version}</div>
          </li>
        </ul>
      </footer>
  );
};
export default Footer;
