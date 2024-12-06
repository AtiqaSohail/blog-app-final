//postApp
var backgroundImg;
function post(){
    var title = document.getElementById("title")
    var description  = document.getElementById("description")
    
if(title.value.trim() && description.value.trim()){
    var post = document.getElementById("post")
    post.innerHTML+=`
     <div class="card p-2 mb-2">
                    <div class="card-header">
                      <em>@post</em>
                    </div>
                    <div style="background-image: url(${backgroundImg})" class="card-body">
                      <blockquote class="blockquote mb-0">
                        <p>${title.value}</p>
                        <footer class="blockquote-footer">${description.value}</footer>
                      </blockquote>
                    </div>
                  </div>
    `
    title.value =""
    description.value = ""
  }else{
    Swal.fire({
      title: "Empty Post",
      text: "Can't publish post without Title or Description",
      icon: "question"
    });  }
}
function selectImg(src){
  backgroundImg =src
  var bgImg = document.getElementsByClassName('bg-img')
  // for(var i=0; i<bgImg.length; i++){
  //   bgImg[i].classList.remove('selectedImg')
  // } 
  for(var i=0; i<bgImg.length; i++){
    bgImg[i].className ="bg-img"
  } 
  event.target.className +=" selectedImg"
}
// Function to filter posts based on search input and selected category
function filterPosts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase(); // Search term
    const selectedCategory = document.getElementById('category').value; // Selected category
    const posts = document.querySelectorAll('.post-card'); // All posts

    posts.forEach(post => {
        const title = post.querySelector('.post-title').textContent.toLowerCase();
        const description = post.querySelector('.post-description').textContent.toLowerCase();
        const category = post.querySelector('.post-category').textContent;

        // Check if the post matches the search term and the selected category
        const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
        const matchesCategory = selectedCategory === 'All' || category === selectedCategory;

        if (matchesSearch && matchesCategory) {
            post.style.display = 'block'; // Show post
        } else {
            post.style.display = 'none'; // Hide post
        }
    });
}
