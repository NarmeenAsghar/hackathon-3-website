import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import hero from './hero'
import toppicks from './toppicks'
import newsofa from './newsofa'
import blogsection from './blogsection'
import instagram from './instagram'
import about from './about'



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, hero, toppicks, newsofa, blogsection, instagram, about],
}
