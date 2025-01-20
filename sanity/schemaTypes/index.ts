import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import hero from './hero'
import table from './table'
import toppicks from './toppicks'
import newsofa from './newsofa'
import blogsection from './blogsection'
import instagram from './instagram'
import about from './about'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, hero, table, toppicks, newsofa, blogsection, instagram, about],
}
