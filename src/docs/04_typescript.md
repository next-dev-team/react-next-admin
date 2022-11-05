# Typescript tutorial Common use in ReactJS

```tsx
type LiteralUnion<T extends U, U> = T | (U & {})
type someProps = {
  color?: LiteralUnion<'a' | 'b', string>
}
// usage: color="red" or color="#000" it can assign type and string the same time

/**
 * interface: defined interface
 */
export interface IUser {
  name: string
  id: number
  gender: 'MALE' | 'FEMALE'
}

/**
 * type is like is new shorthand syntax for interface and it only a bit feature different
 */
type UserType = {
  name: string
  id?: number
  gender: 'MALE' | 'FEMALE'
}

type AdditionalUserType = {
  school: string
  grade: string
}

// usage:
export const userInfo: IUser = {
  gender: 'FEMALE',
  id: 1,
  name: 'Sila',
}

const getUserInfoFunc = () => userInfo

/**
 * Access to object property type
 *
 * -Ex: if we want to create UserName type we don't need to write type name:string again
 * just access to use existing property in base type
 */
export type UserName = IUser['name']

/**
 * extends: inherits the properties for other type
 * - using & sign to extends type like UserType extends AdditionalUserType...
 */
export type FullUserType = UserType &
  AdditionalUserType & {
    schoolId: string
  }

/**
 * Partial: convert all type to optional
 */

// ex: type will not required name and id
export const partialUser: Partial<UserType> = {
  gender: 'FEMALE',
}

/**
 * Required: convert all type to required
 * -Ex: all type will be required event will put optional in our base type like id in UserType
 */

export const requiredUser: Required<UserType> = {
  id: 1,
  name: 'sila',
  gender: 'MALE',
}

/**
 * Omit: remove property in type
 * - Ex: name is remove from UserType
 */
export const omitUserType: Omit<UserType, 'name'> = {
  gender: 'MALE',
  id: 1,
}

/**
 * Pick: select property in type
 * - Ex: name is remove from UserType
 */
export const pickUserType: Omit<UserType, 'name'> = {
  gender: 'MALE',
  id: 1,
}

/**
 * Exclude: remove property in type
 * - Ex: banana is remove from FruitType
 */
type FruitType = 'coffee' | 'banana'
// excludeFruit can't equal to 'banana'
export const excludeFruit: Exclude<FruitType, 'banana'> = 'coffee'

/**
 * ReturnType get inherited type from func
 *
 * -Ex: returnTypeFunc func bellow will return UserInfoType
 */
export const returnTypeFunc = (fruit: ReturnType<typeof getUserInfoFunc>) => {
  return fruit
}

/**
 * Generic: can be pass new type to type
 */

// U if optional because already assign sting
type dynamicTypeArg<T, U = string> = {
  name: U
  otherInfo: Partial<T>
}

export const dynamicData: dynamicTypeArg<UserType> = {
  name: 'Sila',
  otherInfo: {
    gender: 'FEMALE',
  },
}

// usage in normal func
export const genericArr = <T extends unknown = string>(arg1?: T) => {
  return arg1
}
// usage in arrow func
export function genericFunc<T>(arg: T) {
  return arg
}

// conditional generic

export type GenConditionalType<T = boolean> = T extends boolean
  ? boolean
  : string

export const renderCondition = <T extends unknown>(v: T) => v

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}

const userName = getProperty({ name: 'sila' })
// log(userName.name) ==> "sila"
```

[Back2Top](#nextjs-next-boilerplate)
