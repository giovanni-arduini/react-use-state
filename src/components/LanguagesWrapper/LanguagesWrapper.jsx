import Button from "../Button/Button";
import Card from "../Card/Card";
import languages from "../../languages";
import { useState } from "react";

function LanguagesWrapper() {
  const [selectedLanguageId, setSelectedLanguageId] = useState(1);

  const selectedLanguage = languages.find(
    (language) => language.id === selectedLanguageId
  );

  return (
    <section className="main">
      <ul>
        {languages.map(({ id, title }) => (
          <li key={id}>
            <Button
              onClick={() => {
                setSelectedLanguageId(id);
              }}
              label={title}
            />
          </li>
        ))}
      </ul>
      <div>
        <Card
          title={selectedLanguage.title}
          description={selectedLanguage.description}
        />
      </div>
    </section>
  );
}

export default LanguagesWrapper;
