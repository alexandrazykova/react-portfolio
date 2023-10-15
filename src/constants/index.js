export const navigationConstants = {
  about: "about",
  resume: "resume",
  portfolio: "portfolio",
  contact: "contact",
};

// Use this like: navigationConstants.about;

// If you ever need to repeat a value multiple times, consider using a variable.
// If you need to use it in multiple files, extract to its own file like this.
// Dont repeat yourself. (DRY). If you ever need to change the view state values for whatever reason (about => aboutMe, resume => russian word for resume),
// its alot easier to change it once here, then to change it in your PorfolioContainer and then also every Navtab.
// Also this prevents you from making mistakes, like mispelling a value by accident

// One day you will learn Typescript, or perhaps another language, and they offer enums.
// They would be used in the same way:

// const enum NavigationConstants {
//     ABOUT = "about",
//     RESUME = "resume",
//     PORTFOLIO = "portfolio",
//     CONTACT = "contact",
// }

// Which you would then use like: NavigationConstants.ABOUT
