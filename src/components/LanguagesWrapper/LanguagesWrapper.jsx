import Button from "../Button/Button";
import Card from "../Card/Card";
import languages from "../../languages";
import { useState } from "react";

function LanguagesWrapper() {
  const [selectedLanguageId, setSelectedLanguageId] = useState(1);

  return (
    <section className="main">
      <ul>
        {languages.map(({ id, title }) => (
          <li key={id}>
            <Button
              onClick={() => {
                setSelectedLanguageId;
              }}
              label={title}
            />
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
