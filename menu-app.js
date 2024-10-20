const menu = [
  {
    id: 1,
    title: "Shakshuka ",
    category: "breakfast",
    price: 15.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTIrSe1AQHRSTNSPSmjfGmQS-NGuubNBucg&s",
    desc: `Eggs with tomatoes, green pepper, and olive oil.`,
    rating: "★★★☆☆",
  },
  {
    id: 2,
    title: "Hummus ",
    category: "breakfast",
    price: 5.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg32Pf3GNKlXOyUYTJAQmOjef_Rg8HqtGETA&s",
    desc: `Boiled chickpeas with tahini, olive oil, and green pepper.`,
    rating: "★★★★☆",
  },
  {
    id: 3,
    title: "Lentil Soup",
    category: "soup",
    price: 7.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvm43ZzSy2xq0hxRJbJZiPPV41kC6fmiNgA&s",
    desc: `Lentil Soup`,
    rating: "★★★☆☆",
  },
  {
    id: 4,
    title: "Orzo Vegetable Soup",
    category: "soup",
    price: 7.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTukCpcaG--DyohVEa7ngZEgjTQTIfjy0xXiQ&s",
    desc: `Orzo Vegetable Soup`,
    rating: "★★★★☆",
  },
  {
    id: 5,
    title: "Maqluba ",
    category: "lunch",
    price: 50.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSn2pAuiprQzHPoxh-7yaxRZT3ZhdB7KS1w&s",
    desc: `Chicken with eggplant, potatoes, cauliflower, rice with nuts, and salad. `,
    rating: "★★★★★",
  },
  {
    id: 6,
    title: "Mandi ",
    category: "lunch",
    price: 45.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTPkP9hlxLVoUw7yxsONGbXh0GFydNcxGsg&s",
    desc: `Chicken with Palestinian spiced rice with nuts and salad.`,
    rating: "★★★☆☆",
  },
  {
    id: 7,
    title: "Fattah ",
    category: "lunch",
    price: 45.00,
    img: "https://i.ytimg.com/vi/1Rtf_uCNCTc/mqdefault.jpg",
    desc: `Palestinian bread with white rice and chicken with nuts.`,
    rating: "★★★★☆",
  },
  {
    id: 8,
    title: "Hummus Fattah ",
    category: "lunch",
    price: 40.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KysJeuSrlTeV2KtilJFlyG-vIu95K1HtjA&s",
    desc: `Hummus with tahini, minced meat, and bread.`,
    rating: "★★★★☆",
  }, {
    id: 9,
    title: "Musakhan  ",
    category: "lunch",
    price: 55.00,
    img: "https://img.youm7.com/ArticleImgs/2023/10/18/144157-%D8%A7%D9%84%D9%85%D8%B3%D8%AE%D9%86-%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A.jpg",
    desc: `Chicken with olive oil, onions, sumac, Arabic bread, and nuts.`,
    rating: "★★★★★",
  }, {
    id: 10,
    title: "Maftoul  ",
    category: "lunch",
    price: 50.00,
    img: "https://alwakaai.com/assets/2024-02-07/images/539807_4_1707288380.jpg",
    desc: `Maftoul with pumpkin, potatoes, carrots, onions, tomatoes, and nuts.`,
    rating: "★★★★☆",
  },
  {
    id: 11,
    title: "Mutabbal Eggplant ",
    category: "breakfast",
    price: 8.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jhTr-2YAyX5JHoZ5cU1a1vvbSvFcjhtuvw&s",
    desc: `Grilled eggplant with tahini and green pepper.`,
    rating: "★★★★☆",
  }, {
    id: 12,
    title: "Foul  ",
    category: "breakfast",
    price: 5.00,
    img: "https://media.gemini.media/img/Original/2023/4/19/2023_4_19_20_30_47_463.jpg",
    desc: `Boiled fava beans with green pepper, lemon, and olive oil.`,
    rating: "★★★★☆",
  }, {
    id: 13,
    title: "Falafel  ",
    category: "breakfast",
    price: 8.00,
    img: "https://cdnimg.royanews.tv/imageserv/Size728Q100/news/20220613/UEAVF1BMwYWsEHgzdMd08zce5LmzxR0fTBvTf3Av.png",
    desc: `Chickpeas and fava beans with onions and parsley.`,
    rating: "★★★★☆",
  }, {
    id: 14,
    title: "French Fries ",
    category: "breakfast",
    price: 5.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO4r99zSc3H7obussA2XGNDOg_P8siyTj6Xgs0595BUJ5RnaECQQWcxlGVTpxTGLg6RHI&usqp=CAU",
    desc: `Fried potato slices with any sous you choose.`,
    rating: "★★★★☆",
  },
  {
    id: 15,
    title: "Chicken Mushroom Soup",
    category: "soup",
    price: 10.00,
    img: "https://www.atyabtabkha.com/uploads/sites/2/2021/10/cda4fab357b13d6057c83c57fde81b90c5d352b3.jpg",
    desc: `Chicken Mushroom Soup`,
    rating: "★★★★☆",
  }, {
    id: 16,
    title: "Freekeh Soup ",
    category: "soup",
    price: 7.00,
    img: "https://img-global.cpcdn.com/recipes/8a6c86a3283dd8bb/680x482cq70/%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9-%D9%84%D9%88%D8%B5%D9%81%D8%A9%D8%B4%D9%88%D8%B1%D8%A8%D8%A9-%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D9%83%D8%A9.jpg",
    desc: `Freekeh Soup `,
    rating: "★★★★☆",
  }, {
    id: 17,
    title: "Molokhia",
    category: "soup",
    price: 7.00,
    img: "https://modo3.com/thumbs/fit630x300/157948/1595747471/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%B7%D8%B4%D8%A9_%D8%A7%D9%84%D9%85%D9%84%D9%88%D8%AE%D9%8A%D8%A9.jpg",
    desc: `Molokhia`,
    rating: "★★★★☆",
  },
  {
    id: 18,
    title: "Nabulsi Kunafa",
    category: "desserts",
    price: 10.00,
    img: "https://newturkpost.com/image/923ccfbe-5312-4a73-804f-082cf642c269--XYCDG.jpg",
    desc: `Kunafa with cheese.`,
    rating: "★★★★☆",
  },
  {
    id: 19,
    title: "Istanbuli Kunafa",
    category: "desserts",
    price: 10.00,
    img: "https://media-files.tryordersystem.com/abualhous/1/diaEYtwsOkBhDWvcwYgZHWzjGJ5Mx0Ha.jpeg",
    desc: `Kunafa with cream.`,
    rating: "★★★☆☆"
  },
  {
    id: 20,
    title: "Arabic Kunafa",
    category: "desserts",
    price: 10.00,
    img: "https://i.ytimg.com/vi/ASTgJYePmNc/maxresdefault.jpg",
    desc: `Kunafa with nuts.`,
    rating: "★★★★☆",
  },
  {
    id: 21,
    title: "Namoura ",
    category: "desserts",
    price: 7.00,
    img: "https://i.ytimg.com/vi/NCVQ5CHtxwg/hqdefault.jpg",
    desc: `Namoura .`,
    rating: "★★★★☆",
  }, {
    id: 22,
    title: "Burma with Pistachios",
    category: "desserts",
    price: 15.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyB1SpC7Xq_1fNf2wB304Dat2FvU3UagcHw&s",
    desc: `Burma with Pistachios`,
    rating: "★★★★☆",
  }, {
    id: 23,
    title: "Qatayef",
    category: "desserts",
    price: 7.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByg3tjqNzPyJGMFjescAl91PdqwLfT4J8cQ&s",
    desc: `Qatayef.`,
    rating: "★★★★☆",
  },
  {
    id: 24,
    title: "Strawberry Milkshake ",
    category: "Drinks",
    price: 10.00,
    img: "https://png.pngtree.com/thumb_back/fw800/background/20240418/pngtree-strawberry-milkshake-in-the-glass-jar-on-black-slate-background-image_15664371.jpg",
    desc: `Milk, natural strawberries, and vanilla ice cream.`,
    rating: "★★★★★",
  },
  {
    id: 25,
    title: "Water",
    category: "Drinks",
    price: 3.00,
    img: "https://argaamplus.s3.amazonaws.com/02508581-bc92-48ef-8c44-a584d4042833.jpg",
    desc: `Refreshing coldwater. Tip: ask for a lemon wedge and a mint leaf .`,
    rating: "☆☆☆☆☆",
  },
  {
    id: 26,
    title: "Chocolate Milkshake",
    category: "Drinks",
    price: 10.00,
    img: "https://png.pngtree.com/thumb_back/fw800/background/20240328/pngtree-iced-chocolate-milkshake-drink-image_15645252.jpg",
    desc: `Milk, chocolate, vanilla ice cream, and chocolate ice cream.`,
    rating: "☆☆☆☆☆",
  }, {
    id: 27,
    title: "Avocado Milkshake",
    category: "Drinks",
    price: 15.00,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYEYYyYvzNe9Mlsf-jMbMRpGA-ojj7LcqHQ&s",
    desc: `Avocado, banana, honey, and nuts.`,
    rating: "☆☆☆☆☆",
  }, {
    id: 28,
    title: "Orange Juice",
    category: "Drinks",
    price: 5.00,
    img: "https://static.webteb.net/images/content/tbl_articles_article_20874_64472056cb5-2b35-4913-8998-fdeeb28f3101.gif",
    desc: `Orange Juice`,
    rating: "☆☆☆☆☆",
  },
  {
    id: 29,
    title: "Ayran ",
    category: "Drinks",
    price: 5.00,
    img: "https://static.aljamila.com/styles/1100x732/public/2023-09/6E8E45D3-0C87-4F00-ADB8-3057FDDE3840.jpeg?h=82f92a78",
    desc: `Refreshing coldAyran with a mint leaf .`,
    rating: "☆☆☆☆☆",
  },
];


