import Button from "../Button/Button";
import Card from "../Card/Card";
import languages from "../../languages";

function LanguagesWrapper() {
  return (
    <section className="main">
      <ul>
        {languages.map((language) => (
          <li>
            <Button label={language.title} />
          </li>
        ))}
      </ul>
      <div>
        <Card />
      </div>
    </section>
  );
}

export default LanguagesWrapper;
