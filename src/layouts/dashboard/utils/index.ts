/* eslint-disable @typescript-eslint/no-explicit-any */

export const findParentTitle = (navigationData: any, childPath: string) => {
  for (const item of navigationData) {
    if (item.children) {
      // Check if the path exists in the children
      const child = item.children.find(
        (child: any) => child.path === childPath
      );
      if (child) {
        return item.title; // Return the parent's title
      }

      // Recursively check deeper levels
      const parentTitle: string = findParentTitle(item.children, childPath);
      if (parentTitle) {
        return parentTitle;
      }
    }
  }
  return null;
};
