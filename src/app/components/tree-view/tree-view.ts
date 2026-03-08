import { Component, Input } from '@angular/core';
import { TreeNode } from '../../interfaces/TreeNode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-view',
  imports: [CommonModule],
  templateUrl: './tree-view.html',
  styleUrl: './tree-view.scss',
})
export class TreeView {
  @Input() node!: any;

  toggle() {
    if (this.node.children && this.node.children.length > 0) {
      this.node.isOpen = !this.node.isOpen;
    }
  }
}
