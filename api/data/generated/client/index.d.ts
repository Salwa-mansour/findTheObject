
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Level
 * 
 */
export type Level = $Result.DefaultSelection<Prisma.$LevelPayload>
/**
 * Model SearchObject
 * 
 */
export type SearchObject = $Result.DefaultSelection<Prisma.$SearchObjectPayload>
/**
 * Model PlayerSession
 * 
 */
export type PlayerSession = $Result.DefaultSelection<Prisma.$PlayerSessionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Levels
 * const levels = await prisma.level.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Levels
   * const levels = await prisma.level.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.searchObject`: Exposes CRUD operations for the **SearchObject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SearchObjects
    * const searchObjects = await prisma.searchObject.findMany()
    * ```
    */
  get searchObject(): Prisma.SearchObjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerSession`: Exposes CRUD operations for the **PlayerSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerSessions
    * const playerSessions = await prisma.playerSession.findMany()
    * ```
    */
  get playerSession(): Prisma.PlayerSessionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Level: 'Level',
    SearchObject: 'SearchObject',
    PlayerSession: 'PlayerSession'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "level" | "searchObject" | "playerSession"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Level: {
        payload: Prisma.$LevelPayload<ExtArgs>
        fields: Prisma.LevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findFirst: {
            args: Prisma.LevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findMany: {
            args: Prisma.LevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          create: {
            args: Prisma.LevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          createMany: {
            args: Prisma.LevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          delete: {
            args: Prisma.LevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          update: {
            args: Prisma.LevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          deleteMany: {
            args: Prisma.LevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          upsert: {
            args: Prisma.LevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          aggregate: {
            args: Prisma.LevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel>
          }
          groupBy: {
            args: Prisma.LevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelCountArgs<ExtArgs>
            result: $Utils.Optional<LevelCountAggregateOutputType> | number
          }
        }
      }
      SearchObject: {
        payload: Prisma.$SearchObjectPayload<ExtArgs>
        fields: Prisma.SearchObjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SearchObjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SearchObjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload>
          }
          findFirst: {
            args: Prisma.SearchObjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SearchObjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload>
          }
          findMany: {
            args: Prisma.SearchObjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload>[]
          }
          create: {
            args: Prisma.SearchObjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload>
          }
          createMany: {
            args: Prisma.SearchObjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SearchObjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload>[]
          }
          delete: {
            args: Prisma.SearchObjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload>
          }
          update: {
            args: Prisma.SearchObjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload>
          }
          deleteMany: {
            args: Prisma.SearchObjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SearchObjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SearchObjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload>[]
          }
          upsert: {
            args: Prisma.SearchObjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SearchObjectPayload>
          }
          aggregate: {
            args: Prisma.SearchObjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSearchObject>
          }
          groupBy: {
            args: Prisma.SearchObjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SearchObjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SearchObjectCountArgs<ExtArgs>
            result: $Utils.Optional<SearchObjectCountAggregateOutputType> | number
          }
        }
      }
      PlayerSession: {
        payload: Prisma.$PlayerSessionPayload<ExtArgs>
        fields: Prisma.PlayerSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          findFirst: {
            args: Prisma.PlayerSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          findMany: {
            args: Prisma.PlayerSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>[]
          }
          create: {
            args: Prisma.PlayerSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          createMany: {
            args: Prisma.PlayerSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>[]
          }
          delete: {
            args: Prisma.PlayerSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          update: {
            args: Prisma.PlayerSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          deleteMany: {
            args: Prisma.PlayerSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>[]
          }
          upsert: {
            args: Prisma.PlayerSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          aggregate: {
            args: Prisma.PlayerSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerSession>
          }
          groupBy: {
            args: Prisma.PlayerSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerSessionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    level?: LevelOmit
    searchObject?: SearchObjectOmit
    playerSession?: PlayerSessionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LevelCountOutputType
   */

  export type LevelCountOutputType = {
    targets: number
    sessions: number
  }

  export type LevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targets?: boolean | LevelCountOutputTypeCountTargetsArgs
    sessions?: boolean | LevelCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelCountOutputType
     */
    select?: LevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountTargetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchObjectWhereInput
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerSessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Level
   */

  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelMinAggregateOutputType = {
    id: string | null
    title: string | null
    imageFileName: string | null
    difficulty: string | null
  }

  export type LevelMaxAggregateOutputType = {
    id: string | null
    title: string | null
    imageFileName: string | null
    difficulty: string | null
  }

  export type LevelCountAggregateOutputType = {
    id: number
    title: number
    imageFileName: number
    difficulty: number
    _all: number
  }


  export type LevelMinAggregateInputType = {
    id?: true
    title?: true
    imageFileName?: true
    difficulty?: true
  }

  export type LevelMaxAggregateInputType = {
    id?: true
    title?: true
    imageFileName?: true
    difficulty?: true
  }

  export type LevelCountAggregateInputType = {
    id?: true
    title?: true
    imageFileName?: true
    difficulty?: true
    _all?: true
  }

  export type LevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelWhereInput
    orderBy?: LevelOrderByWithAggregationInput | LevelOrderByWithAggregationInput[]
    by: LevelScalarFieldEnum[] | LevelScalarFieldEnum
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }

  export type LevelGroupByOutputType = {
    id: string
    title: string
    imageFileName: string
    difficulty: string
    _count: LevelCountAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageFileName?: boolean
    difficulty?: boolean
    targets?: boolean | Level$targetsArgs<ExtArgs>
    sessions?: boolean | Level$sessionsArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>

  export type LevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageFileName?: boolean
    difficulty?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageFileName?: boolean
    difficulty?: boolean
  }, ExtArgs["result"]["level"]>

  export type LevelSelectScalar = {
    id?: boolean
    title?: boolean
    imageFileName?: boolean
    difficulty?: boolean
  }

  export type LevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "imageFileName" | "difficulty", ExtArgs["result"]["level"]>
  export type LevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targets?: boolean | Level$targetsArgs<ExtArgs>
    sessions?: boolean | Level$sessionsArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {
      targets: Prisma.$SearchObjectPayload<ExtArgs>[]
      sessions: Prisma.$PlayerSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      imageFileName: string
      difficulty: string
    }, ExtArgs["result"]["level"]>
    composites: {}
  }

  type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = $Result.GetResult<Prisma.$LevelPayload, S>

  type LevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Level'], meta: { name: 'Level' } }
    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelFindUniqueArgs>(args: SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelFindFirstArgs>(args?: SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelWithIdOnly = await prisma.level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelFindManyArgs>(args?: SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
     */
    create<T extends LevelCreateArgs>(args: SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelCreateManyArgs>(args?: SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Levels and returns the data saved in the database.
     * @param {LevelCreateManyAndReturnArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LevelCreateManyAndReturnArgs>(args?: SelectSubset<T, LevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
     */
    delete<T extends LevelDeleteArgs>(args: SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelUpdateArgs>(args: SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelDeleteManyArgs>(args?: SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelUpdateManyArgs>(args: SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels and returns the data updated in the database.
     * @param {LevelUpdateManyAndReturnArgs} args - Arguments to update many Levels.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Levels and only return the `id`
     * const levelWithIdOnly = await prisma.level.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LevelUpdateManyAndReturnArgs>(args: SelectSubset<T, LevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
     */
    upsert<T extends LevelUpsertArgs>(args: SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Level model
   */
  readonly fields: LevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    targets<T extends Level$targetsArgs<ExtArgs> = {}>(args?: Subset<T, Level$targetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Level$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Level$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Level model
   */
  interface LevelFieldRefs {
    readonly id: FieldRef<"Level", 'String'>
    readonly title: FieldRef<"Level", 'String'>
    readonly imageFileName: FieldRef<"Level", 'String'>
    readonly difficulty: FieldRef<"Level", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Level findUnique
   */
  export type LevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findFirst
   */
  export type LevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findMany
   */
  export type LevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level create
   */
  export type LevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }

  /**
   * Level createMany
   */
  export type LevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level createManyAndReturn
   */
  export type LevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level update
   */
  export type LevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level updateManyAndReturn
   */
  export type LevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level upsert
   */
  export type LevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }

  /**
   * Level delete
   */
  export type LevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Level.targets
   */
  export type Level$targetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    where?: SearchObjectWhereInput
    orderBy?: SearchObjectOrderByWithRelationInput | SearchObjectOrderByWithRelationInput[]
    cursor?: SearchObjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SearchObjectScalarFieldEnum | SearchObjectScalarFieldEnum[]
  }

  /**
   * Level.sessions
   */
  export type Level$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    where?: PlayerSessionWhereInput
    orderBy?: PlayerSessionOrderByWithRelationInput | PlayerSessionOrderByWithRelationInput[]
    cursor?: PlayerSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerSessionScalarFieldEnum | PlayerSessionScalarFieldEnum[]
  }

  /**
   * Level without action
   */
  export type LevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
  }


  /**
   * Model SearchObject
   */

  export type AggregateSearchObject = {
    _count: SearchObjectCountAggregateOutputType | null
    _avg: SearchObjectAvgAggregateOutputType | null
    _sum: SearchObjectSumAggregateOutputType | null
    _min: SearchObjectMinAggregateOutputType | null
    _max: SearchObjectMaxAggregateOutputType | null
  }

  export type SearchObjectAvgAggregateOutputType = {
    targetX: number | null
    targetY: number | null
    radius: number | null
  }

  export type SearchObjectSumAggregateOutputType = {
    targetX: number | null
    targetY: number | null
    radius: number | null
  }

  export type SearchObjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    iconFileName: string | null
    targetX: number | null
    targetY: number | null
    radius: number | null
    levelId: string | null
  }

  export type SearchObjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    iconFileName: string | null
    targetX: number | null
    targetY: number | null
    radius: number | null
    levelId: string | null
  }

  export type SearchObjectCountAggregateOutputType = {
    id: number
    name: number
    iconFileName: number
    targetX: number
    targetY: number
    radius: number
    levelId: number
    _all: number
  }


  export type SearchObjectAvgAggregateInputType = {
    targetX?: true
    targetY?: true
    radius?: true
  }

  export type SearchObjectSumAggregateInputType = {
    targetX?: true
    targetY?: true
    radius?: true
  }

  export type SearchObjectMinAggregateInputType = {
    id?: true
    name?: true
    iconFileName?: true
    targetX?: true
    targetY?: true
    radius?: true
    levelId?: true
  }

  export type SearchObjectMaxAggregateInputType = {
    id?: true
    name?: true
    iconFileName?: true
    targetX?: true
    targetY?: true
    radius?: true
    levelId?: true
  }

  export type SearchObjectCountAggregateInputType = {
    id?: true
    name?: true
    iconFileName?: true
    targetX?: true
    targetY?: true
    radius?: true
    levelId?: true
    _all?: true
  }

  export type SearchObjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchObject to aggregate.
     */
    where?: SearchObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchObjects to fetch.
     */
    orderBy?: SearchObjectOrderByWithRelationInput | SearchObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SearchObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SearchObjects
    **/
    _count?: true | SearchObjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SearchObjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SearchObjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SearchObjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SearchObjectMaxAggregateInputType
  }

  export type GetSearchObjectAggregateType<T extends SearchObjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSearchObject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSearchObject[P]>
      : GetScalarType<T[P], AggregateSearchObject[P]>
  }




  export type SearchObjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SearchObjectWhereInput
    orderBy?: SearchObjectOrderByWithAggregationInput | SearchObjectOrderByWithAggregationInput[]
    by: SearchObjectScalarFieldEnum[] | SearchObjectScalarFieldEnum
    having?: SearchObjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SearchObjectCountAggregateInputType | true
    _avg?: SearchObjectAvgAggregateInputType
    _sum?: SearchObjectSumAggregateInputType
    _min?: SearchObjectMinAggregateInputType
    _max?: SearchObjectMaxAggregateInputType
  }

  export type SearchObjectGroupByOutputType = {
    id: string
    name: string
    iconFileName: string
    targetX: number
    targetY: number
    radius: number
    levelId: string
    _count: SearchObjectCountAggregateOutputType | null
    _avg: SearchObjectAvgAggregateOutputType | null
    _sum: SearchObjectSumAggregateOutputType | null
    _min: SearchObjectMinAggregateOutputType | null
    _max: SearchObjectMaxAggregateOutputType | null
  }

  type GetSearchObjectGroupByPayload<T extends SearchObjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SearchObjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SearchObjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SearchObjectGroupByOutputType[P]>
            : GetScalarType<T[P], SearchObjectGroupByOutputType[P]>
        }
      >
    >


  export type SearchObjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconFileName?: boolean
    targetX?: boolean
    targetY?: boolean
    radius?: boolean
    levelId?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchObject"]>

  export type SearchObjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconFileName?: boolean
    targetX?: boolean
    targetY?: boolean
    radius?: boolean
    levelId?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchObject"]>

  export type SearchObjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iconFileName?: boolean
    targetX?: boolean
    targetY?: boolean
    radius?: boolean
    levelId?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["searchObject"]>

  export type SearchObjectSelectScalar = {
    id?: boolean
    name?: boolean
    iconFileName?: boolean
    targetX?: boolean
    targetY?: boolean
    radius?: boolean
    levelId?: boolean
  }

  export type SearchObjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "iconFileName" | "targetX" | "targetY" | "radius" | "levelId", ExtArgs["result"]["searchObject"]>
  export type SearchObjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type SearchObjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type SearchObjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $SearchObjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SearchObject"
    objects: {
      level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      iconFileName: string
      targetX: number
      targetY: number
      radius: number
      levelId: string
    }, ExtArgs["result"]["searchObject"]>
    composites: {}
  }

  type SearchObjectGetPayload<S extends boolean | null | undefined | SearchObjectDefaultArgs> = $Result.GetResult<Prisma.$SearchObjectPayload, S>

  type SearchObjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SearchObjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SearchObjectCountAggregateInputType | true
    }

  export interface SearchObjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SearchObject'], meta: { name: 'SearchObject' } }
    /**
     * Find zero or one SearchObject that matches the filter.
     * @param {SearchObjectFindUniqueArgs} args - Arguments to find a SearchObject
     * @example
     * // Get one SearchObject
     * const searchObject = await prisma.searchObject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SearchObjectFindUniqueArgs>(args: SelectSubset<T, SearchObjectFindUniqueArgs<ExtArgs>>): Prisma__SearchObjectClient<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SearchObject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SearchObjectFindUniqueOrThrowArgs} args - Arguments to find a SearchObject
     * @example
     * // Get one SearchObject
     * const searchObject = await prisma.searchObject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SearchObjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SearchObjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SearchObjectClient<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchObject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchObjectFindFirstArgs} args - Arguments to find a SearchObject
     * @example
     * // Get one SearchObject
     * const searchObject = await prisma.searchObject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SearchObjectFindFirstArgs>(args?: SelectSubset<T, SearchObjectFindFirstArgs<ExtArgs>>): Prisma__SearchObjectClient<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SearchObject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchObjectFindFirstOrThrowArgs} args - Arguments to find a SearchObject
     * @example
     * // Get one SearchObject
     * const searchObject = await prisma.searchObject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SearchObjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SearchObjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SearchObjectClient<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SearchObjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchObjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SearchObjects
     * const searchObjects = await prisma.searchObject.findMany()
     * 
     * // Get first 10 SearchObjects
     * const searchObjects = await prisma.searchObject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const searchObjectWithIdOnly = await prisma.searchObject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SearchObjectFindManyArgs>(args?: SelectSubset<T, SearchObjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SearchObject.
     * @param {SearchObjectCreateArgs} args - Arguments to create a SearchObject.
     * @example
     * // Create one SearchObject
     * const SearchObject = await prisma.searchObject.create({
     *   data: {
     *     // ... data to create a SearchObject
     *   }
     * })
     * 
     */
    create<T extends SearchObjectCreateArgs>(args: SelectSubset<T, SearchObjectCreateArgs<ExtArgs>>): Prisma__SearchObjectClient<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SearchObjects.
     * @param {SearchObjectCreateManyArgs} args - Arguments to create many SearchObjects.
     * @example
     * // Create many SearchObjects
     * const searchObject = await prisma.searchObject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SearchObjectCreateManyArgs>(args?: SelectSubset<T, SearchObjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SearchObjects and returns the data saved in the database.
     * @param {SearchObjectCreateManyAndReturnArgs} args - Arguments to create many SearchObjects.
     * @example
     * // Create many SearchObjects
     * const searchObject = await prisma.searchObject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SearchObjects and only return the `id`
     * const searchObjectWithIdOnly = await prisma.searchObject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SearchObjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SearchObjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SearchObject.
     * @param {SearchObjectDeleteArgs} args - Arguments to delete one SearchObject.
     * @example
     * // Delete one SearchObject
     * const SearchObject = await prisma.searchObject.delete({
     *   where: {
     *     // ... filter to delete one SearchObject
     *   }
     * })
     * 
     */
    delete<T extends SearchObjectDeleteArgs>(args: SelectSubset<T, SearchObjectDeleteArgs<ExtArgs>>): Prisma__SearchObjectClient<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SearchObject.
     * @param {SearchObjectUpdateArgs} args - Arguments to update one SearchObject.
     * @example
     * // Update one SearchObject
     * const searchObject = await prisma.searchObject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SearchObjectUpdateArgs>(args: SelectSubset<T, SearchObjectUpdateArgs<ExtArgs>>): Prisma__SearchObjectClient<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SearchObjects.
     * @param {SearchObjectDeleteManyArgs} args - Arguments to filter SearchObjects to delete.
     * @example
     * // Delete a few SearchObjects
     * const { count } = await prisma.searchObject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SearchObjectDeleteManyArgs>(args?: SelectSubset<T, SearchObjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchObjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchObjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SearchObjects
     * const searchObject = await prisma.searchObject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SearchObjectUpdateManyArgs>(args: SelectSubset<T, SearchObjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SearchObjects and returns the data updated in the database.
     * @param {SearchObjectUpdateManyAndReturnArgs} args - Arguments to update many SearchObjects.
     * @example
     * // Update many SearchObjects
     * const searchObject = await prisma.searchObject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SearchObjects and only return the `id`
     * const searchObjectWithIdOnly = await prisma.searchObject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SearchObjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SearchObjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SearchObject.
     * @param {SearchObjectUpsertArgs} args - Arguments to update or create a SearchObject.
     * @example
     * // Update or create a SearchObject
     * const searchObject = await prisma.searchObject.upsert({
     *   create: {
     *     // ... data to create a SearchObject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SearchObject we want to update
     *   }
     * })
     */
    upsert<T extends SearchObjectUpsertArgs>(args: SelectSubset<T, SearchObjectUpsertArgs<ExtArgs>>): Prisma__SearchObjectClient<$Result.GetResult<Prisma.$SearchObjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SearchObjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchObjectCountArgs} args - Arguments to filter SearchObjects to count.
     * @example
     * // Count the number of SearchObjects
     * const count = await prisma.searchObject.count({
     *   where: {
     *     // ... the filter for the SearchObjects we want to count
     *   }
     * })
    **/
    count<T extends SearchObjectCountArgs>(
      args?: Subset<T, SearchObjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SearchObjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SearchObject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchObjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SearchObjectAggregateArgs>(args: Subset<T, SearchObjectAggregateArgs>): Prisma.PrismaPromise<GetSearchObjectAggregateType<T>>

    /**
     * Group by SearchObject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SearchObjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SearchObjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SearchObjectGroupByArgs['orderBy'] }
        : { orderBy?: SearchObjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SearchObjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSearchObjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SearchObject model
   */
  readonly fields: SearchObjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SearchObject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SearchObjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SearchObject model
   */
  interface SearchObjectFieldRefs {
    readonly id: FieldRef<"SearchObject", 'String'>
    readonly name: FieldRef<"SearchObject", 'String'>
    readonly iconFileName: FieldRef<"SearchObject", 'String'>
    readonly targetX: FieldRef<"SearchObject", 'Float'>
    readonly targetY: FieldRef<"SearchObject", 'Float'>
    readonly radius: FieldRef<"SearchObject", 'Float'>
    readonly levelId: FieldRef<"SearchObject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SearchObject findUnique
   */
  export type SearchObjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    /**
     * Filter, which SearchObject to fetch.
     */
    where: SearchObjectWhereUniqueInput
  }

  /**
   * SearchObject findUniqueOrThrow
   */
  export type SearchObjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    /**
     * Filter, which SearchObject to fetch.
     */
    where: SearchObjectWhereUniqueInput
  }

  /**
   * SearchObject findFirst
   */
  export type SearchObjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    /**
     * Filter, which SearchObject to fetch.
     */
    where?: SearchObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchObjects to fetch.
     */
    orderBy?: SearchObjectOrderByWithRelationInput | SearchObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchObjects.
     */
    cursor?: SearchObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchObjects.
     */
    distinct?: SearchObjectScalarFieldEnum | SearchObjectScalarFieldEnum[]
  }

  /**
   * SearchObject findFirstOrThrow
   */
  export type SearchObjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    /**
     * Filter, which SearchObject to fetch.
     */
    where?: SearchObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchObjects to fetch.
     */
    orderBy?: SearchObjectOrderByWithRelationInput | SearchObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SearchObjects.
     */
    cursor?: SearchObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchObjects.
     */
    distinct?: SearchObjectScalarFieldEnum | SearchObjectScalarFieldEnum[]
  }

  /**
   * SearchObject findMany
   */
  export type SearchObjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    /**
     * Filter, which SearchObjects to fetch.
     */
    where?: SearchObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SearchObjects to fetch.
     */
    orderBy?: SearchObjectOrderByWithRelationInput | SearchObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SearchObjects.
     */
    cursor?: SearchObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SearchObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SearchObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SearchObjects.
     */
    distinct?: SearchObjectScalarFieldEnum | SearchObjectScalarFieldEnum[]
  }

  /**
   * SearchObject create
   */
  export type SearchObjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    /**
     * The data needed to create a SearchObject.
     */
    data: XOR<SearchObjectCreateInput, SearchObjectUncheckedCreateInput>
  }

  /**
   * SearchObject createMany
   */
  export type SearchObjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SearchObjects.
     */
    data: SearchObjectCreateManyInput | SearchObjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SearchObject createManyAndReturn
   */
  export type SearchObjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * The data used to create many SearchObjects.
     */
    data: SearchObjectCreateManyInput | SearchObjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchObject update
   */
  export type SearchObjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    /**
     * The data needed to update a SearchObject.
     */
    data: XOR<SearchObjectUpdateInput, SearchObjectUncheckedUpdateInput>
    /**
     * Choose, which SearchObject to update.
     */
    where: SearchObjectWhereUniqueInput
  }

  /**
   * SearchObject updateMany
   */
  export type SearchObjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SearchObjects.
     */
    data: XOR<SearchObjectUpdateManyMutationInput, SearchObjectUncheckedUpdateManyInput>
    /**
     * Filter which SearchObjects to update
     */
    where?: SearchObjectWhereInput
    /**
     * Limit how many SearchObjects to update.
     */
    limit?: number
  }

  /**
   * SearchObject updateManyAndReturn
   */
  export type SearchObjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * The data used to update SearchObjects.
     */
    data: XOR<SearchObjectUpdateManyMutationInput, SearchObjectUncheckedUpdateManyInput>
    /**
     * Filter which SearchObjects to update
     */
    where?: SearchObjectWhereInput
    /**
     * Limit how many SearchObjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SearchObject upsert
   */
  export type SearchObjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    /**
     * The filter to search for the SearchObject to update in case it exists.
     */
    where: SearchObjectWhereUniqueInput
    /**
     * In case the SearchObject found by the `where` argument doesn't exist, create a new SearchObject with this data.
     */
    create: XOR<SearchObjectCreateInput, SearchObjectUncheckedCreateInput>
    /**
     * In case the SearchObject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SearchObjectUpdateInput, SearchObjectUncheckedUpdateInput>
  }

  /**
   * SearchObject delete
   */
  export type SearchObjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
    /**
     * Filter which SearchObject to delete.
     */
    where: SearchObjectWhereUniqueInput
  }

  /**
   * SearchObject deleteMany
   */
  export type SearchObjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SearchObjects to delete
     */
    where?: SearchObjectWhereInput
    /**
     * Limit how many SearchObjects to delete.
     */
    limit?: number
  }

  /**
   * SearchObject without action
   */
  export type SearchObjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SearchObject
     */
    select?: SearchObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SearchObject
     */
    omit?: SearchObjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SearchObjectInclude<ExtArgs> | null
  }


  /**
   * Model PlayerSession
   */

  export type AggregatePlayerSession = {
    _count: PlayerSessionCountAggregateOutputType | null
    _avg: PlayerSessionAvgAggregateOutputType | null
    _sum: PlayerSessionSumAggregateOutputType | null
    _min: PlayerSessionMinAggregateOutputType | null
    _max: PlayerSessionMaxAggregateOutputType | null
  }

  export type PlayerSessionAvgAggregateOutputType = {
    finalTimeSeconds: number | null
  }

  export type PlayerSessionSumAggregateOutputType = {
    finalTimeSeconds: number | null
  }

  export type PlayerSessionMinAggregateOutputType = {
    id: string | null
    playerName: string | null
    startTime: Date | null
    endTime: Date | null
    finalTimeSeconds: number | null
    levelId: string | null
  }

  export type PlayerSessionMaxAggregateOutputType = {
    id: string | null
    playerName: string | null
    startTime: Date | null
    endTime: Date | null
    finalTimeSeconds: number | null
    levelId: string | null
  }

  export type PlayerSessionCountAggregateOutputType = {
    id: number
    playerName: number
    startTime: number
    endTime: number
    finalTimeSeconds: number
    levelId: number
    _all: number
  }


  export type PlayerSessionAvgAggregateInputType = {
    finalTimeSeconds?: true
  }

  export type PlayerSessionSumAggregateInputType = {
    finalTimeSeconds?: true
  }

  export type PlayerSessionMinAggregateInputType = {
    id?: true
    playerName?: true
    startTime?: true
    endTime?: true
    finalTimeSeconds?: true
    levelId?: true
  }

  export type PlayerSessionMaxAggregateInputType = {
    id?: true
    playerName?: true
    startTime?: true
    endTime?: true
    finalTimeSeconds?: true
    levelId?: true
  }

  export type PlayerSessionCountAggregateInputType = {
    id?: true
    playerName?: true
    startTime?: true
    endTime?: true
    finalTimeSeconds?: true
    levelId?: true
    _all?: true
  }

  export type PlayerSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSession to aggregate.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: PlayerSessionOrderByWithRelationInput | PlayerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerSessions
    **/
    _count?: true | PlayerSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerSessionMaxAggregateInputType
  }

  export type GetPlayerSessionAggregateType<T extends PlayerSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerSession[P]>
      : GetScalarType<T[P], AggregatePlayerSession[P]>
  }




  export type PlayerSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerSessionWhereInput
    orderBy?: PlayerSessionOrderByWithAggregationInput | PlayerSessionOrderByWithAggregationInput[]
    by: PlayerSessionScalarFieldEnum[] | PlayerSessionScalarFieldEnum
    having?: PlayerSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerSessionCountAggregateInputType | true
    _avg?: PlayerSessionAvgAggregateInputType
    _sum?: PlayerSessionSumAggregateInputType
    _min?: PlayerSessionMinAggregateInputType
    _max?: PlayerSessionMaxAggregateInputType
  }

  export type PlayerSessionGroupByOutputType = {
    id: string
    playerName: string | null
    startTime: Date
    endTime: Date | null
    finalTimeSeconds: number | null
    levelId: string
    _count: PlayerSessionCountAggregateOutputType | null
    _avg: PlayerSessionAvgAggregateOutputType | null
    _sum: PlayerSessionSumAggregateOutputType | null
    _min: PlayerSessionMinAggregateOutputType | null
    _max: PlayerSessionMaxAggregateOutputType | null
  }

  type GetPlayerSessionGroupByPayload<T extends PlayerSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerSessionGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerName?: boolean
    startTime?: boolean
    endTime?: boolean
    finalTimeSeconds?: boolean
    levelId?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerSession"]>

  export type PlayerSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerName?: boolean
    startTime?: boolean
    endTime?: boolean
    finalTimeSeconds?: boolean
    levelId?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerSession"]>

  export type PlayerSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerName?: boolean
    startTime?: boolean
    endTime?: boolean
    finalTimeSeconds?: boolean
    levelId?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerSession"]>

  export type PlayerSessionSelectScalar = {
    id?: boolean
    playerName?: boolean
    startTime?: boolean
    endTime?: boolean
    finalTimeSeconds?: boolean
    levelId?: boolean
  }

  export type PlayerSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerName" | "startTime" | "endTime" | "finalTimeSeconds" | "levelId", ExtArgs["result"]["playerSession"]>
  export type PlayerSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type PlayerSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }
  export type PlayerSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
  }

  export type $PlayerSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerSession"
    objects: {
      level: Prisma.$LevelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerName: string | null
      startTime: Date
      endTime: Date | null
      finalTimeSeconds: number | null
      levelId: string
    }, ExtArgs["result"]["playerSession"]>
    composites: {}
  }

  type PlayerSessionGetPayload<S extends boolean | null | undefined | PlayerSessionDefaultArgs> = $Result.GetResult<Prisma.$PlayerSessionPayload, S>

  type PlayerSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerSessionCountAggregateInputType | true
    }

  export interface PlayerSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerSession'], meta: { name: 'PlayerSession' } }
    /**
     * Find zero or one PlayerSession that matches the filter.
     * @param {PlayerSessionFindUniqueArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerSessionFindUniqueArgs>(args: SelectSubset<T, PlayerSessionFindUniqueArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerSessionFindUniqueOrThrowArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionFindFirstArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerSessionFindFirstArgs>(args?: SelectSubset<T, PlayerSessionFindFirstArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionFindFirstOrThrowArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerSessions
     * const playerSessions = await prisma.playerSession.findMany()
     * 
     * // Get first 10 PlayerSessions
     * const playerSessions = await prisma.playerSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerSessionWithIdOnly = await prisma.playerSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerSessionFindManyArgs>(args?: SelectSubset<T, PlayerSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerSession.
     * @param {PlayerSessionCreateArgs} args - Arguments to create a PlayerSession.
     * @example
     * // Create one PlayerSession
     * const PlayerSession = await prisma.playerSession.create({
     *   data: {
     *     // ... data to create a PlayerSession
     *   }
     * })
     * 
     */
    create<T extends PlayerSessionCreateArgs>(args: SelectSubset<T, PlayerSessionCreateArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerSessions.
     * @param {PlayerSessionCreateManyArgs} args - Arguments to create many PlayerSessions.
     * @example
     * // Create many PlayerSessions
     * const playerSession = await prisma.playerSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerSessionCreateManyArgs>(args?: SelectSubset<T, PlayerSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerSessions and returns the data saved in the database.
     * @param {PlayerSessionCreateManyAndReturnArgs} args - Arguments to create many PlayerSessions.
     * @example
     * // Create many PlayerSessions
     * const playerSession = await prisma.playerSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerSessions and only return the `id`
     * const playerSessionWithIdOnly = await prisma.playerSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerSession.
     * @param {PlayerSessionDeleteArgs} args - Arguments to delete one PlayerSession.
     * @example
     * // Delete one PlayerSession
     * const PlayerSession = await prisma.playerSession.delete({
     *   where: {
     *     // ... filter to delete one PlayerSession
     *   }
     * })
     * 
     */
    delete<T extends PlayerSessionDeleteArgs>(args: SelectSubset<T, PlayerSessionDeleteArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerSession.
     * @param {PlayerSessionUpdateArgs} args - Arguments to update one PlayerSession.
     * @example
     * // Update one PlayerSession
     * const playerSession = await prisma.playerSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerSessionUpdateArgs>(args: SelectSubset<T, PlayerSessionUpdateArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerSessions.
     * @param {PlayerSessionDeleteManyArgs} args - Arguments to filter PlayerSessions to delete.
     * @example
     * // Delete a few PlayerSessions
     * const { count } = await prisma.playerSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerSessionDeleteManyArgs>(args?: SelectSubset<T, PlayerSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerSessions
     * const playerSession = await prisma.playerSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerSessionUpdateManyArgs>(args: SelectSubset<T, PlayerSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSessions and returns the data updated in the database.
     * @param {PlayerSessionUpdateManyAndReturnArgs} args - Arguments to update many PlayerSessions.
     * @example
     * // Update many PlayerSessions
     * const playerSession = await prisma.playerSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerSessions and only return the `id`
     * const playerSessionWithIdOnly = await prisma.playerSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerSession.
     * @param {PlayerSessionUpsertArgs} args - Arguments to update or create a PlayerSession.
     * @example
     * // Update or create a PlayerSession
     * const playerSession = await prisma.playerSession.upsert({
     *   create: {
     *     // ... data to create a PlayerSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerSession we want to update
     *   }
     * })
     */
    upsert<T extends PlayerSessionUpsertArgs>(args: SelectSubset<T, PlayerSessionUpsertArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionCountArgs} args - Arguments to filter PlayerSessions to count.
     * @example
     * // Count the number of PlayerSessions
     * const count = await prisma.playerSession.count({
     *   where: {
     *     // ... the filter for the PlayerSessions we want to count
     *   }
     * })
    **/
    count<T extends PlayerSessionCountArgs>(
      args?: Subset<T, PlayerSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerSessionAggregateArgs>(args: Subset<T, PlayerSessionAggregateArgs>): Prisma.PrismaPromise<GetPlayerSessionAggregateType<T>>

    /**
     * Group by PlayerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerSessionGroupByArgs['orderBy'] }
        : { orderBy?: PlayerSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerSession model
   */
  readonly fields: PlayerSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerSession model
   */
  interface PlayerSessionFieldRefs {
    readonly id: FieldRef<"PlayerSession", 'String'>
    readonly playerName: FieldRef<"PlayerSession", 'String'>
    readonly startTime: FieldRef<"PlayerSession", 'DateTime'>
    readonly endTime: FieldRef<"PlayerSession", 'DateTime'>
    readonly finalTimeSeconds: FieldRef<"PlayerSession", 'Int'>
    readonly levelId: FieldRef<"PlayerSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlayerSession findUnique
   */
  export type PlayerSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where: PlayerSessionWhereUniqueInput
  }

  /**
   * PlayerSession findUniqueOrThrow
   */
  export type PlayerSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where: PlayerSessionWhereUniqueInput
  }

  /**
   * PlayerSession findFirst
   */
  export type PlayerSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: PlayerSessionOrderByWithRelationInput | PlayerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSessions.
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSessions.
     */
    distinct?: PlayerSessionScalarFieldEnum | PlayerSessionScalarFieldEnum[]
  }

  /**
   * PlayerSession findFirstOrThrow
   */
  export type PlayerSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: PlayerSessionOrderByWithRelationInput | PlayerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSessions.
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSessions.
     */
    distinct?: PlayerSessionScalarFieldEnum | PlayerSessionScalarFieldEnum[]
  }

  /**
   * PlayerSession findMany
   */
  export type PlayerSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSessions to fetch.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: PlayerSessionOrderByWithRelationInput | PlayerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerSessions.
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSessions.
     */
    distinct?: PlayerSessionScalarFieldEnum | PlayerSessionScalarFieldEnum[]
  }

  /**
   * PlayerSession create
   */
  export type PlayerSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerSession.
     */
    data: XOR<PlayerSessionCreateInput, PlayerSessionUncheckedCreateInput>
  }

  /**
   * PlayerSession createMany
   */
  export type PlayerSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerSessions.
     */
    data: PlayerSessionCreateManyInput | PlayerSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerSession createManyAndReturn
   */
  export type PlayerSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerSessions.
     */
    data: PlayerSessionCreateManyInput | PlayerSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerSession update
   */
  export type PlayerSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerSession.
     */
    data: XOR<PlayerSessionUpdateInput, PlayerSessionUncheckedUpdateInput>
    /**
     * Choose, which PlayerSession to update.
     */
    where: PlayerSessionWhereUniqueInput
  }

  /**
   * PlayerSession updateMany
   */
  export type PlayerSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerSessions.
     */
    data: XOR<PlayerSessionUpdateManyMutationInput, PlayerSessionUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSessions to update
     */
    where?: PlayerSessionWhereInput
    /**
     * Limit how many PlayerSessions to update.
     */
    limit?: number
  }

  /**
   * PlayerSession updateManyAndReturn
   */
  export type PlayerSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * The data used to update PlayerSessions.
     */
    data: XOR<PlayerSessionUpdateManyMutationInput, PlayerSessionUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSessions to update
     */
    where?: PlayerSessionWhereInput
    /**
     * Limit how many PlayerSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerSession upsert
   */
  export type PlayerSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerSession to update in case it exists.
     */
    where: PlayerSessionWhereUniqueInput
    /**
     * In case the PlayerSession found by the `where` argument doesn't exist, create a new PlayerSession with this data.
     */
    create: XOR<PlayerSessionCreateInput, PlayerSessionUncheckedCreateInput>
    /**
     * In case the PlayerSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerSessionUpdateInput, PlayerSessionUncheckedUpdateInput>
  }

  /**
   * PlayerSession delete
   */
  export type PlayerSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter which PlayerSession to delete.
     */
    where: PlayerSessionWhereUniqueInput
  }

  /**
   * PlayerSession deleteMany
   */
  export type PlayerSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSessions to delete
     */
    where?: PlayerSessionWhereInput
    /**
     * Limit how many PlayerSessions to delete.
     */
    limit?: number
  }

  /**
   * PlayerSession without action
   */
  export type PlayerSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const LevelScalarFieldEnum: {
    id: 'id',
    title: 'title',
    imageFileName: 'imageFileName',
    difficulty: 'difficulty'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const SearchObjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iconFileName: 'iconFileName',
    targetX: 'targetX',
    targetY: 'targetY',
    radius: 'radius',
    levelId: 'levelId'
  };

  export type SearchObjectScalarFieldEnum = (typeof SearchObjectScalarFieldEnum)[keyof typeof SearchObjectScalarFieldEnum]


  export const PlayerSessionScalarFieldEnum: {
    id: 'id',
    playerName: 'playerName',
    startTime: 'startTime',
    endTime: 'endTime',
    finalTimeSeconds: 'finalTimeSeconds',
    levelId: 'levelId'
  };

  export type PlayerSessionScalarFieldEnum = (typeof PlayerSessionScalarFieldEnum)[keyof typeof PlayerSessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type LevelWhereInput = {
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    id?: StringFilter<"Level"> | string
    title?: StringFilter<"Level"> | string
    imageFileName?: StringFilter<"Level"> | string
    difficulty?: StringFilter<"Level"> | string
    targets?: SearchObjectListRelationFilter
    sessions?: PlayerSessionListRelationFilter
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    imageFileName?: SortOrder
    difficulty?: SortOrder
    targets?: SearchObjectOrderByRelationAggregateInput
    sessions?: PlayerSessionOrderByRelationAggregateInput
  }

  export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    title?: StringFilter<"Level"> | string
    imageFileName?: StringFilter<"Level"> | string
    difficulty?: StringFilter<"Level"> | string
    targets?: SearchObjectListRelationFilter
    sessions?: PlayerSessionListRelationFilter
  }, "id">

  export type LevelOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    imageFileName?: SortOrder
    difficulty?: SortOrder
    _count?: LevelCountOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    OR?: LevelScalarWhereWithAggregatesInput[]
    NOT?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Level"> | string
    title?: StringWithAggregatesFilter<"Level"> | string
    imageFileName?: StringWithAggregatesFilter<"Level"> | string
    difficulty?: StringWithAggregatesFilter<"Level"> | string
  }

  export type SearchObjectWhereInput = {
    AND?: SearchObjectWhereInput | SearchObjectWhereInput[]
    OR?: SearchObjectWhereInput[]
    NOT?: SearchObjectWhereInput | SearchObjectWhereInput[]
    id?: StringFilter<"SearchObject"> | string
    name?: StringFilter<"SearchObject"> | string
    iconFileName?: StringFilter<"SearchObject"> | string
    targetX?: FloatFilter<"SearchObject"> | number
    targetY?: FloatFilter<"SearchObject"> | number
    radius?: FloatFilter<"SearchObject"> | number
    levelId?: StringFilter<"SearchObject"> | string
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type SearchObjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    iconFileName?: SortOrder
    targetX?: SortOrder
    targetY?: SortOrder
    radius?: SortOrder
    levelId?: SortOrder
    level?: LevelOrderByWithRelationInput
  }

  export type SearchObjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SearchObjectWhereInput | SearchObjectWhereInput[]
    OR?: SearchObjectWhereInput[]
    NOT?: SearchObjectWhereInput | SearchObjectWhereInput[]
    name?: StringFilter<"SearchObject"> | string
    iconFileName?: StringFilter<"SearchObject"> | string
    targetX?: FloatFilter<"SearchObject"> | number
    targetY?: FloatFilter<"SearchObject"> | number
    radius?: FloatFilter<"SearchObject"> | number
    levelId?: StringFilter<"SearchObject"> | string
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id">

  export type SearchObjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    iconFileName?: SortOrder
    targetX?: SortOrder
    targetY?: SortOrder
    radius?: SortOrder
    levelId?: SortOrder
    _count?: SearchObjectCountOrderByAggregateInput
    _avg?: SearchObjectAvgOrderByAggregateInput
    _max?: SearchObjectMaxOrderByAggregateInput
    _min?: SearchObjectMinOrderByAggregateInput
    _sum?: SearchObjectSumOrderByAggregateInput
  }

  export type SearchObjectScalarWhereWithAggregatesInput = {
    AND?: SearchObjectScalarWhereWithAggregatesInput | SearchObjectScalarWhereWithAggregatesInput[]
    OR?: SearchObjectScalarWhereWithAggregatesInput[]
    NOT?: SearchObjectScalarWhereWithAggregatesInput | SearchObjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SearchObject"> | string
    name?: StringWithAggregatesFilter<"SearchObject"> | string
    iconFileName?: StringWithAggregatesFilter<"SearchObject"> | string
    targetX?: FloatWithAggregatesFilter<"SearchObject"> | number
    targetY?: FloatWithAggregatesFilter<"SearchObject"> | number
    radius?: FloatWithAggregatesFilter<"SearchObject"> | number
    levelId?: StringWithAggregatesFilter<"SearchObject"> | string
  }

  export type PlayerSessionWhereInput = {
    AND?: PlayerSessionWhereInput | PlayerSessionWhereInput[]
    OR?: PlayerSessionWhereInput[]
    NOT?: PlayerSessionWhereInput | PlayerSessionWhereInput[]
    id?: StringFilter<"PlayerSession"> | string
    playerName?: StringNullableFilter<"PlayerSession"> | string | null
    startTime?: DateTimeFilter<"PlayerSession"> | Date | string
    endTime?: DateTimeNullableFilter<"PlayerSession"> | Date | string | null
    finalTimeSeconds?: IntNullableFilter<"PlayerSession"> | number | null
    levelId?: StringFilter<"PlayerSession"> | string
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }

  export type PlayerSessionOrderByWithRelationInput = {
    id?: SortOrder
    playerName?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    finalTimeSeconds?: SortOrderInput | SortOrder
    levelId?: SortOrder
    level?: LevelOrderByWithRelationInput
  }

  export type PlayerSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayerSessionWhereInput | PlayerSessionWhereInput[]
    OR?: PlayerSessionWhereInput[]
    NOT?: PlayerSessionWhereInput | PlayerSessionWhereInput[]
    playerName?: StringNullableFilter<"PlayerSession"> | string | null
    startTime?: DateTimeFilter<"PlayerSession"> | Date | string
    endTime?: DateTimeNullableFilter<"PlayerSession"> | Date | string | null
    finalTimeSeconds?: IntNullableFilter<"PlayerSession"> | number | null
    levelId?: StringFilter<"PlayerSession"> | string
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
  }, "id">

  export type PlayerSessionOrderByWithAggregationInput = {
    id?: SortOrder
    playerName?: SortOrderInput | SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    finalTimeSeconds?: SortOrderInput | SortOrder
    levelId?: SortOrder
    _count?: PlayerSessionCountOrderByAggregateInput
    _avg?: PlayerSessionAvgOrderByAggregateInput
    _max?: PlayerSessionMaxOrderByAggregateInput
    _min?: PlayerSessionMinOrderByAggregateInput
    _sum?: PlayerSessionSumOrderByAggregateInput
  }

  export type PlayerSessionScalarWhereWithAggregatesInput = {
    AND?: PlayerSessionScalarWhereWithAggregatesInput | PlayerSessionScalarWhereWithAggregatesInput[]
    OR?: PlayerSessionScalarWhereWithAggregatesInput[]
    NOT?: PlayerSessionScalarWhereWithAggregatesInput | PlayerSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerSession"> | string
    playerName?: StringNullableWithAggregatesFilter<"PlayerSession"> | string | null
    startTime?: DateTimeWithAggregatesFilter<"PlayerSession"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"PlayerSession"> | Date | string | null
    finalTimeSeconds?: IntNullableWithAggregatesFilter<"PlayerSession"> | number | null
    levelId?: StringWithAggregatesFilter<"PlayerSession"> | string
  }

  export type LevelCreateInput = {
    id?: string
    title: string
    imageFileName: string
    difficulty?: string
    targets?: SearchObjectCreateNestedManyWithoutLevelInput
    sessions?: PlayerSessionCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateInput = {
    id?: string
    title: string
    imageFileName: string
    difficulty?: string
    targets?: SearchObjectUncheckedCreateNestedManyWithoutLevelInput
    sessions?: PlayerSessionUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageFileName?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    targets?: SearchObjectUpdateManyWithoutLevelNestedInput
    sessions?: PlayerSessionUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageFileName?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    targets?: SearchObjectUncheckedUpdateManyWithoutLevelNestedInput
    sessions?: PlayerSessionUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateManyInput = {
    id?: string
    title: string
    imageFileName: string
    difficulty?: string
  }

  export type LevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageFileName?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
  }

  export type LevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageFileName?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
  }

  export type SearchObjectCreateInput = {
    id?: string
    name: string
    iconFileName: string
    targetX: number
    targetY: number
    radius?: number
    level: LevelCreateNestedOneWithoutTargetsInput
  }

  export type SearchObjectUncheckedCreateInput = {
    id?: string
    name: string
    iconFileName: string
    targetX: number
    targetY: number
    radius?: number
    levelId: string
  }

  export type SearchObjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconFileName?: StringFieldUpdateOperationsInput | string
    targetX?: FloatFieldUpdateOperationsInput | number
    targetY?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    level?: LevelUpdateOneRequiredWithoutTargetsNestedInput
  }

  export type SearchObjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconFileName?: StringFieldUpdateOperationsInput | string
    targetX?: FloatFieldUpdateOperationsInput | number
    targetY?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    levelId?: StringFieldUpdateOperationsInput | string
  }

  export type SearchObjectCreateManyInput = {
    id?: string
    name: string
    iconFileName: string
    targetX: number
    targetY: number
    radius?: number
    levelId: string
  }

  export type SearchObjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconFileName?: StringFieldUpdateOperationsInput | string
    targetX?: FloatFieldUpdateOperationsInput | number
    targetY?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
  }

  export type SearchObjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconFileName?: StringFieldUpdateOperationsInput | string
    targetX?: FloatFieldUpdateOperationsInput | number
    targetY?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
    levelId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerSessionCreateInput = {
    id?: string
    playerName?: string | null
    startTime?: Date | string
    endTime?: Date | string | null
    finalTimeSeconds?: number | null
    level: LevelCreateNestedOneWithoutSessionsInput
  }

  export type PlayerSessionUncheckedCreateInput = {
    id?: string
    playerName?: string | null
    startTime?: Date | string
    endTime?: Date | string | null
    finalTimeSeconds?: number | null
    levelId: string
  }

  export type PlayerSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalTimeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    level?: LevelUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type PlayerSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalTimeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    levelId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerSessionCreateManyInput = {
    id?: string
    playerName?: string | null
    startTime?: Date | string
    endTime?: Date | string | null
    finalTimeSeconds?: number | null
    levelId: string
  }

  export type PlayerSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalTimeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalTimeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    levelId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SearchObjectListRelationFilter = {
    every?: SearchObjectWhereInput
    some?: SearchObjectWhereInput
    none?: SearchObjectWhereInput
  }

  export type PlayerSessionListRelationFilter = {
    every?: PlayerSessionWhereInput
    some?: PlayerSessionWhereInput
    none?: PlayerSessionWhereInput
  }

  export type SearchObjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageFileName?: SortOrder
    difficulty?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageFileName?: SortOrder
    difficulty?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageFileName?: SortOrder
    difficulty?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type LevelScalarRelationFilter = {
    is?: LevelWhereInput
    isNot?: LevelWhereInput
  }

  export type SearchObjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconFileName?: SortOrder
    targetX?: SortOrder
    targetY?: SortOrder
    radius?: SortOrder
    levelId?: SortOrder
  }

  export type SearchObjectAvgOrderByAggregateInput = {
    targetX?: SortOrder
    targetY?: SortOrder
    radius?: SortOrder
  }

  export type SearchObjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconFileName?: SortOrder
    targetX?: SortOrder
    targetY?: SortOrder
    radius?: SortOrder
    levelId?: SortOrder
  }

  export type SearchObjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iconFileName?: SortOrder
    targetX?: SortOrder
    targetY?: SortOrder
    radius?: SortOrder
    levelId?: SortOrder
  }

  export type SearchObjectSumOrderByAggregateInput = {
    targetX?: SortOrder
    targetY?: SortOrder
    radius?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlayerSessionCountOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    finalTimeSeconds?: SortOrder
    levelId?: SortOrder
  }

  export type PlayerSessionAvgOrderByAggregateInput = {
    finalTimeSeconds?: SortOrder
  }

  export type PlayerSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    finalTimeSeconds?: SortOrder
    levelId?: SortOrder
  }

  export type PlayerSessionMinOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    finalTimeSeconds?: SortOrder
    levelId?: SortOrder
  }

  export type PlayerSessionSumOrderByAggregateInput = {
    finalTimeSeconds?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SearchObjectCreateNestedManyWithoutLevelInput = {
    create?: XOR<SearchObjectCreateWithoutLevelInput, SearchObjectUncheckedCreateWithoutLevelInput> | SearchObjectCreateWithoutLevelInput[] | SearchObjectUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SearchObjectCreateOrConnectWithoutLevelInput | SearchObjectCreateOrConnectWithoutLevelInput[]
    createMany?: SearchObjectCreateManyLevelInputEnvelope
    connect?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
  }

  export type PlayerSessionCreateNestedManyWithoutLevelInput = {
    create?: XOR<PlayerSessionCreateWithoutLevelInput, PlayerSessionUncheckedCreateWithoutLevelInput> | PlayerSessionCreateWithoutLevelInput[] | PlayerSessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: PlayerSessionCreateOrConnectWithoutLevelInput | PlayerSessionCreateOrConnectWithoutLevelInput[]
    createMany?: PlayerSessionCreateManyLevelInputEnvelope
    connect?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
  }

  export type SearchObjectUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<SearchObjectCreateWithoutLevelInput, SearchObjectUncheckedCreateWithoutLevelInput> | SearchObjectCreateWithoutLevelInput[] | SearchObjectUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SearchObjectCreateOrConnectWithoutLevelInput | SearchObjectCreateOrConnectWithoutLevelInput[]
    createMany?: SearchObjectCreateManyLevelInputEnvelope
    connect?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
  }

  export type PlayerSessionUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<PlayerSessionCreateWithoutLevelInput, PlayerSessionUncheckedCreateWithoutLevelInput> | PlayerSessionCreateWithoutLevelInput[] | PlayerSessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: PlayerSessionCreateOrConnectWithoutLevelInput | PlayerSessionCreateOrConnectWithoutLevelInput[]
    createMany?: PlayerSessionCreateManyLevelInputEnvelope
    connect?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SearchObjectUpdateManyWithoutLevelNestedInput = {
    create?: XOR<SearchObjectCreateWithoutLevelInput, SearchObjectUncheckedCreateWithoutLevelInput> | SearchObjectCreateWithoutLevelInput[] | SearchObjectUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SearchObjectCreateOrConnectWithoutLevelInput | SearchObjectCreateOrConnectWithoutLevelInput[]
    upsert?: SearchObjectUpsertWithWhereUniqueWithoutLevelInput | SearchObjectUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: SearchObjectCreateManyLevelInputEnvelope
    set?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
    disconnect?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
    delete?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
    connect?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
    update?: SearchObjectUpdateWithWhereUniqueWithoutLevelInput | SearchObjectUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: SearchObjectUpdateManyWithWhereWithoutLevelInput | SearchObjectUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: SearchObjectScalarWhereInput | SearchObjectScalarWhereInput[]
  }

  export type PlayerSessionUpdateManyWithoutLevelNestedInput = {
    create?: XOR<PlayerSessionCreateWithoutLevelInput, PlayerSessionUncheckedCreateWithoutLevelInput> | PlayerSessionCreateWithoutLevelInput[] | PlayerSessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: PlayerSessionCreateOrConnectWithoutLevelInput | PlayerSessionCreateOrConnectWithoutLevelInput[]
    upsert?: PlayerSessionUpsertWithWhereUniqueWithoutLevelInput | PlayerSessionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: PlayerSessionCreateManyLevelInputEnvelope
    set?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
    disconnect?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
    delete?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
    connect?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
    update?: PlayerSessionUpdateWithWhereUniqueWithoutLevelInput | PlayerSessionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: PlayerSessionUpdateManyWithWhereWithoutLevelInput | PlayerSessionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: PlayerSessionScalarWhereInput | PlayerSessionScalarWhereInput[]
  }

  export type SearchObjectUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<SearchObjectCreateWithoutLevelInput, SearchObjectUncheckedCreateWithoutLevelInput> | SearchObjectCreateWithoutLevelInput[] | SearchObjectUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: SearchObjectCreateOrConnectWithoutLevelInput | SearchObjectCreateOrConnectWithoutLevelInput[]
    upsert?: SearchObjectUpsertWithWhereUniqueWithoutLevelInput | SearchObjectUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: SearchObjectCreateManyLevelInputEnvelope
    set?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
    disconnect?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
    delete?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
    connect?: SearchObjectWhereUniqueInput | SearchObjectWhereUniqueInput[]
    update?: SearchObjectUpdateWithWhereUniqueWithoutLevelInput | SearchObjectUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: SearchObjectUpdateManyWithWhereWithoutLevelInput | SearchObjectUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: SearchObjectScalarWhereInput | SearchObjectScalarWhereInput[]
  }

  export type PlayerSessionUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<PlayerSessionCreateWithoutLevelInput, PlayerSessionUncheckedCreateWithoutLevelInput> | PlayerSessionCreateWithoutLevelInput[] | PlayerSessionUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: PlayerSessionCreateOrConnectWithoutLevelInput | PlayerSessionCreateOrConnectWithoutLevelInput[]
    upsert?: PlayerSessionUpsertWithWhereUniqueWithoutLevelInput | PlayerSessionUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: PlayerSessionCreateManyLevelInputEnvelope
    set?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
    disconnect?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
    delete?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
    connect?: PlayerSessionWhereUniqueInput | PlayerSessionWhereUniqueInput[]
    update?: PlayerSessionUpdateWithWhereUniqueWithoutLevelInput | PlayerSessionUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: PlayerSessionUpdateManyWithWhereWithoutLevelInput | PlayerSessionUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: PlayerSessionScalarWhereInput | PlayerSessionScalarWhereInput[]
  }

  export type LevelCreateNestedOneWithoutTargetsInput = {
    create?: XOR<LevelCreateWithoutTargetsInput, LevelUncheckedCreateWithoutTargetsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutTargetsInput
    connect?: LevelWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LevelUpdateOneRequiredWithoutTargetsNestedInput = {
    create?: XOR<LevelCreateWithoutTargetsInput, LevelUncheckedCreateWithoutTargetsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutTargetsInput
    upsert?: LevelUpsertWithoutTargetsInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutTargetsInput, LevelUpdateWithoutTargetsInput>, LevelUncheckedUpdateWithoutTargetsInput>
  }

  export type LevelCreateNestedOneWithoutSessionsInput = {
    create?: XOR<LevelCreateWithoutSessionsInput, LevelUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutSessionsInput
    connect?: LevelWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LevelUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<LevelCreateWithoutSessionsInput, LevelUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutSessionsInput
    upsert?: LevelUpsertWithoutSessionsInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutSessionsInput, LevelUpdateWithoutSessionsInput>, LevelUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SearchObjectCreateWithoutLevelInput = {
    id?: string
    name: string
    iconFileName: string
    targetX: number
    targetY: number
    radius?: number
  }

  export type SearchObjectUncheckedCreateWithoutLevelInput = {
    id?: string
    name: string
    iconFileName: string
    targetX: number
    targetY: number
    radius?: number
  }

  export type SearchObjectCreateOrConnectWithoutLevelInput = {
    where: SearchObjectWhereUniqueInput
    create: XOR<SearchObjectCreateWithoutLevelInput, SearchObjectUncheckedCreateWithoutLevelInput>
  }

  export type SearchObjectCreateManyLevelInputEnvelope = {
    data: SearchObjectCreateManyLevelInput | SearchObjectCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type PlayerSessionCreateWithoutLevelInput = {
    id?: string
    playerName?: string | null
    startTime?: Date | string
    endTime?: Date | string | null
    finalTimeSeconds?: number | null
  }

  export type PlayerSessionUncheckedCreateWithoutLevelInput = {
    id?: string
    playerName?: string | null
    startTime?: Date | string
    endTime?: Date | string | null
    finalTimeSeconds?: number | null
  }

  export type PlayerSessionCreateOrConnectWithoutLevelInput = {
    where: PlayerSessionWhereUniqueInput
    create: XOR<PlayerSessionCreateWithoutLevelInput, PlayerSessionUncheckedCreateWithoutLevelInput>
  }

  export type PlayerSessionCreateManyLevelInputEnvelope = {
    data: PlayerSessionCreateManyLevelInput | PlayerSessionCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type SearchObjectUpsertWithWhereUniqueWithoutLevelInput = {
    where: SearchObjectWhereUniqueInput
    update: XOR<SearchObjectUpdateWithoutLevelInput, SearchObjectUncheckedUpdateWithoutLevelInput>
    create: XOR<SearchObjectCreateWithoutLevelInput, SearchObjectUncheckedCreateWithoutLevelInput>
  }

  export type SearchObjectUpdateWithWhereUniqueWithoutLevelInput = {
    where: SearchObjectWhereUniqueInput
    data: XOR<SearchObjectUpdateWithoutLevelInput, SearchObjectUncheckedUpdateWithoutLevelInput>
  }

  export type SearchObjectUpdateManyWithWhereWithoutLevelInput = {
    where: SearchObjectScalarWhereInput
    data: XOR<SearchObjectUpdateManyMutationInput, SearchObjectUncheckedUpdateManyWithoutLevelInput>
  }

  export type SearchObjectScalarWhereInput = {
    AND?: SearchObjectScalarWhereInput | SearchObjectScalarWhereInput[]
    OR?: SearchObjectScalarWhereInput[]
    NOT?: SearchObjectScalarWhereInput | SearchObjectScalarWhereInput[]
    id?: StringFilter<"SearchObject"> | string
    name?: StringFilter<"SearchObject"> | string
    iconFileName?: StringFilter<"SearchObject"> | string
    targetX?: FloatFilter<"SearchObject"> | number
    targetY?: FloatFilter<"SearchObject"> | number
    radius?: FloatFilter<"SearchObject"> | number
    levelId?: StringFilter<"SearchObject"> | string
  }

  export type PlayerSessionUpsertWithWhereUniqueWithoutLevelInput = {
    where: PlayerSessionWhereUniqueInput
    update: XOR<PlayerSessionUpdateWithoutLevelInput, PlayerSessionUncheckedUpdateWithoutLevelInput>
    create: XOR<PlayerSessionCreateWithoutLevelInput, PlayerSessionUncheckedCreateWithoutLevelInput>
  }

  export type PlayerSessionUpdateWithWhereUniqueWithoutLevelInput = {
    where: PlayerSessionWhereUniqueInput
    data: XOR<PlayerSessionUpdateWithoutLevelInput, PlayerSessionUncheckedUpdateWithoutLevelInput>
  }

  export type PlayerSessionUpdateManyWithWhereWithoutLevelInput = {
    where: PlayerSessionScalarWhereInput
    data: XOR<PlayerSessionUpdateManyMutationInput, PlayerSessionUncheckedUpdateManyWithoutLevelInput>
  }

  export type PlayerSessionScalarWhereInput = {
    AND?: PlayerSessionScalarWhereInput | PlayerSessionScalarWhereInput[]
    OR?: PlayerSessionScalarWhereInput[]
    NOT?: PlayerSessionScalarWhereInput | PlayerSessionScalarWhereInput[]
    id?: StringFilter<"PlayerSession"> | string
    playerName?: StringNullableFilter<"PlayerSession"> | string | null
    startTime?: DateTimeFilter<"PlayerSession"> | Date | string
    endTime?: DateTimeNullableFilter<"PlayerSession"> | Date | string | null
    finalTimeSeconds?: IntNullableFilter<"PlayerSession"> | number | null
    levelId?: StringFilter<"PlayerSession"> | string
  }

  export type LevelCreateWithoutTargetsInput = {
    id?: string
    title: string
    imageFileName: string
    difficulty?: string
    sessions?: PlayerSessionCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutTargetsInput = {
    id?: string
    title: string
    imageFileName: string
    difficulty?: string
    sessions?: PlayerSessionUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutTargetsInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutTargetsInput, LevelUncheckedCreateWithoutTargetsInput>
  }

  export type LevelUpsertWithoutTargetsInput = {
    update: XOR<LevelUpdateWithoutTargetsInput, LevelUncheckedUpdateWithoutTargetsInput>
    create: XOR<LevelCreateWithoutTargetsInput, LevelUncheckedCreateWithoutTargetsInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutTargetsInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutTargetsInput, LevelUncheckedUpdateWithoutTargetsInput>
  }

  export type LevelUpdateWithoutTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageFileName?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    sessions?: PlayerSessionUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutTargetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageFileName?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    sessions?: PlayerSessionUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateWithoutSessionsInput = {
    id?: string
    title: string
    imageFileName: string
    difficulty?: string
    targets?: SearchObjectCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateWithoutSessionsInput = {
    id?: string
    title: string
    imageFileName: string
    difficulty?: string
    targets?: SearchObjectUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelCreateOrConnectWithoutSessionsInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutSessionsInput, LevelUncheckedCreateWithoutSessionsInput>
  }

  export type LevelUpsertWithoutSessionsInput = {
    update: XOR<LevelUpdateWithoutSessionsInput, LevelUncheckedUpdateWithoutSessionsInput>
    create: XOR<LevelCreateWithoutSessionsInput, LevelUncheckedCreateWithoutSessionsInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutSessionsInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutSessionsInput, LevelUncheckedUpdateWithoutSessionsInput>
  }

  export type LevelUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageFileName?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    targets?: SearchObjectUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageFileName?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    targets?: SearchObjectUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type SearchObjectCreateManyLevelInput = {
    id?: string
    name: string
    iconFileName: string
    targetX: number
    targetY: number
    radius?: number
  }

  export type PlayerSessionCreateManyLevelInput = {
    id?: string
    playerName?: string | null
    startTime?: Date | string
    endTime?: Date | string | null
    finalTimeSeconds?: number | null
  }

  export type SearchObjectUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconFileName?: StringFieldUpdateOperationsInput | string
    targetX?: FloatFieldUpdateOperationsInput | number
    targetY?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
  }

  export type SearchObjectUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconFileName?: StringFieldUpdateOperationsInput | string
    targetX?: FloatFieldUpdateOperationsInput | number
    targetY?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
  }

  export type SearchObjectUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iconFileName?: StringFieldUpdateOperationsInput | string
    targetX?: FloatFieldUpdateOperationsInput | number
    targetY?: FloatFieldUpdateOperationsInput | number
    radius?: FloatFieldUpdateOperationsInput | number
  }

  export type PlayerSessionUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalTimeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerSessionUncheckedUpdateWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalTimeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PlayerSessionUncheckedUpdateManyWithoutLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: NullableStringFieldUpdateOperationsInput | string | null
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalTimeSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}