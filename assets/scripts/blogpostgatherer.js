 // Wait for the DOM to fully load
 document.addEventListener("DOMContentLoaded", () => {
    // URL of the page to fetch the 'a' elements from
    const otherPageUrl = "blog.html"; // replace with the actual URL

    // Select the section where the elements will be appended
    const recentBlogpostsSection = document.getElementById("recent-blogposts");

    // Fetch the HTML from the other page
    fetch(otherPageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(htmlString => {
            // Parse the HTML string into a document
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, "text/html");

            // Select the first 3 'a' elements with the class 'posts' in the fetched document
            const postLinks = doc.querySelectorAll("a.post");
            const firstThreePosts = Array.from(postLinks).slice(0, 3);

            // Copy each element and its contents and append it to the 'recent-blogposts' section
            firstThreePosts.forEach(post => {
                const postCopy = post.cloneNode(true); // Clone the <a> element and all its child elements
                recentBlogpostsSection.appendChild(postCopy); // Append the copy to 'recent-blogposts'
            });
        })
        .catch(error => console.error("Error fetching the other page:", error));
});