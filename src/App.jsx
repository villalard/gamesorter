import { useState, useEffect } from "react";

const query = `{
  portfolioItemCollection {
    items {
      title
      thumbnail {
        url
      }
      video {
        url
      }
    }
  }
}`;

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/x2f5bny453ec/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_CONTENTFUL_API_KEY,
        },
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        setPage(data.portfolioItemCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        <img src={page.thumbnail.url} className="App-logo" alt="logo" />
        <video src={page.video.url} controls></video>
        <p>{page.title}</p>
      </header>
    </div>
  );
}

export default App;