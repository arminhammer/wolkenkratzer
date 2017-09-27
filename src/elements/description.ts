import { IDescription } from '../types';

/**
 * Set the Description of a template
 * @param {*} content 
 */
export function Description(content: string): IDescription {
  if (!content) {
    throw new SyntaxError(`New Description must have content.`);
  }
  return { kind: 'Description', Content: content };
}
