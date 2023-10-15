import { navigationConstants } from "../constants";

function NavTabs({ currentPage, handlePageChange }) {
  const getClasses = (navigationString) => {
    // Dont repeat yourself (DRY)
    // This function is easier to refactor than going through every element and making an adjustment.
    // Also every class is gonna have nav-link regardless of active or not, so this is better than repeating yourself in the ternary.

    let navTabClass = "nav-link"; // We use "let" because we might reassign it later.
    if (navigationString === currentPage) navTabClass += " active";
    return navTabClass;

    // Notice the empty space(white-space character) " active". This is because className takes a string, and
    // if we forget the space it would look return ass "nav-linkactive"

    // Alternatively you can use the next 3 lines to do the same thing.

    // const navTabClass = ["nav-link"]; Notice how I use const here because I am pushing a value into the array, as opposed to reassigning it like I am in the above example.
    // if (navigationString === currentPage) navTabClass.push("active");
    // return navTabClass.join(" ");

    // The benefit to this one is that you dont have to worry about the empty space before the class name.
    // join() is a function that the ARRAY object(everything in Javascript is an object) has (like forEach && map)
    // that takes all the elements in the array and returns a string, with the value you pass (in this case a white-space character)
    //  as the argument between each element. ["nav-link", "active"].join(" ") returns "nav-link active"

    // One more example that you might encounter is these next two lines:
    // const isActive = Boolean(navigationString === currentPage);   // Can be typed without the Boolean() but were trying to be fancy here
    // return `nav-link ${isActive ? "active" : ""}`;

    // Overall any of these is much better than:

    // currentPage === 'about' ? // I explain why not to hardcode values in the constants/index.js file (Once again DRY)
    // "nav-link active" :
    // "nav-link"
    // Doing this for every tab will drive you crazy when you refactor.
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange(navigationConstants.about)}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={getClasses(navigationConstants.about)}
        >
          About me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange(navigationConstants.resume)}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={getClasses(navigationConstants.resume)}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange(navigationConstants.portfolio)}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={getClasses(navigationConstants.portfolio)}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange(navigationConstants.contact)}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={getClasses(navigationConstants.contact)}
        >
          Contact
        </a>
      </li>
      <li className="nav-item name">Alexandra Zykova</li>
    </ul>
  );
}

export default NavTabs;
