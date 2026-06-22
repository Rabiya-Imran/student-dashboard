import { fakeArrayFetch } from "./localFetchTest.js";

async function listManipulation() {
  try {
    console.log("Download course catalog array...");
    const courseList = await fakeArrayFetch();
    console.log('Filtering catalog for "Coding" courses only...');
    const codingCourses = courseList.filter((course) => {
      return course.category === "Coding";
    });
    codingCourses.forEach((course) => {
      console.log(` ${course.title}`);
    });

    // .map() is a powerful array method that transforms each element in an array and returns a new array of the same length. It allows you to apply a function to every item in the array, creating a new array with the results. For example, if you wanted to create an array of just the course titles from the original courseList, you could use .map() like this:
    const courseTitles = courseList.map((course) => {
      return `COURSE NOTICE: ${course.title.toUpperCase()} [Category: ${course.category}]`;
    });

    console.log(courseTitles);
  } catch (error) {
    console.log("Error processing request: " + error);
  }
}
listManipulation();
