import Contact from "../components/Contact";

const Footer = (props) => {
  return (
    <footer className={props.className}>
      <Contact location="footer" />
    </footer>
  );
};

export default Footer;
