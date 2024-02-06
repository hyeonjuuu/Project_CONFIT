// interface UserSessionData2 {
//   session: {
//     access_token: string
//     expires_at?: number | undefined
//     expires_in: number
//     refresh_token: string
//     token_type: string
//     user: {
//       app_metadata: {
//         provider: string
//         providers: string[]
//       }
//       aud: string
//       confirmed_at: string
//       created_at: string
//       email: string
//       email_confirmed_at: string
//       id: string
//       identities: []
//       last_sign_in_at: string
//       phone: string
//       role: string
//       updated_at: string
//       user_metadata: {}
//     }
//   }

//   user?: {
//     app_metadata: {
//       provider: string
//       providers: string[]
//     }
//     aud: string
//     confirmed_at: string
//     created_at: string
//     email: string
//     email_confirmed_at: string
//     id: string
//     identities: []
//     last_sign_in_at: string
//     phone: string
//     role: string
//     updated_at: string
//     user_metadata: {}
//   }
// }

// // interface UserSessionData {
// //   session?: UserSessionItems
// // }

// // interface UserSessionItems {
// //   access_token: string
// //   expires_at?: number | undefined
// //   expires_in: number
// //   refresh_token: string
// //   token_type: string
// //   user: {
// //     app_metadata: {
// //       provider: string
// //       providers: string[] // 추가된 속성
// //     }
// //     aud: string
// //     confirmed_at: string
// //     created_at: string
// //     email: string
// //     email_confirmed_at: string
// //     id: string
// //     identities: []
// //     last_sign_in_at: string
// //     phone: string
// //     role: string
// //     updated_at: string
// //     user_metadata: {}
// //   }
// // }

// interface UserSessionData1 {
//   session: {
//     access_token: string
//     expires_at: number | undefined
//     expires_in: number
//     refresh_token: string
//     token_type: string
//     user: {
//       app_metadata: {
//         provider: string
//         providers: string[]
//       }
//       aud: string
//       confirmed_at: string
//       created_at: string
//       email: string
//       email_confirmed_at: string
//       id: string
//       identities: []
//       last_sign_in_at: string
//       phone: string
//       role: string
//       updated_at: string
//       user_metadata: {}
//     }
//   }

//   user: {
//     app_metadata: {
//       provider: string
//       providers: string[]
//     }
//     aud: string
//     confirmed_at: string
//     created_at: string
//     email: string
//     email_confirmed_at: string
//     id: string
//     identities: []
//     last_sign_in_at: string
//     phone: string
//     role: string
//     updated_at: string
//     user_metadata: {}
//   }
// }

// /* -------------------------------------------------------------------------- */

// interface AppMetadata {
//   provider: string
//   providers: string[]
// }

// interface Identity {
//   identity_id: string
//   id: string
//   user_id: string
//   identity_data: Record<string, unknown>
//   provider: string
//   // ... 다른 필드 정의
// }

// interface Session {
//   access_token: string
//   expires_at: number
//   expires_in: number
//   refresh_token: string
//   token_type: string
//   user: User
// }

// interface User {
//   app_metadata: AppMetadata
//   aud: string
//   confirmed_at: string
//   created_at: string
//   email: string
//   email_confirmed_at: string
//   id: string
//   identities: Identity[]
//   last_sign_in_at: string
//   phone: string
//   role: string
//   updated_at: string
//   user_metadata: {}
// }

// interface UserSessionData {
//   session?: Session | null
// }

// type UserSessionType = {
//   session: {
//     access_token: string
//     expires_at: number
//     expires_in: number
//     refresh_token: string
//     token_type: string
//     user: {
//       AppMetadata: { provider: string; providers: [] }
//     }

//     aud: string
//     confirmed_at: string
//     created_at: string
//     email: string
//     email_confirmed_at: string
//     id: string
//     identities: []
//     last_sign_in_at: string
//     phone: string
//     role: string
//     updated_at: string
//     user_metadata: {}
//   }
// }
