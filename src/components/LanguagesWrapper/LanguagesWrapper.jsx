import Button from "../Button/Button";
import Card from "../Card/Card";
import languages from "../../languages";
import { useState } from "react";
import style from "./LanguagesWrapper.module.css";

function LanguagesWrapper() {
  const [selectedLanguageId, setSelectedLanguageId] = useState();

  const selectedLanguage = languages.find(
    (language) => language.id === selectedLanguageId
  );

  return (
    <section className={style.container}>
      <ul className={style.languages}>
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
          title={selectedLanguage?.title ?? "Nessun linguaggio selezionato"}
          description={
            selectedLanguage?.description ??
            "Selezionare un linguaggio con i pulsanti"
          }
        />
      </div>
    </section>
  );
}

export default LanguagesWrapper;
