const setup_search_bar = () => {
  const search_icon = document.querySelector(".search-bar-icon");
  if (!search_icon) {
    return;
  }

  const search_bar_container = document.querySelector(".search-bar");
  if (!search_bar_container) {
    return;
  }

  const input_el = search_bar_container.querySelector("input");
  if (!input_el) {
    return;
  }

  let cached_data = null;
  let currentPromise = null;

  const get_data = async () => {
    if (cached_data) {
      return cached_data;
    }

    if (!currentPromise) {
      currentPromise = new Promise(async (resolve, reject) => {
        let response = await fetch("/rss.xml");
        const xml_data = new DOMParser().parseFromString(
          await response.text(),
          "text/xml",
        );

        cached_data = [];
        for (item of xml_data.getElementsByTagName("item")) {
          let title = item.querySelector("title").innerHTML;

          let description = new DOMParser().parseFromString(
            item.querySelector("description").innerHTML,
            "text/html",
          ).documentElement.textContent;

          let link = item.querySelector("link").innerHTML;
          let tags = (item.querySelector("tags") || {}).innerHTML || "";
          let search_string = `${title.toLocaleLowerCase()}${description.toLocaleLowerCase()}${tags.toLocaleLowerCase()}`;

          cached_data.push({
            title,
            description,
            link,
            tags,
            search_string,
            // TODO: use this
            pubDate: item.querySelector("pubDate").innerHTML,
          });
        }
        resolve(cached_data);
      });
    }

    return currentPromise;
  };

  const clear = () => {
    document.querySelectorAll(".results-list").forEach((p) => p.remove());
    document.querySelectorAll(".soj").forEach((p) => p.remove());
    search_bar_container.classList.remove("open");
  };

  const do_filter = async () => {
    let query = input_el.value.toLocaleLowerCase();
    let data = await get_data();
    let results = data.filter(
      (item) => item.search_string.indexOf(query) != -1,
    );

    clear();
    search_bar_container.classList.add("open");

    let results_div = document.createElement("div");
    results_div.classList.add("results-list");
    results_div.classList.add("posts-list");

    let soj = document.createElement("div");
    soj.classList.add("soj");
    soj.onclick = () => clear();
    document.body.appendChild(soj);

    if (results.length === 0) {
      let child = document.createElement("div");
      child.innerHTML = `<b>No results</b>`;
      results_div.appendChild(child);
    } else {
      for (let result of results) {
        let child = document.createElement("div");
        child.innerHTML = `<div class="post-item">
        <a href="${result.link}">
          <h2>${result.title}</h2>
        </a>
        <hr />
        <a href="${result.link}">
          <div class="summary">${result.description}</div>
        </a>
      </div>`;
        results_div.appendChild(child);
      }
    }

    search_bar_container.appendChild(results_div);
  };

  input_el.addEventListener("focus", async () => {
    await do_filter();
  });

  input_el.addEventListener("keyup", async () => {
    await do_filter();
  });

  search_icon.addEventListener("click", async () => {
    await do_filter();
    input_el.focus();
  });
};

setup_search_bar();
