import { useState } from "react";

export const Form = () => {
  // const [state, setState] = useState()
  // const [variavel, funçãoQueAtualizaVariavel] = useState()
  const [name, setName] = useState<string>("Jorge");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = {
      nome: name,
      email: email,
      senha: password,
    };

    console.log(data);
  };

  return (
    <form>
      <label htmlFor="nome">Nome</label>
      <input id="nome" name="nome" value={name} onChange={handleNameChange} />
      <br />
      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      <br />
      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handlePassChange}
      />

      <br />
      <button onClick={handleClick}>salvar</button>
    </form>
  );
};
