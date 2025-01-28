import { type SchemaTypeDefinition } from 'sanity';
import cars from "./cars"
import userOrder from './userOrder';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [cars,userOrder],
}
