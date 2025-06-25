const articles = [
  {
    category: "Technology",
    title: "Revolutionizing Our Production Process",
    description:
      "Learn how our recent investment in new technology has revolutionized our production process, leading to improved efficiency and product quality.",
    avatar: "",
    name: "John Doe",
    date: "2022-08-15",
  },
  {
    category: "Expansion",
    title: "Expanding Our Service Network",
    description:
      "Discover how our expansion investment has allowed us to enhance our service network, providing better support and customer experience.",
    avatar: "",
    name: "Jane Smith",
    date: "2022-09-02",
  },
  {
    category: "Sustainability",
    title: "Sustainable Practices for a Greener Future",
    description:
      "Find out how our investment in sustainable practices is driving us towards a greener future, showcasing our commitment to environmental responsibility.",
    avatar: "",
    name: "Alex Johnson",
    date: "2022-09-20",
  },
];

const articlesListElement = document.getElementById("articles-list");

const createArticle = ({ category, title, description, avatar, name, date }) => {
  const article = document.createElement("article");
  article.className = "articles__item article-card";

  article.innerHTML = `
    <div class="article-card__cover-wrapper">
      <img
        src="./assets/images/article-cover.jpg"
        alt="Article cover"
        class="article-card__cover"
      />
    </div>
    <div class="article-card__content">
      <div class="article-card__category">${category}</div>
      <h3 class="article-card__title">${title}</h3>
      <p class="article-card__description">${description}</p>
      <div class="article-card__author author">
        <img
          src="${avatar || "./assets/images/no-avatar.png"}"
          alt="Author avatar"
          class="author__avatar"
        />
        <div class="author__info">
          <span class="author__name">${name}</span>
          <time datetime="${date}" class="author__date">${date}</time>
        </div>
      </div>
    </div>
  `;

  return article;
};

articles.forEach((articleData) => {
  const articleElement = createArticle(articleData);

  articlesListElement.appendChild(articleElement);
});
