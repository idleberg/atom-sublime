import { satisfyDependencies } from 'atom-satisfy-dependencies';
import meta from '../package.json';

export async function activate() {
    await satisfyDependencies(meta.name);
}
