// localFetchTest.js

// 1. This function SIMULATES a perfect, real-world server endpoint.
// It uses a Promise to fake a network delay and returns a structured data object.
// export function fakeNetworkFetch() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             // This is exactly the kind of object structure a live API sends back
//             resolve({
//                 status: "success",
//                 data: {
//                     id: 101,
//                     title: "Mastering Asynchronous JavaScript",
//                     author: "Rabiya",
//                     lessonsCount: 12
//                 }
//             });
//         }, 1500); // 1.5 second network delay
//     });
// }

// 2. Your actual asynchronous workflow
// async function getCourseData() {
//     try {
//         console.log("📡 Simulating secure network request...");
        
//         // We await the fake network function just like we would await a real fetch()
//         const response = await fakeNetworkFetch();
        
//         console.log("✅ Data download complete!");
//         console.log("---------------------------------------");
        
//         // Your target practice: Pulling properties out of the data object
//         console.log(`📚 Course Title: ${response.data.title}`);
//         console.log(`✍️ Created By: ${response.data.author}`);
//         console.log(`📖 Total Lessons: ${response.data.lessonsCount}`);
        
//         console.log("---------------------------------------");

//     } catch (error) {
//         console.log("🚨 Crash detected:", error);
//     }
// }

// getCourseData();

// arrayManipulation.js

// 1. Simulating a server that returns an ARRAY of courses
export function fakeArrayFetch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "JavaScript Basics", category: "Coding" },
                { id: 2, title: "HTML & CSS Layouts", category: "Design" },
                { id: 3, title: "Node.js Backend Engine", category: "Coding" }
            ]);
        }, 1000);
    });
}
