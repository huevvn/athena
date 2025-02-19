// "use client";

// export default function AbstractShapes() {
//     return (
//         <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
//             <div className="absolute w-[120vw] h-[120vh] flex items-center justify-center">
//                 {/* Gradient Circles */}
//                 <div className="absolute w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full filter blur-[100px] animate-move" />
//                 <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-500 to-green-500 rounded-full filter blur-[100px] animate-move delay-1" />
//                 <div className="absolute w-72 h-72 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full filter blur-[100px] animate-move delay-2" />
//                 <div className="absolute w-96 h-96 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full filter blur-[100px] animate-move delay-3" />
//                 <div className="absolute w-80 h-80 bg-gradient-to-br from-green-500 to-teal-500 rounded-full filter blur-[100px] animate-move delay-4" />
//             </div>

//             {/* Custom Animation Styles */}
//             <style jsx>{`
//                 @keyframes move {
//                     0% {
//                         transform: translate(0, 0) scale(1);
//                     }
//                     50% {
//                         transform: translate(30px, -30px) scale(1.2);
//                     }
//                     100% {
//                         transform: translate(0, 0) scale(1);
//                     }
//                 }
//                 .animate-move {
//                     animation: move 8s infinite ease-in-out alternate;
//                 }
//                 .delay-1 {
//                     animation-delay: 1s;
//                 }
//                 .delay-2 {
//                     animation-delay: 2s;
//                 }
//                 .delay-3 {
//                     animation-delay: 3s;
//                 }
//                 .delay-4 {
//                     animation-delay: 4s;
//                 }
//             `}</style>
//         </div>
//     );
// }
