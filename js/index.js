const blogs = document.querySelectorAll(".blog");
const btnViewMore = document.querySelector(".btn-view-more");

btnViewMore.addEventListener("click", () => {
  const blogsArr = [...blogs];
  let anyHidden = false;

  blogsArr.forEach((blog, index) => {
    if (index > 2) {
      blog.classList.toggle("hidden");

      if (blog.classList.contains("hidden")) {
        anyHidden = true;
      }
    }
  });

  btnViewMore.textContent = anyHidden ? "View More" : "View Less";
});
