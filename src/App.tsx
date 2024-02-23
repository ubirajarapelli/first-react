import { useState } from "react";

function App() {
  const [showList, setShowList] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const fruits = [
    { id: 1, name: "Manga", value: 10 },
    { id: 2, name: "Uva", value: 30 },
    { id: 3, name: "Abacaxi", value: 8 },
  ];

  const handleClick = () => {
    setShowList(!showList);
  };

  const handleClickLoad = () => {
    setIsLoading(true);

    setTimeout(() => {
      setShowList(true);
      setIsLoading(false);
    }, 2200);
  };

  // VARIAVEL ? VERDADEIRA : FALSA

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setPassword( event.target.value );
    // Desestruturação JS
    const { value } = event.target;

    if (value.length > 3) {
      setIsValid(true);
      return;
    }

    setIsValid(false);
  };

  return (
    <>
      <button onClick={handleClick}>Carregar Lista</button>
      <button onClick={handleClickLoad}>Carregar outra lista</button>
      {showList && (
        <ul>
          {fruits.reverse().map((fruit, index) => (
            <li key={index}>
              {fruit.name} - {fruit.value}
            </li>
          ))}
        </ul>
      )}

      {isLoading ? (
        <p>Carregando</p>
      ) : (
        showList && (
          <ul>
            {fruits.reverse().map((fruit, index) => (
              <li key={index}>
                {fruit.name} - {fruit.value}
              </li>
            ))}
          </ul>
        )
      )}

      {!isLoading ? (
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>
              {fruit.name} - {fruit.value}
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando</p>
      )}

      <label htmlFor="nome">Nome</label>
      <input type="text" name="nome" onChange={(e) => handleChange(e)} />
      <button disabled={!isValid}>Salvar</button>
    </>
  );
}

export default App;
