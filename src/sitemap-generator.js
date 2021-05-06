require("babel-register")({
  presets: ["es2015", "react"]
});

// "npm run sitemap && npm run build" DOESN'T work with hashrouter
 
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://www.cpicamp.com")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();