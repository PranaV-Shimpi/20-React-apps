// const useTraverseTree = () => {
//     // Add a file or folder in tree
//     // Can be optimised using Dynamic Programming
//     const insertNode = function (tree, folderId, item, isFolder) {
//       if (tree.id === folderId && tree.isFolder) {
//         tree.items.unshift({
//           id:new Date().getTime(),
//           name: item,
//           isFolder: isFolder,
//           items: []
//         });
  
//         return tree;
//       }
  
//       let latestNode = [];
//       latestNode = tree.items.map((ob) => {
//         return insertNode(ob, folderId, item, isFolder);
//       });
  
//       return { ...tree, items: latestNode };
//     };
  
//     const deleteNode = () => {}; // Do it Yourself
  
//     const renameNode = () => {}; // Do it Yourself
  
//     return { insertNode, deleteNode, renameNode };
//   };
  
//   export default useTraverseTree;

// const useTraverseTree = () => {
    
//     const insertNode = function (tree, folderId, item, isFolder) {
//       if (tree.id === folderId && tree.isFolder) {
//         tree.items.unshift({
//           id: new Date().getTime(),
//           name: item,
//           isFolder: isFolder,
//           items: [],
//         });
  
//         return tree;
//       }
  
//       let latestNode = [];
//       latestNode = tree.items.map((ob) => {
//         return insertNode(ob, folderId, item, isFolder);
//       });
  
//       return { ...tree, items: latestNode };
//     };
  
//     const deleteNode = function (tree, nodeId) {
//       let updatedTree = { ...tree };
  
//       updatedTree.items = updatedTree.items.filter((node) => {
//         if (node.id === nodeId) {
//           return false; // Exclude this node
//         } else if (node.items && node.items.length > 0) {
//           node.items = deleteNode(node, nodeId).items; // Recursively delete from children
//         }
//         return true;
//       });
  
//       return updatedTree;
//     };
  
//     const updateNode = function (tree, nodeId, newName) {
//       let updatedTree = { ...tree };
  
//       const findAndUpdate = (node) => {
//         if (node.id === nodeId) {
//           node.name = newName;
//           return true;
//         }
//         if (node.items && node.items.length > 0) {
//           for (let i = 0; i < node.items.length; i++) {
//             if (findAndUpdate(node.items[i])) {
//               return true;
//             }
//           }
//         }
//         return false;
//       };
  
//       findAndUpdate(updatedTree);
  
//       return updatedTree;
//     };
  
//     return { insertNode, deleteNode, updateNode };
//   };
  
//   export default useTraverseTree;


const useTraverseTree = () => {
    const insertNode = function (tree, folderId, item, isFolder, memo = {}) {
      if (!memo[tree.id]) {
        memo[tree.id] = { ...tree };
      }
  
      if (tree.id === folderId && tree.isFolder) {
        memo[tree.id].items = [
          {
            id: new Date().getTime(),
            name: item,
            isFolder: isFolder,
            items: [],
          },
          ...memo[tree.id].items,
        ];
        return memo[tree.id];
      }
  
      let updatedItems = memo[tree.id].items.map((ob) => {
        return insertNode(ob, folderId, item, isFolder, memo);
      });
  
      memo[tree.id].items = updatedItems;
  
      return memo[tree.id];
    };
  
    const deleteNode = function (tree, nodeId, memo = {}) {
      if (!memo[tree.id]) {
        memo[tree.id] = { ...tree };
      }
  
      memo[tree.id].items = memo[tree.id].items.filter((node) => {
        if (node.id === nodeId) {
          return false; // Exclude this node
        } else if (node.items && node.items.length > 0) {
          node.items = deleteNode(node, nodeId, memo).items; // Recursively delete from children
        }
        return true;
      });
  
      return memo[tree.id];
    };
  
    const updateNode = function (tree, nodeId, newName, memo = {}) {
      if (!memo[tree.id]) {
        memo[tree.id] = { ...tree };
      }
  
      const findAndUpdate = (node) => {
        if (node.id === nodeId) {
          node.name = newName;
          return true;
        }
        if (node.items && node.items.length > 0) {
          for (let i = 0; i < node.items.length; i++) {
            if (findAndUpdate(node.items[i])) {
              return true;
            }
          }
        }
        return false;
      };
  
      findAndUpdate(memo[tree.id]);
  
      return memo[tree.id];
    };
  
    return { insertNode, deleteNode, updateNode };
  };
  
  export default useTraverseTree;
  