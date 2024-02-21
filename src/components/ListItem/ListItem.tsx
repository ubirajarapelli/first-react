interface ListItemProps {
  name: string;
  value: number | string;
}

export const ListItem = ({ name, value }: ListItemProps) => {
  return (
    <p>
      {name} R$ {value}
    </p>
  );
};
