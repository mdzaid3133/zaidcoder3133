let accessKey = "93V1hA-TbUpRcY4HnjtyE063IwbyZWEwwz_YWeXnJ0Q"

let searchForm = document.getElementById("form_box")
let searchBox = document.getElementById("search_box")
let searchBtn = document.getElementById("search_btn")
let searchResult = document.getElementById("search_result")
let moreBtn = document.getElementById("more_btn")

let keyword = " ";
let page = 1;
async function searchImages(){
     keyword = searchBox.value;
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`


     const response = await fetch(url)
     const data = await response.json();
       const results = data.results;
       
      if(page === 1)
      {
        searchResult.innerHTML = " "
      }
        results.map((result) =>{
          const image = document.createElement("img")
          image.src = result.urls.small;
          const imgLink = document.createElement("a");
          imgLink.href = result.links.html;
          imgLink.target = "_blank";
          
          imgLink.appendChild(image);
          searchResult.appendChild(imgLink);
       })
      moreBtn.style.display = "block"
}

searchForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  page = 1;
  searchImages()
})
moreBtn.addEventListener("click",()=>{
  page++;
  searchImages()
})