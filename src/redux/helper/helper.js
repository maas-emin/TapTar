export function getGroupFiles(arr) {
  const result = [];
  const object = {};

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i].group_uid)) {
      result.push(arr[i].group_uid);
    }
  }

  for (let i = 0; i < result.length; i++) {
    object[result[i]] = {
      group_uid: '',
      type: '',
      files: [],
    };
  }

  for (let i = 0; i < arr.length; i++) {
    object[arr[i].group_uid].group_uid = arr[i].group_uid;
    object[arr[i].group_uid].tags_century = arr[i].tags_century;
    object[arr[i].group_uid].type = arr[i].type;
    object[arr[i].group_uid].title = arr[i].title;
    object[arr[i].group_uid].author = arr[i].author;
    object[arr[i].group_uid].location = arr[i].location;
    object[arr[i].group_uid].tags_information = arr[i].tags_information;
    object[arr[i].group_uid].comment = arr[i].comment;
    object[arr[i].group_uid].year = arr[i].year;
    object[arr[i].group_uid].files.push(arr[i]);
  }
  return Object.values(object);
}

// //Удаление файла
// case 'file/delete/success':
//   if (action.amount === 'one') {
//     if (action.format === 'image') {
//       return {
//         ...state,
//         materials: {
//           ...state.materials,
//           photo: {
//             ...state.materials.photo,
//             one: state.materials.photo.one.filter(
//               (item) => item.id !== action.id,
//             ),
//           },
//         },
//       };
//     }
//     if (action.format === 'application') {
//       return {
//         ...state,
//         materials: {
//           ...state.materials,
//           document: {
//             ...state.materials.document,
//             one: state.materials.document.one.filter(
//               (item) => item.id !== action.id,
//             ),
//           },
//         },
//       };
//     }
//     return {
//       ...state,
//       materials: {
//         ...state.materials,
//         [action.format]: {
//           ...state.materials[action.format],
//           one: state.materials[action.format].one.filter(
//             (item) => item.id !== action.id,
//           ),
//         },
//       },
//     };
//   }

//   if (action.amount === 'group') {
//     if (action.format === 'image') {
//       return {
//         ...state,
//         materials: {
//           ...state.materials,
//           photo: {
//             ...state.materials.photo,
//             group: state.materials.photo.group
//               .map((item) => {
//                 if (action.groupId === item.group_uid) {
//                   return {
//                     ...item,
//                     files: item.files.filter(
//                       (item) => item.id !== action.id,
//                     ),
//                   };
//                 }

//                 return item;
//               })
//               .filter((item) => item.files.length !== 0),
//           },
//         },
//       };
//     }
//     if (action.format === 'application') {
//       return {
//         ...state,
//         materials: {
//           ...state.materials,
//           document: {
//             ...state.materials.document,
//             group: state.materials.document.group
//               .map((item) => {
//                 if (action.groupId === item.group_uid) {
//                   return {
//                     ...item,
//                     files: item.files.filter(
//                       (item) => item.id !== action.id,
//                     ),
//                   };
//                 }

//                 return item;
//               })
//               .filter((item) => item.files.length !== 0),
//           },
//         },
//       };
//     }
//     return {
//       ...state,
//       materials: {
//         ...state.materials,
//         [action.format]: {
//           ...state.materials[action.format],
//           group: state.materials[action.format].group
//             .map((item) => {
//               if (action.groupId === item.group_uid) {
//                 return {
//                   ...item,
//                   files: item.files.filter((item) => item.id !== action.id),
//                 };
//               }

//               return item;
//             })
//             .filter((item) => item.files.length !== 0),
//         },
//       },
//     };
//   }

//   return state;
