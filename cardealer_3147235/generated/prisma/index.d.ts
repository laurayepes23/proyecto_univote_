
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model administrador
 * 
 */
export type administrador = $Result.DefaultSelection<Prisma.$administradorPayload>
/**
 * Model voters
 * 
 */
export type voters = $Result.DefaultSelection<Prisma.$votersPayload>
/**
 * Model elections
 * 
 */
export type elections = $Result.DefaultSelection<Prisma.$electionsPayload>
/**
 * Model candidates
 * 
 */
export type candidates = $Result.DefaultSelection<Prisma.$candidatesPayload>
/**
 * Model votes
 * 
 */
export type votes = $Result.DefaultSelection<Prisma.$votesPayload>
/**
 * Model proposal
 * 
 */
export type proposal = $Result.DefaultSelection<Prisma.$proposalPayload>
/**
 * Model career
 * 
 */
export type career = $Result.DefaultSelection<Prisma.$careerPayload>
/**
 * Model results
 * 
 */
export type results = $Result.DefaultSelection<Prisma.$resultsPayload>
/**
 * Model role
 * 
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administradors
 * const administradors = await prisma.administrador.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Administradors
   * const administradors = await prisma.administrador.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.administrador`: Exposes CRUD operations for the **administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.administradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voters`: Exposes CRUD operations for the **voters** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Voters
    * const voters = await prisma.voters.findMany()
    * ```
    */
  get voters(): Prisma.votersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.elections`: Exposes CRUD operations for the **elections** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Elections
    * const elections = await prisma.elections.findMany()
    * ```
    */
  get elections(): Prisma.electionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.candidates`: Exposes CRUD operations for the **candidates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Candidates
    * const candidates = await prisma.candidates.findMany()
    * ```
    */
  get candidates(): Prisma.candidatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.votes`: Exposes CRUD operations for the **votes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Votes
    * const votes = await prisma.votes.findMany()
    * ```
    */
  get votes(): Prisma.votesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.proposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.career`: Exposes CRUD operations for the **career** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Careers
    * const careers = await prisma.career.findMany()
    * ```
    */
  get career(): Prisma.careerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.results`: Exposes CRUD operations for the **results** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.results.findMany()
    * ```
    */
  get results(): Prisma.resultsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.roleDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    administrador: 'administrador',
    voters: 'voters',
    elections: 'elections',
    candidates: 'candidates',
    votes: 'votes',
    proposal: 'proposal',
    career: 'career',
    results: 'results',
    role: 'role'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "administrador" | "voters" | "elections" | "candidates" | "votes" | "proposal" | "career" | "results" | "role"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      administrador: {
        payload: Prisma.$administradorPayload<ExtArgs>
        fields: Prisma.administradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.administradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.administradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          findFirst: {
            args: Prisma.administradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.administradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          findMany: {
            args: Prisma.administradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>[]
          }
          create: {
            args: Prisma.administradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          createMany: {
            args: Prisma.administradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.administradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          update: {
            args: Prisma.administradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          deleteMany: {
            args: Prisma.administradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.administradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.administradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$administradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.administradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.administradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      voters: {
        payload: Prisma.$votersPayload<ExtArgs>
        fields: Prisma.votersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.votersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.votersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votersPayload>
          }
          findFirst: {
            args: Prisma.votersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.votersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votersPayload>
          }
          findMany: {
            args: Prisma.votersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votersPayload>[]
          }
          create: {
            args: Prisma.votersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votersPayload>
          }
          createMany: {
            args: Prisma.votersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.votersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votersPayload>
          }
          update: {
            args: Prisma.votersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votersPayload>
          }
          deleteMany: {
            args: Prisma.votersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.votersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.votersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votersPayload>
          }
          aggregate: {
            args: Prisma.VotersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoters>
          }
          groupBy: {
            args: Prisma.votersGroupByArgs<ExtArgs>
            result: $Utils.Optional<VotersGroupByOutputType>[]
          }
          count: {
            args: Prisma.votersCountArgs<ExtArgs>
            result: $Utils.Optional<VotersCountAggregateOutputType> | number
          }
        }
      }
      elections: {
        payload: Prisma.$electionsPayload<ExtArgs>
        fields: Prisma.electionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.electionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$electionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.electionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$electionsPayload>
          }
          findFirst: {
            args: Prisma.electionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$electionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.electionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$electionsPayload>
          }
          findMany: {
            args: Prisma.electionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$electionsPayload>[]
          }
          create: {
            args: Prisma.electionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$electionsPayload>
          }
          createMany: {
            args: Prisma.electionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.electionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$electionsPayload>
          }
          update: {
            args: Prisma.electionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$electionsPayload>
          }
          deleteMany: {
            args: Prisma.electionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.electionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.electionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$electionsPayload>
          }
          aggregate: {
            args: Prisma.ElectionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateElections>
          }
          groupBy: {
            args: Prisma.electionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ElectionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.electionsCountArgs<ExtArgs>
            result: $Utils.Optional<ElectionsCountAggregateOutputType> | number
          }
        }
      }
      candidates: {
        payload: Prisma.$candidatesPayload<ExtArgs>
        fields: Prisma.candidatesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.candidatesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.candidatesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          findFirst: {
            args: Prisma.candidatesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.candidatesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          findMany: {
            args: Prisma.candidatesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>[]
          }
          create: {
            args: Prisma.candidatesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          createMany: {
            args: Prisma.candidatesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.candidatesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          update: {
            args: Prisma.candidatesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          deleteMany: {
            args: Prisma.candidatesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.candidatesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.candidatesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$candidatesPayload>
          }
          aggregate: {
            args: Prisma.CandidatesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCandidates>
          }
          groupBy: {
            args: Prisma.candidatesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CandidatesGroupByOutputType>[]
          }
          count: {
            args: Prisma.candidatesCountArgs<ExtArgs>
            result: $Utils.Optional<CandidatesCountAggregateOutputType> | number
          }
        }
      }
      votes: {
        payload: Prisma.$votesPayload<ExtArgs>
        fields: Prisma.votesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.votesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.votesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          findFirst: {
            args: Prisma.votesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.votesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          findMany: {
            args: Prisma.votesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>[]
          }
          create: {
            args: Prisma.votesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          createMany: {
            args: Prisma.votesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.votesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          update: {
            args: Prisma.votesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          deleteMany: {
            args: Prisma.votesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.votesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.votesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$votesPayload>
          }
          aggregate: {
            args: Prisma.VotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVotes>
          }
          groupBy: {
            args: Prisma.votesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.votesCountArgs<ExtArgs>
            result: $Utils.Optional<VotesCountAggregateOutputType> | number
          }
        }
      }
      proposal: {
        payload: Prisma.$proposalPayload<ExtArgs>
        fields: Prisma.proposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.proposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.proposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>
          }
          findFirst: {
            args: Prisma.proposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.proposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>
          }
          findMany: {
            args: Prisma.proposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>[]
          }
          create: {
            args: Prisma.proposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>
          }
          createMany: {
            args: Prisma.proposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.proposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>
          }
          update: {
            args: Prisma.proposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>
          }
          deleteMany: {
            args: Prisma.proposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.proposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.proposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$proposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.proposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.proposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      career: {
        payload: Prisma.$careerPayload<ExtArgs>
        fields: Prisma.careerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.careerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.careerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          findFirst: {
            args: Prisma.careerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.careerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          findMany: {
            args: Prisma.careerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careerPayload>[]
          }
          create: {
            args: Prisma.careerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          createMany: {
            args: Prisma.careerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.careerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          update: {
            args: Prisma.careerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          deleteMany: {
            args: Prisma.careerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.careerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.careerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$careerPayload>
          }
          aggregate: {
            args: Prisma.CareerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareer>
          }
          groupBy: {
            args: Prisma.careerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareerGroupByOutputType>[]
          }
          count: {
            args: Prisma.careerCountArgs<ExtArgs>
            result: $Utils.Optional<CareerCountAggregateOutputType> | number
          }
        }
      }
      results: {
        payload: Prisma.$resultsPayload<ExtArgs>
        fields: Prisma.resultsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.resultsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.resultsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          findFirst: {
            args: Prisma.resultsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.resultsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          findMany: {
            args: Prisma.resultsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>[]
          }
          create: {
            args: Prisma.resultsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          createMany: {
            args: Prisma.resultsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.resultsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          update: {
            args: Prisma.resultsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          deleteMany: {
            args: Prisma.resultsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.resultsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.resultsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$resultsPayload>
          }
          aggregate: {
            args: Prisma.ResultsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResults>
          }
          groupBy: {
            args: Prisma.resultsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultsGroupByOutputType>[]
          }
          count: {
            args: Prisma.resultsCountArgs<ExtArgs>
            result: $Utils.Optional<ResultsCountAggregateOutputType> | number
          }
        }
      }
      role: {
        payload: Prisma.$rolePayload<ExtArgs>
        fields: Prisma.roleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[]
          }
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.roleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    administrador?: administradorOmit
    voters?: votersOmit
    elections?: electionsOmit
    candidates?: candidatesOmit
    votes?: votesOmit
    proposal?: proposalOmit
    career?: careerOmit
    results?: resultsOmit
    role?: roleOmit
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
   * Count Type AdministradorCountOutputType
   */

  export type AdministradorCountOutputType = {
    elections: number
  }

  export type AdministradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elections?: boolean | AdministradorCountOutputTypeCountElectionsArgs
  }

  // Custom InputTypes
  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministradorCountOutputType
     */
    select?: AdministradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountElectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: electionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    id_admin: number | null
    num_doc_admin: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    id_admin: number | null
    num_doc_admin: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    id_admin: number | null
    nombre_admin: string | null
    apellido_admin: string | null
    tipo_doc_admin: string | null
    num_doc_admin: number | null
    correo_admin: string | null
    contrasena_admin: string | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id_admin: number | null
    nombre_admin: string | null
    apellido_admin: string | null
    tipo_doc_admin: string | null
    num_doc_admin: number | null
    correo_admin: string | null
    contrasena_admin: string | null
  }

  export type AdministradorCountAggregateOutputType = {
    id_admin: number
    nombre_admin: number
    apellido_admin: number
    tipo_doc_admin: number
    num_doc_admin: number
    correo_admin: number
    contrasena_admin: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    id_admin?: true
    num_doc_admin?: true
  }

  export type AdministradorSumAggregateInputType = {
    id_admin?: true
    num_doc_admin?: true
  }

  export type AdministradorMinAggregateInputType = {
    id_admin?: true
    nombre_admin?: true
    apellido_admin?: true
    tipo_doc_admin?: true
    num_doc_admin?: true
    correo_admin?: true
    contrasena_admin?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id_admin?: true
    nombre_admin?: true
    apellido_admin?: true
    tipo_doc_admin?: true
    num_doc_admin?: true
    correo_admin?: true
    contrasena_admin?: true
  }

  export type AdministradorCountAggregateInputType = {
    id_admin?: true
    nombre_admin?: true
    apellido_admin?: true
    tipo_doc_admin?: true
    num_doc_admin?: true
    correo_admin?: true
    contrasena_admin?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administrador to aggregate.
     */
    where?: administradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradors to fetch.
     */
    orderBy?: administradorOrderByWithRelationInput | administradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: administradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type administradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: administradorWhereInput
    orderBy?: administradorOrderByWithAggregationInput | administradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: administradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id_admin: number
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: number
    correo_admin: string
    contrasena_admin: string
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends administradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type administradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_admin?: boolean
    nombre_admin?: boolean
    apellido_admin?: boolean
    tipo_doc_admin?: boolean
    num_doc_admin?: boolean
    correo_admin?: boolean
    contrasena_admin?: boolean
    elections?: boolean | administrador$electionsArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>



  export type administradorSelectScalar = {
    id_admin?: boolean
    nombre_admin?: boolean
    apellido_admin?: boolean
    tipo_doc_admin?: boolean
    num_doc_admin?: boolean
    correo_admin?: boolean
    contrasena_admin?: boolean
  }

  export type administradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_admin" | "nombre_admin" | "apellido_admin" | "tipo_doc_admin" | "num_doc_admin" | "correo_admin" | "contrasena_admin", ExtArgs["result"]["administrador"]>
  export type administradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    elections?: boolean | administrador$electionsArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $administradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "administrador"
    objects: {
      elections: Prisma.$electionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_admin: number
      nombre_admin: string
      apellido_admin: string
      tipo_doc_admin: string
      num_doc_admin: number
      correo_admin: string
      contrasena_admin: string
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type administradorGetPayload<S extends boolean | null | undefined | administradorDefaultArgs> = $Result.GetResult<Prisma.$administradorPayload, S>

  type administradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<administradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface administradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['administrador'], meta: { name: 'administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {administradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends administradorFindUniqueArgs>(args: SelectSubset<T, administradorFindUniqueArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {administradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends administradorFindUniqueOrThrowArgs>(args: SelectSubset<T, administradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends administradorFindFirstArgs>(args?: SelectSubset<T, administradorFindFirstArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends administradorFindFirstOrThrowArgs>(args?: SelectSubset<T, administradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id_admin`
     * const administradorWithId_adminOnly = await prisma.administrador.findMany({ select: { id_admin: true } })
     * 
     */
    findMany<T extends administradorFindManyArgs>(args?: SelectSubset<T, administradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {administradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends administradorCreateArgs>(args: SelectSubset<T, administradorCreateArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {administradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends administradorCreateManyArgs>(args?: SelectSubset<T, administradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Administrador.
     * @param {administradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends administradorDeleteArgs>(args: SelectSubset<T, administradorDeleteArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {administradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends administradorUpdateArgs>(args: SelectSubset<T, administradorUpdateArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {administradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends administradorDeleteManyArgs>(args?: SelectSubset<T, administradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends administradorUpdateManyArgs>(args: SelectSubset<T, administradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrador.
     * @param {administradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends administradorUpsertArgs>(args: SelectSubset<T, administradorUpsertArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends administradorCountArgs>(
      args?: Subset<T, administradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {administradorGroupByArgs} args - Group by arguments.
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
      T extends administradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: administradorGroupByArgs['orderBy'] }
        : { orderBy?: administradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, administradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the administrador model
   */
  readonly fields: administradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__administradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    elections<T extends administrador$electionsArgs<ExtArgs> = {}>(args?: Subset<T, administrador$electionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the administrador model
   */
  interface administradorFieldRefs {
    readonly id_admin: FieldRef<"administrador", 'Int'>
    readonly nombre_admin: FieldRef<"administrador", 'String'>
    readonly apellido_admin: FieldRef<"administrador", 'String'>
    readonly tipo_doc_admin: FieldRef<"administrador", 'String'>
    readonly num_doc_admin: FieldRef<"administrador", 'Int'>
    readonly correo_admin: FieldRef<"administrador", 'String'>
    readonly contrasena_admin: FieldRef<"administrador", 'String'>
  }
    

  // Custom InputTypes
  /**
   * administrador findUnique
   */
  export type administradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administrador to fetch.
     */
    where: administradorWhereUniqueInput
  }

  /**
   * administrador findUniqueOrThrow
   */
  export type administradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administrador to fetch.
     */
    where: administradorWhereUniqueInput
  }

  /**
   * administrador findFirst
   */
  export type administradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administrador to fetch.
     */
    where?: administradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradors to fetch.
     */
    orderBy?: administradorOrderByWithRelationInput | administradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administradors.
     */
    cursor?: administradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * administrador findFirstOrThrow
   */
  export type administradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administrador to fetch.
     */
    where?: administradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradors to fetch.
     */
    orderBy?: administradorOrderByWithRelationInput | administradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for administradors.
     */
    cursor?: administradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * administrador findMany
   */
  export type administradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter, which administradors to fetch.
     */
    where?: administradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of administradors to fetch.
     */
    orderBy?: administradorOrderByWithRelationInput | administradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing administradors.
     */
    cursor?: administradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * administrador create
   */
  export type administradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * The data needed to create a administrador.
     */
    data: XOR<administradorCreateInput, administradorUncheckedCreateInput>
  }

  /**
   * administrador createMany
   */
  export type administradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many administradors.
     */
    data: administradorCreateManyInput | administradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * administrador update
   */
  export type administradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * The data needed to update a administrador.
     */
    data: XOR<administradorUpdateInput, administradorUncheckedUpdateInput>
    /**
     * Choose, which administrador to update.
     */
    where: administradorWhereUniqueInput
  }

  /**
   * administrador updateMany
   */
  export type administradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update administradors.
     */
    data: XOR<administradorUpdateManyMutationInput, administradorUncheckedUpdateManyInput>
    /**
     * Filter which administradors to update
     */
    where?: administradorWhereInput
    /**
     * Limit how many administradors to update.
     */
    limit?: number
  }

  /**
   * administrador upsert
   */
  export type administradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * The filter to search for the administrador to update in case it exists.
     */
    where: administradorWhereUniqueInput
    /**
     * In case the administrador found by the `where` argument doesn't exist, create a new administrador with this data.
     */
    create: XOR<administradorCreateInput, administradorUncheckedCreateInput>
    /**
     * In case the administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<administradorUpdateInput, administradorUncheckedUpdateInput>
  }

  /**
   * administrador delete
   */
  export type administradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
    /**
     * Filter which administrador to delete.
     */
    where: administradorWhereUniqueInput
  }

  /**
   * administrador deleteMany
   */
  export type administradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which administradors to delete
     */
    where?: administradorWhereInput
    /**
     * Limit how many administradors to delete.
     */
    limit?: number
  }

  /**
   * administrador.elections
   */
  export type administrador$electionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    where?: electionsWhereInput
    orderBy?: electionsOrderByWithRelationInput | electionsOrderByWithRelationInput[]
    cursor?: electionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ElectionsScalarFieldEnum | ElectionsScalarFieldEnum[]
  }

  /**
   * administrador without action
   */
  export type administradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the administrador
     */
    select?: administradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the administrador
     */
    omit?: administradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: administradorInclude<ExtArgs> | null
  }


  /**
   * Model voters
   */

  export type AggregateVoters = {
    _count: VotersCountAggregateOutputType | null
    _avg: VotersAvgAggregateOutputType | null
    _sum: VotersSumAggregateOutputType | null
    _min: VotersMinAggregateOutputType | null
    _max: VotersMaxAggregateOutputType | null
  }

  export type VotersAvgAggregateOutputType = {
    id_voter: number | null
    num_doc_voter: number | null
  }

  export type VotersSumAggregateOutputType = {
    id_voter: number | null
    num_doc_voter: number | null
  }

  export type VotersMinAggregateOutputType = {
    id_voter: number | null
    nombre_voter: string | null
    apellido_voter: string | null
    tipo_doc_voter: string | null
    num_doc_voter: number | null
    correo_voter: string | null
    estado_voter: string | null
    contrasena_voter: string | null
  }

  export type VotersMaxAggregateOutputType = {
    id_voter: number | null
    nombre_voter: string | null
    apellido_voter: string | null
    tipo_doc_voter: string | null
    num_doc_voter: number | null
    correo_voter: string | null
    estado_voter: string | null
    contrasena_voter: string | null
  }

  export type VotersCountAggregateOutputType = {
    id_voter: number
    nombre_voter: number
    apellido_voter: number
    tipo_doc_voter: number
    num_doc_voter: number
    correo_voter: number
    estado_voter: number
    contrasena_voter: number
    _all: number
  }


  export type VotersAvgAggregateInputType = {
    id_voter?: true
    num_doc_voter?: true
  }

  export type VotersSumAggregateInputType = {
    id_voter?: true
    num_doc_voter?: true
  }

  export type VotersMinAggregateInputType = {
    id_voter?: true
    nombre_voter?: true
    apellido_voter?: true
    tipo_doc_voter?: true
    num_doc_voter?: true
    correo_voter?: true
    estado_voter?: true
    contrasena_voter?: true
  }

  export type VotersMaxAggregateInputType = {
    id_voter?: true
    nombre_voter?: true
    apellido_voter?: true
    tipo_doc_voter?: true
    num_doc_voter?: true
    correo_voter?: true
    estado_voter?: true
    contrasena_voter?: true
  }

  export type VotersCountAggregateInputType = {
    id_voter?: true
    nombre_voter?: true
    apellido_voter?: true
    tipo_doc_voter?: true
    num_doc_voter?: true
    correo_voter?: true
    estado_voter?: true
    contrasena_voter?: true
    _all?: true
  }

  export type VotersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voters to aggregate.
     */
    where?: votersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voters to fetch.
     */
    orderBy?: votersOrderByWithRelationInput | votersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: votersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned voters
    **/
    _count?: true | VotersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VotersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VotersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotersMaxAggregateInputType
  }

  export type GetVotersAggregateType<T extends VotersAggregateArgs> = {
        [P in keyof T & keyof AggregateVoters]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoters[P]>
      : GetScalarType<T[P], AggregateVoters[P]>
  }




  export type votersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: votersWhereInput
    orderBy?: votersOrderByWithAggregationInput | votersOrderByWithAggregationInput[]
    by: VotersScalarFieldEnum[] | VotersScalarFieldEnum
    having?: votersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotersCountAggregateInputType | true
    _avg?: VotersAvgAggregateInputType
    _sum?: VotersSumAggregateInputType
    _min?: VotersMinAggregateInputType
    _max?: VotersMaxAggregateInputType
  }

  export type VotersGroupByOutputType = {
    id_voter: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
    _count: VotersCountAggregateOutputType | null
    _avg: VotersAvgAggregateOutputType | null
    _sum: VotersSumAggregateOutputType | null
    _min: VotersMinAggregateOutputType | null
    _max: VotersMaxAggregateOutputType | null
  }

  type GetVotersGroupByPayload<T extends votersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotersGroupByOutputType[P]>
            : GetScalarType<T[P], VotersGroupByOutputType[P]>
        }
      >
    >


  export type votersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_voter?: boolean
    nombre_voter?: boolean
    apellido_voter?: boolean
    tipo_doc_voter?: boolean
    num_doc_voter?: boolean
    correo_voter?: boolean
    estado_voter?: boolean
    contrasena_voter?: boolean
  }, ExtArgs["result"]["voters"]>



  export type votersSelectScalar = {
    id_voter?: boolean
    nombre_voter?: boolean
    apellido_voter?: boolean
    tipo_doc_voter?: boolean
    num_doc_voter?: boolean
    correo_voter?: boolean
    estado_voter?: boolean
    contrasena_voter?: boolean
  }

  export type votersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_voter" | "nombre_voter" | "apellido_voter" | "tipo_doc_voter" | "num_doc_voter" | "correo_voter" | "estado_voter" | "contrasena_voter", ExtArgs["result"]["voters"]>

  export type $votersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "voters"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_voter: number
      nombre_voter: string
      apellido_voter: string
      tipo_doc_voter: string
      num_doc_voter: number
      correo_voter: string
      estado_voter: string
      contrasena_voter: string
    }, ExtArgs["result"]["voters"]>
    composites: {}
  }

  type votersGetPayload<S extends boolean | null | undefined | votersDefaultArgs> = $Result.GetResult<Prisma.$votersPayload, S>

  type votersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<votersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VotersCountAggregateInputType | true
    }

  export interface votersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['voters'], meta: { name: 'voters' } }
    /**
     * Find zero or one Voters that matches the filter.
     * @param {votersFindUniqueArgs} args - Arguments to find a Voters
     * @example
     * // Get one Voters
     * const voters = await prisma.voters.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends votersFindUniqueArgs>(args: SelectSubset<T, votersFindUniqueArgs<ExtArgs>>): Prisma__votersClient<$Result.GetResult<Prisma.$votersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voters that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {votersFindUniqueOrThrowArgs} args - Arguments to find a Voters
     * @example
     * // Get one Voters
     * const voters = await prisma.voters.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends votersFindUniqueOrThrowArgs>(args: SelectSubset<T, votersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__votersClient<$Result.GetResult<Prisma.$votersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votersFindFirstArgs} args - Arguments to find a Voters
     * @example
     * // Get one Voters
     * const voters = await prisma.voters.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends votersFindFirstArgs>(args?: SelectSubset<T, votersFindFirstArgs<ExtArgs>>): Prisma__votersClient<$Result.GetResult<Prisma.$votersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voters that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votersFindFirstOrThrowArgs} args - Arguments to find a Voters
     * @example
     * // Get one Voters
     * const voters = await prisma.voters.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends votersFindFirstOrThrowArgs>(args?: SelectSubset<T, votersFindFirstOrThrowArgs<ExtArgs>>): Prisma__votersClient<$Result.GetResult<Prisma.$votersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Voters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Voters
     * const voters = await prisma.voters.findMany()
     * 
     * // Get first 10 Voters
     * const voters = await prisma.voters.findMany({ take: 10 })
     * 
     * // Only select the `id_voter`
     * const votersWithId_voterOnly = await prisma.voters.findMany({ select: { id_voter: true } })
     * 
     */
    findMany<T extends votersFindManyArgs>(args?: SelectSubset<T, votersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voters.
     * @param {votersCreateArgs} args - Arguments to create a Voters.
     * @example
     * // Create one Voters
     * const Voters = await prisma.voters.create({
     *   data: {
     *     // ... data to create a Voters
     *   }
     * })
     * 
     */
    create<T extends votersCreateArgs>(args: SelectSubset<T, votersCreateArgs<ExtArgs>>): Prisma__votersClient<$Result.GetResult<Prisma.$votersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Voters.
     * @param {votersCreateManyArgs} args - Arguments to create many Voters.
     * @example
     * // Create many Voters
     * const voters = await prisma.voters.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends votersCreateManyArgs>(args?: SelectSubset<T, votersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Voters.
     * @param {votersDeleteArgs} args - Arguments to delete one Voters.
     * @example
     * // Delete one Voters
     * const Voters = await prisma.voters.delete({
     *   where: {
     *     // ... filter to delete one Voters
     *   }
     * })
     * 
     */
    delete<T extends votersDeleteArgs>(args: SelectSubset<T, votersDeleteArgs<ExtArgs>>): Prisma__votersClient<$Result.GetResult<Prisma.$votersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voters.
     * @param {votersUpdateArgs} args - Arguments to update one Voters.
     * @example
     * // Update one Voters
     * const voters = await prisma.voters.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends votersUpdateArgs>(args: SelectSubset<T, votersUpdateArgs<ExtArgs>>): Prisma__votersClient<$Result.GetResult<Prisma.$votersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Voters.
     * @param {votersDeleteManyArgs} args - Arguments to filter Voters to delete.
     * @example
     * // Delete a few Voters
     * const { count } = await prisma.voters.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends votersDeleteManyArgs>(args?: SelectSubset<T, votersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Voters
     * const voters = await prisma.voters.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends votersUpdateManyArgs>(args: SelectSubset<T, votersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Voters.
     * @param {votersUpsertArgs} args - Arguments to update or create a Voters.
     * @example
     * // Update or create a Voters
     * const voters = await prisma.voters.upsert({
     *   create: {
     *     // ... data to create a Voters
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voters we want to update
     *   }
     * })
     */
    upsert<T extends votersUpsertArgs>(args: SelectSubset<T, votersUpsertArgs<ExtArgs>>): Prisma__votersClient<$Result.GetResult<Prisma.$votersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votersCountArgs} args - Arguments to filter Voters to count.
     * @example
     * // Count the number of Voters
     * const count = await prisma.voters.count({
     *   where: {
     *     // ... the filter for the Voters we want to count
     *   }
     * })
    **/
    count<T extends votersCountArgs>(
      args?: Subset<T, votersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VotersAggregateArgs>(args: Subset<T, VotersAggregateArgs>): Prisma.PrismaPromise<GetVotersAggregateType<T>>

    /**
     * Group by Voters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votersGroupByArgs} args - Group by arguments.
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
      T extends votersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: votersGroupByArgs['orderBy'] }
        : { orderBy?: votersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, votersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the voters model
   */
  readonly fields: votersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for voters.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__votersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the voters model
   */
  interface votersFieldRefs {
    readonly id_voter: FieldRef<"voters", 'Int'>
    readonly nombre_voter: FieldRef<"voters", 'String'>
    readonly apellido_voter: FieldRef<"voters", 'String'>
    readonly tipo_doc_voter: FieldRef<"voters", 'String'>
    readonly num_doc_voter: FieldRef<"voters", 'Int'>
    readonly correo_voter: FieldRef<"voters", 'String'>
    readonly estado_voter: FieldRef<"voters", 'String'>
    readonly contrasena_voter: FieldRef<"voters", 'String'>
  }
    

  // Custom InputTypes
  /**
   * voters findUnique
   */
  export type votersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
    /**
     * Filter, which voters to fetch.
     */
    where: votersWhereUniqueInput
  }

  /**
   * voters findUniqueOrThrow
   */
  export type votersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
    /**
     * Filter, which voters to fetch.
     */
    where: votersWhereUniqueInput
  }

  /**
   * voters findFirst
   */
  export type votersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
    /**
     * Filter, which voters to fetch.
     */
    where?: votersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voters to fetch.
     */
    orderBy?: votersOrderByWithRelationInput | votersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voters.
     */
    cursor?: votersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voters.
     */
    distinct?: VotersScalarFieldEnum | VotersScalarFieldEnum[]
  }

  /**
   * voters findFirstOrThrow
   */
  export type votersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
    /**
     * Filter, which voters to fetch.
     */
    where?: votersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voters to fetch.
     */
    orderBy?: votersOrderByWithRelationInput | votersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for voters.
     */
    cursor?: votersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of voters.
     */
    distinct?: VotersScalarFieldEnum | VotersScalarFieldEnum[]
  }

  /**
   * voters findMany
   */
  export type votersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
    /**
     * Filter, which voters to fetch.
     */
    where?: votersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of voters to fetch.
     */
    orderBy?: votersOrderByWithRelationInput | votersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing voters.
     */
    cursor?: votersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` voters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` voters.
     */
    skip?: number
    distinct?: VotersScalarFieldEnum | VotersScalarFieldEnum[]
  }

  /**
   * voters create
   */
  export type votersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
    /**
     * The data needed to create a voters.
     */
    data: XOR<votersCreateInput, votersUncheckedCreateInput>
  }

  /**
   * voters createMany
   */
  export type votersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many voters.
     */
    data: votersCreateManyInput | votersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * voters update
   */
  export type votersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
    /**
     * The data needed to update a voters.
     */
    data: XOR<votersUpdateInput, votersUncheckedUpdateInput>
    /**
     * Choose, which voters to update.
     */
    where: votersWhereUniqueInput
  }

  /**
   * voters updateMany
   */
  export type votersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update voters.
     */
    data: XOR<votersUpdateManyMutationInput, votersUncheckedUpdateManyInput>
    /**
     * Filter which voters to update
     */
    where?: votersWhereInput
    /**
     * Limit how many voters to update.
     */
    limit?: number
  }

  /**
   * voters upsert
   */
  export type votersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
    /**
     * The filter to search for the voters to update in case it exists.
     */
    where: votersWhereUniqueInput
    /**
     * In case the voters found by the `where` argument doesn't exist, create a new voters with this data.
     */
    create: XOR<votersCreateInput, votersUncheckedCreateInput>
    /**
     * In case the voters was found with the provided `where` argument, update it with this data.
     */
    update: XOR<votersUpdateInput, votersUncheckedUpdateInput>
  }

  /**
   * voters delete
   */
  export type votersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
    /**
     * Filter which voters to delete.
     */
    where: votersWhereUniqueInput
  }

  /**
   * voters deleteMany
   */
  export type votersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which voters to delete
     */
    where?: votersWhereInput
    /**
     * Limit how many voters to delete.
     */
    limit?: number
  }

  /**
   * voters without action
   */
  export type votersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the voters
     */
    select?: votersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the voters
     */
    omit?: votersOmit<ExtArgs> | null
  }


  /**
   * Model elections
   */

  export type AggregateElections = {
    _count: ElectionsCountAggregateOutputType | null
    _avg: ElectionsAvgAggregateOutputType | null
    _sum: ElectionsSumAggregateOutputType | null
    _min: ElectionsMinAggregateOutputType | null
    _max: ElectionsMaxAggregateOutputType | null
  }

  export type ElectionsAvgAggregateOutputType = {
    id_election: number | null
    admin_id: number | null
  }

  export type ElectionsSumAggregateOutputType = {
    id_election: number | null
    admin_id: number | null
  }

  export type ElectionsMinAggregateOutputType = {
    id_election: number | null
    nombre_election: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    estado_election: string | null
    admin_id: number | null
  }

  export type ElectionsMaxAggregateOutputType = {
    id_election: number | null
    nombre_election: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    estado_election: string | null
    admin_id: number | null
  }

  export type ElectionsCountAggregateOutputType = {
    id_election: number
    nombre_election: number
    fecha_inicio: number
    fecha_fin: number
    estado_election: number
    admin_id: number
    _all: number
  }


  export type ElectionsAvgAggregateInputType = {
    id_election?: true
    admin_id?: true
  }

  export type ElectionsSumAggregateInputType = {
    id_election?: true
    admin_id?: true
  }

  export type ElectionsMinAggregateInputType = {
    id_election?: true
    nombre_election?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado_election?: true
    admin_id?: true
  }

  export type ElectionsMaxAggregateInputType = {
    id_election?: true
    nombre_election?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado_election?: true
    admin_id?: true
  }

  export type ElectionsCountAggregateInputType = {
    id_election?: true
    nombre_election?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado_election?: true
    admin_id?: true
    _all?: true
  }

  export type ElectionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which elections to aggregate.
     */
    where?: electionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elections to fetch.
     */
    orderBy?: electionsOrderByWithRelationInput | electionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: electionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned elections
    **/
    _count?: true | ElectionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ElectionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ElectionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ElectionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ElectionsMaxAggregateInputType
  }

  export type GetElectionsAggregateType<T extends ElectionsAggregateArgs> = {
        [P in keyof T & keyof AggregateElections]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateElections[P]>
      : GetScalarType<T[P], AggregateElections[P]>
  }




  export type electionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: electionsWhereInput
    orderBy?: electionsOrderByWithAggregationInput | electionsOrderByWithAggregationInput[]
    by: ElectionsScalarFieldEnum[] | ElectionsScalarFieldEnum
    having?: electionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ElectionsCountAggregateInputType | true
    _avg?: ElectionsAvgAggregateInputType
    _sum?: ElectionsSumAggregateInputType
    _min?: ElectionsMinAggregateInputType
    _max?: ElectionsMaxAggregateInputType
  }

  export type ElectionsGroupByOutputType = {
    id_election: number
    nombre_election: string
    fecha_inicio: Date
    fecha_fin: Date
    estado_election: string
    admin_id: number
    _count: ElectionsCountAggregateOutputType | null
    _avg: ElectionsAvgAggregateOutputType | null
    _sum: ElectionsSumAggregateOutputType | null
    _min: ElectionsMinAggregateOutputType | null
    _max: ElectionsMaxAggregateOutputType | null
  }

  type GetElectionsGroupByPayload<T extends electionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ElectionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ElectionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ElectionsGroupByOutputType[P]>
            : GetScalarType<T[P], ElectionsGroupByOutputType[P]>
        }
      >
    >


  export type electionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_election?: boolean
    nombre_election?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado_election?: boolean
    admin_id?: boolean
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["elections"]>



  export type electionsSelectScalar = {
    id_election?: boolean
    nombre_election?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado_election?: boolean
    admin_id?: boolean
  }

  export type electionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_election" | "nombre_election" | "fecha_inicio" | "fecha_fin" | "estado_election" | "admin_id", ExtArgs["result"]["elections"]>
  export type electionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | administradorDefaultArgs<ExtArgs>
  }

  export type $electionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "elections"
    objects: {
      administrador: Prisma.$administradorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_election: number
      nombre_election: string
      fecha_inicio: Date
      fecha_fin: Date
      estado_election: string
      admin_id: number
    }, ExtArgs["result"]["elections"]>
    composites: {}
  }

  type electionsGetPayload<S extends boolean | null | undefined | electionsDefaultArgs> = $Result.GetResult<Prisma.$electionsPayload, S>

  type electionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<electionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ElectionsCountAggregateInputType | true
    }

  export interface electionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['elections'], meta: { name: 'elections' } }
    /**
     * Find zero or one Elections that matches the filter.
     * @param {electionsFindUniqueArgs} args - Arguments to find a Elections
     * @example
     * // Get one Elections
     * const elections = await prisma.elections.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends electionsFindUniqueArgs>(args: SelectSubset<T, electionsFindUniqueArgs<ExtArgs>>): Prisma__electionsClient<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Elections that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {electionsFindUniqueOrThrowArgs} args - Arguments to find a Elections
     * @example
     * // Get one Elections
     * const elections = await prisma.elections.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends electionsFindUniqueOrThrowArgs>(args: SelectSubset<T, electionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__electionsClient<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionsFindFirstArgs} args - Arguments to find a Elections
     * @example
     * // Get one Elections
     * const elections = await prisma.elections.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends electionsFindFirstArgs>(args?: SelectSubset<T, electionsFindFirstArgs<ExtArgs>>): Prisma__electionsClient<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Elections that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionsFindFirstOrThrowArgs} args - Arguments to find a Elections
     * @example
     * // Get one Elections
     * const elections = await prisma.elections.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends electionsFindFirstOrThrowArgs>(args?: SelectSubset<T, electionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__electionsClient<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Elections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Elections
     * const elections = await prisma.elections.findMany()
     * 
     * // Get first 10 Elections
     * const elections = await prisma.elections.findMany({ take: 10 })
     * 
     * // Only select the `id_election`
     * const electionsWithId_electionOnly = await prisma.elections.findMany({ select: { id_election: true } })
     * 
     */
    findMany<T extends electionsFindManyArgs>(args?: SelectSubset<T, electionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Elections.
     * @param {electionsCreateArgs} args - Arguments to create a Elections.
     * @example
     * // Create one Elections
     * const Elections = await prisma.elections.create({
     *   data: {
     *     // ... data to create a Elections
     *   }
     * })
     * 
     */
    create<T extends electionsCreateArgs>(args: SelectSubset<T, electionsCreateArgs<ExtArgs>>): Prisma__electionsClient<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Elections.
     * @param {electionsCreateManyArgs} args - Arguments to create many Elections.
     * @example
     * // Create many Elections
     * const elections = await prisma.elections.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends electionsCreateManyArgs>(args?: SelectSubset<T, electionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Elections.
     * @param {electionsDeleteArgs} args - Arguments to delete one Elections.
     * @example
     * // Delete one Elections
     * const Elections = await prisma.elections.delete({
     *   where: {
     *     // ... filter to delete one Elections
     *   }
     * })
     * 
     */
    delete<T extends electionsDeleteArgs>(args: SelectSubset<T, electionsDeleteArgs<ExtArgs>>): Prisma__electionsClient<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Elections.
     * @param {electionsUpdateArgs} args - Arguments to update one Elections.
     * @example
     * // Update one Elections
     * const elections = await prisma.elections.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends electionsUpdateArgs>(args: SelectSubset<T, electionsUpdateArgs<ExtArgs>>): Prisma__electionsClient<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Elections.
     * @param {electionsDeleteManyArgs} args - Arguments to filter Elections to delete.
     * @example
     * // Delete a few Elections
     * const { count } = await prisma.elections.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends electionsDeleteManyArgs>(args?: SelectSubset<T, electionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Elections
     * const elections = await prisma.elections.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends electionsUpdateManyArgs>(args: SelectSubset<T, electionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Elections.
     * @param {electionsUpsertArgs} args - Arguments to update or create a Elections.
     * @example
     * // Update or create a Elections
     * const elections = await prisma.elections.upsert({
     *   create: {
     *     // ... data to create a Elections
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Elections we want to update
     *   }
     * })
     */
    upsert<T extends electionsUpsertArgs>(args: SelectSubset<T, electionsUpsertArgs<ExtArgs>>): Prisma__electionsClient<$Result.GetResult<Prisma.$electionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionsCountArgs} args - Arguments to filter Elections to count.
     * @example
     * // Count the number of Elections
     * const count = await prisma.elections.count({
     *   where: {
     *     // ... the filter for the Elections we want to count
     *   }
     * })
    **/
    count<T extends electionsCountArgs>(
      args?: Subset<T, electionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ElectionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ElectionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ElectionsAggregateArgs>(args: Subset<T, ElectionsAggregateArgs>): Prisma.PrismaPromise<GetElectionsAggregateType<T>>

    /**
     * Group by Elections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {electionsGroupByArgs} args - Group by arguments.
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
      T extends electionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: electionsGroupByArgs['orderBy'] }
        : { orderBy?: electionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, electionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetElectionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the elections model
   */
  readonly fields: electionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for elections.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__electionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends administradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, administradorDefaultArgs<ExtArgs>>): Prisma__administradorClient<$Result.GetResult<Prisma.$administradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the elections model
   */
  interface electionsFieldRefs {
    readonly id_election: FieldRef<"elections", 'Int'>
    readonly nombre_election: FieldRef<"elections", 'String'>
    readonly fecha_inicio: FieldRef<"elections", 'DateTime'>
    readonly fecha_fin: FieldRef<"elections", 'DateTime'>
    readonly estado_election: FieldRef<"elections", 'String'>
    readonly admin_id: FieldRef<"elections", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * elections findUnique
   */
  export type electionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    /**
     * Filter, which elections to fetch.
     */
    where: electionsWhereUniqueInput
  }

  /**
   * elections findUniqueOrThrow
   */
  export type electionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    /**
     * Filter, which elections to fetch.
     */
    where: electionsWhereUniqueInput
  }

  /**
   * elections findFirst
   */
  export type electionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    /**
     * Filter, which elections to fetch.
     */
    where?: electionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elections to fetch.
     */
    orderBy?: electionsOrderByWithRelationInput | electionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for elections.
     */
    cursor?: electionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of elections.
     */
    distinct?: ElectionsScalarFieldEnum | ElectionsScalarFieldEnum[]
  }

  /**
   * elections findFirstOrThrow
   */
  export type electionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    /**
     * Filter, which elections to fetch.
     */
    where?: electionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elections to fetch.
     */
    orderBy?: electionsOrderByWithRelationInput | electionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for elections.
     */
    cursor?: electionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of elections.
     */
    distinct?: ElectionsScalarFieldEnum | ElectionsScalarFieldEnum[]
  }

  /**
   * elections findMany
   */
  export type electionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    /**
     * Filter, which elections to fetch.
     */
    where?: electionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of elections to fetch.
     */
    orderBy?: electionsOrderByWithRelationInput | electionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing elections.
     */
    cursor?: electionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` elections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` elections.
     */
    skip?: number
    distinct?: ElectionsScalarFieldEnum | ElectionsScalarFieldEnum[]
  }

  /**
   * elections create
   */
  export type electionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    /**
     * The data needed to create a elections.
     */
    data: XOR<electionsCreateInput, electionsUncheckedCreateInput>
  }

  /**
   * elections createMany
   */
  export type electionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many elections.
     */
    data: electionsCreateManyInput | electionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * elections update
   */
  export type electionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    /**
     * The data needed to update a elections.
     */
    data: XOR<electionsUpdateInput, electionsUncheckedUpdateInput>
    /**
     * Choose, which elections to update.
     */
    where: electionsWhereUniqueInput
  }

  /**
   * elections updateMany
   */
  export type electionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update elections.
     */
    data: XOR<electionsUpdateManyMutationInput, electionsUncheckedUpdateManyInput>
    /**
     * Filter which elections to update
     */
    where?: electionsWhereInput
    /**
     * Limit how many elections to update.
     */
    limit?: number
  }

  /**
   * elections upsert
   */
  export type electionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    /**
     * The filter to search for the elections to update in case it exists.
     */
    where: electionsWhereUniqueInput
    /**
     * In case the elections found by the `where` argument doesn't exist, create a new elections with this data.
     */
    create: XOR<electionsCreateInput, electionsUncheckedCreateInput>
    /**
     * In case the elections was found with the provided `where` argument, update it with this data.
     */
    update: XOR<electionsUpdateInput, electionsUncheckedUpdateInput>
  }

  /**
   * elections delete
   */
  export type electionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
    /**
     * Filter which elections to delete.
     */
    where: electionsWhereUniqueInput
  }

  /**
   * elections deleteMany
   */
  export type electionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which elections to delete
     */
    where?: electionsWhereInput
    /**
     * Limit how many elections to delete.
     */
    limit?: number
  }

  /**
   * elections without action
   */
  export type electionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the elections
     */
    select?: electionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the elections
     */
    omit?: electionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: electionsInclude<ExtArgs> | null
  }


  /**
   * Model candidates
   */

  export type AggregateCandidates = {
    _count: CandidatesCountAggregateOutputType | null
    _avg: CandidatesAvgAggregateOutputType | null
    _sum: CandidatesSumAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  export type CandidatesAvgAggregateOutputType = {
    id_candidate: number | null
    num_doc_candidate: number | null
  }

  export type CandidatesSumAggregateOutputType = {
    id_candidate: number | null
    num_doc_candidate: number | null
  }

  export type CandidatesMinAggregateOutputType = {
    id_candidate: number | null
    nombre_candidate: string | null
    apellido_candidate: string | null
    tipo_doc_candidate: string | null
    num_doc_candidate: number | null
    correo_candidate: string | null
    estado_candidate: string | null
    foto_candidate: string | null
  }

  export type CandidatesMaxAggregateOutputType = {
    id_candidate: number | null
    nombre_candidate: string | null
    apellido_candidate: string | null
    tipo_doc_candidate: string | null
    num_doc_candidate: number | null
    correo_candidate: string | null
    estado_candidate: string | null
    foto_candidate: string | null
  }

  export type CandidatesCountAggregateOutputType = {
    id_candidate: number
    nombre_candidate: number
    apellido_candidate: number
    tipo_doc_candidate: number
    num_doc_candidate: number
    correo_candidate: number
    estado_candidate: number
    foto_candidate: number
    _all: number
  }


  export type CandidatesAvgAggregateInputType = {
    id_candidate?: true
    num_doc_candidate?: true
  }

  export type CandidatesSumAggregateInputType = {
    id_candidate?: true
    num_doc_candidate?: true
  }

  export type CandidatesMinAggregateInputType = {
    id_candidate?: true
    nombre_candidate?: true
    apellido_candidate?: true
    tipo_doc_candidate?: true
    num_doc_candidate?: true
    correo_candidate?: true
    estado_candidate?: true
    foto_candidate?: true
  }

  export type CandidatesMaxAggregateInputType = {
    id_candidate?: true
    nombre_candidate?: true
    apellido_candidate?: true
    tipo_doc_candidate?: true
    num_doc_candidate?: true
    correo_candidate?: true
    estado_candidate?: true
    foto_candidate?: true
  }

  export type CandidatesCountAggregateInputType = {
    id_candidate?: true
    nombre_candidate?: true
    apellido_candidate?: true
    tipo_doc_candidate?: true
    num_doc_candidate?: true
    correo_candidate?: true
    estado_candidate?: true
    foto_candidate?: true
    _all?: true
  }

  export type CandidatesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidates to aggregate.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned candidates
    **/
    _count?: true | CandidatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CandidatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CandidatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CandidatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CandidatesMaxAggregateInputType
  }

  export type GetCandidatesAggregateType<T extends CandidatesAggregateArgs> = {
        [P in keyof T & keyof AggregateCandidates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCandidates[P]>
      : GetScalarType<T[P], AggregateCandidates[P]>
  }




  export type candidatesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: candidatesWhereInput
    orderBy?: candidatesOrderByWithAggregationInput | candidatesOrderByWithAggregationInput[]
    by: CandidatesScalarFieldEnum[] | CandidatesScalarFieldEnum
    having?: candidatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CandidatesCountAggregateInputType | true
    _avg?: CandidatesAvgAggregateInputType
    _sum?: CandidatesSumAggregateInputType
    _min?: CandidatesMinAggregateInputType
    _max?: CandidatesMaxAggregateInputType
  }

  export type CandidatesGroupByOutputType = {
    id_candidate: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: number
    correo_candidate: string
    estado_candidate: string
    foto_candidate: string
    _count: CandidatesCountAggregateOutputType | null
    _avg: CandidatesAvgAggregateOutputType | null
    _sum: CandidatesSumAggregateOutputType | null
    _min: CandidatesMinAggregateOutputType | null
    _max: CandidatesMaxAggregateOutputType | null
  }

  type GetCandidatesGroupByPayload<T extends candidatesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CandidatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CandidatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
            : GetScalarType<T[P], CandidatesGroupByOutputType[P]>
        }
      >
    >


  export type candidatesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_candidate?: boolean
    nombre_candidate?: boolean
    apellido_candidate?: boolean
    tipo_doc_candidate?: boolean
    num_doc_candidate?: boolean
    correo_candidate?: boolean
    estado_candidate?: boolean
    foto_candidate?: boolean
  }, ExtArgs["result"]["candidates"]>



  export type candidatesSelectScalar = {
    id_candidate?: boolean
    nombre_candidate?: boolean
    apellido_candidate?: boolean
    tipo_doc_candidate?: boolean
    num_doc_candidate?: boolean
    correo_candidate?: boolean
    estado_candidate?: boolean
    foto_candidate?: boolean
  }

  export type candidatesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_candidate" | "nombre_candidate" | "apellido_candidate" | "tipo_doc_candidate" | "num_doc_candidate" | "correo_candidate" | "estado_candidate" | "foto_candidate", ExtArgs["result"]["candidates"]>

  export type $candidatesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "candidates"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_candidate: number
      nombre_candidate: string
      apellido_candidate: string
      tipo_doc_candidate: string
      num_doc_candidate: number
      correo_candidate: string
      estado_candidate: string
      foto_candidate: string
    }, ExtArgs["result"]["candidates"]>
    composites: {}
  }

  type candidatesGetPayload<S extends boolean | null | undefined | candidatesDefaultArgs> = $Result.GetResult<Prisma.$candidatesPayload, S>

  type candidatesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<candidatesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CandidatesCountAggregateInputType | true
    }

  export interface candidatesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['candidates'], meta: { name: 'candidates' } }
    /**
     * Find zero or one Candidates that matches the filter.
     * @param {candidatesFindUniqueArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends candidatesFindUniqueArgs>(args: SelectSubset<T, candidatesFindUniqueArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Candidates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {candidatesFindUniqueOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends candidatesFindUniqueOrThrowArgs>(args: SelectSubset<T, candidatesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindFirstArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends candidatesFindFirstArgs>(args?: SelectSubset<T, candidatesFindFirstArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Candidates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindFirstOrThrowArgs} args - Arguments to find a Candidates
     * @example
     * // Get one Candidates
     * const candidates = await prisma.candidates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends candidatesFindFirstOrThrowArgs>(args?: SelectSubset<T, candidatesFindFirstOrThrowArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Candidates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Candidates
     * const candidates = await prisma.candidates.findMany()
     * 
     * // Get first 10 Candidates
     * const candidates = await prisma.candidates.findMany({ take: 10 })
     * 
     * // Only select the `id_candidate`
     * const candidatesWithId_candidateOnly = await prisma.candidates.findMany({ select: { id_candidate: true } })
     * 
     */
    findMany<T extends candidatesFindManyArgs>(args?: SelectSubset<T, candidatesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Candidates.
     * @param {candidatesCreateArgs} args - Arguments to create a Candidates.
     * @example
     * // Create one Candidates
     * const Candidates = await prisma.candidates.create({
     *   data: {
     *     // ... data to create a Candidates
     *   }
     * })
     * 
     */
    create<T extends candidatesCreateArgs>(args: SelectSubset<T, candidatesCreateArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Candidates.
     * @param {candidatesCreateManyArgs} args - Arguments to create many Candidates.
     * @example
     * // Create many Candidates
     * const candidates = await prisma.candidates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends candidatesCreateManyArgs>(args?: SelectSubset<T, candidatesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Candidates.
     * @param {candidatesDeleteArgs} args - Arguments to delete one Candidates.
     * @example
     * // Delete one Candidates
     * const Candidates = await prisma.candidates.delete({
     *   where: {
     *     // ... filter to delete one Candidates
     *   }
     * })
     * 
     */
    delete<T extends candidatesDeleteArgs>(args: SelectSubset<T, candidatesDeleteArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Candidates.
     * @param {candidatesUpdateArgs} args - Arguments to update one Candidates.
     * @example
     * // Update one Candidates
     * const candidates = await prisma.candidates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends candidatesUpdateArgs>(args: SelectSubset<T, candidatesUpdateArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Candidates.
     * @param {candidatesDeleteManyArgs} args - Arguments to filter Candidates to delete.
     * @example
     * // Delete a few Candidates
     * const { count } = await prisma.candidates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends candidatesDeleteManyArgs>(args?: SelectSubset<T, candidatesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Candidates
     * const candidates = await prisma.candidates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends candidatesUpdateManyArgs>(args: SelectSubset<T, candidatesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Candidates.
     * @param {candidatesUpsertArgs} args - Arguments to update or create a Candidates.
     * @example
     * // Update or create a Candidates
     * const candidates = await prisma.candidates.upsert({
     *   create: {
     *     // ... data to create a Candidates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Candidates we want to update
     *   }
     * })
     */
    upsert<T extends candidatesUpsertArgs>(args: SelectSubset<T, candidatesUpsertArgs<ExtArgs>>): Prisma__candidatesClient<$Result.GetResult<Prisma.$candidatesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesCountArgs} args - Arguments to filter Candidates to count.
     * @example
     * // Count the number of Candidates
     * const count = await prisma.candidates.count({
     *   where: {
     *     // ... the filter for the Candidates we want to count
     *   }
     * })
    **/
    count<T extends candidatesCountArgs>(
      args?: Subset<T, candidatesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CandidatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CandidatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CandidatesAggregateArgs>(args: Subset<T, CandidatesAggregateArgs>): Prisma.PrismaPromise<GetCandidatesAggregateType<T>>

    /**
     * Group by Candidates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {candidatesGroupByArgs} args - Group by arguments.
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
      T extends candidatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: candidatesGroupByArgs['orderBy'] }
        : { orderBy?: candidatesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, candidatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCandidatesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the candidates model
   */
  readonly fields: candidatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for candidates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__candidatesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the candidates model
   */
  interface candidatesFieldRefs {
    readonly id_candidate: FieldRef<"candidates", 'Int'>
    readonly nombre_candidate: FieldRef<"candidates", 'String'>
    readonly apellido_candidate: FieldRef<"candidates", 'String'>
    readonly tipo_doc_candidate: FieldRef<"candidates", 'String'>
    readonly num_doc_candidate: FieldRef<"candidates", 'Int'>
    readonly correo_candidate: FieldRef<"candidates", 'String'>
    readonly estado_candidate: FieldRef<"candidates", 'String'>
    readonly foto_candidate: FieldRef<"candidates", 'String'>
  }
    

  // Custom InputTypes
  /**
   * candidates findUnique
   */
  export type candidatesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates findUniqueOrThrow
   */
  export type candidatesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates findFirst
   */
  export type candidatesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates findFirstOrThrow
   */
  export type candidatesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of candidates.
     */
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates findMany
   */
  export type candidatesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Filter, which candidates to fetch.
     */
    where?: candidatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of candidates to fetch.
     */
    orderBy?: candidatesOrderByWithRelationInput | candidatesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing candidates.
     */
    cursor?: candidatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` candidates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` candidates.
     */
    skip?: number
    distinct?: CandidatesScalarFieldEnum | CandidatesScalarFieldEnum[]
  }

  /**
   * candidates create
   */
  export type candidatesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * The data needed to create a candidates.
     */
    data: XOR<candidatesCreateInput, candidatesUncheckedCreateInput>
  }

  /**
   * candidates createMany
   */
  export type candidatesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many candidates.
     */
    data: candidatesCreateManyInput | candidatesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * candidates update
   */
  export type candidatesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * The data needed to update a candidates.
     */
    data: XOR<candidatesUpdateInput, candidatesUncheckedUpdateInput>
    /**
     * Choose, which candidates to update.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates updateMany
   */
  export type candidatesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update candidates.
     */
    data: XOR<candidatesUpdateManyMutationInput, candidatesUncheckedUpdateManyInput>
    /**
     * Filter which candidates to update
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to update.
     */
    limit?: number
  }

  /**
   * candidates upsert
   */
  export type candidatesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * The filter to search for the candidates to update in case it exists.
     */
    where: candidatesWhereUniqueInput
    /**
     * In case the candidates found by the `where` argument doesn't exist, create a new candidates with this data.
     */
    create: XOR<candidatesCreateInput, candidatesUncheckedCreateInput>
    /**
     * In case the candidates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<candidatesUpdateInput, candidatesUncheckedUpdateInput>
  }

  /**
   * candidates delete
   */
  export type candidatesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
    /**
     * Filter which candidates to delete.
     */
    where: candidatesWhereUniqueInput
  }

  /**
   * candidates deleteMany
   */
  export type candidatesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which candidates to delete
     */
    where?: candidatesWhereInput
    /**
     * Limit how many candidates to delete.
     */
    limit?: number
  }

  /**
   * candidates without action
   */
  export type candidatesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the candidates
     */
    select?: candidatesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the candidates
     */
    omit?: candidatesOmit<ExtArgs> | null
  }


  /**
   * Model votes
   */

  export type AggregateVotes = {
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  export type VotesAvgAggregateOutputType = {
    id_vote: number | null
  }

  export type VotesSumAggregateOutputType = {
    id_vote: number | null
  }

  export type VotesMinAggregateOutputType = {
    id_vote: number | null
    fecha_vote: Date | null
    hora_vote: Date | null
  }

  export type VotesMaxAggregateOutputType = {
    id_vote: number | null
    fecha_vote: Date | null
    hora_vote: Date | null
  }

  export type VotesCountAggregateOutputType = {
    id_vote: number
    fecha_vote: number
    hora_vote: number
    _all: number
  }


  export type VotesAvgAggregateInputType = {
    id_vote?: true
  }

  export type VotesSumAggregateInputType = {
    id_vote?: true
  }

  export type VotesMinAggregateInputType = {
    id_vote?: true
    fecha_vote?: true
    hora_vote?: true
  }

  export type VotesMaxAggregateInputType = {
    id_vote?: true
    fecha_vote?: true
    hora_vote?: true
  }

  export type VotesCountAggregateInputType = {
    id_vote?: true
    fecha_vote?: true
    hora_vote?: true
    _all?: true
  }

  export type VotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which votes to aggregate.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned votes
    **/
    _count?: true | VotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VotesMaxAggregateInputType
  }

  export type GetVotesAggregateType<T extends VotesAggregateArgs> = {
        [P in keyof T & keyof AggregateVotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVotes[P]>
      : GetScalarType<T[P], AggregateVotes[P]>
  }




  export type votesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: votesWhereInput
    orderBy?: votesOrderByWithAggregationInput | votesOrderByWithAggregationInput[]
    by: VotesScalarFieldEnum[] | VotesScalarFieldEnum
    having?: votesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VotesCountAggregateInputType | true
    _avg?: VotesAvgAggregateInputType
    _sum?: VotesSumAggregateInputType
    _min?: VotesMinAggregateInputType
    _max?: VotesMaxAggregateInputType
  }

  export type VotesGroupByOutputType = {
    id_vote: number
    fecha_vote: Date
    hora_vote: Date
    _count: VotesCountAggregateOutputType | null
    _avg: VotesAvgAggregateOutputType | null
    _sum: VotesSumAggregateOutputType | null
    _min: VotesMinAggregateOutputType | null
    _max: VotesMaxAggregateOutputType | null
  }

  type GetVotesGroupByPayload<T extends votesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VotesGroupByOutputType[P]>
            : GetScalarType<T[P], VotesGroupByOutputType[P]>
        }
      >
    >


  export type votesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_vote?: boolean
    fecha_vote?: boolean
    hora_vote?: boolean
  }, ExtArgs["result"]["votes"]>



  export type votesSelectScalar = {
    id_vote?: boolean
    fecha_vote?: boolean
    hora_vote?: boolean
  }

  export type votesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_vote" | "fecha_vote" | "hora_vote", ExtArgs["result"]["votes"]>

  export type $votesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "votes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_vote: number
      fecha_vote: Date
      hora_vote: Date
    }, ExtArgs["result"]["votes"]>
    composites: {}
  }

  type votesGetPayload<S extends boolean | null | undefined | votesDefaultArgs> = $Result.GetResult<Prisma.$votesPayload, S>

  type votesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<votesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VotesCountAggregateInputType | true
    }

  export interface votesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['votes'], meta: { name: 'votes' } }
    /**
     * Find zero or one Votes that matches the filter.
     * @param {votesFindUniqueArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends votesFindUniqueArgs>(args: SelectSubset<T, votesFindUniqueArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Votes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {votesFindUniqueOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends votesFindUniqueOrThrowArgs>(args: SelectSubset<T, votesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindFirstArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends votesFindFirstArgs>(args?: SelectSubset<T, votesFindFirstArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Votes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindFirstOrThrowArgs} args - Arguments to find a Votes
     * @example
     * // Get one Votes
     * const votes = await prisma.votes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends votesFindFirstOrThrowArgs>(args?: SelectSubset<T, votesFindFirstOrThrowArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Votes
     * const votes = await prisma.votes.findMany()
     * 
     * // Get first 10 Votes
     * const votes = await prisma.votes.findMany({ take: 10 })
     * 
     * // Only select the `id_vote`
     * const votesWithId_voteOnly = await prisma.votes.findMany({ select: { id_vote: true } })
     * 
     */
    findMany<T extends votesFindManyArgs>(args?: SelectSubset<T, votesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Votes.
     * @param {votesCreateArgs} args - Arguments to create a Votes.
     * @example
     * // Create one Votes
     * const Votes = await prisma.votes.create({
     *   data: {
     *     // ... data to create a Votes
     *   }
     * })
     * 
     */
    create<T extends votesCreateArgs>(args: SelectSubset<T, votesCreateArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Votes.
     * @param {votesCreateManyArgs} args - Arguments to create many Votes.
     * @example
     * // Create many Votes
     * const votes = await prisma.votes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends votesCreateManyArgs>(args?: SelectSubset<T, votesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Votes.
     * @param {votesDeleteArgs} args - Arguments to delete one Votes.
     * @example
     * // Delete one Votes
     * const Votes = await prisma.votes.delete({
     *   where: {
     *     // ... filter to delete one Votes
     *   }
     * })
     * 
     */
    delete<T extends votesDeleteArgs>(args: SelectSubset<T, votesDeleteArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Votes.
     * @param {votesUpdateArgs} args - Arguments to update one Votes.
     * @example
     * // Update one Votes
     * const votes = await prisma.votes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends votesUpdateArgs>(args: SelectSubset<T, votesUpdateArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Votes.
     * @param {votesDeleteManyArgs} args - Arguments to filter Votes to delete.
     * @example
     * // Delete a few Votes
     * const { count } = await prisma.votes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends votesDeleteManyArgs>(args?: SelectSubset<T, votesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Votes
     * const votes = await prisma.votes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends votesUpdateManyArgs>(args: SelectSubset<T, votesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Votes.
     * @param {votesUpsertArgs} args - Arguments to update or create a Votes.
     * @example
     * // Update or create a Votes
     * const votes = await prisma.votes.upsert({
     *   create: {
     *     // ... data to create a Votes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Votes we want to update
     *   }
     * })
     */
    upsert<T extends votesUpsertArgs>(args: SelectSubset<T, votesUpsertArgs<ExtArgs>>): Prisma__votesClient<$Result.GetResult<Prisma.$votesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesCountArgs} args - Arguments to filter Votes to count.
     * @example
     * // Count the number of Votes
     * const count = await prisma.votes.count({
     *   where: {
     *     // ... the filter for the Votes we want to count
     *   }
     * })
    **/
    count<T extends votesCountArgs>(
      args?: Subset<T, votesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VotesAggregateArgs>(args: Subset<T, VotesAggregateArgs>): Prisma.PrismaPromise<GetVotesAggregateType<T>>

    /**
     * Group by Votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {votesGroupByArgs} args - Group by arguments.
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
      T extends votesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: votesGroupByArgs['orderBy'] }
        : { orderBy?: votesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, votesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the votes model
   */
  readonly fields: votesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for votes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__votesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the votes model
   */
  interface votesFieldRefs {
    readonly id_vote: FieldRef<"votes", 'Int'>
    readonly fecha_vote: FieldRef<"votes", 'DateTime'>
    readonly hora_vote: FieldRef<"votes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * votes findUnique
   */
  export type votesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes findUniqueOrThrow
   */
  export type votesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes findFirst
   */
  export type votesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * votes findFirstOrThrow
   */
  export type votesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for votes.
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of votes.
     */
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * votes findMany
   */
  export type votesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Filter, which votes to fetch.
     */
    where?: votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of votes to fetch.
     */
    orderBy?: votesOrderByWithRelationInput | votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing votes.
     */
    cursor?: votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` votes.
     */
    skip?: number
    distinct?: VotesScalarFieldEnum | VotesScalarFieldEnum[]
  }

  /**
   * votes create
   */
  export type votesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * The data needed to create a votes.
     */
    data: XOR<votesCreateInput, votesUncheckedCreateInput>
  }

  /**
   * votes createMany
   */
  export type votesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many votes.
     */
    data: votesCreateManyInput | votesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * votes update
   */
  export type votesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * The data needed to update a votes.
     */
    data: XOR<votesUpdateInput, votesUncheckedUpdateInput>
    /**
     * Choose, which votes to update.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes updateMany
   */
  export type votesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update votes.
     */
    data: XOR<votesUpdateManyMutationInput, votesUncheckedUpdateManyInput>
    /**
     * Filter which votes to update
     */
    where?: votesWhereInput
    /**
     * Limit how many votes to update.
     */
    limit?: number
  }

  /**
   * votes upsert
   */
  export type votesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * The filter to search for the votes to update in case it exists.
     */
    where: votesWhereUniqueInput
    /**
     * In case the votes found by the `where` argument doesn't exist, create a new votes with this data.
     */
    create: XOR<votesCreateInput, votesUncheckedCreateInput>
    /**
     * In case the votes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<votesUpdateInput, votesUncheckedUpdateInput>
  }

  /**
   * votes delete
   */
  export type votesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
    /**
     * Filter which votes to delete.
     */
    where: votesWhereUniqueInput
  }

  /**
   * votes deleteMany
   */
  export type votesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which votes to delete
     */
    where?: votesWhereInput
    /**
     * Limit how many votes to delete.
     */
    limit?: number
  }

  /**
   * votes without action
   */
  export type votesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the votes
     */
    select?: votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the votes
     */
    omit?: votesOmit<ExtArgs> | null
  }


  /**
   * Model proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    id_proposal: number | null
  }

  export type ProposalSumAggregateOutputType = {
    id_proposal: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id_proposal: number | null
    titulo_proposal: string | null
    descripcion_proposal: string | null
    estado_proposal: string | null
  }

  export type ProposalMaxAggregateOutputType = {
    id_proposal: number | null
    titulo_proposal: string | null
    descripcion_proposal: string | null
    estado_proposal: string | null
  }

  export type ProposalCountAggregateOutputType = {
    id_proposal: number
    titulo_proposal: number
    descripcion_proposal: number
    estado_proposal: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    id_proposal?: true
  }

  export type ProposalSumAggregateInputType = {
    id_proposal?: true
  }

  export type ProposalMinAggregateInputType = {
    id_proposal?: true
    titulo_proposal?: true
    descripcion_proposal?: true
    estado_proposal?: true
  }

  export type ProposalMaxAggregateInputType = {
    id_proposal?: true
    titulo_proposal?: true
    descripcion_proposal?: true
    estado_proposal?: true
  }

  export type ProposalCountAggregateInputType = {
    id_proposal?: true
    titulo_proposal?: true
    descripcion_proposal?: true
    estado_proposal?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proposal to aggregate.
     */
    where?: proposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: proposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type proposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: proposalWhereInput
    orderBy?: proposalOrderByWithAggregationInput | proposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: proposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id_proposal: number
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends proposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type proposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proposal?: boolean
    titulo_proposal?: boolean
    descripcion_proposal?: boolean
    estado_proposal?: boolean
  }, ExtArgs["result"]["proposal"]>



  export type proposalSelectScalar = {
    id_proposal?: boolean
    titulo_proposal?: boolean
    descripcion_proposal?: boolean
    estado_proposal?: boolean
  }

  export type proposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proposal" | "titulo_proposal" | "descripcion_proposal" | "estado_proposal", ExtArgs["result"]["proposal"]>

  export type $proposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "proposal"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_proposal: number
      titulo_proposal: string
      descripcion_proposal: string
      estado_proposal: string
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type proposalGetPayload<S extends boolean | null | undefined | proposalDefaultArgs> = $Result.GetResult<Prisma.$proposalPayload, S>

  type proposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<proposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface proposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['proposal'], meta: { name: 'proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {proposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proposalFindUniqueArgs>(args: SelectSubset<T, proposalFindUniqueArgs<ExtArgs>>): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proposalFindUniqueOrThrowArgs>(args: SelectSubset<T, proposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proposalFindFirstArgs>(args?: SelectSubset<T, proposalFindFirstArgs<ExtArgs>>): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proposalFindFirstOrThrowArgs>(args?: SelectSubset<T, proposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id_proposal`
     * const proposalWithId_proposalOnly = await prisma.proposal.findMany({ select: { id_proposal: true } })
     * 
     */
    findMany<T extends proposalFindManyArgs>(args?: SelectSubset<T, proposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {proposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends proposalCreateArgs>(args: SelectSubset<T, proposalCreateArgs<ExtArgs>>): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {proposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends proposalCreateManyArgs>(args?: SelectSubset<T, proposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proposal.
     * @param {proposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends proposalDeleteArgs>(args: SelectSubset<T, proposalDeleteArgs<ExtArgs>>): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {proposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends proposalUpdateArgs>(args: SelectSubset<T, proposalUpdateArgs<ExtArgs>>): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {proposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends proposalDeleteManyArgs>(args?: SelectSubset<T, proposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends proposalUpdateManyArgs>(args: SelectSubset<T, proposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proposal.
     * @param {proposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends proposalUpsertArgs>(args: SelectSubset<T, proposalUpsertArgs<ExtArgs>>): Prisma__proposalClient<$Result.GetResult<Prisma.$proposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends proposalCountArgs>(
      args?: Subset<T, proposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proposalGroupByArgs} args - Group by arguments.
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
      T extends proposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: proposalGroupByArgs['orderBy'] }
        : { orderBy?: proposalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, proposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the proposal model
   */
  readonly fields: proposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__proposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the proposal model
   */
  interface proposalFieldRefs {
    readonly id_proposal: FieldRef<"proposal", 'Int'>
    readonly titulo_proposal: FieldRef<"proposal", 'String'>
    readonly descripcion_proposal: FieldRef<"proposal", 'String'>
    readonly estado_proposal: FieldRef<"proposal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * proposal findUnique
   */
  export type proposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
    /**
     * Filter, which proposal to fetch.
     */
    where: proposalWhereUniqueInput
  }

  /**
   * proposal findUniqueOrThrow
   */
  export type proposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
    /**
     * Filter, which proposal to fetch.
     */
    where: proposalWhereUniqueInput
  }

  /**
   * proposal findFirst
   */
  export type proposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
    /**
     * Filter, which proposal to fetch.
     */
    where?: proposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proposals.
     */
    cursor?: proposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * proposal findFirstOrThrow
   */
  export type proposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
    /**
     * Filter, which proposal to fetch.
     */
    where?: proposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for proposals.
     */
    cursor?: proposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * proposal findMany
   */
  export type proposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
    /**
     * Filter, which proposals to fetch.
     */
    where?: proposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of proposals to fetch.
     */
    orderBy?: proposalOrderByWithRelationInput | proposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing proposals.
     */
    cursor?: proposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * proposal create
   */
  export type proposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
    /**
     * The data needed to create a proposal.
     */
    data: XOR<proposalCreateInput, proposalUncheckedCreateInput>
  }

  /**
   * proposal createMany
   */
  export type proposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many proposals.
     */
    data: proposalCreateManyInput | proposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * proposal update
   */
  export type proposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
    /**
     * The data needed to update a proposal.
     */
    data: XOR<proposalUpdateInput, proposalUncheckedUpdateInput>
    /**
     * Choose, which proposal to update.
     */
    where: proposalWhereUniqueInput
  }

  /**
   * proposal updateMany
   */
  export type proposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update proposals.
     */
    data: XOR<proposalUpdateManyMutationInput, proposalUncheckedUpdateManyInput>
    /**
     * Filter which proposals to update
     */
    where?: proposalWhereInput
    /**
     * Limit how many proposals to update.
     */
    limit?: number
  }

  /**
   * proposal upsert
   */
  export type proposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
    /**
     * The filter to search for the proposal to update in case it exists.
     */
    where: proposalWhereUniqueInput
    /**
     * In case the proposal found by the `where` argument doesn't exist, create a new proposal with this data.
     */
    create: XOR<proposalCreateInput, proposalUncheckedCreateInput>
    /**
     * In case the proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<proposalUpdateInput, proposalUncheckedUpdateInput>
  }

  /**
   * proposal delete
   */
  export type proposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
    /**
     * Filter which proposal to delete.
     */
    where: proposalWhereUniqueInput
  }

  /**
   * proposal deleteMany
   */
  export type proposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which proposals to delete
     */
    where?: proposalWhereInput
    /**
     * Limit how many proposals to delete.
     */
    limit?: number
  }

  /**
   * proposal without action
   */
  export type proposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proposal
     */
    select?: proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the proposal
     */
    omit?: proposalOmit<ExtArgs> | null
  }


  /**
   * Model career
   */

  export type AggregateCareer = {
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  export type CareerAvgAggregateOutputType = {
    id_career: number | null
  }

  export type CareerSumAggregateOutputType = {
    id_career: number | null
  }

  export type CareerMinAggregateOutputType = {
    id_career: number | null
    nombre_career: string | null
    facultad_career: string | null
  }

  export type CareerMaxAggregateOutputType = {
    id_career: number | null
    nombre_career: string | null
    facultad_career: string | null
  }

  export type CareerCountAggregateOutputType = {
    id_career: number
    nombre_career: number
    facultad_career: number
    _all: number
  }


  export type CareerAvgAggregateInputType = {
    id_career?: true
  }

  export type CareerSumAggregateInputType = {
    id_career?: true
  }

  export type CareerMinAggregateInputType = {
    id_career?: true
    nombre_career?: true
    facultad_career?: true
  }

  export type CareerMaxAggregateInputType = {
    id_career?: true
    nombre_career?: true
    facultad_career?: true
  }

  export type CareerCountAggregateInputType = {
    id_career?: true
    nombre_career?: true
    facultad_career?: true
    _all?: true
  }

  export type CareerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which career to aggregate.
     */
    where?: careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careerOrderByWithRelationInput | careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned careers
    **/
    _count?: true | CareerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CareerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CareerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareerMaxAggregateInputType
  }

  export type GetCareerAggregateType<T extends CareerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareer[P]>
      : GetScalarType<T[P], AggregateCareer[P]>
  }




  export type careerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: careerWhereInput
    orderBy?: careerOrderByWithAggregationInput | careerOrderByWithAggregationInput[]
    by: CareerScalarFieldEnum[] | CareerScalarFieldEnum
    having?: careerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareerCountAggregateInputType | true
    _avg?: CareerAvgAggregateInputType
    _sum?: CareerSumAggregateInputType
    _min?: CareerMinAggregateInputType
    _max?: CareerMaxAggregateInputType
  }

  export type CareerGroupByOutputType = {
    id_career: number
    nombre_career: string
    facultad_career: string
    _count: CareerCountAggregateOutputType | null
    _avg: CareerAvgAggregateOutputType | null
    _sum: CareerSumAggregateOutputType | null
    _min: CareerMinAggregateOutputType | null
    _max: CareerMaxAggregateOutputType | null
  }

  type GetCareerGroupByPayload<T extends careerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareerGroupByOutputType[P]>
            : GetScalarType<T[P], CareerGroupByOutputType[P]>
        }
      >
    >


  export type careerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_career?: boolean
    nombre_career?: boolean
    facultad_career?: boolean
  }, ExtArgs["result"]["career"]>



  export type careerSelectScalar = {
    id_career?: boolean
    nombre_career?: boolean
    facultad_career?: boolean
  }

  export type careerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_career" | "nombre_career" | "facultad_career", ExtArgs["result"]["career"]>

  export type $careerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "career"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_career: number
      nombre_career: string
      facultad_career: string
    }, ExtArgs["result"]["career"]>
    composites: {}
  }

  type careerGetPayload<S extends boolean | null | undefined | careerDefaultArgs> = $Result.GetResult<Prisma.$careerPayload, S>

  type careerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<careerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareerCountAggregateInputType | true
    }

  export interface careerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['career'], meta: { name: 'career' } }
    /**
     * Find zero or one Career that matches the filter.
     * @param {careerFindUniqueArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends careerFindUniqueArgs>(args: SelectSubset<T, careerFindUniqueArgs<ExtArgs>>): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Career that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {careerFindUniqueOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends careerFindUniqueOrThrowArgs>(args: SelectSubset<T, careerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerFindFirstArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends careerFindFirstArgs>(args?: SelectSubset<T, careerFindFirstArgs<ExtArgs>>): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Career that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerFindFirstOrThrowArgs} args - Arguments to find a Career
     * @example
     * // Get one Career
     * const career = await prisma.career.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends careerFindFirstOrThrowArgs>(args?: SelectSubset<T, careerFindFirstOrThrowArgs<ExtArgs>>): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Careers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Careers
     * const careers = await prisma.career.findMany()
     * 
     * // Get first 10 Careers
     * const careers = await prisma.career.findMany({ take: 10 })
     * 
     * // Only select the `id_career`
     * const careerWithId_careerOnly = await prisma.career.findMany({ select: { id_career: true } })
     * 
     */
    findMany<T extends careerFindManyArgs>(args?: SelectSubset<T, careerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Career.
     * @param {careerCreateArgs} args - Arguments to create a Career.
     * @example
     * // Create one Career
     * const Career = await prisma.career.create({
     *   data: {
     *     // ... data to create a Career
     *   }
     * })
     * 
     */
    create<T extends careerCreateArgs>(args: SelectSubset<T, careerCreateArgs<ExtArgs>>): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Careers.
     * @param {careerCreateManyArgs} args - Arguments to create many Careers.
     * @example
     * // Create many Careers
     * const career = await prisma.career.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends careerCreateManyArgs>(args?: SelectSubset<T, careerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Career.
     * @param {careerDeleteArgs} args - Arguments to delete one Career.
     * @example
     * // Delete one Career
     * const Career = await prisma.career.delete({
     *   where: {
     *     // ... filter to delete one Career
     *   }
     * })
     * 
     */
    delete<T extends careerDeleteArgs>(args: SelectSubset<T, careerDeleteArgs<ExtArgs>>): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Career.
     * @param {careerUpdateArgs} args - Arguments to update one Career.
     * @example
     * // Update one Career
     * const career = await prisma.career.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends careerUpdateArgs>(args: SelectSubset<T, careerUpdateArgs<ExtArgs>>): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Careers.
     * @param {careerDeleteManyArgs} args - Arguments to filter Careers to delete.
     * @example
     * // Delete a few Careers
     * const { count } = await prisma.career.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends careerDeleteManyArgs>(args?: SelectSubset<T, careerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Careers
     * const career = await prisma.career.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends careerUpdateManyArgs>(args: SelectSubset<T, careerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Career.
     * @param {careerUpsertArgs} args - Arguments to update or create a Career.
     * @example
     * // Update or create a Career
     * const career = await prisma.career.upsert({
     *   create: {
     *     // ... data to create a Career
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Career we want to update
     *   }
     * })
     */
    upsert<T extends careerUpsertArgs>(args: SelectSubset<T, careerUpsertArgs<ExtArgs>>): Prisma__careerClient<$Result.GetResult<Prisma.$careerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Careers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerCountArgs} args - Arguments to filter Careers to count.
     * @example
     * // Count the number of Careers
     * const count = await prisma.career.count({
     *   where: {
     *     // ... the filter for the Careers we want to count
     *   }
     * })
    **/
    count<T extends careerCountArgs>(
      args?: Subset<T, careerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CareerAggregateArgs>(args: Subset<T, CareerAggregateArgs>): Prisma.PrismaPromise<GetCareerAggregateType<T>>

    /**
     * Group by Career.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {careerGroupByArgs} args - Group by arguments.
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
      T extends careerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: careerGroupByArgs['orderBy'] }
        : { orderBy?: careerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, careerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the career model
   */
  readonly fields: careerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for career.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__careerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the career model
   */
  interface careerFieldRefs {
    readonly id_career: FieldRef<"career", 'Int'>
    readonly nombre_career: FieldRef<"career", 'String'>
    readonly facultad_career: FieldRef<"career", 'String'>
  }
    

  // Custom InputTypes
  /**
   * career findUnique
   */
  export type careerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
    /**
     * Filter, which career to fetch.
     */
    where: careerWhereUniqueInput
  }

  /**
   * career findUniqueOrThrow
   */
  export type careerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
    /**
     * Filter, which career to fetch.
     */
    where: careerWhereUniqueInput
  }

  /**
   * career findFirst
   */
  export type careerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
    /**
     * Filter, which career to fetch.
     */
    where?: careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careerOrderByWithRelationInput | careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for careers.
     */
    cursor?: careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * career findFirstOrThrow
   */
  export type careerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
    /**
     * Filter, which career to fetch.
     */
    where?: careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careerOrderByWithRelationInput | careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for careers.
     */
    cursor?: careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of careers.
     */
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * career findMany
   */
  export type careerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
    /**
     * Filter, which careers to fetch.
     */
    where?: careerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of careers to fetch.
     */
    orderBy?: careerOrderByWithRelationInput | careerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing careers.
     */
    cursor?: careerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` careers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` careers.
     */
    skip?: number
    distinct?: CareerScalarFieldEnum | CareerScalarFieldEnum[]
  }

  /**
   * career create
   */
  export type careerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
    /**
     * The data needed to create a career.
     */
    data: XOR<careerCreateInput, careerUncheckedCreateInput>
  }

  /**
   * career createMany
   */
  export type careerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many careers.
     */
    data: careerCreateManyInput | careerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * career update
   */
  export type careerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
    /**
     * The data needed to update a career.
     */
    data: XOR<careerUpdateInput, careerUncheckedUpdateInput>
    /**
     * Choose, which career to update.
     */
    where: careerWhereUniqueInput
  }

  /**
   * career updateMany
   */
  export type careerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update careers.
     */
    data: XOR<careerUpdateManyMutationInput, careerUncheckedUpdateManyInput>
    /**
     * Filter which careers to update
     */
    where?: careerWhereInput
    /**
     * Limit how many careers to update.
     */
    limit?: number
  }

  /**
   * career upsert
   */
  export type careerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
    /**
     * The filter to search for the career to update in case it exists.
     */
    where: careerWhereUniqueInput
    /**
     * In case the career found by the `where` argument doesn't exist, create a new career with this data.
     */
    create: XOR<careerCreateInput, careerUncheckedCreateInput>
    /**
     * In case the career was found with the provided `where` argument, update it with this data.
     */
    update: XOR<careerUpdateInput, careerUncheckedUpdateInput>
  }

  /**
   * career delete
   */
  export type careerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
    /**
     * Filter which career to delete.
     */
    where: careerWhereUniqueInput
  }

  /**
   * career deleteMany
   */
  export type careerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which careers to delete
     */
    where?: careerWhereInput
    /**
     * Limit how many careers to delete.
     */
    limit?: number
  }

  /**
   * career without action
   */
  export type careerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the career
     */
    select?: careerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the career
     */
    omit?: careerOmit<ExtArgs> | null
  }


  /**
   * Model results
   */

  export type AggregateResults = {
    _count: ResultsCountAggregateOutputType | null
    _avg: ResultsAvgAggregateOutputType | null
    _sum: ResultsSumAggregateOutputType | null
    _min: ResultsMinAggregateOutputType | null
    _max: ResultsMaxAggregateOutputType | null
  }

  export type ResultsAvgAggregateOutputType = {
    id_result: number | null
    total_votes: number | null
  }

  export type ResultsSumAggregateOutputType = {
    id_result: number | null
    total_votes: number | null
  }

  export type ResultsMinAggregateOutputType = {
    id_result: number | null
    total_votes: number | null
  }

  export type ResultsMaxAggregateOutputType = {
    id_result: number | null
    total_votes: number | null
  }

  export type ResultsCountAggregateOutputType = {
    id_result: number
    total_votes: number
    _all: number
  }


  export type ResultsAvgAggregateInputType = {
    id_result?: true
    total_votes?: true
  }

  export type ResultsSumAggregateInputType = {
    id_result?: true
    total_votes?: true
  }

  export type ResultsMinAggregateInputType = {
    id_result?: true
    total_votes?: true
  }

  export type ResultsMaxAggregateInputType = {
    id_result?: true
    total_votes?: true
  }

  export type ResultsCountAggregateInputType = {
    id_result?: true
    total_votes?: true
    _all?: true
  }

  export type ResultsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which results to aggregate.
     */
    where?: resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of results to fetch.
     */
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned results
    **/
    _count?: true | ResultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultsMaxAggregateInputType
  }

  export type GetResultsAggregateType<T extends ResultsAggregateArgs> = {
        [P in keyof T & keyof AggregateResults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResults[P]>
      : GetScalarType<T[P], AggregateResults[P]>
  }




  export type resultsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: resultsWhereInput
    orderBy?: resultsOrderByWithAggregationInput | resultsOrderByWithAggregationInput[]
    by: ResultsScalarFieldEnum[] | ResultsScalarFieldEnum
    having?: resultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultsCountAggregateInputType | true
    _avg?: ResultsAvgAggregateInputType
    _sum?: ResultsSumAggregateInputType
    _min?: ResultsMinAggregateInputType
    _max?: ResultsMaxAggregateInputType
  }

  export type ResultsGroupByOutputType = {
    id_result: number
    total_votes: number
    _count: ResultsCountAggregateOutputType | null
    _avg: ResultsAvgAggregateOutputType | null
    _sum: ResultsSumAggregateOutputType | null
    _min: ResultsMinAggregateOutputType | null
    _max: ResultsMaxAggregateOutputType | null
  }

  type GetResultsGroupByPayload<T extends resultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultsGroupByOutputType[P]>
            : GetScalarType<T[P], ResultsGroupByOutputType[P]>
        }
      >
    >


  export type resultsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_result?: boolean
    total_votes?: boolean
  }, ExtArgs["result"]["results"]>



  export type resultsSelectScalar = {
    id_result?: boolean
    total_votes?: boolean
  }

  export type resultsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_result" | "total_votes", ExtArgs["result"]["results"]>

  export type $resultsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "results"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_result: number
      total_votes: number
    }, ExtArgs["result"]["results"]>
    composites: {}
  }

  type resultsGetPayload<S extends boolean | null | undefined | resultsDefaultArgs> = $Result.GetResult<Prisma.$resultsPayload, S>

  type resultsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<resultsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultsCountAggregateInputType | true
    }

  export interface resultsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['results'], meta: { name: 'results' } }
    /**
     * Find zero or one Results that matches the filter.
     * @param {resultsFindUniqueArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends resultsFindUniqueArgs>(args: SelectSubset<T, resultsFindUniqueArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Results that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {resultsFindUniqueOrThrowArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends resultsFindUniqueOrThrowArgs>(args: SelectSubset<T, resultsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsFindFirstArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends resultsFindFirstArgs>(args?: SelectSubset<T, resultsFindFirstArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Results that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsFindFirstOrThrowArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends resultsFindFirstOrThrowArgs>(args?: SelectSubset<T, resultsFindFirstOrThrowArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.results.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.results.findMany({ take: 10 })
     * 
     * // Only select the `id_result`
     * const resultsWithId_resultOnly = await prisma.results.findMany({ select: { id_result: true } })
     * 
     */
    findMany<T extends resultsFindManyArgs>(args?: SelectSubset<T, resultsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Results.
     * @param {resultsCreateArgs} args - Arguments to create a Results.
     * @example
     * // Create one Results
     * const Results = await prisma.results.create({
     *   data: {
     *     // ... data to create a Results
     *   }
     * })
     * 
     */
    create<T extends resultsCreateArgs>(args: SelectSubset<T, resultsCreateArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {resultsCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const results = await prisma.results.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends resultsCreateManyArgs>(args?: SelectSubset<T, resultsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Results.
     * @param {resultsDeleteArgs} args - Arguments to delete one Results.
     * @example
     * // Delete one Results
     * const Results = await prisma.results.delete({
     *   where: {
     *     // ... filter to delete one Results
     *   }
     * })
     * 
     */
    delete<T extends resultsDeleteArgs>(args: SelectSubset<T, resultsDeleteArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Results.
     * @param {resultsUpdateArgs} args - Arguments to update one Results.
     * @example
     * // Update one Results
     * const results = await prisma.results.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends resultsUpdateArgs>(args: SelectSubset<T, resultsUpdateArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {resultsDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.results.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends resultsDeleteManyArgs>(args?: SelectSubset<T, resultsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const results = await prisma.results.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends resultsUpdateManyArgs>(args: SelectSubset<T, resultsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Results.
     * @param {resultsUpsertArgs} args - Arguments to update or create a Results.
     * @example
     * // Update or create a Results
     * const results = await prisma.results.upsert({
     *   create: {
     *     // ... data to create a Results
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Results we want to update
     *   }
     * })
     */
    upsert<T extends resultsUpsertArgs>(args: SelectSubset<T, resultsUpsertArgs<ExtArgs>>): Prisma__resultsClient<$Result.GetResult<Prisma.$resultsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.results.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends resultsCountArgs>(
      args?: Subset<T, resultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultsAggregateArgs>(args: Subset<T, ResultsAggregateArgs>): Prisma.PrismaPromise<GetResultsAggregateType<T>>

    /**
     * Group by Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {resultsGroupByArgs} args - Group by arguments.
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
      T extends resultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: resultsGroupByArgs['orderBy'] }
        : { orderBy?: resultsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, resultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the results model
   */
  readonly fields: resultsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for results.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__resultsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the results model
   */
  interface resultsFieldRefs {
    readonly id_result: FieldRef<"results", 'Int'>
    readonly total_votes: FieldRef<"results", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * results findUnique
   */
  export type resultsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where: resultsWhereUniqueInput
  }

  /**
   * results findUniqueOrThrow
   */
  export type resultsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where: resultsWhereUniqueInput
  }

  /**
   * results findFirst
   */
  export type resultsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where?: resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of results to fetch.
     */
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for results.
     */
    cursor?: resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of results.
     */
    distinct?: ResultsScalarFieldEnum | ResultsScalarFieldEnum[]
  }

  /**
   * results findFirstOrThrow
   */
  export type resultsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where?: resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of results to fetch.
     */
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for results.
     */
    cursor?: resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of results.
     */
    distinct?: ResultsScalarFieldEnum | ResultsScalarFieldEnum[]
  }

  /**
   * results findMany
   */
  export type resultsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Filter, which results to fetch.
     */
    where?: resultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of results to fetch.
     */
    orderBy?: resultsOrderByWithRelationInput | resultsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing results.
     */
    cursor?: resultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` results.
     */
    skip?: number
    distinct?: ResultsScalarFieldEnum | ResultsScalarFieldEnum[]
  }

  /**
   * results create
   */
  export type resultsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * The data needed to create a results.
     */
    data: XOR<resultsCreateInput, resultsUncheckedCreateInput>
  }

  /**
   * results createMany
   */
  export type resultsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many results.
     */
    data: resultsCreateManyInput | resultsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * results update
   */
  export type resultsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * The data needed to update a results.
     */
    data: XOR<resultsUpdateInput, resultsUncheckedUpdateInput>
    /**
     * Choose, which results to update.
     */
    where: resultsWhereUniqueInput
  }

  /**
   * results updateMany
   */
  export type resultsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update results.
     */
    data: XOR<resultsUpdateManyMutationInput, resultsUncheckedUpdateManyInput>
    /**
     * Filter which results to update
     */
    where?: resultsWhereInput
    /**
     * Limit how many results to update.
     */
    limit?: number
  }

  /**
   * results upsert
   */
  export type resultsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * The filter to search for the results to update in case it exists.
     */
    where: resultsWhereUniqueInput
    /**
     * In case the results found by the `where` argument doesn't exist, create a new results with this data.
     */
    create: XOR<resultsCreateInput, resultsUncheckedCreateInput>
    /**
     * In case the results was found with the provided `where` argument, update it with this data.
     */
    update: XOR<resultsUpdateInput, resultsUncheckedUpdateInput>
  }

  /**
   * results delete
   */
  export type resultsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
    /**
     * Filter which results to delete.
     */
    where: resultsWhereUniqueInput
  }

  /**
   * results deleteMany
   */
  export type resultsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which results to delete
     */
    where?: resultsWhereInput
    /**
     * Limit how many results to delete.
     */
    limit?: number
  }

  /**
   * results without action
   */
  export type resultsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the results
     */
    select?: resultsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the results
     */
    omit?: resultsOmit<ExtArgs> | null
  }


  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id_role: number | null
  }

  export type RoleSumAggregateOutputType = {
    id_role: number | null
  }

  export type RoleMinAggregateOutputType = {
    id_role: number | null
    nombre_role: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id_role: number | null
    nombre_role: string | null
  }

  export type RoleCountAggregateOutputType = {
    id_role: number
    nombre_role: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id_role?: true
  }

  export type RoleSumAggregateInputType = {
    id_role?: true
  }

  export type RoleMinAggregateInputType = {
    id_role?: true
    nombre_role?: true
  }

  export type RoleMaxAggregateInputType = {
    id_role?: true
    nombre_role?: true
  }

  export type RoleCountAggregateInputType = {
    id_role?: true
    nombre_role?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: roleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id_role: number
    nombre_role: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_role?: boolean
    nombre_role?: boolean
  }, ExtArgs["result"]["role"]>



  export type roleSelectScalar = {
    id_role?: boolean
    nombre_role?: boolean
  }

  export type roleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_role" | "nombre_role", ExtArgs["result"]["role"]>

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "role"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_role: number
      nombre_role: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<Prisma.$rolePayload, S>

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<roleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role'], meta: { name: 'role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends roleFindUniqueArgs>(args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs>(args: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends roleFindFirstArgs>(args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs>(args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id_role`
     * const roleWithId_roleOnly = await prisma.role.findMany({ select: { id_role: true } })
     * 
     */
    findMany<T extends roleFindManyArgs>(args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends roleCreateArgs>(args: SelectSubset<T, roleCreateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {roleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends roleCreateManyArgs>(args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends roleDeleteArgs>(args: SelectSubset<T, roleDeleteArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends roleUpdateArgs>(args: SelectSubset<T, roleUpdateArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends roleDeleteManyArgs>(args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends roleUpdateManyArgs>(args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends roleUpsertArgs>(args: SelectSubset<T, roleUpsertArgs<ExtArgs>>): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
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
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the role model
   */
  readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id_role: FieldRef<"role", 'Int'>
    readonly nombre_role: FieldRef<"role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>
  }

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to update.
     */
    limit?: number
  }

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>
  }

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput
  }

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput
    /**
     * Limit how many roles to delete.
     */
    limit?: number
  }

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the role
     */
    omit?: roleOmit<ExtArgs> | null
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


  export const AdministradorScalarFieldEnum: {
    id_admin: 'id_admin',
    nombre_admin: 'nombre_admin',
    apellido_admin: 'apellido_admin',
    tipo_doc_admin: 'tipo_doc_admin',
    num_doc_admin: 'num_doc_admin',
    correo_admin: 'correo_admin',
    contrasena_admin: 'contrasena_admin'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const VotersScalarFieldEnum: {
    id_voter: 'id_voter',
    nombre_voter: 'nombre_voter',
    apellido_voter: 'apellido_voter',
    tipo_doc_voter: 'tipo_doc_voter',
    num_doc_voter: 'num_doc_voter',
    correo_voter: 'correo_voter',
    estado_voter: 'estado_voter',
    contrasena_voter: 'contrasena_voter'
  };

  export type VotersScalarFieldEnum = (typeof VotersScalarFieldEnum)[keyof typeof VotersScalarFieldEnum]


  export const ElectionsScalarFieldEnum: {
    id_election: 'id_election',
    nombre_election: 'nombre_election',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    estado_election: 'estado_election',
    admin_id: 'admin_id'
  };

  export type ElectionsScalarFieldEnum = (typeof ElectionsScalarFieldEnum)[keyof typeof ElectionsScalarFieldEnum]


  export const CandidatesScalarFieldEnum: {
    id_candidate: 'id_candidate',
    nombre_candidate: 'nombre_candidate',
    apellido_candidate: 'apellido_candidate',
    tipo_doc_candidate: 'tipo_doc_candidate',
    num_doc_candidate: 'num_doc_candidate',
    correo_candidate: 'correo_candidate',
    estado_candidate: 'estado_candidate',
    foto_candidate: 'foto_candidate'
  };

  export type CandidatesScalarFieldEnum = (typeof CandidatesScalarFieldEnum)[keyof typeof CandidatesScalarFieldEnum]


  export const VotesScalarFieldEnum: {
    id_vote: 'id_vote',
    fecha_vote: 'fecha_vote',
    hora_vote: 'hora_vote'
  };

  export type VotesScalarFieldEnum = (typeof VotesScalarFieldEnum)[keyof typeof VotesScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id_proposal: 'id_proposal',
    titulo_proposal: 'titulo_proposal',
    descripcion_proposal: 'descripcion_proposal',
    estado_proposal: 'estado_proposal'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const CareerScalarFieldEnum: {
    id_career: 'id_career',
    nombre_career: 'nombre_career',
    facultad_career: 'facultad_career'
  };

  export type CareerScalarFieldEnum = (typeof CareerScalarFieldEnum)[keyof typeof CareerScalarFieldEnum]


  export const ResultsScalarFieldEnum: {
    id_result: 'id_result',
    total_votes: 'total_votes'
  };

  export type ResultsScalarFieldEnum = (typeof ResultsScalarFieldEnum)[keyof typeof ResultsScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id_role: 'id_role',
    nombre_role: 'nombre_role'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const administradorOrderByRelevanceFieldEnum: {
    nombre_admin: 'nombre_admin',
    apellido_admin: 'apellido_admin',
    tipo_doc_admin: 'tipo_doc_admin',
    correo_admin: 'correo_admin',
    contrasena_admin: 'contrasena_admin'
  };

  export type administradorOrderByRelevanceFieldEnum = (typeof administradorOrderByRelevanceFieldEnum)[keyof typeof administradorOrderByRelevanceFieldEnum]


  export const votersOrderByRelevanceFieldEnum: {
    nombre_voter: 'nombre_voter',
    apellido_voter: 'apellido_voter',
    tipo_doc_voter: 'tipo_doc_voter',
    correo_voter: 'correo_voter',
    estado_voter: 'estado_voter',
    contrasena_voter: 'contrasena_voter'
  };

  export type votersOrderByRelevanceFieldEnum = (typeof votersOrderByRelevanceFieldEnum)[keyof typeof votersOrderByRelevanceFieldEnum]


  export const electionsOrderByRelevanceFieldEnum: {
    nombre_election: 'nombre_election',
    estado_election: 'estado_election'
  };

  export type electionsOrderByRelevanceFieldEnum = (typeof electionsOrderByRelevanceFieldEnum)[keyof typeof electionsOrderByRelevanceFieldEnum]


  export const candidatesOrderByRelevanceFieldEnum: {
    nombre_candidate: 'nombre_candidate',
    apellido_candidate: 'apellido_candidate',
    tipo_doc_candidate: 'tipo_doc_candidate',
    correo_candidate: 'correo_candidate',
    estado_candidate: 'estado_candidate',
    foto_candidate: 'foto_candidate'
  };

  export type candidatesOrderByRelevanceFieldEnum = (typeof candidatesOrderByRelevanceFieldEnum)[keyof typeof candidatesOrderByRelevanceFieldEnum]


  export const proposalOrderByRelevanceFieldEnum: {
    titulo_proposal: 'titulo_proposal',
    descripcion_proposal: 'descripcion_proposal',
    estado_proposal: 'estado_proposal'
  };

  export type proposalOrderByRelevanceFieldEnum = (typeof proposalOrderByRelevanceFieldEnum)[keyof typeof proposalOrderByRelevanceFieldEnum]


  export const careerOrderByRelevanceFieldEnum: {
    nombre_career: 'nombre_career',
    facultad_career: 'facultad_career'
  };

  export type careerOrderByRelevanceFieldEnum = (typeof careerOrderByRelevanceFieldEnum)[keyof typeof careerOrderByRelevanceFieldEnum]


  export const roleOrderByRelevanceFieldEnum: {
    nombre_role: 'nombre_role'
  };

  export type roleOrderByRelevanceFieldEnum = (typeof roleOrderByRelevanceFieldEnum)[keyof typeof roleOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type administradorWhereInput = {
    AND?: administradorWhereInput | administradorWhereInput[]
    OR?: administradorWhereInput[]
    NOT?: administradorWhereInput | administradorWhereInput[]
    id_admin?: IntFilter<"administrador"> | number
    nombre_admin?: StringFilter<"administrador"> | string
    apellido_admin?: StringFilter<"administrador"> | string
    tipo_doc_admin?: StringFilter<"administrador"> | string
    num_doc_admin?: IntFilter<"administrador"> | number
    correo_admin?: StringFilter<"administrador"> | string
    contrasena_admin?: StringFilter<"administrador"> | string
    elections?: ElectionsListRelationFilter
  }

  export type administradorOrderByWithRelationInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
    elections?: electionsOrderByRelationAggregateInput
    _relevance?: administradorOrderByRelevanceInput
  }

  export type administradorWhereUniqueInput = Prisma.AtLeast<{
    id_admin?: number
    AND?: administradorWhereInput | administradorWhereInput[]
    OR?: administradorWhereInput[]
    NOT?: administradorWhereInput | administradorWhereInput[]
    nombre_admin?: StringFilter<"administrador"> | string
    apellido_admin?: StringFilter<"administrador"> | string
    tipo_doc_admin?: StringFilter<"administrador"> | string
    num_doc_admin?: IntFilter<"administrador"> | number
    correo_admin?: StringFilter<"administrador"> | string
    contrasena_admin?: StringFilter<"administrador"> | string
    elections?: ElectionsListRelationFilter
  }, "id_admin">

  export type administradorOrderByWithAggregationInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
    _count?: administradorCountOrderByAggregateInput
    _avg?: administradorAvgOrderByAggregateInput
    _max?: administradorMaxOrderByAggregateInput
    _min?: administradorMinOrderByAggregateInput
    _sum?: administradorSumOrderByAggregateInput
  }

  export type administradorScalarWhereWithAggregatesInput = {
    AND?: administradorScalarWhereWithAggregatesInput | administradorScalarWhereWithAggregatesInput[]
    OR?: administradorScalarWhereWithAggregatesInput[]
    NOT?: administradorScalarWhereWithAggregatesInput | administradorScalarWhereWithAggregatesInput[]
    id_admin?: IntWithAggregatesFilter<"administrador"> | number
    nombre_admin?: StringWithAggregatesFilter<"administrador"> | string
    apellido_admin?: StringWithAggregatesFilter<"administrador"> | string
    tipo_doc_admin?: StringWithAggregatesFilter<"administrador"> | string
    num_doc_admin?: IntWithAggregatesFilter<"administrador"> | number
    correo_admin?: StringWithAggregatesFilter<"administrador"> | string
    contrasena_admin?: StringWithAggregatesFilter<"administrador"> | string
  }

  export type votersWhereInput = {
    AND?: votersWhereInput | votersWhereInput[]
    OR?: votersWhereInput[]
    NOT?: votersWhereInput | votersWhereInput[]
    id_voter?: IntFilter<"voters"> | number
    nombre_voter?: StringFilter<"voters"> | string
    apellido_voter?: StringFilter<"voters"> | string
    tipo_doc_voter?: StringFilter<"voters"> | string
    num_doc_voter?: IntFilter<"voters"> | number
    correo_voter?: StringFilter<"voters"> | string
    estado_voter?: StringFilter<"voters"> | string
    contrasena_voter?: StringFilter<"voters"> | string
  }

  export type votersOrderByWithRelationInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
    _relevance?: votersOrderByRelevanceInput
  }

  export type votersWhereUniqueInput = Prisma.AtLeast<{
    id_voter?: number
    AND?: votersWhereInput | votersWhereInput[]
    OR?: votersWhereInput[]
    NOT?: votersWhereInput | votersWhereInput[]
    nombre_voter?: StringFilter<"voters"> | string
    apellido_voter?: StringFilter<"voters"> | string
    tipo_doc_voter?: StringFilter<"voters"> | string
    num_doc_voter?: IntFilter<"voters"> | number
    correo_voter?: StringFilter<"voters"> | string
    estado_voter?: StringFilter<"voters"> | string
    contrasena_voter?: StringFilter<"voters"> | string
  }, "id_voter">

  export type votersOrderByWithAggregationInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
    _count?: votersCountOrderByAggregateInput
    _avg?: votersAvgOrderByAggregateInput
    _max?: votersMaxOrderByAggregateInput
    _min?: votersMinOrderByAggregateInput
    _sum?: votersSumOrderByAggregateInput
  }

  export type votersScalarWhereWithAggregatesInput = {
    AND?: votersScalarWhereWithAggregatesInput | votersScalarWhereWithAggregatesInput[]
    OR?: votersScalarWhereWithAggregatesInput[]
    NOT?: votersScalarWhereWithAggregatesInput | votersScalarWhereWithAggregatesInput[]
    id_voter?: IntWithAggregatesFilter<"voters"> | number
    nombre_voter?: StringWithAggregatesFilter<"voters"> | string
    apellido_voter?: StringWithAggregatesFilter<"voters"> | string
    tipo_doc_voter?: StringWithAggregatesFilter<"voters"> | string
    num_doc_voter?: IntWithAggregatesFilter<"voters"> | number
    correo_voter?: StringWithAggregatesFilter<"voters"> | string
    estado_voter?: StringWithAggregatesFilter<"voters"> | string
    contrasena_voter?: StringWithAggregatesFilter<"voters"> | string
  }

  export type electionsWhereInput = {
    AND?: electionsWhereInput | electionsWhereInput[]
    OR?: electionsWhereInput[]
    NOT?: electionsWhereInput | electionsWhereInput[]
    id_election?: IntFilter<"elections"> | number
    nombre_election?: StringFilter<"elections"> | string
    fecha_inicio?: DateTimeFilter<"elections"> | Date | string
    fecha_fin?: DateTimeFilter<"elections"> | Date | string
    estado_election?: StringFilter<"elections"> | string
    admin_id?: IntFilter<"elections"> | number
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }

  export type electionsOrderByWithRelationInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
    administrador?: administradorOrderByWithRelationInput
    _relevance?: electionsOrderByRelevanceInput
  }

  export type electionsWhereUniqueInput = Prisma.AtLeast<{
    id_election?: number
    AND?: electionsWhereInput | electionsWhereInput[]
    OR?: electionsWhereInput[]
    NOT?: electionsWhereInput | electionsWhereInput[]
    nombre_election?: StringFilter<"elections"> | string
    fecha_inicio?: DateTimeFilter<"elections"> | Date | string
    fecha_fin?: DateTimeFilter<"elections"> | Date | string
    estado_election?: StringFilter<"elections"> | string
    admin_id?: IntFilter<"elections"> | number
    administrador?: XOR<AdministradorScalarRelationFilter, administradorWhereInput>
  }, "id_election">

  export type electionsOrderByWithAggregationInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
    _count?: electionsCountOrderByAggregateInput
    _avg?: electionsAvgOrderByAggregateInput
    _max?: electionsMaxOrderByAggregateInput
    _min?: electionsMinOrderByAggregateInput
    _sum?: electionsSumOrderByAggregateInput
  }

  export type electionsScalarWhereWithAggregatesInput = {
    AND?: electionsScalarWhereWithAggregatesInput | electionsScalarWhereWithAggregatesInput[]
    OR?: electionsScalarWhereWithAggregatesInput[]
    NOT?: electionsScalarWhereWithAggregatesInput | electionsScalarWhereWithAggregatesInput[]
    id_election?: IntWithAggregatesFilter<"elections"> | number
    nombre_election?: StringWithAggregatesFilter<"elections"> | string
    fecha_inicio?: DateTimeWithAggregatesFilter<"elections"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"elections"> | Date | string
    estado_election?: StringWithAggregatesFilter<"elections"> | string
    admin_id?: IntWithAggregatesFilter<"elections"> | number
  }

  export type candidatesWhereInput = {
    AND?: candidatesWhereInput | candidatesWhereInput[]
    OR?: candidatesWhereInput[]
    NOT?: candidatesWhereInput | candidatesWhereInput[]
    id_candidate?: IntFilter<"candidates"> | number
    nombre_candidate?: StringFilter<"candidates"> | string
    apellido_candidate?: StringFilter<"candidates"> | string
    tipo_doc_candidate?: StringFilter<"candidates"> | string
    num_doc_candidate?: IntFilter<"candidates"> | number
    correo_candidate?: StringFilter<"candidates"> | string
    estado_candidate?: StringFilter<"candidates"> | string
    foto_candidate?: StringFilter<"candidates"> | string
  }

  export type candidatesOrderByWithRelationInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrder
    _relevance?: candidatesOrderByRelevanceInput
  }

  export type candidatesWhereUniqueInput = Prisma.AtLeast<{
    id_candidate?: number
    AND?: candidatesWhereInput | candidatesWhereInput[]
    OR?: candidatesWhereInput[]
    NOT?: candidatesWhereInput | candidatesWhereInput[]
    nombre_candidate?: StringFilter<"candidates"> | string
    apellido_candidate?: StringFilter<"candidates"> | string
    tipo_doc_candidate?: StringFilter<"candidates"> | string
    num_doc_candidate?: IntFilter<"candidates"> | number
    correo_candidate?: StringFilter<"candidates"> | string
    estado_candidate?: StringFilter<"candidates"> | string
    foto_candidate?: StringFilter<"candidates"> | string
  }, "id_candidate">

  export type candidatesOrderByWithAggregationInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrder
    _count?: candidatesCountOrderByAggregateInput
    _avg?: candidatesAvgOrderByAggregateInput
    _max?: candidatesMaxOrderByAggregateInput
    _min?: candidatesMinOrderByAggregateInput
    _sum?: candidatesSumOrderByAggregateInput
  }

  export type candidatesScalarWhereWithAggregatesInput = {
    AND?: candidatesScalarWhereWithAggregatesInput | candidatesScalarWhereWithAggregatesInput[]
    OR?: candidatesScalarWhereWithAggregatesInput[]
    NOT?: candidatesScalarWhereWithAggregatesInput | candidatesScalarWhereWithAggregatesInput[]
    id_candidate?: IntWithAggregatesFilter<"candidates"> | number
    nombre_candidate?: StringWithAggregatesFilter<"candidates"> | string
    apellido_candidate?: StringWithAggregatesFilter<"candidates"> | string
    tipo_doc_candidate?: StringWithAggregatesFilter<"candidates"> | string
    num_doc_candidate?: IntWithAggregatesFilter<"candidates"> | number
    correo_candidate?: StringWithAggregatesFilter<"candidates"> | string
    estado_candidate?: StringWithAggregatesFilter<"candidates"> | string
    foto_candidate?: StringWithAggregatesFilter<"candidates"> | string
  }

  export type votesWhereInput = {
    AND?: votesWhereInput | votesWhereInput[]
    OR?: votesWhereInput[]
    NOT?: votesWhereInput | votesWhereInput[]
    id_vote?: IntFilter<"votes"> | number
    fecha_vote?: DateTimeFilter<"votes"> | Date | string
    hora_vote?: DateTimeFilter<"votes"> | Date | string
  }

  export type votesOrderByWithRelationInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
  }

  export type votesWhereUniqueInput = Prisma.AtLeast<{
    id_vote?: number
    AND?: votesWhereInput | votesWhereInput[]
    OR?: votesWhereInput[]
    NOT?: votesWhereInput | votesWhereInput[]
    fecha_vote?: DateTimeFilter<"votes"> | Date | string
    hora_vote?: DateTimeFilter<"votes"> | Date | string
  }, "id_vote">

  export type votesOrderByWithAggregationInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
    _count?: votesCountOrderByAggregateInput
    _avg?: votesAvgOrderByAggregateInput
    _max?: votesMaxOrderByAggregateInput
    _min?: votesMinOrderByAggregateInput
    _sum?: votesSumOrderByAggregateInput
  }

  export type votesScalarWhereWithAggregatesInput = {
    AND?: votesScalarWhereWithAggregatesInput | votesScalarWhereWithAggregatesInput[]
    OR?: votesScalarWhereWithAggregatesInput[]
    NOT?: votesScalarWhereWithAggregatesInput | votesScalarWhereWithAggregatesInput[]
    id_vote?: IntWithAggregatesFilter<"votes"> | number
    fecha_vote?: DateTimeWithAggregatesFilter<"votes"> | Date | string
    hora_vote?: DateTimeWithAggregatesFilter<"votes"> | Date | string
  }

  export type proposalWhereInput = {
    AND?: proposalWhereInput | proposalWhereInput[]
    OR?: proposalWhereInput[]
    NOT?: proposalWhereInput | proposalWhereInput[]
    id_proposal?: IntFilter<"proposal"> | number
    titulo_proposal?: StringFilter<"proposal"> | string
    descripcion_proposal?: StringFilter<"proposal"> | string
    estado_proposal?: StringFilter<"proposal"> | string
  }

  export type proposalOrderByWithRelationInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
    _relevance?: proposalOrderByRelevanceInput
  }

  export type proposalWhereUniqueInput = Prisma.AtLeast<{
    id_proposal?: number
    AND?: proposalWhereInput | proposalWhereInput[]
    OR?: proposalWhereInput[]
    NOT?: proposalWhereInput | proposalWhereInput[]
    titulo_proposal?: StringFilter<"proposal"> | string
    descripcion_proposal?: StringFilter<"proposal"> | string
    estado_proposal?: StringFilter<"proposal"> | string
  }, "id_proposal">

  export type proposalOrderByWithAggregationInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
    _count?: proposalCountOrderByAggregateInput
    _avg?: proposalAvgOrderByAggregateInput
    _max?: proposalMaxOrderByAggregateInput
    _min?: proposalMinOrderByAggregateInput
    _sum?: proposalSumOrderByAggregateInput
  }

  export type proposalScalarWhereWithAggregatesInput = {
    AND?: proposalScalarWhereWithAggregatesInput | proposalScalarWhereWithAggregatesInput[]
    OR?: proposalScalarWhereWithAggregatesInput[]
    NOT?: proposalScalarWhereWithAggregatesInput | proposalScalarWhereWithAggregatesInput[]
    id_proposal?: IntWithAggregatesFilter<"proposal"> | number
    titulo_proposal?: StringWithAggregatesFilter<"proposal"> | string
    descripcion_proposal?: StringWithAggregatesFilter<"proposal"> | string
    estado_proposal?: StringWithAggregatesFilter<"proposal"> | string
  }

  export type careerWhereInput = {
    AND?: careerWhereInput | careerWhereInput[]
    OR?: careerWhereInput[]
    NOT?: careerWhereInput | careerWhereInput[]
    id_career?: IntFilter<"career"> | number
    nombre_career?: StringFilter<"career"> | string
    facultad_career?: StringFilter<"career"> | string
  }

  export type careerOrderByWithRelationInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
    _relevance?: careerOrderByRelevanceInput
  }

  export type careerWhereUniqueInput = Prisma.AtLeast<{
    id_career?: number
    AND?: careerWhereInput | careerWhereInput[]
    OR?: careerWhereInput[]
    NOT?: careerWhereInput | careerWhereInput[]
    nombre_career?: StringFilter<"career"> | string
    facultad_career?: StringFilter<"career"> | string
  }, "id_career">

  export type careerOrderByWithAggregationInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
    _count?: careerCountOrderByAggregateInput
    _avg?: careerAvgOrderByAggregateInput
    _max?: careerMaxOrderByAggregateInput
    _min?: careerMinOrderByAggregateInput
    _sum?: careerSumOrderByAggregateInput
  }

  export type careerScalarWhereWithAggregatesInput = {
    AND?: careerScalarWhereWithAggregatesInput | careerScalarWhereWithAggregatesInput[]
    OR?: careerScalarWhereWithAggregatesInput[]
    NOT?: careerScalarWhereWithAggregatesInput | careerScalarWhereWithAggregatesInput[]
    id_career?: IntWithAggregatesFilter<"career"> | number
    nombre_career?: StringWithAggregatesFilter<"career"> | string
    facultad_career?: StringWithAggregatesFilter<"career"> | string
  }

  export type resultsWhereInput = {
    AND?: resultsWhereInput | resultsWhereInput[]
    OR?: resultsWhereInput[]
    NOT?: resultsWhereInput | resultsWhereInput[]
    id_result?: IntFilter<"results"> | number
    total_votes?: IntFilter<"results"> | number
  }

  export type resultsOrderByWithRelationInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
  }

  export type resultsWhereUniqueInput = Prisma.AtLeast<{
    id_result?: number
    AND?: resultsWhereInput | resultsWhereInput[]
    OR?: resultsWhereInput[]
    NOT?: resultsWhereInput | resultsWhereInput[]
    total_votes?: IntFilter<"results"> | number
  }, "id_result">

  export type resultsOrderByWithAggregationInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
    _count?: resultsCountOrderByAggregateInput
    _avg?: resultsAvgOrderByAggregateInput
    _max?: resultsMaxOrderByAggregateInput
    _min?: resultsMinOrderByAggregateInput
    _sum?: resultsSumOrderByAggregateInput
  }

  export type resultsScalarWhereWithAggregatesInput = {
    AND?: resultsScalarWhereWithAggregatesInput | resultsScalarWhereWithAggregatesInput[]
    OR?: resultsScalarWhereWithAggregatesInput[]
    NOT?: resultsScalarWhereWithAggregatesInput | resultsScalarWhereWithAggregatesInput[]
    id_result?: IntWithAggregatesFilter<"results"> | number
    total_votes?: IntWithAggregatesFilter<"results"> | number
  }

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    id_role?: IntFilter<"role"> | number
    nombre_role?: StringFilter<"role"> | string
  }

  export type roleOrderByWithRelationInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
    _relevance?: roleOrderByRelevanceInput
  }

  export type roleWhereUniqueInput = Prisma.AtLeast<{
    id_role?: number
    AND?: roleWhereInput | roleWhereInput[]
    OR?: roleWhereInput[]
    NOT?: roleWhereInput | roleWhereInput[]
    nombre_role?: StringFilter<"role"> | string
  }, "id_role">

  export type roleOrderByWithAggregationInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
    _count?: roleCountOrderByAggregateInput
    _avg?: roleAvgOrderByAggregateInput
    _max?: roleMaxOrderByAggregateInput
    _min?: roleMinOrderByAggregateInput
    _sum?: roleSumOrderByAggregateInput
  }

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    OR?: roleScalarWhereWithAggregatesInput[]
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[]
    id_role?: IntWithAggregatesFilter<"role"> | number
    nombre_role?: StringWithAggregatesFilter<"role"> | string
  }

  export type administradorCreateInput = {
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: number
    correo_admin: string
    contrasena_admin: string
    elections?: electionsCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUncheckedCreateInput = {
    id_admin?: number
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: number
    correo_admin: string
    contrasena_admin: string
    elections?: electionsUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type administradorUpdateInput = {
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: IntFieldUpdateOperationsInput | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
    elections?: electionsUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorUncheckedUpdateInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: IntFieldUpdateOperationsInput | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
    elections?: electionsUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type administradorCreateManyInput = {
    id_admin?: number
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: number
    correo_admin: string
    contrasena_admin: string
  }

  export type administradorUpdateManyMutationInput = {
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: IntFieldUpdateOperationsInput | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
  }

  export type administradorUncheckedUpdateManyInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: IntFieldUpdateOperationsInput | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
  }

  export type votersCreateInput = {
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
  }

  export type votersUncheckedCreateInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
  }

  export type votersUpdateInput = {
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: IntFieldUpdateOperationsInput | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
  }

  export type votersUncheckedUpdateInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: IntFieldUpdateOperationsInput | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
  }

  export type votersCreateManyInput = {
    id_voter?: number
    nombre_voter: string
    apellido_voter: string
    tipo_doc_voter: string
    num_doc_voter: number
    correo_voter: string
    estado_voter: string
    contrasena_voter: string
  }

  export type votersUpdateManyMutationInput = {
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: IntFieldUpdateOperationsInput | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
  }

  export type votersUncheckedUpdateManyInput = {
    id_voter?: IntFieldUpdateOperationsInput | number
    nombre_voter?: StringFieldUpdateOperationsInput | string
    apellido_voter?: StringFieldUpdateOperationsInput | string
    tipo_doc_voter?: StringFieldUpdateOperationsInput | string
    num_doc_voter?: IntFieldUpdateOperationsInput | number
    correo_voter?: StringFieldUpdateOperationsInput | string
    estado_voter?: StringFieldUpdateOperationsInput | string
    contrasena_voter?: StringFieldUpdateOperationsInput | string
  }

  export type electionsCreateInput = {
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    administrador: administradorCreateNestedOneWithoutElectionsInput
  }

  export type electionsUncheckedCreateInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    admin_id: number
  }

  export type electionsUpdateInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    administrador?: administradorUpdateOneRequiredWithoutElectionsNestedInput
  }

  export type electionsUncheckedUpdateInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
  }

  export type electionsCreateManyInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
    admin_id: number
  }

  export type electionsUpdateManyMutationInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
  }

  export type electionsUncheckedUpdateManyInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
    admin_id?: IntFieldUpdateOperationsInput | number
  }

  export type candidatesCreateInput = {
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: number
    correo_candidate: string
    estado_candidate: string
    foto_candidate: string
  }

  export type candidatesUncheckedCreateInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: number
    correo_candidate: string
    estado_candidate: string
    foto_candidate: string
  }

  export type candidatesUpdateInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: IntFieldUpdateOperationsInput | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: StringFieldUpdateOperationsInput | string
  }

  export type candidatesUncheckedUpdateInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: IntFieldUpdateOperationsInput | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: StringFieldUpdateOperationsInput | string
  }

  export type candidatesCreateManyInput = {
    id_candidate?: number
    nombre_candidate: string
    apellido_candidate: string
    tipo_doc_candidate: string
    num_doc_candidate: number
    correo_candidate: string
    estado_candidate: string
    foto_candidate: string
  }

  export type candidatesUpdateManyMutationInput = {
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: IntFieldUpdateOperationsInput | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: StringFieldUpdateOperationsInput | string
  }

  export type candidatesUncheckedUpdateManyInput = {
    id_candidate?: IntFieldUpdateOperationsInput | number
    nombre_candidate?: StringFieldUpdateOperationsInput | string
    apellido_candidate?: StringFieldUpdateOperationsInput | string
    tipo_doc_candidate?: StringFieldUpdateOperationsInput | string
    num_doc_candidate?: IntFieldUpdateOperationsInput | number
    correo_candidate?: StringFieldUpdateOperationsInput | string
    estado_candidate?: StringFieldUpdateOperationsInput | string
    foto_candidate?: StringFieldUpdateOperationsInput | string
  }

  export type votesCreateInput = {
    fecha_vote: Date | string
    hora_vote: Date | string
  }

  export type votesUncheckedCreateInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
  }

  export type votesUpdateInput = {
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type votesUncheckedUpdateInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type votesCreateManyInput = {
    id_vote?: number
    fecha_vote: Date | string
    hora_vote: Date | string
  }

  export type votesUpdateManyMutationInput = {
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type votesUncheckedUpdateManyInput = {
    id_vote?: IntFieldUpdateOperationsInput | number
    fecha_vote?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_vote?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type proposalCreateInput = {
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
  }

  export type proposalUncheckedCreateInput = {
    id_proposal?: number
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
  }

  export type proposalUpdateInput = {
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
  }

  export type proposalUncheckedUpdateInput = {
    id_proposal?: IntFieldUpdateOperationsInput | number
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
  }

  export type proposalCreateManyInput = {
    id_proposal?: number
    titulo_proposal: string
    descripcion_proposal: string
    estado_proposal: string
  }

  export type proposalUpdateManyMutationInput = {
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
  }

  export type proposalUncheckedUpdateManyInput = {
    id_proposal?: IntFieldUpdateOperationsInput | number
    titulo_proposal?: StringFieldUpdateOperationsInput | string
    descripcion_proposal?: StringFieldUpdateOperationsInput | string
    estado_proposal?: StringFieldUpdateOperationsInput | string
  }

  export type careerCreateInput = {
    nombre_career: string
    facultad_career: string
  }

  export type careerUncheckedCreateInput = {
    id_career?: number
    nombre_career: string
    facultad_career: string
  }

  export type careerUpdateInput = {
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
  }

  export type careerUncheckedUpdateInput = {
    id_career?: IntFieldUpdateOperationsInput | number
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
  }

  export type careerCreateManyInput = {
    id_career?: number
    nombre_career: string
    facultad_career: string
  }

  export type careerUpdateManyMutationInput = {
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
  }

  export type careerUncheckedUpdateManyInput = {
    id_career?: IntFieldUpdateOperationsInput | number
    nombre_career?: StringFieldUpdateOperationsInput | string
    facultad_career?: StringFieldUpdateOperationsInput | string
  }

  export type resultsCreateInput = {
    total_votes: number
  }

  export type resultsUncheckedCreateInput = {
    id_result?: number
    total_votes: number
  }

  export type resultsUpdateInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
  }

  export type resultsUncheckedUpdateInput = {
    id_result?: IntFieldUpdateOperationsInput | number
    total_votes?: IntFieldUpdateOperationsInput | number
  }

  export type resultsCreateManyInput = {
    id_result?: number
    total_votes: number
  }

  export type resultsUpdateManyMutationInput = {
    total_votes?: IntFieldUpdateOperationsInput | number
  }

  export type resultsUncheckedUpdateManyInput = {
    id_result?: IntFieldUpdateOperationsInput | number
    total_votes?: IntFieldUpdateOperationsInput | number
  }

  export type roleCreateInput = {
    nombre_role: string
  }

  export type roleUncheckedCreateInput = {
    id_role?: number
    nombre_role: string
  }

  export type roleUpdateInput = {
    nombre_role?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    nombre_role?: StringFieldUpdateOperationsInput | string
  }

  export type roleCreateManyInput = {
    id_role?: number
    nombre_role: string
  }

  export type roleUpdateManyMutationInput = {
    nombre_role?: StringFieldUpdateOperationsInput | string
  }

  export type roleUncheckedUpdateManyInput = {
    id_role?: IntFieldUpdateOperationsInput | number
    nombre_role?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ElectionsListRelationFilter = {
    every?: electionsWhereInput
    some?: electionsWhereInput
    none?: electionsWhereInput
  }

  export type electionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type administradorOrderByRelevanceInput = {
    fields: administradorOrderByRelevanceFieldEnum | administradorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type administradorCountOrderByAggregateInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
  }

  export type administradorAvgOrderByAggregateInput = {
    id_admin?: SortOrder
    num_doc_admin?: SortOrder
  }

  export type administradorMaxOrderByAggregateInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
  }

  export type administradorMinOrderByAggregateInput = {
    id_admin?: SortOrder
    nombre_admin?: SortOrder
    apellido_admin?: SortOrder
    tipo_doc_admin?: SortOrder
    num_doc_admin?: SortOrder
    correo_admin?: SortOrder
    contrasena_admin?: SortOrder
  }

  export type administradorSumOrderByAggregateInput = {
    id_admin?: SortOrder
    num_doc_admin?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type votersOrderByRelevanceInput = {
    fields: votersOrderByRelevanceFieldEnum | votersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type votersCountOrderByAggregateInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
  }

  export type votersAvgOrderByAggregateInput = {
    id_voter?: SortOrder
    num_doc_voter?: SortOrder
  }

  export type votersMaxOrderByAggregateInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
  }

  export type votersMinOrderByAggregateInput = {
    id_voter?: SortOrder
    nombre_voter?: SortOrder
    apellido_voter?: SortOrder
    tipo_doc_voter?: SortOrder
    num_doc_voter?: SortOrder
    correo_voter?: SortOrder
    estado_voter?: SortOrder
    contrasena_voter?: SortOrder
  }

  export type votersSumOrderByAggregateInput = {
    id_voter?: SortOrder
    num_doc_voter?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdministradorScalarRelationFilter = {
    is?: administradorWhereInput
    isNot?: administradorWhereInput
  }

  export type electionsOrderByRelevanceInput = {
    fields: electionsOrderByRelevanceFieldEnum | electionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type electionsCountOrderByAggregateInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
  }

  export type electionsAvgOrderByAggregateInput = {
    id_election?: SortOrder
    admin_id?: SortOrder
  }

  export type electionsMaxOrderByAggregateInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
  }

  export type electionsMinOrderByAggregateInput = {
    id_election?: SortOrder
    nombre_election?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado_election?: SortOrder
    admin_id?: SortOrder
  }

  export type electionsSumOrderByAggregateInput = {
    id_election?: SortOrder
    admin_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type candidatesOrderByRelevanceInput = {
    fields: candidatesOrderByRelevanceFieldEnum | candidatesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type candidatesCountOrderByAggregateInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrder
  }

  export type candidatesAvgOrderByAggregateInput = {
    id_candidate?: SortOrder
    num_doc_candidate?: SortOrder
  }

  export type candidatesMaxOrderByAggregateInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrder
  }

  export type candidatesMinOrderByAggregateInput = {
    id_candidate?: SortOrder
    nombre_candidate?: SortOrder
    apellido_candidate?: SortOrder
    tipo_doc_candidate?: SortOrder
    num_doc_candidate?: SortOrder
    correo_candidate?: SortOrder
    estado_candidate?: SortOrder
    foto_candidate?: SortOrder
  }

  export type candidatesSumOrderByAggregateInput = {
    id_candidate?: SortOrder
    num_doc_candidate?: SortOrder
  }

  export type votesCountOrderByAggregateInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
  }

  export type votesAvgOrderByAggregateInput = {
    id_vote?: SortOrder
  }

  export type votesMaxOrderByAggregateInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
  }

  export type votesMinOrderByAggregateInput = {
    id_vote?: SortOrder
    fecha_vote?: SortOrder
    hora_vote?: SortOrder
  }

  export type votesSumOrderByAggregateInput = {
    id_vote?: SortOrder
  }

  export type proposalOrderByRelevanceInput = {
    fields: proposalOrderByRelevanceFieldEnum | proposalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type proposalCountOrderByAggregateInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
  }

  export type proposalAvgOrderByAggregateInput = {
    id_proposal?: SortOrder
  }

  export type proposalMaxOrderByAggregateInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
  }

  export type proposalMinOrderByAggregateInput = {
    id_proposal?: SortOrder
    titulo_proposal?: SortOrder
    descripcion_proposal?: SortOrder
    estado_proposal?: SortOrder
  }

  export type proposalSumOrderByAggregateInput = {
    id_proposal?: SortOrder
  }

  export type careerOrderByRelevanceInput = {
    fields: careerOrderByRelevanceFieldEnum | careerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type careerCountOrderByAggregateInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
  }

  export type careerAvgOrderByAggregateInput = {
    id_career?: SortOrder
  }

  export type careerMaxOrderByAggregateInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
  }

  export type careerMinOrderByAggregateInput = {
    id_career?: SortOrder
    nombre_career?: SortOrder
    facultad_career?: SortOrder
  }

  export type careerSumOrderByAggregateInput = {
    id_career?: SortOrder
  }

  export type resultsCountOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
  }

  export type resultsAvgOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
  }

  export type resultsMaxOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
  }

  export type resultsMinOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
  }

  export type resultsSumOrderByAggregateInput = {
    id_result?: SortOrder
    total_votes?: SortOrder
  }

  export type roleOrderByRelevanceInput = {
    fields: roleOrderByRelevanceFieldEnum | roleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type roleCountOrderByAggregateInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
  }

  export type roleAvgOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type roleMaxOrderByAggregateInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
  }

  export type roleMinOrderByAggregateInput = {
    id_role?: SortOrder
    nombre_role?: SortOrder
  }

  export type roleSumOrderByAggregateInput = {
    id_role?: SortOrder
  }

  export type electionsCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<electionsCreateWithoutAdministradorInput, electionsUncheckedCreateWithoutAdministradorInput> | electionsCreateWithoutAdministradorInput[] | electionsUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: electionsCreateOrConnectWithoutAdministradorInput | electionsCreateOrConnectWithoutAdministradorInput[]
    createMany?: electionsCreateManyAdministradorInputEnvelope
    connect?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
  }

  export type electionsUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<electionsCreateWithoutAdministradorInput, electionsUncheckedCreateWithoutAdministradorInput> | electionsCreateWithoutAdministradorInput[] | electionsUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: electionsCreateOrConnectWithoutAdministradorInput | electionsCreateOrConnectWithoutAdministradorInput[]
    createMany?: electionsCreateManyAdministradorInputEnvelope
    connect?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type electionsUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<electionsCreateWithoutAdministradorInput, electionsUncheckedCreateWithoutAdministradorInput> | electionsCreateWithoutAdministradorInput[] | electionsUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: electionsCreateOrConnectWithoutAdministradorInput | electionsCreateOrConnectWithoutAdministradorInput[]
    upsert?: electionsUpsertWithWhereUniqueWithoutAdministradorInput | electionsUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: electionsCreateManyAdministradorInputEnvelope
    set?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
    disconnect?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
    delete?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
    connect?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
    update?: electionsUpdateWithWhereUniqueWithoutAdministradorInput | electionsUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: electionsUpdateManyWithWhereWithoutAdministradorInput | electionsUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: electionsScalarWhereInput | electionsScalarWhereInput[]
  }

  export type electionsUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<electionsCreateWithoutAdministradorInput, electionsUncheckedCreateWithoutAdministradorInput> | electionsCreateWithoutAdministradorInput[] | electionsUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: electionsCreateOrConnectWithoutAdministradorInput | electionsCreateOrConnectWithoutAdministradorInput[]
    upsert?: electionsUpsertWithWhereUniqueWithoutAdministradorInput | electionsUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: electionsCreateManyAdministradorInputEnvelope
    set?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
    disconnect?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
    delete?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
    connect?: electionsWhereUniqueInput | electionsWhereUniqueInput[]
    update?: electionsUpdateWithWhereUniqueWithoutAdministradorInput | electionsUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: electionsUpdateManyWithWhereWithoutAdministradorInput | electionsUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: electionsScalarWhereInput | electionsScalarWhereInput[]
  }

  export type administradorCreateNestedOneWithoutElectionsInput = {
    create?: XOR<administradorCreateWithoutElectionsInput, administradorUncheckedCreateWithoutElectionsInput>
    connectOrCreate?: administradorCreateOrConnectWithoutElectionsInput
    connect?: administradorWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type administradorUpdateOneRequiredWithoutElectionsNestedInput = {
    create?: XOR<administradorCreateWithoutElectionsInput, administradorUncheckedCreateWithoutElectionsInput>
    connectOrCreate?: administradorCreateOrConnectWithoutElectionsInput
    upsert?: administradorUpsertWithoutElectionsInput
    connect?: administradorWhereUniqueInput
    update?: XOR<XOR<administradorUpdateToOneWithWhereWithoutElectionsInput, administradorUpdateWithoutElectionsInput>, administradorUncheckedUpdateWithoutElectionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type electionsCreateWithoutAdministradorInput = {
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
  }

  export type electionsUncheckedCreateWithoutAdministradorInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
  }

  export type electionsCreateOrConnectWithoutAdministradorInput = {
    where: electionsWhereUniqueInput
    create: XOR<electionsCreateWithoutAdministradorInput, electionsUncheckedCreateWithoutAdministradorInput>
  }

  export type electionsCreateManyAdministradorInputEnvelope = {
    data: electionsCreateManyAdministradorInput | electionsCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type electionsUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: electionsWhereUniqueInput
    update: XOR<electionsUpdateWithoutAdministradorInput, electionsUncheckedUpdateWithoutAdministradorInput>
    create: XOR<electionsCreateWithoutAdministradorInput, electionsUncheckedCreateWithoutAdministradorInput>
  }

  export type electionsUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: electionsWhereUniqueInput
    data: XOR<electionsUpdateWithoutAdministradorInput, electionsUncheckedUpdateWithoutAdministradorInput>
  }

  export type electionsUpdateManyWithWhereWithoutAdministradorInput = {
    where: electionsScalarWhereInput
    data: XOR<electionsUpdateManyMutationInput, electionsUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type electionsScalarWhereInput = {
    AND?: electionsScalarWhereInput | electionsScalarWhereInput[]
    OR?: electionsScalarWhereInput[]
    NOT?: electionsScalarWhereInput | electionsScalarWhereInput[]
    id_election?: IntFilter<"elections"> | number
    nombre_election?: StringFilter<"elections"> | string
    fecha_inicio?: DateTimeFilter<"elections"> | Date | string
    fecha_fin?: DateTimeFilter<"elections"> | Date | string
    estado_election?: StringFilter<"elections"> | string
    admin_id?: IntFilter<"elections"> | number
  }

  export type administradorCreateWithoutElectionsInput = {
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: number
    correo_admin: string
    contrasena_admin: string
  }

  export type administradorUncheckedCreateWithoutElectionsInput = {
    id_admin?: number
    nombre_admin: string
    apellido_admin: string
    tipo_doc_admin: string
    num_doc_admin: number
    correo_admin: string
    contrasena_admin: string
  }

  export type administradorCreateOrConnectWithoutElectionsInput = {
    where: administradorWhereUniqueInput
    create: XOR<administradorCreateWithoutElectionsInput, administradorUncheckedCreateWithoutElectionsInput>
  }

  export type administradorUpsertWithoutElectionsInput = {
    update: XOR<administradorUpdateWithoutElectionsInput, administradorUncheckedUpdateWithoutElectionsInput>
    create: XOR<administradorCreateWithoutElectionsInput, administradorUncheckedCreateWithoutElectionsInput>
    where?: administradorWhereInput
  }

  export type administradorUpdateToOneWithWhereWithoutElectionsInput = {
    where?: administradorWhereInput
    data: XOR<administradorUpdateWithoutElectionsInput, administradorUncheckedUpdateWithoutElectionsInput>
  }

  export type administradorUpdateWithoutElectionsInput = {
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: IntFieldUpdateOperationsInput | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
  }

  export type administradorUncheckedUpdateWithoutElectionsInput = {
    id_admin?: IntFieldUpdateOperationsInput | number
    nombre_admin?: StringFieldUpdateOperationsInput | string
    apellido_admin?: StringFieldUpdateOperationsInput | string
    tipo_doc_admin?: StringFieldUpdateOperationsInput | string
    num_doc_admin?: IntFieldUpdateOperationsInput | number
    correo_admin?: StringFieldUpdateOperationsInput | string
    contrasena_admin?: StringFieldUpdateOperationsInput | string
  }

  export type electionsCreateManyAdministradorInput = {
    id_election?: number
    nombre_election: string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado_election: string
  }

  export type electionsUpdateWithoutAdministradorInput = {
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
  }

  export type electionsUncheckedUpdateWithoutAdministradorInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
  }

  export type electionsUncheckedUpdateManyWithoutAdministradorInput = {
    id_election?: IntFieldUpdateOperationsInput | number
    nombre_election?: StringFieldUpdateOperationsInput | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado_election?: StringFieldUpdateOperationsInput | string
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