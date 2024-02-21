import { Card } from "./components/Card/Card";
import { Button } from "./components/Button/Button";
import { ListItem } from "./components/ListItem/ListItem";

function App() {
  const fruits = [
    { id: 1, name: "Manga", value: 10 },
    { id: 2, name: "Uva", value: 30 },
    { id: 3, name: "Abacaxi", value: 8 },
  ];

  return (
    <>
      <Card>
        <h1>Hello World 1TDSPR</h1>
      </Card>
      <Card>
        <h2>React</h2>
      </Card>
      <div>
        <p>Texto</p>
        <Button>Abrir</Button>
        <Button variant="success">Adicionar</Button>
        <Button variant="danger">Remover</Button>
      </div>
      {fruits.map((fruit) => (
        <ListItem key={fruit.name} name={fruit.name} value={fruit.value} />
      ))}
    </>
  );
}

export default App;
