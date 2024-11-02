import axios from "axios";
import * as cheerio from "cheerio";

export async function crawlProduct(url) {
  if (!url || typeof url !== "string" || !url.startsWith("http")) {
    throw new Error(`Invalid URL: ${url}`);
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const title = $("#productTitle").text().trim() || "No title found";

    const price =
      $(".a-size-base.a-color-price").text().trim() ||
      $(".a-offscreen").first().text().trim();
    if (!price) {
      price = $(".a-price .a-offscreen").text().trim();
    }
    if (!price) {
      price = $(".a-section.a-spacing-micro .a-price").text().trim();
    }
    if (!price) {
      price = "No price found";
    }

    return { title, price, source: url };
  } catch (error) {
    console.error(`Error crawling product: ${error.message}`);
    throw error;
  }
}
