<script>
  let newsPromise = getNews();
  async function getNews() {
    const apiKey = import.meta.env["PUBLIC_API_KEY"];
    let res = await fetch(
      "https://newsapi.org/v2/everything?q=Apple&from=2023-10-15&sortBy=popularity&apiKey=" +
        apiKey
    );
    let data = await res.json();
    return data.articles;
  }
</script>

{#await newsPromise}
  <p class="text-[#113946] text-4xl font-bold mt-6 text-center">
    loading ...🚀
  </p>
{:then news}
  <div class="flex flex-col align-middle items-center justify-center">
    <h1 class="text-4xl font-bold mt-6 text-[#113946]">News</h1>
    <p class="text-[#113946] mb-6 text-xl font-bold text-center">
      News from newsapi.org
    </p>
    <div class="flex flex-wrap gap-5 justify-center">
      {#each news as article}
        {#if article}
          <div
            class="max-w-xs max-h-max rounded overflow-hidden shadow-lg bg-[#EAD7BB]"
          >
            <img class="w-full" src={article.urlToImage} alt={article.title} />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-[#113946]">
                {article.title}
              </div>
              <p class="text-gray-700 text-base">
                {article.description}
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span
                class="inline-block bg-[#113946] text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
                >#{article.author}</span
              >
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
{/await}
