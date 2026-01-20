// @ts-check
//
// The line above enables type checking for this file.

import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 */
export function isBoolean(value) {
  return typeof value === 'boolean';
}

/**
 * Checks if input is a finite number or bigint.
 */
export function isNumber(value) {
  if (typeof value === 'number') {
    return Number.isFinite(value);
  }
  if (typeof value === 'bigint') {
    return true;
  }
  return false;
}

/**
 * Checks if a value is an object (null is NOT an object here).
 */
export function isObject(value) {
  return typeof value === 'object' && value !== null;
}

/**
 * Checks if a value is a numeric string (only integers, optional minus).
 */
export function isNumericString(value) {
  if (typeof value !== 'string') return false;
  return /^-?\d+$/.test(value);
}

/**
 * Checks if an object is an instance of ElectronicDevice or its children.
 */
export function isElectronic(object) {
  return object instanceof ElectronicDevice;
}

/**
 * Checks if a value is a non-empty array.
 */
export function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

/**
 * Checks if a value is an empty array.
 */
export function isEmptyArray(value) {
  return Array.isArray(value) && value.length === 0;
}

/**
 * Checks if a value has a "type" property or method.
 */
export function hasType(object) {
  return 'type' in object?true:false;
}


/**
 * Throws an error if an object is missing an "id" property.
 */
export function assertHasId(object) {
  if('id' in object){
    
  }
  else{
    throw Error();
  }
}

/**
 * Checks if a value has an OWN "id" property (not inherited, not getter).
 */
export function hasIdProperty(object) {
   return Object.hasOwn(object,'id');

}

/**
 * Checks if a value has a defined "type" property.
 */
export function hasDefinedType(object) {
  return Object.hasOwn(object,'type') && object.type!==undefined ?true:false;
}
