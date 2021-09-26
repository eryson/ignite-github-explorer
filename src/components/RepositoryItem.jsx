export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "Default"}</strong>
      <p>{props.repository?.desription}</p>

      <a href={props.repository?.link}>Acessar Repositórios</a>
    </li>
  );
}
