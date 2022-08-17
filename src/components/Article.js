/* eslint no-undef: "off"*/
function Article({title, date = "January 1, 1970", preview, minutes}) {

  const coffeeIcons = Math.ceil(minutes/5)
  let coffee = "☕️".repeat(coffeeIcons);
  if (coffeeIcons >=6){
    coffee = "🍱".repeat(coffeeIcons/2);
  }
  
    return (
      <article className="Article">
        <h3>{title}</h3>
        <small>{date} &#8226; {coffee} {minutes} minute read</small>
        <p>{preview}</p>
      </article>
    );
  }
  
  export default Article;
  