import Reacr from "react";
import "./newsLetter.css";

const NewsLetter = () => {
  return (
    <section className="news-letter">
      <h1>با ما همراه شو</h1>
      <p>
        تا از<mark> تخفیف های ویژه</mark> ما باخبر شی
      </p>
      <div>
        <input type="email" placeholder="ایمیل ت رو وارد کن" />
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default NewsLetter;
