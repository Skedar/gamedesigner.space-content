import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'b14fa9b400a893ad8c2f07084332c2613bb2bedc', queries,  });
export default client;
  