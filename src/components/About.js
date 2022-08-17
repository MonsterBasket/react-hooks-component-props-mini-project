/* eslint no-undef: "off"*/
function About({img = "https://via.placeholder.com/215", text}) {
    return (
      <aside className="About">
        <img src={img} alt="blog logo"/>
        <p>{text}</p>
      </aside>
    );
  }
  
  export default About;
  