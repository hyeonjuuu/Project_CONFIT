// interface UserImageDataItems {
//   data:
//     | {
//         publicUrl: string
//       }
//     | undefined
// }

interface UserImageData {
  data: UserImageDataItems | undefined
}

interface UserImageDataItems {
  publicUrl: string
}
