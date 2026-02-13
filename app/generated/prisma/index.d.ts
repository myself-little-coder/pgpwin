
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OtpRecord
 * 
 */
export type OtpRecord = $Result.DefaultSelection<Prisma.$OtpRecordPayload>
/**
 * Model FormSubmissionRecord
 * 
 */
export type FormSubmissionRecord = $Result.DefaultSelection<Prisma.$FormSubmissionRecordPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model GameTransaction
 * 
 */
export type GameTransaction = $Result.DefaultSelection<Prisma.$GameTransactionPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model BonusList
 * 
 */
export type BonusList = $Result.DefaultSelection<Prisma.$BonusListPayload>
/**
 * Model CommissionList
 * 
 */
export type CommissionList = $Result.DefaultSelection<Prisma.$CommissionListPayload>
/**
 * Model LuckySpinLog
 * 
 */
export type LuckySpinLog = $Result.DefaultSelection<Prisma.$LuckySpinLogPayload>
/**
 * Model OfferClaimLog
 * 
 */
export type OfferClaimLog = $Result.DefaultSelection<Prisma.$OfferClaimLogPayload>
/**
 * Model AdminUser
 * 
 */
export type AdminUser = $Result.DefaultSelection<Prisma.$AdminUserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TransactionStatus: {
  pending: 'pending',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]


export const TransactionType: {
  deposit: 'deposit',
  withdraw: 'withdraw',
  bonus: 'bonus',
  commission: 'commission',
  salary: 'salary'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const OfferCode: {
  DAILY_LUCKY_SPIN: 'DAILY_LUCKY_SPIN',
  ONE_TIME_REFER_BONUS: 'ONE_TIME_REFER_BONUS'
};

export type OfferCode = (typeof OfferCode)[keyof typeof OfferCode]


export const PositionEnum: {
  admin: 'admin',
  sub_admin: 'sub_admin'
};

export type PositionEnum = (typeof PositionEnum)[keyof typeof PositionEnum]

}

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type OfferCode = $Enums.OfferCode

export const OfferCode: typeof $Enums.OfferCode

export type PositionEnum = $Enums.PositionEnum

