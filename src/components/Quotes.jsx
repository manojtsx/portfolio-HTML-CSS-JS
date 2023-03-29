import React, { useEffect, useState } from "react";

const Quotes = () => {

  //api handling for the quotes
  const [newQuotes, setNewQuotes] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const apiLink = "https://type.fit/api/quotes";
  useEffect(() => {
    async function fetchData() {
      try {
        let api = await fetch(apiLink);
        let realData = await api.json();
        let rnum = Math.floor(Math.random() * 100);
        setNewQuotes(realData[rnum].text);
        if (realData[rnum].author == null) {
          setNewAuthor("By unknown");
        } else {
          setNewAuthor(`By ${realData[rnum].author}`);
        }
      } catch (err) {
        setNewQuotes("Error occured..");
      }
    }
    fetchData();
  }, []);

  const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${newQuotes}`;
    window.open(tweetPost);
  };
  return (
    <>
      {/* <!--Quotse Section Start--> */}
      <section className="about" id="about">
        <div className="content">
          <div className="title">
            <span>Quotes</span>
          </div>
          <div className="text">
            <div className="quotes" id="quotes">
              {newQuotes}
            </div>
            <div className="author" id="author">
              {newAuthor}
            </div>
            <div className="tweetbtn" id="tweetbtn" onClick={tweetNow}>
              Tweet
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Quotes;