const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
  displayMenuButtons();
});

// Function to display menu items grouped by category
function displayMenuItem(menuItems) {
  const categories = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const displayMenu = Object.keys(categories).map(category => {
    return `<section id="${category}" class="section">
      <h2>${category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      ${categories[category].map(item => {
      return `<article class="menu-item">
          <img src=${item.img} alt="menu item" class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}    
            </p>
          </div>
        </article>`;
    }).join('')}
    </section>`;
  }).join('');

  sectionCenter.innerHTML = displayMenu;
}

// Function to display category buttons
function displayMenuButtons() {
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["all"]);

  const categoryBtns = categories.reduce((acc, category) => {
    acc += `<button type="button" class="filter-btn" data-id=${category}>
      ${category.charAt(0).toUpperCase() + category.slice(1)}
    </button>` ;
    return acc ;
  }, '');

  btnContainer.innerHTML = categoryBtns;

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      const category = btn.dataset.id;
      scrollToSection(category);
    });
  });
}

// Function to scroll to a specific section
function scrollToSection(sectionId) {
  if (sectionId === "all") {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}



































































/*
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
  displayMenuButtons();
});

function displayMenuItem(menuItem) {
  let displayMenu=menuItem.map(function (item){
 return `<article class="menu-item">
 <img src=${item.img} alt="menu item" class="photo" />
 <div class="item-info">
   <header>
     <h4>${item.title}</h4>
     <h4 class="price">${item.price}</h4>
   </header>
   <p class="item-text">
   ${item.desc}
   </p>
 </div>
</article>
 `
  });
  sectionCenter.innerHTML=displayMenu.join('');

};



function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);
};
*/