export const PositionEnum: typeof $Enums.PositionEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otpRecord`: Exposes CRUD operations for the **OtpRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpRecords
    * const otpRecords = await prisma.otpRecord.findMany()
    * ```
    */
  get otpRecord(): Prisma.OtpRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formSubmissionRecord`: Exposes CRUD operations for the **FormSubmissionRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormSubmissionRecords
    * const formSubmissionRecords = await prisma.formSubmissionRecord.findMany()
    * ```
    */
  get formSubmissionRecord(): Prisma.FormSubmissionRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameTransaction`: Exposes CRUD operations for the **GameTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameTransactions
    * const gameTransactions = await prisma.gameTransaction.findMany()
    * ```
    */
  get gameTransaction(): Prisma.GameTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bonusList`: Exposes CRUD operations for the **BonusList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BonusLists
    * const bonusLists = await prisma.bonusList.findMany()
    * ```
    */
  get bonusList(): Prisma.BonusListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commissionList`: Exposes CRUD operations for the **CommissionList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommissionLists
    * const commissionLists = await prisma.commissionList.findMany()
    * ```
    */
  get commissionList(): Prisma.CommissionListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.luckySpinLog`: Exposes CRUD operations for the **LuckySpinLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LuckySpinLogs
    * const luckySpinLogs = await prisma.luckySpinLog.findMany()
    * ```
    */
  get luckySpinLog(): Prisma.LuckySpinLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offerClaimLog`: Exposes CRUD operations for the **OfferClaimLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OfferClaimLogs
    * const offerClaimLogs = await prisma.offerClaimLog.findMany()
    * ```
    */
  get offerClaimLog(): Prisma.OfferClaimLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adminUser`: Exposes CRUD operations for the **AdminUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdminUsers
    * const adminUsers = await prisma.adminUser.findMany()
    * ```
    */
  get adminUser(): Prisma.AdminUserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    OtpRecord: 'OtpRecord',
    FormSubmissionRecord: 'FormSubmissionRecord',
    Transaction: 'Transaction',
    GameTransaction: 'GameTransaction',
    Message: 'Message',
    Voucher: 'Voucher',
    BonusList: 'BonusList',
    CommissionList: 'CommissionList',
    LuckySpinLog: 'LuckySpinLog',
    OfferClaimLog: 'OfferClaimLog',
    AdminUser: 'AdminUser'
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
      modelProps: "user" | "otpRecord" | "formSubmissionRecord" | "transaction" | "gameTransaction" | "message" | "voucher" | "bonusList" | "commissionList" | "luckySpinLog" | "offerClaimLog" | "adminUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      OtpRecord: {
        payload: Prisma.$OtpRecordPayload<ExtArgs>
        fields: Prisma.OtpRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          findFirst: {
            args: Prisma.OtpRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          findMany: {
            args: Prisma.OtpRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>[]
          }
          create: {
            args: Prisma.OtpRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          createMany: {
            args: Prisma.OtpRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>[]
          }
          delete: {
            args: Prisma.OtpRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          update: {
            args: Prisma.OtpRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          deleteMany: {
            args: Prisma.OtpRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>[]
          }
          upsert: {
            args: Prisma.OtpRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpRecordPayload>
          }
          aggregate: {
            args: Prisma.OtpRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpRecord>
          }
          groupBy: {
            args: Prisma.OtpRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpRecordCountArgs<ExtArgs>
            result: $Utils.Optional<OtpRecordCountAggregateOutputType> | number
          }
        }
      }
      FormSubmissionRecord: {
        payload: Prisma.$FormSubmissionRecordPayload<ExtArgs>
        fields: Prisma.FormSubmissionRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormSubmissionRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormSubmissionRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload>
          }
          findFirst: {
            args: Prisma.FormSubmissionRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormSubmissionRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload>
          }
          findMany: {
            args: Prisma.FormSubmissionRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload>[]
          }
          create: {
            args: Prisma.FormSubmissionRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload>
          }
          createMany: {
            args: Prisma.FormSubmissionRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormSubmissionRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload>[]
          }
          delete: {
            args: Prisma.FormSubmissionRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload>
          }
          update: {
            args: Prisma.FormSubmissionRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload>
          }
          deleteMany: {
            args: Prisma.FormSubmissionRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormSubmissionRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormSubmissionRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload>[]
          }
          upsert: {
            args: Prisma.FormSubmissionRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormSubmissionRecordPayload>
          }
          aggregate: {
            args: Prisma.FormSubmissionRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormSubmissionRecord>
          }
          groupBy: {
            args: Prisma.FormSubmissionRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormSubmissionRecordCountArgs<ExtArgs>
            result: $Utils.Optional<FormSubmissionRecordCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      GameTransaction: {
        payload: Prisma.$GameTransactionPayload<ExtArgs>
        fields: Prisma.GameTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          findFirst: {
            args: Prisma.GameTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          findMany: {
            args: Prisma.GameTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>[]
          }
          create: {
            args: Prisma.GameTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          createMany: {
            args: Prisma.GameTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>[]
          }
          delete: {
            args: Prisma.GameTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          update: {
            args: Prisma.GameTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          deleteMany: {
            args: Prisma.GameTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>[]
          }
          upsert: {
            args: Prisma.GameTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameTransactionPayload>
          }
          aggregate: {
            args: Prisma.GameTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameTransaction>
          }
          groupBy: {
            args: Prisma.GameTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<GameTransactionCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      BonusList: {
        payload: Prisma.$BonusListPayload<ExtArgs>
        fields: Prisma.BonusListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BonusListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BonusListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload>
          }
          findFirst: {
            args: Prisma.BonusListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BonusListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload>
          }
          findMany: {
            args: Prisma.BonusListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload>[]
          }
          create: {
            args: Prisma.BonusListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload>
          }
          createMany: {
            args: Prisma.BonusListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BonusListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload>[]
          }
          delete: {
            args: Prisma.BonusListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload>
          }
          update: {
            args: Prisma.BonusListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload>
          }
          deleteMany: {
            args: Prisma.BonusListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BonusListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BonusListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload>[]
          }
          upsert: {
            args: Prisma.BonusListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusListPayload>
          }
          aggregate: {
            args: Prisma.BonusListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBonusList>
          }
          groupBy: {
            args: Prisma.BonusListGroupByArgs<ExtArgs>
            result: $Utils.Optional<BonusListGroupByOutputType>[]
          }
          count: {
            args: Prisma.BonusListCountArgs<ExtArgs>
            result: $Utils.Optional<BonusListCountAggregateOutputType> | number
          }
        }
      }
      CommissionList: {
        payload: Prisma.$CommissionListPayload<ExtArgs>
        fields: Prisma.CommissionListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommissionListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommissionListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload>
          }
          findFirst: {
            args: Prisma.CommissionListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommissionListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload>
          }
          findMany: {
            args: Prisma.CommissionListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload>[]
          }
          create: {
            args: Prisma.CommissionListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload>
          }
          createMany: {
            args: Prisma.CommissionListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommissionListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload>[]
          }
          delete: {
            args: Prisma.CommissionListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload>
          }
          update: {
            args: Prisma.CommissionListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload>
          }
          deleteMany: {
            args: Prisma.CommissionListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommissionListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommissionListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload>[]
          }
          upsert: {
            args: Prisma.CommissionListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionListPayload>
          }
          aggregate: {
            args: Prisma.CommissionListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommissionList>
          }
          groupBy: {
            args: Prisma.CommissionListGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommissionListGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommissionListCountArgs<ExtArgs>
            result: $Utils.Optional<CommissionListCountAggregateOutputType> | number
          }
        }
      }
      LuckySpinLog: {
        payload: Prisma.$LuckySpinLogPayload<ExtArgs>
        fields: Prisma.LuckySpinLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LuckySpinLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LuckySpinLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload>
          }
          findFirst: {
            args: Prisma.LuckySpinLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LuckySpinLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload>
          }
          findMany: {
            args: Prisma.LuckySpinLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload>[]
          }
          create: {
            args: Prisma.LuckySpinLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload>
          }
          createMany: {
            args: Prisma.LuckySpinLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LuckySpinLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload>[]
          }
          delete: {
            args: Prisma.LuckySpinLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload>
          }
          update: {
            args: Prisma.LuckySpinLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload>
          }
          deleteMany: {
            args: Prisma.LuckySpinLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LuckySpinLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LuckySpinLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload>[]
          }
          upsert: {
            args: Prisma.LuckySpinLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LuckySpinLogPayload>
          }
          aggregate: {
            args: Prisma.LuckySpinLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLuckySpinLog>
          }
          groupBy: {
            args: Prisma.LuckySpinLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LuckySpinLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LuckySpinLogCountArgs<ExtArgs>
            result: $Utils.Optional<LuckySpinLogCountAggregateOutputType> | number
          }
        }
      }
      OfferClaimLog: {
        payload: Prisma.$OfferClaimLogPayload<ExtArgs>
        fields: Prisma.OfferClaimLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferClaimLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferClaimLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload>
          }
          findFirst: {
            args: Prisma.OfferClaimLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferClaimLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload>
          }
          findMany: {
            args: Prisma.OfferClaimLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload>[]
          }
          create: {
            args: Prisma.OfferClaimLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload>
          }
          createMany: {
            args: Prisma.OfferClaimLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferClaimLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload>[]
          }
          delete: {
            args: Prisma.OfferClaimLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload>
          }
          update: {
            args: Prisma.OfferClaimLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload>
          }
          deleteMany: {
            args: Prisma.OfferClaimLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferClaimLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferClaimLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload>[]
          }
          upsert: {
            args: Prisma.OfferClaimLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferClaimLogPayload>
          }
          aggregate: {
            args: Prisma.OfferClaimLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOfferClaimLog>
          }
          groupBy: {
            args: Prisma.OfferClaimLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferClaimLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferClaimLogCountArgs<ExtArgs>
            result: $Utils.Optional<OfferClaimLogCountAggregateOutputType> | number
          }
        }
      }
      AdminUser: {
        payload: Prisma.$AdminUserPayload<ExtArgs>
        fields: Prisma.AdminUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findFirst: {
            args: Prisma.AdminUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          findMany: {
            args: Prisma.AdminUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          create: {
            args: Prisma.AdminUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          createMany: {
            args: Prisma.AdminUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          delete: {
            args: Prisma.AdminUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          update: {
            args: Prisma.AdminUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          deleteMany: {
            args: Prisma.AdminUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>[]
          }
          upsert: {
            args: Prisma.AdminUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminUserPayload>
          }
          aggregate: {
            args: Prisma.AdminUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdminUser>
          }
          groupBy: {
            args: Prisma.AdminUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminUserCountArgs<ExtArgs>
            result: $Utils.Optional<AdminUserCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    otpRecord?: OtpRecordOmit
    formSubmissionRecord?: FormSubmissionRecordOmit
    transaction?: TransactionOmit
    gameTransaction?: GameTransactionOmit
    message?: MessageOmit
    voucher?: VoucherOmit
    bonusList?: BonusListOmit
    commissionList?: CommissionListOmit
    luckySpinLog?: LuckySpinLogOmit
    offerClaimLog?: OfferClaimLogOmit
    adminUser?: AdminUserOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    game_transactions: number
    transactions: number
    otp_records: number
    vouchers: number
    lucky_spin_logs: number
    offer_claim_logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_transactions?: boolean | UserCountOutputTypeCountGame_transactionsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    otp_records?: boolean | UserCountOutputTypeCountOtp_recordsArgs
    vouchers?: boolean | UserCountOutputTypeCountVouchersArgs
    lucky_spin_logs?: boolean | UserCountOutputTypeCountLucky_spin_logsArgs
    offer_claim_logs?: boolean | UserCountOutputTypeCountOffer_claim_logsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGame_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtp_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLucky_spin_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LuckySpinLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOffer_claim_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferClaimLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    lucky_spin: number | null
    balance: Decimal | null
    turn_over: Decimal | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    lucky_spin: number | null
    balance: Decimal | null
    turn_over: Decimal | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    status: string | null
    phone_number: string | null
    e_wallet_number: string | null
    name_in_wallet: string | null
    user_code: string | null
    recovery_code: string | null
    two_fa_secret: string | null
    is_2fa_verified: boolean | null
    password: string | null
    fp_id: string | null
    ip: string | null
    lucky_spin: number | null
    balance: Decimal | null
    turn_over: Decimal | null
    invited_by: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    status: string | null
    phone_number: string | null
    e_wallet_number: string | null
    name_in_wallet: string | null
    user_code: string | null
    recovery_code: string | null
    two_fa_secret: string | null
    is_2fa_verified: boolean | null
    password: string | null
    fp_id: string | null
    ip: string | null
    lucky_spin: number | null
    balance: Decimal | null
    turn_over: Decimal | null
    invited_by: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    status: number
    phone_number: number
    e_wallet_number: number
    name_in_wallet: number
    user_code: number
    recovery_code: number
    two_fa_secret: number
    is_2fa_verified: number
    password: number
    fp_id: number
    ip: number
    lucky_spin: number
    balance: number
    turn_over: number
    invited_by: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    lucky_spin?: true
    balance?: true
    turn_over?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    lucky_spin?: true
    balance?: true
    turn_over?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    status?: true
    phone_number?: true
    e_wallet_number?: true
    name_in_wallet?: true
    user_code?: true
    recovery_code?: true
    two_fa_secret?: true
    is_2fa_verified?: true
    password?: true
    fp_id?: true
    ip?: true
    lucky_spin?: true
    balance?: true
    turn_over?: true
    invited_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    status?: true
    phone_number?: true
    e_wallet_number?: true
    name_in_wallet?: true
    user_code?: true
    recovery_code?: true
    two_fa_secret?: true
    is_2fa_verified?: true
    password?: true
    fp_id?: true
    ip?: true
    lucky_spin?: true
    balance?: true
    turn_over?: true
    invited_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    status?: true
    phone_number?: true
    e_wallet_number?: true
    name_in_wallet?: true
    user_code?: true
    recovery_code?: true
    two_fa_secret?: true
    is_2fa_verified?: true
    password?: true
    fp_id?: true
    ip?: true
    lucky_spin?: true
    balance?: true
    turn_over?: true
    invited_by?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    status: string
    phone_number: string
    e_wallet_number: string | null
    name_in_wallet: string | null
    user_code: string | null
    recovery_code: string | null
    two_fa_secret: string | null
    is_2fa_verified: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin: number
    balance: Decimal
    turn_over: Decimal
    invited_by: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    phone_number?: boolean
    e_wallet_number?: boolean
    name_in_wallet?: boolean
    user_code?: boolean
    recovery_code?: boolean
    two_fa_secret?: boolean
    is_2fa_verified?: boolean
    password?: boolean
    fp_id?: boolean
    ip?: boolean
    lucky_spin?: boolean
    balance?: boolean
    turn_over?: boolean
    invited_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    game_transactions?: boolean | User$game_transactionsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    otp_records?: boolean | User$otp_recordsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    lucky_spin_logs?: boolean | User$lucky_spin_logsArgs<ExtArgs>
    offer_claim_logs?: boolean | User$offer_claim_logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    phone_number?: boolean
    e_wallet_number?: boolean
    name_in_wallet?: boolean
    user_code?: boolean
    recovery_code?: boolean
    two_fa_secret?: boolean
    is_2fa_verified?: boolean
    password?: boolean
    fp_id?: boolean
    ip?: boolean
    lucky_spin?: boolean
    balance?: boolean
    turn_over?: boolean
    invited_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    phone_number?: boolean
    e_wallet_number?: boolean
    name_in_wallet?: boolean
    user_code?: boolean
    recovery_code?: boolean
    two_fa_secret?: boolean
    is_2fa_verified?: boolean
    password?: boolean
    fp_id?: boolean
    ip?: boolean
    lucky_spin?: boolean
    balance?: boolean
    turn_over?: boolean
    invited_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    status?: boolean
    phone_number?: boolean
    e_wallet_number?: boolean
    name_in_wallet?: boolean
    user_code?: boolean
    recovery_code?: boolean
    two_fa_secret?: boolean
    is_2fa_verified?: boolean
    password?: boolean
    fp_id?: boolean
    ip?: boolean
    lucky_spin?: boolean
    balance?: boolean
    turn_over?: boolean
    invited_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "phone_number" | "e_wallet_number" | "name_in_wallet" | "user_code" | "recovery_code" | "two_fa_secret" | "is_2fa_verified" | "password" | "fp_id" | "ip" | "lucky_spin" | "balance" | "turn_over" | "invited_by" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    game_transactions?: boolean | User$game_transactionsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    otp_records?: boolean | User$otp_recordsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    lucky_spin_logs?: boolean | User$lucky_spin_logsArgs<ExtArgs>
    offer_claim_logs?: boolean | User$offer_claim_logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      game_transactions: Prisma.$GameTransactionPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      otp_records: Prisma.$OtpRecordPayload<ExtArgs>[]
      vouchers: Prisma.$VoucherPayload<ExtArgs>[]
      lucky_spin_logs: Prisma.$LuckySpinLogPayload<ExtArgs>[]
      offer_claim_logs: Prisma.$OfferClaimLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      phone_number: string
      e_wallet_number: string | null
      name_in_wallet: string | null
      user_code: string | null
      recovery_code: string | null
      two_fa_secret: string | null
      is_2fa_verified: boolean
      password: string
      fp_id: string
      ip: string
      lucky_spin: number
      balance: Prisma.Decimal
      turn_over: Prisma.Decimal
      invited_by: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    game_transactions<T extends User$game_transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$game_transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otp_records<T extends User$otp_recordsArgs<ExtArgs> = {}>(args?: Subset<T, User$otp_recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchers<T extends User$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, User$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lucky_spin_logs<T extends User$lucky_spin_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$lucky_spin_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    offer_claim_logs<T extends User$offer_claim_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$offer_claim_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly status: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly e_wallet_number: FieldRef<"User", 'String'>
    readonly name_in_wallet: FieldRef<"User", 'String'>
    readonly user_code: FieldRef<"User", 'String'>
    readonly recovery_code: FieldRef<"User", 'String'>
    readonly two_fa_secret: FieldRef<"User", 'String'>
    readonly is_2fa_verified: FieldRef<"User", 'Boolean'>
    readonly password: FieldRef<"User", 'String'>
    readonly fp_id: FieldRef<"User", 'String'>
    readonly ip: FieldRef<"User", 'String'>
    readonly lucky_spin: FieldRef<"User", 'Int'>
    readonly balance: FieldRef<"User", 'Decimal'>
    readonly turn_over: FieldRef<"User", 'Decimal'>
    readonly invited_by: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.game_transactions
   */
  export type User$game_transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    where?: GameTransactionWhereInput
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    cursor?: GameTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameTransactionScalarFieldEnum | GameTransactionScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.otp_records
   */
  export type User$otp_recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    where?: OtpRecordWhereInput
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    cursor?: OtpRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpRecordScalarFieldEnum | OtpRecordScalarFieldEnum[]
  }

  /**
   * User.vouchers
   */
  export type User$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * User.lucky_spin_logs
   */
  export type User$lucky_spin_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    where?: LuckySpinLogWhereInput
    orderBy?: LuckySpinLogOrderByWithRelationInput | LuckySpinLogOrderByWithRelationInput[]
    cursor?: LuckySpinLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LuckySpinLogScalarFieldEnum | LuckySpinLogScalarFieldEnum[]
  }

  /**
   * User.offer_claim_logs
   */
  export type User$offer_claim_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    where?: OfferClaimLogWhereInput
    orderBy?: OfferClaimLogOrderByWithRelationInput | OfferClaimLogOrderByWithRelationInput[]
    cursor?: OfferClaimLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferClaimLogScalarFieldEnum | OfferClaimLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OtpRecord
   */

  export type AggregateOtpRecord = {
    _count: OtpRecordCountAggregateOutputType | null
    _avg: OtpRecordAvgAggregateOutputType | null
    _sum: OtpRecordSumAggregateOutputType | null
    _min: OtpRecordMinAggregateOutputType | null
    _max: OtpRecordMaxAggregateOutputType | null
  }

  export type OtpRecordAvgAggregateOutputType = {
    id: number | null
  }

  export type OtpRecordSumAggregateOutputType = {
    id: number | null
  }

  export type OtpRecordMinAggregateOutputType = {
    id: number | null
    phone: string | null
    otp: string | null
    fingerprint_id: string | null
    used: boolean | null
    createdAt: Date | null
  }

  export type OtpRecordMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    otp: string | null
    fingerprint_id: string | null
    used: boolean | null
    createdAt: Date | null
  }

  export type OtpRecordCountAggregateOutputType = {
    id: number
    phone: number
    otp: number
    fingerprint_id: number
    used: number
    createdAt: number
    _all: number
  }


  export type OtpRecordAvgAggregateInputType = {
    id?: true
  }

  export type OtpRecordSumAggregateInputType = {
    id?: true
  }

  export type OtpRecordMinAggregateInputType = {
    id?: true
    phone?: true
    otp?: true
    fingerprint_id?: true
    used?: true
    createdAt?: true
  }

  export type OtpRecordMaxAggregateInputType = {
    id?: true
    phone?: true
    otp?: true
    fingerprint_id?: true
    used?: true
    createdAt?: true
  }

  export type OtpRecordCountAggregateInputType = {
    id?: true
    phone?: true
    otp?: true
    fingerprint_id?: true
    used?: true
    createdAt?: true
    _all?: true
  }

  export type OtpRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpRecord to aggregate.
     */
    where?: OtpRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpRecords to fetch.
     */
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OtpRecords
    **/
    _count?: true | OtpRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpRecordMaxAggregateInputType
  }

  export type GetOtpRecordAggregateType<T extends OtpRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpRecord[P]>
      : GetScalarType<T[P], AggregateOtpRecord[P]>
  }




  export type OtpRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpRecordWhereInput
    orderBy?: OtpRecordOrderByWithAggregationInput | OtpRecordOrderByWithAggregationInput[]
    by: OtpRecordScalarFieldEnum[] | OtpRecordScalarFieldEnum
    having?: OtpRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpRecordCountAggregateInputType | true
    _avg?: OtpRecordAvgAggregateInputType
    _sum?: OtpRecordSumAggregateInputType
    _min?: OtpRecordMinAggregateInputType
    _max?: OtpRecordMaxAggregateInputType
  }

  export type OtpRecordGroupByOutputType = {
    id: number
    phone: string
    otp: string
    fingerprint_id: string | null
    used: boolean
    createdAt: Date
    _count: OtpRecordCountAggregateOutputType | null
    _avg: OtpRecordAvgAggregateOutputType | null
    _sum: OtpRecordSumAggregateOutputType | null
    _min: OtpRecordMinAggregateOutputType | null
    _max: OtpRecordMaxAggregateOutputType | null
  }

  type GetOtpRecordGroupByPayload<T extends OtpRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpRecordGroupByOutputType[P]>
            : GetScalarType<T[P], OtpRecordGroupByOutputType[P]>
        }
      >
    >


  export type OtpRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otp?: boolean
    fingerprint_id?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpRecord"]>

  export type OtpRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otp?: boolean
    fingerprint_id?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpRecord"]>

  export type OtpRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otp?: boolean
    fingerprint_id?: boolean
    used?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpRecord"]>

  export type OtpRecordSelectScalar = {
    id?: boolean
    phone?: boolean
    otp?: boolean
    fingerprint_id?: boolean
    used?: boolean
    createdAt?: boolean
  }

  export type OtpRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "otp" | "fingerprint_id" | "used" | "createdAt", ExtArgs["result"]["otpRecord"]>
  export type OtpRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OtpRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OtpRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone: string
      otp: string
      fingerprint_id: string | null
      used: boolean
      createdAt: Date
    }, ExtArgs["result"]["otpRecord"]>
    composites: {}
  }

  type OtpRecordGetPayload<S extends boolean | null | undefined | OtpRecordDefaultArgs> = $Result.GetResult<Prisma.$OtpRecordPayload, S>

  type OtpRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpRecordCountAggregateInputType | true
    }

  export interface OtpRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OtpRecord'], meta: { name: 'OtpRecord' } }
    /**
     * Find zero or one OtpRecord that matches the filter.
     * @param {OtpRecordFindUniqueArgs} args - Arguments to find a OtpRecord
     * @example
     * // Get one OtpRecord
     * const otpRecord = await prisma.otpRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpRecordFindUniqueArgs>(args: SelectSubset<T, OtpRecordFindUniqueArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpRecordFindUniqueOrThrowArgs} args - Arguments to find a OtpRecord
     * @example
     * // Get one OtpRecord
     * const otpRecord = await prisma.otpRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordFindFirstArgs} args - Arguments to find a OtpRecord
     * @example
     * // Get one OtpRecord
     * const otpRecord = await prisma.otpRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpRecordFindFirstArgs>(args?: SelectSubset<T, OtpRecordFindFirstArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordFindFirstOrThrowArgs} args - Arguments to find a OtpRecord
     * @example
     * // Get one OtpRecord
     * const otpRecord = await prisma.otpRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpRecords
     * const otpRecords = await prisma.otpRecord.findMany()
     * 
     * // Get first 10 OtpRecords
     * const otpRecords = await prisma.otpRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpRecordWithIdOnly = await prisma.otpRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpRecordFindManyArgs>(args?: SelectSubset<T, OtpRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpRecord.
     * @param {OtpRecordCreateArgs} args - Arguments to create a OtpRecord.
     * @example
     * // Create one OtpRecord
     * const OtpRecord = await prisma.otpRecord.create({
     *   data: {
     *     // ... data to create a OtpRecord
     *   }
     * })
     * 
     */
    create<T extends OtpRecordCreateArgs>(args: SelectSubset<T, OtpRecordCreateArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpRecords.
     * @param {OtpRecordCreateManyArgs} args - Arguments to create many OtpRecords.
     * @example
     * // Create many OtpRecords
     * const otpRecord = await prisma.otpRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpRecordCreateManyArgs>(args?: SelectSubset<T, OtpRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpRecords and returns the data saved in the database.
     * @param {OtpRecordCreateManyAndReturnArgs} args - Arguments to create many OtpRecords.
     * @example
     * // Create many OtpRecords
     * const otpRecord = await prisma.otpRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpRecords and only return the `id`
     * const otpRecordWithIdOnly = await prisma.otpRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpRecord.
     * @param {OtpRecordDeleteArgs} args - Arguments to delete one OtpRecord.
     * @example
     * // Delete one OtpRecord
     * const OtpRecord = await prisma.otpRecord.delete({
     *   where: {
     *     // ... filter to delete one OtpRecord
     *   }
     * })
     * 
     */
    delete<T extends OtpRecordDeleteArgs>(args: SelectSubset<T, OtpRecordDeleteArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpRecord.
     * @param {OtpRecordUpdateArgs} args - Arguments to update one OtpRecord.
     * @example
     * // Update one OtpRecord
     * const otpRecord = await prisma.otpRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpRecordUpdateArgs>(args: SelectSubset<T, OtpRecordUpdateArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpRecords.
     * @param {OtpRecordDeleteManyArgs} args - Arguments to filter OtpRecords to delete.
     * @example
     * // Delete a few OtpRecords
     * const { count } = await prisma.otpRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpRecordDeleteManyArgs>(args?: SelectSubset<T, OtpRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpRecords
     * const otpRecord = await prisma.otpRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpRecordUpdateManyArgs>(args: SelectSubset<T, OtpRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpRecords and returns the data updated in the database.
     * @param {OtpRecordUpdateManyAndReturnArgs} args - Arguments to update many OtpRecords.
     * @example
     * // Update many OtpRecords
     * const otpRecord = await prisma.otpRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpRecords and only return the `id`
     * const otpRecordWithIdOnly = await prisma.otpRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpRecord.
     * @param {OtpRecordUpsertArgs} args - Arguments to update or create a OtpRecord.
     * @example
     * // Update or create a OtpRecord
     * const otpRecord = await prisma.otpRecord.upsert({
     *   create: {
     *     // ... data to create a OtpRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpRecord we want to update
     *   }
     * })
     */
    upsert<T extends OtpRecordUpsertArgs>(args: SelectSubset<T, OtpRecordUpsertArgs<ExtArgs>>): Prisma__OtpRecordClient<$Result.GetResult<Prisma.$OtpRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordCountArgs} args - Arguments to filter OtpRecords to count.
     * @example
     * // Count the number of OtpRecords
     * const count = await prisma.otpRecord.count({
     *   where: {
     *     // ... the filter for the OtpRecords we want to count
     *   }
     * })
    **/
    count<T extends OtpRecordCountArgs>(
      args?: Subset<T, OtpRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpRecordAggregateArgs>(args: Subset<T, OtpRecordAggregateArgs>): Prisma.PrismaPromise<GetOtpRecordAggregateType<T>>

    /**
     * Group by OtpRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpRecordGroupByArgs} args - Group by arguments.
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
      T extends OtpRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpRecordGroupByArgs['orderBy'] }
        : { orderBy?: OtpRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OtpRecord model
   */
  readonly fields: OtpRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OtpRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OtpRecord model
   */
  interface OtpRecordFieldRefs {
    readonly id: FieldRef<"OtpRecord", 'Int'>
    readonly phone: FieldRef<"OtpRecord", 'String'>
    readonly otp: FieldRef<"OtpRecord", 'String'>
    readonly fingerprint_id: FieldRef<"OtpRecord", 'String'>
    readonly used: FieldRef<"OtpRecord", 'Boolean'>
    readonly createdAt: FieldRef<"OtpRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OtpRecord findUnique
   */
  export type OtpRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecord to fetch.
     */
    where: OtpRecordWhereUniqueInput
  }

  /**
   * OtpRecord findUniqueOrThrow
   */
  export type OtpRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecord to fetch.
     */
    where: OtpRecordWhereUniqueInput
  }

  /**
   * OtpRecord findFirst
   */
  export type OtpRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecord to fetch.
     */
    where?: OtpRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpRecords to fetch.
     */
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpRecords.
     */
    cursor?: OtpRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpRecords.
     */
    distinct?: OtpRecordScalarFieldEnum | OtpRecordScalarFieldEnum[]
  }

  /**
   * OtpRecord findFirstOrThrow
   */
  export type OtpRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecord to fetch.
     */
    where?: OtpRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpRecords to fetch.
     */
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OtpRecords.
     */
    cursor?: OtpRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OtpRecords.
     */
    distinct?: OtpRecordScalarFieldEnum | OtpRecordScalarFieldEnum[]
  }

  /**
   * OtpRecord findMany
   */
  export type OtpRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter, which OtpRecords to fetch.
     */
    where?: OtpRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OtpRecords to fetch.
     */
    orderBy?: OtpRecordOrderByWithRelationInput | OtpRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OtpRecords.
     */
    cursor?: OtpRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OtpRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OtpRecords.
     */
    skip?: number
    distinct?: OtpRecordScalarFieldEnum | OtpRecordScalarFieldEnum[]
  }

  /**
   * OtpRecord create
   */
  export type OtpRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a OtpRecord.
     */
    data: XOR<OtpRecordCreateInput, OtpRecordUncheckedCreateInput>
  }

  /**
   * OtpRecord createMany
   */
  export type OtpRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OtpRecords.
     */
    data: OtpRecordCreateManyInput | OtpRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OtpRecord createManyAndReturn
   */
  export type OtpRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * The data used to create many OtpRecords.
     */
    data: OtpRecordCreateManyInput | OtpRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtpRecord update
   */
  export type OtpRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a OtpRecord.
     */
    data: XOR<OtpRecordUpdateInput, OtpRecordUncheckedUpdateInput>
    /**
     * Choose, which OtpRecord to update.
     */
    where: OtpRecordWhereUniqueInput
  }

  /**
   * OtpRecord updateMany
   */
  export type OtpRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OtpRecords.
     */
    data: XOR<OtpRecordUpdateManyMutationInput, OtpRecordUncheckedUpdateManyInput>
    /**
     * Filter which OtpRecords to update
     */
    where?: OtpRecordWhereInput
    /**
     * Limit how many OtpRecords to update.
     */
    limit?: number
  }

  /**
   * OtpRecord updateManyAndReturn
   */
  export type OtpRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * The data used to update OtpRecords.
     */
    data: XOR<OtpRecordUpdateManyMutationInput, OtpRecordUncheckedUpdateManyInput>
    /**
     * Filter which OtpRecords to update
     */
    where?: OtpRecordWhereInput
    /**
     * Limit how many OtpRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OtpRecord upsert
   */
  export type OtpRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the OtpRecord to update in case it exists.
     */
    where: OtpRecordWhereUniqueInput
    /**
     * In case the OtpRecord found by the `where` argument doesn't exist, create a new OtpRecord with this data.
     */
    create: XOR<OtpRecordCreateInput, OtpRecordUncheckedCreateInput>
    /**
     * In case the OtpRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpRecordUpdateInput, OtpRecordUncheckedUpdateInput>
  }

  /**
   * OtpRecord delete
   */
  export type OtpRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
    /**
     * Filter which OtpRecord to delete.
     */
    where: OtpRecordWhereUniqueInput
  }

  /**
   * OtpRecord deleteMany
   */
  export type OtpRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OtpRecords to delete
     */
    where?: OtpRecordWhereInput
    /**
     * Limit how many OtpRecords to delete.
     */
    limit?: number
  }

  /**
   * OtpRecord without action
   */
  export type OtpRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OtpRecord
     */
    select?: OtpRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OtpRecord
     */
    omit?: OtpRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpRecordInclude<ExtArgs> | null
  }


  /**
   * Model FormSubmissionRecord
   */

  export type AggregateFormSubmissionRecord = {
    _count: FormSubmissionRecordCountAggregateOutputType | null
    _avg: FormSubmissionRecordAvgAggregateOutputType | null
    _sum: FormSubmissionRecordSumAggregateOutputType | null
    _min: FormSubmissionRecordMinAggregateOutputType | null
    _max: FormSubmissionRecordMaxAggregateOutputType | null
  }

  export type FormSubmissionRecordAvgAggregateOutputType = {
    id: number | null
  }

  export type FormSubmissionRecordSumAggregateOutputType = {
    id: number | null
  }

  export type FormSubmissionRecordMinAggregateOutputType = {
    id: number | null
    req_route: string | null
    fp_id: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type FormSubmissionRecordMaxAggregateOutputType = {
    id: number | null
    req_route: string | null
    fp_id: string | null
    ip: string | null
    createdAt: Date | null
  }

  export type FormSubmissionRecordCountAggregateOutputType = {
    id: number
    req_route: number
    fp_id: number
    ip: number
    createdAt: number
    _all: number
  }


  export type FormSubmissionRecordAvgAggregateInputType = {
    id?: true
  }

  export type FormSubmissionRecordSumAggregateInputType = {
    id?: true
  }

  export type FormSubmissionRecordMinAggregateInputType = {
    id?: true
    req_route?: true
    fp_id?: true
    ip?: true
    createdAt?: true
  }

  export type FormSubmissionRecordMaxAggregateInputType = {
    id?: true
    req_route?: true
    fp_id?: true
    ip?: true
    createdAt?: true
  }

  export type FormSubmissionRecordCountAggregateInputType = {
    id?: true
    req_route?: true
    fp_id?: true
    ip?: true
    createdAt?: true
    _all?: true
  }

  export type FormSubmissionRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmissionRecord to aggregate.
     */
    where?: FormSubmissionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissionRecords to fetch.
     */
    orderBy?: FormSubmissionRecordOrderByWithRelationInput | FormSubmissionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormSubmissionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormSubmissionRecords
    **/
    _count?: true | FormSubmissionRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormSubmissionRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSubmissionRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormSubmissionRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormSubmissionRecordMaxAggregateInputType
  }

  export type GetFormSubmissionRecordAggregateType<T extends FormSubmissionRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateFormSubmissionRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormSubmissionRecord[P]>
      : GetScalarType<T[P], AggregateFormSubmissionRecord[P]>
  }




  export type FormSubmissionRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormSubmissionRecordWhereInput
    orderBy?: FormSubmissionRecordOrderByWithAggregationInput | FormSubmissionRecordOrderByWithAggregationInput[]
    by: FormSubmissionRecordScalarFieldEnum[] | FormSubmissionRecordScalarFieldEnum
    having?: FormSubmissionRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormSubmissionRecordCountAggregateInputType | true
    _avg?: FormSubmissionRecordAvgAggregateInputType
    _sum?: FormSubmissionRecordSumAggregateInputType
    _min?: FormSubmissionRecordMinAggregateInputType
    _max?: FormSubmissionRecordMaxAggregateInputType
  }

  export type FormSubmissionRecordGroupByOutputType = {
    id: number
    req_route: string
    fp_id: string
    ip: string
    createdAt: Date
    _count: FormSubmissionRecordCountAggregateOutputType | null
    _avg: FormSubmissionRecordAvgAggregateOutputType | null
    _sum: FormSubmissionRecordSumAggregateOutputType | null
    _min: FormSubmissionRecordMinAggregateOutputType | null
    _max: FormSubmissionRecordMaxAggregateOutputType | null
  }

  type GetFormSubmissionRecordGroupByPayload<T extends FormSubmissionRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormSubmissionRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormSubmissionRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormSubmissionRecordGroupByOutputType[P]>
            : GetScalarType<T[P], FormSubmissionRecordGroupByOutputType[P]>
        }
      >
    >


  export type FormSubmissionRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    req_route?: boolean
    fp_id?: boolean
    ip?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formSubmissionRecord"]>

  export type FormSubmissionRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    req_route?: boolean
    fp_id?: boolean
    ip?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formSubmissionRecord"]>

  export type FormSubmissionRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    req_route?: boolean
    fp_id?: boolean
    ip?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["formSubmissionRecord"]>

  export type FormSubmissionRecordSelectScalar = {
    id?: boolean
    req_route?: boolean
    fp_id?: boolean
    ip?: boolean
    createdAt?: boolean
  }

  export type FormSubmissionRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "req_route" | "fp_id" | "ip" | "createdAt", ExtArgs["result"]["formSubmissionRecord"]>

  export type $FormSubmissionRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormSubmissionRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      req_route: string
      fp_id: string
      ip: string
      createdAt: Date
    }, ExtArgs["result"]["formSubmissionRecord"]>
    composites: {}
  }

  type FormSubmissionRecordGetPayload<S extends boolean | null | undefined | FormSubmissionRecordDefaultArgs> = $Result.GetResult<Prisma.$FormSubmissionRecordPayload, S>

  type FormSubmissionRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormSubmissionRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormSubmissionRecordCountAggregateInputType | true
    }

  export interface FormSubmissionRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormSubmissionRecord'], meta: { name: 'FormSubmissionRecord' } }
    /**
     * Find zero or one FormSubmissionRecord that matches the filter.
     * @param {FormSubmissionRecordFindUniqueArgs} args - Arguments to find a FormSubmissionRecord
     * @example
     * // Get one FormSubmissionRecord
     * const formSubmissionRecord = await prisma.formSubmissionRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormSubmissionRecordFindUniqueArgs>(args: SelectSubset<T, FormSubmissionRecordFindUniqueArgs<ExtArgs>>): Prisma__FormSubmissionRecordClient<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormSubmissionRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormSubmissionRecordFindUniqueOrThrowArgs} args - Arguments to find a FormSubmissionRecord
     * @example
     * // Get one FormSubmissionRecord
     * const formSubmissionRecord = await prisma.formSubmissionRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormSubmissionRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, FormSubmissionRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionRecordClient<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmissionRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionRecordFindFirstArgs} args - Arguments to find a FormSubmissionRecord
     * @example
     * // Get one FormSubmissionRecord
     * const formSubmissionRecord = await prisma.formSubmissionRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormSubmissionRecordFindFirstArgs>(args?: SelectSubset<T, FormSubmissionRecordFindFirstArgs<ExtArgs>>): Prisma__FormSubmissionRecordClient<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormSubmissionRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionRecordFindFirstOrThrowArgs} args - Arguments to find a FormSubmissionRecord
     * @example
     * // Get one FormSubmissionRecord
     * const formSubmissionRecord = await prisma.formSubmissionRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormSubmissionRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, FormSubmissionRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormSubmissionRecordClient<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormSubmissionRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormSubmissionRecords
     * const formSubmissionRecords = await prisma.formSubmissionRecord.findMany()
     * 
     * // Get first 10 FormSubmissionRecords
     * const formSubmissionRecords = await prisma.formSubmissionRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formSubmissionRecordWithIdOnly = await prisma.formSubmissionRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormSubmissionRecordFindManyArgs>(args?: SelectSubset<T, FormSubmissionRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormSubmissionRecord.
     * @param {FormSubmissionRecordCreateArgs} args - Arguments to create a FormSubmissionRecord.
     * @example
     * // Create one FormSubmissionRecord
     * const FormSubmissionRecord = await prisma.formSubmissionRecord.create({
     *   data: {
     *     // ... data to create a FormSubmissionRecord
     *   }
     * })
     * 
     */
    create<T extends FormSubmissionRecordCreateArgs>(args: SelectSubset<T, FormSubmissionRecordCreateArgs<ExtArgs>>): Prisma__FormSubmissionRecordClient<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormSubmissionRecords.
     * @param {FormSubmissionRecordCreateManyArgs} args - Arguments to create many FormSubmissionRecords.
     * @example
     * // Create many FormSubmissionRecords
     * const formSubmissionRecord = await prisma.formSubmissionRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormSubmissionRecordCreateManyArgs>(args?: SelectSubset<T, FormSubmissionRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormSubmissionRecords and returns the data saved in the database.
     * @param {FormSubmissionRecordCreateManyAndReturnArgs} args - Arguments to create many FormSubmissionRecords.
     * @example
     * // Create many FormSubmissionRecords
     * const formSubmissionRecord = await prisma.formSubmissionRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormSubmissionRecords and only return the `id`
     * const formSubmissionRecordWithIdOnly = await prisma.formSubmissionRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormSubmissionRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, FormSubmissionRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormSubmissionRecord.
     * @param {FormSubmissionRecordDeleteArgs} args - Arguments to delete one FormSubmissionRecord.
     * @example
     * // Delete one FormSubmissionRecord
     * const FormSubmissionRecord = await prisma.formSubmissionRecord.delete({
     *   where: {
     *     // ... filter to delete one FormSubmissionRecord
     *   }
     * })
     * 
     */
    delete<T extends FormSubmissionRecordDeleteArgs>(args: SelectSubset<T, FormSubmissionRecordDeleteArgs<ExtArgs>>): Prisma__FormSubmissionRecordClient<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormSubmissionRecord.
     * @param {FormSubmissionRecordUpdateArgs} args - Arguments to update one FormSubmissionRecord.
     * @example
     * // Update one FormSubmissionRecord
     * const formSubmissionRecord = await prisma.formSubmissionRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormSubmissionRecordUpdateArgs>(args: SelectSubset<T, FormSubmissionRecordUpdateArgs<ExtArgs>>): Prisma__FormSubmissionRecordClient<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormSubmissionRecords.
     * @param {FormSubmissionRecordDeleteManyArgs} args - Arguments to filter FormSubmissionRecords to delete.
     * @example
     * // Delete a few FormSubmissionRecords
     * const { count } = await prisma.formSubmissionRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormSubmissionRecordDeleteManyArgs>(args?: SelectSubset<T, FormSubmissionRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormSubmissionRecords
     * const formSubmissionRecord = await prisma.formSubmissionRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormSubmissionRecordUpdateManyArgs>(args: SelectSubset<T, FormSubmissionRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormSubmissionRecords and returns the data updated in the database.
     * @param {FormSubmissionRecordUpdateManyAndReturnArgs} args - Arguments to update many FormSubmissionRecords.
     * @example
     * // Update many FormSubmissionRecords
     * const formSubmissionRecord = await prisma.formSubmissionRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormSubmissionRecords and only return the `id`
     * const formSubmissionRecordWithIdOnly = await prisma.formSubmissionRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends FormSubmissionRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, FormSubmissionRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormSubmissionRecord.
     * @param {FormSubmissionRecordUpsertArgs} args - Arguments to update or create a FormSubmissionRecord.
     * @example
     * // Update or create a FormSubmissionRecord
     * const formSubmissionRecord = await prisma.formSubmissionRecord.upsert({
     *   create: {
     *     // ... data to create a FormSubmissionRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormSubmissionRecord we want to update
     *   }
     * })
     */
    upsert<T extends FormSubmissionRecordUpsertArgs>(args: SelectSubset<T, FormSubmissionRecordUpsertArgs<ExtArgs>>): Prisma__FormSubmissionRecordClient<$Result.GetResult<Prisma.$FormSubmissionRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormSubmissionRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionRecordCountArgs} args - Arguments to filter FormSubmissionRecords to count.
     * @example
     * // Count the number of FormSubmissionRecords
     * const count = await prisma.formSubmissionRecord.count({
     *   where: {
     *     // ... the filter for the FormSubmissionRecords we want to count
     *   }
     * })
    **/
    count<T extends FormSubmissionRecordCountArgs>(
      args?: Subset<T, FormSubmissionRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormSubmissionRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormSubmissionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FormSubmissionRecordAggregateArgs>(args: Subset<T, FormSubmissionRecordAggregateArgs>): Prisma.PrismaPromise<GetFormSubmissionRecordAggregateType<T>>

    /**
     * Group by FormSubmissionRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormSubmissionRecordGroupByArgs} args - Group by arguments.
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
      T extends FormSubmissionRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormSubmissionRecordGroupByArgs['orderBy'] }
        : { orderBy?: FormSubmissionRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FormSubmissionRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormSubmissionRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormSubmissionRecord model
   */
  readonly fields: FormSubmissionRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormSubmissionRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormSubmissionRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FormSubmissionRecord model
   */
  interface FormSubmissionRecordFieldRefs {
    readonly id: FieldRef<"FormSubmissionRecord", 'Int'>
    readonly req_route: FieldRef<"FormSubmissionRecord", 'String'>
    readonly fp_id: FieldRef<"FormSubmissionRecord", 'String'>
    readonly ip: FieldRef<"FormSubmissionRecord", 'String'>
    readonly createdAt: FieldRef<"FormSubmissionRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormSubmissionRecord findUnique
   */
  export type FormSubmissionRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmissionRecord to fetch.
     */
    where: FormSubmissionRecordWhereUniqueInput
  }

  /**
   * FormSubmissionRecord findUniqueOrThrow
   */
  export type FormSubmissionRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmissionRecord to fetch.
     */
    where: FormSubmissionRecordWhereUniqueInput
  }

  /**
   * FormSubmissionRecord findFirst
   */
  export type FormSubmissionRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmissionRecord to fetch.
     */
    where?: FormSubmissionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissionRecords to fetch.
     */
    orderBy?: FormSubmissionRecordOrderByWithRelationInput | FormSubmissionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissionRecords.
     */
    cursor?: FormSubmissionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissionRecords.
     */
    distinct?: FormSubmissionRecordScalarFieldEnum | FormSubmissionRecordScalarFieldEnum[]
  }

  /**
   * FormSubmissionRecord findFirstOrThrow
   */
  export type FormSubmissionRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmissionRecord to fetch.
     */
    where?: FormSubmissionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissionRecords to fetch.
     */
    orderBy?: FormSubmissionRecordOrderByWithRelationInput | FormSubmissionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormSubmissionRecords.
     */
    cursor?: FormSubmissionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissionRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormSubmissionRecords.
     */
    distinct?: FormSubmissionRecordScalarFieldEnum | FormSubmissionRecordScalarFieldEnum[]
  }

  /**
   * FormSubmissionRecord findMany
   */
  export type FormSubmissionRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * Filter, which FormSubmissionRecords to fetch.
     */
    where?: FormSubmissionRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormSubmissionRecords to fetch.
     */
    orderBy?: FormSubmissionRecordOrderByWithRelationInput | FormSubmissionRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormSubmissionRecords.
     */
    cursor?: FormSubmissionRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormSubmissionRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormSubmissionRecords.
     */
    skip?: number
    distinct?: FormSubmissionRecordScalarFieldEnum | FormSubmissionRecordScalarFieldEnum[]
  }

  /**
   * FormSubmissionRecord create
   */
  export type FormSubmissionRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a FormSubmissionRecord.
     */
    data: XOR<FormSubmissionRecordCreateInput, FormSubmissionRecordUncheckedCreateInput>
  }

  /**
   * FormSubmissionRecord createMany
   */
  export type FormSubmissionRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormSubmissionRecords.
     */
    data: FormSubmissionRecordCreateManyInput | FormSubmissionRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmissionRecord createManyAndReturn
   */
  export type FormSubmissionRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * The data used to create many FormSubmissionRecords.
     */
    data: FormSubmissionRecordCreateManyInput | FormSubmissionRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormSubmissionRecord update
   */
  export type FormSubmissionRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a FormSubmissionRecord.
     */
    data: XOR<FormSubmissionRecordUpdateInput, FormSubmissionRecordUncheckedUpdateInput>
    /**
     * Choose, which FormSubmissionRecord to update.
     */
    where: FormSubmissionRecordWhereUniqueInput
  }

  /**
   * FormSubmissionRecord updateMany
   */
  export type FormSubmissionRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormSubmissionRecords.
     */
    data: XOR<FormSubmissionRecordUpdateManyMutationInput, FormSubmissionRecordUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissionRecords to update
     */
    where?: FormSubmissionRecordWhereInput
    /**
     * Limit how many FormSubmissionRecords to update.
     */
    limit?: number
  }

  /**
   * FormSubmissionRecord updateManyAndReturn
   */
  export type FormSubmissionRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * The data used to update FormSubmissionRecords.
     */
    data: XOR<FormSubmissionRecordUpdateManyMutationInput, FormSubmissionRecordUncheckedUpdateManyInput>
    /**
     * Filter which FormSubmissionRecords to update
     */
    where?: FormSubmissionRecordWhereInput
    /**
     * Limit how many FormSubmissionRecords to update.
     */
    limit?: number
  }

  /**
   * FormSubmissionRecord upsert
   */
  export type FormSubmissionRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the FormSubmissionRecord to update in case it exists.
     */
    where: FormSubmissionRecordWhereUniqueInput
    /**
     * In case the FormSubmissionRecord found by the `where` argument doesn't exist, create a new FormSubmissionRecord with this data.
     */
    create: XOR<FormSubmissionRecordCreateInput, FormSubmissionRecordUncheckedCreateInput>
    /**
     * In case the FormSubmissionRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormSubmissionRecordUpdateInput, FormSubmissionRecordUncheckedUpdateInput>
  }

  /**
   * FormSubmissionRecord delete
   */
  export type FormSubmissionRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
    /**
     * Filter which FormSubmissionRecord to delete.
     */
    where: FormSubmissionRecordWhereUniqueInput
  }

  /**
   * FormSubmissionRecord deleteMany
   */
  export type FormSubmissionRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormSubmissionRecords to delete
     */
    where?: FormSubmissionRecordWhereInput
    /**
     * Limit how many FormSubmissionRecords to delete.
     */
    limit?: number
  }

  /**
   * FormSubmissionRecord without action
   */
  export type FormSubmissionRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormSubmissionRecord
     */
    select?: FormSubmissionRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormSubmissionRecord
     */
    omit?: FormSubmissionRecordOmit<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    user_id: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    user_id: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    trx_id: string | null
    sign: string | null
    status: $Enums.TransactionStatus | null
    user_id: number | null
    method: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    type: $Enums.TransactionType | null
    trx_id: string | null
    sign: string | null
    status: $Enums.TransactionStatus | null
    user_id: number | null
    method: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    amount: number
    type: number
    trx_id: number
    sign: number
    status: number
    user_id: number
    method: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    trx_id?: true
    sign?: true
    status?: true
    user_id?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    trx_id?: true
    sign?: true
    status?: true
    user_id?: true
    method?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    amount?: true
    type?: true
    trx_id?: true
    sign?: true
    status?: true
    user_id?: true
    method?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    amount: Decimal
    type: $Enums.TransactionType
    trx_id: string | null
    sign: string | null
    status: $Enums.TransactionStatus
    user_id: number
    method: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    trx_id?: boolean
    sign?: boolean
    status?: boolean
    user_id?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    trx_id?: boolean
    sign?: boolean
    status?: boolean
    user_id?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    type?: boolean
    trx_id?: boolean
    sign?: boolean
    status?: boolean
    user_id?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    amount?: boolean
    type?: boolean
    trx_id?: boolean
    sign?: boolean
    status?: boolean
    user_id?: boolean
    method?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "type" | "trx_id" | "sign" | "status" | "user_id" | "method" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: Prisma.Decimal
      type: $Enums.TransactionType
      trx_id: string | null
      sign: string | null
      status: $Enums.TransactionStatus
      user_id: number
      method: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly trx_id: FieldRef<"Transaction", 'String'>
    readonly sign: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'TransactionStatus'>
    readonly user_id: FieldRef<"Transaction", 'Int'>
    readonly method: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model GameTransaction
   */

  export type AggregateGameTransaction = {
    _count: GameTransactionCountAggregateOutputType | null
    _avg: GameTransactionAvgAggregateOutputType | null
    _sum: GameTransactionSumAggregateOutputType | null
    _min: GameTransactionMinAggregateOutputType | null
    _max: GameTransactionMaxAggregateOutputType | null
  }

  export type GameTransactionAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    user_id: number | null
  }

  export type GameTransactionSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    user_id: number | null
  }

  export type GameTransactionMinAggregateOutputType = {
    id: number | null
    trans_id: string | null
    type: string | null
    amount: Decimal | null
    game_code: string | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameTransactionMaxAggregateOutputType = {
    id: number | null
    trans_id: string | null
    type: string | null
    amount: Decimal | null
    game_code: string | null
    user_id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameTransactionCountAggregateOutputType = {
    id: number
    trans_id: number
    type: number
    amount: number
    game_code: number
    user_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameTransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type GameTransactionSumAggregateInputType = {
    id?: true
    amount?: true
    user_id?: true
  }

  export type GameTransactionMinAggregateInputType = {
    id?: true
    trans_id?: true
    type?: true
    amount?: true
    game_code?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameTransactionMaxAggregateInputType = {
    id?: true
    trans_id?: true
    type?: true
    amount?: true
    game_code?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameTransactionCountAggregateInputType = {
    id?: true
    trans_id?: true
    type?: true
    amount?: true
    game_code?: true
    user_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTransaction to aggregate.
     */
    where?: GameTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTransactions to fetch.
     */
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameTransactions
    **/
    _count?: true | GameTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameTransactionMaxAggregateInputType
  }

  export type GetGameTransactionAggregateType<T extends GameTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameTransaction[P]>
      : GetScalarType<T[P], AggregateGameTransaction[P]>
  }




  export type GameTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameTransactionWhereInput
    orderBy?: GameTransactionOrderByWithAggregationInput | GameTransactionOrderByWithAggregationInput[]
    by: GameTransactionScalarFieldEnum[] | GameTransactionScalarFieldEnum
    having?: GameTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameTransactionCountAggregateInputType | true
    _avg?: GameTransactionAvgAggregateInputType
    _sum?: GameTransactionSumAggregateInputType
    _min?: GameTransactionMinAggregateInputType
    _max?: GameTransactionMaxAggregateInputType
  }

  export type GameTransactionGroupByOutputType = {
    id: number
    trans_id: string
    type: string
    amount: Decimal
    game_code: string | null
    user_id: number
    createdAt: Date
    updatedAt: Date
    _count: GameTransactionCountAggregateOutputType | null
    _avg: GameTransactionAvgAggregateOutputType | null
    _sum: GameTransactionSumAggregateOutputType | null
    _min: GameTransactionMinAggregateOutputType | null
    _max: GameTransactionMaxAggregateOutputType | null
  }

  type GetGameTransactionGroupByPayload<T extends GameTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], GameTransactionGroupByOutputType[P]>
        }
      >
    >


  export type GameTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trans_id?: boolean
    type?: boolean
    amount?: boolean
    game_code?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameTransaction"]>

  export type GameTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trans_id?: boolean
    type?: boolean
    amount?: boolean
    game_code?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameTransaction"]>

  export type GameTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trans_id?: boolean
    type?: boolean
    amount?: boolean
    game_code?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameTransaction"]>

  export type GameTransactionSelectScalar = {
    id?: boolean
    trans_id?: boolean
    type?: boolean
    amount?: boolean
    game_code?: boolean
    user_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trans_id" | "type" | "amount" | "game_code" | "user_id" | "createdAt" | "updatedAt", ExtArgs["result"]["gameTransaction"]>
  export type GameTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GameTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GameTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trans_id: string
      type: string
      amount: Prisma.Decimal
      game_code: string | null
      user_id: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameTransaction"]>
    composites: {}
  }

  type GameTransactionGetPayload<S extends boolean | null | undefined | GameTransactionDefaultArgs> = $Result.GetResult<Prisma.$GameTransactionPayload, S>

  type GameTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameTransactionCountAggregateInputType | true
    }

  export interface GameTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameTransaction'], meta: { name: 'GameTransaction' } }
    /**
     * Find zero or one GameTransaction that matches the filter.
     * @param {GameTransactionFindUniqueArgs} args - Arguments to find a GameTransaction
     * @example
     * // Get one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameTransactionFindUniqueArgs>(args: SelectSubset<T, GameTransactionFindUniqueArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameTransactionFindUniqueOrThrowArgs} args - Arguments to find a GameTransaction
     * @example
     * // Get one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionFindFirstArgs} args - Arguments to find a GameTransaction
     * @example
     * // Get one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameTransactionFindFirstArgs>(args?: SelectSubset<T, GameTransactionFindFirstArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionFindFirstOrThrowArgs} args - Arguments to find a GameTransaction
     * @example
     * // Get one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameTransactions
     * const gameTransactions = await prisma.gameTransaction.findMany()
     * 
     * // Get first 10 GameTransactions
     * const gameTransactions = await prisma.gameTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameTransactionWithIdOnly = await prisma.gameTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameTransactionFindManyArgs>(args?: SelectSubset<T, GameTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameTransaction.
     * @param {GameTransactionCreateArgs} args - Arguments to create a GameTransaction.
     * @example
     * // Create one GameTransaction
     * const GameTransaction = await prisma.gameTransaction.create({
     *   data: {
     *     // ... data to create a GameTransaction
     *   }
     * })
     * 
     */
    create<T extends GameTransactionCreateArgs>(args: SelectSubset<T, GameTransactionCreateArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameTransactions.
     * @param {GameTransactionCreateManyArgs} args - Arguments to create many GameTransactions.
     * @example
     * // Create many GameTransactions
     * const gameTransaction = await prisma.gameTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameTransactionCreateManyArgs>(args?: SelectSubset<T, GameTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameTransactions and returns the data saved in the database.
     * @param {GameTransactionCreateManyAndReturnArgs} args - Arguments to create many GameTransactions.
     * @example
     * // Create many GameTransactions
     * const gameTransaction = await prisma.gameTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameTransactions and only return the `id`
     * const gameTransactionWithIdOnly = await prisma.gameTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameTransaction.
     * @param {GameTransactionDeleteArgs} args - Arguments to delete one GameTransaction.
     * @example
     * // Delete one GameTransaction
     * const GameTransaction = await prisma.gameTransaction.delete({
     *   where: {
     *     // ... filter to delete one GameTransaction
     *   }
     * })
     * 
     */
    delete<T extends GameTransactionDeleteArgs>(args: SelectSubset<T, GameTransactionDeleteArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameTransaction.
     * @param {GameTransactionUpdateArgs} args - Arguments to update one GameTransaction.
     * @example
     * // Update one GameTransaction
     * const gameTransaction = await prisma.gameTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameTransactionUpdateArgs>(args: SelectSubset<T, GameTransactionUpdateArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameTransactions.
     * @param {GameTransactionDeleteManyArgs} args - Arguments to filter GameTransactions to delete.
     * @example
     * // Delete a few GameTransactions
     * const { count } = await prisma.gameTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameTransactionDeleteManyArgs>(args?: SelectSubset<T, GameTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameTransactions
     * const gameTransaction = await prisma.gameTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameTransactionUpdateManyArgs>(args: SelectSubset<T, GameTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameTransactions and returns the data updated in the database.
     * @param {GameTransactionUpdateManyAndReturnArgs} args - Arguments to update many GameTransactions.
     * @example
     * // Update many GameTransactions
     * const gameTransaction = await prisma.gameTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameTransactions and only return the `id`
     * const gameTransactionWithIdOnly = await prisma.gameTransaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, GameTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameTransaction.
     * @param {GameTransactionUpsertArgs} args - Arguments to update or create a GameTransaction.
     * @example
     * // Update or create a GameTransaction
     * const gameTransaction = await prisma.gameTransaction.upsert({
     *   create: {
     *     // ... data to create a GameTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameTransaction we want to update
     *   }
     * })
     */
    upsert<T extends GameTransactionUpsertArgs>(args: SelectSubset<T, GameTransactionUpsertArgs<ExtArgs>>): Prisma__GameTransactionClient<$Result.GetResult<Prisma.$GameTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionCountArgs} args - Arguments to filter GameTransactions to count.
     * @example
     * // Count the number of GameTransactions
     * const count = await prisma.gameTransaction.count({
     *   where: {
     *     // ... the filter for the GameTransactions we want to count
     *   }
     * })
    **/
    count<T extends GameTransactionCountArgs>(
      args?: Subset<T, GameTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameTransactionAggregateArgs>(args: Subset<T, GameTransactionAggregateArgs>): Prisma.PrismaPromise<GetGameTransactionAggregateType<T>>

    /**
     * Group by GameTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameTransactionGroupByArgs} args - Group by arguments.
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
      T extends GameTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameTransactionGroupByArgs['orderBy'] }
        : { orderBy?: GameTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameTransaction model
   */
  readonly fields: GameTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GameTransaction model
   */
  interface GameTransactionFieldRefs {
    readonly id: FieldRef<"GameTransaction", 'Int'>
    readonly trans_id: FieldRef<"GameTransaction", 'String'>
    readonly type: FieldRef<"GameTransaction", 'String'>
    readonly amount: FieldRef<"GameTransaction", 'Decimal'>
    readonly game_code: FieldRef<"GameTransaction", 'String'>
    readonly user_id: FieldRef<"GameTransaction", 'Int'>
    readonly createdAt: FieldRef<"GameTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"GameTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameTransaction findUnique
   */
  export type GameTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransaction to fetch.
     */
    where: GameTransactionWhereUniqueInput
  }

  /**
   * GameTransaction findUniqueOrThrow
   */
  export type GameTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransaction to fetch.
     */
    where: GameTransactionWhereUniqueInput
  }

  /**
   * GameTransaction findFirst
   */
  export type GameTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransaction to fetch.
     */
    where?: GameTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTransactions to fetch.
     */
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTransactions.
     */
    cursor?: GameTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTransactions.
     */
    distinct?: GameTransactionScalarFieldEnum | GameTransactionScalarFieldEnum[]
  }

  /**
   * GameTransaction findFirstOrThrow
   */
  export type GameTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransaction to fetch.
     */
    where?: GameTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTransactions to fetch.
     */
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameTransactions.
     */
    cursor?: GameTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameTransactions.
     */
    distinct?: GameTransactionScalarFieldEnum | GameTransactionScalarFieldEnum[]
  }

  /**
   * GameTransaction findMany
   */
  export type GameTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter, which GameTransactions to fetch.
     */
    where?: GameTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameTransactions to fetch.
     */
    orderBy?: GameTransactionOrderByWithRelationInput | GameTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameTransactions.
     */
    cursor?: GameTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameTransactions.
     */
    skip?: number
    distinct?: GameTransactionScalarFieldEnum | GameTransactionScalarFieldEnum[]
  }

  /**
   * GameTransaction create
   */
  export type GameTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameTransaction.
     */
    data: XOR<GameTransactionCreateInput, GameTransactionUncheckedCreateInput>
  }

  /**
   * GameTransaction createMany
   */
  export type GameTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameTransactions.
     */
    data: GameTransactionCreateManyInput | GameTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameTransaction createManyAndReturn
   */
  export type GameTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many GameTransactions.
     */
    data: GameTransactionCreateManyInput | GameTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameTransaction update
   */
  export type GameTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameTransaction.
     */
    data: XOR<GameTransactionUpdateInput, GameTransactionUncheckedUpdateInput>
    /**
     * Choose, which GameTransaction to update.
     */
    where: GameTransactionWhereUniqueInput
  }

  /**
   * GameTransaction updateMany
   */
  export type GameTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameTransactions.
     */
    data: XOR<GameTransactionUpdateManyMutationInput, GameTransactionUncheckedUpdateManyInput>
    /**
     * Filter which GameTransactions to update
     */
    where?: GameTransactionWhereInput
    /**
     * Limit how many GameTransactions to update.
     */
    limit?: number
  }

  /**
   * GameTransaction updateManyAndReturn
   */
  export type GameTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * The data used to update GameTransactions.
     */
    data: XOR<GameTransactionUpdateManyMutationInput, GameTransactionUncheckedUpdateManyInput>
    /**
     * Filter which GameTransactions to update
     */
    where?: GameTransactionWhereInput
    /**
     * Limit how many GameTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameTransaction upsert
   */
  export type GameTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameTransaction to update in case it exists.
     */
    where: GameTransactionWhereUniqueInput
    /**
     * In case the GameTransaction found by the `where` argument doesn't exist, create a new GameTransaction with this data.
     */
    create: XOR<GameTransactionCreateInput, GameTransactionUncheckedCreateInput>
    /**
     * In case the GameTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameTransactionUpdateInput, GameTransactionUncheckedUpdateInput>
  }

  /**
   * GameTransaction delete
   */
  export type GameTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
    /**
     * Filter which GameTransaction to delete.
     */
    where: GameTransactionWhereUniqueInput
  }

  /**
   * GameTransaction deleteMany
   */
  export type GameTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameTransactions to delete
     */
    where?: GameTransactionWhereInput
    /**
     * Limit how many GameTransactions to delete.
     */
    limit?: number
  }

  /**
   * GameTransaction without action
   */
  export type GameTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameTransaction
     */
    select?: GameTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameTransaction
     */
    omit?: GameTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    sender: string | null
    receiver: string | null
    content: string | null
    fileUrl: string | null
    createdAt: Date | null
    seen: boolean | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    sender: string | null
    receiver: string | null
    content: string | null
    fileUrl: string | null
    createdAt: Date | null
    seen: boolean | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    sender: number
    receiver: number
    content: number
    fileUrl: number
    createdAt: number
    seen: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    content?: true
    fileUrl?: true
    createdAt?: true
    seen?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    content?: true
    fileUrl?: true
    createdAt?: true
    seen?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    sender?: true
    receiver?: true
    content?: true
    fileUrl?: true
    createdAt?: true
    seen?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    sender: string
    receiver: string
    content: string | null
    fileUrl: string | null
    createdAt: Date
    seen: boolean
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    seen?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    seen?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    seen?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    sender?: boolean
    receiver?: boolean
    content?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    seen?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sender" | "receiver" | "content" | "fileUrl" | "createdAt" | "seen", ExtArgs["result"]["message"]>

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sender: string
      receiver: string
      content: string | null
      fileUrl: string | null
      createdAt: Date
      seen: boolean
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly sender: FieldRef<"Message", 'String'>
    readonly receiver: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly fileUrl: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly seen: FieldRef<"Message", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    collected_by: number | null
  }

  export type VoucherSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    collected_by: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: number | null
    code: string | null
    amount: Decimal | null
    collected: boolean | null
    collected_at: Date | null
    message: string | null
    collected_by: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: number | null
    code: string | null
    amount: Decimal | null
    collected: boolean | null
    collected_at: Date | null
    message: string | null
    collected_by: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    code: number
    amount: number
    collected: number
    collected_at: number
    message: number
    collected_by: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    id?: true
    amount?: true
    collected_by?: true
  }

  export type VoucherSumAggregateInputType = {
    id?: true
    amount?: true
    collected_by?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    code?: true
    amount?: true
    collected?: true
    collected_at?: true
    message?: true
    collected_by?: true
    updatedAt?: true
    createdAt?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    code?: true
    amount?: true
    collected?: true
    collected_at?: true
    message?: true
    collected_by?: true
    updatedAt?: true
    createdAt?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    code?: true
    amount?: true
    collected?: true
    collected_at?: true
    message?: true
    collected_by?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: number
    code: string
    amount: Decimal
    collected: boolean
    collected_at: Date | null
    message: string | null
    collected_by: number | null
    updatedAt: Date
    createdAt: Date
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    amount?: boolean
    collected?: boolean
    collected_at?: boolean
    message?: boolean
    collected_by?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | Voucher$userArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    amount?: boolean
    collected?: boolean
    collected_at?: boolean
    message?: boolean
    collected_by?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | Voucher$userArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    amount?: boolean
    collected?: boolean
    collected_at?: boolean
    message?: boolean
    collected_by?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    user?: boolean | Voucher$userArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectScalar = {
    id?: boolean
    code?: boolean
    amount?: boolean
    collected?: boolean
    collected_at?: boolean
    message?: boolean
    collected_by?: boolean
    updatedAt?: boolean
    createdAt?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "amount" | "collected" | "collected_at" | "message" | "collected_by" | "updatedAt" | "createdAt", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Voucher$userArgs<ExtArgs>
  }
  export type VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Voucher$userArgs<ExtArgs>
  }
  export type VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Voucher$userArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      amount: Prisma.Decimal
      collected: boolean
      collected_at: Date | null
      message: string | null
      collected_by: number | null
      updatedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VoucherCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VoucherUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Voucher$userArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Voucher model
   */
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'Int'>
    readonly code: FieldRef<"Voucher", 'String'>
    readonly amount: FieldRef<"Voucher", 'Decimal'>
    readonly collected: FieldRef<"Voucher", 'Boolean'>
    readonly collected_at: FieldRef<"Voucher", 'DateTime'>
    readonly message: FieldRef<"Voucher", 'String'>
    readonly collected_by: FieldRef<"Voucher", 'Int'>
    readonly updatedAt: FieldRef<"Voucher", 'DateTime'>
    readonly createdAt: FieldRef<"Voucher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher createManyAndReturn
   */
  export type VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher updateManyAndReturn
   */
  export type VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher.user
   */
  export type Voucher$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model BonusList
   */

  export type AggregateBonusList = {
    _count: BonusListCountAggregateOutputType | null
    _avg: BonusListAvgAggregateOutputType | null
    _sum: BonusListSumAggregateOutputType | null
    _min: BonusListMinAggregateOutputType | null
    _max: BonusListMaxAggregateOutputType | null
  }

  export type BonusListAvgAggregateOutputType = {
    id: number | null
    deposit: Decimal | null
    bonus: Decimal | null
    turn_over: Decimal | null
  }

  export type BonusListSumAggregateOutputType = {
    id: number | null
    deposit: Decimal | null
    bonus: Decimal | null
    turn_over: Decimal | null
  }

  export type BonusListMinAggregateOutputType = {
    id: number | null
    name: string | null
    deposit: Decimal | null
    bonus: Decimal | null
    turn_over: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BonusListMaxAggregateOutputType = {
    id: number | null
    name: string | null
    deposit: Decimal | null
    bonus: Decimal | null
    turn_over: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BonusListCountAggregateOutputType = {
    id: number
    name: number
    deposit: number
    bonus: number
    turn_over: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BonusListAvgAggregateInputType = {
    id?: true
    deposit?: true
    bonus?: true
    turn_over?: true
  }

  export type BonusListSumAggregateInputType = {
    id?: true
    deposit?: true
    bonus?: true
    turn_over?: true
  }

  export type BonusListMinAggregateInputType = {
    id?: true
    name?: true
    deposit?: true
    bonus?: true
    turn_over?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BonusListMaxAggregateInputType = {
    id?: true
    name?: true
    deposit?: true
    bonus?: true
    turn_over?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BonusListCountAggregateInputType = {
    id?: true
    name?: true
    deposit?: true
    bonus?: true
    turn_over?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BonusListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BonusList to aggregate.
     */
    where?: BonusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonusLists to fetch.
     */
    orderBy?: BonusListOrderByWithRelationInput | BonusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BonusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonusLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BonusLists
    **/
    _count?: true | BonusListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BonusListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BonusListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BonusListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BonusListMaxAggregateInputType
  }

  export type GetBonusListAggregateType<T extends BonusListAggregateArgs> = {
        [P in keyof T & keyof AggregateBonusList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBonusList[P]>
      : GetScalarType<T[P], AggregateBonusList[P]>
  }




  export type BonusListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BonusListWhereInput
    orderBy?: BonusListOrderByWithAggregationInput | BonusListOrderByWithAggregationInput[]
    by: BonusListScalarFieldEnum[] | BonusListScalarFieldEnum
    having?: BonusListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BonusListCountAggregateInputType | true
    _avg?: BonusListAvgAggregateInputType
    _sum?: BonusListSumAggregateInputType
    _min?: BonusListMinAggregateInputType
    _max?: BonusListMaxAggregateInputType
  }

  export type BonusListGroupByOutputType = {
    id: number
    name: string
    deposit: Decimal
    bonus: Decimal
    turn_over: Decimal
    createdAt: Date
    updatedAt: Date
    _count: BonusListCountAggregateOutputType | null
    _avg: BonusListAvgAggregateOutputType | null
    _sum: BonusListSumAggregateOutputType | null
    _min: BonusListMinAggregateOutputType | null
    _max: BonusListMaxAggregateOutputType | null
  }

  type GetBonusListGroupByPayload<T extends BonusListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BonusListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BonusListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BonusListGroupByOutputType[P]>
            : GetScalarType<T[P], BonusListGroupByOutputType[P]>
        }
      >
    >


  export type BonusListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deposit?: boolean
    bonus?: boolean
    turn_over?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bonusList"]>

  export type BonusListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deposit?: boolean
    bonus?: boolean
    turn_over?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bonusList"]>

  export type BonusListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    deposit?: boolean
    bonus?: boolean
    turn_over?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bonusList"]>

  export type BonusListSelectScalar = {
    id?: boolean
    name?: boolean
    deposit?: boolean
    bonus?: boolean
    turn_over?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BonusListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "deposit" | "bonus" | "turn_over" | "createdAt" | "updatedAt", ExtArgs["result"]["bonusList"]>

  export type $BonusListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BonusList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      deposit: Prisma.Decimal
      bonus: Prisma.Decimal
      turn_over: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bonusList"]>
    composites: {}
  }

  type BonusListGetPayload<S extends boolean | null | undefined | BonusListDefaultArgs> = $Result.GetResult<Prisma.$BonusListPayload, S>

  type BonusListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BonusListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BonusListCountAggregateInputType | true
    }

  export interface BonusListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BonusList'], meta: { name: 'BonusList' } }
    /**
     * Find zero or one BonusList that matches the filter.
     * @param {BonusListFindUniqueArgs} args - Arguments to find a BonusList
     * @example
     * // Get one BonusList
     * const bonusList = await prisma.bonusList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BonusListFindUniqueArgs>(args: SelectSubset<T, BonusListFindUniqueArgs<ExtArgs>>): Prisma__BonusListClient<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BonusList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BonusListFindUniqueOrThrowArgs} args - Arguments to find a BonusList
     * @example
     * // Get one BonusList
     * const bonusList = await prisma.bonusList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BonusListFindUniqueOrThrowArgs>(args: SelectSubset<T, BonusListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BonusListClient<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BonusList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusListFindFirstArgs} args - Arguments to find a BonusList
     * @example
     * // Get one BonusList
     * const bonusList = await prisma.bonusList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BonusListFindFirstArgs>(args?: SelectSubset<T, BonusListFindFirstArgs<ExtArgs>>): Prisma__BonusListClient<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BonusList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusListFindFirstOrThrowArgs} args - Arguments to find a BonusList
     * @example
     * // Get one BonusList
     * const bonusList = await prisma.bonusList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BonusListFindFirstOrThrowArgs>(args?: SelectSubset<T, BonusListFindFirstOrThrowArgs<ExtArgs>>): Prisma__BonusListClient<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BonusLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BonusLists
     * const bonusLists = await prisma.bonusList.findMany()
     * 
     * // Get first 10 BonusLists
     * const bonusLists = await prisma.bonusList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bonusListWithIdOnly = await prisma.bonusList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BonusListFindManyArgs>(args?: SelectSubset<T, BonusListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BonusList.
     * @param {BonusListCreateArgs} args - Arguments to create a BonusList.
     * @example
     * // Create one BonusList
     * const BonusList = await prisma.bonusList.create({
     *   data: {
     *     // ... data to create a BonusList
     *   }
     * })
     * 
     */
    create<T extends BonusListCreateArgs>(args: SelectSubset<T, BonusListCreateArgs<ExtArgs>>): Prisma__BonusListClient<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BonusLists.
     * @param {BonusListCreateManyArgs} args - Arguments to create many BonusLists.
     * @example
     * // Create many BonusLists
     * const bonusList = await prisma.bonusList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BonusListCreateManyArgs>(args?: SelectSubset<T, BonusListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BonusLists and returns the data saved in the database.
     * @param {BonusListCreateManyAndReturnArgs} args - Arguments to create many BonusLists.
     * @example
     * // Create many BonusLists
     * const bonusList = await prisma.bonusList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BonusLists and only return the `id`
     * const bonusListWithIdOnly = await prisma.bonusList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BonusListCreateManyAndReturnArgs>(args?: SelectSubset<T, BonusListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BonusList.
     * @param {BonusListDeleteArgs} args - Arguments to delete one BonusList.
     * @example
     * // Delete one BonusList
     * const BonusList = await prisma.bonusList.delete({
     *   where: {
     *     // ... filter to delete one BonusList
     *   }
     * })
     * 
     */
    delete<T extends BonusListDeleteArgs>(args: SelectSubset<T, BonusListDeleteArgs<ExtArgs>>): Prisma__BonusListClient<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BonusList.
     * @param {BonusListUpdateArgs} args - Arguments to update one BonusList.
     * @example
     * // Update one BonusList
     * const bonusList = await prisma.bonusList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BonusListUpdateArgs>(args: SelectSubset<T, BonusListUpdateArgs<ExtArgs>>): Prisma__BonusListClient<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BonusLists.
     * @param {BonusListDeleteManyArgs} args - Arguments to filter BonusLists to delete.
     * @example
     * // Delete a few BonusLists
     * const { count } = await prisma.bonusList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BonusListDeleteManyArgs>(args?: SelectSubset<T, BonusListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BonusLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BonusLists
     * const bonusList = await prisma.bonusList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BonusListUpdateManyArgs>(args: SelectSubset<T, BonusListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BonusLists and returns the data updated in the database.
     * @param {BonusListUpdateManyAndReturnArgs} args - Arguments to update many BonusLists.
     * @example
     * // Update many BonusLists
     * const bonusList = await prisma.bonusList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BonusLists and only return the `id`
     * const bonusListWithIdOnly = await prisma.bonusList.updateManyAndReturn({
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
    updateManyAndReturn<T extends BonusListUpdateManyAndReturnArgs>(args: SelectSubset<T, BonusListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BonusList.
     * @param {BonusListUpsertArgs} args - Arguments to update or create a BonusList.
     * @example
     * // Update or create a BonusList
     * const bonusList = await prisma.bonusList.upsert({
     *   create: {
     *     // ... data to create a BonusList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BonusList we want to update
     *   }
     * })
     */
    upsert<T extends BonusListUpsertArgs>(args: SelectSubset<T, BonusListUpsertArgs<ExtArgs>>): Prisma__BonusListClient<$Result.GetResult<Prisma.$BonusListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BonusLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusListCountArgs} args - Arguments to filter BonusLists to count.
     * @example
     * // Count the number of BonusLists
     * const count = await prisma.bonusList.count({
     *   where: {
     *     // ... the filter for the BonusLists we want to count
     *   }
     * })
    **/
    count<T extends BonusListCountArgs>(
      args?: Subset<T, BonusListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BonusListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BonusList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BonusListAggregateArgs>(args: Subset<T, BonusListAggregateArgs>): Prisma.PrismaPromise<GetBonusListAggregateType<T>>

    /**
     * Group by BonusList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusListGroupByArgs} args - Group by arguments.
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
      T extends BonusListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BonusListGroupByArgs['orderBy'] }
        : { orderBy?: BonusListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BonusListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBonusListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BonusList model
   */
  readonly fields: BonusListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BonusList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BonusListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BonusList model
   */
  interface BonusListFieldRefs {
    readonly id: FieldRef<"BonusList", 'Int'>
    readonly name: FieldRef<"BonusList", 'String'>
    readonly deposit: FieldRef<"BonusList", 'Decimal'>
    readonly bonus: FieldRef<"BonusList", 'Decimal'>
    readonly turn_over: FieldRef<"BonusList", 'Decimal'>
    readonly createdAt: FieldRef<"BonusList", 'DateTime'>
    readonly updatedAt: FieldRef<"BonusList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BonusList findUnique
   */
  export type BonusListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * Filter, which BonusList to fetch.
     */
    where: BonusListWhereUniqueInput
  }

  /**
   * BonusList findUniqueOrThrow
   */
  export type BonusListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * Filter, which BonusList to fetch.
     */
    where: BonusListWhereUniqueInput
  }

  /**
   * BonusList findFirst
   */
  export type BonusListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * Filter, which BonusList to fetch.
     */
    where?: BonusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonusLists to fetch.
     */
    orderBy?: BonusListOrderByWithRelationInput | BonusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BonusLists.
     */
    cursor?: BonusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonusLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BonusLists.
     */
    distinct?: BonusListScalarFieldEnum | BonusListScalarFieldEnum[]
  }

  /**
   * BonusList findFirstOrThrow
   */
  export type BonusListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * Filter, which BonusList to fetch.
     */
    where?: BonusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonusLists to fetch.
     */
    orderBy?: BonusListOrderByWithRelationInput | BonusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BonusLists.
     */
    cursor?: BonusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonusLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BonusLists.
     */
    distinct?: BonusListScalarFieldEnum | BonusListScalarFieldEnum[]
  }

  /**
   * BonusList findMany
   */
  export type BonusListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * Filter, which BonusLists to fetch.
     */
    where?: BonusListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BonusLists to fetch.
     */
    orderBy?: BonusListOrderByWithRelationInput | BonusListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BonusLists.
     */
    cursor?: BonusListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BonusLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BonusLists.
     */
    skip?: number
    distinct?: BonusListScalarFieldEnum | BonusListScalarFieldEnum[]
  }

  /**
   * BonusList create
   */
  export type BonusListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * The data needed to create a BonusList.
     */
    data: XOR<BonusListCreateInput, BonusListUncheckedCreateInput>
  }

  /**
   * BonusList createMany
   */
  export type BonusListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BonusLists.
     */
    data: BonusListCreateManyInput | BonusListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BonusList createManyAndReturn
   */
  export type BonusListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * The data used to create many BonusLists.
     */
    data: BonusListCreateManyInput | BonusListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BonusList update
   */
  export type BonusListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * The data needed to update a BonusList.
     */
    data: XOR<BonusListUpdateInput, BonusListUncheckedUpdateInput>
    /**
     * Choose, which BonusList to update.
     */
    where: BonusListWhereUniqueInput
  }

  /**
   * BonusList updateMany
   */
  export type BonusListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BonusLists.
     */
    data: XOR<BonusListUpdateManyMutationInput, BonusListUncheckedUpdateManyInput>
    /**
     * Filter which BonusLists to update
     */
    where?: BonusListWhereInput
    /**
     * Limit how many BonusLists to update.
     */
    limit?: number
  }

  /**
   * BonusList updateManyAndReturn
   */
  export type BonusListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * The data used to update BonusLists.
     */
    data: XOR<BonusListUpdateManyMutationInput, BonusListUncheckedUpdateManyInput>
    /**
     * Filter which BonusLists to update
     */
    where?: BonusListWhereInput
    /**
     * Limit how many BonusLists to update.
     */
    limit?: number
  }

  /**
   * BonusList upsert
   */
  export type BonusListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * The filter to search for the BonusList to update in case it exists.
     */
    where: BonusListWhereUniqueInput
    /**
     * In case the BonusList found by the `where` argument doesn't exist, create a new BonusList with this data.
     */
    create: XOR<BonusListCreateInput, BonusListUncheckedCreateInput>
    /**
     * In case the BonusList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BonusListUpdateInput, BonusListUncheckedUpdateInput>
  }

  /**
   * BonusList delete
   */
  export type BonusListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
    /**
     * Filter which BonusList to delete.
     */
    where: BonusListWhereUniqueInput
  }

  /**
   * BonusList deleteMany
   */
  export type BonusListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BonusLists to delete
     */
    where?: BonusListWhereInput
    /**
     * Limit how many BonusLists to delete.
     */
    limit?: number
  }

  /**
   * BonusList without action
   */
  export type BonusListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BonusList
     */
    select?: BonusListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BonusList
     */
    omit?: BonusListOmit<ExtArgs> | null
  }


  /**
   * Model CommissionList
   */

  export type AggregateCommissionList = {
    _count: CommissionListCountAggregateOutputType | null
    _avg: CommissionListAvgAggregateOutputType | null
    _sum: CommissionListSumAggregateOutputType | null
    _min: CommissionListMinAggregateOutputType | null
    _max: CommissionListMaxAggregateOutputType | null
  }

  export type CommissionListAvgAggregateOutputType = {
    id: number | null
    deposit: Decimal | null
    bet: Decimal | null
    salary: Decimal | null
  }

  export type CommissionListSumAggregateOutputType = {
    id: number | null
    deposit: Decimal | null
    bet: Decimal | null
    salary: Decimal | null
  }

  export type CommissionListMinAggregateOutputType = {
    id: number | null
    deposit: Decimal | null
    bet: Decimal | null
    salary: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommissionListMaxAggregateOutputType = {
    id: number | null
    deposit: Decimal | null
    bet: Decimal | null
    salary: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommissionListCountAggregateOutputType = {
    id: number
    deposit: number
    bet: number
    salary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommissionListAvgAggregateInputType = {
    id?: true
    deposit?: true
    bet?: true
    salary?: true
  }

  export type CommissionListSumAggregateInputType = {
    id?: true
    deposit?: true
    bet?: true
    salary?: true
  }

  export type CommissionListMinAggregateInputType = {
    id?: true
    deposit?: true
    bet?: true
    salary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommissionListMaxAggregateInputType = {
    id?: true
    deposit?: true
    bet?: true
    salary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommissionListCountAggregateInputType = {
    id?: true
    deposit?: true
    bet?: true
    salary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommissionListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommissionList to aggregate.
     */
    where?: CommissionListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionLists to fetch.
     */
    orderBy?: CommissionListOrderByWithRelationInput | CommissionListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommissionListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommissionLists
    **/
    _count?: true | CommissionListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommissionListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommissionListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommissionListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommissionListMaxAggregateInputType
  }

  export type GetCommissionListAggregateType<T extends CommissionListAggregateArgs> = {
        [P in keyof T & keyof AggregateCommissionList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommissionList[P]>
      : GetScalarType<T[P], AggregateCommissionList[P]>
  }




  export type CommissionListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionListWhereInput
    orderBy?: CommissionListOrderByWithAggregationInput | CommissionListOrderByWithAggregationInput[]
    by: CommissionListScalarFieldEnum[] | CommissionListScalarFieldEnum
    having?: CommissionListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommissionListCountAggregateInputType | true
    _avg?: CommissionListAvgAggregateInputType
    _sum?: CommissionListSumAggregateInputType
    _min?: CommissionListMinAggregateInputType
    _max?: CommissionListMaxAggregateInputType
  }

  export type CommissionListGroupByOutputType = {
    id: number
    deposit: Decimal
    bet: Decimal
    salary: Decimal
    createdAt: Date
    updatedAt: Date
    _count: CommissionListCountAggregateOutputType | null
    _avg: CommissionListAvgAggregateOutputType | null
    _sum: CommissionListSumAggregateOutputType | null
    _min: CommissionListMinAggregateOutputType | null
    _max: CommissionListMaxAggregateOutputType | null
  }

  type GetCommissionListGroupByPayload<T extends CommissionListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommissionListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommissionListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommissionListGroupByOutputType[P]>
            : GetScalarType<T[P], CommissionListGroupByOutputType[P]>
        }
      >
    >


  export type CommissionListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deposit?: boolean
    bet?: boolean
    salary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["commissionList"]>

  export type CommissionListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deposit?: boolean
    bet?: boolean
    salary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["commissionList"]>

  export type CommissionListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    deposit?: boolean
    bet?: boolean
    salary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["commissionList"]>

  export type CommissionListSelectScalar = {
    id?: boolean
    deposit?: boolean
    bet?: boolean
    salary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommissionListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "deposit" | "bet" | "salary" | "createdAt" | "updatedAt", ExtArgs["result"]["commissionList"]>

  export type $CommissionListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommissionList"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      deposit: Prisma.Decimal
      bet: Prisma.Decimal
      salary: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["commissionList"]>
    composites: {}
  }

  type CommissionListGetPayload<S extends boolean | null | undefined | CommissionListDefaultArgs> = $Result.GetResult<Prisma.$CommissionListPayload, S>

  type CommissionListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommissionListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommissionListCountAggregateInputType | true
    }

  export interface CommissionListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommissionList'], meta: { name: 'CommissionList' } }
    /**
     * Find zero or one CommissionList that matches the filter.
     * @param {CommissionListFindUniqueArgs} args - Arguments to find a CommissionList
     * @example
     * // Get one CommissionList
     * const commissionList = await prisma.commissionList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommissionListFindUniqueArgs>(args: SelectSubset<T, CommissionListFindUniqueArgs<ExtArgs>>): Prisma__CommissionListClient<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommissionList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommissionListFindUniqueOrThrowArgs} args - Arguments to find a CommissionList
     * @example
     * // Get one CommissionList
     * const commissionList = await prisma.commissionList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommissionListFindUniqueOrThrowArgs>(args: SelectSubset<T, CommissionListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommissionListClient<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommissionList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionListFindFirstArgs} args - Arguments to find a CommissionList
     * @example
     * // Get one CommissionList
     * const commissionList = await prisma.commissionList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommissionListFindFirstArgs>(args?: SelectSubset<T, CommissionListFindFirstArgs<ExtArgs>>): Prisma__CommissionListClient<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommissionList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionListFindFirstOrThrowArgs} args - Arguments to find a CommissionList
     * @example
     * // Get one CommissionList
     * const commissionList = await prisma.commissionList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommissionListFindFirstOrThrowArgs>(args?: SelectSubset<T, CommissionListFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommissionListClient<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommissionLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommissionLists
     * const commissionLists = await prisma.commissionList.findMany()
     * 
     * // Get first 10 CommissionLists
     * const commissionLists = await prisma.commissionList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commissionListWithIdOnly = await prisma.commissionList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommissionListFindManyArgs>(args?: SelectSubset<T, CommissionListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommissionList.
     * @param {CommissionListCreateArgs} args - Arguments to create a CommissionList.
     * @example
     * // Create one CommissionList
     * const CommissionList = await prisma.commissionList.create({
     *   data: {
     *     // ... data to create a CommissionList
     *   }
     * })
     * 
     */
    create<T extends CommissionListCreateArgs>(args: SelectSubset<T, CommissionListCreateArgs<ExtArgs>>): Prisma__CommissionListClient<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommissionLists.
     * @param {CommissionListCreateManyArgs} args - Arguments to create many CommissionLists.
     * @example
     * // Create many CommissionLists
     * const commissionList = await prisma.commissionList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommissionListCreateManyArgs>(args?: SelectSubset<T, CommissionListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommissionLists and returns the data saved in the database.
     * @param {CommissionListCreateManyAndReturnArgs} args - Arguments to create many CommissionLists.
     * @example
     * // Create many CommissionLists
     * const commissionList = await prisma.commissionList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommissionLists and only return the `id`
     * const commissionListWithIdOnly = await prisma.commissionList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommissionListCreateManyAndReturnArgs>(args?: SelectSubset<T, CommissionListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommissionList.
     * @param {CommissionListDeleteArgs} args - Arguments to delete one CommissionList.
     * @example
     * // Delete one CommissionList
     * const CommissionList = await prisma.commissionList.delete({
     *   where: {
     *     // ... filter to delete one CommissionList
     *   }
     * })
     * 
     */
    delete<T extends CommissionListDeleteArgs>(args: SelectSubset<T, CommissionListDeleteArgs<ExtArgs>>): Prisma__CommissionListClient<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommissionList.
     * @param {CommissionListUpdateArgs} args - Arguments to update one CommissionList.
     * @example
     * // Update one CommissionList
     * const commissionList = await prisma.commissionList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommissionListUpdateArgs>(args: SelectSubset<T, CommissionListUpdateArgs<ExtArgs>>): Prisma__CommissionListClient<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommissionLists.
     * @param {CommissionListDeleteManyArgs} args - Arguments to filter CommissionLists to delete.
     * @example
     * // Delete a few CommissionLists
     * const { count } = await prisma.commissionList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommissionListDeleteManyArgs>(args?: SelectSubset<T, CommissionListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommissionLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommissionLists
     * const commissionList = await prisma.commissionList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommissionListUpdateManyArgs>(args: SelectSubset<T, CommissionListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommissionLists and returns the data updated in the database.
     * @param {CommissionListUpdateManyAndReturnArgs} args - Arguments to update many CommissionLists.
     * @example
     * // Update many CommissionLists
     * const commissionList = await prisma.commissionList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommissionLists and only return the `id`
     * const commissionListWithIdOnly = await prisma.commissionList.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommissionListUpdateManyAndReturnArgs>(args: SelectSubset<T, CommissionListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommissionList.
     * @param {CommissionListUpsertArgs} args - Arguments to update or create a CommissionList.
     * @example
     * // Update or create a CommissionList
     * const commissionList = await prisma.commissionList.upsert({
     *   create: {
     *     // ... data to create a CommissionList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommissionList we want to update
     *   }
     * })
     */
    upsert<T extends CommissionListUpsertArgs>(args: SelectSubset<T, CommissionListUpsertArgs<ExtArgs>>): Prisma__CommissionListClient<$Result.GetResult<Prisma.$CommissionListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommissionLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionListCountArgs} args - Arguments to filter CommissionLists to count.
     * @example
     * // Count the number of CommissionLists
     * const count = await prisma.commissionList.count({
     *   where: {
     *     // ... the filter for the CommissionLists we want to count
     *   }
     * })
    **/
    count<T extends CommissionListCountArgs>(
      args?: Subset<T, CommissionListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommissionListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommissionList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommissionListAggregateArgs>(args: Subset<T, CommissionListAggregateArgs>): Prisma.PrismaPromise<GetCommissionListAggregateType<T>>

    /**
     * Group by CommissionList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionListGroupByArgs} args - Group by arguments.
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
      T extends CommissionListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommissionListGroupByArgs['orderBy'] }
        : { orderBy?: CommissionListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommissionListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommissionListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommissionList model
   */
  readonly fields: CommissionListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommissionList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommissionListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CommissionList model
   */
  interface CommissionListFieldRefs {
    readonly id: FieldRef<"CommissionList", 'Int'>
    readonly deposit: FieldRef<"CommissionList", 'Decimal'>
    readonly bet: FieldRef<"CommissionList", 'Decimal'>
    readonly salary: FieldRef<"CommissionList", 'Decimal'>
    readonly createdAt: FieldRef<"CommissionList", 'DateTime'>
    readonly updatedAt: FieldRef<"CommissionList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommissionList findUnique
   */
  export type CommissionListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * Filter, which CommissionList to fetch.
     */
    where: CommissionListWhereUniqueInput
  }

  /**
   * CommissionList findUniqueOrThrow
   */
  export type CommissionListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * Filter, which CommissionList to fetch.
     */
    where: CommissionListWhereUniqueInput
  }

  /**
   * CommissionList findFirst
   */
  export type CommissionListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * Filter, which CommissionList to fetch.
     */
    where?: CommissionListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionLists to fetch.
     */
    orderBy?: CommissionListOrderByWithRelationInput | CommissionListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommissionLists.
     */
    cursor?: CommissionListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommissionLists.
     */
    distinct?: CommissionListScalarFieldEnum | CommissionListScalarFieldEnum[]
  }

  /**
   * CommissionList findFirstOrThrow
   */
  export type CommissionListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * Filter, which CommissionList to fetch.
     */
    where?: CommissionListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionLists to fetch.
     */
    orderBy?: CommissionListOrderByWithRelationInput | CommissionListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommissionLists.
     */
    cursor?: CommissionListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommissionLists.
     */
    distinct?: CommissionListScalarFieldEnum | CommissionListScalarFieldEnum[]
  }

  /**
   * CommissionList findMany
   */
  export type CommissionListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * Filter, which CommissionLists to fetch.
     */
    where?: CommissionListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommissionLists to fetch.
     */
    orderBy?: CommissionListOrderByWithRelationInput | CommissionListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommissionLists.
     */
    cursor?: CommissionListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommissionLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommissionLists.
     */
    skip?: number
    distinct?: CommissionListScalarFieldEnum | CommissionListScalarFieldEnum[]
  }

  /**
   * CommissionList create
   */
  export type CommissionListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * The data needed to create a CommissionList.
     */
    data: XOR<CommissionListCreateInput, CommissionListUncheckedCreateInput>
  }

  /**
   * CommissionList createMany
   */
  export type CommissionListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommissionLists.
     */
    data: CommissionListCreateManyInput | CommissionListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommissionList createManyAndReturn
   */
  export type CommissionListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * The data used to create many CommissionLists.
     */
    data: CommissionListCreateManyInput | CommissionListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommissionList update
   */
  export type CommissionListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * The data needed to update a CommissionList.
     */
    data: XOR<CommissionListUpdateInput, CommissionListUncheckedUpdateInput>
    /**
     * Choose, which CommissionList to update.
     */
    where: CommissionListWhereUniqueInput
  }

  /**
   * CommissionList updateMany
   */
  export type CommissionListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommissionLists.
     */
    data: XOR<CommissionListUpdateManyMutationInput, CommissionListUncheckedUpdateManyInput>
    /**
     * Filter which CommissionLists to update
     */
    where?: CommissionListWhereInput
    /**
     * Limit how many CommissionLists to update.
     */
    limit?: number
  }

  /**
   * CommissionList updateManyAndReturn
   */
  export type CommissionListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * The data used to update CommissionLists.
     */
    data: XOR<CommissionListUpdateManyMutationInput, CommissionListUncheckedUpdateManyInput>
    /**
     * Filter which CommissionLists to update
     */
    where?: CommissionListWhereInput
    /**
     * Limit how many CommissionLists to update.
     */
    limit?: number
  }

  /**
   * CommissionList upsert
   */
  export type CommissionListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * The filter to search for the CommissionList to update in case it exists.
     */
    where: CommissionListWhereUniqueInput
    /**
     * In case the CommissionList found by the `where` argument doesn't exist, create a new CommissionList with this data.
     */
    create: XOR<CommissionListCreateInput, CommissionListUncheckedCreateInput>
    /**
     * In case the CommissionList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommissionListUpdateInput, CommissionListUncheckedUpdateInput>
  }

  /**
   * CommissionList delete
   */
  export type CommissionListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
    /**
     * Filter which CommissionList to delete.
     */
    where: CommissionListWhereUniqueInput
  }

  /**
   * CommissionList deleteMany
   */
  export type CommissionListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommissionLists to delete
     */
    where?: CommissionListWhereInput
    /**
     * Limit how many CommissionLists to delete.
     */
    limit?: number
  }

  /**
   * CommissionList without action
   */
  export type CommissionListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommissionList
     */
    select?: CommissionListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommissionList
     */
    omit?: CommissionListOmit<ExtArgs> | null
  }


  /**
   * Model LuckySpinLog
   */

  export type AggregateLuckySpinLog = {
    _count: LuckySpinLogCountAggregateOutputType | null
    _avg: LuckySpinLogAvgAggregateOutputType | null
    _sum: LuckySpinLogSumAggregateOutputType | null
    _min: LuckySpinLogMinAggregateOutputType | null
    _max: LuckySpinLogMaxAggregateOutputType | null
  }

  export type LuckySpinLogAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LuckySpinLogSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type LuckySpinLogMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    winning_index: string | null
    prize_label: string | null
    createdAt: Date | null
  }

  export type LuckySpinLogMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    winning_index: string | null
    prize_label: string | null
    createdAt: Date | null
  }

  export type LuckySpinLogCountAggregateOutputType = {
    id: number
    user_id: number
    winning_index: number
    prize_label: number
    createdAt: number
    _all: number
  }


  export type LuckySpinLogAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LuckySpinLogSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type LuckySpinLogMinAggregateInputType = {
    id?: true
    user_id?: true
    winning_index?: true
    prize_label?: true
    createdAt?: true
  }

  export type LuckySpinLogMaxAggregateInputType = {
    id?: true
    user_id?: true
    winning_index?: true
    prize_label?: true
    createdAt?: true
  }

  export type LuckySpinLogCountAggregateInputType = {
    id?: true
    user_id?: true
    winning_index?: true
    prize_label?: true
    createdAt?: true
    _all?: true
  }

  export type LuckySpinLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LuckySpinLog to aggregate.
     */
    where?: LuckySpinLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LuckySpinLogs to fetch.
     */
    orderBy?: LuckySpinLogOrderByWithRelationInput | LuckySpinLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LuckySpinLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LuckySpinLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LuckySpinLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LuckySpinLogs
    **/
    _count?: true | LuckySpinLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LuckySpinLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LuckySpinLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LuckySpinLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LuckySpinLogMaxAggregateInputType
  }

  export type GetLuckySpinLogAggregateType<T extends LuckySpinLogAggregateArgs> = {
        [P in keyof T & keyof AggregateLuckySpinLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLuckySpinLog[P]>
      : GetScalarType<T[P], AggregateLuckySpinLog[P]>
  }




  export type LuckySpinLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LuckySpinLogWhereInput
    orderBy?: LuckySpinLogOrderByWithAggregationInput | LuckySpinLogOrderByWithAggregationInput[]
    by: LuckySpinLogScalarFieldEnum[] | LuckySpinLogScalarFieldEnum
    having?: LuckySpinLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LuckySpinLogCountAggregateInputType | true
    _avg?: LuckySpinLogAvgAggregateInputType
    _sum?: LuckySpinLogSumAggregateInputType
    _min?: LuckySpinLogMinAggregateInputType
    _max?: LuckySpinLogMaxAggregateInputType
  }

  export type LuckySpinLogGroupByOutputType = {
    id: number
    user_id: number
    winning_index: string
    prize_label: string
    createdAt: Date
    _count: LuckySpinLogCountAggregateOutputType | null
    _avg: LuckySpinLogAvgAggregateOutputType | null
    _sum: LuckySpinLogSumAggregateOutputType | null
    _min: LuckySpinLogMinAggregateOutputType | null
    _max: LuckySpinLogMaxAggregateOutputType | null
  }

  type GetLuckySpinLogGroupByPayload<T extends LuckySpinLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LuckySpinLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LuckySpinLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LuckySpinLogGroupByOutputType[P]>
            : GetScalarType<T[P], LuckySpinLogGroupByOutputType[P]>
        }
      >
    >


  export type LuckySpinLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    winning_index?: boolean
    prize_label?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["luckySpinLog"]>

  export type LuckySpinLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    winning_index?: boolean
    prize_label?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["luckySpinLog"]>

  export type LuckySpinLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    winning_index?: boolean
    prize_label?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["luckySpinLog"]>

  export type LuckySpinLogSelectScalar = {
    id?: boolean
    user_id?: boolean
    winning_index?: boolean
    prize_label?: boolean
    createdAt?: boolean
  }

  export type LuckySpinLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "winning_index" | "prize_label" | "createdAt", ExtArgs["result"]["luckySpinLog"]>
  export type LuckySpinLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LuckySpinLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LuckySpinLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LuckySpinLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LuckySpinLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      winning_index: string
      prize_label: string
      createdAt: Date
    }, ExtArgs["result"]["luckySpinLog"]>
    composites: {}
  }

  type LuckySpinLogGetPayload<S extends boolean | null | undefined | LuckySpinLogDefaultArgs> = $Result.GetResult<Prisma.$LuckySpinLogPayload, S>

  type LuckySpinLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LuckySpinLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LuckySpinLogCountAggregateInputType | true
    }

  export interface LuckySpinLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LuckySpinLog'], meta: { name: 'LuckySpinLog' } }
    /**
     * Find zero or one LuckySpinLog that matches the filter.
     * @param {LuckySpinLogFindUniqueArgs} args - Arguments to find a LuckySpinLog
     * @example
     * // Get one LuckySpinLog
     * const luckySpinLog = await prisma.luckySpinLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LuckySpinLogFindUniqueArgs>(args: SelectSubset<T, LuckySpinLogFindUniqueArgs<ExtArgs>>): Prisma__LuckySpinLogClient<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LuckySpinLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LuckySpinLogFindUniqueOrThrowArgs} args - Arguments to find a LuckySpinLog
     * @example
     * // Get one LuckySpinLog
     * const luckySpinLog = await prisma.luckySpinLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LuckySpinLogFindUniqueOrThrowArgs>(args: SelectSubset<T, LuckySpinLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LuckySpinLogClient<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LuckySpinLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuckySpinLogFindFirstArgs} args - Arguments to find a LuckySpinLog
     * @example
     * // Get one LuckySpinLog
     * const luckySpinLog = await prisma.luckySpinLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LuckySpinLogFindFirstArgs>(args?: SelectSubset<T, LuckySpinLogFindFirstArgs<ExtArgs>>): Prisma__LuckySpinLogClient<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LuckySpinLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuckySpinLogFindFirstOrThrowArgs} args - Arguments to find a LuckySpinLog
     * @example
     * // Get one LuckySpinLog
     * const luckySpinLog = await prisma.luckySpinLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LuckySpinLogFindFirstOrThrowArgs>(args?: SelectSubset<T, LuckySpinLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LuckySpinLogClient<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LuckySpinLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuckySpinLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LuckySpinLogs
     * const luckySpinLogs = await prisma.luckySpinLog.findMany()
     * 
     * // Get first 10 LuckySpinLogs
     * const luckySpinLogs = await prisma.luckySpinLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const luckySpinLogWithIdOnly = await prisma.luckySpinLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LuckySpinLogFindManyArgs>(args?: SelectSubset<T, LuckySpinLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LuckySpinLog.
     * @param {LuckySpinLogCreateArgs} args - Arguments to create a LuckySpinLog.
     * @example
     * // Create one LuckySpinLog
     * const LuckySpinLog = await prisma.luckySpinLog.create({
     *   data: {
     *     // ... data to create a LuckySpinLog
     *   }
     * })
     * 
     */
    create<T extends LuckySpinLogCreateArgs>(args: SelectSubset<T, LuckySpinLogCreateArgs<ExtArgs>>): Prisma__LuckySpinLogClient<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LuckySpinLogs.
     * @param {LuckySpinLogCreateManyArgs} args - Arguments to create many LuckySpinLogs.
     * @example
     * // Create many LuckySpinLogs
     * const luckySpinLog = await prisma.luckySpinLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LuckySpinLogCreateManyArgs>(args?: SelectSubset<T, LuckySpinLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LuckySpinLogs and returns the data saved in the database.
     * @param {LuckySpinLogCreateManyAndReturnArgs} args - Arguments to create many LuckySpinLogs.
     * @example
     * // Create many LuckySpinLogs
     * const luckySpinLog = await prisma.luckySpinLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LuckySpinLogs and only return the `id`
     * const luckySpinLogWithIdOnly = await prisma.luckySpinLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LuckySpinLogCreateManyAndReturnArgs>(args?: SelectSubset<T, LuckySpinLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LuckySpinLog.
     * @param {LuckySpinLogDeleteArgs} args - Arguments to delete one LuckySpinLog.
     * @example
     * // Delete one LuckySpinLog
     * const LuckySpinLog = await prisma.luckySpinLog.delete({
     *   where: {
     *     // ... filter to delete one LuckySpinLog
     *   }
     * })
     * 
     */
    delete<T extends LuckySpinLogDeleteArgs>(args: SelectSubset<T, LuckySpinLogDeleteArgs<ExtArgs>>): Prisma__LuckySpinLogClient<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LuckySpinLog.
     * @param {LuckySpinLogUpdateArgs} args - Arguments to update one LuckySpinLog.
     * @example
     * // Update one LuckySpinLog
     * const luckySpinLog = await prisma.luckySpinLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LuckySpinLogUpdateArgs>(args: SelectSubset<T, LuckySpinLogUpdateArgs<ExtArgs>>): Prisma__LuckySpinLogClient<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LuckySpinLogs.
     * @param {LuckySpinLogDeleteManyArgs} args - Arguments to filter LuckySpinLogs to delete.
     * @example
     * // Delete a few LuckySpinLogs
     * const { count } = await prisma.luckySpinLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LuckySpinLogDeleteManyArgs>(args?: SelectSubset<T, LuckySpinLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LuckySpinLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuckySpinLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LuckySpinLogs
     * const luckySpinLog = await prisma.luckySpinLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LuckySpinLogUpdateManyArgs>(args: SelectSubset<T, LuckySpinLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LuckySpinLogs and returns the data updated in the database.
     * @param {LuckySpinLogUpdateManyAndReturnArgs} args - Arguments to update many LuckySpinLogs.
     * @example
     * // Update many LuckySpinLogs
     * const luckySpinLog = await prisma.luckySpinLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LuckySpinLogs and only return the `id`
     * const luckySpinLogWithIdOnly = await prisma.luckySpinLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends LuckySpinLogUpdateManyAndReturnArgs>(args: SelectSubset<T, LuckySpinLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LuckySpinLog.
     * @param {LuckySpinLogUpsertArgs} args - Arguments to update or create a LuckySpinLog.
     * @example
     * // Update or create a LuckySpinLog
     * const luckySpinLog = await prisma.luckySpinLog.upsert({
     *   create: {
     *     // ... data to create a LuckySpinLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LuckySpinLog we want to update
     *   }
     * })
     */
    upsert<T extends LuckySpinLogUpsertArgs>(args: SelectSubset<T, LuckySpinLogUpsertArgs<ExtArgs>>): Prisma__LuckySpinLogClient<$Result.GetResult<Prisma.$LuckySpinLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LuckySpinLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuckySpinLogCountArgs} args - Arguments to filter LuckySpinLogs to count.
     * @example
     * // Count the number of LuckySpinLogs
     * const count = await prisma.luckySpinLog.count({
     *   where: {
     *     // ... the filter for the LuckySpinLogs we want to count
     *   }
     * })
    **/
    count<T extends LuckySpinLogCountArgs>(
      args?: Subset<T, LuckySpinLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LuckySpinLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LuckySpinLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuckySpinLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LuckySpinLogAggregateArgs>(args: Subset<T, LuckySpinLogAggregateArgs>): Prisma.PrismaPromise<GetLuckySpinLogAggregateType<T>>

    /**
     * Group by LuckySpinLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LuckySpinLogGroupByArgs} args - Group by arguments.
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
      T extends LuckySpinLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LuckySpinLogGroupByArgs['orderBy'] }
        : { orderBy?: LuckySpinLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LuckySpinLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLuckySpinLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LuckySpinLog model
   */
  readonly fields: LuckySpinLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LuckySpinLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LuckySpinLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LuckySpinLog model
   */
  interface LuckySpinLogFieldRefs {
    readonly id: FieldRef<"LuckySpinLog", 'Int'>
    readonly user_id: FieldRef<"LuckySpinLog", 'Int'>
    readonly winning_index: FieldRef<"LuckySpinLog", 'String'>
    readonly prize_label: FieldRef<"LuckySpinLog", 'String'>
    readonly createdAt: FieldRef<"LuckySpinLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LuckySpinLog findUnique
   */
  export type LuckySpinLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    /**
     * Filter, which LuckySpinLog to fetch.
     */
    where: LuckySpinLogWhereUniqueInput
  }

  /**
   * LuckySpinLog findUniqueOrThrow
   */
  export type LuckySpinLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    /**
     * Filter, which LuckySpinLog to fetch.
     */
    where: LuckySpinLogWhereUniqueInput
  }

  /**
   * LuckySpinLog findFirst
   */
  export type LuckySpinLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    /**
     * Filter, which LuckySpinLog to fetch.
     */
    where?: LuckySpinLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LuckySpinLogs to fetch.
     */
    orderBy?: LuckySpinLogOrderByWithRelationInput | LuckySpinLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LuckySpinLogs.
     */
    cursor?: LuckySpinLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LuckySpinLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LuckySpinLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LuckySpinLogs.
     */
    distinct?: LuckySpinLogScalarFieldEnum | LuckySpinLogScalarFieldEnum[]
  }

  /**
   * LuckySpinLog findFirstOrThrow
   */
  export type LuckySpinLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    /**
     * Filter, which LuckySpinLog to fetch.
     */
    where?: LuckySpinLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LuckySpinLogs to fetch.
     */
    orderBy?: LuckySpinLogOrderByWithRelationInput | LuckySpinLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LuckySpinLogs.
     */
    cursor?: LuckySpinLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LuckySpinLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LuckySpinLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LuckySpinLogs.
     */
    distinct?: LuckySpinLogScalarFieldEnum | LuckySpinLogScalarFieldEnum[]
  }

  /**
   * LuckySpinLog findMany
   */
  export type LuckySpinLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    /**
     * Filter, which LuckySpinLogs to fetch.
     */
    where?: LuckySpinLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LuckySpinLogs to fetch.
     */
    orderBy?: LuckySpinLogOrderByWithRelationInput | LuckySpinLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LuckySpinLogs.
     */
    cursor?: LuckySpinLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LuckySpinLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LuckySpinLogs.
     */
    skip?: number
    distinct?: LuckySpinLogScalarFieldEnum | LuckySpinLogScalarFieldEnum[]
  }

  /**
   * LuckySpinLog create
   */
  export type LuckySpinLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    /**
     * The data needed to create a LuckySpinLog.
     */
    data: XOR<LuckySpinLogCreateInput, LuckySpinLogUncheckedCreateInput>
  }

  /**
   * LuckySpinLog createMany
   */
  export type LuckySpinLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LuckySpinLogs.
     */
    data: LuckySpinLogCreateManyInput | LuckySpinLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LuckySpinLog createManyAndReturn
   */
  export type LuckySpinLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * The data used to create many LuckySpinLogs.
     */
    data: LuckySpinLogCreateManyInput | LuckySpinLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LuckySpinLog update
   */
  export type LuckySpinLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    /**
     * The data needed to update a LuckySpinLog.
     */
    data: XOR<LuckySpinLogUpdateInput, LuckySpinLogUncheckedUpdateInput>
    /**
     * Choose, which LuckySpinLog to update.
     */
    where: LuckySpinLogWhereUniqueInput
  }

  /**
   * LuckySpinLog updateMany
   */
  export type LuckySpinLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LuckySpinLogs.
     */
    data: XOR<LuckySpinLogUpdateManyMutationInput, LuckySpinLogUncheckedUpdateManyInput>
    /**
     * Filter which LuckySpinLogs to update
     */
    where?: LuckySpinLogWhereInput
    /**
     * Limit how many LuckySpinLogs to update.
     */
    limit?: number
  }

  /**
   * LuckySpinLog updateManyAndReturn
   */
  export type LuckySpinLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * The data used to update LuckySpinLogs.
     */
    data: XOR<LuckySpinLogUpdateManyMutationInput, LuckySpinLogUncheckedUpdateManyInput>
    /**
     * Filter which LuckySpinLogs to update
     */
    where?: LuckySpinLogWhereInput
    /**
     * Limit how many LuckySpinLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LuckySpinLog upsert
   */
  export type LuckySpinLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    /**
     * The filter to search for the LuckySpinLog to update in case it exists.
     */
    where: LuckySpinLogWhereUniqueInput
    /**
     * In case the LuckySpinLog found by the `where` argument doesn't exist, create a new LuckySpinLog with this data.
     */
    create: XOR<LuckySpinLogCreateInput, LuckySpinLogUncheckedCreateInput>
    /**
     * In case the LuckySpinLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LuckySpinLogUpdateInput, LuckySpinLogUncheckedUpdateInput>
  }

  /**
   * LuckySpinLog delete
   */
  export type LuckySpinLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
    /**
     * Filter which LuckySpinLog to delete.
     */
    where: LuckySpinLogWhereUniqueInput
  }

  /**
   * LuckySpinLog deleteMany
   */
  export type LuckySpinLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LuckySpinLogs to delete
     */
    where?: LuckySpinLogWhereInput
    /**
     * Limit how many LuckySpinLogs to delete.
     */
    limit?: number
  }

  /**
   * LuckySpinLog without action
   */
  export type LuckySpinLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LuckySpinLog
     */
    select?: LuckySpinLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LuckySpinLog
     */
    omit?: LuckySpinLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LuckySpinLogInclude<ExtArgs> | null
  }


  /**
   * Model OfferClaimLog
   */

  export type AggregateOfferClaimLog = {
    _count: OfferClaimLogCountAggregateOutputType | null
    _avg: OfferClaimLogAvgAggregateOutputType | null
    _sum: OfferClaimLogSumAggregateOutputType | null
    _min: OfferClaimLogMinAggregateOutputType | null
    _max: OfferClaimLogMaxAggregateOutputType | null
  }

  export type OfferClaimLogAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type OfferClaimLogSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type OfferClaimLogMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    offer_code: $Enums.OfferCode | null
    createdAt: Date | null
  }

  export type OfferClaimLogMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    offer_code: $Enums.OfferCode | null
    createdAt: Date | null
  }

  export type OfferClaimLogCountAggregateOutputType = {
    id: number
    user_id: number
    offer_code: number
    createdAt: number
    _all: number
  }


  export type OfferClaimLogAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type OfferClaimLogSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type OfferClaimLogMinAggregateInputType = {
    id?: true
    user_id?: true
    offer_code?: true
    createdAt?: true
  }

  export type OfferClaimLogMaxAggregateInputType = {
    id?: true
    user_id?: true
    offer_code?: true
    createdAt?: true
  }

  export type OfferClaimLogCountAggregateInputType = {
    id?: true
    user_id?: true
    offer_code?: true
    createdAt?: true
    _all?: true
  }

  export type OfferClaimLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferClaimLog to aggregate.
     */
    where?: OfferClaimLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferClaimLogs to fetch.
     */
    orderBy?: OfferClaimLogOrderByWithRelationInput | OfferClaimLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferClaimLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferClaimLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferClaimLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OfferClaimLogs
    **/
    _count?: true | OfferClaimLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferClaimLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferClaimLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferClaimLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferClaimLogMaxAggregateInputType
  }

  export type GetOfferClaimLogAggregateType<T extends OfferClaimLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOfferClaimLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOfferClaimLog[P]>
      : GetScalarType<T[P], AggregateOfferClaimLog[P]>
  }




  export type OfferClaimLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferClaimLogWhereInput
    orderBy?: OfferClaimLogOrderByWithAggregationInput | OfferClaimLogOrderByWithAggregationInput[]
    by: OfferClaimLogScalarFieldEnum[] | OfferClaimLogScalarFieldEnum
    having?: OfferClaimLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferClaimLogCountAggregateInputType | true
    _avg?: OfferClaimLogAvgAggregateInputType
    _sum?: OfferClaimLogSumAggregateInputType
    _min?: OfferClaimLogMinAggregateInputType
    _max?: OfferClaimLogMaxAggregateInputType
  }

  export type OfferClaimLogGroupByOutputType = {
    id: number
    user_id: number
    offer_code: $Enums.OfferCode
    createdAt: Date
    _count: OfferClaimLogCountAggregateOutputType | null
    _avg: OfferClaimLogAvgAggregateOutputType | null
    _sum: OfferClaimLogSumAggregateOutputType | null
    _min: OfferClaimLogMinAggregateOutputType | null
    _max: OfferClaimLogMaxAggregateOutputType | null
  }

  type GetOfferClaimLogGroupByPayload<T extends OfferClaimLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferClaimLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferClaimLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferClaimLogGroupByOutputType[P]>
            : GetScalarType<T[P], OfferClaimLogGroupByOutputType[P]>
        }
      >
    >


  export type OfferClaimLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    offer_code?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerClaimLog"]>

  export type OfferClaimLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    offer_code?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerClaimLog"]>

  export type OfferClaimLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    offer_code?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offerClaimLog"]>

  export type OfferClaimLogSelectScalar = {
    id?: boolean
    user_id?: boolean
    offer_code?: boolean
    createdAt?: boolean
  }

  export type OfferClaimLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "offer_code" | "createdAt", ExtArgs["result"]["offerClaimLog"]>
  export type OfferClaimLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfferClaimLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfferClaimLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OfferClaimLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OfferClaimLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      offer_code: $Enums.OfferCode
      createdAt: Date
    }, ExtArgs["result"]["offerClaimLog"]>
    composites: {}
  }

  type OfferClaimLogGetPayload<S extends boolean | null | undefined | OfferClaimLogDefaultArgs> = $Result.GetResult<Prisma.$OfferClaimLogPayload, S>

  type OfferClaimLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferClaimLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferClaimLogCountAggregateInputType | true
    }

  export interface OfferClaimLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OfferClaimLog'], meta: { name: 'OfferClaimLog' } }
    /**
     * Find zero or one OfferClaimLog that matches the filter.
     * @param {OfferClaimLogFindUniqueArgs} args - Arguments to find a OfferClaimLog
     * @example
     * // Get one OfferClaimLog
     * const offerClaimLog = await prisma.offerClaimLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferClaimLogFindUniqueArgs>(args: SelectSubset<T, OfferClaimLogFindUniqueArgs<ExtArgs>>): Prisma__OfferClaimLogClient<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OfferClaimLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferClaimLogFindUniqueOrThrowArgs} args - Arguments to find a OfferClaimLog
     * @example
     * // Get one OfferClaimLog
     * const offerClaimLog = await prisma.offerClaimLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferClaimLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferClaimLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClaimLogClient<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferClaimLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferClaimLogFindFirstArgs} args - Arguments to find a OfferClaimLog
     * @example
     * // Get one OfferClaimLog
     * const offerClaimLog = await prisma.offerClaimLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferClaimLogFindFirstArgs>(args?: SelectSubset<T, OfferClaimLogFindFirstArgs<ExtArgs>>): Prisma__OfferClaimLogClient<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OfferClaimLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferClaimLogFindFirstOrThrowArgs} args - Arguments to find a OfferClaimLog
     * @example
     * // Get one OfferClaimLog
     * const offerClaimLog = await prisma.offerClaimLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferClaimLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferClaimLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClaimLogClient<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OfferClaimLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferClaimLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfferClaimLogs
     * const offerClaimLogs = await prisma.offerClaimLog.findMany()
     * 
     * // Get first 10 OfferClaimLogs
     * const offerClaimLogs = await prisma.offerClaimLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerClaimLogWithIdOnly = await prisma.offerClaimLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferClaimLogFindManyArgs>(args?: SelectSubset<T, OfferClaimLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OfferClaimLog.
     * @param {OfferClaimLogCreateArgs} args - Arguments to create a OfferClaimLog.
     * @example
     * // Create one OfferClaimLog
     * const OfferClaimLog = await prisma.offerClaimLog.create({
     *   data: {
     *     // ... data to create a OfferClaimLog
     *   }
     * })
     * 
     */
    create<T extends OfferClaimLogCreateArgs>(args: SelectSubset<T, OfferClaimLogCreateArgs<ExtArgs>>): Prisma__OfferClaimLogClient<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OfferClaimLogs.
     * @param {OfferClaimLogCreateManyArgs} args - Arguments to create many OfferClaimLogs.
     * @example
     * // Create many OfferClaimLogs
     * const offerClaimLog = await prisma.offerClaimLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferClaimLogCreateManyArgs>(args?: SelectSubset<T, OfferClaimLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OfferClaimLogs and returns the data saved in the database.
     * @param {OfferClaimLogCreateManyAndReturnArgs} args - Arguments to create many OfferClaimLogs.
     * @example
     * // Create many OfferClaimLogs
     * const offerClaimLog = await prisma.offerClaimLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OfferClaimLogs and only return the `id`
     * const offerClaimLogWithIdOnly = await prisma.offerClaimLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferClaimLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferClaimLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OfferClaimLog.
     * @param {OfferClaimLogDeleteArgs} args - Arguments to delete one OfferClaimLog.
     * @example
     * // Delete one OfferClaimLog
     * const OfferClaimLog = await prisma.offerClaimLog.delete({
     *   where: {
     *     // ... filter to delete one OfferClaimLog
     *   }
     * })
     * 
     */
    delete<T extends OfferClaimLogDeleteArgs>(args: SelectSubset<T, OfferClaimLogDeleteArgs<ExtArgs>>): Prisma__OfferClaimLogClient<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OfferClaimLog.
     * @param {OfferClaimLogUpdateArgs} args - Arguments to update one OfferClaimLog.
     * @example
     * // Update one OfferClaimLog
     * const offerClaimLog = await prisma.offerClaimLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferClaimLogUpdateArgs>(args: SelectSubset<T, OfferClaimLogUpdateArgs<ExtArgs>>): Prisma__OfferClaimLogClient<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OfferClaimLogs.
     * @param {OfferClaimLogDeleteManyArgs} args - Arguments to filter OfferClaimLogs to delete.
     * @example
     * // Delete a few OfferClaimLogs
     * const { count } = await prisma.offerClaimLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferClaimLogDeleteManyArgs>(args?: SelectSubset<T, OfferClaimLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferClaimLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferClaimLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfferClaimLogs
     * const offerClaimLog = await prisma.offerClaimLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferClaimLogUpdateManyArgs>(args: SelectSubset<T, OfferClaimLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OfferClaimLogs and returns the data updated in the database.
     * @param {OfferClaimLogUpdateManyAndReturnArgs} args - Arguments to update many OfferClaimLogs.
     * @example
     * // Update many OfferClaimLogs
     * const offerClaimLog = await prisma.offerClaimLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OfferClaimLogs and only return the `id`
     * const offerClaimLogWithIdOnly = await prisma.offerClaimLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfferClaimLogUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferClaimLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OfferClaimLog.
     * @param {OfferClaimLogUpsertArgs} args - Arguments to update or create a OfferClaimLog.
     * @example
     * // Update or create a OfferClaimLog
     * const offerClaimLog = await prisma.offerClaimLog.upsert({
     *   create: {
     *     // ... data to create a OfferClaimLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfferClaimLog we want to update
     *   }
     * })
     */
    upsert<T extends OfferClaimLogUpsertArgs>(args: SelectSubset<T, OfferClaimLogUpsertArgs<ExtArgs>>): Prisma__OfferClaimLogClient<$Result.GetResult<Prisma.$OfferClaimLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OfferClaimLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferClaimLogCountArgs} args - Arguments to filter OfferClaimLogs to count.
     * @example
     * // Count the number of OfferClaimLogs
     * const count = await prisma.offerClaimLog.count({
     *   where: {
     *     // ... the filter for the OfferClaimLogs we want to count
     *   }
     * })
    **/
    count<T extends OfferClaimLogCountArgs>(
      args?: Subset<T, OfferClaimLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferClaimLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OfferClaimLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferClaimLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfferClaimLogAggregateArgs>(args: Subset<T, OfferClaimLogAggregateArgs>): Prisma.PrismaPromise<GetOfferClaimLogAggregateType<T>>

    /**
     * Group by OfferClaimLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferClaimLogGroupByArgs} args - Group by arguments.
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
      T extends OfferClaimLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferClaimLogGroupByArgs['orderBy'] }
        : { orderBy?: OfferClaimLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OfferClaimLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferClaimLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OfferClaimLog model
   */
  readonly fields: OfferClaimLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OfferClaimLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClaimLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OfferClaimLog model
   */
  interface OfferClaimLogFieldRefs {
    readonly id: FieldRef<"OfferClaimLog", 'Int'>
    readonly user_id: FieldRef<"OfferClaimLog", 'Int'>
    readonly offer_code: FieldRef<"OfferClaimLog", 'OfferCode'>
    readonly createdAt: FieldRef<"OfferClaimLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OfferClaimLog findUnique
   */
  export type OfferClaimLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    /**
     * Filter, which OfferClaimLog to fetch.
     */
    where: OfferClaimLogWhereUniqueInput
  }

  /**
   * OfferClaimLog findUniqueOrThrow
   */
  export type OfferClaimLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    /**
     * Filter, which OfferClaimLog to fetch.
     */
    where: OfferClaimLogWhereUniqueInput
  }

  /**
   * OfferClaimLog findFirst
   */
  export type OfferClaimLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    /**
     * Filter, which OfferClaimLog to fetch.
     */
    where?: OfferClaimLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferClaimLogs to fetch.
     */
    orderBy?: OfferClaimLogOrderByWithRelationInput | OfferClaimLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferClaimLogs.
     */
    cursor?: OfferClaimLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferClaimLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferClaimLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferClaimLogs.
     */
    distinct?: OfferClaimLogScalarFieldEnum | OfferClaimLogScalarFieldEnum[]
  }

  /**
   * OfferClaimLog findFirstOrThrow
   */
  export type OfferClaimLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    /**
     * Filter, which OfferClaimLog to fetch.
     */
    where?: OfferClaimLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferClaimLogs to fetch.
     */
    orderBy?: OfferClaimLogOrderByWithRelationInput | OfferClaimLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OfferClaimLogs.
     */
    cursor?: OfferClaimLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferClaimLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferClaimLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OfferClaimLogs.
     */
    distinct?: OfferClaimLogScalarFieldEnum | OfferClaimLogScalarFieldEnum[]
  }

  /**
   * OfferClaimLog findMany
   */
  export type OfferClaimLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    /**
     * Filter, which OfferClaimLogs to fetch.
     */
    where?: OfferClaimLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OfferClaimLogs to fetch.
     */
    orderBy?: OfferClaimLogOrderByWithRelationInput | OfferClaimLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OfferClaimLogs.
     */
    cursor?: OfferClaimLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OfferClaimLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OfferClaimLogs.
     */
    skip?: number
    distinct?: OfferClaimLogScalarFieldEnum | OfferClaimLogScalarFieldEnum[]
  }

  /**
   * OfferClaimLog create
   */
  export type OfferClaimLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    /**
     * The data needed to create a OfferClaimLog.
     */
    data: XOR<OfferClaimLogCreateInput, OfferClaimLogUncheckedCreateInput>
  }

  /**
   * OfferClaimLog createMany
   */
  export type OfferClaimLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfferClaimLogs.
     */
    data: OfferClaimLogCreateManyInput | OfferClaimLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OfferClaimLog createManyAndReturn
   */
  export type OfferClaimLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * The data used to create many OfferClaimLogs.
     */
    data: OfferClaimLogCreateManyInput | OfferClaimLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferClaimLog update
   */
  export type OfferClaimLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    /**
     * The data needed to update a OfferClaimLog.
     */
    data: XOR<OfferClaimLogUpdateInput, OfferClaimLogUncheckedUpdateInput>
    /**
     * Choose, which OfferClaimLog to update.
     */
    where: OfferClaimLogWhereUniqueInput
  }

  /**
   * OfferClaimLog updateMany
   */
  export type OfferClaimLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OfferClaimLogs.
     */
    data: XOR<OfferClaimLogUpdateManyMutationInput, OfferClaimLogUncheckedUpdateManyInput>
    /**
     * Filter which OfferClaimLogs to update
     */
    where?: OfferClaimLogWhereInput
    /**
     * Limit how many OfferClaimLogs to update.
     */
    limit?: number
  }

  /**
   * OfferClaimLog updateManyAndReturn
   */
  export type OfferClaimLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * The data used to update OfferClaimLogs.
     */
    data: XOR<OfferClaimLogUpdateManyMutationInput, OfferClaimLogUncheckedUpdateManyInput>
    /**
     * Filter which OfferClaimLogs to update
     */
    where?: OfferClaimLogWhereInput
    /**
     * Limit how many OfferClaimLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OfferClaimLog upsert
   */
  export type OfferClaimLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    /**
     * The filter to search for the OfferClaimLog to update in case it exists.
     */
    where: OfferClaimLogWhereUniqueInput
    /**
     * In case the OfferClaimLog found by the `where` argument doesn't exist, create a new OfferClaimLog with this data.
     */
    create: XOR<OfferClaimLogCreateInput, OfferClaimLogUncheckedCreateInput>
    /**
     * In case the OfferClaimLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferClaimLogUpdateInput, OfferClaimLogUncheckedUpdateInput>
  }

  /**
   * OfferClaimLog delete
   */
  export type OfferClaimLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
    /**
     * Filter which OfferClaimLog to delete.
     */
    where: OfferClaimLogWhereUniqueInput
  }

  /**
   * OfferClaimLog deleteMany
   */
  export type OfferClaimLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OfferClaimLogs to delete
     */
    where?: OfferClaimLogWhereInput
    /**
     * Limit how many OfferClaimLogs to delete.
     */
    limit?: number
  }

  /**
   * OfferClaimLog without action
   */
  export type OfferClaimLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfferClaimLog
     */
    select?: OfferClaimLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OfferClaimLog
     */
    omit?: OfferClaimLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferClaimLogInclude<ExtArgs> | null
  }


  /**
   * Model AdminUser
   */

  export type AggregateAdminUser = {
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  export type AdminUserAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminUserSumAggregateOutputType = {
    id: number | null
  }

  export type AdminUserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    position: $Enums.PositionEnum | null
    createdAt: Date | null
  }

  export type AdminUserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    position: $Enums.PositionEnum | null
    createdAt: Date | null
  }

  export type AdminUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    position: number
    createdAt: number
    _all: number
  }


  export type AdminUserAvgAggregateInputType = {
    id?: true
  }

  export type AdminUserSumAggregateInputType = {
    id?: true
  }

  export type AdminUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    position?: true
    createdAt?: true
  }

  export type AdminUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    position?: true
    createdAt?: true
  }

  export type AdminUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    position?: true
    createdAt?: true
    _all?: true
  }

  export type AdminUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUser to aggregate.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdminUsers
    **/
    _count?: true | AdminUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminUserMaxAggregateInputType
  }

  export type GetAdminUserAggregateType<T extends AdminUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAdminUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdminUser[P]>
      : GetScalarType<T[P], AggregateAdminUser[P]>
  }




  export type AdminUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminUserWhereInput
    orderBy?: AdminUserOrderByWithAggregationInput | AdminUserOrderByWithAggregationInput[]
    by: AdminUserScalarFieldEnum[] | AdminUserScalarFieldEnum
    having?: AdminUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminUserCountAggregateInputType | true
    _avg?: AdminUserAvgAggregateInputType
    _sum?: AdminUserSumAggregateInputType
    _min?: AdminUserMinAggregateInputType
    _max?: AdminUserMaxAggregateInputType
  }

  export type AdminUserGroupByOutputType = {
    id: number
    username: string
    password: string
    position: $Enums.PositionEnum
    createdAt: Date
    _count: AdminUserCountAggregateOutputType | null
    _avg: AdminUserAvgAggregateOutputType | null
    _sum: AdminUserSumAggregateOutputType | null
    _min: AdminUserMinAggregateOutputType | null
    _max: AdminUserMaxAggregateOutputType | null
  }

  type GetAdminUserGroupByPayload<T extends AdminUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
            : GetScalarType<T[P], AdminUserGroupByOutputType[P]>
        }
      >
    >


  export type AdminUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    position?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    position?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    position?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["adminUser"]>

  export type AdminUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    position?: boolean
    createdAt?: boolean
  }

  export type AdminUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "position" | "createdAt", ExtArgs["result"]["adminUser"]>

  export type $AdminUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdminUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      position: $Enums.PositionEnum
      createdAt: Date
    }, ExtArgs["result"]["adminUser"]>
    composites: {}
  }

  type AdminUserGetPayload<S extends boolean | null | undefined | AdminUserDefaultArgs> = $Result.GetResult<Prisma.$AdminUserPayload, S>

  type AdminUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminUserCountAggregateInputType | true
    }

  export interface AdminUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdminUser'], meta: { name: 'AdminUser' } }
    /**
     * Find zero or one AdminUser that matches the filter.
     * @param {AdminUserFindUniqueArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminUserFindUniqueArgs>(args: SelectSubset<T, AdminUserFindUniqueArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdminUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminUserFindUniqueOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminUserFindFirstArgs>(args?: SelectSubset<T, AdminUserFindFirstArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdminUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindFirstOrThrowArgs} args - Arguments to find a AdminUser
     * @example
     * // Get one AdminUser
     * const adminUser = await prisma.adminUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdminUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminUsers
     * const adminUsers = await prisma.adminUser.findMany()
     * 
     * // Get first 10 AdminUsers
     * const adminUsers = await prisma.adminUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminUserFindManyArgs>(args?: SelectSubset<T, AdminUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdminUser.
     * @param {AdminUserCreateArgs} args - Arguments to create a AdminUser.
     * @example
     * // Create one AdminUser
     * const AdminUser = await prisma.adminUser.create({
     *   data: {
     *     // ... data to create a AdminUser
     *   }
     * })
     * 
     */
    create<T extends AdminUserCreateArgs>(args: SelectSubset<T, AdminUserCreateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdminUsers.
     * @param {AdminUserCreateManyArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminUserCreateManyArgs>(args?: SelectSubset<T, AdminUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdminUsers and returns the data saved in the database.
     * @param {AdminUserCreateManyAndReturnArgs} args - Arguments to create many AdminUsers.
     * @example
     * // Create many AdminUsers
     * const adminUser = await prisma.adminUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdminUser.
     * @param {AdminUserDeleteArgs} args - Arguments to delete one AdminUser.
     * @example
     * // Delete one AdminUser
     * const AdminUser = await prisma.adminUser.delete({
     *   where: {
     *     // ... filter to delete one AdminUser
     *   }
     * })
     * 
     */
    delete<T extends AdminUserDeleteArgs>(args: SelectSubset<T, AdminUserDeleteArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdminUser.
     * @param {AdminUserUpdateArgs} args - Arguments to update one AdminUser.
     * @example
     * // Update one AdminUser
     * const adminUser = await prisma.adminUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUserUpdateArgs>(args: SelectSubset<T, AdminUserUpdateArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdminUsers.
     * @param {AdminUserDeleteManyArgs} args - Arguments to filter AdminUsers to delete.
     * @example
     * // Delete a few AdminUsers
     * const { count } = await prisma.adminUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminUserDeleteManyArgs>(args?: SelectSubset<T, AdminUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUserUpdateManyArgs>(args: SelectSubset<T, AdminUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdminUsers and returns the data updated in the database.
     * @param {AdminUserUpdateManyAndReturnArgs} args - Arguments to update many AdminUsers.
     * @example
     * // Update many AdminUsers
     * const adminUser = await prisma.adminUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdminUsers and only return the `id`
     * const adminUserWithIdOnly = await prisma.adminUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdminUser.
     * @param {AdminUserUpsertArgs} args - Arguments to update or create a AdminUser.
     * @example
     * // Update or create a AdminUser
     * const adminUser = await prisma.adminUser.upsert({
     *   create: {
     *     // ... data to create a AdminUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminUser we want to update
     *   }
     * })
     */
    upsert<T extends AdminUserUpsertArgs>(args: SelectSubset<T, AdminUserUpsertArgs<ExtArgs>>): Prisma__AdminUserClient<$Result.GetResult<Prisma.$AdminUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdminUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserCountArgs} args - Arguments to filter AdminUsers to count.
     * @example
     * // Count the number of AdminUsers
     * const count = await prisma.adminUser.count({
     *   where: {
     *     // ... the filter for the AdminUsers we want to count
     *   }
     * })
    **/
    count<T extends AdminUserCountArgs>(
      args?: Subset<T, AdminUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminUserAggregateArgs>(args: Subset<T, AdminUserAggregateArgs>): Prisma.PrismaPromise<GetAdminUserAggregateType<T>>

    /**
     * Group by AdminUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUserGroupByArgs} args - Group by arguments.
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
      T extends AdminUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminUserGroupByArgs['orderBy'] }
        : { orderBy?: AdminUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdminUser model
   */
  readonly fields: AdminUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdminUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AdminUser model
   */
  interface AdminUserFieldRefs {
    readonly id: FieldRef<"AdminUser", 'Int'>
    readonly username: FieldRef<"AdminUser", 'String'>
    readonly password: FieldRef<"AdminUser", 'String'>
    readonly position: FieldRef<"AdminUser", 'PositionEnum'>
    readonly createdAt: FieldRef<"AdminUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdminUser findUnique
   */
  export type AdminUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findUniqueOrThrow
   */
  export type AdminUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser findFirst
   */
  export type AdminUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findFirstOrThrow
   */
  export type AdminUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUser to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdminUsers.
     */
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser findMany
   */
  export type AdminUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter, which AdminUsers to fetch.
     */
    where?: AdminUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdminUsers to fetch.
     */
    orderBy?: AdminUserOrderByWithRelationInput | AdminUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdminUsers.
     */
    cursor?: AdminUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdminUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdminUsers.
     */
    skip?: number
    distinct?: AdminUserScalarFieldEnum | AdminUserScalarFieldEnum[]
  }

  /**
   * AdminUser create
   */
  export type AdminUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to create a AdminUser.
     */
    data: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
  }

  /**
   * AdminUser createMany
   */
  export type AdminUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser createManyAndReturn
   */
  export type AdminUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to create many AdminUsers.
     */
    data: AdminUserCreateManyInput | AdminUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdminUser update
   */
  export type AdminUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data needed to update a AdminUser.
     */
    data: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
    /**
     * Choose, which AdminUser to update.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser updateMany
   */
  export type AdminUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser updateManyAndReturn
   */
  export type AdminUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The data used to update AdminUsers.
     */
    data: XOR<AdminUserUpdateManyMutationInput, AdminUserUncheckedUpdateManyInput>
    /**
     * Filter which AdminUsers to update
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to update.
     */
    limit?: number
  }

  /**
   * AdminUser upsert
   */
  export type AdminUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * The filter to search for the AdminUser to update in case it exists.
     */
    where: AdminUserWhereUniqueInput
    /**
     * In case the AdminUser found by the `where` argument doesn't exist, create a new AdminUser with this data.
     */
    create: XOR<AdminUserCreateInput, AdminUserUncheckedCreateInput>
    /**
     * In case the AdminUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUserUpdateInput, AdminUserUncheckedUpdateInput>
  }

  /**
   * AdminUser delete
   */
  export type AdminUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
    /**
     * Filter which AdminUser to delete.
     */
    where: AdminUserWhereUniqueInput
  }

  /**
   * AdminUser deleteMany
   */
  export type AdminUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdminUsers to delete
     */
    where?: AdminUserWhereInput
    /**
     * Limit how many AdminUsers to delete.
     */
    limit?: number
  }

  /**
   * AdminUser without action
   */
  export type AdminUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminUser
     */
    select?: AdminUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdminUser
     */
    omit?: AdminUserOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    status: 'status',
    phone_number: 'phone_number',
    e_wallet_number: 'e_wallet_number',
    name_in_wallet: 'name_in_wallet',
    user_code: 'user_code',
    recovery_code: 'recovery_code',
    two_fa_secret: 'two_fa_secret',
    is_2fa_verified: 'is_2fa_verified',
    password: 'password',
    fp_id: 'fp_id',
    ip: 'ip',
    lucky_spin: 'lucky_spin',
    balance: 'balance',
    turn_over: 'turn_over',
    invited_by: 'invited_by',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpRecordScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    otp: 'otp',
    fingerprint_id: 'fingerprint_id',
    used: 'used',
    createdAt: 'createdAt'
  };

  export type OtpRecordScalarFieldEnum = (typeof OtpRecordScalarFieldEnum)[keyof typeof OtpRecordScalarFieldEnum]


  export const FormSubmissionRecordScalarFieldEnum: {
    id: 'id',
    req_route: 'req_route',
    fp_id: 'fp_id',
    ip: 'ip',
    createdAt: 'createdAt'
  };

  export type FormSubmissionRecordScalarFieldEnum = (typeof FormSubmissionRecordScalarFieldEnum)[keyof typeof FormSubmissionRecordScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    type: 'type',
    trx_id: 'trx_id',
    sign: 'sign',
    status: 'status',
    user_id: 'user_id',
    method: 'method',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const GameTransactionScalarFieldEnum: {
    id: 'id',
    trans_id: 'trans_id',
    type: 'type',
    amount: 'amount',
    game_code: 'game_code',
    user_id: 'user_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameTransactionScalarFieldEnum = (typeof GameTransactionScalarFieldEnum)[keyof typeof GameTransactionScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    sender: 'sender',
    receiver: 'receiver',
    content: 'content',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt',
    seen: 'seen'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    code: 'code',
    amount: 'amount',
    collected: 'collected',
    collected_at: 'collected_at',
    message: 'message',
    collected_by: 'collected_by',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const BonusListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    deposit: 'deposit',
    bonus: 'bonus',
    turn_over: 'turn_over',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BonusListScalarFieldEnum = (typeof BonusListScalarFieldEnum)[keyof typeof BonusListScalarFieldEnum]


  export const CommissionListScalarFieldEnum: {
    id: 'id',
    deposit: 'deposit',
    bet: 'bet',
    salary: 'salary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommissionListScalarFieldEnum = (typeof CommissionListScalarFieldEnum)[keyof typeof CommissionListScalarFieldEnum]


  export const LuckySpinLogScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    winning_index: 'winning_index',
    prize_label: 'prize_label',
    createdAt: 'createdAt'
  };

  export type LuckySpinLogScalarFieldEnum = (typeof LuckySpinLogScalarFieldEnum)[keyof typeof LuckySpinLogScalarFieldEnum]


  export const OfferClaimLogScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    offer_code: 'offer_code',
    createdAt: 'createdAt'
  };

  export type OfferClaimLogScalarFieldEnum = (typeof OfferClaimLogScalarFieldEnum)[keyof typeof OfferClaimLogScalarFieldEnum]


  export const AdminUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    position: 'position',
    createdAt: 'createdAt'
  };

  export type AdminUserScalarFieldEnum = (typeof AdminUserScalarFieldEnum)[keyof typeof AdminUserScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    


  /**
   * Reference to a field of type 'OfferCode'
   */
  export type EnumOfferCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferCode'>
    


  /**
   * Reference to a field of type 'OfferCode[]'
   */
  export type ListEnumOfferCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OfferCode[]'>
    


  /**
   * Reference to a field of type 'PositionEnum'
   */
  export type EnumPositionEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PositionEnum'>
    


  /**
   * Reference to a field of type 'PositionEnum[]'
   */
  export type ListEnumPositionEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PositionEnum[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    status?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    e_wallet_number?: StringNullableFilter<"User"> | string | null
    name_in_wallet?: StringNullableFilter<"User"> | string | null
    user_code?: StringNullableFilter<"User"> | string | null
    recovery_code?: StringNullableFilter<"User"> | string | null
    two_fa_secret?: StringNullableFilter<"User"> | string | null
    is_2fa_verified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    fp_id?: StringFilter<"User"> | string
    ip?: StringFilter<"User"> | string
    lucky_spin?: IntFilter<"User"> | number
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    invited_by?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    game_transactions?: GameTransactionListRelationFilter
    transactions?: TransactionListRelationFilter
    otp_records?: OtpRecordListRelationFilter
    vouchers?: VoucherListRelationFilter
    lucky_spin_logs?: LuckySpinLogListRelationFilter
    offer_claim_logs?: OfferClaimLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    e_wallet_number?: SortOrderInput | SortOrder
    name_in_wallet?: SortOrderInput | SortOrder
    user_code?: SortOrderInput | SortOrder
    recovery_code?: SortOrderInput | SortOrder
    two_fa_secret?: SortOrderInput | SortOrder
    is_2fa_verified?: SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    lucky_spin?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    game_transactions?: GameTransactionOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    otp_records?: OtpRecordOrderByRelationAggregateInput
    vouchers?: VoucherOrderByRelationAggregateInput
    lucky_spin_logs?: LuckySpinLogOrderByRelationAggregateInput
    offer_claim_logs?: OfferClaimLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    status?: StringFilter<"User"> | string
    e_wallet_number?: StringNullableFilter<"User"> | string | null
    name_in_wallet?: StringNullableFilter<"User"> | string | null
    user_code?: StringNullableFilter<"User"> | string | null
    recovery_code?: StringNullableFilter<"User"> | string | null
    two_fa_secret?: StringNullableFilter<"User"> | string | null
    is_2fa_verified?: BoolFilter<"User"> | boolean
    password?: StringFilter<"User"> | string
    fp_id?: StringFilter<"User"> | string
    ip?: StringFilter<"User"> | string
    lucky_spin?: IntFilter<"User"> | number
    balance?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFilter<"User"> | Decimal | DecimalJsLike | number | string
    invited_by?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    game_transactions?: GameTransactionListRelationFilter
    transactions?: TransactionListRelationFilter
    otp_records?: OtpRecordListRelationFilter
    vouchers?: VoucherListRelationFilter
    lucky_spin_logs?: LuckySpinLogListRelationFilter
    offer_claim_logs?: OfferClaimLogListRelationFilter
  }, "id" | "phone_number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    e_wallet_number?: SortOrderInput | SortOrder
    name_in_wallet?: SortOrderInput | SortOrder
    user_code?: SortOrderInput | SortOrder
    recovery_code?: SortOrderInput | SortOrder
    two_fa_secret?: SortOrderInput | SortOrder
    is_2fa_verified?: SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    lucky_spin?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    status?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    e_wallet_number?: StringNullableWithAggregatesFilter<"User"> | string | null
    name_in_wallet?: StringNullableWithAggregatesFilter<"User"> | string | null
    user_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    recovery_code?: StringNullableWithAggregatesFilter<"User"> | string | null
    two_fa_secret?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_2fa_verified?: BoolWithAggregatesFilter<"User"> | boolean
    password?: StringWithAggregatesFilter<"User"> | string
    fp_id?: StringWithAggregatesFilter<"User"> | string
    ip?: StringWithAggregatesFilter<"User"> | string
    lucky_spin?: IntWithAggregatesFilter<"User"> | number
    balance?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalWithAggregatesFilter<"User"> | Decimal | DecimalJsLike | number | string
    invited_by?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpRecordWhereInput = {
    AND?: OtpRecordWhereInput | OtpRecordWhereInput[]
    OR?: OtpRecordWhereInput[]
    NOT?: OtpRecordWhereInput | OtpRecordWhereInput[]
    id?: IntFilter<"OtpRecord"> | number
    phone?: StringFilter<"OtpRecord"> | string
    otp?: StringFilter<"OtpRecord"> | string
    fingerprint_id?: StringNullableFilter<"OtpRecord"> | string | null
    used?: BoolFilter<"OtpRecord"> | boolean
    createdAt?: DateTimeFilter<"OtpRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OtpRecordOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    fingerprint_id?: SortOrderInput | SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OtpRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OtpRecordWhereInput | OtpRecordWhereInput[]
    OR?: OtpRecordWhereInput[]
    NOT?: OtpRecordWhereInput | OtpRecordWhereInput[]
    phone?: StringFilter<"OtpRecord"> | string
    otp?: StringFilter<"OtpRecord"> | string
    fingerprint_id?: StringNullableFilter<"OtpRecord"> | string | null
    used?: BoolFilter<"OtpRecord"> | boolean
    createdAt?: DateTimeFilter<"OtpRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OtpRecordOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    fingerprint_id?: SortOrderInput | SortOrder
    used?: SortOrder
    createdAt?: SortOrder
    _count?: OtpRecordCountOrderByAggregateInput
    _avg?: OtpRecordAvgOrderByAggregateInput
    _max?: OtpRecordMaxOrderByAggregateInput
    _min?: OtpRecordMinOrderByAggregateInput
    _sum?: OtpRecordSumOrderByAggregateInput
  }

  export type OtpRecordScalarWhereWithAggregatesInput = {
    AND?: OtpRecordScalarWhereWithAggregatesInput | OtpRecordScalarWhereWithAggregatesInput[]
    OR?: OtpRecordScalarWhereWithAggregatesInput[]
    NOT?: OtpRecordScalarWhereWithAggregatesInput | OtpRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OtpRecord"> | number
    phone?: StringWithAggregatesFilter<"OtpRecord"> | string
    otp?: StringWithAggregatesFilter<"OtpRecord"> | string
    fingerprint_id?: StringNullableWithAggregatesFilter<"OtpRecord"> | string | null
    used?: BoolWithAggregatesFilter<"OtpRecord"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OtpRecord"> | Date | string
  }

  export type FormSubmissionRecordWhereInput = {
    AND?: FormSubmissionRecordWhereInput | FormSubmissionRecordWhereInput[]
    OR?: FormSubmissionRecordWhereInput[]
    NOT?: FormSubmissionRecordWhereInput | FormSubmissionRecordWhereInput[]
    id?: IntFilter<"FormSubmissionRecord"> | number
    req_route?: StringFilter<"FormSubmissionRecord"> | string
    fp_id?: StringFilter<"FormSubmissionRecord"> | string
    ip?: StringFilter<"FormSubmissionRecord"> | string
    createdAt?: DateTimeFilter<"FormSubmissionRecord"> | Date | string
  }

  export type FormSubmissionRecordOrderByWithRelationInput = {
    id?: SortOrder
    req_route?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSubmissionRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormSubmissionRecordWhereInput | FormSubmissionRecordWhereInput[]
    OR?: FormSubmissionRecordWhereInput[]
    NOT?: FormSubmissionRecordWhereInput | FormSubmissionRecordWhereInput[]
    req_route?: StringFilter<"FormSubmissionRecord"> | string
    fp_id?: StringFilter<"FormSubmissionRecord"> | string
    ip?: StringFilter<"FormSubmissionRecord"> | string
    createdAt?: DateTimeFilter<"FormSubmissionRecord"> | Date | string
  }, "id">

  export type FormSubmissionRecordOrderByWithAggregationInput = {
    id?: SortOrder
    req_route?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    _count?: FormSubmissionRecordCountOrderByAggregateInput
    _avg?: FormSubmissionRecordAvgOrderByAggregateInput
    _max?: FormSubmissionRecordMaxOrderByAggregateInput
    _min?: FormSubmissionRecordMinOrderByAggregateInput
    _sum?: FormSubmissionRecordSumOrderByAggregateInput
  }

  export type FormSubmissionRecordScalarWhereWithAggregatesInput = {
    AND?: FormSubmissionRecordScalarWhereWithAggregatesInput | FormSubmissionRecordScalarWhereWithAggregatesInput[]
    OR?: FormSubmissionRecordScalarWhereWithAggregatesInput[]
    NOT?: FormSubmissionRecordScalarWhereWithAggregatesInput | FormSubmissionRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FormSubmissionRecord"> | number
    req_route?: StringWithAggregatesFilter<"FormSubmissionRecord"> | string
    fp_id?: StringWithAggregatesFilter<"FormSubmissionRecord"> | string
    ip?: StringWithAggregatesFilter<"FormSubmissionRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FormSubmissionRecord"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    trx_id?: StringNullableFilter<"Transaction"> | string | null
    sign?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    user_id?: IntFilter<"Transaction"> | number
    method?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrderInput | SortOrder
    sign?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    trx_id?: StringNullableFilter<"Transaction"> | string | null
    sign?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    user_id?: IntFilter<"Transaction"> | number
    method?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrderInput | SortOrder
    sign?: SortOrderInput | SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    trx_id?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    sign?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    status?: EnumTransactionStatusWithAggregatesFilter<"Transaction"> | $Enums.TransactionStatus
    user_id?: IntWithAggregatesFilter<"Transaction"> | number
    method?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type GameTransactionWhereInput = {
    AND?: GameTransactionWhereInput | GameTransactionWhereInput[]
    OR?: GameTransactionWhereInput[]
    NOT?: GameTransactionWhereInput | GameTransactionWhereInput[]
    id?: IntFilter<"GameTransaction"> | number
    trans_id?: StringFilter<"GameTransaction"> | string
    type?: StringFilter<"GameTransaction"> | string
    amount?: DecimalFilter<"GameTransaction"> | Decimal | DecimalJsLike | number | string
    game_code?: StringNullableFilter<"GameTransaction"> | string | null
    user_id?: IntFilter<"GameTransaction"> | number
    createdAt?: DateTimeFilter<"GameTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"GameTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GameTransactionOrderByWithRelationInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrderInput | SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GameTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    trans_id?: string
    AND?: GameTransactionWhereInput | GameTransactionWhereInput[]
    OR?: GameTransactionWhereInput[]
    NOT?: GameTransactionWhereInput | GameTransactionWhereInput[]
    type?: StringFilter<"GameTransaction"> | string
    amount?: DecimalFilter<"GameTransaction"> | Decimal | DecimalJsLike | number | string
    game_code?: StringNullableFilter<"GameTransaction"> | string | null
    user_id?: IntFilter<"GameTransaction"> | number
    createdAt?: DateTimeFilter<"GameTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"GameTransaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "trans_id">

  export type GameTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrderInput | SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameTransactionCountOrderByAggregateInput
    _avg?: GameTransactionAvgOrderByAggregateInput
    _max?: GameTransactionMaxOrderByAggregateInput
    _min?: GameTransactionMinOrderByAggregateInput
    _sum?: GameTransactionSumOrderByAggregateInput
  }

  export type GameTransactionScalarWhereWithAggregatesInput = {
    AND?: GameTransactionScalarWhereWithAggregatesInput | GameTransactionScalarWhereWithAggregatesInput[]
    OR?: GameTransactionScalarWhereWithAggregatesInput[]
    NOT?: GameTransactionScalarWhereWithAggregatesInput | GameTransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameTransaction"> | number
    trans_id?: StringWithAggregatesFilter<"GameTransaction"> | string
    type?: StringWithAggregatesFilter<"GameTransaction"> | string
    amount?: DecimalWithAggregatesFilter<"GameTransaction"> | Decimal | DecimalJsLike | number | string
    game_code?: StringNullableWithAggregatesFilter<"GameTransaction"> | string | null
    user_id?: IntWithAggregatesFilter<"GameTransaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameTransaction"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    sender?: StringFilter<"Message"> | string
    receiver?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    fileUrl?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    seen?: BoolFilter<"Message"> | boolean
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    sender?: StringFilter<"Message"> | string
    receiver?: StringFilter<"Message"> | string
    content?: StringNullableFilter<"Message"> | string | null
    fileUrl?: StringNullableFilter<"Message"> | string | null
    createdAt?: DateTimeFilter<"Message"> | Date | string
    seen?: BoolFilter<"Message"> | boolean
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrderInput | SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    sender?: StringWithAggregatesFilter<"Message"> | string
    receiver?: StringWithAggregatesFilter<"Message"> | string
    content?: StringNullableWithAggregatesFilter<"Message"> | string | null
    fileUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    seen?: BoolWithAggregatesFilter<"Message"> | boolean
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: IntFilter<"Voucher"> | number
    code?: StringFilter<"Voucher"> | string
    amount?: DecimalFilter<"Voucher"> | Decimal | DecimalJsLike | number | string
    collected?: BoolFilter<"Voucher"> | boolean
    collected_at?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    message?: StringNullableFilter<"Voucher"> | string | null
    collected_by?: IntNullableFilter<"Voucher"> | number | null
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    collected_by?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    code?: StringFilter<"Voucher"> | string
    amount?: DecimalFilter<"Voucher"> | Decimal | DecimalJsLike | number | string
    collected?: BoolFilter<"Voucher"> | boolean
    collected_at?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    message?: StringNullableFilter<"Voucher"> | string | null
    collected_by?: IntNullableFilter<"Voucher"> | number | null
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    collected_by?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Voucher"> | number
    code?: StringWithAggregatesFilter<"Voucher"> | string
    amount?: DecimalWithAggregatesFilter<"Voucher"> | Decimal | DecimalJsLike | number | string
    collected?: BoolWithAggregatesFilter<"Voucher"> | boolean
    collected_at?: DateTimeNullableWithAggregatesFilter<"Voucher"> | Date | string | null
    message?: StringNullableWithAggregatesFilter<"Voucher"> | string | null
    collected_by?: IntNullableWithAggregatesFilter<"Voucher"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
  }

  export type BonusListWhereInput = {
    AND?: BonusListWhereInput | BonusListWhereInput[]
    OR?: BonusListWhereInput[]
    NOT?: BonusListWhereInput | BonusListWhereInput[]
    id?: IntFilter<"BonusList"> | number
    name?: StringFilter<"BonusList"> | string
    deposit?: DecimalFilter<"BonusList"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFilter<"BonusList"> | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFilter<"BonusList"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"BonusList"> | Date | string
    updatedAt?: DateTimeFilter<"BonusList"> | Date | string
  }

  export type BonusListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    deposit?: SortOrder
    bonus?: SortOrder
    turn_over?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BonusListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BonusListWhereInput | BonusListWhereInput[]
    OR?: BonusListWhereInput[]
    NOT?: BonusListWhereInput | BonusListWhereInput[]
    name?: StringFilter<"BonusList"> | string
    deposit?: DecimalFilter<"BonusList"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFilter<"BonusList"> | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFilter<"BonusList"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"BonusList"> | Date | string
    updatedAt?: DateTimeFilter<"BonusList"> | Date | string
  }, "id">

  export type BonusListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    deposit?: SortOrder
    bonus?: SortOrder
    turn_over?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BonusListCountOrderByAggregateInput
    _avg?: BonusListAvgOrderByAggregateInput
    _max?: BonusListMaxOrderByAggregateInput
    _min?: BonusListMinOrderByAggregateInput
    _sum?: BonusListSumOrderByAggregateInput
  }

  export type BonusListScalarWhereWithAggregatesInput = {
    AND?: BonusListScalarWhereWithAggregatesInput | BonusListScalarWhereWithAggregatesInput[]
    OR?: BonusListScalarWhereWithAggregatesInput[]
    NOT?: BonusListScalarWhereWithAggregatesInput | BonusListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BonusList"> | number
    name?: StringWithAggregatesFilter<"BonusList"> | string
    deposit?: DecimalWithAggregatesFilter<"BonusList"> | Decimal | DecimalJsLike | number | string
    bonus?: DecimalWithAggregatesFilter<"BonusList"> | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalWithAggregatesFilter<"BonusList"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"BonusList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BonusList"> | Date | string
  }

  export type CommissionListWhereInput = {
    AND?: CommissionListWhereInput | CommissionListWhereInput[]
    OR?: CommissionListWhereInput[]
    NOT?: CommissionListWhereInput | CommissionListWhereInput[]
    id?: IntFilter<"CommissionList"> | number
    deposit?: DecimalFilter<"CommissionList"> | Decimal | DecimalJsLike | number | string
    bet?: DecimalFilter<"CommissionList"> | Decimal | DecimalJsLike | number | string
    salary?: DecimalFilter<"CommissionList"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"CommissionList"> | Date | string
    updatedAt?: DateTimeFilter<"CommissionList"> | Date | string
  }

  export type CommissionListOrderByWithRelationInput = {
    id?: SortOrder
    deposit?: SortOrder
    bet?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommissionListWhereInput | CommissionListWhereInput[]
    OR?: CommissionListWhereInput[]
    NOT?: CommissionListWhereInput | CommissionListWhereInput[]
    deposit?: DecimalFilter<"CommissionList"> | Decimal | DecimalJsLike | number | string
    bet?: DecimalFilter<"CommissionList"> | Decimal | DecimalJsLike | number | string
    salary?: DecimalFilter<"CommissionList"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"CommissionList"> | Date | string
    updatedAt?: DateTimeFilter<"CommissionList"> | Date | string
  }, "id">

  export type CommissionListOrderByWithAggregationInput = {
    id?: SortOrder
    deposit?: SortOrder
    bet?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommissionListCountOrderByAggregateInput
    _avg?: CommissionListAvgOrderByAggregateInput
    _max?: CommissionListMaxOrderByAggregateInput
    _min?: CommissionListMinOrderByAggregateInput
    _sum?: CommissionListSumOrderByAggregateInput
  }

  export type CommissionListScalarWhereWithAggregatesInput = {
    AND?: CommissionListScalarWhereWithAggregatesInput | CommissionListScalarWhereWithAggregatesInput[]
    OR?: CommissionListScalarWhereWithAggregatesInput[]
    NOT?: CommissionListScalarWhereWithAggregatesInput | CommissionListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommissionList"> | number
    deposit?: DecimalWithAggregatesFilter<"CommissionList"> | Decimal | DecimalJsLike | number | string
    bet?: DecimalWithAggregatesFilter<"CommissionList"> | Decimal | DecimalJsLike | number | string
    salary?: DecimalWithAggregatesFilter<"CommissionList"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"CommissionList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CommissionList"> | Date | string
  }

  export type LuckySpinLogWhereInput = {
    AND?: LuckySpinLogWhereInput | LuckySpinLogWhereInput[]
    OR?: LuckySpinLogWhereInput[]
    NOT?: LuckySpinLogWhereInput | LuckySpinLogWhereInput[]
    id?: IntFilter<"LuckySpinLog"> | number
    user_id?: IntFilter<"LuckySpinLog"> | number
    winning_index?: StringFilter<"LuckySpinLog"> | string
    prize_label?: StringFilter<"LuckySpinLog"> | string
    createdAt?: DateTimeFilter<"LuckySpinLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LuckySpinLogOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    winning_index?: SortOrder
    prize_label?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LuckySpinLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LuckySpinLogWhereInput | LuckySpinLogWhereInput[]
    OR?: LuckySpinLogWhereInput[]
    NOT?: LuckySpinLogWhereInput | LuckySpinLogWhereInput[]
    user_id?: IntFilter<"LuckySpinLog"> | number
    winning_index?: StringFilter<"LuckySpinLog"> | string
    prize_label?: StringFilter<"LuckySpinLog"> | string
    createdAt?: DateTimeFilter<"LuckySpinLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LuckySpinLogOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    winning_index?: SortOrder
    prize_label?: SortOrder
    createdAt?: SortOrder
    _count?: LuckySpinLogCountOrderByAggregateInput
    _avg?: LuckySpinLogAvgOrderByAggregateInput
    _max?: LuckySpinLogMaxOrderByAggregateInput
    _min?: LuckySpinLogMinOrderByAggregateInput
    _sum?: LuckySpinLogSumOrderByAggregateInput
  }

  export type LuckySpinLogScalarWhereWithAggregatesInput = {
    AND?: LuckySpinLogScalarWhereWithAggregatesInput | LuckySpinLogScalarWhereWithAggregatesInput[]
    OR?: LuckySpinLogScalarWhereWithAggregatesInput[]
    NOT?: LuckySpinLogScalarWhereWithAggregatesInput | LuckySpinLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LuckySpinLog"> | number
    user_id?: IntWithAggregatesFilter<"LuckySpinLog"> | number
    winning_index?: StringWithAggregatesFilter<"LuckySpinLog"> | string
    prize_label?: StringWithAggregatesFilter<"LuckySpinLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LuckySpinLog"> | Date | string
  }

  export type OfferClaimLogWhereInput = {
    AND?: OfferClaimLogWhereInput | OfferClaimLogWhereInput[]
    OR?: OfferClaimLogWhereInput[]
    NOT?: OfferClaimLogWhereInput | OfferClaimLogWhereInput[]
    id?: IntFilter<"OfferClaimLog"> | number
    user_id?: IntFilter<"OfferClaimLog"> | number
    offer_code?: EnumOfferCodeFilter<"OfferClaimLog"> | $Enums.OfferCode
    createdAt?: DateTimeFilter<"OfferClaimLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OfferClaimLogOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_code?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OfferClaimLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OfferClaimLogWhereInput | OfferClaimLogWhereInput[]
    OR?: OfferClaimLogWhereInput[]
    NOT?: OfferClaimLogWhereInput | OfferClaimLogWhereInput[]
    user_id?: IntFilter<"OfferClaimLog"> | number
    offer_code?: EnumOfferCodeFilter<"OfferClaimLog"> | $Enums.OfferCode
    createdAt?: DateTimeFilter<"OfferClaimLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OfferClaimLogOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_code?: SortOrder
    createdAt?: SortOrder
    _count?: OfferClaimLogCountOrderByAggregateInput
    _avg?: OfferClaimLogAvgOrderByAggregateInput
    _max?: OfferClaimLogMaxOrderByAggregateInput
    _min?: OfferClaimLogMinOrderByAggregateInput
    _sum?: OfferClaimLogSumOrderByAggregateInput
  }

  export type OfferClaimLogScalarWhereWithAggregatesInput = {
    AND?: OfferClaimLogScalarWhereWithAggregatesInput | OfferClaimLogScalarWhereWithAggregatesInput[]
    OR?: OfferClaimLogScalarWhereWithAggregatesInput[]
    NOT?: OfferClaimLogScalarWhereWithAggregatesInput | OfferClaimLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OfferClaimLog"> | number
    user_id?: IntWithAggregatesFilter<"OfferClaimLog"> | number
    offer_code?: EnumOfferCodeWithAggregatesFilter<"OfferClaimLog"> | $Enums.OfferCode
    createdAt?: DateTimeWithAggregatesFilter<"OfferClaimLog"> | Date | string
  }

  export type AdminUserWhereInput = {
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    id?: IntFilter<"AdminUser"> | number
    username?: StringFilter<"AdminUser"> | string
    password?: StringFilter<"AdminUser"> | string
    position?: EnumPositionEnumFilter<"AdminUser"> | $Enums.PositionEnum
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
  }

  export type AdminUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: AdminUserWhereInput | AdminUserWhereInput[]
    OR?: AdminUserWhereInput[]
    NOT?: AdminUserWhereInput | AdminUserWhereInput[]
    password?: StringFilter<"AdminUser"> | string
    position?: EnumPositionEnumFilter<"AdminUser"> | $Enums.PositionEnum
    createdAt?: DateTimeFilter<"AdminUser"> | Date | string
  }, "id" | "username">

  export type AdminUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    _count?: AdminUserCountOrderByAggregateInput
    _avg?: AdminUserAvgOrderByAggregateInput
    _max?: AdminUserMaxOrderByAggregateInput
    _min?: AdminUserMinOrderByAggregateInput
    _sum?: AdminUserSumOrderByAggregateInput
  }

  export type AdminUserScalarWhereWithAggregatesInput = {
    AND?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    OR?: AdminUserScalarWhereWithAggregatesInput[]
    NOT?: AdminUserScalarWhereWithAggregatesInput | AdminUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AdminUser"> | number
    username?: StringWithAggregatesFilter<"AdminUser"> | string
    password?: StringWithAggregatesFilter<"AdminUser"> | string
    position?: EnumPositionEnumWithAggregatesFilter<"AdminUser"> | $Enums.PositionEnum
    createdAt?: DateTimeWithAggregatesFilter<"AdminUser"> | Date | string
  }

  export type UserCreateInput = {
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogUncheckedCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUncheckedUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordCreateInput = {
    otp: string
    fingerprint_id?: string | null
    used?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOtp_recordsInput
  }

  export type OtpRecordUncheckedCreateInput = {
    id?: number
    phone: string
    otp: string
    fingerprint_id?: string | null
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpRecordUpdateInput = {
    otp?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtp_recordsNestedInput
  }

  export type OtpRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordCreateManyInput = {
    id?: number
    phone: string
    otp: string
    fingerprint_id?: string | null
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpRecordUpdateManyMutationInput = {
    otp?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionRecordCreateInput = {
    req_route: string
    fp_id: string
    ip: string
    createdAt?: Date | string
  }

  export type FormSubmissionRecordUncheckedCreateInput = {
    id?: number
    req_route: string
    fp_id: string
    ip: string
    createdAt?: Date | string
  }

  export type FormSubmissionRecordUpdateInput = {
    req_route?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    req_route?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionRecordCreateManyInput = {
    id?: number
    req_route: string
    fp_id: string
    ip: string
    createdAt?: Date | string
  }

  export type FormSubmissionRecordUpdateManyMutationInput = {
    req_route?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormSubmissionRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    req_route?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    user_id: number
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    user_id?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    user_id: number
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    user_id?: IntFieldUpdateOperationsInput | number
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionCreateInput = {
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutGame_transactionsInput
  }

  export type GameTransactionUncheckedCreateInput = {
    id?: number
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameTransactionUpdateInput = {
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutGame_transactionsNestedInput
  }

  export type GameTransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionCreateManyInput = {
    id?: number
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    user_id: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameTransactionUpdateManyMutationInput = {
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    sender: string
    receiver: string
    content?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    sender: string
    receiver: string
    content?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageUpdateInput = {
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageCreateManyInput = {
    id?: number
    sender: string
    receiver: string
    content?: string | null
    fileUrl?: string | null
    createdAt?: Date | string
    seen?: boolean
  }

  export type MessageUpdateManyMutationInput = {
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sender?: StringFieldUpdateOperationsInput | string
    receiver?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seen?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherCreateInput = {
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutVouchersInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: number
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    collected_by?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type VoucherUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutVouchersNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    collected_by?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherCreateManyInput = {
    id?: number
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    collected_by?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type VoucherUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    collected_by?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusListCreateInput = {
    name: string
    deposit: Decimal | DecimalJsLike | number | string
    bonus: Decimal | DecimalJsLike | number | string
    turn_over: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BonusListUncheckedCreateInput = {
    id?: number
    name: string
    deposit: Decimal | DecimalJsLike | number | string
    bonus: Decimal | DecimalJsLike | number | string
    turn_over: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BonusListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusListCreateManyInput = {
    id?: number
    name: string
    deposit: Decimal | DecimalJsLike | number | string
    bonus: Decimal | DecimalJsLike | number | string
    turn_over: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BonusListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bonus?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionListCreateInput = {
    deposit: Decimal | DecimalJsLike | number | string
    bet: Decimal | DecimalJsLike | number | string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionListUncheckedCreateInput = {
    id?: number
    deposit: Decimal | DecimalJsLike | number | string
    bet: Decimal | DecimalJsLike | number | string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionListUpdateInput = {
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionListCreateManyInput = {
    id?: number
    deposit: Decimal | DecimalJsLike | number | string
    bet: Decimal | DecimalJsLike | number | string
    salary: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionListUpdateManyMutationInput = {
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    deposit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    bet?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LuckySpinLogCreateInput = {
    winning_index: string
    prize_label: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLucky_spin_logsInput
  }

  export type LuckySpinLogUncheckedCreateInput = {
    id?: number
    user_id: number
    winning_index: string
    prize_label: string
    createdAt?: Date | string
  }

  export type LuckySpinLogUpdateInput = {
    winning_index?: StringFieldUpdateOperationsInput | string
    prize_label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLucky_spin_logsNestedInput
  }

  export type LuckySpinLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    winning_index?: StringFieldUpdateOperationsInput | string
    prize_label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LuckySpinLogCreateManyInput = {
    id?: number
    user_id: number
    winning_index: string
    prize_label: string
    createdAt?: Date | string
  }

  export type LuckySpinLogUpdateManyMutationInput = {
    winning_index?: StringFieldUpdateOperationsInput | string
    prize_label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LuckySpinLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    winning_index?: StringFieldUpdateOperationsInput | string
    prize_label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferClaimLogCreateInput = {
    offer_code: $Enums.OfferCode
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutOffer_claim_logsInput
  }

  export type OfferClaimLogUncheckedCreateInput = {
    id?: number
    user_id: number
    offer_code: $Enums.OfferCode
    createdAt?: Date | string
  }

  export type OfferClaimLogUpdateInput = {
    offer_code?: EnumOfferCodeFieldUpdateOperationsInput | $Enums.OfferCode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOffer_claim_logsNestedInput
  }

  export type OfferClaimLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    offer_code?: EnumOfferCodeFieldUpdateOperationsInput | $Enums.OfferCode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferClaimLogCreateManyInput = {
    id?: number
    user_id: number
    offer_code: $Enums.OfferCode
    createdAt?: Date | string
  }

  export type OfferClaimLogUpdateManyMutationInput = {
    offer_code?: EnumOfferCodeFieldUpdateOperationsInput | $Enums.OfferCode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferClaimLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    offer_code?: EnumOfferCodeFieldUpdateOperationsInput | $Enums.OfferCode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateInput = {
    username: string
    password: string
    position: $Enums.PositionEnum
    createdAt?: Date | string
  }

  export type AdminUserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    position: $Enums.PositionEnum
    createdAt?: Date | string
  }

  export type AdminUserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionEnumFieldUpdateOperationsInput | $Enums.PositionEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionEnumFieldUpdateOperationsInput | $Enums.PositionEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserCreateManyInput = {
    id?: number
    username: string
    password: string
    position: $Enums.PositionEnum
    createdAt?: Date | string
  }

  export type AdminUserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionEnumFieldUpdateOperationsInput | $Enums.PositionEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    position?: EnumPositionEnumFieldUpdateOperationsInput | $Enums.PositionEnum
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type GameTransactionListRelationFilter = {
    every?: GameTransactionWhereInput
    some?: GameTransactionWhereInput
    none?: GameTransactionWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type OtpRecordListRelationFilter = {
    every?: OtpRecordWhereInput
    some?: OtpRecordWhereInput
    none?: OtpRecordWhereInput
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type LuckySpinLogListRelationFilter = {
    every?: LuckySpinLogWhereInput
    some?: LuckySpinLogWhereInput
    none?: LuckySpinLogWhereInput
  }

  export type OfferClaimLogListRelationFilter = {
    every?: OfferClaimLogWhereInput
    some?: OfferClaimLogWhereInput
    none?: OfferClaimLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OtpRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LuckySpinLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OfferClaimLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    e_wallet_number?: SortOrder
    name_in_wallet?: SortOrder
    user_code?: SortOrder
    recovery_code?: SortOrder
    two_fa_secret?: SortOrder
    is_2fa_verified?: SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    lucky_spin?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    lucky_spin?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    e_wallet_number?: SortOrder
    name_in_wallet?: SortOrder
    user_code?: SortOrder
    recovery_code?: SortOrder
    two_fa_secret?: SortOrder
    is_2fa_verified?: SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    lucky_spin?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    phone_number?: SortOrder
    e_wallet_number?: SortOrder
    name_in_wallet?: SortOrder
    user_code?: SortOrder
    recovery_code?: SortOrder
    two_fa_secret?: SortOrder
    is_2fa_verified?: SortOrder
    password?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    lucky_spin?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
    invited_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    lucky_spin?: SortOrder
    balance?: SortOrder
    turn_over?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OtpRecordCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    fingerprint_id?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpRecordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OtpRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    fingerprint_id?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpRecordMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    fingerprint_id?: SortOrder
    used?: SortOrder
    createdAt?: SortOrder
  }

  export type OtpRecordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormSubmissionRecordCountOrderByAggregateInput = {
    id?: SortOrder
    req_route?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSubmissionRecordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormSubmissionRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    req_route?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSubmissionRecordMinOrderByAggregateInput = {
    id?: SortOrder
    req_route?: SortOrder
    fp_id?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
  }

  export type FormSubmissionRecordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrder
    sign?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrder
    sign?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    trx_id?: SortOrder
    sign?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type GameTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameTransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type GameTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    trans_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    game_code?: SortOrder
    user_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameTransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    user_id?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    sender?: SortOrder
    receiver?: SortOrder
    content?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    seen?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrder
    message?: SortOrder
    collected_by?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    collected_by?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrder
    message?: SortOrder
    collected_by?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    amount?: SortOrder
    collected?: SortOrder
    collected_at?: SortOrder
    message?: SortOrder
    collected_by?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    collected_by?: SortOrder
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

  export type BonusListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deposit?: SortOrder
    bonus?: SortOrder
    turn_over?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BonusListAvgOrderByAggregateInput = {
    id?: SortOrder
    deposit?: SortOrder
    bonus?: SortOrder
    turn_over?: SortOrder
  }

  export type BonusListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deposit?: SortOrder
    bonus?: SortOrder
    turn_over?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BonusListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    deposit?: SortOrder
    bonus?: SortOrder
    turn_over?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BonusListSumOrderByAggregateInput = {
    id?: SortOrder
    deposit?: SortOrder
    bonus?: SortOrder
    turn_over?: SortOrder
  }

  export type CommissionListCountOrderByAggregateInput = {
    id?: SortOrder
    deposit?: SortOrder
    bet?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionListAvgOrderByAggregateInput = {
    id?: SortOrder
    deposit?: SortOrder
    bet?: SortOrder
    salary?: SortOrder
  }

  export type CommissionListMaxOrderByAggregateInput = {
    id?: SortOrder
    deposit?: SortOrder
    bet?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionListMinOrderByAggregateInput = {
    id?: SortOrder
    deposit?: SortOrder
    bet?: SortOrder
    salary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionListSumOrderByAggregateInput = {
    id?: SortOrder
    deposit?: SortOrder
    bet?: SortOrder
    salary?: SortOrder
  }

  export type LuckySpinLogCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    winning_index?: SortOrder
    prize_label?: SortOrder
    createdAt?: SortOrder
  }

  export type LuckySpinLogAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type LuckySpinLogMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    winning_index?: SortOrder
    prize_label?: SortOrder
    createdAt?: SortOrder
  }

  export type LuckySpinLogMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    winning_index?: SortOrder
    prize_label?: SortOrder
    createdAt?: SortOrder
  }

  export type LuckySpinLogSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumOfferCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferCode | EnumOfferCodeFieldRefInput<$PrismaModel>
    in?: $Enums.OfferCode[] | ListEnumOfferCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferCode[] | ListEnumOfferCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferCodeFilter<$PrismaModel> | $Enums.OfferCode
  }

  export type OfferClaimLogCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_code?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferClaimLogAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type OfferClaimLogMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_code?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferClaimLogMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    offer_code?: SortOrder
    createdAt?: SortOrder
  }

  export type OfferClaimLogSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type EnumOfferCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferCode | EnumOfferCodeFieldRefInput<$PrismaModel>
    in?: $Enums.OfferCode[] | ListEnumOfferCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferCode[] | ListEnumOfferCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferCodeWithAggregatesFilter<$PrismaModel> | $Enums.OfferCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferCodeFilter<$PrismaModel>
    _max?: NestedEnumOfferCodeFilter<$PrismaModel>
  }

  export type EnumPositionEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PositionEnum | EnumPositionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PositionEnum[] | ListEnumPositionEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PositionEnum[] | ListEnumPositionEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionEnumFilter<$PrismaModel> | $Enums.PositionEnum
  }

  export type AdminUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumPositionEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PositionEnum | EnumPositionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PositionEnum[] | ListEnumPositionEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PositionEnum[] | ListEnumPositionEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionEnumWithAggregatesFilter<$PrismaModel> | $Enums.PositionEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionEnumFilter<$PrismaModel>
    _max?: NestedEnumPositionEnumFilter<$PrismaModel>
  }

  export type GameTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput> | GameTransactionCreateWithoutUserInput[] | GameTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameTransactionCreateOrConnectWithoutUserInput | GameTransactionCreateOrConnectWithoutUserInput[]
    createMany?: GameTransactionCreateManyUserInputEnvelope
    connect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OtpRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput> | OtpRecordCreateWithoutUserInput[] | OtpRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpRecordCreateOrConnectWithoutUserInput | OtpRecordCreateOrConnectWithoutUserInput[]
    createMany?: OtpRecordCreateManyUserInputEnvelope
    connect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutUserInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type LuckySpinLogCreateNestedManyWithoutUserInput = {
    create?: XOR<LuckySpinLogCreateWithoutUserInput, LuckySpinLogUncheckedCreateWithoutUserInput> | LuckySpinLogCreateWithoutUserInput[] | LuckySpinLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LuckySpinLogCreateOrConnectWithoutUserInput | LuckySpinLogCreateOrConnectWithoutUserInput[]
    createMany?: LuckySpinLogCreateManyUserInputEnvelope
    connect?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
  }

  export type OfferClaimLogCreateNestedManyWithoutUserInput = {
    create?: XOR<OfferClaimLogCreateWithoutUserInput, OfferClaimLogUncheckedCreateWithoutUserInput> | OfferClaimLogCreateWithoutUserInput[] | OfferClaimLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferClaimLogCreateOrConnectWithoutUserInput | OfferClaimLogCreateOrConnectWithoutUserInput[]
    createMany?: OfferClaimLogCreateManyUserInputEnvelope
    connect?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
  }

  export type GameTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput> | GameTransactionCreateWithoutUserInput[] | GameTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameTransactionCreateOrConnectWithoutUserInput | GameTransactionCreateOrConnectWithoutUserInput[]
    createMany?: GameTransactionCreateManyUserInputEnvelope
    connect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type OtpRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput> | OtpRecordCreateWithoutUserInput[] | OtpRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpRecordCreateOrConnectWithoutUserInput | OtpRecordCreateOrConnectWithoutUserInput[]
    createMany?: OtpRecordCreateManyUserInputEnvelope
    connect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type LuckySpinLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LuckySpinLogCreateWithoutUserInput, LuckySpinLogUncheckedCreateWithoutUserInput> | LuckySpinLogCreateWithoutUserInput[] | LuckySpinLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LuckySpinLogCreateOrConnectWithoutUserInput | LuckySpinLogCreateOrConnectWithoutUserInput[]
    createMany?: LuckySpinLogCreateManyUserInputEnvelope
    connect?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
  }

  export type OfferClaimLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OfferClaimLogCreateWithoutUserInput, OfferClaimLogUncheckedCreateWithoutUserInput> | OfferClaimLogCreateWithoutUserInput[] | OfferClaimLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferClaimLogCreateOrConnectWithoutUserInput | OfferClaimLogCreateOrConnectWithoutUserInput[]
    createMany?: OfferClaimLogCreateManyUserInputEnvelope
    connect?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GameTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput> | GameTransactionCreateWithoutUserInput[] | GameTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameTransactionCreateOrConnectWithoutUserInput | GameTransactionCreateOrConnectWithoutUserInput[]
    upsert?: GameTransactionUpsertWithWhereUniqueWithoutUserInput | GameTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameTransactionCreateManyUserInputEnvelope
    set?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    disconnect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    delete?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    connect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    update?: GameTransactionUpdateWithWhereUniqueWithoutUserInput | GameTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameTransactionUpdateManyWithWhereWithoutUserInput | GameTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameTransactionScalarWhereInput | GameTransactionScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OtpRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput> | OtpRecordCreateWithoutUserInput[] | OtpRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpRecordCreateOrConnectWithoutUserInput | OtpRecordCreateOrConnectWithoutUserInput[]
    upsert?: OtpRecordUpsertWithWhereUniqueWithoutUserInput | OtpRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpRecordCreateManyUserInputEnvelope
    set?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    disconnect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    delete?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    connect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    update?: OtpRecordUpdateWithWhereUniqueWithoutUserInput | OtpRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpRecordUpdateManyWithWhereWithoutUserInput | OtpRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpRecordScalarWhereInput | OtpRecordScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutUserInput | VoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutUserInput | VoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutUserInput | VoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type LuckySpinLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LuckySpinLogCreateWithoutUserInput, LuckySpinLogUncheckedCreateWithoutUserInput> | LuckySpinLogCreateWithoutUserInput[] | LuckySpinLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LuckySpinLogCreateOrConnectWithoutUserInput | LuckySpinLogCreateOrConnectWithoutUserInput[]
    upsert?: LuckySpinLogUpsertWithWhereUniqueWithoutUserInput | LuckySpinLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LuckySpinLogCreateManyUserInputEnvelope
    set?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
    disconnect?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
    delete?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
    connect?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
    update?: LuckySpinLogUpdateWithWhereUniqueWithoutUserInput | LuckySpinLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LuckySpinLogUpdateManyWithWhereWithoutUserInput | LuckySpinLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LuckySpinLogScalarWhereInput | LuckySpinLogScalarWhereInput[]
  }

  export type OfferClaimLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<OfferClaimLogCreateWithoutUserInput, OfferClaimLogUncheckedCreateWithoutUserInput> | OfferClaimLogCreateWithoutUserInput[] | OfferClaimLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferClaimLogCreateOrConnectWithoutUserInput | OfferClaimLogCreateOrConnectWithoutUserInput[]
    upsert?: OfferClaimLogUpsertWithWhereUniqueWithoutUserInput | OfferClaimLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OfferClaimLogCreateManyUserInputEnvelope
    set?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
    disconnect?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
    delete?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
    connect?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
    update?: OfferClaimLogUpdateWithWhereUniqueWithoutUserInput | OfferClaimLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OfferClaimLogUpdateManyWithWhereWithoutUserInput | OfferClaimLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OfferClaimLogScalarWhereInput | OfferClaimLogScalarWhereInput[]
  }

  export type GameTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput> | GameTransactionCreateWithoutUserInput[] | GameTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GameTransactionCreateOrConnectWithoutUserInput | GameTransactionCreateOrConnectWithoutUserInput[]
    upsert?: GameTransactionUpsertWithWhereUniqueWithoutUserInput | GameTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GameTransactionCreateManyUserInputEnvelope
    set?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    disconnect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    delete?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    connect?: GameTransactionWhereUniqueInput | GameTransactionWhereUniqueInput[]
    update?: GameTransactionUpdateWithWhereUniqueWithoutUserInput | GameTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GameTransactionUpdateManyWithWhereWithoutUserInput | GameTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GameTransactionScalarWhereInput | GameTransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type OtpRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput> | OtpRecordCreateWithoutUserInput[] | OtpRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpRecordCreateOrConnectWithoutUserInput | OtpRecordCreateOrConnectWithoutUserInput[]
    upsert?: OtpRecordUpsertWithWhereUniqueWithoutUserInput | OtpRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpRecordCreateManyUserInputEnvelope
    set?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    disconnect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    delete?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    connect?: OtpRecordWhereUniqueInput | OtpRecordWhereUniqueInput[]
    update?: OtpRecordUpdateWithWhereUniqueWithoutUserInput | OtpRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpRecordUpdateManyWithWhereWithoutUserInput | OtpRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpRecordScalarWhereInput | OtpRecordScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutUserInput | VoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutUserInput | VoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutUserInput | VoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type LuckySpinLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LuckySpinLogCreateWithoutUserInput, LuckySpinLogUncheckedCreateWithoutUserInput> | LuckySpinLogCreateWithoutUserInput[] | LuckySpinLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LuckySpinLogCreateOrConnectWithoutUserInput | LuckySpinLogCreateOrConnectWithoutUserInput[]
    upsert?: LuckySpinLogUpsertWithWhereUniqueWithoutUserInput | LuckySpinLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LuckySpinLogCreateManyUserInputEnvelope
    set?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
    disconnect?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
    delete?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
    connect?: LuckySpinLogWhereUniqueInput | LuckySpinLogWhereUniqueInput[]
    update?: LuckySpinLogUpdateWithWhereUniqueWithoutUserInput | LuckySpinLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LuckySpinLogUpdateManyWithWhereWithoutUserInput | LuckySpinLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LuckySpinLogScalarWhereInput | LuckySpinLogScalarWhereInput[]
  }

  export type OfferClaimLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OfferClaimLogCreateWithoutUserInput, OfferClaimLogUncheckedCreateWithoutUserInput> | OfferClaimLogCreateWithoutUserInput[] | OfferClaimLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OfferClaimLogCreateOrConnectWithoutUserInput | OfferClaimLogCreateOrConnectWithoutUserInput[]
    upsert?: OfferClaimLogUpsertWithWhereUniqueWithoutUserInput | OfferClaimLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OfferClaimLogCreateManyUserInputEnvelope
    set?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
    disconnect?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
    delete?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
    connect?: OfferClaimLogWhereUniqueInput | OfferClaimLogWhereUniqueInput[]
    update?: OfferClaimLogUpdateWithWhereUniqueWithoutUserInput | OfferClaimLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OfferClaimLogUpdateManyWithWhereWithoutUserInput | OfferClaimLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OfferClaimLogScalarWhereInput | OfferClaimLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOtp_recordsInput = {
    create?: XOR<UserCreateWithoutOtp_recordsInput, UserUncheckedCreateWithoutOtp_recordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtp_recordsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOtp_recordsNestedInput = {
    create?: XOR<UserCreateWithoutOtp_recordsInput, UserUncheckedCreateWithoutOtp_recordsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtp_recordsInput
    upsert?: UserUpsertWithoutOtp_recordsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtp_recordsInput, UserUpdateWithoutOtp_recordsInput>, UserUncheckedUpdateWithoutOtp_recordsInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserCreateNestedOneWithoutGame_transactionsInput = {
    create?: XOR<UserCreateWithoutGame_transactionsInput, UserUncheckedCreateWithoutGame_transactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGame_transactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutGame_transactionsNestedInput = {
    create?: XOR<UserCreateWithoutGame_transactionsInput, UserUncheckedCreateWithoutGame_transactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGame_transactionsInput
    upsert?: UserUpsertWithoutGame_transactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGame_transactionsInput, UserUpdateWithoutGame_transactionsInput>, UserUncheckedUpdateWithoutGame_transactionsInput>
  }

  export type UserCreateNestedOneWithoutVouchersInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutVouchersNestedInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    upsert?: UserUpsertWithoutVouchersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVouchersInput, UserUpdateWithoutVouchersInput>, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutLucky_spin_logsInput = {
    create?: XOR<UserCreateWithoutLucky_spin_logsInput, UserUncheckedCreateWithoutLucky_spin_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLucky_spin_logsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLucky_spin_logsNestedInput = {
    create?: XOR<UserCreateWithoutLucky_spin_logsInput, UserUncheckedCreateWithoutLucky_spin_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLucky_spin_logsInput
    upsert?: UserUpsertWithoutLucky_spin_logsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLucky_spin_logsInput, UserUpdateWithoutLucky_spin_logsInput>, UserUncheckedUpdateWithoutLucky_spin_logsInput>
  }

  export type UserCreateNestedOneWithoutOffer_claim_logsInput = {
    create?: XOR<UserCreateWithoutOffer_claim_logsInput, UserUncheckedCreateWithoutOffer_claim_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffer_claim_logsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumOfferCodeFieldUpdateOperationsInput = {
    set?: $Enums.OfferCode
  }

  export type UserUpdateOneRequiredWithoutOffer_claim_logsNestedInput = {
    create?: XOR<UserCreateWithoutOffer_claim_logsInput, UserUncheckedCreateWithoutOffer_claim_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffer_claim_logsInput
    upsert?: UserUpsertWithoutOffer_claim_logsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOffer_claim_logsInput, UserUpdateWithoutOffer_claim_logsInput>, UserUncheckedUpdateWithoutOffer_claim_logsInput>
  }

  export type EnumPositionEnumFieldUpdateOperationsInput = {
    set?: $Enums.PositionEnum
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
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

  export type NestedEnumOfferCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferCode | EnumOfferCodeFieldRefInput<$PrismaModel>
    in?: $Enums.OfferCode[] | ListEnumOfferCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferCode[] | ListEnumOfferCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferCodeFilter<$PrismaModel> | $Enums.OfferCode
  }

  export type NestedEnumOfferCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OfferCode | EnumOfferCodeFieldRefInput<$PrismaModel>
    in?: $Enums.OfferCode[] | ListEnumOfferCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OfferCode[] | ListEnumOfferCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfferCodeWithAggregatesFilter<$PrismaModel> | $Enums.OfferCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfferCodeFilter<$PrismaModel>
    _max?: NestedEnumOfferCodeFilter<$PrismaModel>
  }

  export type NestedEnumPositionEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.PositionEnum | EnumPositionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PositionEnum[] | ListEnumPositionEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PositionEnum[] | ListEnumPositionEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionEnumFilter<$PrismaModel> | $Enums.PositionEnum
  }

  export type NestedEnumPositionEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PositionEnum | EnumPositionEnumFieldRefInput<$PrismaModel>
    in?: $Enums.PositionEnum[] | ListEnumPositionEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.PositionEnum[] | ListEnumPositionEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionEnumWithAggregatesFilter<$PrismaModel> | $Enums.PositionEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionEnumFilter<$PrismaModel>
    _max?: NestedEnumPositionEnumFilter<$PrismaModel>
  }

  export type GameTransactionCreateWithoutUserInput = {
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameTransactionUncheckedCreateWithoutUserInput = {
    id?: number
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameTransactionCreateOrConnectWithoutUserInput = {
    where: GameTransactionWhereUniqueInput
    create: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput>
  }

  export type GameTransactionCreateManyUserInputEnvelope = {
    data: GameTransactionCreateManyUserInput | GameTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OtpRecordCreateWithoutUserInput = {
    otp: string
    fingerprint_id?: string | null
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpRecordUncheckedCreateWithoutUserInput = {
    id?: number
    otp: string
    fingerprint_id?: string | null
    used?: boolean
    createdAt?: Date | string
  }

  export type OtpRecordCreateOrConnectWithoutUserInput = {
    where: OtpRecordWhereUniqueInput
    create: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput>
  }

  export type OtpRecordCreateManyUserInputEnvelope = {
    data: OtpRecordCreateManyUserInput | OtpRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutUserInput = {
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type VoucherUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type VoucherCreateOrConnectWithoutUserInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput>
  }

  export type VoucherCreateManyUserInputEnvelope = {
    data: VoucherCreateManyUserInput | VoucherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LuckySpinLogCreateWithoutUserInput = {
    winning_index: string
    prize_label: string
    createdAt?: Date | string
  }

  export type LuckySpinLogUncheckedCreateWithoutUserInput = {
    id?: number
    winning_index: string
    prize_label: string
    createdAt?: Date | string
  }

  export type LuckySpinLogCreateOrConnectWithoutUserInput = {
    where: LuckySpinLogWhereUniqueInput
    create: XOR<LuckySpinLogCreateWithoutUserInput, LuckySpinLogUncheckedCreateWithoutUserInput>
  }

  export type LuckySpinLogCreateManyUserInputEnvelope = {
    data: LuckySpinLogCreateManyUserInput | LuckySpinLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OfferClaimLogCreateWithoutUserInput = {
    offer_code: $Enums.OfferCode
    createdAt?: Date | string
  }

  export type OfferClaimLogUncheckedCreateWithoutUserInput = {
    id?: number
    offer_code: $Enums.OfferCode
    createdAt?: Date | string
  }

  export type OfferClaimLogCreateOrConnectWithoutUserInput = {
    where: OfferClaimLogWhereUniqueInput
    create: XOR<OfferClaimLogCreateWithoutUserInput, OfferClaimLogUncheckedCreateWithoutUserInput>
  }

  export type OfferClaimLogCreateManyUserInputEnvelope = {
    data: OfferClaimLogCreateManyUserInput | OfferClaimLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GameTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: GameTransactionWhereUniqueInput
    update: XOR<GameTransactionUpdateWithoutUserInput, GameTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<GameTransactionCreateWithoutUserInput, GameTransactionUncheckedCreateWithoutUserInput>
  }

  export type GameTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: GameTransactionWhereUniqueInput
    data: XOR<GameTransactionUpdateWithoutUserInput, GameTransactionUncheckedUpdateWithoutUserInput>
  }

  export type GameTransactionUpdateManyWithWhereWithoutUserInput = {
    where: GameTransactionScalarWhereInput
    data: XOR<GameTransactionUpdateManyMutationInput, GameTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type GameTransactionScalarWhereInput = {
    AND?: GameTransactionScalarWhereInput | GameTransactionScalarWhereInput[]
    OR?: GameTransactionScalarWhereInput[]
    NOT?: GameTransactionScalarWhereInput | GameTransactionScalarWhereInput[]
    id?: IntFilter<"GameTransaction"> | number
    trans_id?: StringFilter<"GameTransaction"> | string
    type?: StringFilter<"GameTransaction"> | string
    amount?: DecimalFilter<"GameTransaction"> | Decimal | DecimalJsLike | number | string
    game_code?: StringNullableFilter<"GameTransaction"> | string | null
    user_id?: IntFilter<"GameTransaction"> | number
    createdAt?: DateTimeFilter<"GameTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"GameTransaction"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    trx_id?: StringNullableFilter<"Transaction"> | string | null
    sign?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumTransactionStatusFilter<"Transaction"> | $Enums.TransactionStatus
    user_id?: IntFilter<"Transaction"> | number
    method?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type OtpRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: OtpRecordWhereUniqueInput
    update: XOR<OtpRecordUpdateWithoutUserInput, OtpRecordUncheckedUpdateWithoutUserInput>
    create: XOR<OtpRecordCreateWithoutUserInput, OtpRecordUncheckedCreateWithoutUserInput>
  }

  export type OtpRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: OtpRecordWhereUniqueInput
    data: XOR<OtpRecordUpdateWithoutUserInput, OtpRecordUncheckedUpdateWithoutUserInput>
  }

  export type OtpRecordUpdateManyWithWhereWithoutUserInput = {
    where: OtpRecordScalarWhereInput
    data: XOR<OtpRecordUpdateManyMutationInput, OtpRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type OtpRecordScalarWhereInput = {
    AND?: OtpRecordScalarWhereInput | OtpRecordScalarWhereInput[]
    OR?: OtpRecordScalarWhereInput[]
    NOT?: OtpRecordScalarWhereInput | OtpRecordScalarWhereInput[]
    id?: IntFilter<"OtpRecord"> | number
    phone?: StringFilter<"OtpRecord"> | string
    otp?: StringFilter<"OtpRecord"> | string
    fingerprint_id?: StringNullableFilter<"OtpRecord"> | string | null
    used?: BoolFilter<"OtpRecord"> | boolean
    createdAt?: DateTimeFilter<"OtpRecord"> | Date | string
  }

  export type VoucherUpsertWithWhereUniqueWithoutUserInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutUserInput, VoucherUncheckedUpdateWithoutUserInput>
    create: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutUserInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutUserInput, VoucherUncheckedUpdateWithoutUserInput>
  }

  export type VoucherUpdateManyWithWhereWithoutUserInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutUserInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    id?: IntFilter<"Voucher"> | number
    code?: StringFilter<"Voucher"> | string
    amount?: DecimalFilter<"Voucher"> | Decimal | DecimalJsLike | number | string
    collected?: BoolFilter<"Voucher"> | boolean
    collected_at?: DateTimeNullableFilter<"Voucher"> | Date | string | null
    message?: StringNullableFilter<"Voucher"> | string | null
    collected_by?: IntNullableFilter<"Voucher"> | number | null
    updatedAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
  }

  export type LuckySpinLogUpsertWithWhereUniqueWithoutUserInput = {
    where: LuckySpinLogWhereUniqueInput
    update: XOR<LuckySpinLogUpdateWithoutUserInput, LuckySpinLogUncheckedUpdateWithoutUserInput>
    create: XOR<LuckySpinLogCreateWithoutUserInput, LuckySpinLogUncheckedCreateWithoutUserInput>
  }

  export type LuckySpinLogUpdateWithWhereUniqueWithoutUserInput = {
    where: LuckySpinLogWhereUniqueInput
    data: XOR<LuckySpinLogUpdateWithoutUserInput, LuckySpinLogUncheckedUpdateWithoutUserInput>
  }

  export type LuckySpinLogUpdateManyWithWhereWithoutUserInput = {
    where: LuckySpinLogScalarWhereInput
    data: XOR<LuckySpinLogUpdateManyMutationInput, LuckySpinLogUncheckedUpdateManyWithoutUserInput>
  }

  export type LuckySpinLogScalarWhereInput = {
    AND?: LuckySpinLogScalarWhereInput | LuckySpinLogScalarWhereInput[]
    OR?: LuckySpinLogScalarWhereInput[]
    NOT?: LuckySpinLogScalarWhereInput | LuckySpinLogScalarWhereInput[]
    id?: IntFilter<"LuckySpinLog"> | number
    user_id?: IntFilter<"LuckySpinLog"> | number
    winning_index?: StringFilter<"LuckySpinLog"> | string
    prize_label?: StringFilter<"LuckySpinLog"> | string
    createdAt?: DateTimeFilter<"LuckySpinLog"> | Date | string
  }

  export type OfferClaimLogUpsertWithWhereUniqueWithoutUserInput = {
    where: OfferClaimLogWhereUniqueInput
    update: XOR<OfferClaimLogUpdateWithoutUserInput, OfferClaimLogUncheckedUpdateWithoutUserInput>
    create: XOR<OfferClaimLogCreateWithoutUserInput, OfferClaimLogUncheckedCreateWithoutUserInput>
  }

  export type OfferClaimLogUpdateWithWhereUniqueWithoutUserInput = {
    where: OfferClaimLogWhereUniqueInput
    data: XOR<OfferClaimLogUpdateWithoutUserInput, OfferClaimLogUncheckedUpdateWithoutUserInput>
  }

  export type OfferClaimLogUpdateManyWithWhereWithoutUserInput = {
    where: OfferClaimLogScalarWhereInput
    data: XOR<OfferClaimLogUpdateManyMutationInput, OfferClaimLogUncheckedUpdateManyWithoutUserInput>
  }

  export type OfferClaimLogScalarWhereInput = {
    AND?: OfferClaimLogScalarWhereInput | OfferClaimLogScalarWhereInput[]
    OR?: OfferClaimLogScalarWhereInput[]
    NOT?: OfferClaimLogScalarWhereInput | OfferClaimLogScalarWhereInput[]
    id?: IntFilter<"OfferClaimLog"> | number
    user_id?: IntFilter<"OfferClaimLog"> | number
    offer_code?: EnumOfferCodeFilter<"OfferClaimLog"> | $Enums.OfferCode
    createdAt?: DateTimeFilter<"OfferClaimLog"> | Date | string
  }

  export type UserCreateWithoutOtp_recordsInput = {
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtp_recordsInput = {
    id?: number
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogUncheckedCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtp_recordsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtp_recordsInput, UserUncheckedCreateWithoutOtp_recordsInput>
  }

  export type UserUpsertWithoutOtp_recordsInput = {
    update: XOR<UserUpdateWithoutOtp_recordsInput, UserUncheckedUpdateWithoutOtp_recordsInput>
    create: XOR<UserCreateWithoutOtp_recordsInput, UserUncheckedCreateWithoutOtp_recordsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtp_recordsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtp_recordsInput, UserUncheckedUpdateWithoutOtp_recordsInput>
  }

  export type UserUpdateWithoutOtp_recordsInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtp_recordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUncheckedUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogUncheckedCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUncheckedUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutGame_transactionsInput = {
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGame_transactionsInput = {
    id?: number
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogUncheckedCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGame_transactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGame_transactionsInput, UserUncheckedCreateWithoutGame_transactionsInput>
  }

  export type UserUpsertWithoutGame_transactionsInput = {
    update: XOR<UserUpdateWithoutGame_transactionsInput, UserUncheckedUpdateWithoutGame_transactionsInput>
    create: XOR<UserCreateWithoutGame_transactionsInput, UserUncheckedCreateWithoutGame_transactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGame_transactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGame_transactionsInput, UserUncheckedUpdateWithoutGame_transactionsInput>
  }

  export type UserUpdateWithoutGame_transactionsInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGame_transactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUncheckedUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutVouchersInput = {
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVouchersInput = {
    id?: number
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogUncheckedCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVouchersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
  }

  export type UserUpsertWithoutVouchersInput = {
    update: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVouchersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type UserUpdateWithoutVouchersInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVouchersInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUncheckedUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLucky_spin_logsInput = {
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLucky_spin_logsInput = {
    id?: number
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    offer_claim_logs?: OfferClaimLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLucky_spin_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLucky_spin_logsInput, UserUncheckedCreateWithoutLucky_spin_logsInput>
  }

  export type UserUpsertWithoutLucky_spin_logsInput = {
    update: XOR<UserUpdateWithoutLucky_spin_logsInput, UserUncheckedUpdateWithoutLucky_spin_logsInput>
    create: XOR<UserCreateWithoutLucky_spin_logsInput, UserUncheckedCreateWithoutLucky_spin_logsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLucky_spin_logsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLucky_spin_logsInput, UserUncheckedUpdateWithoutLucky_spin_logsInput>
  }

  export type UserUpdateWithoutLucky_spin_logsInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLucky_spin_logsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    offer_claim_logs?: OfferClaimLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutOffer_claim_logsInput = {
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOffer_claim_logsInput = {
    id?: number
    status?: string
    phone_number: string
    e_wallet_number?: string | null
    name_in_wallet?: string | null
    user_code?: string | null
    recovery_code?: string | null
    two_fa_secret?: string | null
    is_2fa_verified?: boolean
    password: string
    fp_id: string
    ip: string
    lucky_spin?: number
    balance?: Decimal | DecimalJsLike | number | string
    turn_over?: Decimal | DecimalJsLike | number | string
    invited_by?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    game_transactions?: GameTransactionUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    otp_records?: OtpRecordUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    lucky_spin_logs?: LuckySpinLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOffer_claim_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOffer_claim_logsInput, UserUncheckedCreateWithoutOffer_claim_logsInput>
  }

  export type UserUpsertWithoutOffer_claim_logsInput = {
    update: XOR<UserUpdateWithoutOffer_claim_logsInput, UserUncheckedUpdateWithoutOffer_claim_logsInput>
    create: XOR<UserCreateWithoutOffer_claim_logsInput, UserUncheckedCreateWithoutOffer_claim_logsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOffer_claim_logsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOffer_claim_logsInput, UserUncheckedUpdateWithoutOffer_claim_logsInput>
  }

  export type UserUpdateWithoutOffer_claim_logsInput = {
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOffer_claim_logsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    e_wallet_number?: NullableStringFieldUpdateOperationsInput | string | null
    name_in_wallet?: NullableStringFieldUpdateOperationsInput | string | null
    user_code?: NullableStringFieldUpdateOperationsInput | string | null
    recovery_code?: NullableStringFieldUpdateOperationsInput | string | null
    two_fa_secret?: NullableStringFieldUpdateOperationsInput | string | null
    is_2fa_verified?: BoolFieldUpdateOperationsInput | boolean
    password?: StringFieldUpdateOperationsInput | string
    fp_id?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lucky_spin?: IntFieldUpdateOperationsInput | number
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    turn_over?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    invited_by?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    game_transactions?: GameTransactionUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    otp_records?: OtpRecordUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    lucky_spin_logs?: LuckySpinLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type GameTransactionCreateManyUserInput = {
    id?: number
    trans_id: string
    type: string
    amount: Decimal | DecimalJsLike | number | string
    game_code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    type: $Enums.TransactionType
    trx_id?: string | null
    sign?: string | null
    status?: $Enums.TransactionStatus
    method?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpRecordCreateManyUserInput = {
    id?: number
    otp: string
    fingerprint_id?: string | null
    used?: boolean
    createdAt?: Date | string
  }

  export type VoucherCreateManyUserInput = {
    id?: number
    code: string
    amount: Decimal | DecimalJsLike | number | string
    collected?: boolean
    collected_at?: Date | string | null
    message?: string | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type LuckySpinLogCreateManyUserInput = {
    id?: number
    winning_index: string
    prize_label: string
    createdAt?: Date | string
  }

  export type OfferClaimLogCreateManyUserInput = {
    id?: number
    offer_code: $Enums.OfferCode
    createdAt?: Date | string
  }

  export type GameTransactionUpdateWithoutUserInput = {
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    trans_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    game_code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    trx_id?: NullableStringFieldUpdateOperationsInput | string | null
    sign?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordUpdateWithoutUserInput = {
    otp?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpRecordUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    otp?: StringFieldUpdateOperationsInput | string
    fingerprint_id?: NullableStringFieldUpdateOperationsInput | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    collected?: BoolFieldUpdateOperationsInput | boolean
    collected_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LuckySpinLogUpdateWithoutUserInput = {
    winning_index?: StringFieldUpdateOperationsInput | string
    prize_label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LuckySpinLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    winning_index?: StringFieldUpdateOperationsInput | string
    prize_label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LuckySpinLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    winning_index?: StringFieldUpdateOperationsInput | string
    prize_label?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferClaimLogUpdateWithoutUserInput = {
    offer_code?: EnumOfferCodeFieldUpdateOperationsInput | $Enums.OfferCode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferClaimLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    offer_code?: EnumOfferCodeFieldUpdateOperationsInput | $Enums.OfferCode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OfferClaimLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    offer_code?: EnumOfferCodeFieldUpdateOperationsInput | $Enums.OfferCode
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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