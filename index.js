const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postContainer = document.getElementById('post');

for (let i = 0; i < posts.length; i++) {
    postContainer.innerHTML += `
        <div class="post">
            <section class="post-header">
                <img src="${posts[i].avatar}" alt="${posts[i].name}">
                <div>
                    <h1>${posts[i].name}</h1>
                    <p>${posts[i].location}</p>
                </div>
            </section>
            <section class="post-photo">
                <img src="${posts[i].post}" alt="Post by ${posts[i].name}">
            </section>
            <section class="icons"> 
                <img class="like" src="images/icon-heart.png" alt="Like">
                <img class="comment" src="images/icon-comment.png" alt="Comment">
                <img class="dm" src="images/icon-dm.png" alt="Direct Message">
            </section>
            <section class="likes-count">
                <p><span class="likes-number">${posts[i].likes}</span> likes</p>
            </section>
            <section class="comments">
                <p><strong>${posts[i].username}:</strong> ${posts[i].comment}</p>
            </section>
        </div>
    `;
}

// Add event listeners to all like buttons
let likeButtons = document.querySelectorAll('.like');

likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('dblclick', function () {
        // Find the closest .post container
        const postElement = likeButton.closest('.post');
        // Find the likes-number element inside this specific post
        const likesCount = postElement.querySelector('.likes-number');
        // Increment the likes count
        let currentCount = parseInt(likesCount.textContent);
        likesCount.textContent = currentCount + 1;
    });
});