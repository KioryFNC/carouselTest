import { Container } from "./styles";
import { TagConfig } from "../TagConfig";

export function Note ({ data, ...rest}) {
  return(
    <Container>
      <h1>{data.title}</h1>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <TagConfig key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}