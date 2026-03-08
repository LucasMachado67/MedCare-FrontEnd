export interface TreeNode {
    name: string;
    isOpen?: boolean;
    children?: TreeNode[];
    link?: string;
}