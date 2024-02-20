// import { useState } from 'react'

// function StarRating() {
//   const [score, setScore] = useState<number>(0)
//   const [scoreFixed, setScoreFixed] = useState(score)

//   const handleLeftHalfEnter = (idx: number) => setScore(idx + 0.5)

//   const handleRightHalfEnter = (idx: number) => setScore(idx + 1)

//   const handleStarClick = () => {
//     setScoreFixed(score)
//   }

//   const handleStarLeave = () => {
//     if (score !== scoreFixed) {
//       setScore(scoreFixed)
//     }
//   }
//   return (
//     <div>
//       {Array(5)
//         .fill(0)
//         .map((i, idx) => (
//           <div key={idx} onClick={handleStarClick}>
//             {score - Math.floor(score) === 0.5 && Math.floor(score) === idx ? (
//               <FaStarHalfAlt
//                 key={idx}
//                 style={{ position: 'absolute' }}
//                 size={32}
//                 color="gold"
//               />
//             ) : idx + 1 > score ? (
//               <FaStar
//                 key={idx}
//                 style={{ position: 'absolute' }}
//                 size={32}
//                 color="lightGray"
//               />
//             ) : (
//               <FaStar
//                 key={idx}
//                 style={{ position: 'absolute' }}
//                 size={32}
//                 color="gold"
//               />
//             )}
//             <Left
//               key={idx + 'left'}
//               onMouseEnter={() => handleLeftHalfEnter(idx)}
//               onMouseLeave={handleStarLeave}
//             />
//             <Right
//               key={idx + 'right'}
//               onMouseEnter={() => handleRightHalfEnter(idx)}
//               onMouseLeave={handleStarLeave}
//             />
//           </div>
//         ))}
//     </div>
//   )
// }

// export default StarRating
